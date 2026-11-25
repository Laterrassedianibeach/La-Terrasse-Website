import type { Metadata } from "next";
import { Footer, Marquee, SiteHeader } from "./_components/SiteChrome";
import { TonightEventLink } from "./_components/TonightEventLink";
import { LINKS } from "./_lib/links";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "La Terrasse Diani Beach | French Fine Dining, Piano Bar & La Réserve",
  description: "La Terrasse Diani Beach is a French fine dining house in the heart of Diani Beach, with refined cuisine, curated wines, live piano, cocktails and La Réserve whisky & cigar lounge.",
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://laterrasse.co.ke/#restaurant",
  name: "La Terrasse Diani Beach",
  url: "https://laterrasse.co.ke/",
  image: "https://laterrasse.co.ke/og.png",
  telephone: "+254707779811",
  priceRange: "$$$$",
  servesCuisine: "French",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Diani Beach Road",
    addressLocality: "Ukunda",
    postalCode: "80401",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -4.2979843,
    longitude: 39.5795091,
  },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "11:30",
    closes: "00:00",
  }],
};

const dishes = [
  ["/brand/dish-duck-breast.jpg", "Sliced duck breast with seasonal vegetables"],
  ["/brand/dish-creamy-pasta.jpg", "Creamy house pasta served in La Terrasse tableware"],
  ["/brand/dish-01.jpg", "Contemporary plated dish at La Terrasse"],
  ["/brand/gallery-seafood-platter.jpg", "La Terrasse seafood platter"],
  ["/brand/gallery-wellington.jpg", "Beef Wellington at La Terrasse"],
  ["/brand/gallery-gambas.jpg", "Grilled gambas on a La Terrasse plate"],
  ["/brand/gallery-creme-brulee.jpg", "Crème brûlée served at La Terrasse"],
  ["/brand/gallery-surf-and-turf.jpg", "Surf and turf at La Terrasse"],
  ["/brand/gallery-meuniere.jpg", "Fish meunière served at La Terrasse"],
  ["/brand/gallery-pavlova.jpg", "Pavlova with mango and passion fruit at La Terrasse"],
  ["/brand/gallery-filet-mignon.jpg", "Filet mignon with vegetables at La Terrasse"],
  ["/brand/gallery-octopus.jpg", "Octopus served at La Terrasse"],
];

