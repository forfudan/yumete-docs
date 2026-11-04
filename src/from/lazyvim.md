# Coming from LazyVim

LazyVim is Neovim with a `Space` menu laid out in groups: `Space f` for files,
`Space s` for search, `Space g` for git, and so on. yumete has a `Space` menu
too, under either keymap, with letters of its own. The two overlap on most of
what you press every day, and the config below lays yumete's commands out on
LazyVim's keys, groups and group names included.

## What is the same

Start from the vim keymap, `[keys] preset = "vim"` (see
[Coming from vim](vim.md)). At the default [flavour](../reference/flavor.md)
`Space` opens the menu, as LazyVim's leader does, and the menu lists what each
key does as you go, as which-key does. Several of LazyVim's keys already mean
the same thing here: `Space /` searches the project, `Space ?` lists every
command, `Space e` opens the explorer, and `Space w` is the window group.

## The config

Paste this into your config file (see [Configuration](../guide/configuration.md)).
Each `[keys.normal.space.…]` table is one of LazyVim's groups, and its `label`
is the name the menu shows for it.

```toml
[keys]
preset = "vim"

[keys.normal.space]
space = "file_picker"                  # Find Files (Root Dir)
"," = "buffer_picker"                  # Buffers
":" = "command_mode"                   # Command History (Up/C-p walks it)
"`" = "goto_last_accessed_file"        # Switch to Other Buffer
"|" = "vsplit"                         # Split Window Right
"-" = "hsplit"                         # Split Window Below
"." = ":new"                           # Scratch Buffer
# "/" "?" "e" "w" are already LazyVim's: search panel, every command,
# explorer, the window group.

[keys.normal.space.b]
label = "buffer"
b = "goto_last_accessed_file"
d = ":buffer-close"
D = [":buffer-close", ":quit-window"]
j = "buffer_picker"

[keys.normal.space.c]
label = "code"
a = "code_action"
A = "code_action"
r = "rename_symbol"
f = ":format"
d = "show_diagnostic"
s = "lsp_or_syntax_symbol_picker"
S = "goto_reference"
l = ":info"

[keys.normal.space.f]
label = "file/find"
f = "file_picker"
F = "file_picker_in_current_directory"
g = "file_picker"
b = "buffer_picker"
r = ":recent-files-global"
R = ":recent-files"
p = ":recent-projects"
n = ":new"
e = "file_explorer"
E = "file_explorer_in_current_buffer_directory"
c = ":settings"
t = "suspend"
T = "suspend"

[keys.normal.space.g]
label = "git"
g = ":!lazygit"
G = ":!lazygit"
s = "changed_file_picker"
d = ":git-diff"

[keys.normal.space.g.h]
label = "hunks"
p = "show_change"
d = ":git-diff"

[keys.normal.space.q]
label = "quit/session"
q = ":quit-all"
s = ":resume"
l = ":resume"
S = ":recent-projects"

[keys.normal.space.s]
label = "search"
g = ":search-project"
G = ":search-working"
B = ":search-buffers"
r = ":replace-project"
s = "lsp_or_syntax_symbol_picker"
S = "lsp_or_syntax_workspace_symbol_picker"
d = "workspace_diagnostics_picker"
D = "diagnostics_picker"
j = "jumplist_picker"
R = "last_picker"
C = "command_palette"
k = ":keymap-actions"
h = ":help"
'"' = "paste_menu"

[keys.normal.space.u]
label = "ui"
D = ":view-focus toggle"
z = ":view-typewriter toggle"
G = ":view-diff toggle"
T = ":view-code toggle"
L = ":line-numbers relative"
l = ":line-numbers absolute"

[keys.normal.space.x]
label = "diagnostics/quickfix"
x = "workspace_diagnostics_picker"
X = "diagnostics_picker"
q = ":diagnostics-all"

[keys.normal.space.tab]
label = "tabs"
tab = ":new"
"]" = ":buffer-next"
"[" = ":buffer-previous"
d = ":buffer-close"
```

LazyVim also changes a few keys outside the menu. These are in a block of
their own, so you can leave them out:

```toml
[keys.normal]
H = ":buffer-previous"
L = ":buffer-next"
"]b" = ":buffer-next"
"[b" = ":buffer-previous"
"]h" = "goto_next_change"
"[h" = "goto_prev_change"
"C-h" = "jump_view_left"
"C-j" = "jump_view_down"
"C-k" = "jump_view_up"
"C-l" = "jump_view_right"
"C-s" = ":write"
```

## What the config moves

LazyVim's groups sit on letters yumete uses for single commands: `Space b`,
`c`, `f`, `g`, `s` and `x`, and `Space Space`. The commands they held are still
on LazyVim's keys for the same things: the file picker on `Space Space` and
`Space f f`, open files on `Space ,` and `Space f b`, symbols on `Space s s`,
changed files on `Space g s`, the change under the cursor on `Space g h p`, and
comments on vim's `gc`. yumete's other `Space` letters, such as `Space z` for
the input method and `Space t` for tables, are not LazyVim's and stay as they
are.

## What is not there

LazyVim's plugins bring things yumete does not have: git staging, blame and
hunk resets, a debugger, Trouble's list, a notification history, and the
plugin and tool managers (`Space l`, `Space c m`). Their keys are left out of
the config rather than bound to something else. `Space g g` runs `lazygit` in
the terminal, if you have it.
