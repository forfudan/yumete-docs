# The Yumete flavour

The [helix](keymap-helix.md) and [vim](keymap-vim.md) keymaps are helix's
and vim's own. Everything yumete adds to them, or changes in them, is an
item of the Yumete flavour, laid on top. Its level sets which items are on:

- `off`: helix or vim as upstream has it, and nothing more.
- `basic` (the default): the items you see the moment you press them. A new
  menu, a key the upstream leaves free, a command on a key that did nothing:
  `Space t` for tables, `H` and `L` for sentences, `0` and `^` under helix.
- `full`: also the items that make a familiar key do something else. `d`
  and `c` delete without filling the register, and `A-d` and `A-c` become
  the keys that cut (helix keymap only; under vim, `"_d` does the same).
  `Esc` also collapses the selections to one cursor.

```toml
[keys]
flavor = "full"

[keys.flavor_items]
delete_keeps_register = false
tables = true
```

A line under `[keys.flavor_items]` turns one item on or off whatever the
level, `off` and `basic` included: in the example, every item is on but
`delete_keeps_register`. The settings panel writes those lines for you: in
`:settings`, the keys group's "flavour items" row opens a page with the
level at the top and one tick per item, each with its keys and, on the
right, the file that set it or the binding that took its keys. Ticking an
item back to what the level gives removes its line, and `d` does the same.

Your own `[keys.normal]` lines come before the flavour, and the flavour
before the keymap. `:keymap-yumete-flavor full` sets the level for this
session; `:keymap-yumete-flavor` alone says the level, how many items are
on, and which of them you set by name or took with a binding.

Use the flavour rather than binding its keys yourself. A binding stays in
force whatever the defaults later become; the flavour follows them.

Below, each level's items with their keys under each keymap, then every key
each item changes: what the key does with the item and without it, the rest
of the flavour at its default.

<!--@include: ../generated/en/flavor.md-->
