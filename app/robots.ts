import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/item/"],
    },
    sitemap: "https://laterrasse.co.ke/sitemap.xml",
    host: "https://laterrasse.co.ke",
  };
}
