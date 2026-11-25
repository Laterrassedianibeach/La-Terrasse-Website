import type { Metadata } from "next";
import { Footer, InteriorHero, SiteHeader } from "../_components/SiteChrome";
import { LINKS } from "../_lib/links";

export const metadata: Metadata = {
  title: "Le Comptoir Diani Beach | Bar, Wine & Live Music",
  description: "Discover Le Comptoir at La Terrasse: cocktails, wine, Champagne, live music and late evenings in Diani Beach, Kenya.",
  alternates: { canonical: "/bar" },
};

type Wine = { name: string; price: string; region: string; pairings: string };
type Cocktail = { name: string; price: string; ingredients: string };

const cocktails: Cocktail[] = [
  { name: "Pink Lady", price: "1,350", ingredients: "Gin · Raspberry Heaven Scent · Egg white" },
  { name: "Picante", price: "1,390", ingredients: "Tequila reposado · Chilli · Coriander · Cucumber · Lime · Agave" },
  { name: "La Terrassie Negroni", price: "1,390", ingredients: "Infused gin · Campari · Vermouth Rosso · Orange · Rosemary" },
  { name: "Maombi Sour", price: "1,350", ingredients: "Gin · Tangerine & spice · Vermouth Bianco · Lime syrup · Lemon perfume" },
  { name: "Zenit", price: "1,350", ingredients: "Gin · Ginger · Lime · Turmeric · Coriander" },
  { name: "Watermelon Paloma", price: "1,400", ingredients: "Destilador tequila · Watermelon · Grapefruit soda · Lime · Salt · Chilli" },
  { name: "Heritage Spritz", price: "1,600", ingredients: "Elderflower liqueur · Campari · Vermouth Rosso · Grappa · Amarena · Bubbles" },
  { name: "Only Passion · Pornstar Collins", price: "1,400", ingredients: "Vodka · Luxardo aperitivo · Passion fruit · Vanilla cordial · Bubbles · Mint" },
  { name: "Smayash", price: "1,400", ingredients: "Gin · Orange yeast · Cucumber · Basil · Lime syrup · Ginger" },
];

const whiteWines: Wine[] = [
  { name: "Santa Cristina Bianco", price: "5,800", region: "Tuscany, Italy", pairings: "Crab · Fish · Chicken" },
  { name: "Chardonnay Bouchard Aîné & Fils", price: "6,200", region: "Burgundy, France", pairings: "Lobster linguine · Truffle dishes · Saffron risotto" },
  { name: "Viña Pomal Rioja Blanco", price: "6,400", region: "Rioja, Spain", pairings: "Salmon · Seafood ravioli · King prawns" },
  { name: "Sirius Bordeaux Blanc Famille Sichel", price: "6,600", region: "Bordeaux, France", pairings: "Surf & turf · Prawn cocktail · Tagliatelle frutti di mare" },
  { name: "Vergelegen Sauvignon Blanc", price: "7,200", region: "Stellenbosch, South Africa", pairings: "Oysters · King prawns · Salmon" },
  { name: "L’Expression de Sauternes AOC · Sweet", price: "7,400", region: "Sauternes, France", pairings: "Foie gras · Soft cheese · Desserts" },
  { name: "Pinot Grigio Fantinel", price: "7,600", region: "Friuli, Italy", pairings: "Seafood ravioli · Tagliatelle frutti di mare" },
  { name: "Pinot Grigio Ménage à Trois", price: "7,800", region: "California, USA", pairings: "Seafood · Fish · Tagliatelle frutti di mare" },
  { name: "Mâcon-Villages Bouchard Aîné & Fils", price: "8,400", region: "Mâcon, France", pairings: "Red snapper · Prawns · Octopus" },
  { name: "Bourgogne Chardonnay Louis Latour", price: "8,900", region: "Burgundy, France", pairings: "Lobster linguine · Surf & turf · Truffle dishes" },
  { name: "Gewürztraminer Gustave Lorentz", price: "9,400", region: "Alsace, France", pairings: "Duck à l’orange · Tuna · Red snapper · Shellfish" },
  { name: "Chablis Bouchard Aîné & Fils", price: "9,800", region: "Chablis, France", pairings: "Crab · King prawns · Oysters · Octopus" },
  { name: "Sancerre Pascal Jolivet", price: "11,800", region: "Loire Valley, France", pairings: "Prawn cocktail · Jumbo prawns · Oysters" },
  { name: "Pouilly-Fuissé Louis Latour", price: "16,800", region: "Pouilly-Fuissé, France", pairings: "Lobster linguine · Mussels · Truffle dishes" },
  { name: "Chablis Premier Cru Louis Latour", price: "22,000", region: "Chablis, France", pairings: "Shellfish · Oysters · Surf & turf · Crab" },
  { name: "Meursault Louis Latour", price: "28,000", region: "Meursault, France", pairings: "Truffle dishes · Seafood platter" },
];

