# Keymap

<div class="unwritten">This page has not been written yet.</div>

The table below is the `KeyTable` component: it filters as you type, and the
`helix` / `vim` buttons switch which keymap it answers in. Its rows come from
`src/public/data/keymap.json`, which is four sample rows at the moment —
replace that file and this page follows.

<KeyTable />

One group at a time is `<KeyTable group="Movement" />`, and a table built from
some other file is `<KeyTable src="/data/other.json" />`.
