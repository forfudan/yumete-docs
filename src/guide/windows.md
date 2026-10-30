# Windows and the sidebar

The screen is divided into **regions** of two kinds:

- **windows**, where you write — one to start with, as many as you split;
- the two **sidebars**, left and right, each holding one panel at a time.

Windows and sidebars are moved between, opened and closed with one group of
keys. The group has two doors, `C-w` and `Space w`, with the same letters
after either, as in helix.

## Region keys

| Key | Action |
| --- | --- |
| `C-w w` | go to the next open region: the windows in order, then the left sidebar, then the right |
| `C-w h` `C-w j` `C-w k` `C-w l` | go to the region in that direction, if there is one |
| `C-w v` | open a window beside this one and go there |
| `C-w s` | open a window below this one and go there |
| `C-w e` `C-w i` | open or close the left / right sidebar; the keys stay where they are |
| `C-w E` `C-w I` | open the left / right sidebar and go into it |
| `C-w q` | close the region you are in |
| `C-w o` | keep only this window; close every other window and both sidebars |

You can keep `Ctrl` held: `C-w C-w` is the same as `C-w w`, and so on for the
other letters. The arrow keys work in place of `h` `j` `k` `l`.

Going and opening are separate. `C-w w` and the direction keys only move
among regions that are open; where nothing lies that way, they do nothing. To
open a sidebar use `C-w e` or `C-w E`, and to open a window use `C-w v` or
`C-w s`.

Lower case leaves the keys where they are. `C-w e` folds the left sidebar
away or brings it back while you keep typing in the text. Upper case `C-w E`
opens the sidebar and moves into it, and never closes it.

`C-w q` in the only window left does nothing but say so: closing it would
mean leaving, and that is `:q`.

## Windows

A new window opens on the file you are in, at the place you are at, and
takes the keys. From then on it is its own: `:open`, the file picker, the
Explorer and the Buffers panel change the file in the window you are in and
no other, so two windows can show two files, or two places in one.

```
C-w v             a window beside this one
C-w s             a window below this one
:vsplit ch2.md    a window beside, with that file in it
:hsplit notes.md  a window below, with that file in it
```

The words are positions, not directions: on a vertical page, where the text
itself runs down the columns, "beside" still means side by side and "below"
still means under. On a vertical page a window beside opens on the left,
the way the reading runs.

Every split halves the room the window had, and you may go on splitting
until a window would be too narrow for its text. `C-w q` and `:q` close the
window you are in and give its room back to the one next to it; the file
stays open, changes and all. In the last window `:q` works as usual (see
[Saving and quitting](./files.md#saving-and-quitting)). `C-w o` keeps the
window you are in and closes the rest.

The rule between two windows one above the other carries the name of the
file in the window you are not in. Each window keeps its own scroll, and
long lines fold to each window's own width.

Some commands use another window to show you something without moving you:

- `g?` shows the next match of the word under the cursor there (see
  [Search and pickers](./search.md));
- `:git-show` opens the committed copy of the file there, read-only (see
  [Files, saving and changes](./files.md)).

They use the window next to yours, opening one below if there is none.

## Sidebars

There is one sidebar on each side, and each holds one panel at a time. The
left sidebar holds four panels, and `Tab` steps through them:

| Panel | Shows | Opened with |
| --- | --- | --- |
| Explorer | the project's files, as a tree | `:sidebar explorer` |
| Buffers | the open files; a changed one is marked `+` | `:sidebar buffers` |
| Outline | the headings of the current file | `Space s`, `:sidebar outline` |
| Search | the search panel | `Space /`, `:sidebar search` |

The right sidebar holds one panel, **Info**, described below.

`:sidebar` on its own says what is open, `:sidebar off` closes both, and
`:sidebar info` opens the right one. `Space e` and `Space f` are pickers, not
the Explorer panel; see [Pickers](./search.md#pickers).

### Keys in a sidebar

When a sidebar has the keys, the status line lists the keys it takes,
including how to get back.

| Key | Action |
| --- | --- |
| `j` `k` | down / up a row |
| `J` `K` | down / up twelve rows (also `PageDown` `PageUp`) |
| `g` `G` | the first / last row |
| `h` | fold a folder or heading |
| `l` `Enter` | open: a folder, a file, a heading, a buffer |
| `Tab` `S-Tab` | the next / previous panel on this side |
| `w` | make this sidebar wider, one step |
| `q` | give the keys back to the text; the sidebar stays open |
| `C-w` | the region keys, as in the text |
| `:` `Space` | the command line and the `Space` menu, as in the text |

`q` and `C-w w` both leave the sidebar without closing it. The way to close
it is `C-w q` (or `C-w e` / `C-w i`). `Esc` does not close a sidebar: it is
kept for leaving a box you are typing in.

Choosing a file or a heading with `Enter` takes you there and gives the keys
back to the text.

### The frame

A sidebar that has the keys is framed in a double gold line. One that does
not has a thin grey frame. The panel's name is on the top edge. When a side
holds more than one panel, the bottom edge lists them in the order `Tab`
walks, for example `Tab Explorer>Buffers>Outline>Search`.

### Width

`w` in a sidebar steps its width through four sizes: 2/10, 3/10, 4/10 and
5/10 of the window, then back to 2/10. The default is 3/10. The status line
shows the fraction after each press.

The width belongs to the side, not to the panel. Switching panels with `Tab`,
or closing and reopening the sidebar, keeps it.

The text always keeps at least a third of the window, and never less than 24
columns. When both sidebars are open on a small window they shrink together
to make room; they grow back to the width you chose when the window widens.
A window narrower than 36 columns has no room for a sidebar at all.

## The outline: `Space s`

`Space s` asks for the outline, and what it does depends on where you are:

- sidebar closed: open it on the outline and go in;
- open on another panel: switch to the outline;
- open on the outline, keys in the text: go back into it;
- already in the outline: close it.

From a closed sidebar, pressing `Space s` twice brings you back to where you started; from any other state the second press closes the sidebar.

The outline lists Markdown headings (`#` followed by a space) and Typst
headings (`=`). In a text file it shows at the right edge how much each heading's
section holds, its subsections included. `h` folds the sections under a heading and `l`
opens them again; `h` on a heading with nothing under it folds its parent. In
a Typst file, the outline also reads the files the document `#include`s, and
`Enter` on one of their headings opens that file.

## The Info panel

The right sidebar holds one panel, Info, which shows one kind of answer at a
time about what is under the cursor. Its title says which one it is showing.
Each kind has a lower-case key that floats a small window beside the text and
an upper-case key that puts the same answer in the sidebar:

| Kind | Float | Sidebar |
| --- | --- | --- |
| dictionary: the character's decomposition, readings, code point | `Space n` | `Space N` |
| documentation from the language server | `Space k` | `Space K` |
| diagnostics | `Space d` | `Space D` |
| the change here: what this block was before | `Space x` | `Space X` |
| the record (table row details) | `Space i` | `Space I` |
| the wiki entry for the name under the cursor | | `:wiki-panel` |

None of these take the keys: the cursor stays in the text and you keep
typing. When an answer is too long to read at a glance, `C-w w` walks into the
sidebar, and `j` `k` `J` `K` `g` `G` scroll it. In the change view, `u` puts
back what the block was before and `y` copies the old text.

A dictionary answer is about the character you asked about. Move the cursor
off it and the answer goes away.

## Related

- [Search and pickers](./search.md): the search panel in detail.
- [Files, saving and changes](./files.md): `:git-show`, `:diff` and the change
  bar.
- [Keymap](../reference/keymap.md): every key.
