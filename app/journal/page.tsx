import type { Metadata } from "next";
import { Footer, InteriorHero, SiteHeader } from "../_components/SiteChrome";
import { LINKS } from "../_lib/links";
import { getAllArticles } from "./articles";

export const metadata: Metadata = {
  title: "La Terrasse Journal | French Cuisine & Diani Beach",
  description: "Stories from La Terrasse on French cuisine, wine, hospitality and dining in Diani Beach, Kenya.",
  alternates: { canonical: "/journal" },
};

export const dynamic = "force-dynamic";

export default async function Journal() {
  const articles = await getAllArticles();
  return <main>
    <SiteHeader />
    <InteriorHero eyebrow="Discover" title={<>Stories from<br /><em>the house.</em></>} copy="Cuisine, wine, culture and the details that shape an evening at La Terrasse." image="/brand/exterior.jpg" alt="La Terrasse Diani Beach at dusk" />

    <section id="events" className="section events journal-events">
      <div className="shell">
        <div className="events-head reveal">
          <div><p className="eyebrow">What’s on</p><h2>Evenings with<br /><em>a little more.</em></h2></div>
          <div><p className="lead">Live music, late-night dancing and culinary highlights at La Terrasse.</p><p>Discover our recurring house events and memorable moments from the table.</p></div>
        </div>
        <div className="events-grid">
          <article className="event-card reveal">
            <figure><img src="/events/after-dinner.jpeg" alt="After Dinner at Le Comptoir, Friday and Saturday from 11 pm" /><span>Friday &amp; Saturday</span></figure>
            <div className="event-card-copy"><p className="eyebrow">Le Comptoir · From 11 pm</p><h3>After Dinner</h3><p>Cocktails, champagne, DJ and dancing. Stay a little longer every Friday and Saturday night.</p><a className="text-link dark-link" href={LINKS.sevenRooms} target="_blank" rel="noreferrer">Reserve your evening ↗</a></div>
          </article>
          <article className="event-card reveal">
            <figure><img src="/events/hope-irakoze-sunday.jpeg" alt="Singer Hope Irakoze performing live at La Terrasse every Sunday" /><span>Every Sunday</span></figure>
            <div className="event-card-copy"><p className="eyebrow">Live at La Terrasse</p><h3>Hope Irakoze</h3><p>Ease into Sunday evening with the warm live sound of Hope Irakoze at Le Comptoir.</p><a className="text-link dark-link" href={LINKS.sevenRooms} target="_blank" rel="noreferrer">Reserve a table ↗</a></div>
          </article>
        </div>
      </div>
    </section>

    <section className="section journal"><div className="shell journal-grid">{articles.map((article, i) => <article className="journal-card reveal" key={article.slug}><a className="journal-card-link" href={`/journal/${article.slug}`} aria-label={`Read ${article.title}`}><figure><img src={article.image} alt={article.imageAlt} /><span>{String(i + 1).padStart(2, "0")}</span></figure><div><small>{article.date}</small><h2>{article.title}</h2><p>{article.summary}</p><span className="text-link dark-link">Read the story →</span></div></a></article>)}</div></section>
    <Footer />
  </main>;
}
