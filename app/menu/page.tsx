import type { Metadata } from "next";
import { Footer, InteriorHero, Marquee, SiteHeader } from "../_components/SiteChrome";
import { LINKS } from "../_lib/links";

export const metadata: Metadata = {
  title: "La Terrasse Menu | French Restaurant in Diani Beach",
  description: "Explore the La Terrasse à la carte menu: French-inspired cuisine, coastal ingredients and signature dishes in Diani Beach, Kenya.",
  alternates: { canonical: "/menu" },
};

const sections = [
  ["Starters", [
    ["Classic Minestrone", "Seasonal vegetables, gnocchi pasta & Parmesan.", "1,400"],
    ["French Onion Soup", "Slow-cooked onions, rich beef broth, toasted bread gratinated with aged Comté.", "1,400"],
    ["Crispy Spring Rolls", "Vegetable or chicken, Thai dipping sauce.", "1,400"],
    ["Beef Carpaccio", "Beef fillet, Parmesan, rocket and aged balsamic.", "1,600"],
    ["Tuna Tartare with Mango", "Hand-cut tuna tartare with ripe mango and a delicate citrus dressing.", "1,600"],
    ["Fine Tartelette Avocado & Prawn", "On a crisp, fine pastry with cocktail dressing.", "1,600"],
    ["Fresh Premium Gazi Bay Oysters", "Fresh oyster on a bed of ice with mignonette, lemon & homemade bread.", "1,600"],
    ["Caesar Salad La Terrasse", "Romaine, Parmesan, croutons and Caesar dressing.", "1,800"],
    ["Seafood Ravioli", "Served in a delicate shellfish broth with truffle.", "1,800"],
    ["Beef Tartare", "Hand-cut beef, traditional condiments and toasted bread.", "1,900"],
    ["Marinière Mussels", "Premium mussels in a white wine, shallot & parsley broth and toasted bread.", "2,200"],
    ["Crab, Mango & Avocado Cylinder", "Fresh crab, mango, avocado, lime, Chantilly and micro mint.", "2,400"],
    ["Smoked Salmon Plate", "Toasted country bread, Isigny AOP butter and salmon caviar.", "2,600"],
    ["Duck Foie Gras", "Toasted brioche, homemade fig chutney and fleur de sel.", "2,900"],
  ]],
  ["Fish & Seafood", [
    ["Calamari à la Plancha", "Garlic & parsley butter.", "2,400"],
    ["Catch of the Day", "Red snapper fillet, delicate meunière sauce.", "2,600"],
    ["Seared Tuna Steak", "Sesame-crusted, rare centre.", "2,800"],
    ["Mediterranean Grilled Octopus", "Sauce gribiche.", "2,900"],
    ["Queen Prawns", "Garlic & parsley butter.", "2,900"],
    ["King Prawns", "Garlic & parsley butter.", "3,800"],
    ["Jumbo Prawns", "Garlic & parsley or lemon butter sauce.", "4,800"],
    ["Grilled Lobster", "Champenoise sauce or lemon butter.", "1,300 / 100g"],
    ["Lobster Thermidor option", "Add the Thermidor preparation to your grilled lobster.", "+1,400"],
    ["Seafood Platter · For Two", "Grilled lobster, prawns, octopus, calamari, stuffed crab, oysters and mussels.", "11,800"],
  ]],
  ["Meat", [
    ["Beef Bourguignon", "Slow-braised beef in Burgundy red wine with pearl onions, mushrooms & carrots.", "2,600"],
    ["Filet Mignon 250g · Kenya Origin", "Premium Kenyan beef fillet, peppercorn sauce.", "3,000"],
    ["Prime Chateaubriand 250g · SA", "The finest centre-cut of premium South African beef, Bordelaise or peppercorn sauce.", "3,400"],
    ["Ribeye Black Angus 250g · SA", "Premium South African ribeye, rich marbling, Béarnaise sauce.", "3,800"],
    ["Surf & Turf", "Premium South African beef tenderloin, grilled king prawns & shellfish reduction.", "4,200"],
    ["French Lamb Rack · SA", "Premium South African lamb, renowned for its tenderness, herb crust & rich lamb reduction.", "4,400"],
    ["Prime Wagyu Ribeye 300g · SA", "Premium South African Wagyu ribeye, grilled to perfection and a rich beef jus.", "10,400"],
    ["Tomahawk 1kg · For Two · SA", "Premium South African tomahawk, chimichurri sauce and Café de Paris butter.", "11,800"],
  ]],
  ["Poultry", [
    ["Chicken Supreme", "Chicken breast, delicate Forestière mushroom sauce.", "2,400"],
    ["Grilled Spring Chicken", "Young baby coquelet, light jus.", "2,600"],
    ["Duck Confit", "Traditional slow-cooked duck leg, rich duck jus.", "2,800"],
    ["Duck Breast à l’Orange", "Pan-seared duck breast, delicious orange sauce.", "3,000"],
    ["Stuffed Chicken Ballotine", "French-style stuffed chicken, morels & Vin Jaune sauce.", "3,200"],
  ]],
  ["Pasta & Risotto", [
    ["Penne all’Arrabbiata or Pomodoro", "Spicy tomato sauce, basil and aged Parmesan.", "2,400"],
    ["Saffron Risotto", "Creamy saffron risotto with aged Parmesan.", "2,800"],
    ["Tagliolini & Creamy Aged Parmesan", "Fresh tagliolini coated in a rich aged Parmesan cream.", "3,400"],
    ["Ravioli with Truffle & Chanterelles", "Homemade ravioli, truffle & porcini mushrooms.", "3,800"],
    ["Tagliatelle Frutti di Mare", "Prawns, calamari, octopus, mussels & a light pomodoro.", "4,200"],
    ["Lobster Linguine Aglio", "Fresh lobster, garlic and extra virgin olive oil.", "4,600"],
  ]],
] as const;

const slug = (s: string) => s.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
export default function Menu() { return <main><SiteHeader /><InteriorHero eyebrow="À la carte" title={<>The <em>Menu.</em></>} copy="French-inspired dishes, coastal ingredients and a generous sense of occasion." image="/premium/dining-04.jpg" alt="Elegant La Terrasse dining room" /><Marquee /><nav className="menu-nav"><div className="shell">{sections.map(([name]) => <a key={name} href={`#${slug(name)}`}>{name}</a>)}</div></nav><section className="menu-wrap shell">{sections.map(([name, items], idx) => <section className="menu-section reveal" id={slug(name)} key={name}><div><p className="eyebrow">Food menu · 0{idx + 1}</p><h2>{name}</h2></div><div className="menu-items">{items.map(([item, desc, price]) => <article key={item}><div><h3>{item}</h3><span>{price}</span></div><p>{desc}</p></article>)}</div></section>)}<aside className="menu-note"><p>All prices are in Kenyan Shillings. A discretionary 5% service charge may be added to your bill.</p><p>Dress code: Elegant smart-casual. No beachwear.</p><a className="button dark" href={LINKS.sevenRooms} target="_blank" rel="noreferrer">Reserve a table ↗</a></aside></section><Footer /></main>; }
