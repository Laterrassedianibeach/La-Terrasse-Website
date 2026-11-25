"use client";

import { useEffect, useState } from "react";

const MEASUREMENT_ID = "G-BKVX3B1GHN";
const CONSENT_KEY = "la-terrasse-analytics-consent";
type Consent = "accepted" | "declined" | null;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
};

export function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent | "loading">("loading");

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    setConsent(stored === "accepted" || stored === "declined" ? stored : null);
    const openPreferences = () => setConsent(null);
    window.addEventListener("open-cookie-preferences", openPreferences);
    return () => window.removeEventListener("open-cookie-preferences", openPreferences);
  }, []);

  useEffect(() => {
    if (consent !== "accepted" || document.getElementById("la-terrasse-google-analytics")) return;

    const analyticsWindow = window as AnalyticsWindow;
    analyticsWindow.dataLayer ||= [];
    analyticsWindow.gtag ||= (...args: unknown[]) => analyticsWindow.dataLayer?.push(args);
    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag("config", MEASUREMENT_ID);

    const script = document.createElement("script");
    script.id = "la-terrasse-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }, [consent]);

  const choose = (choice: Exclude<Consent, null>) => {
    const wasAccepted = window.localStorage.getItem(CONSENT_KEY) === "accepted";
    window.localStorage.setItem(CONSENT_KEY, choice);
    setConsent(choice);
    if (choice === "declined" && wasAccepted) window.location.reload();
  };

  if (consent !== null) return null;

  return (
    <aside className="analytics-consent" role="dialog" aria-label="Analytics cookies">
      <p>We use optional analytics cookies to understand visits and improve the La Terrasse website.</p>
      <div>
        <button type="button" onClick={() => choose("declined")}>Decline</button>
        <button type="button" onClick={() => choose("accepted")}>Accept analytics</button>
      </div>
    </aside>
  );
}
