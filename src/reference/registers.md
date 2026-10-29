# Registers

A register holds text you have yanked or deleted, ready to paste. yumete keeps one
unnamed register, any number of named ones, and a history of what the unnamed one held.
The system clipboard is separate and has its own keys.

## The unnamed register

With no register named, these keys use the unnamed one:

| Key | Effect |
| --- | --- |
| `y` | yank the selection |
| `d` / `c` | delete / change the selection, keeping what was removed |
| `A-d` / `A-c` | delete / change the selection, leaving the register as it is |
| `p` / `P` | paste after / before the selection |
| `R` | replace the selection with the register (helix keymap; under vim, `R` in Normal mode is vim's replace mode) |
| `C-r "` (Insert) | insert the register's text at the cursor |

If you would rather `d` and `c` left the register alone, `:keymap-yumete-flavor on`
swaps them with `A-d` and `A-c`. Set `flavor = true` under `[keys]` to make that the
default.

With several selections, each yanks its own piece, and pasting into as many
selections puts each piece back in its place.

## Named registers

Type `"` and a character before a yank, delete or paste to use that register instead:

- `"ay` yanks the selection into register `a`.
- `"ap` pastes from register `a`.
- `"bd` deletes the selection into register `b`.
- `C-r a` in Insert mode inserts register `a`.

Any character can name a register. `_` and `+` are ordinary ones: `"_d` does not
discard and `"+y` does not reach the clipboard; use `A-d` and `Space y`. The one
special name is `#`, which reads as the selection's number, so `"#P` with three cursors
writes `1`, `2` and `3`.

## Earlier yanks

Every yank or delete into the unnamed register replaces what was there, but the last 16
are kept. `Space "` or `:clipboard` opens a picker of everything that can be pasted:

- the system clipboard, first
- the unnamed register's history, newest first, numbered from `0`
- the named registers, as `"a`, `"b` and so on

Pick one and it is pasted after the selection.

## The system clipboard

| Key | Command | Effect |
| --- | --- | --- |
| `Space y` | `:clipboard-yank` | copy the selection to the system clipboard, and into the unnamed register |
| `Space p` | `:clipboard-paste` | paste from the system clipboard after the selection |
| `Space P` | | paste from the system clipboard before the selection |

Copying uses the terminal's OSC 52 escape, so it works over ssh and inside tmux, if
the terminal allows it. Pasting runs `pbpaste` on macOS, or `wl-paste`, `xclip` or
`xsel` on Linux. The terminal's own paste key also works.

Macros are not kept in registers. There is one macro, the last one recorded: `Q`
records and `q` replays it under the helix keymap, the other way round under vim. A
letter after `q` does not name a register.
