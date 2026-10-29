# Coming from helix

yumete's default keymap is helix's. You select first and act second, a cursor
is a one-character selection, and most keys do what your hands expect. This
page lists the places where they do not.

## What is the same

These work as in helix. Motions: `h` `j` `k` `l`, `f` `t` `F` `T` (across lines),
`gg` `ge` `gh` `gl` `gs`, and `C-d` `C-u` `C-f` `C-b`. Selection: `x` `X`
`%` `v` `;` `,` `C` `s` `S` `K` `&` `_`, `A-;`, and `(` `)` to rotate the
primary selection. Changes: `d` `c` `y` `p` `P` `R` `r` `~` `>` `<` `J`
`u` `U` `C-a` `C-x`, with `A-d` and `A-c` to leave the register alone.
Macros are `Q` to record and `q` to play, `"a` picks a register, `A-.`
repeats the last `f` or `t`, and `C-o` `C-i` `C-s` work the jump list.
Search is `/` `?` `n` `N` `*`. The `m` group is helix's, with more objects
(see [Match mode](../reference/match.md)), and so are `z`, `Z` and `]`/`[`
for paragraphs, changes and diagnostics.

`.` is helix's `.`: it repeats the last insert, not the last change. Under the
vim keymap it is vim's `.` instead (see [Coming from vim](vim.md)).

`J` joins lines as helix does, except across Chinese text: two lines that meet
between two Chinese characters are joined with no space.

## Words go through a segmenter

Chinese has no spaces between words, so `w` `b` `e` cannot cut at spaces.
yumete finds words with a Chinese segmenter instead.

- `w` moves by word: on 今天天气很好，我们去爬山 it takes 今天, then 天气.
- `e` and `b` move by clause in Chinese, from one punctuation mark to the
  next: `e` takes 今天天气很好, up to the comma. In English they still move by
  word.
- `W` `B` `E` still cut at spaces.

`:word-level off` makes a run of Chinese characters one word, the way helix
sees it.

## Keys that differ

| Key | helix | yumete |
| --- | --- | --- |
| `` ` `` | lower case | a menu: `` `l `` lower, `` `u `` upper, ``` `` ``` switch, and conversions between simplified, traditional, full width and half width |
| `` A-` `` | upper case | not bound; use `` `u `` |
| `H` `L` | not bound | previous and next sentence |
| `M` `'` | not bound | `M a` names this place, `' a` goes back to it, across files |
| `C-c` | comment | not bound; use `Space c` |
| `C-w` | window mode | regions, also `Space w`: `w` next, `h` `j` `k` `l` move, `s` split, `q` close, `o` only, `e` `i` show or hide the left and right sidebar, `E` `I` go into it |
| `gd` `gD` | definition, declaration | definition, and definition in the second editor region |
| `gy` `gi` `gm` | type definition, implementation, last modified file | not bound |
| `=` `$` | format, keep by shell command | not bound |
| `A-o` `A-i` `A-p` `A-n` `A-a` `A-e` `A-b` | syntax tree selection | not bound |

`gw` jump labels are the same key and work the same way, with three
differences. In Chinese the labels go on clause starts, the places `e` stops,
not on every word. A label is one letter when the screen has 26 places or
fewer, two otherwise. And a label covers one character, so a line of Chinese
does not shift when the labels appear.

New in the `g` group: `gL` follows a link, `gx` jumps to a word on the screen
when you type its first two letters, `gz` jumps to a Chinese character when you
type its pinyin, `g/` searches for the selection, and `g?` shows the results in
the second editor region.

The `]` and `[` group adds `m` for a merge conflict. In a code file `f`, `t`
and `c` go to the next function, type and comment, as in helix; `a`, `e`, `T`,
`x` and `G` are not there.

## The `Space` menu

These are the same as helix: `f` `F` `e` `b` `y` `p` `P` `s` `k` `d` `D` `r`
`a` `w` `c` `C` `/` `?`.

These differ:

- `Space E` browses files from this file's directory. helix spells it
  `Space .`.
- Not there: `j` (jump list picker), `g` (changed files), `S` (workspace
  symbols), `h` (references), `'` (last picker), `Y`, `R` and `G`. For
  references use `gr`.
- Added: `n` for what the character under the cursor is (its readings and
  how it is written), `x` for the change on this line, `i` for the record of
  the table row the cursor is in, `t` for [tables](../writing/tables.md), `"`
  for registers, `m` for a merge conflict, `o` for recent files and projects,
  and `z` for the [input method](../writing/ime.md).
- A capital shows the same thing in the sidebar instead of a popup: `N`, `K`,
  `D`, `X`, `I`.
- `Space Space` turns a page down and `Space Backspace` a page up.

## Tables are on `Space t`

`t` is till, as in helix. The table group is `Space t`. See
[Tables](../writing/tables.md).

## Searching and replacing across a project

`Space /` opens the search panel in the sidebar. It starts on this file; its
**In** row switches it to the whole project. The panel also chooses
case, whole words, regex, and whether pinyin and simplified or traditional
characters count as a match.

- `:search-project` (`:sp`) opens the panel already on the project.
- `:replace-project` (`:rp`) opens it with a replace row.
- `:s/old/new/` replaces in this file, the way vim's `:s` does.

See [Search and pickers](../guide/search.md).

## The sidebar

yumete has a sidebar on each side of the text. The capital `Space` keys above
show their panel there, and `:sidebar explorer` shows the project's files as a
tree. `Space e` is a picker, as in helix, not this panel.
`C-w e` and `C-w i` show or hide the left and right sidebar, and `C-w E` and
`C-w I` move into it. `:sidebar` with a panel name opens that panel, and
`:sidebar off` closes it. See [Windows and the sidebar](../guide/windows.md).

## What yumete adds

- An input method for Chinese, built in. See [The input method](../writing/ime.md).
- `mi s` and `mi u` select a sentence or a clause, and every bracket key also
  covers the Chinese brackets. See [Match mode](../reference/match.md).
- [Tables](../writing/tables.md), [vertical text](../writing/vertical.md) and
  [ruby](../writing/ruby.md).
- `:keymap vim` switches to vim's keys for this session. See
  [Coming from vim](vim.md).
