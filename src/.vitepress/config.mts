import { defineConfig, type DefaultTheme } from "vitepress";
import mdFootnote from "markdown-it-footnote";
import path from "node:path";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

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

const GUIDE = [
  { text: "Installation", link: "/guide/installation" },
  { text: "Getting started", link: "/guide/getting-started" },
  { text: "Configuration", link: "/guide/configuration" },
  { text: "Themes", link: "/guide/themes" },
  { text: "Language servers", link: "/guide/languages" },
];

const REFERENCE = [
  { text: "Keymap", link: "/reference/keymap" },
  { text: "Commands", link: "/reference/commands" },
  { text: "Settings", link: "/reference/settings" },
];

const WRITING = [
  { text: "Vertical layout", link: "/writing/vertical" },
  { text: "CJK motions", link: "/writing/cjk" },
  { text: "The input method", link: "/writing/ime" },
  { text: "Tables", link: "/writing/tables" },
  { text: "Ruby and annotations", link: "/writing/ruby" },
];

const FROM = [
  { text: "Coming from helix", link: "/from/helix" },
  { text: "Coming from vim", link: "/from/vim" },
];

const ALL = [
  { text: "Guide", items: GUIDE },
  { text: "Reference", items: REFERENCE },
  { text: "Writing CJK", items: WRITING },
  { text: "Coming from", items: FROM },
];

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
    { text: "Writing CJK", link: prefix + "/writing/vertical", activeMatch: "/writing/" },
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
      message: "yumete is released under the MIT License.",
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
  description: "A terminal text editor for writing CJK prose.",
  lang: "en",
  base: BASE,
  outDir: "../dist",
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
  head: [["meta", { name: "theme-color", content: "#8a6a3a" }]],
  vite: {
    css: {
      postcss: { plugins: [tailwind(), autoprefixer()] },
    },
    resolve: {
      alias: { "@": path.resolve(__dirname, "../../components") },
    },
  },
});

// Exported so a future script can check that every page in the sidebar has a
// file, in every language that is live.
export { pagesUnder, LIVE };
