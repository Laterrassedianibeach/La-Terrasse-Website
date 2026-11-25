import type { MetadataRoute } from "next";
import { getAllArticles } from "./journal/articles";

const origin = "https://laterrasse.co.ke";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();
  const mainRoutes: MetadataRoute.Sitemap = [
    { url: origin, changeFrequency: "weekly", priority: 1 },
    { url: `${origin}/menu`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${origin}/bar`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${origin}/reserve`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${origin}/journal`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const journalRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${origin}/journal/${article.slug}`,
    lastModified: new Date(article.publishedAt ?? article.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...mainRoutes, ...journalRoutes];
}
