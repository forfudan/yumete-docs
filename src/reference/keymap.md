# Keymap

These are the keys of the default keymap, which is helix's. The tables are
written by the editor itself (`ye --docgen`) from the same lists its key menus
are drawn from, so a key listed here is a key the editor has.

`C-w` is Ctrl and `w`. `Space f` is the space bar, then `f`. Two keys written
together, such as `gg`, are pressed one after the other. A key that starts a
group, such as `g`, `m` or `Space`, opens a menu of what can follow, so you
need not learn these tables by heart: press the first key and read.

The first two tables are the keys a writer uses in the first hour. They are
the ones `:help` lists first. The rest are the groups, one table per menu.

Under the vim keymap (`:keymap vim`), vim's keys sit on top of these: `x`
deletes a character, `dd` a line, `%` goes to the matching bracket. Every key
not taken that way still does what it does here. See
[Coming from vim](../from/vim.md) for the full list of differences, and
[Match mode](match.md) for what the `m` group takes.

To change a key, see [Key remapping](../guide/remapping.md). For every `:`
command, see [Commands](commands.md).

<!--@include: ../generated/en/keys.md-->
