export type JournalArticle = {
  slug: string;
  date: string;
  publishedAt?: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  introduction: string;
  sections: { title: string; paragraphs: string[] }[];
};

export const articles: JournalArticle[] = [
  {
    slug: "seafood-in-diani-beach",
    date: "24 August 2026",
    title: "Seafood in Diani Beach: What to Eat and How to Order",
    summary: "A practical guide to seasonality, Swahili flavours and asking better sourcing questions.",
    image: "/premium/dining-02.jpg",
    imageAlt: "A seafood dish prepared at La Terrasse Diani Beach",
    introduction: "Diani Beach is shaped by the Indian Ocean in more ways than its shoreline. Along Kenya’s southern coast, seafood belongs to the everyday language of the table: a fish chosen for the grill, coconut folded into a sauce, lime squeezed over squid, and rice set beside a fragrant curry.",
    sections: [
      { title: "Let the day’s catch lead", paragraphs: ["The best approach is often to arrive without a rigid checklist. Ask what is fresh, how the kitchen recommends preparing it and where it came from. A simply grilled fish can be every bit as memorable as a more elaborate plate when the catch and seasoning are in balance.", "Look for specificity. A clearly identified fish and a straightforward explanation of its preparation are more useful than a vague promise of luxury. Availability changes with weather, the season and the boats that have gone out that day."] },
      { title: "The flavours of the coast", paragraphs: ["Coastal cooking finds brightness in citrus, warmth in spice and depth in coconut. Kachumbari, fresh herbs, chilli and gently toasted aromatics can support the seafood without obscuring it. The pleasure comes from contrast: smoke and freshness, richness and acidity, tenderness and crisp texture.", "If you have dietary requirements, ask how stocks, sauces and cooking oils are prepared. A short conversation with the team is the easiest way to order confidently and allow the kitchen to guide you toward the best choice of the day."] },
      { title: "Order with curiosity", paragraphs: ["A memorable seafood meal in Diani is rarely about chasing one famous dish. Ask a few good questions, order with flexibility and give the kitchen room to recommend what suits the moment. That is how to eat with the coast rather than merely beside it."] },
    ],
  },
  {
    slug: "romantic-dinner-diani-beach",
    date: "21 August 2026",
    title: "Where to Have a Romantic Dinner in Diani Beach",
    summary: "How to choose the setting and book an evening that feels personal.",
    image: "/brand/signature-tree.jpg",
    imageAlt: "The signature illuminated tree at La Terrasse Diani Beach",
    introduction: "A romantic dinner in Diani Beach is less about finding the most elaborate room and more about choosing the right rhythm for the evening. The coast provides the atmosphere; thoughtful planning turns it into an occasion.",
    sections: [
      { title: "Choose the mood first", paragraphs: ["Decide what the evening should feel like before choosing a table. A sunset aperitif brings energy and colour, while a later reservation offers softer light and a quieter dining room. For conversation, ask for a table away from the busiest circulation paths.", "At La Terrasse, an evening can move naturally from dinner beneath the signature tree to a cocktail at Le Comptoir, and then to the quieter atmosphere of La Réserve."] },
      { title: "Share the occasion", paragraphs: ["When booking, mention an anniversary, honeymoon or birthday and explain what would make it special. A preferred table, a discreet dessert or a well-timed glass of Champagne usually creates more feeling than an overcomplicated surprise.", "Confirm dietary preferences at the same time so that the kitchen can prepare with care and the evening remains effortless once you arrive."] },
      { title: "Leave room to linger", paragraphs: ["The most memorable date nights are rarely hurried. Allow time for an aperitif, an unhurried meal and one final drink. Romance often lives in that extra half-hour when there is nowhere else you need to be."] },
    ],
  },
  {
    slug: "french-cuisine-in-diani-kenyan-terroir",
    date: "20 August 2026",
    title: "French Cuisine in Diani: Tradition Meets Kenyan Terroir",
    summary: "When classical technique supports the ingredients and rhythms of Kenya’s south coast.",
    image: "/brand/dish-01.jpg",
    imageAlt: "A French-inspired plate composed at La Terrasse",
    introduction: "French cuisine in Diani is at its most distinctive when classical technique supports, rather than overshadows, the ingredients and rhythms of Kenya’s south coast. Precision gives the plate structure; a sense of place gives it character.",
    sections: [
      { title: "Technique as a foundation", paragraphs: ["Sauces, careful roasting, pastry and disciplined preparation are part of the French culinary vocabulary. They matter because they create consistency and balance, not because they need to announce themselves.", "When technique is used with restraint, the ingredient remains the centre of the plate. A good sauce amplifies; it does not conceal. A garnish adds contrast; it does not distract."] },
      { title: "A coastal sense of place", paragraphs: ["The Indian Ocean, warm climate and changing seasons all influence what reaches a kitchen in Diani. Seafood, tropical fruit, herbs and vegetables invite brightness and freshness alongside the deeper flavours of a French dining tradition.", "That meeting point is not a fixed formula. It changes with availability and with the dish itself, allowing the menu to feel rooted in Kenya without losing the clarity of its inspiration."] },
      { title: "Hospitality completes the dish", paragraphs: ["French dining is also a way of looking after a table: attentive service, considered pacing and the pleasure of conversation between courses. At the coast, that sense of occasion can remain polished without becoming formal."] },
    ],
  },
  {
    slug: "mediterranean-influence-la-terrasse",
    date: "18 August 2026",
    title: "The Mediterranean Influence Behind La Terrasse",
    summary: "An approach to ingredients, balance and hospitality.",
    image: "/premium/hero.jpg",
    imageAlt: "The warm dining room at La Terrasse",
    introduction: "Mediterranean cooking is less a single cuisine than a way of approaching ingredients, balance and hospitality. It begins with clarity of flavour and continues in the unhurried way food is shared.",
    sections: [
      { title: "Clarity before complication", paragraphs: ["Vegetables with sweetness from the sun, fragrant herbs, citrus and good olive oil can create depth without heaviness. The aim is not to add more, but to understand what each ingredient contributes.", "This sensibility favours contrast and proportion: acidity against richness, fresh herbs against slow cooking, and clean finishes that invite the next bite."] },
      { title: "An influence, not a border", paragraphs: ["The Mediterranean is made up of many distinct culinary cultures. At La Terrasse, its influence is best understood as a set of principles rather than an attempt to reproduce one region: seasonality, warmth, generosity and respect for the ingredient.", "Those principles sit naturally beside French technique and the produce of Kenya’s coast, giving the kitchen space to create dishes that feel familiar yet particular to Diani."] },
      { title: "The rhythm of the table", paragraphs: ["Just as important as flavour is the way a meal unfolds. An aperitif, several courses and conversation without haste turn dinner into something larger than a sequence of plates. That rhythm is at the heart of La Terrasse."] },
    ],
  },
  {
    slug: "french-wine-in-diani-beach",
    date: "17 August 2026",
    title: "French Wine in Diani Beach",
    summary: "An approachable guide to choosing a bottle for the table.",
    image: "/premium/dining-03.jpg",
    imageAlt: "Wine served with dinner at La Terrasse Diani Beach",
    introduction: "Choosing French wine does not require memorising every appellation. Start with the mood of the meal, the dishes on the table and the style of wine you already enjoy. The right bottle is the one that makes dinner feel more complete.",
    sections: [
      { title: "Begin with style", paragraphs: ["Instead of beginning with a famous label, describe what you like: crisp or rounded, light or structured, fruit-forward or savoury. These simple preferences give the service team a clear direction.", "For a warm evening, freshness can be especially welcome. A bright white, rosé or lighter red may suit the climate and the first courses, while a more structured bottle can accompany richer sauces or carefully prepared meats."] },
      { title: "Pair the whole table", paragraphs: ["A wine does not need to mirror every flavour. Look for balance across the meal. Acidity can refresh after a rich bite, gentle tannin can frame meat, and a touch of sweetness can calm spice.", "When several dishes are being shared, choose versatility over a perfect theoretical match. A bottle that works gracefully across the table often creates the better experience."] },
      { title: "Ask, taste, enjoy", paragraphs: ["Share your preferred price range and ask why a bottle is being recommended. Good wine service should make the choice feel easier, never intimidating. Once the wine is poured, the most important thing is the pleasure it brings to the table."] },
    ],
  },
  {
    slug: "crepe-suzette-histoire-vraie-flambage",
    date: "23 July 2026",
    title: "Crêpe Suzette: More Than a Flame",
    summary: "The documented history and theatre of a citrus-flavoured classic.",
    image: "/brand/crepe-suzette-flambe.jpg",
    imageAlt: "Crêpe Suzette flambéed tableside at La Terrasse Diani Beach",
    introduction: "Crêpe Suzette possesses the elegance of those desserts whose name instantly evokes a scene: a pan, the fragrance of orange and a brief blue flame. That image is accurate, but it is only part of the story.",
    sections: [
      { title: "The dessert beneath the spectacle", paragraphs: ["At its heart, the dish is a composition of delicate crêpes and citrus butter. Orange brings perfume and acidity; butter carries the flavour; sugar creates gloss and depth. The balance matters before any flame appears.", "Tableside flambé has become its most theatrical signature, yet the fire should remain a finishing gesture. A well-made Crêpe Suzette is memorable for its aroma, texture and harmony rather than spectacle alone."] },
      { title: "History and legend", paragraphs: ["Several stories compete to explain the name and origin of the dessert. Recipes associated with Auguste Escoffier and later recollections by Henri Charpentier form part of its history, but the neatest origin stories are difficult to prove completely.", "That uncertainty has helped the legend endure. Restaurant traditions evolve through recipes, dining-room performance and stories repeated from one generation to the next."] },
      { title: "A classic that still feels alive", paragraphs: ["Crêpe Suzette survives because it brings kitchen craft and hospitality together. Prepared with precision and served at the right moment, it gives the whole table a final shared memory of the evening."] },
    ],
  },
];

