# Key remapping

You can put any action, command or run of keys on a key of your own choosing.
Bindings go under `[keys.normal]` in your global
[config file](./configuration.md):

```toml
[keys.normal]
"C-s" = ":write"               # Ctrl-s saves
x = "delete_selection"         # x deletes the selection
"<tab>" = ":buffer-next"       # Tab goes to the next open file
"<S-tab>" = ":buffer-previous" # Shift-Tab back
"A-j" = "@kJ"                  # Alt-j joins this line onto the one above
```

These tables hold under both keymaps. A binding for one keymap only goes
under that keymap's name, and is laid over the shared ones while that keymap
is in force:

```toml
[keys.vim.normal]
"<tab>" = "goto_next_buffer"     # under vim only; helix keeps its Tab

[keys.helix.insert]
j = { k = "normal_mode" }        # jk under helix only
```

`[keys.helix]` and `[keys.vim]` each take `normal`, `select` and `insert`.
`:keymap-actions` lists every action with its keys under helix, under vim,
and the ones you bound yourself, the keymap in force in bold.

Normal mode's keys go under `[keys.normal]`, select mode's under
`[keys.select]`, and Insert mode's under `[keys.insert]`, where a key no
binding names types itself:

```toml
[keys.insert]
j = { k = "normal_mode" }   # jk leaves Insert mode; a j alone is typed
"C-l" = "insert_newline"
```

Select mode takes every `[keys.normal]` line too, so `[keys.select]` is only
for what should differ there. (In helix the two are separate and a
Normal-mode line does nothing after `v`.) Bindings are read from the global
file only; a project's `.yumete/config.toml` cannot hold them, because a
binding can run a command line. Run `:reload-config` after editing, or restart.

## The right-hand side

Each right-hand side says which of three kinds it is.

| Written as | Kind | Example |
| --- | --- | --- |
| a bare name | an action | `"delete_selection"` |
| `:` in front | a command line, run as if typed after `:` | `":write"`, `":view-wrap 40"` |
| `@` in front | a run of keys, played as if you pressed them | `"@kJ"` |
| a list | each of the above, run in order | `["select_all", ":write"]` |

`no_op` is the action that does nothing. Binding a key to it unbinds the key,
and takes it off its group's menu.

Prefer an action name when one exists. A name says what the key does, and it
keeps meaning that even if the default key for it moves.

`:keymap-actions` lists every action in three columns: the name to write, what
it does, and which key does it now, under the keymap in use. Every Normal-mode
key has one, the keys inside the groups too, about 340 in all:
`goto_line_start` is `g h`, `file_picker` is `Space f`, `hsplit` is `C-w s`.
A name does the same thing under either keymap: `delete_char_backward` is
vim's `X` even when you use helix's keys.
The names follow helix's, so `move_visual_line_down`, `goto_file_start` and
`yank` are what you would guess.

A bare word that is not an action name is refused. yumete reports it at startup
and does not install that binding, so a typo such as `"delete_slection"` never
types its own letters into your text. To bind a run of keys, write the `@`.

## The left-hand side

The left side is the key you press, written as itself: `x`, `Q`, `;`, `\\`
(a backslash, escaped for TOML), or a Chinese punctuation mark such as `"，"`.

Modifiers and named keys:

| Write | For |
| --- | --- |
| `C-s` | Ctrl and a letter |
| `A-x` | Alt and a key |
| `<tab>` `<S-tab>` `<enter>` `<space>` `<backspace>` `<delete>` | the keys with names |
| `<up>` `<down>` `<left>` `<right>` | the arrows |
| `<home>` `<end>` `<pageup>` `<pagedown>` | the rest |

Names in angle brackets ignore case. A shifted letter is just the capital: `Q`,
not `S-q`. The same spellings work inside an `@` run on the right:
`"@<down>x"`.

Shift-Tab is `<S-tab>`. Tab is `jump_forward` by default, as in helix and vim,
and a terminal without the kitty keyboard protocol sends the same key for
`C-i`, so binding Tab there takes jump-forward with it; `C-o` still jumps back.

The left side may also be a run of keys. `"dj" = "@xd"` makes `d` followed by
`j` delete the line. yumete waits after the `d` to see what comes next; if the
next key does not continue any of your runs, `d` does what it always did.
helix's names for keys work as well: `ret`, `space`, `tab`, `backspace`, `del`,
`minus`, the arrows and the rest, so `ret = "open_below"` binds Enter. Any
other word on the left is a run of keys.

`Esc` cannot be bound. It is how you let go of a run of keys you started by
mistake, and a keymap without it would have no way out.

## Groups

`Space`, `g`, `m`, `z`, `C-w` and the other prefix keys open groups of keys. A
table named after one adds keys to that group, as in helix:

```toml
[keys.normal.space]
q = ":quit"          # Space q quits; the rest of Space stays
f = "no_op"          # Space f does nothing, and leaves the menu

[keys.normal.g]
a = "code_action"    # also written g = { a = "code_action" }
```

A table under a key that opens no group makes a group of your own. Give it a
name with `label`, and its menu is titled with it:

```toml
[keys.normal.space.x]
label = "My tools"
w = ":write"
a = ["select_all", "yank"]
```

The same keys can be written as runs, `"<space>q" = ":quit"`. Either way the
group's menu shows them beside its own keys.

