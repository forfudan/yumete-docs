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

Only Normal-mode keys can be remapped. Bindings are read from the global file
only; a project's `.yumete/config.toml` cannot hold them, because a binding can
run a command line. Run `:reload-config` after editing, or restart.

## The right-hand side

Each right-hand side says which of three kinds it is.

| Written as | Kind | Example |
| --- | --- | --- |
| a bare name | an action | `"delete_selection"` |
| `:` in front | a command line, run as if typed after `:` | `":write"`, `":view-wrap 40"` |
| `@` in front | a run of keys, played as if you pressed them | `"@kJ"` |

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

The left side may also be a run of keys. `"dj" = "@xd"` makes `d` followed by
`j` delete the line. yumete waits after the `d` to see what comes next; if the
next key does not continue any of your runs, `d` does what it always did.
That is also why named keys need the brackets: `"tab"` would be the three keys
`t`, `a`, `b`.

`Esc` cannot be bound. It is how you let go of a run of keys you started by
mistake, and a keymap without it would have no way out.

## Prefix keys

`Space`, `g`, `m` and `z` open groups of keys. To move a whole group to another key,
bind that key to the prefix itself, as a run of keys:

```toml
[keys.normal]
";" = "@ "             # ; opens the Space menu
"<space>" = "@l"       # Space moves one cell right
"<backspace>" = "@h"   # Backspace moves left
```

A run of keys on the right always means the editor's own keys. `"@ "` presses
the real `Space` even when you have bound `Space` to something else.

To give one key of a group a key of its own, bind its name. The group keeps
it too:

```toml
[keys.normal]
"A-f" = "file_picker"    # Alt-f opens the file picker; Space f still does
"A-h" = "jump_view_left" # Alt-h goes to the window on the left
```

Binding a prefix key to an action takes its whole group away. `g =
"delete_selection"` makes `g` delete, and `gg`, `ge` and the rest of the `g` group
are gone.

## Presets and bindings together

`[keys] preset = "vim"` switches the whole keymap to vim's hands (see
[Getting started](./getting-started.md#vim-keys)). Your `[keys.normal]` lines
apply on top of whichever preset is in use, and beat it where both bind the same
key.

The Yumete flavour is a short list of changes laid over either preset. Today it
holds one: `d` and `c` delete without filling the register, and `A-d` and `A-c`
become the keys that cut.

```toml
[keys]
flavor = true
```

`:keymap-yumete-flavor on` turns it on for this session, and
`:keymap-yumete-flavor` alone says whether it is on and what it changes. Use the
flavour rather than binding the four keys yourself. A binding stays in force
whatever the defaults later become; the flavour follows them.

## Checking your bindings

A binding that yumete cannot use is reported at startup and by
`:check-config`. Opening the config file in yumete marks the line in the gutter;
`Space l` shows why. See
[When the config is wrong](./configuration.md#when-the-config-is-wrong).

The [Keymap](../reference/keymap.md) lists every default key.
