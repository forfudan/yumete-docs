# Keymap

What a key does is settled in three layers, each laid over the one before:

1. **The keymap**: helix's, the default, or vim's (`[keys] preset = "vim"`,
   or `:keymap vim` for this session).
2. **The Yumete flavour**: what yumete adds to either keymap. It is on at its
   `basic` level unless you change it.
3. **Your own bindings**, under `[keys.normal]`, `[keys.insert]` and the
   rest of [Key remapping](../guide/remapping.md).

Each layer has its own page:

- [helix keymap](keymap-helix.md): helix's keys as yumete has them, with the
  flavour off.
- [vim keymap](keymap-vim.md): vim's keys, the same way.
- [The Yumete flavour](flavor.md): each item yumete adds, its level, and
  every key it changes under each keymap.
- [What follows your keymap](keymaps-and-yumete.md): which behaviours follow
  helix or vim, and which are yumete's under either.

[Bindable commands](actions.md) goes the other way round: every command by
name, with the keys that reach it under both keymaps with the flavour as it
comes. Every `:` command is in [Commands](commands.md).

The tables on these pages are written by the editor itself (`ye --docgen`)
from the tables its keys run on, so a key listed is a key the editor has.

## Writing keys down

`C-w` is Ctrl and `w`; `A-d` is Alt and `d`. `Space f` is the space bar,
then `f`. Two keys written together, such as `gg`, are pressed one after
the other. A key that opens a menu, such as `g`, `m` or `Space`, shows what
can follow, so you need not learn these tables by heart: press the first key
and read.

The editor's own messages write the space bar as `␣`, so `␣t o` is Space,
`t`, `o`.
