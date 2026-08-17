import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const appDirectory = path.join(projectRoot, "app");
const publicDirectory = path.join(projectRoot, "public");

const baseUrl = "https://guide.myassignmentbuddies.com";

function findPages(directory) {
  const pages = [];

  if (!fs.existsSync(directory)) {
    return pages;
  }

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      pages.push(...findPages(fullPath));
    } else if (entry.isFile() && entry.name === "page.tsx") {
      pages.push(fullPath);
    }
  }

  return pages;
}

function folderToRoute(pagePath) {
  const relativePath = path.relative(
    appDirectory,
    path.dirname(pagePath)
  );

  if (!relativePath) {
    return "/";
  }

  const segments = relativePath
    .split(path.sep)
    .filter(Boolean)
    .filter((segment) => !segment.startsWith("("))
    .filter((segment) => !segment.startsWith("@"))
    .filter((segment) => !segment.startsWith("["));

  if (segments.some((segment) => segment.startsWith("_"))) {
    return null;
  }

  return "/" + segments.join("/");
}

const pageFiles = findPages(appDirectory);

const routes = pageFiles
  .map(folderToRoute)
  .filter(Boolean)
  .sort();

const urls = routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route === "/" ? "" : route}</loc>
  </url>`
  )
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.mkdirSync(publicDirectory, { recursive: true });

fs.writeFileSync(
  path.join(publicDirectory, "sitemap.xml"),
  sitemap.trim() + "\n",
  "utf8"
);

console.log(`Sitemap generated with ${routes.length} URLs:`);
routes.forEach((route) => console.log(`  ${route}`));