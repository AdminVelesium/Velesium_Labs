import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, readdirSync, statSync } from "fs";
import { join, resolve } from "path";

const BASE_URL = "https://velesium.ai";
const PAGES_DIR = resolve("./src/app");

function getRoutes(dir: string, basePath = ""): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const entryPath = join(basePath, entry.name);

    if (entry.isDirectory()) {
      routes = routes.concat(getRoutes(fullPath, entryPath));
    } else if (entry.name === "page.tsx") {
      let route = basePath.replace(/\\/g, "/").replace(/\/page$/, "");
      route = route.replace(/^\/?Home/, "");

      const finalRoute = route === "" ? "/" : `/${route}`;
      if (!routes.includes(finalRoute)) {
        routes.push(finalRoute);
      }
    }
  }

  return routes;
}

async function generateSitemap() {
  const routes = getRoutes(PAGES_DIR);

  if (!routes.length) {
    throw new Error("❌ No routes found!");
  }

  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  for (const route of routes) {
    sitemap.write({
      url: route,
      changefreq: "monthly",
      priority: route === "/" ? 1 : 0.8,
    });
  }

  sitemap.end();
  await streamToPromise(sitemap);

  console.log("✅ Sitemap generated successfully with routes:");
  console.log(routes);
}

generateSitemap().catch((err) => {
  console.error("❌ Sitemap generation failed:", err.message);
});
