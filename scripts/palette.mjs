// The ink palette, written out for both renderings (2026-10-29).
//
// One source — `src/.vitepress/theme/ink.json`, copied from yumete's own
// factory theme — and two outputs: VitePress's colour variables and mdBook's.
// Everything else on both pages is mixed from ink and paper here, the way the
// editor mixes its ladder, so the site and the book cannot drift apart.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const palette = JSON.parse(fs.readFileSync(path.join(root, "src/.vitepress/theme/ink.json"), "utf8"));

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const out = (rgb) => "#" + rgb.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
// `t` of the way from paper to ink.
const mix = (p, t) => out(hex(p.paper).map((v, i) => v + (hex(p.ink)[i] - v) * t));

function vitepress(p) {
  return {
    "--vp-c-bg": p.paper,
    "--vp-c-bg-alt": mix(p, 0.04),
    "--vp-c-bg-soft": mix(p, 0.07),
    "--vp-c-bg-elv": mix(p, 0.02),
    "--vp-c-text-1": p.ink,
    "--vp-c-text-2": mix(p, 0.72),
    "--vp-c-text-3": mix(p, 0.5),
    "--vp-c-divider": mix(p, 0.16),
    "--vp-c-gutter": mix(p, 0.1),
    "--vp-c-border": mix(p, 0.24),
    "--vp-c-brand-1": p.gold,
    "--vp-c-brand-2": p.gold,
    "--vp-c-brand-3": p.gold,
    "--vp-c-brand-soft": mix(p, 0.1),
    "--vp-code-color": p.mark,
    "--vp-code-bg": mix(p, 0.07),
  };
}

function mdbook(p) {
  return {
    "--bg": p.paper,
    "--fg": p.ink,
    "--sidebar-bg": mix(p, 0.05),
    "--sidebar-fg": p.ink,
    "--sidebar-non-existant": mix(p, 0.45),
    "--sidebar-active": p.gold,
    "--sidebar-spacer": mix(p, 0.16),
    "--scrollbar": mix(p, 0.3),
    "--icons": mix(p, 0.55),
    "--icons-hover": p.ink,
    "--links": p.gold,
    "--inline-code-color": p.mark,
    "--theme-popup-bg": mix(p, 0.04),
    "--theme-popup-border": mix(p, 0.24),
    "--theme-hover": mix(p, 0.1),
    "--quote-bg": mix(p, 0.05),
    "--quote-border": mix(p, 0.16),
    "--table-border-color": mix(p, 0.16),
    "--table-header-bg": mix(p, 0.08),
    "--table-alternate-bg": mix(p, 0.03),
    "--searchbar-border-color": mix(p, 0.24),
    "--searchbar-bg": p.paper,
    "--searchbar-fg": p.ink,
    "--searchbar-shadow-color": mix(p, 0.16),
    "--searchresults-header-fg": mix(p, 0.6),
    "--searchresults-border-color": mix(p, 0.16),
    "--searchresults-li-bg": mix(p, 0.05),
    "--search-mark-bg": mix(p, 0.2),
  };
}

const block = (selector, vars) =>
  `${selector} {\n${Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`).join("\n")}\n}\n`;

const head = "/* Written by scripts/palette.mjs from src/.vitepress/theme/ink.json. Do not edit. */\n";
fs.writeFileSync(
  path.join(root, "src/.vitepress/theme/ink.css"),
  head + block(":root", vitepress(palette.light)) + block(".dark", vitepress(palette.dark)),
);
// mdBook: its `light` theme and its `coal` (the dark one it picks for a dark
// system) both wear ink; the other built-in themes stay as they are.
fs.writeFileSync(
  path.join(root, "book-theme/ink.css"),
  head + block(".light", mdbook(palette.light)) + block(".coal", mdbook(palette.dark)),
);
console.log("palette: ink.css written for VitePress and mdBook");
