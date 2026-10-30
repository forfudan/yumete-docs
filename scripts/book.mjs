// The book view (2026-10-29): the site's pages rendered by mdBook under /book/.
//
// The pages are written once, in `src/`, for both renderings. mdBook needs
// three things VitePress does not: no YAML front matter (it would print it),
// includes spelled its own way (VitePress's `<!--@include: …-->` is inlined
// here), and a `SUMMARY.md`, which is written from `pages.json` — the list the
// site's sidebar is built from — so the two cannot disagree about the pages.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const src = path.join(root, "src");
const stage = path.join(root, ".book/src");
const pages = JSON.parse(fs.readFileSync(path.join(src, ".vitepress/pages.json"), "utf8"));

const noFrontMatter = (text) => text.replace(/^---\n[\s\S]*?\n---\n/, "");

function inlined(text, from, depth = 0) {
  return text.replace(/<!--\s*@include:\s*(.+?)\s*-->/g, (_, rel) => {
    const file = path.resolve(path.dirname(from), rel.trim());
    if (depth > 4 || !fs.existsSync(file)) return "";
    return inlined(noFrontMatter(fs.readFileSync(file, "utf8")), file, depth + 1);
  });
}

fs.rmSync(path.join(root, ".book"), { recursive: true, force: true });
fs.mkdirSync(stage, { recursive: true });

// The home page is a VitePress hero; the book opens on its words instead.
const home = fs.readFileSync(path.join(src, "index.md"), "utf8");
const field = (name) => (home.match(new RegExp(`^\\s*${name}:\\s*(.+)$`, "m")) || [, ""])[1].trim();
// The feature cards become a list, and the page's own words follow.
const features = [...home.matchAll(/-\s*title:\s*(.+)\n\s*details:\s*"(.+)"\n\s*link:\s*(\S+)/g)]
  .map(([, title, details, link]) => `- **[${title}](${link.replace(/^\//, "")}.md)** ${details}`)
  .join("\n");
fs.writeFileSync(
  path.join(stage, "introduction.md"),
  `# ${field("name") || "yumete"}\n\n**${field("text")}**\n\n${field("tagline")}\n\n${features}\n\n` +
    noFrontMatter(home).replace(/\]\(\/([^)#]+)\)/g, "]($1.md)"),
);

let summary = "# Summary\n\n[Introduction](introduction.md)\n";
for (const group of pages) {
  summary += `\n# ${group.text}\n\n`;
  for (const item of group.items) {
    const rel = item.link.replace(/^\//, "") + ".md";
    const from = path.join(src, rel);
    const text = fs.existsSync(from) ? inlined(noFrontMatter(fs.readFileSync(from, "utf8")), from) : `# ${item.text}\n`;
    fs.mkdirSync(path.dirname(path.join(stage, rel)), { recursive: true });
    fs.writeFileSync(path.join(stage, rel), text);
    summary += `- [${item.text}](${rel})\n`;
  }
}
fs.writeFileSync(path.join(stage, "SUMMARY.md"), summary);

// Files served as they are (images, data) go along.
if (fs.existsSync(path.join(src, "public"))) {
  fs.cpSync(path.join(src, "public"), stage, { recursive: true });
}

// mdBook itself: the one on PATH, or — on a build machine without one — a
// pinned release fetched once.
function mdbook() {
  try {
    execFileSync("mdbook", ["--version"], { stdio: "ignore" });
    return "mdbook";
  } catch {}
  const version = "v0.4.40";
  const dir = path.join(root, ".cache/mdbook");
  const bin = path.join(dir, "mdbook");
  if (!fs.existsSync(bin)) {
    if (process.platform !== "linux" || process.arch !== "x64") {
      throw new Error("mdbook is not installed (cargo install mdbook)");
    }
    fs.mkdirSync(dir, { recursive: true });
    const url = `https://github.com/rust-lang/mdBook/releases/download/${version}/mdbook-${version}-x86_64-unknown-linux-gnu.tar.gz`;
    execFileSync("sh", ["-c", `curl -sSfL ${url} | tar -xz -C ${dir}`], { stdio: "inherit" });
  }
  return bin;
}

// The book's own address, for its 404 page: under the site's base on GitHub
// Pages (the same condition config.mts reads), at /book/ locally.
const base = process.env.NODE_ENV === "production" && process.env.GITHUB_PAGES ? "/yumete-docs/" : "/";
execFileSync(mdbook(), ["build", root], {
  stdio: "inherit",
  env: { ...process.env, MDBOOK_OUTPUT__HTML__SITE_URL: base + "book/" },
});
console.log("book: dist/book written");
