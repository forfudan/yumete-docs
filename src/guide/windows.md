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
| `C-w n s` `C-w n v` | open a blank window below or beside this one and go there |
| `C-w e` `C-w i` | open or close the left / right sidebar; the keys stay where they are |
| `C-w E` `C-w I` | open the left / right sidebar and go into it |
| `C-w q` | close the region you are in; in the last window it is `:q` |
| `C-w o` | keep only this window; close every other window and both sidebars |
| `C-w t` | turn the split this window is in: beside becomes below, below becomes beside |
| `C-w H` `C-w J` `C-w K` `C-w L` | swap this window with the one in that direction; the keys stay in this one |
| `C-w f` `C-w F` | open the file under the cursor, as `gf` does, in a new window below or beside |

You can keep `Ctrl` held: `C-w C-w` is the same as `C-w w`, and so on for the
other letters. The arrow keys work in place of `h` `j` `k` `l`.

Going and opening are separate. `C-w w` and the direction keys only move
among regions that are open; where nothing lies that way, they do nothing. To
open a sidebar use `C-w e` or `C-w E`, and to open a window use `C-w v` or
`C-w s`.

Lower case leaves the keys where they are. `C-w e` folds the left sidebar
away or brings it back while you keep typing in the text. Upper case `C-w E`
opens the sidebar and moves into it, and never closes it.

`C-w q` in the last window is `:q`, as in helix and vim.

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
C-w n s, :hnew    a blank window below, on a new empty buffer
C-w n v, :vnew    a blank window beside, on a new empty buffer
```

With the vim key preset a new window opens above or to the left of this
one, as vim's does; with helix's, below or to the right. `C-w n` (or
`C-w C-n`) opens the blank window at once, above, as vim does. `C-w t`, `C-w F` and `C-w H` `J` `K` `L` are
vim's, and these are added:

| Key | Action |
| --- | --- |
| `C-w W` | go to the region before this one, wrapping |
| `C-w t` `C-w b` | go to the first / last window |
| `C-w p` | go to the window you were in before |
| *N* `C-w w`, *N* `C-w W` | go to window *N* |
| `C-w x` | trade places with the next window of this row or column (from the last, the one before; *N* `C-w x`, the *N*th); the keys stay at that place on the screen |
| `C-w r` `C-w R` | move the windows of this row or column one place on / back; the keys stay with this window. Not when one of them is split the other way |
| `C-w H` `C-w J` `C-w K` `C-w L` | move this window to that edge of the screen, taking the whole of it |
| `C-w c` | close the region you are in, but never the last window; *N* `C-w c` closes window *N* |
| `C-w S` `C-w F` | the same as `C-w s` and `C-w f` |
| `C-w ^` | open the file before this one in a new window above |
| `C-w :` | the command line |

vim's size keys (`=` `+` `-` `<` `>` `_` `|`) are not there, since the
windows always share the room equally; nor are its tab, preview-window and
tag keys.

The words are positions, not directions: on a vertical page, where the text
itself runs down the columns, "beside" still means side by side and "below"
still means under. On a vertical page, where reading runs right to left,
the windows beside each other are laid out from the right.

Windows side by side, or one above another, share the room equally, as in
vim and helix, and you may go on splitting until a window would be too
narrow for its text. `C-w q` and `:q` close the window you are in and the
others share its room; the file stays open, changes and all. The keys go back to the window you were in
before this one, as in VS Code and tmux. If that window has closed too, they
go to the window that takes the room, as in vim. In the last window `:q` works as usual (see
[Saving and quitting](./files.md#saving-and-quitting)). `C-w o` keeps the
window you are in and closes the rest.

The tabs along the top are the open files, one each, whatever the windows show.
The file of the window you are in is lit; a file another window shows is
underlined. `:bc` closes a file: a window that was showing it goes back to the
file it showed before (a new window starts with the history of the one it
was split from), or closes when it has none to go back to.

The rule between two windows one above the other carries the name of the
file in the window you are not in. A window you are not in keeps 95% of its
ink, a little dimmer than the one you are in; `[theme] inactive` sets it, and
100 does not dim at all, as in vim and helix. Each window keeps its own scroll, and
long lines fold to each window's own width.

The session remembers the windows and the sidebars, so `ye -r` opens them as
you left them (see "Sessions" in [Files](./files.md)).

Some commands use another window to show you something without moving you:

- `:table-find column` shows a table's hits there (see
  [Tables](../writing/tables.md));
- `:git-show` opens the committed copy of the file there, read-only (see
  [Files, saving and changes](./files.md)).

They use the window next to yours, opening one below if there is none.

## Sidebars

There is one sidebar on each side, and each holds one panel at a time. The
left sidebar holds five panels, and `Tab` steps through them:

| Panel | Shows | Opened with |
| --- | --- | --- |
| Explorer | the project's files, as a tree | `:sidebar-explorer` |
| Buffers | the open files; a changed one is marked `+` | `:sidebar-buffers` |
| Outline | the headings of the current file | `:sidebar-outline` |
| Search | the search panel | `Space /`, `:sidebar-search` |
| Links | the links into and out of the current file (see [Links](../writing/links.md)) | `:links`, `:sidebar-links` |

The right sidebar holds one panel, **Info**, described below.

With the mouse, the block at each end of the tab line opens or closes that
side's sidebar: grey when the side is closed, the panel's frame colour when it
is open, gold when the keys are in it. `[editor] sidebar_buttons = false` takes
the blocks away; there are none while the tab line is hidden. A sidebar opened
again, by its block or by `C-w e` and `C-w i`, shows the panel it was closed on.

Each panel's command opens it, and closes it when it is already showing;
`on` and `off` after it say which you want. The five on the left take the keys
when they open. `:sidebar-info` opens the right
sidebar and leaves the keys in the text, as `C-w i` does; `C-w I` moves into
it. `Space e` and `Space f` are pickers, not the Explorer panel; see
[Pickers](./search.md#pickers).

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

## The outline

`:sidebar-outline` opens the outline in the sidebar. `:outline 2` lists
headings down to level 2 only, `:outline 0` closes the outline, and `:outline`
on its own says whether it is open, how deep it lists and how many headings
that is. To jump to a heading
without opening a sidebar, `Space s` lists the same headings in a picker
(see [Pickers](./search.md#pickers)).

The outline lists Markdown headings (`#` followed by a space) and Typst
headings (`=`). In a text file it shows at the right edge how much each heading's
section holds, its subsections included. `h` hides the headings under a heading and `l`
shows them again; `h` on a heading with nothing under it does this to its parent.
These fold the list, not the page; a section folded on the page has dots to its
count (see [Folds](../reference/folds.md#in-the-outline)). In
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
| documentation from the language server; on writing, the wiki entry | `Space k` | `Space K` |
| diagnostics | `Space l` | `Space L` |
| the change here: what this block was before | `Space x` | `Space X` |
| the record (table row details) | `Space i` | `Space I` |
| the wiki entry for the name under the cursor | | `:sidebar-info` |

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