const redWines: Wine[] = [
  { name: "La Vieille Ferme Rouge", price: "5,400", region: "Rhône Valley, France", pairings: "Beef bourguignon · Chicken · Bouillabaisse" },
  { name: "Tokara Premium Cabernet Sauvignon", price: "5,900", region: "Stellenbosch, South Africa", pairings: "Ribeye steak · Beef Wellington · Lamb" },
  { name: "Trumpeter Malbec", price: "6,200", region: "Mendoza, Argentina", pairings: "Beef Wellington · Ribeye · Beef bourguignon" },
  { name: "Famille Sirius Bordeaux Rouge", price: "6,400", region: "Bordeaux, France", pairings: "Duck à l’orange · Beef bourguignon · Chicken supreme" },
  { name: "Viña Pomal Rioja Crianza", price: "6,600", region: "Rioja, Spain", pairings: "Ribeye steak · Surf & turf · Chateaubriand" },
  { name: "Santa Cristina Toscana Rosso", price: "6,700", region: "Tuscany, Italy", pairings: "Duck à l’orange · Pasta · Truffle ravioli" },
  { name: "Famille Perrin Côtes du Rhône", price: "6,900", region: "Rhône Valley, France", pairings: "Lamb rack · Duck à l’orange · Beef Wellington" },
  { name: "Vergelegen Mill Red Blend", price: "7,200", region: "Stellenbosch, South Africa", pairings: "Ribeye steak · Lamb rack · Beef Wellington" },
  { name: "Kanonkop Kadette Cape Blend", price: "7,400", region: "Stellenbosch, South Africa", pairings: "Beef Wellington · Ribeye steak · Bourguignon" },
  { name: "Louis Latour Valmoissine Pinot Noir", price: "7,800", region: "Burgundy, France", pairings: "Duck à l’orange · Truffle dishes · Cheese" },
  { name: "Brouilly Louis Latour", price: "8,400", region: "Beaujolais, France", pairings: "Beef Wellington · Chateaubriand · Truffle dishes" },
  { name: "Bourgogne Rouge Cuvée Latour", price: "9,900", region: "Burgundy, France", pairings: "Beef Wellington · Ribeye · Filet mignon" },
  { name: "Château Beaumont Haut-Médoc", price: "10,800", region: "Bordeaux, France", pairings: "Ribeye steak · Lamb · Tomahawk" },
  { name: "Château Perron Lalande-de-Pomerol", price: "11,200", region: "Bordeaux, France", pairings: "Beef Wellington · Beef bourguignon · Truffle" },
  { name: "Château Saint-Pey Saint-Émilion", price: "12,000", region: "Bordeaux, France", pairings: "Beef Wellington · Duck à l’orange · Wagyu" },
  { name: "Margaux La Dame d’Angludet", price: "14,800", region: "Bordeaux, France", pairings: "Beef Wellington · Foie gras · Lamb rack · Tomahawk" },
  { name: "Châteauneuf-du-Pape Les Sinards", price: "16,800", region: "Rhône Valley, France", pairings: "Mushroom & truffle dishes · Tomahawk · Ribeye" },
  { name: "Ruffino Greppone Mazzi Brunello", price: "19,800", region: "Tuscany, Italy", pairings: "Aged cheese · Beef Wellington · Chateaubriand" },
  { name: "Margaux Château Angludet", price: "28,800", region: "Bordeaux, France", pairings: "Tomahawk · Duck à l’orange · Wagyu" },
];

const roseWines: Wine[] = [
  { name: "Kanonkop Kadette Pinotage Rosé", price: "5,800", region: "Stellenbosch, South Africa", pairings: "Salmon · Chicken · Crab" },
  { name: "Vergelegen Florence Rosé", price: "6,400", region: "Stellenbosch, South Africa", pairings: "Avocado prawn cocktail · Fish · Salads" },
  { name: "Studio by Miraval", price: "6,800", region: "Provence, France", pairings: "Salmon · King prawns · Seafood · Octopus" },
  { name: "Côte des Roses Rosé", price: "6,800", region: "Languedoc, France", pairings: "Lobster linguine · Seafood · Shellfish" },
  { name: "Domaine Tropez Rosé", price: "8,400", region: "Provence, France", pairings: "Surf & turf · Tuna · Seafood" },
  { name: "Château Miraval Rosé", price: "9,800", region: "Provence, France", pairings: "Lobster · Chanterelle truffle ravioli · Surf & turf" },
];

function WineSection({ id, index, title, note, wines }: { id: string; index: string; title: string; note: string; wines: Wine[] }) {
  return <section className="wine-category" id={id}>
    <header className="wine-category-head"><span>{index}</span><div><p className="eyebrow">The cellar</p><h3>{title}</h3><p>{note}</p></div></header>
    <div className="wine-list">{wines.map((wine) => <article className="wine-item" key={wine.name}><div className="wine-title"><h4>{wine.name}</h4><span>{wine.price}</span></div><p className="wine-region">{wine.region}</p><p className="wine-pairing"><small>Pairing</small>{wine.pairings}</p></article>)}</div>
  </section>;
}

