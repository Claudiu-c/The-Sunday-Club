"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "light";
      size: "flexible";
      "response-field": boolean;
      "refresh-expired": "auto";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  remove: (widgetId: string) => void;
};

type TurnstileProps = {
  onToken: (token: string | null) => void;
  resetKey: number;
};

export default function Turnstile({ onToken, resetKey }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!ready || !siteKey || !containerRef.current) return;

    const api = (window as Window & { turnstile?: TurnstileApi }).turnstile;

    if (!api) return;

    let active = true;

    onToken(null);

    const widgetId = api.render(containerRef.current, {
      sitekey: siteKey,
      action: "contact",
      theme: "light",
      size: "flexible",
      "response-field": false,
      "refresh-expired": "auto",

      callback: (token) => {
        if (!active) return;

        setError(false);
        onToken(token);
      },

      "expired-callback": () => {
        if (active) onToken(null);
      },

      "error-callback": () => {
        if (!active) return;

        setError(true);
        onToken(null);
      },
    });

    return () => {
      active = false;
      api.remove(widgetId);
    };
  }, [ready, siteKey, resetKey, onToken]);

  return (
    <div>
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setReady(true)}
        onError={() => {
          setError(true);
          onToken(null);
        }}
      />

      <div ref={containerRef} />

      {(!siteKey || error) && (
        <p role="alert">
          Verification is unavailable. Please refresh the page or email us
          directly.
        </p>
      )}
    </div>
  );
}