export default function Home() {
  return <main className="home"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} /><SiteHeader home descriptor="French fine dining · Piano bar · Cocktails · La Réserve" />
    <section className="hero"><img src="/brand/home-hero.jpg" alt="Elegant dining room at La Terrasse Diani Beach" /><div className="hero-shade" /><div className="hero-grain" /><div className="hero-copy shell"><h1>A French fine dining house<br className="hero-title-break" /> in the heart of Diani Beach.</h1><p className="hero-signature">The art of lingering.</p><div className="hero-actions"><a className="button gold" href={LINKS.sevenRooms} target="_blank" rel="noreferrer">Reserve your table</a><TonightEventLink /><a className="home-hero-link" href="#house">Discover La Terrasse <span aria-hidden="true">→</span></a></div></div><div className="hero-side">EST. · DIANI BEACH · KENYA</div></section>
    <section id="house" className="home-house"><div className="home-house-copy reveal"><div className="home-editorial-content"><div><p className="eyebrow">The House</p><h2>A house shaped by refined cuisine, attention to detail and the art of hospitality.</h2><div className="home-ornament" aria-hidden="true"><span>◆</span></div><p>Our professional team offers attentive service with care and precision. Our wine selection is thoughtfully curated, while live piano at dinner sets the tone for beautifully considered evenings.</p><p>La Terrasse is more than a restaurant. It is a distinctive experience for those who appreciate fine dining, true hospitality and the art of living.</p><a className="home-outline-button" href="#experience">Discover the house <span aria-hidden="true">→</span></a></div></div></div><img className="home-house-image" src="/brand/signature-tree.jpg" alt="The dining room at La Terrasse beneath the flowering tree" /></section>
    <section id="experience" className="home-experiences"><div className="home-experiences-copy reveal"><div className="home-editorial-content"><div><p className="eyebrow">The La Terrasse Experience</p><h2>Three experiences.<br /><em>One evening.</em></h2><div className="home-ornament" aria-hidden="true"><span>◆</span></div><p>From a refined dinner to signature cocktails and a private lounge, each space has its own atmosphere, inviting you to enjoy Diani in a different way.</p></div></div></div><div className="home-experience-cards"><a href="#cuisine" className="home-experience-card"><img src="/brand/signature-tree.jpg" alt="La Terrasse dining room" /><span><strong>The Table</strong><small>Fine dining</small><b>Discover&nbsp; →</b></span></a><a href="#comptoir" className="home-experience-card"><img src="/brand/le-comptoir-piano.jpg" alt="Le Comptoir piano bar" /><span><strong>Le Comptoir</strong><small>Piano &amp; cocktails</small><b>Discover&nbsp; →</b></span></a><a href="#reserve-lounge" className="home-experience-card"><img src="/brand/la-reserve-lounge.jpg" alt="La Réserve whisky and cigar lounge" /><span><strong>La Réserve</strong><small>Whisky &amp; cigars</small><b>Discover&nbsp; →</b></span></a></div></section>
    <section id="cuisine" className="home-kitchen"><div className="home-feature-copy reveal"><p className="eyebrow">From the kitchen</p><h2>Refined cuisine,<br /><em>served with sincerity.</em></h2><p>French culinary tradition, Mediterranean influences and the richness of Kenya’s coast.</p><a className="button gold" href="/menu">View the menu&nbsp; →</a></div><img src="/brand/waitress.jpg" alt="A La Terrasse team member serving water at the table" /></section>
    <section className="home-atmosphere"><blockquote>An atmosphere designed for staying<br /><em>a little longer.</em></blockquote><div className="home-ornament" aria-hidden="true"><span>◆</span></div><p>La Terrasse · Diani Beach</p></section>
    <section id="comptoir" className="home-venue"><div className="home-feature-copy reveal"><p className="eyebrow">Le Comptoir</p><h2>Piano &amp; cocktails.</h2><p>Live piano, signature cocktails and evenings that find their own rhythm.</p><a className="home-outline-button" href="/bar">Discover Le Comptoir <span aria-hidden="true">→</span></a></div><img src="/brand/le-comptoir-piano.jpg" alt="The piano and lounge at Le Comptoir" /></section>
    <section id="reserve-lounge" className="home-venue"><div className="home-feature-copy reveal"><p className="eyebrow">La Réserve</p><h2>Whisky &amp; cigars.</h2><p>A quieter room. A slower pace.<br />A different side of La Terrasse.</p><a className="home-outline-button" href="/reserve">Discover La Réserve <span aria-hidden="true">→</span></a></div><img src="/brand/la-reserve-lounge.jpg" alt="Leather seating in La Réserve whisky and cigar lounge" /></section>
    <section id="gallery" className="section gallery"><div className="shell reveal"><div className="gallery-head"><div><p className="eyebrow">A taste of La Terrasse</p><h2>Composed with care.<br /><em>Served with soul.</em></h2></div><a className="text-link dark-link" href={LINKS.instagram} target="_blank" rel="noreferrer">Follow the house ↗</a></div><div className="dish-gallery">{dishes.map(([src, alt], i) => <figure key={src} className={`dish-${i + 1}`}><img src={src} alt={alt} /></figure>)}</div></div></section>
    <section id="live" className="home-live"><img src="/brand/le-comptoir-piano.jpg" alt="Piano at Le Comptoir at La Terrasse" /><div className="home-live-shade" /><div className="home-live-copy reveal"><p className="eyebrow">Live at La Terrasse</p><h2>Dinner,<br /><em>accompanied by music.</em></h2><p>Live piano and intimate performances bring a natural rhythm to the evening, from the first glass to the last conversation.</p><a className="home-outline-button home-outline-light" href="/journal">Discover our evenings <span aria-hidden="true">→</span></a></div></section>
    <section className="home-pause"><h2>An evening shaped by good food,<br />music and the art of hospitality.</h2><div className="home-ornament" aria-hidden="true"><span>◆</span></div><p>La Terrasse · Diani Beach</p></section>
    <section id="find-us" className="home-location"><img src="/brand/exterior.jpg" alt="Exterior of La Terrasse Diani Beach" /><div className="home-feature-copy reveal"><p className="eyebrow">Find Us</p><h2>In the heart of<br />Diani Beach.</h2><p>Diani Beach Road,<br />Ukunda 80401, Kenya.</p><a className="button gold" href={LINKS.maps} target="_blank" rel="noreferrer">Get directions&nbsp; →</a></div></section>
    <section id="reservation" className="home-reservation"><img src="/brand/dining-moment.jpg" alt="An evening dining at La Terrasse" /><div className="home-reservation-copy reveal"><p className="eyebrow">Your Table Awaits</p><h2>Make an evening of it.</h2><p>Reserve your table at La Terrasse and let the evening unfold, from dinner and live piano to cocktails and late-evening conversations.</p><div className="home-reservation-actions"><a className="button light" href={LINKS.sevenRooms} target="_blank" rel="noreferrer">Reserve via SevenRooms&nbsp; →</a><a className="home-outline-button home-outline-light" href={LINKS.whatsapp} target="_blank" rel="noreferrer">WhatsApp&nbsp; →</a></div></div></section>
    <Footer home />
  </main>;
}
