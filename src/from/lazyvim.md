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

Paste this into your config file (see [Configuration](../guide/configuration.md)), or
run `ye --import lazyvim`, which writes it for you.
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
"." = { run = ":new", label = "Scratch Buffer" }
# "/" "?" "e" "w" are already LazyVim's: search panel, every command,
# explorer, the window group.

[keys.normal.space.b]
label = "buffer"
b = "goto_last_accessed_file"
d = { run = ":buffer-close", label = "Delete Buffer" }
D = [":buffer-close", ":quit-window"]
j = "buffer_picker"

[keys.normal.space.c]
label = "code"
a = "code_action"
A = "code_action"
r = "rename_symbol"
f = { run = ":format", label = "Format" }
d = "show_diagnostic"
s = "lsp_or_syntax_symbol_picker"
S = "goto_reference"
l = { run = ":info", label = "Lsp Info" }

[keys.normal.space.f]
label = "file/find"
f = "file_picker"
F = "file_picker_in_current_directory"
g = "file_picker"
b = "buffer_picker"
r = { run = ":recent-files-global", label = "Recent" }
R = { run = ":recent-files", label = "Recent (cwd)" }
p = { run = ":recent-projects", label = "Projects" }
n = { run = ":new", label = "New File" }
e = "file_explorer"
E = "file_explorer_in_current_buffer_directory"
c = { run = ":settings", label = "Find Config File" }
t = "suspend"
T = "suspend"

[keys.normal.space.g]
label = "git"
g = { run = ":!lazygit", label = "Lazygit (Root Dir)" }
G = { run = ":!lazygit", label = "Lazygit (cwd)" }
s = "changed_file_picker"
d = { run = ":git-diff", label = "Git Diff" }

[keys.normal.space.g.h]
label = "hunks"
p = "show_change"
d = { run = ":git-diff", label = "Diff This" }

[keys.normal.space.q]
label = "quit/session"
q = { run = ":quit-all", label = "Quit All" }
s = { run = ":resume", label = "Restore Session" }
l = { run = ":resume", label = "Restore Last Session" }
S = { run = ":recent-projects", label = "Select Session" }

[keys.normal.space.s]
label = "search"
g = { run = ":search-project", label = "Grep (Root Dir)" }
G = { run = ":search-working", label = "Grep (cwd)" }
B = { run = ":search-buffers", label = "Grep Open Buffers" }
r = { run = ":replace-project", label = "Search and Replace" }
s = "lsp_or_syntax_symbol_picker"
S = "lsp_or_syntax_workspace_symbol_picker"
d = "workspace_diagnostics_picker"
D = "diagnostics_picker"
j = "jumplist_picker"
R = "last_picker"
C = "command_palette"
k = { run = ":keymap-actions", label = "Keymaps" }
h = { run = ":help", label = "Help Pages" }
'"' = "paste_menu"

[keys.normal.space.u]
label = "ui"
D = { run = ":view-focus toggle", label = "Toggle Dimming" }
z = { run = ":view-typewriter toggle", label = "Toggle Zen Mode" }
G = { run = ":view-diff toggle", label = "Toggle Git Signs" }
T = { run = ":view-code toggle", label = "Toggle Treesitter Highlight" }
L = { run = ":line-numbers relative", label = "Relative Numbers" }
l = { run = ":line-numbers absolute", label = "Line Numbers" }

[keys.normal.space.x]
label = "diagnostics/quickfix"
x = "workspace_diagnostics_picker"
X = "diagnostics_picker"
q = { run = ":diagnostics-all", label = "Quickfix List" }

[keys.normal.space.tab]
label = "tabs"
tab = { run = ":new", label = "New Tab" }
"]" = { run = ":buffer-next", label = "Next Tab" }
"[" = { run = ":buffer-previous", label = "Previous Tab" }
d = { run = ":buffer-close", label = "Close Tab" }
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

Each of those groups takes its letter, so `Space f` followed by a key the group
does not have does nothing, as in LazyVim. The first time yumete starts with
this config, it says which of its `Space` keys the groups took over, and
`:check-config` says it again whenever you ask. The menus show
each group as `+name`, `Backspace` goes back a level, and `Esc` closes them.

## What is not there

LazyVim's plugins bring things yumete does not have: git staging, blame and
hunk resets, a debugger, Trouble's list, a notification history, and the
plugin and tool managers (`Space l`, `Space c m`). Their keys are left out of
the config rather than bound to something else. `Space g g` runs `lazygit` in
the terminal, if you have it.
