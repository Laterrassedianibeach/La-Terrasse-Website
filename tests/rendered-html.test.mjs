import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the La Terrasse home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>La Terrasse Diani Beach/);
  assert.match(html, /The art/);
  assert.match(html, /href="\/#events"/);
});

test("renders the recurring events and August tasting menu", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /id="events"/);
  assert.match(html, /After Dinner/);
  assert.match(html, /Friday &amp; Saturday/);
  assert.match(html, /Hope Irakoze/);
  assert.match(html, /Every Sunday/);
  assert.match(html, /Six-course tasting menu/);
  assert.match(html, /Past event · 17 August 2026/);
  assert.match(html, /Served 17 August · KES 7,500 per person/);
  assert.match(html, /Chateaubriand &amp; grilled prawn/);
  assert.doesNotMatch(html, /Book the tasting menu/);
});

test("permanently redirects the four confirmed legacy URLs", async () => {
  const mappings = [
    ["/a-la-carte/", "/menu"],
    ["/le-comptoir/", "/bar"],
    ["/la-reserve/", "/reserve"],
    ["/crepe-suzette-histoire-vraie-flambage/", "/journal/crepe-suzette-histoire-vraie-flambage"],
  ];

  for (const [legacy, current] of mappings) {
    const response = await render(legacy);
    assert.equal(response.status, 301);
    assert.equal(new URL(response.headers.get("location")).pathname, current);
  }
});

test("cleans the suspicious query and retires legacy item spam", async () => {
  const queryResponse = await render("/?l=198500814");
  assert.equal(queryResponse.status, 301);
  assert.equal(new URL(queryResponse.headers.get("location"), "http://localhost").pathname, "/");
  assert.equal(new URL(queryResponse.headers.get("location"), "http://localhost").search, "");

  const itemResponse = await render("/item/3004250627");
  assert.equal(itemResponse.status, 410);
  assert.equal(itemResponse.headers.get("x-robots-tag"), "noindex, nofollow");
});

test("publishes a current-only sitemap and crawlable robots policy", async () => {
  const sitemapResponse = await render("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  for (const path of ["/menu", "/bar", "/reserve", "/journal", "/journal/crepe-suzette-histoire-vraie-flambage"]) {
    assert.match(sitemap, new RegExp(`https://laterrasse\\.co\\.ke${path.replaceAll("/", "\\/")}`));
  }
  assert.doesNotMatch(sitemap, /a-la-carte|le-comptoir|la-reserve/);

  const robotsResponse = await render("/robots.txt");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Disallow: \/item\//);
  assert.match(robots, /Sitemap: https:\/\/laterrasse\.co\.ke\/sitemap\.xml/);
});

test("renders one Restaurant JSON-LD block and no legacy internal links", async () => {
  const response = await render();
  const html = await response.text();
  assert.equal((html.match(/<script type="application\/ld\+json"/g) ?? []).length, 1);
  assert.match(html, /"@type":"Restaurant"/);
  assert.match(html, /"latitude":-4\.2979843/);
  assert.match(html, /"servesCuisine":"French"/);
  assert.match(html, /La Terrasse Menu/);
  assert.match(html, /Le Comptoir/);

  const sourceFiles = [
    "../app/page.tsx",
    "../app/_components/SiteChrome.tsx",
    "../app/menu/page.tsx",
    "../app/bar/page.tsx",
    "../app/reserve/page.tsx",
    "../app/journal/page.tsx",
    "../app/journal/[slug]/page.tsx",
  ];
  const source = (await Promise.all(sourceFiles.map((path) => readFile(new URL(path, import.meta.url), "utf8")))).join("\n");
  assert.doesNotMatch(source, /href=["'{`]\/?(?:a-la-carte|le-comptoir|la-reserve)/);
});

test("renders the complete Le Comptoir cocktail collection", async () => {
  const response = await render("/bar");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /id="cocktails"/);
  for (const cocktail of ["Pink Lady", "Picante", "La Terrassie Negroni", "Maombi Sour", "Zenit", "Watermelon Paloma", "Heritage Spritz", "Only Passion · Pornstar Collins", "Smayash"]) {
    assert.match(html, new RegExp(cocktail));
  }
  for (const image of ["cocktail-passion.jpg", "cocktail-dragonfruit.jpg", "cocktail-coconut.jpg", "cocktail-signature.jpg"]) {
    assert.match(html, new RegExp(image));
  }
});
