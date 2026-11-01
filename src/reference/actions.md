# Bindable commands

Every key in every mode runs a command with a name, and any of these names
can be put on a key of your own (see [Key remapping](../guide/remapping.md)).
This table lists them all, with the keys that reach each one under helix's
keymap, under vim's (`:keymap vim`), and in Insert mode. `Space ?` opens the
same list inside the editor, searched by what the commands do, and
`:keymap-actions` shows it with the keys of the keymap in use.

A command whose name starts with `extend_` is a key of select mode: it moves
and extends the selection. `Space f` is the space bar, then `f`; `C-w` is
Ctrl and `w`; two keys written together, such as `gh`, are pressed one after
the other. The `:` commands are on their own page, [Commands](commands.md).

<!--@include: ../generated/en/actions.md-->
