# Configuration

yumete reads its settings from TOML files. You need none of them: every setting
has a default, and the editor runs the same with no file at all. When you do
want to change something, you can write the file by hand or use the settings
panel, which writes it for you.

This page covers where the files are, how they combine, and what happens when
one is wrong. For what each setting does, see [Settings](../reference/settings.md).
Its full list is the settings panel's; the few keys not on the panel are
explained on the pages that own them, and that page links to each.

## Where the files are

There are two files, and both are optional.

| File | Where |
| --- | --- |
| Global | `~/.config/yumete/config.toml` on macOS and Linux (`$XDG_CONFIG_HOME/yumete/config.toml` when that variable is set), `%APPDATA%\yumete\config.toml` on Windows |
| Project | `.yumete/config.toml` at the root of the project, or `.yumete.toml` in the same place |

The global file holds your own habits. The project file holds what belongs to
one book or one repository: its layout, its markup, its language servers. It
travels with the project, so a collaborator who opens the same folder gets the
same page.

`:config-open` opens the global file and `:config-open-workspace` the project's,
as helix's commands of those names do. Either opens empty when the file is not
there yet; `:w` creates it, and `:w!` its folder too if that is missing.

The project file overrides the global one **item by item**. A project that sets
only `layout = "vertical"` keeps everything else from your global file.

### Which project you are in

