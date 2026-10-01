export async function POST(request: Request) {
  let raw: unknown;

  try {
    raw = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const input = raw as Record<string, unknown>;

  if (input.company_fax) {
    console.warn("Contact form blocked: honeypot was filled.");

    return Response.json(
      { error: "Please try submitting the form again." },
      { status: 400 },
    );
  }

  function field(key: string, maxLength: number) {
    const value = input[key];
    return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
  }

  const name = field("name", 120);
  const brand = field("brand", 120);
  const website = field("website", 300);
  const email = field("email", 200);
  const industry = field("industry", 120);
  const service = field("service", 100);
  const goals = field("goals", 2000);
  const budget = field("budget", 120);
  const timeline = field("timeline", 120);
  const notes = field("notes", 2000);

  const services = [
    "The Blueprint",
    "The Sunday Session",
    "The Club Engine",
    "Not sure yet",
  ];

  if (
    !name ||
    !brand ||
    !email ||
    !goals ||
    !services.includes(service) ||
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
    console.error("Contact email environment variables are missing.");

    return Response.json(
      { error: "Email service is not configured." },
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

  const subjectBrand = brand.replace(/[\r\n]/g, " ").slice(0, 80);

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
        subject: `The Sunday Club inquiry — ${subjectBrand}`,
        text: details,
      }),
    });

    if (!response.ok) {
      console.error("Resend error:", await response.text());

      return Response.json(
        { error: "We couldn't send your application. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact email request failed:", error);

    return Response.json(
      { error: "We couldn't send your application. Please try again." },
      { status: 502 },
    );
  }
}
