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
| `src/.vitepress/config.mts` | the sidebar, the nav, the languages, the base path |
| `src/.vitepress/theme/components/` | Vue components any page can use |
| `src/public/` | files served as-is: `data/keymap.json`, images, `CNAME` |

**Adding a page is two steps**: write the `.md`, then add it to the list at the
top of `config.mts`. That one list builds the sidebar and the nav for every
language, so a page added once appears everywhere.

## Writing a page that does something

A page is Markdown, and a Markdown page here can hold a Vue component. The one
shipped is `KeyTable`:

```md
<KeyTable />
<KeyTable group="Movement" />
```

It filters as the reader types and switches between the `helix` and `vim`
keymaps, reading its rows from `src/public/data/keymap.json`. Register a new
component in `src/.vitepress/theme/index.ts` and every page in every language
can use it.

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

The site is served from `https://forfudan.github.io/yumete-docs/`, which is why
the build sets `GITHUB_PAGES=true` — that is what puts `base` at
`/yumete-docs/` instead of `/`.

### Moving it to a domain of its own

Two steps, and the second is DNS:

1. In `.github/workflows/deploy.yml`, delete the `GITHUB_PAGES: true` line. The
   base goes back to `/`.
2. Point the domain at the site, either way below.

#### GitHub Pages with a custom domain

- `echo docs.example.com > src/public/CNAME` and commit it. Anything in
  `src/public/` is copied to the root of the build, so GitHub Pages reads it.
- At the DNS provider, for a subdomain: a `CNAME` record from `docs` to
  `forfudan.github.io`. For an apex domain: four `A` records to `185.199.108.153`,
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