export default function Bar() {
  return <main><SiteHeader /><InteriorHero eyebrow="Le Comptoir · Bar & Café" title={<>Where the evening<br /><em>finds its rhythm.</em></>} copy="A place for a first glass, a final pour and every conversation in between." image="/brand/le-comptoir-piano.jpg" alt="Le Comptoir piano bar beneath the signature fuchsia tree" />
    <section className="section"><div className="shell intro-grid reveal"><div className="section-index"><span>I</span><div><p className="eyebrow">The bar</p><small>From aperitif to after dinner.</small></div></div><div><h2>The social heart<br />of <em>La Terrasse.</em></h2><p className="lead">A bar and café shaped by attentive service, signature cocktails and live piano.</p><p>Come for a drink, stay for dinner, or let the evening unfold at its own pace.</p></div></div></section>
    <section className="bar-cards shell reveal"><article><span>01</span><h3>Cocktails</h3><p>Classic foundations and house signatures, prepared with balance and precision.</p><a className="text-link dark-link" href="#cocktails">View the collection ↓</a></article><article><span>02</span><h3>Wine & Champagne</h3><p>A selection designed to accompany both the menu and the mood of the evening.</p><a className="text-link dark-link" href="#wine-menu">Explore the cellar ↓</a></article><article><span>03</span><h3>Whisky & Spirits</h3><p>Explore the available collection by style, region or simply by the glass.</p></article></section>
    <section className="cocktail-menu" id="cocktails"><div className="shell cocktail-intro reveal"><div><p className="eyebrow">Le Comptoir · Cocktail collection</p><h2>Mixed with<br /><em>character.</em></h2></div><div><p className="lead">Nine house creations shaped by fruit, spice, herbs and the easy rhythm of Diani evenings.</p><p>All prices are in Kenyan shillings.</p></div></div><div className="shell cocktail-layout"><div className="cocktail-gallery reveal"><figure><img src="/bar/cocktail-passion.jpg" alt="Golden passion fruit cocktail served at Le Comptoir" /></figure><figure><img src="/bar/cocktail-dragonfruit.jpg" alt="Vibrant dragon fruit cocktail served at Le Comptoir" /></figure><figure><img src="/bar/cocktail-coconut.jpg" alt="Creamy lime cocktail served at Le Comptoir" /></figure><figure><img src="/bar/cocktail-signature.jpg" alt="La Terrasse signature cocktail with citrus and herbs" /></figure></div><div className="cocktail-list reveal">{cocktails.map((cocktail, index) => <article key={cocktail.name}><span>{String(index + 1).padStart(2, "0")}</span><div><div className="cocktail-title"><h3>{cocktail.name}</h3><b>{cocktail.price}</b></div><p>{cocktail.ingredients}</p></div></article>)}</div></div></section>
    <section className="wine-menu" id="wine-menu"><div className="shell wine-menu-intro reveal"><div><p className="eyebrow">Le Comptoir · Wine menu</p><h2>Chosen for<br /><em>the table.</em></h2></div><div><p className="lead">A cellar that moves from fresh coastal whites to generous reds and luminous rosés.</p><p>All prices are in Kenyan shillings. Pairing suggestions are offered as a guide—our team will be pleased to help you choose.</p></div></div>
      <nav className="wine-menu-nav" aria-label="Wine menu categories"><div className="shell"><a href="#white-wines">White</a><a href="#red-wines">Red</a><a href="#rose-wines">Rosé</a></div></nav>
      <div className="shell wine-menu-body"><WineSection id="white-wines" index="I" title="White" note="Fresh, mineral and generous styles for seafood, poultry and lighter dishes." wines={whiteWines} /><WineSection id="red-wines" index="II" title="Red" note="From supple Pinot Noir to structured Bordeaux and Rhône Valley classics." wines={redWines} /><WineSection id="rose-wines" index="III" title="Rosé" note="Bright coastal bottles for aperitif, seafood and warm Diani evenings." wines={roseWines} /><p className="wine-service-note">A discretionary 5% service charge may be added to your bill.</p></div>
    </section>
    <section className="bar-gallery"><img src="/premium/dining-01.jpg" alt="La Terrasse bar seating" /><img src="/premium/interior.jpg" alt="Piano and evening atmosphere" /><img src="/premium/dining-04.jpg" alt="La Terrasse interior at night" /></section>
    <section className="tonight"><div className="shell reveal"><p className="eyebrow">Tonight at La Terrasse</p><h2>Meet at<br /><em>Le Comptoir.</em></h2><div className="action-row"><a className="button light" href={LINKS.sevenRooms} target="_blank" rel="noreferrer">Reserve a table ↗</a><a className="text-link" href={LINKS.instagram} target="_blank" rel="noreferrer">Follow on Instagram ↗</a></div></div></section><Footer /></main>;
}
