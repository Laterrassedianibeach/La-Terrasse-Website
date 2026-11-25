import { env } from "cloudflare:workers";
import { getAllArticles } from "../../journal/articles";

export const dynamic = "force-dynamic";

type ArticleSection = { title: string; paragraphs: string[] };
type ArticlePayload = {
  slug?: string;
  publishedAt?: string;
  date?: string;
  title?: string;
  summary?: string;
  image?: string;
  imageBase64?: string;
  imageAlt?: string;
  introduction?: string;
  sections?: ArticleSection[];
  content?: string;
  body?: string;
  text?: string;
  markdown?: string;
  contentHtml?: string;
  content_html?: string;
  excerpt?: string;
  description?: string;
  metaDescription?: string;
  meta_description?: string;
  imageUrl?: string;
  image_url?: string;
  featuredImage?: string;
  featured_image?: string;
  coverImage?: string;
  cover_image?: string;
  image_alt?: string;
  alt?: string;
  published_at?: string;
  datePublished?: string;
  article?: ArticlePayload;
};

type NormalizedArticle = {
  slug: string;
  publishedAt: Date;
  displayDate: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  introduction: string;
  sections: ArticleSection[];
};

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 100);
}

function validText(value: unknown, max: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= max;
}

function validSections(value: unknown): value is ArticleSection[] {
  return Array.isArray(value) && value.length <= 20 && value.every((section) =>
    section && validText(section.title, 160) && Array.isArray(section.paragraphs) && section.paragraphs.length > 0 && section.paragraphs.length <= 20 && section.paragraphs.every((paragraph) => validText(paragraph, 5000))
  );
}

function normalizeSections(value: unknown): ArticleSection[] | undefined {
  if (validSections(value)) return value.map((section) => ({ title: section.title.trim(), paragraphs: section.paragraphs.map((paragraph) => paragraph.trim()) }));
  if (Array.isArray(value) && value.length > 0 && value.length <= 20 && value.every((paragraph) => validText(paragraph, 5000))) {
    return [{ title: "The story", paragraphs: value.map((paragraph) => paragraph.trim()) }];
  }
  return undefined;
}

function firstText(max: number, ...values: unknown[]) {
  return values.find((value): value is string => validText(value, max))?.trim();
}

function plainText(value: string) {
  return value
    .replace(/<\s*br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|h[1-6]|li)>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\r\n?/g, "\n")
    .trim();
}

