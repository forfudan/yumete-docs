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
| `[export]` | the paper size for printing |

### What a project file cannot set

Two things are read from the global file only:

- `[keys.normal]`, because a binding can run a command line;
- `screenshot` under `[editor]`, because it runs through a shell.

A project folder can come from anyone, and opening it should not run their
commands. If a project file sets either one, yumete ignores that part and says
so at startup. `[language.*]` and `[lsp.*]` are allowed in a project file:
they never pass through a shell, and each placeholder such as `{file}` is handed
to the program as a single argument.

## The settings panel

`:settings` (short: `:set`) opens every setting on one full page, each with its
name and a line saying what it does. You do not need to know what a key is
called, or which section it lives in.

```text
 settings [global]                               ~/.config/yumete/config.toml
──────────────┬───────────────────────────────────────────────────────────────
  layout      │ layout                        [across]
  marks       │ column length                 0
  interface   │ indent                        2
  colours     │ measure                       0
  input       │ ruler                         40
  editing     │ soft wrap                     [x]
  files       │ hanging punctuation           [ ]
  keys        │
              ├───────────────────────────────────────────────────────────────
              │  cells at the head of a paragraph; the Chinese convention is 2
              │
              │  factory 0
              │  global  2   ← in force
              │  project unset
──────────────┴───────────────────────────────────────────────────────────────
  hl left/right, jk move, space toggle, i edit, c retype, d drop, e open it,
  Tab which file, :w save, :q leave

```

The bottom row is the command line: `:w` and `:q` are typed there, and what
the panel says appears there, so the key hints above it stay in view.

The groups on the left follow what a setting changes on screen, not the TOML
section it lives in.

| Key | What it does |
| --- | --- |
| `h` `l` | move between the groups on the left and the settings on the right |
| `j` `k` | move up and down. `g` and `G` go to the top and bottom |
| `Space` | flip a switch, step to the next choice, or add one to a number |
| `i` | type a value, starting from the one there. `Enter` keeps it, `Esc` leaves the old one, `Backspace` deletes a character |
| `c` | type a value from empty |
| `d` | remove this setting from the file, so the layer below applies again |
| `Tab` | switch the file your edits go to: global or project |
| `e` | open that file in the editor |
| `:w` | save |
| `:q` | close the panel. `:wq` saves first |

### Which file, which layer

The title says which file an edit goes to, global or project, and the path on
the right is that file. A `+` after the path means the file does not exist yet;
saving creates it. The panel opens on the global file; press `Tab` for the
project one.

The block under the list explains the setting under the cursor and shows its
three layers: the factory default, the global file, and the project file. The
one in force is marked. If the project file sets a value and you change it in
the global file, the line on screen does not move, because the project value
still wins. The panel says so under the setting.

### Saving

Nothing takes effect until you save with `:w`. Saving writes the file and
applies it at once.

The panel changes only the lines it needs to. Your comments, the order of your
settings and your blank lines stay as they were, so a config kept in git shows
a one-line diff. If the file changed on disk while the panel was open, `:w`
edits the current copy on disk, so it does not undo someone else's change.

When the file holds a key yumete does not know, saving comments that line out
and leaves a note beside it. An unknown key would otherwise stop the whole file
from applying (see [below](#when-the-config-is-wrong)).

### What the panel does not show

Some settings are not on the panel: the theme colours, `[keys.normal]`,
`[syntax]`, `[language.*]`, `[lsp.*]`, `[export] page`, `[ime] data_dirs`,
`[editor] usage_groups` and `[editor] screenshot`. Write those by hand;
[Settings](../reference/settings.md#not-on-the-panel) says which page explains
each. `e` on the panel opens the file it is editing, so you do
not have to remember where it lives.

## Reloading

If you edit a config file by hand while the editor is running, run
`:reload-config` to apply it without restarting.

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
  gutter, the same way a language server marks code; `Space d` shows the
  message under the cursor. The marks update as you type, so a line goes quiet
  the moment it is right. Nothing needs to be installed for this.

## Next

- [Settings](../reference/settings.md): every setting on the panel, and where the rest are.
- [Key remapping](./remapping.md): `[keys.normal]`.
- [Themes](./themes.md) and [Language servers](./languages.md).
