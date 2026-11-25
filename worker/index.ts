/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  BUCKET: R2Bucket;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const legacyRedirects: Record<string, string> = {
  "/a-la-carte": "/menu",
  "/le-comptoir": "/bar",
  "/la-reserve": "/reserve",
  "/crepe-suzette-histoire-vraie-flambage": "/journal/crepe-suzette-histoire-vraie-flambage",
  "/seafood-in-diani-beach": "/journal/seafood-in-diani-beach",
  "/romantic-dinner-diani-beach": "/journal/romantic-dinner-diani-beach",
  "/french-cuisine-in-diani-kenyan-terroir": "/journal/french-cuisine-in-diani-kenyan-terroir",
  "/mediterranean-influence-la-terrasse": "/journal/mediterranean-influence-la-terrasse",
  "/french-wine-in-diani-beach": "/journal/french-wine-in-diani-beach",
  "/perfect-evening-in-diani-aperitif-dinner-piano": "/journal",
  "/beef-wellington-history": "/journal",
  "/elegant-table-setting-rules": "/journal",
};

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/$/, "") || "/";

    const destination = legacyRedirects[pathname];
    if (destination) {
      url.pathname = destination;
      url.search = "";
      return Response.redirect(url, 301);
    }

    if (pathname === "/" && url.searchParams.get("l") === "198500814") {
      url.search = "";
      return Response.redirect(url, 301);
    }

    if (pathname === "/item" || pathname.startsWith("/item/")) {
      return new Response(null, {
        status: 410,
        headers: { "X-Robots-Tag": "noindex, nofollow" },
      });
    }

    if (pathname.startsWith("/cdn/")) {
      const key = pathname.slice(5);
      if (env.BUCKET) {
        const object = await env.BUCKET.get(key);
        if (object) {
          const headers = new Headers();
          object.writeHttpMetadata(headers);
          headers.set("etag", object.httpEtag);
          return new Response(object.body, { headers });
        }
      }
      return new Response("Not Found", { status: 404 });
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
