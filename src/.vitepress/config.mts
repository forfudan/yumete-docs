import { defineConfig, type DefaultTheme } from "vitepress";
import mdFootnote from "markdown-it-footnote";
import path from "node:path";
import PAGES from "./pages.json";

// Where the site is served from.
//
// GitHub Pages puts it under the repository name; a domain of its own would
// serve it at the root. Moving it is this one line plus a `src/public/CNAME`
// holding the domain — nothing else in the repo knows the path. See README.md.
const BASE =
  process.env.NODE_ENV === "production" && process.env.GITHUB_PAGES
    ? "/yumete-docs/"
    : "/";

// Translations are written in `src/zht/` and `src/zhs/`. They stay out of the
// language menu until there is enough of one to be worth switching to: flip a
// flag here and that locale appears, with no other change anywhere.
const LIVE = { zht: false, zhs: false };

// ─────────────────────────────────────────────────────────────────────────────
// The pages, in the order the sidebar lists them. One list, used for every
// language: a translation is the same tree of pages under its own prefix.
// ─────────────────────────────────────────────────────────────────────────────

// The list lives in `pages.json` so the book view (`scripts/book.mjs`) reads
// the same one: the two renderings can never disagree about which pages exist
// or in what order.
const ALL: { text: string; items: { text: string; link: string }[] }[] = PAGES;

/** Every page this site has, as a flat list of links under `prefix`. */
function pagesUnder(prefix: string): string[] {
  return ALL.flatMap((g) => g.items.map((i) => prefix + i.link));
}

function sidebar(prefix: string): DefaultTheme.SidebarItem[] {
  return ALL.map((g) => ({
    text: g.text,
    collapsed: false,
    items: g.items.map((i) => ({ ...i, link: prefix + i.link })),
  }));
}

function nav(prefix: string): DefaultTheme.NavItem[] {
  return [
    { text: "Guide", link: prefix + "/guide/installation", activeMatch: "/guide/" },
    { text: "Reference", link: prefix + "/reference/keymap", activeMatch: "/reference/" },
    { text: "Writing", link: prefix + "/writing/page", activeMatch: "/writing/" },
    { text: "FAQ", link: prefix + "/faq" },
  ];
}

/** One language's worth of theme config. Every language gets the same shape. */
function themeFor(prefix: string): DefaultTheme.Config {
  return {
    nav: nav(prefix),
    sidebar: sidebar(prefix),
    outline: { level: [2, 3] },
    editLink: {
      pattern: "https://github.com/forFudan/yumete-docs/edit/main/src/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/forFudan/yumete" }],
    search: { provider: "local" },
    footer: {
      message: "yumete is released under the Apache License 2.0.",
      copyright: "© 2026 ZHU Yuhao",
    },
  };
}

const locales: Record<string, any> = {
  root: { label: "English", lang: "en", themeConfig: themeFor("") },
};

if (LIVE.zht) {
  locales.zht = {
    label: "繁體中文",
    lang: "zh-Hant",
    link: "/zht/",
    themeConfig: themeFor("/zht"),
  };
}

if (LIVE.zhs) {
  locales.zhs = {
    label: "简体中文",
    lang: "zh-Hans",
    link: "/zhs/",
    themeConfig: themeFor("/zhs"),
  };
}

export default defineConfig({
  title: "yumete",
  description: "A terminal text editor for CJK users, with Helix and vim keys and the Yume input method built in.",
  lang: "en",
  base: BASE,
  outDir: "../dist",
  // Generated tables (`ye --docgen`) are included into pages, not pages of
  // their own.
  srcExclude: ["generated/**"],
  cleanUrls: true,
  lastUpdated: true,
  locales,
  markdown: {
    math: true,
    theme: { light: "light-plus", dark: "material-theme-palenight" },
    config: (md) => {
      md.use(mdFootnote as any);
    },
  },
  head: [
    ["meta", { name: "theme-color", content: "#8a6a3a" }],
    // The face for code blocks with 漢字 in them (book-theme/cells.js).
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC&display=swap" }],
  ],
  vite: {
    resolve: {
      alias: { "@": path.resolve(__dirname, "../../components") },
    },
  },
});

// Exported so a future script can check that every page in the sidebar has a
// file, in every language that is live.
export { pagesUnder, LIVE };