To give one key of a group a key of its own, bind its name. The group keeps
it too:

```toml
[keys.normal]
"A-f" = "file_picker"    # Alt-f opens the file picker; Space f still does
"A-h" = "jump_view_left" # Alt-h goes to the window on the left
```

Select mode's keys are helix's `extend_*` commands (`extend_char_left`,
`extend_next_word_start`, `extend_to_file_start`). Each extends the selection
in either mode, so bound in `[keys.normal]` it grows the selection without
entering select mode. A `move_*` command extends in select mode and moves in
Normal mode.

To move a whole group to another key, bind that key to the prefix itself, as a
run of keys:

```toml
[keys.normal]
";" = "@ "             # ; opens the Space menu
"<space>" = "@l"       # Space moves one cell right
"<backspace>" = "@h"   # Backspace moves left
```

A run of keys on the right always means the editor's own keys. `"@ "` presses
the real `Space` even when you have bound `Space` to something else.

Binding a prefix key to an action takes its whole group away. `g =
"delete_selection"` makes `g` delete, and `gg`, `ge` and the rest of the `g` group
are gone.

## Prompts, pickers and sidebars

The keys of the command line, the pickers and the sidebars have names too,
which helix's do not. Each place has its own table:

```toml
[keys.prompt]               # :, /, ::, and the query of a picker
"C-b" = "move_char_left"
"C-f" = "move_char_right"

[keys.picker]               # the list of a picker, and of ::
"A-j" = "next_entry"        # not C-j: a terminal sends it as Enter
"A-k" = "prev_entry"

[keys.sidebar]              # the file tree, buffers, outline, links, info,
n = "move_line_down"        # and the search panel's moving keys
e = "move_line_up"

[keys.field]                # a box of the search panel
"C-n" = "next_field"
```

A picker takes the prompt's keys as well, for its query, and so does a box of
the search panel; their own win where both bind a key. A line binds one key, to a command from that place's list, a
command line (`":write"`) or keys (`"@hello"`), and `no_op` unbinds a key.
Where a name is also a Normal or Insert command (`move_char_left`,
`page_down`), it does the same thing in that place.

Your own keys follow you in. A `[keys.normal]` line of one key whose command a
sidebar also has works in the sidebar, and a `[keys.insert]` line works in the
command line and the pickers in the same way. With `n = "move_line_down"` in
`[keys.normal]`, `n` walks the file tree as well as the text. The place's own
table still wins, and the defaults never come over: Normal mode's `J` joins
lines, but a sidebar's `J` still pages. `no_op` in `[keys.normal]` unbinds the
key in the text only. To turn this off:

```toml
[keys]
inherit = false
```
[Bindable commands](../reference/actions.md) lists each place's
commands and keys.

The hint rows, the `::` palette and `:keymap-actions` name the keys as they are
bound now, yours included.

## Tables

In a table's grid (`␣tt`) a command does its action to a cell:
`move_char_right` is one cell right, `yank` takes the cell, `goto_line_start`
is the first cell of the record. That holds however the command is reached,
by its key, by a binding of your own or from a group (`g h`). Four commands
belong to the grid alone: `table_enter_cell` (`Enter`), `table_leave_cell`
(`Esc` in a cell), `table_next_cell` and `table_prev_cell` (`Tab`, `S-Tab`,
which also step while you type in a cell).

`[keys.table]` holds lines for a table only, laid over `[keys.normal]` as
`[keys.select]` is:

```toml
[keys.table]
"A-l" = "table_next_cell"
"A-h" = "table_prev_cell"
```

[Bindable commands](../reference/actions.md) lists what each key means in the
grid.

## Presets and bindings together

`[keys] preset = "vim"` switches the whole keymap to vim's hands (see
[Getting started](./getting-started.md#vim-keys)). Your `[keys.normal]` lines
apply on top of whichever preset is in use, and beat it where both bind the same
key.

Under the vim keymap, a key you bind to a motion is also that motion after an
operator: with `"Q" = "jump_next_word_end"`, `dQ` deletes to the end of the
word. Where vim's own key does something of its own, it runs a command named
`vim_` and helix's name (`vim_paste_after` for `p`), so a name means the same
under either keymap.

## The Yumete flavour

Everything yumete adds to helix's and vim's keymaps is an item of the
Yumete flavour. `[keys] flavor` sets its level (`off`, `basic` or `full`),
and `[keys.flavor_items]` turns one item on or off whatever the level. Your
own `[keys.normal]` lines come before the flavour, and the flavour before
the keymap. [The Yumete flavour](../reference/flavor.md) lists every item
and each key it changes.

## Checking your bindings

A binding that yumete cannot use is reported at startup and by
`:check-config`, and only that line is skipped: a misspelt name, a right side
that is not a command, a list or a table, a line of `[keys.prompt]`,
`[keys.picker]` or `[keys.sidebar]` with more than one key, or a table under
`[keys]` that yumete does not read. Opening the config file in yumete marks the line in the gutter;
`Space l` shows why. See
[When the config is wrong](./configuration.md#when-the-config-is-wrong).

The [helix](../reference/keymap-helix.md) and [vim](../reference/keymap-vim.md)
keymap pages list every key of each, and
[The Yumete flavour](../reference/flavor.md) what the flavour adds.