type ArticleRow = {
  slug: string;
  published_at: string;
  display_date: string;
  title: string;
  summary: string;
  image: string;
  image_alt: string;
  introduction: string;
  sections_json: string;
};

const TEST_ARTICLE_PATTERNS = [
  /^this is a valid\b/i,
  /^what to put on the table for each dinner course$/i,
  /^your first tasting menu\b/i,
];

function isTestArticle(article: Pick<JournalArticle, "title" | "summary">) {
  return TEST_ARTICLE_PATTERNS.some((pattern) => pattern.test(article.title.trim()))
    || /^this is a valid\b/i.test(article.summary.trim());
}

async function getDatabase() {
  try {
    const { env } = await import("cloudflare:workers");
    return env.DB ?? null;
  } catch {
    return null;
  }
}

function rowToArticle(row: ArticleRow): JournalArticle | null {
  try {
    const sections = JSON.parse(row.sections_json);
    if (!Array.isArray(sections)) return null;
    return {
      slug: row.slug,
      date: row.display_date,
      publishedAt: row.published_at,
      title: row.title,
      summary: row.summary,
      image: row.image,
      imageAlt: row.image_alt,
      introduction: row.introduction,
      sections,
    };
  } catch {
    return null;
  }
}

const removedArticleSlug = "where-to-celebrate-a-birthday-in-diani-beach-la-terrasse";