function sectionsFromContent(content: string) {
  const blocks = plainText(content).split(/\n\s*\n+/).map((block) => block.trim()).filter(Boolean);
  const paragraphs: string[] = [];
  const sections: ArticleSection[] = [];
  let currentTitle = "The story";
  let currentParagraphs: string[] = [];

  const pushSection = () => {
    if (currentParagraphs.length) sections.push({ title: currentTitle, paragraphs: currentParagraphs });
    currentParagraphs = [];
  };

  for (const block of blocks) {
    const heading = block.match(/^#{1,6}\s+(.+)$/);
    if (heading) {
      pushSection();
      currentTitle = heading[1].trim();
    } else {
      const paragraph = block.replace(/^[-*]\s+/, "").replace(/\*\*(.*?)\*\*/g, "$1");
      paragraphs.push(paragraph);
      currentParagraphs.push(paragraph);
    }
  }
  pushSection();

  return { paragraphs, sections };
}

function normalizePayload(input: ArticlePayload): { article?: NormalizedArticle; missing?: string[] } {
  const payload = input.article && typeof input.article === "object" ? { ...input, ...input.article, article: undefined } : input;
  const title = firstText(180, payload.title);
  const sourceContent = firstText(50_000, payload.content, payload.body, payload.text, payload.markdown, payload.contentHtml, payload.content_html);
  const parsed = sourceContent ? sectionsFromContent(sourceContent) : { paragraphs: [], sections: [] as ArticleSection[] };
  const suppliedSections = normalizeSections(payload.sections);
  const sections = suppliedSections ?? parsed.sections;
  const introduction = firstText(5000, payload.introduction, parsed.paragraphs[0], sections[0]?.paragraphs[0]);
  const summary = firstText(500, payload.summary, payload.excerpt, payload.description, payload.metaDescription, payload.meta_description, introduction?.slice(0, 280));
  const image = firstText(2000, payload.image, payload.imageUrl, payload.image_url, payload.featuredImage, payload.featured_image, payload.coverImage, payload.cover_image) ?? "/brand/exterior.jpg";
  const imageAlt = firstText(300, payload.imageAlt, payload.image_alt, payload.alt) ?? (title ? `La Terrasse Diani Beach — ${title}` : undefined);

  const missing = [
    !title && "title",
    !introduction && "introduction or content",
    !summary && "summary, excerpt, description, or content",
  ].filter((value): value is string => Boolean(value));
  if (missing.length || !title || !introduction || !summary || !imageAlt) return { missing };

  const looksLikeTestContent = [
    /^this is a valid\b/i,
    /^what to put on the table for each dinner course$/i,
    /^your first tasting menu\b/i,
  ].some((pattern) => pattern.test(title)) || /^this is a valid\b/i.test(summary);
  if (looksLikeTestContent) return { missing: ["real editorial title and summary (test or placeholder content is not publishable)"] };

  const slug = slugify(payload.slug ?? title);
  if (!slug) return { missing: ["valid slug or title"] };

  const dateValue = firstText(120, payload.publishedAt, payload.published_at, payload.datePublished);
  const publishedAt = dateValue ? new Date(dateValue) : new Date();
  if (Number.isNaN(publishedAt.getTime())) return { missing: ["valid publishedAt, published_at, or datePublished"] };

  const displayDate = validText(payload.date, 80)
    ? payload.date.trim()
    : new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Africa/Nairobi" }).format(publishedAt);

  const articleSections = payload.introduction || suppliedSections
    ? sections
    : sections.map((section) => ({ ...section, paragraphs: section.paragraphs.filter((paragraph, index) => !(section === sections[0] && index === 0 && paragraph === introduction)) })).filter((section) => section.paragraphs.length > 0);

  return { article: { slug, publishedAt, displayDate, title, summary, image, imageAlt, introduction, sections: articleSections } };
}

function authorized(request: Request) {
  const expected = (env as unknown as { ARTICLE_API_TOKEN?: string }).ARTICLE_API_TOKEN;
  const provided = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (!expected || expected.length !== provided.length) return false;
  let difference = 0;
  for (let index = 0; index < expected.length; index += 1) difference |= expected.charCodeAt(index) ^ provided.charCodeAt(index);
  return difference === 0;
}

export async function GET() {
  const articles = await getAllArticles();
  return json({ articles: articles.map(({ slug, date, title, summary, image }) => ({ slug, date, title, summary, image, url: `/journal/${slug}` })) });
}

export async function POST(request: Request) {
  if (!authorized(request)) return json({ error: "Unauthorized" }, 401);

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 10_000_000) return json({ error: "Payload too large" }, 413);

  let payload: ArticlePayload;
  try {
    payload = await request.json() as ArticlePayload;
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const normalized = normalizePayload(payload);
  if (!normalized.article) {
    return json({ error: "Article validation failed", missing: normalized.missing ?? [] }, 422);
  }
  const article = normalized.article;

  const url = new URL(request.url);
  if (["1", "true"].includes(url.searchParams.get("validate")?.toLowerCase() ?? "")) {
    return json({ valid: true, normalized: { ...article, publishedAt: article.publishedAt.toISOString() } });
  }

  const database = env.DB;
  if (!database) return json({ error: "Article database is unavailable" }, 503);

  const existing = await database.prepare("SELECT slug FROM journal_articles WHERE slug = ? LIMIT 1").bind(article.slug).first();
  let finalImageUrl = article.image;

  if (payload.imageBase64 && env.BUCKET) {
    try {
      const base64Data = payload.imageBase64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
      const key = `articles/${article.slug}-${Date.now()}.png`;
      await env.BUCKET.put(key, buffer, {
        httpMetadata: { contentType: "image/png" },
      });
      finalImageUrl = `/cdn/${key}`;
    } catch (e) {
      return json({ error: "Failed to process and upload imageBase64 to R2", details: String(e) }, 500);
    }
  }

  const now = new Date().toISOString();
  if (existing) {
    await database.prepare(`UPDATE journal_articles
      SET display_date = ?, title = ?, summary = ?, image = ?, image_alt = ?, introduction = ?, sections_json = ?, updated_at = ?
      WHERE slug = ?`)
      .bind(article.displayDate, article.title, article.summary, finalImageUrl, article.imageAlt, article.introduction, JSON.stringify(article.sections), now, article.slug)
      .run();
  } else {
    await database.prepare(`INSERT INTO journal_articles
      (slug, published_at, display_date, title, summary, image, image_alt, introduction, sections_json, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
      .bind(article.slug, article.publishedAt.toISOString(), article.displayDate, article.title, article.summary, finalImageUrl, article.imageAlt, article.introduction, JSON.stringify(article.sections), "published", now, now)
      .run();
  }

  return json({ created: true, slug: article.slug, url: `/journal/${article.slug}`, imageUrl: finalImageUrl }, 201);
}
