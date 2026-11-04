# Registers

A register holds text you have yanked or deleted, ready to paste. yumete keeps one
unnamed register, any number of named ones, and a history of what the unnamed one held.
The system clipboard is separate: it is the `+` and `*` registers, and it has its own
keys.

## The unnamed register

With no register named, these keys use the unnamed one:

| Key | Effect |
| --- | --- |
| `y` | yank the selection |
| `d` / `c` | delete / change the selection, keeping what was removed |
| `A-d` / `A-c` | delete / change the selection, leaving the register as it is |
| `p` / `P` | paste after / before the selection; a count (`3p`) pastes that many copies as one piece |
| `R` | replace the selection with the register; `2R` replaces it with two copies (helix keymap; under vim, `R` in Normal mode is vim's replace mode) |
| `C-r "` (Insert) | insert the register's text at the cursor |

If you would rather `d` and `c` left the register alone, `:keymap-yumete-flavor full`
swaps them with `A-d` and `A-c` (helix keymap). Set `flavor = "full"` under `[keys]`
to make that the default, or `delete_keeps_register = true` under
`[keys.flavor_items]` for this item alone.

Under the vim keymap a paste leaves a cursor, not the pasted text selected. The cursor
goes to the last character pasted when the text is part of one line, to the first
character pasted when it spans lines, and to the first non-blank of the first pasted
line when whole lines were pasted.

With several selections, each yanks its own piece, and pasting into as many
selections puts each piece back in its place.

## Named registers

Type `"` and a character before a yank, delete or paste to use that register instead:

- `"ay` yanks the selection into register `a`.
- `"ap` pastes from register `a`.
- `"bd` deletes the selection into register `b`.
- `C-r a` in Insert mode inserts register `a`.

Any character can name a register, and three names are special, as in helix and
vim:

- `_` keeps nothing. `"_d` deletes without changing what `p` pastes.
- `+` and `*` are the system clipboard. `"+y` copies the selection out of the
  editor, and `"+p`, `"+P` and `"+R` paste or replace from it.
- `#` reads as the selection's number, so `"#P` with three cursors writes `1`, `2`
  and `3`.

Under the vim keymap, `"0` holds the last yank, as in vim: a delete fills the unnamed
register, and `"0p` still pastes what you yanked. A delete of a line or more also
goes into `"1`, and the older ones move down to `"2` … `"9`.

Also as in vim, a capital letter adds to its register: `"Ayy` puts the line
after what `"a` holds, and text added to lines, or lines to text, makes lines.
A yank or delete into a named register fills the unnamed one too, so `"ayy`
then `p` pastes that line. `:reg` opens the picker below.

## Earlier yanks

Every yank or delete into the unnamed register replaces what was there, but the last 16
are kept. `Space "` or `:clipboard` opens a picker of everything that can be pasted:

- the system clipboard, first
- the unnamed register's history, newest first, numbered from `0`
- the named registers, as `"a`, `"b` and so on

Pick one and it is pasted after the selection. The picker's numbers are its own: the
row `0` is the newest yank or delete, not the `"0` register, which has a row of its
own under the named registers.

## The system clipboard

| Key | Command | Effect |
| --- | --- | --- |
| `Space y` | `:clipboard-yank` | copy every selection to the system clipboard, one to a line, and into the unnamed register |
| `Space Y` | | copy the main selection only |
| `Space p` | `:clipboard-paste` | paste from the system clipboard after the selection |
| `Space P` | | paste from the system clipboard before the selection |
| `Space R` | | replace the selection with the system clipboard, as `"+R` does |

Copying uses the terminal's OSC 52 escape, so it works over ssh and inside tmux, if
the terminal allows it. Pasting runs `pbpaste` on macOS, or `wl-paste`, `xclip` or
`xsel` on Linux. The terminal's own paste key also works.

A macro is kept in a register, as text. Under the helix keymap `Q` records and
`q` plays, into and from register `@`, or the one a `"` names first: `"aQ` …
`Q` records into `a`, and `"aq` plays it. Under vim, `qa` … `q` records into `a`,
`qA` adds to it, `@a` plays it, `@@` plays the last one played again, and `Q`
plays the last one recorded.

The keys are written as helix writes them, under both keymaps: a character as
itself, any other key in angle brackets, so `ihello` then `Esc` is
`ihello<esc>`. `"ap` pastes a macro to read or change, and a line yanked into
a register plays as keys. A line break in it is `Enter`, as in vim.

| Key | Written |
| --- | --- |
| `Esc` `Enter` `Tab` `S-Tab` `Backspace` `Delete` | `<esc>` `<ret>` `<tab>` `<S-tab>` `<backspace>` `<del>` |
| arrows, `Home` `End` `PageUp` `PageDown` | `<left>` `<right>` `<up>` `<down>` `<home>` `<end>` `<pageup>` `<pagedown>` |
| `C-w`, `A-o` | `<C-w>`, `<A-o>` |
| space, `-` `<` `>` | `<space>` `<minus>` `<lt>` `<gt>` |
