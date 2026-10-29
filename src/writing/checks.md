# Checks and counts

yumete can count what you have written, keep a daily log against a target, and
look over a manuscript for the slips that ordinary reading misses: two
spellings of one word, a quote mark that never closes, a character the printer's
font will not have. It also tells you what the character under the cursor is.

Each check opens its findings as a read-only list, one line each. Press `gf` on
a line to go to that place in the manuscript.

## How words are counted

Counts follow Word's rule: each Chinese character is one, and each Latin word is
one. `我用 Rust 寫了 hello world。` counts 7. The status line, `:count`, the
daily target and `:count-progress` all count this way.

## The count on the status line

The status line shows how long the file is, after the cursor position:
`Ln 12, Col 5, Chr 5   3214 words`. With a selection it shows the selection's
count beside the whole: `120 / 3214 words`. On a narrow window the count is the
first thing to give way. The outline sidebar (`Space s`) shows each heading's
count at its right edge, including its subsections.

```toml
[editor]
status_count = "text"
```

| Value | Where it shows |
| --- | --- |
| `text` (default) | Markdown, plain text and Typst; not code |
| `all` | every file |
| `off` | nowhere |

## `:count`

`:count` (or `:wc`) reports the whole file, or the selection if there is one:

```
the whole file  3214 words  2980 han  3302 characters (no spaces)  41 paragraphs
```

The first number is the Word-style count. The count on the status line is the
same number.

## A daily target: `:count-target` and `:count-progress`

```
:count-target 2000     set a goal of 2000 a day
:count-progress        how much today, how much in the book, how many days running
:count-target off      stop measuring against a target; the log goes on
```

`:count-progress` opens a list with one line per day, newest first, and a bar
for that day's share:

```
2026-09-06  1830 字  ███████████
2026-09-05  2440 字  ████████████＋
2026-09-04  -260 字  －
1830/2000 字 today (91%), 62480 in the book, 3 days running
```

`＋` marks a day over target. `－` marks a day you cut more than you wrote.
Without a target the bars are measured against your best day.

The log counts what changed between saves, so unsaved typing does not count
yet. "In the book" is the sum of every file's count at its last save. A day you
have not started yet does not break the run.

The log is a plain text file, `.yumete/progress.tsv` in the project. Each line
is a date, a file name, the count at the day's start and the count now,
separated by tabs:

```
目標	2000
2026-09-05	chapter-1.md	0	1830
2026-09-06	chapter-1.md	1830	2440
```

You may edit it to fix a mistake, delete a day, or merge two machines' copies.
A line it cannot read is skipped, not the whole file. Nothing is written until
you run `:count-target` or `:count-progress`; after that, every `:w` in the
project adds to it. To stop, delete the file.

## Two spellings of one word: `:check-usage`

Many words have two accepted spellings, such as 裏 and 裡, or 為 and 爲. A long
manuscript drifts between them, and no spell checker will notice, because both
are correct.

`:check-usage` compares the manuscript with itself. It reports a group only when
both spellings appear, and points at the places that use the less common one:

```
4: 「裡」 here (3), 「裏」 in the rest (400)
```

A manuscript that only ever writes one spelling gets no report. Pairs that mean
different things, such as 面 and 麵, are not in the built-in table.

Your book's own names are in no table, so add them in the config, one group per
string, the spelling to keep first:

```toml
[editor]
usage_groups = ["阿嬌 阿姣", "落霞鎮 落霞鄉"]
```

## Words you lean on: `:word-habit`

`:word-habit` lists the words this file uses more often than ordinary prose
does, ranked by how much they stand out and how often they occur. A common word
such as 的 is never listed, because every text uses it at the usual rate.

```
12: 「然後」 47× — 4.2 times more often than prose
```

The line number is where the word first appears. Names the frequency table does
not know, single characters, and words used fewer than three times are left
out. The check needs a word-frequency table. With yumete's own small table it
finds less than with the full data installed (see
[The input method](ime.md)); with no frequencies at all it says so.

## Punctuation: `:check-punct`

`:check-punct` looks for three things:

- a half-width `,` `.` `;` `:` `!` `?` `(` `)` next to Chinese text;
- `...` where Chinese uses `……`;
- an opening `「` `『` `（` `《` `〈` `【` that never closes.

```
1: half-width 「,」 should be 「，」
2: 「「」 is never closed by 「」」
```

