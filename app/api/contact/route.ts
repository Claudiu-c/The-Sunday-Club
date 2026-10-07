export const runtime = "nodejs";

const MAX_BODY_BYTES = 32 * 1024;

const allowedServices = [
  "The Blueprint",
  "The Sunday Session",
  "The Club Engine",
  "Not sure yet",
];

const sendError = () =>
  Response.json(
    {
      error: "We couldn't send your application. Please try again.",
    },
    { status: 502 },
  );

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.split(";")[0].trim().toLowerCase() !== "application/json") {
    return Response.json({ error: "Invalid request format." }, { status: 415 });
  }

  if (!request.body) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();

  let body = "";
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      totalBytes += value.byteLength;

      if (totalBytes > MAX_BODY_BYTES) {
        await reader.cancel();

        return Response.json(
          { error: "Your application is too large." },
          { status: 413 },
        );
      }

      body += decoder.decode(value, { stream: true });
    }

    body += decoder.decode();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  } finally {
    reader.releaseLock();
  }

  let raw: unknown;

  try {
    raw = JSON.parse(body);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const input = raw as Record<string, unknown>;

  if (input.company_fax) {
    return Response.json(
      { error: "Please try submitting the form again." },
      { status: 400 },
    );
  }

  function field(key: string, maxLength: number, multiline = false): string {
    const value = input[key];

    if (value === undefined) return "";

    if (typeof value !== "string" || value.length > maxLength) {
      throw new Error("Invalid field.");
    }

    // Câmpurile lungi permit rânduri noi și taburi.
    const invalidCharacters = multiline
      ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/
      : /[\u0000-\u001F\u007F]/;

    if (invalidCharacters.test(value)) {
      throw new Error("Invalid field.");
    }

    return value.trim();
  }

  let fields: Record<string, string>;

  try {
    fields = {
      name: field("name", 120),
      brand: field("brand", 120),
      website: field("website", 300),
      email: field("email", 200),
      industry: field("industry", 120),
      service: field("service", 100),
      goals: field("goals", 2000, true),
      budget: field("budget", 120),
      timeline: field("timeline", 120),
      notes: field("notes", 2000, true),
    };
  } catch {
    return Response.json(
      { error: "Please check your fields and their length." },
      { status: 400 },
    );
  }

  const {
    name,
    brand,
    website,
    email,
    industry,
    service,
    goals,
    budget,
    timeline,
    notes,
  } = fields;

  if (
    !name ||
    !brand ||
    !email ||
    !goals ||
    !allowedServices.includes(service) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json(
      { error: "Please check the required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact email configuration is missing.");

    return Response.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

  const allowedHostnames = (process.env.TURNSTILE_ALLOWED_HOSTNAMES ?? "")
    .split(",")
    .map((hostname) => hostname.trim())
    .filter(Boolean);

  if (!turnstileSecret || allowedHostnames.length === 0) {
    console.error("Turnstile configuration is missing.");

    return Response.json(
      { error: "Verification service is not configured." },
      { status: 503 },
    );
  }

  const token = input.turnstileToken;

  if (typeof token !== "string" || !token.trim() || token.length > 2048) {
    return Response.json(
      { error: "Please complete the verification." },
      { status: 400 },
    );
  }

  try {
    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: turnstileSecret,
          response: token,
        }),
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!verificationResponse.ok) {
      throw new Error("Verification service failed.");
    }

    const verification: unknown = await verificationResponse.json();

    if (
      !verification ||
      typeof verification !== "object" ||
      Array.isArray(verification)
    ) {
      throw new Error("Invalid verification response.");
    }

    const result = verification as Record<string, unknown>;

    if (
      result.success !== true ||
      result.action !== "contact" ||
      typeof result.hostname !== "string" ||
      !allowedHostnames.includes(result.hostname)
    ) {
      return Response.json(
        { error: "Verification failed. Please try again." },
        { status: 400 },
      );
    }
  } catch {
    console.error("Turnstile verification service failed.");

    return Response.json(
      { error: "Verification is unavailable. Please try again." },
      { status: 503 },
    );
  }

  const details = [
    ["Name", name],
    ["Brand / Company", brand],
    ["Website / Instagram", website],
    ["Email", email],
    ["Industry", industry],
    ["Interested in", service],
    ["Looking to achieve", goals],
    ["Approximate budget", budget],
    ["Ideal start", timeline],
    ["Anything else", notes],
  ]
    .map(([label, value]) => `${label}:\n${value || "—"}`)
    .join("\n\n");

  const subjectBrand = brand.slice(0, 80);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `The Sunday Club inquiry — ${subjectBrand}`,
        text: details,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("Resend rejected the contact email:", response.status);
      return sendError();
    }

    return Response.json({ ok: true });
  } catch {
    console.error("Contact email request failed or timed out.");
    return sendError();
  }
}
