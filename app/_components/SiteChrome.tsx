"use client";

import { useEffect, useState } from "react";
import { LINKS } from "../_lib/links";

export function SiteHeader({ dark = false, descriptor = "French dining · Piano · Cocktails · La Réserve", home = false }: { dark?: boolean; descriptor?: string; home?: boolean }) {
  const [open, setOpen] = useState(false);
  return <header className={`site-header ${dark ? "header-dark" : ""} ${home ? "home-header" : ""}`}>
    {!home && <div className="topline"><span>Diani Beach · Kenya</span><span>{descriptor}</span></div>}
    <div className="nav shell">
      <a className="brand" href="/">La Terrasse<small>Diani Beach</small></a>
      <nav className={open ? "open" : ""} aria-label="Main navigation">
        {home ? <><a href="#house">The House</a><a href="#experience">Experiences</a><a href="/journal#events">Events</a><a href="#cuisine">Cuisine</a><a href="#comptoir">Le Comptoir</a><a href="#reserve-lounge">La Réserve</a><a href="#gallery">Gallery</a><a href="#find-us">Contact</a></> : <><a href="/">The House</a><a href="/journal#events">Events</a><a href="/menu">La Terrasse Menu</a><a href="/bar">Le Comptoir</a><a href="/reserve">La Réserve</a><a href="/journal">Journal</a></>}
      </nav>
      <a className="nav-cta" href={LINKS.sevenRooms} target="_blank" rel="noreferrer">Reserve</a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
  </header>;
}

export function RevealManager() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}

export function Marquee() {
  return <div className="marquee"><span>LA TERRASSE · DIANI BEACH · FRENCH DINING · LE COMPTOIR · LA RÉSERVE · LA TERRASSE · DIANI BEACH · FRENCH DINING · LE COMPTOIR · LA RÉSERVE ·</span></div>;
}

export function Footer({ home = false }: { home?: boolean }) {
  return <>
    {!home && <><section className="visit"><div className="shell visit-grid reveal"><div><p className="eyebrow">Your table awaits</p><h2>Make an evening<br />of <em>it.</em></h2></div><div className="visit-copy"><p>Reserve your table at La Terrasse and let the evening unfold — from dinner to drinks, piano, whisky or cigars.</p><div className="action-row"><a className="button light" href={LINKS.sevenRooms} target="_blank" rel="noreferrer">Reserve via SevenRooms ↗</a><a className="text-link" href={LINKS.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div></div></section>
    <section className="location"><div className="shell location-grid reveal"><div><p className="eyebrow">Visit La Terrasse</p><h2>Diani Beach,<br /><em>Kenya.</em></h2><p>Diani Beach Road<br />Ukunda 80401, Kenya</p><a className="text-link" href={LINKS.maps} target="_blank" rel="noreferrer">Get directions ↗</a></div><div className="location-details"><div><span>Telephone</span><a href={LINKS.phone}>+254 707 779 811</a></div><div><span>Google Reviews</span><a href={LINKS.googleReviews} target="_blank" rel="noreferrer">Read our reviews ↗</a></div><div><span>Instagram</span><a href={LINKS.instagram} target="_blank" rel="noreferrer">@laterrassedianibeach</a></div><div><span>Reservations</span><a href={LINKS.sevenRooms} target="_blank" rel="noreferrer">SevenRooms ↗</a></div><div><span>Opening hours</span><p>Monday–Sunday · 11:30 am–12:00 am</p></div></div></div></section></>}
    <footer className="footer"><div className="shell"><div className="footer-grid"><div><a className="brand" href="/">La Terrasse<small>Diani Beach</small></a><p>French fine dining, live piano, Le Comptoir and La Réserve in the heart of Diani Beach.</p></div><div><h4>Explore</h4><a href="/menu">La Terrasse Menu</a><a href="/bar">Le Comptoir</a><a href="/reserve">La Réserve</a><a href="/journal#events">Events</a><a href="/#gallery">Gallery</a><a href="/journal">Journal</a></div><div><h4>Visit</h4><p>Diani Beach Road<br />Ukunda 80401, Kenya</p><a href={LINKS.maps} target="_blank" rel="noreferrer">Directions ↗</a></div><div><h4>Contact</h4><a href={LINKS.phone}>+254 707 779 811</a><a href={LINKS.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href={LINKS.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={LINKS.sevenRooms} target="_blank" rel="noreferrer">Reservations ↗</a></div></div><div className="footer-bottom"><span>© 2026 La Terrasse · Diani Beach</span><span>Privacy · <button type="button" className="cookie-settings-link" onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}>Cookies</button> · Terms</span></div></div></footer>
    <div className="floating"><a className="float-reserve" href={LINKS.sevenRooms} target="_blank" rel="noreferrer">RES</a><a href={LINKS.whatsapp} target="_blank" rel="noreferrer">WA</a></div>
    <RevealManager />
  </>;
}

export function InteriorHero({ eyebrow, title, copy, image, alt }: { eyebrow: string; title: React.ReactNode; copy: string; image: string; alt: string }) {
  return <section className="interior-hero"><img src={image} alt={alt} /><div className="interior-shade" /><div className="shell interior-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div></section>;
}
