# Folds

A fold is a run of lines shown as one. Closed, it takes one row on the page; open, the
lines are there as usual. Folds belong to the window: two windows on one file can fold
it differently, and a new window starts with the folds of the one it was split from.

The session keeps them: `ye -r` brings back each window's folds, the closed heading
folds found again by their heading, the ones you made by their lines.

There are two kinds:

- **Heading folds.** In Markdown and Typst every heading is a fold over its section,
  the heading line and everything under it down to the next heading of the same level
  or higher. They are all open when a file is opened. This is the flavour's
  `heading_folds` item, on at `basic`; with it off there are only the folds you make.
- **Folds you make**, with `zf` under the vim keymap. They are kept with the text as it
  changes: lines written inside a fold are in it, lines above push it down, and a fold
  whose lines are all deleted goes. `u` brings back a fold that an edit took away.

## The fold's line

A closed fold's line says what it holds. In code it is vim's own line, how many lines
and the first of them:

```
+--  3 lines: let a = 1;··························
```

In a text file it is the heading, or the first words, and how many 字 the fold holds,
counted as the status line counts. A heading's fold counts what is under the heading,
the same number the outline shows:

```
## 第三節 雪夜 ··································· 4,213 字
```

On a vertical page the same line runs down one 縱, filled with `︙`.

## In the outline

The outline shows the folds of the window you are in. A section closed on the page
has dots to its count, as its fold's line has, and the headings inside it are grey.
The outline's own `h` and `l` fold its list, not the page. `Enter` on a closed section
goes to its line and leaves it closed.

## Keys

These are vim's, under the vim keymap. The helix keymap has none, as helix has no
folds, but every one is a command (`close_fold`, `open_all_folds` and the rest) that
`::` finds and a key can be bound to.

| Key | What it does |
| --- | --- |
| `zf`*motion*, `zf` in Visual | make a fold over those lines, closed |
| `zF` | make a fold over *count* lines |
| `zo` `zO` | open the fold here (*count* levels), every fold here |
| `zc` `zC` | close the fold here, the innermost open one first (*count* levels), every fold here |
| `za` `zA` | open the closed fold here or close the open one, every level |
| `zv` | open just enough to see the cursor's line |
| `zR` `zM` | open every fold, close every fold |
| `zm` `zr` | one level more folded, one level less (*count* levels): every fold deeper than the level closes, every other opens |
| `zd` `zD` `zE` | delete the fold here, every fold here, every fold you made; the text stays |
| `zj` `zk` | down to the start of the next fold, up to the end of the one before |
| `[z` `]z` | to the start, the end of the open fold the cursor is in |
| `zn` `zN` `zi` | every fold open for now, back as they were, the one or the other |

`zd` takes only folds you made; a heading fold comes from the heading and stays.
With the headings, `zM` then `zr` is the outline of the chapters: each `#` open, every
`##` under it closed.

Under either keymap, `:view-fold` makes a fold of the selected lines, as vim's fold
command does.

## Moving and editing

A closed fold is one line. `j` and `k` step over it, a count counts it once, and an
operator takes it whole: `dd`, `yy`, `>>` and `x` on a closed fold act on all its
lines, and `2dd` takes the fold and the line after it. `o` opens a line after the
fold, `p` puts after it and `P` before it, and the fold stays closed. Typing on its
line opens it.

What lands inside a closed fold opens it: a search, a mark, `%`, `u`, a jump to a
definition, the moves along a line. vim's jumps leave it closed and put the cursor
on its line: `G`, `gg`, `:`*line*, `C-o` and `C-i`. Then `zo` puts the cursor where
the jump was going.
