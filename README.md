# yumete-docs

The documentation site for [yumete](https://github.com/forFudan/yumete), built
with [VitePress](https://vitepress.dev) — the same stack as `yu` and
`MojoMiji`.

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # → dist/
pnpm preview
```

## Where things are

| Path | What it is |
| --- | --- |
| `src/*.md`, `src/guide/`, `src/reference/`, `src/writing/`, `src/from/` | the English pages |
| `src/zht/`, `src/zhs/` | the translations, same tree of pages under their own prefix |
| `src/.vitepress/pages.json` | the page list: the sidebar, the nav and the book's table of contents |
| `src/.vitepress/config.mts` | the languages, the base path, the search |
| `src/.vitepress/theme/ink.json` | the ink palette; `scripts/palette.mjs` writes both views' CSS from it |
| `src/generated/` | tables written by `ye --docgen` (see below); never edited by hand |
| `book.toml`, `book-theme/`, `scripts/book.mjs` | the book view (mdBook) at `/book/` |
| `src/public/` | files served as-is: images, `CNAME` |

**Adding a page is two steps**: write the `.md`, then add it to
`pages.json`. That one list builds the sidebar, the nav and the book's
contents, so a page added once appears in both views.

## Two views of the same pages

`pnpm build` builds the site twice from the same Markdown: VitePress at the
root and mdBook at `/book/`, both in ink's colours. Each page links to its twin
in the other view. Since mdBook reads plain Markdown, a page keeps to what both
can draw: no Vue components, no VitePress-only containers. Includes
(`<!--@include: ../generated/en/keys.md-->`) are fine; `scripts/book.mjs`
inlines them for mdBook.

## Generated tables

The commands, the keys, the settings and the languages are written by the
editor itself, in all three languages:

```sh
ye --docgen=src/generated
```

A page includes them rather than copying them, so the docs cannot list a key
or a command the editor does not have. yumete's CI regenerates them and fails
when they differ from what is committed here.

## The other two languages

`src/zht/` and `src/zhs/` exist and are empty. They are kept out of the
language menu by one line in `config.mts`:

```ts
const LIVE = { zht: false, zhs: false };
```

Flip a flag to `true` and that language appears in the menu, with its own
sidebar and nav under `/zht/` or `/zhs/`. Nothing else changes.

## Deploying

`.github/workflows/deploy.yml` runs on every push to `main` and publishes to
GitHub Pages. Nothing to press.

Cloudflare builds it too (`pnpm run build`, then `npx wrangler deploy`).
`wrangler.jsonc` tells wrangler the pages are in `dist/`: left to guess, it
looks in `docs/.vitepress/dist`, finds nothing, and the deploy fails after a
build that succeeded. There `GITHUB_PAGES` is unset, so `base` is `/`.

The site is served from **<https://yumete.shurufa.app/>**, which Cloudflare
builds and serves at the root. GitHub Pages serves the same pages at
<https://zhuyuhao.com/yumete-docs/> — this account's
GitHub Pages already answers on `zhuyuhao.com` (the `forfudan.github.io` repo),
so every other repository's Pages site hangs off that domain rather than off
`forfudan.github.io`. Either way it sits under the repository name, which is why
the build sets `GITHUB_PAGES=true`: that is what puts `base` at `/yumete-docs/`
instead of `/`.

### Moving it to a domain of its own

Two steps, and the second is DNS:

1. In `.github/workflows/deploy.yml`, delete the `GITHUB_PAGES: true` line. The
   base goes back to `/`.
2. Point the domain at the site, either way below.

#### GitHub Pages with a custom domain

- `echo docs.example.com > src/public/CNAME` and commit it. Anything in
  `src/public/` is copied to the root of the build, so GitHub Pages reads it.
- At the DNS provider, for a subdomain: a `CNAME` record from `docs` to
  `forfudan.github.io` (the GitHub target, not `zhuyuhao.com`). For an apex domain: four `A` records to `185.199.108.153`,
  `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- In the repository's **Settings → Pages**, put the domain in *Custom domain*
  and tick *Enforce HTTPS* once the certificate is issued.

#### Cloudflare Pages instead

Cloudflare builds and serves the site itself; GitHub Pages is then unused and
the workflow above can be deleted.

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**, authorise GitHub, pick `forFudan/yumete-docs`.
2. Build settings:
   - Framework preset: **VitePress** (or **None**)
   - Build command: `pnpm install && pnpm exec vitepress build src`
   - Build output directory: `dist`
   - Root directory: `/`
   - Environment variable: `NODE_VERSION` = `20`
   - Do **not** set `GITHUB_PAGES`; the base must stay `/`.
3. Save and deploy. Every push to `main` rebuilds; a push to any other branch
   gets its own preview URL, which GitHub Pages cannot do.
4. **Custom domain**: the Pages project → **Custom domains** → **Set up a
   domain**. If the domain's DNS is already on Cloudflare, it adds the record
   itself. If it is not, Cloudflare gives you a `CNAME` target to add at your
   registrar.

Cloudflare's free tier covers this: unlimited bandwidth, 500 builds a month.
The one thing to remember is the `GITHUB_PAGES` variable — set it on Cloudflare
by mistake and every asset on the site asks for `/yumete-docs/...` on a domain
that has no such folder, so the pages render unstyled.

## Licence

MIT, as yumete is.
