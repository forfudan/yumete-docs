# vim keymap

vim's keys, as yumete has them with the [Yumete flavour](flavor.md) off
(`[keys] flavor = "off"`). At the flavour's default level, `basic`, more
keys are bound, among them the Space menu on Space; the flavour's page lists
each one. Where yumete and vim differ otherwise, and what yumete does not
have, see [Coming from vim](../from/vim.md).

An operator (`d`, `c`, `y`, `<`, `>`) waits for a motion or a text object:
`dw`, `ci(`, `yy`. Coming from vim lists what may follow one.

Visual mode (`v`, `V`, `C-v`) lists only the keys that run something else
while text is selected. Every other key does what it does in Normal mode,
and a motion grows the selection.

The Space menu is on `\`, vim's leader, until the flavour's
[`vim_space_menu`](flavor.md#vim_space_menu) puts it on Space. Each menu
lists the keys that open it.

<!--@include: ../generated/en/keymap-vim.md-->
