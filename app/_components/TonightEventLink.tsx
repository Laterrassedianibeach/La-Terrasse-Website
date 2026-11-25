"use client";

import { useEffect, useState } from "react";

// 23 November 2026, 04:00 in Diani Beach (East Africa Time).
const EVENT_END = Date.parse("2026-11-23T01:00:00Z");

export function TonightEventLink() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(Date.now() < EVENT_END);
    update();
    const timer = window.setTimeout(update, Math.max(0, EVENT_END - Date.now()));
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  if (!visible) return null;
  return <a className="button tonight-event-link" href="https://sevn.ly/xiYiWC6N" target="_blank" rel="noreferrer">Book tonight’s event&nbsp; →</a>;
}
