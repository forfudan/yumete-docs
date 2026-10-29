# Settings

<div class="unwritten">This page has not been written yet.</div>

Only auto-pairs and the status-line count are written so far.

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

How long the file is, after the cursor position on the status line:
`行 12, 列 5, 字 5   3214 字`. With a selection it shows the selection's count
and the whole: `120 / 3214 字`. The outline sidebar writes each heading's count at
its right edge, sections included.

```toml
[editor]
status_count = "text"   # "text" | "all" | "off"
```

| Value | Where it shows |
| --- | --- |
| `text` (default) | Markdown, plain text and Typst; not code |
| `all` | every file |
| `off` | nowhere |

It counts the way Word counts 字數: each 漢字 is one, and each Latin word is one.
`我用 Rust 寫了 hello world。` is 7. `:count`, the daily target and
`:count-progress` count the same way. The settings panel has it under Marks.
