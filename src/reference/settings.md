# Settings

<div class="unwritten">This page has not been written yet.</div>

Only auto-pairs is written so far.

## Auto-pairs: `auto_pairs`

Brackets and quotes close themselves as you type, as in helix. Type `(` and you
get `()` with the cursor between them; type `)` in front of the `)` and you step
over it, so `(x)` typed in full still comes out once. Backspace between the two
halves of an empty pair deletes both.

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
| `full` | everything the `m` group knows as a pair |

What `full` pairs, beyond the six:

| Kind | Pairs |
| --- | --- |
| Full-width brackets | `（ ）` `［ ］` `｛ ｝` |
| Chinese brackets | `「 」` `『 』` `【 】` `〔 〕` `〖 〗` `〈 〉` `《 》` |
| Curly quotes | `“ ”` `‘ ’` `〝 〞` |
| Full-width quotes | `＂ ＂` `＇ ＇` `｀ ｀` |
| Others | `< >` `« »` `｢ ｣` |

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
