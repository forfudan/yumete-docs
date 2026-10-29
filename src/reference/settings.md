# Settings

Settings live in `~/.config/yumete/config.toml`, and a project can override them in
`.yumete/config.toml`. `:settings` opens all of them as a page you can edit and save
with `:w`; `:reload-config` reads the files again after you edit them by hand. See
[Configuration](../guide/configuration.md) for how the files work.

The sections below explain the settings that need more than a line. The list of every
setting on the panel is at the end.

## Auto-pairs: `auto_pairs`

Brackets and quotes close themselves as you type, as in helix. Type `(` and you
get `()` with the cursor between them; type `)` in front of the `)` and you step
over it, so `(x)` typed in full still comes out once. Backspace between the two
halves of an empty pair deletes both, and Enter between them opens the pair onto
three lines, with the cursor on the middle one (indented one level in code).

```toml
[editor]
auto_pairs = "basic"   # "off" | "basic" | "full"
```

The same three levels are `:auto-pairs off`, `:auto-pairs basic` and
`:auto-pairs full`; `:auto-pairs` alone says which one is on. The settings panel
has it under Editing.

| Level | What pairs |
| --- | --- |
| `off` | nothing |
| `basic` (default) | helix's six: `( )` `[ ]` `{ }` `' '` `" "` and two backticks |
| `full` | everything the `m` group knows as a pair, but `< >` |

What `full` pairs, beyond the six:

| Kind | Pairs |
| --- | --- |
| Full-width brackets | `（ ）` `［ ］` `｛ ｝` |
| Chinese brackets | `「 」` `『 』` `【 】` `〔 〕` `〖 〗` `〈 〉` `《 》` |
| Curly quotes | `“ ”` `‘ ’` `〝 〞` |
| Full-width quotes | `＂ ＂` `＇ ＇` `｀ ｀` |
| Others | `« »` `｢ ｣` |

`< >` is left out even under `full`: in code, `a < b` would come out as
`a <> b`.

When a pair is not written:

- **A letter, a digit or a Chinese character follows the cursor.** Typing `(`
  before text already written is usually the start of wrapping it, so only the
  `(` goes in.
- **A quote right after a letter or a digit.** `don't` keeps one apostrophe.

`full` works through the input method too. With Yume, `[` commits 「 and you get
「」; the 」 that `]` commits later steps over the one already there. `"`
commits `“` the first time and `”` the next, so a quotation typed straight
through comes out right.

`full` is not the default: dialogue in a novel is typed straight through, and a
closer waiting ahead of the cursor is one more thing to step past.

## Status-line count: `status_count`

```toml
[editor]
status_count = "text"   # "text" | "all" | "off"
```

`text` (default) shows the word count on the status line for Markdown, plain
text and Typst, `all` for every file, and `off` nowhere. The settings panel has
it under Marks. How words are counted is in
[Checks and counts](../writing/checks.md#the-count-on-the-status-line).

## Not on the panel

A few keys are not on the settings panel. Each is explained on the page that owns it:

| Key | Page |
| --- | --- |
| `[ime] data_dirs` | [The input method](../writing/ime.md) |
| `[editor] usage_groups` | [Checks and counts](../writing/checks.md#two-spellings-of-one-word-check-usage) |
| `[editor] screenshot` | [Configuration](../guide/configuration.md#what-a-project-file-cannot-set) |
| `[export] page` | [Export](../writing/export.md) |
| `[syntax]` | [The page](../writing/page.md#markdown-typst-or-plain-text-syntax) |
| `[language.*]` and `[lsp.*]` | [Language servers](../guide/languages.md) |
| `[keys.normal]` | [Key remapping](../guide/remapping.md) |
| the theme colours | [Themes](../guide/themes.md#changing-the-colours) |

## Every setting on the panel

Written from the settings panel's own list (`ye --docgen`), grouped as the panel groups
them. The default is what yumete uses when the file says nothing.

<!--@include: ../generated/en/settings.md-->

