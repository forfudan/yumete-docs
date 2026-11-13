# What follows your keymap

yumete can be driven with helix's keys or with vim's. It follows the keymap you chose
only where your hands have the habit: the places where a different answer would feel
wrong in the middle of a keystroke. Everything else is yumete's own, and the same
under either keymap.

So `f` stays on its line under vim and searches the file under helix, because a vim
hand types `f,` and expects the comma on this line. But `:vsplit` opens on the right
for everyone, because nobody's fingers depend on which side a window opens.

## What follows your keymap

Two things change with the keymap, and nothing else does.

**The keys.** Which key runs which action is the keymap's: vim's `p` puts after the
cursor's character and leaves no selection, helix's puts after the selection and
selects what it put. Where vim and helix spell the same key differently, yumete has
two actions with two names, such as `paste_after` and `vim_paste_after`, or
`goto_file_start` and `vim_goto_file_start` (vim's `gg` keeps the column). Each
action does one thing under either keymap; the keymap only decides which one a key
runs. [Bindable commands](actions.md) lists every action and the keys that reach it.

**The rules.** A few behaviours are not one key but the way the whole editor moves.
Each keymap brings its set of them, and you choose the set by choosing the keymap,
not rule by rule, because they lean on each other: vim's word motions assume the
caret never stands on a line break, for example. `:keymap-actions` lists them at its
end, and so does [Bindable commands](actions.md):

| Rule | Under vim | Under helix |
| --- | --- | --- |
| The caret | never stands on a line's break; `h` and `l` stop at the line's ends | stands anywhere, and a selection holds the break |
| `f` and `t` | look on this line only, move the caret without selecting, and `t` stands still against its character | look through the file, select what they cross, and `t` steps on to the next |
| Words, sentences, paragraphs | move by vim's rules: an empty line ends a paragraph | move by helix's rules: a motion is a selection |
| Text objects | find a pair ahead on the line, as vim's do | take the pair around the cursor |
| Deleting a character | stays on its line: `x` at a line's end takes its last character | can take the line break |
| `r` | replaces as many characters as the count, from the caret | replaces each character of the selection |
| Leaving Insert mode | puts the caret back one | leaves it where it is |
| Registers | `"0` holds the last yank and `"1`–`"9` the deleted lines; `"A` adds to `a`; a register keeps whether it was taken by lines or by characters | no numbered registers, and `"A` is a register of its own |
| Undo points | `u` puts the cursor where the change began | start where typing began, so `A` then `u` comes back to the line's end |
| Undo and `C-o` | bring back the cursor | bring back every selection |
| `y` with several cursors | waits for a motion, as vim's operator does | copies every selection |
| Searching | moves the caret to the match's first character; in Visual mode it grows the one selection | selects the match; in select mode it adds the match as another selection |
| The page | follows the cursor as vim's does: `scrolloff` kept, a far jump centred, `zt` `zz` `zb` with a count, `C-d` remembering its count | helix's |
| Backspace and Tab in Insert mode | Backspace in the indent takes back a level, Tab in the indent goes to the next `shiftwidth` when tabs are typed, and an indent left empty goes when Insert ends | Backspace takes one character, and an indent left empty stays |

## The same under every keymap

These are yumete's, whichever keymap you use:

- **New windows** open below or to the right: `:split`, `:vsplit`, `:hnew`, `:vnew`,
  `C-w s`, `C-w v`, `C-w n`, `C-w f`, `C-w ^` and the `Space w` keys. If you want one
  on the left or above, bind `vsplit_left` or `hsplit_above`, or use the flavour's
  `Space w n h` and `Space w n k`.
- **The jumplist** keeps a line once, keeps the places ahead of you when you jump after
  going back, and opens a closed file again when `C-o` reaches it
  ([Jumplist](jumplist.md)).
- **`:read`** puts the file on new lines below the cursor's line.
- **Enter on an empty `:` line** runs the last command of this session again,
  as helix's does; the empty line shows it in grey first.
- **`:s`** leaves the cursor on the last line it changed.
- **A count before `C-w w`** goes to that window.
- **Closed folds**: `r` and `gJ` act on the line the cursor is hidden on, a sideways
  move opens the fold, moving onto one keeps the column, and `zx` with no level set
  closes every fold ([Folds](folds.md)).
- **Heading folds** and **block comments on lines of their own** are settings,
  `[editor] heading_folds` and `[editor] block_comment_lines`.
- **Themes** are yumete's: `ye --import` does not carry a helix or vim theme over,
  since the two lists are not the same themes.
- Previews, the settings panel, the explorer, tables, export and the rest of what
  yumete adds work one way.

## The flavour and your own bindings

[The Yumete flavour](flavor.md) and [your own bindings](../guide/remapping.md) only
change which key runs which action. They never change what an action does, and they
never change a rule.