export async function getAllArticles(): Promise<JournalArticle[]> {
  const database = await getDatabase();
  let dynamicArticles: JournalArticle[] = [];

  if (database) {
    try {
      const result = await database.prepare(`SELECT slug, published_at, display_date, title, summary, image, image_alt, introduction, sections_json
        FROM journal_articles WHERE status = ? ORDER BY published_at DESC`).bind("published").all<ArticleRow>();
      dynamicArticles = result.results
        .map(rowToArticle)
        .filter((article): article is JournalArticle => Boolean(article))
        .filter((article) => !isTestArticle(article) && article.slug !== removedArticleSlug);
    } catch {
      // During the first local build the D1 migration may not yet be applied.
    }
  }

  const dynamicSlugs = new Set(dynamicArticles.map((article) => article.slug));
  return [...dynamicArticles, ...articles.filter((article) => !dynamicSlugs.has(article.slug))];
}

export async function getArticle(slug: string): Promise<JournalArticle | undefined> {
  if (slug === removedArticleSlug) return undefined;
  const database = await getDatabase();
  if (database) {
    try {
      const row = await database.prepare(`SELECT slug, published_at, display_date, title, summary, image, image_alt, introduction, sections_json
        FROM journal_articles WHERE slug = ? AND status = ? LIMIT 1`).bind(slug, "published").first<ArticleRow>();
      const dynamicArticle = row ? rowToArticle(row) : null;
      if (dynamicArticle && !isTestArticle(dynamicArticle)) return dynamicArticle;
    } catch {
      // Fall back to the articles that ship with the site.
    }
  }

  return articles.find((article) => article.slug === slug);
}