Only marks touching a Chinese character are reported, so `3.14`, `1,000` and
English sentences are left alone. Inline code and code blocks are skipped. A
quote that runs over several paragraphs, opening `「` again at the head of each,
is not counted as unclosed. Brackets must close in the same paragraph.

`:view-punct on` shows the same hint on the page as you write: the right mark is
drawn beside the half-width one.

## Characters a font may not have: `:check-charset`

`:check-charset` lists characters that are in none of the four standard
character sets (mainland, Taiwan, Hong Kong, and the set for classical texts).
Your screen may show them fine, while the typesetter's font does not have them.

There is one line per character, not per place, with the first place it
appears, how many times in all, and its Unicode block:

```
37: 「𠮷」 is in no standard (CJK-B), 412 times in all
```

The check reads the character sets from the input method's data, so it needs a
scheme loaded (`:yume-scheme`). Without one it says there is no data. 〇 and 々
are never reported.

## Simplified and traditional: `:convert`

`:convert` converts the whole file between simplified and traditional forms. It
runs [OpenCC](https://github.com/BYVoid/OpenCC), which needs to be installed and
on `PATH`.

```
:convert s t        simplified to traditional
:convert t s        traditional to simplified
:convert            list the codes and which pairs work
:convert-opencc     is opencc installed, where, which version
```

| Code | Form |
| --- | --- |
| `s` | simplified |
| `t` | OpenCC's plain traditional |
| `tw` | Taiwan |
| `hk` | Hong Kong |
| `jp` | Japanese shinjitai (to and from `t` only) |
| `c` | mainland standard traditional forms |
| `g` | standard forms for classical texts |

`:convert!` also converts vocabulary where OpenCC can (`:convert! s tw` turns
mainland computer terms into Taiwan ones). This changes the word count and
cannot be reversed by converting back, so it needs the `!`.

One conversion is one undo: press `u` to get the file back. Converting back the
other way is not an undo, since the round trip is not exact.

On macOS, `:convert-opencc-install` runs `brew install opencc`. On other systems
it prints the command for you to run.

To convert only the selection, use the case group: under the helix keymap
`` ` `` then `s` (to simplified), `t`, `w` (Taiwan), `k` (Hong Kong), `c`, `g`,
or `j`; under the vim keymap the group is ``g` ``.

## What is the character under the cursor

The right end of the status line names the character under the cursor:

```
螭 U+87ED · CJK Unified Ideographs
```

When a rare character shows as a box, this tells you whether the character is
wrong or the font is missing it. When the line is crowded, the block name goes
first, then the code point. `[editor] char_info = false` turns it off.

## Invisible characters

Some characters take no space on screen: a zero-width space, a soft hyphen, a
byte-order mark in the middle of the text, a joiner outside an emoji, and the
bidi controls that can make text read differently from how it is stored. The
cell after one of them gets an amber background. A space that is not a plain
space, such as a no-break space, has its own cell tinted. Put the cursor on the
tinted cell and the status line names what is there:

```
U+200B · ZERO WIDTH SPACE
```

The ideographic space U+3000, emoji joiners and the variation selectors that
pick a Chinese glyph are never marked. To turn the marks off:

```toml
[editor]
unicode_alarm = false
```

The settings panel has it under Marks.

## The sign beside the cursor: `:view-hud`

A command you have started typing, such as `3`, `2t` or `d3l`, is shown at the
right end of the status line and beside the cursor.

```
:view-hud full     a bordered panel under the cursor, over the text (default)
:view-hud basic    a small label in blank space nearby; covers nothing
:view-hud off      nothing beside the cursor
:view-hud          which one is on
```

The status line copy is always there. If you mind the panel covering the text
you are counting over, use `basic`. When the input method's candidates need the
same place, they win.

## A note beside the sentence

When the cursor stops on a footnote mark such as `[^1]`, the note floats in a
panel in the corner, with the line it is on:

```
That winter it snowed[^1] on the hill.
                              ╭ [^1]───────────────────────╮
                              │ The county records say so. │
                              ╰────────────────────line 11─╯
```

The panel keeps to the right and moves only up and down, so the start of each
line stays visible; in vertical layout it keeps to the bottom. It takes no rows
from the page. Annotations written `%%like this%%` get the same panel, so a long
one can be read without spreading the paragraph apart.

`gd` on the mark goes to the note, and `gd` there brings you back to the exact
character you left. If you move somewhere else in between, the way back is
forgotten.