The project is worked out from the working directory, not from the file you
open: `ye ~/book/ch01.md` still reads the project config from where you stand.
See [A book of many files](../writing/book.md#the-project-and-the-working-directory).

### An example

```toml
# ~/.config/yumete/config.toml

[editor]
line_numbers = "relative"
indent = 2           # first-line indent of a paragraph, in cells
ruler = 40           # mark text past column 40

[theme]
name = "moxiang"
mode = "auto"        # follow the terminal's dark or light background

[ime]
scheme = "lingming"

[keys]
preset = "vim"
```

```toml
# ~/book/.yumete/config.toml

[editor]
layout = "vertical"
zong_length = 24     # characters to a column
```

### The sections

| Section | What it holds |
| --- | --- |
| `[editor]` | layout, line numbers, indent, wrapping, search, saving, the interface language. Most settings live here |
| `[theme]` | the theme and its colours. See [Themes](./themes.md) |
| `[panel]` | the candidate bar of the input method |
| `[ime]` | the input method: scheme, commit style, where its data is |
| `[keys]` | the keymap preset, and your own bindings under `[keys.normal]`. See [Key remapping](./remapping.md) |
| `[syntax]` | which markup a file is read as, by extension or by file name |
| `[language.<name>]` | the programs that format or preview a kind of file |
| `[lsp.<name>]` | the language server for a kind of file. See [Language servers](./languages.md) |
| `[export]` | how an export is set: the paper, vertical or not, ruby, fonts. See [Export](../writing/export.md) |

### What a project file cannot set

Two things are read from the global file only:

- the key tables (`[keys.normal]`, `[keys.helix.normal]`, `[keys.vim.normal]`
  and the rest), because a binding can run a command line;
- `screenshot` under `[editor]`, because it runs through a shell.

A project folder can come from anyone, and opening it should not run their
commands. If a project file sets either one, yumete ignores that part and says
so at startup. `[language.*]` and `[lsp.*]` are allowed in a project file:
they never pass through a shell, and each placeholder such as `{file}` is handed
to the program as a single argument.

### Screenshots: `[editor] screenshot`

`:shot png` (and `:shot` to the clipboard) runs the shell line in
`[editor] screenshot`. On macOS the default takes yumete's own window with
`screencapture`:

```toml
[editor]
screenshot = 'screencapture -x -o -l"$YUMETE_WINDOW" "${YUMETE_SHOT:--c}"'
```

yumete finds its terminal window itself and hands the line `$YUMETE_WINDOW`
(the window's number), `$YUMETE_WINDOW_RECT` (`x,y,w,h` on the screen) and
`$YUMETE_SHOT` (the file to write; empty means the clipboard). Nothing the line
prints reaches the screen; a failure is one sentence on the status line.
macOS asks for one permission: Screen Recording for your terminal app, under
System Settings › Privacy & Security › Screen & System Audio Recording.
Without it, `:shot` says so and takes nothing.

## Bringing a config from helix, vim, Neovim or LazyVim

`ye --import` writes another editor's config into yumete's, once:

| Command | What it writes |
| --- | --- |
| `ye --import helix` | your helix `config.toml`: the keys and the `[editor]` settings yumete has |
| `ye --import vim` | your vimrc: the settings and maps that translate for certain (see [Coming from vim](../from/vim.md#your-vim-or-neovim-config)) |
| `ye --import nvim` | your Neovim config, the same way; a LazyVim config gets the LazyVim import |
| `ye --import lazyvim` | LazyVim's `Space` menu, the config on [Coming from LazyVim](../from/lazyvim.md), with your own maps and options on top |

No theme is carried over from any of them, since their themes are not yumete's; pick one with `:theme`.

helix's file is read as it is written, and nothing runs. vim, Neovim and
LazyVim can only say what a config sets by running it, so for those yumete
starts your own editor headless, on a copy of its config in a temporary
directory, reads what it set, and removes the copy. Any code in your config
runs there, as it does each time you open that editor, but your config, your
plugins and their lock files are never written to. git run by your config or
a plugin manager stays inside the copy too: the copy has no `.git`, and git
is not let climb to a repository the temporary directory happens to sit in.
A `NVIM_APPNAME` that Neovim would refuse (an absolute path, `..`, a
leading `~`) is refused before anything is copied. It needs Neovim 0.9 or
Vim 9.0.

The copy follows links, with two exceptions so that it is always one finite
tree. A link to a folder the config is already inside, such as
`lua/loop -> ..`, is made again as a link inside the copy, so your config
reads what it always reads. A link to a folder outside the config, such as
`lua/shared -> ~/dotfiles/shared`, is left out, and the import names it on
the terminal (`left out of the copy it runs on: …`): copied, it could be your
whole home, and as a link your editor could write through it to your own
files. A link to a file is copied wherever it points, so a stowed `init.lua`
works. The config itself may be a link (`~/.config/nvim -> ~/dotfiles/nvim`).

The import gives up after 10 seconds, counted for the copy and again for each
run of your editor: a config that asks a question, or a plugin manager that
starts downloading, would otherwise never end, and a config too big to copy
in that time, more than 200,000 files and folders or deeper than 40, is
reported as such. Whatever your editor starts while it runs, such as a plugin
manager's `git fetch` or a language server, is stopped with it, a job started
with `detach` too. Ctrl-C, `kill` or closing the terminal while the import
runs does the same: your editor and what it started are stopped, the copy is
removed, and then yumete ends.

What can still escape: a process your config starts that leaves your
editor's process group, clears its environment and changes to a folder
outside the copy, all three, is not found. On Windows only the editor itself
is stopped at the time limit, what it started may run on, and Ctrl-C ends
yumete without removing the copy from the temporary folder.

If you have no global config yet, the import becomes it. If you have one, the
import is written beside it as `config.imported.toml`, and you copy what you
want across. The file starts with where it came from, and ends with a
`# Not carried over:` list: each key, setting or file that did not come
over, and why, such as a helix command yumete does not have or a key it
cannot bind. Only what you changed from your editor's own defaults comes
over, and only what yumete can do the same way: when in doubt a line is
listed, not written. Nothing reads the other editor's files again after this.

Your own maps come over even where they take one of yumete's `Space` keys:
they are your habits. Above that list, the file says which keys were taken
and where what they did is now, such as `Space b  open the buffer picker:
now Space ,`; a command left with no key is still in `Space ?`. The terminal
prints the first few, and the next time yumete starts it opens the whole
report in a read-only buffer, once.

## The settings panel

`:settings` (or `:set` with nothing after it) opens every setting on one full page, each with its
name and a line saying what it does. You do not need to know what a key is
called, or which section it lives in. `:settings editor.scrolloff` opens it on
that setting, and so does its name as the panel shows it, spaces and all, in
any of the interface's languages (`:settings first-line indent`,
`:settings 首行缩进`); `Tab` on the `:` line completes the TOML paths.

```text
                Setting                 ┆Value                             ┆From
──────────────┬─────────────────────────────────────────────────────────────────────
  layout      │layout
  marks       │ layout                  ┆[horizontal]                      ┆factory
  interface   │ hjkl in vertical layout ┆[visual]                          ┆factory
  colours     │*column length           ┆32                                ┆global
  input method│ column gap              ┆0                                 ┆factory
  editing     │ pages, vertical         ┆1                                 ┆factory
  files       │ pages, horizontal       ┆1                                 ┆factory
  keys        │*first-line indent       ┆2                                 ┆global
              │ text width              ┆0                                 ┆factory
              │ hard-wrap width         ┆0                                 ┆factory
              │ ruler                   ┆0                                 ┆factory
              │ add a final newline     ┆[x]                               ┆factory
              │ soft wrap               ┆[x]                               ┆factory
              ├─ ↓ 86 more ─────────────────────────────────────────────────────────
              │  characters per column in vertical layout; prose reads well up to
              │  about 32
              │  a number, 0, or 8 to 64; factory 0 (0 = as tall as the window)
              │
              │  factory 0
              │  global  32   ← in force
              │  project unset
──────────────┴─────────────────────────────────────────────────────────────────────
  jk move, hl group, / search, Enter change, Space toggle, r reset, u undo,
  U redo, p paste, "+p paste the clipboard, y copy, Tab global/project,
  e open the config file, q close
 TBL.NOR  settings   writing to global   ~/.config/yumete/config.toml   3 of 98
```

The settings are a table of three columns: the setting, its value, and where
the value comes from — factory, global or project, saying so when the other
file sets it too. The group names are headings in it, and the column on the
left shows which group you are in (`h` and `l`, or a click, go to another);
in a window narrower than 80 columns that column goes, and `h` `l` still
walk the groups. The groups follow what a setting changes on screen, not the
TOML section it lives in. A `*` marks the rows the file you are editing sets.

The foot is the text's own: a status line with `TBL.NOR` where `NOR` stands,
the file a change is written into (`Tab` turns it from global to project),
and how far down the list you are; under it the command row, where what is
said and what you type appear (`/` reads `search settings:` there, and
the status line keeps the search). The list scrolls as the text does, keeping
`scrolloff` rows around the cursor.

Under the list, the line for the setting under the cursor says what it does,
what it takes (a switch, a number and its range, the choices, or text), its
factory value, and what `0` means where it means something; then its three
layers. The keys above the status line change with what you are doing: the
list, a choice's list, a search, a value being typed. In a window under 24
rows they take one row, and `?` shows them all.

The mouse works too: a click on a group goes to it, a click on a row moves to
it, a click on a value in a choice's list picks it (a click elsewhere puts
the list away), and the wheel moves through the list. Nothing reaches the
document behind the panel.

| Key | What it does |
| --- | --- |
| `j` `k` | move down and up, through every group. `gg` and `G` go to the top and bottom |
| `h` `l` | go to the group before or after, as the column on the left lists them; a search's groups only, while it is in force |
| `/` | search every setting by its name, its description or its TOML key, in either Chinese script or by its full pinyin (`yulan` finds 预览); the list narrows as you type, and the cursor lands on the setting the search names (`/theme` is the theme). `Enter` keeps the search, `Esc` in the list clears it |
| `Enter` | change the setting: a switch flips; a choice opens a list with what each value means (`j` `k`, `Enter`, `Esc`), and a theme is shown as you move through the list; a number or text is edited in its cell (`CEL.NOR`) |
| `Space` | flip a switch or step to the next choice; on a number or text, the same as `Enter` |
| `c` | on a number or text: empty the cell and type a new value (`CEL.INS`) |
| `r` | reset: remove this setting from the file, so the layer below applies again |
| `u` / `U` or `C-r` | undo / redo a change; undo writes the file back. Redo takes helix's `U` and vim's `C-r` both, and the key row names the one your keymap uses |
| `p` `P` | put the register in place of the value, in its cell, for `Esc` to write. `"a` names a register, `"+p` is the system clipboard. A paste from the terminal (⌘V) does the same |
| `y` | copy the value |
| `Tab` | switch the file your changes go to: global or project |
| `e` | open that file in the editor, at the setting's line |
| `q` | close the panel. `Esc` puts away a list, a page or a search, but never closes the panel |

A cell is edited with every key of the text, under the keymap you use: `w`
`b` `e`, `d` `c` `y` `p`, `i` `a`, selections and `u` all work, and the input
method types in it as in the text; the status line says `CEL.NOR`,
`CEL.INS` or `CEL.SEL`. A value longer than the cell slides to keep the caret
in sight. `Esc` in Normal, with nothing left to cancel, writes the value and
goes back to the row, and so does `Enter`; a value left as it was writes
nothing. A value yumete does not take stays in the cell, and the reason, with
the values or the range it takes, appears under the setting. Whatever you did
in a cell is one `u` on the rows.

The panel takes no other `:` commands. `:` opens a line that takes what you type
up to `Enter`, with no input method, as the editor's own `:` line: `:q`, `:wq`
and `:x` close the panel, as habit expects, `:settings editor.scrolloff` (or
`:set editor.scrolloff`, or a setting's name as the panel shows it) goes to
that setting, and anything else is answered that the panel takes no commands.
A config file changed or deleted by something else while the panel is open is
read again, and the panel says so once; `u` then keeps that change.

With `[editor] command_line = false` there is no command row, and what the
panel says appears on its own bottom row, over the key row, until it goes.

### Which file, which layer

Both files are tabs at the top; the lit one is where changes go, and the path
on the right is that file. A `+` after the path means the file does not exist
yet; the first change creates it. The panel opens on the global file; press
`Tab` for the project one.

If the project file sets a value and you change it in the global file, the row
does not move, because the project value still wins. The panel says so under
the setting.

### Saving

There is nothing to save: every change you confirm is written to the file at
once and takes effect, and the bottom row names the file. `u` takes a change
back by writing the file as it was, and `C-r` writes it again. If the file was
changed by something else in between, `u` sets the setting back on what the
file holds now, keeping that change, and `C-r` then puts your change back on
what `u` wrote. When `u` takes away a file your change created, the bottom row
says it was removed.

The panel changes only the lines it needs to. Your comments, the order of your
settings, your blank lines and keys the panel does not know stay as they were,
so a config kept in git shows a one-line diff. Taking away the last setting of
a table takes its `[table]` line too. If the file changed on disk while the
panel was open, the change is made on the copy on disk, so it does not undo
someone else's. Windows line endings and a byte-order mark are kept, the
comment over a key that `r` takes out stays, and an inline table such as
`flavor_items = { … }` is changed where it stands. A config that is a link
to a file no longer there is not replaced by a file of its own: the panel
says so and writes nothing.

When a file cannot be read — a TOML mistake, or a key yumete does not take —
the panel says so at the top, with the line and the parser's message. Its
settings are shown as unknown, since none of them is in force, and the panel
does not write it: press `e` to open it and fix it (see
[below](#when-the-config-is-wrong)).

### What the panel does not show

Some settings are not on the panel: the theme colours, `[keys.normal]`,
`[syntax]`, `[language.*]`, `[lsp.*]`, `[ime] data_dirs`,
`[editor] usage_groups` and `[editor] screenshot`. Write those by hand;
[Settings](../reference/settings.md#not-on-the-panel) says which page explains
each. `e` on the panel opens the file it is editing at the setting's line, so you
do not have to remember where it lives.

## Reloading

If you edit a config file by hand while the editor is running, run
`:reload-config` (or helix's name, `:config-reload`) to apply it without
restarting.

Commands such as `:theme`, `:view-hud` or `:view-focus` change a setting for this
session only. `:reload-config` also puts those back to what the files say.

## When the config is wrong

yumete checks the config every time it reads it.

**A file that does not parse is ignored as a whole.** This covers a broken
quote, a value of the wrong type, and a key yumete does not know. Unknown keys
count as errors so that a typo such as `zong_lenght = 24` is reported instead of
doing nothing in silence. The message names the file and the key, and lists
the keys that would have been accepted there. The other file still applies: a
broken project file leaves your global settings in force, and a broken global
file leaves the factory defaults under the project file.

**A value that parses but makes no sense is skipped on its own**, with a
warning: a number out of range, a word that is not one of the choices, or a
binding whose right-hand side is not an action. The rest of the file applies.

Either kind shows on the line under the status line when the editor starts or
reloads. To see them again:

- `:check-config` reads both files and lists every problem as
  `path:line: message`, without opening either file. A clean config says so in
  one line.
- Open the config file in yumete. Each line with a problem gets a mark in the
  gutter, the same way a language server marks code; `Space l` shows the
  message under the cursor. The marks update as you type, so a line goes quiet
  the moment it is right. Nothing needs to be installed for this.

## Next

- [Settings](../reference/settings.md): every setting on the panel, and where the rest are.
- [Key remapping](./remapping.md): `[keys.normal]`.
- [Themes](./themes.md) and [Language servers](./languages.md).
