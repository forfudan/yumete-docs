# Jumplist

When a motion takes you far away, yumete notes where you were. That list of places is
the jumplist, and it works across files.

| Key | Effect |
| --- | --- |
| `C-o` | back to where the last jump came from; with a count, that many places back |
| `C-i` or `Tab` | forward again |
| `C-s` | add the current position to the list by hand |
| `Space j` | the list in a picker, the newest first |

Each window has its own list, and a new window starts with a copy of the one it was
split from. A place moves with what you write before it, so after typing a paragraph
above it `C-o` still lands on the same sentence. The list keeps the last 100 places.
Under the helix keymap the whole selection comes back, and `C-s` then `C-o` goes to
the place before; under the vim keymap the cursor does.

Under the helix keymap a new jump after going back drops the places ahead of you, and
a place in a file you have since closed is forgotten. Under the vim keymap the places
ahead stay, a line is kept once, and a closed file is opened again.

## What makes a jump

Under either keymap:

- every switch to another file: `ga`, `gn`, `gp`, `:open`, the file picker, the
  explorer, `gf`, a link, a heading in the outline. The place noted is where you left.
- `gg`, a count before `G` (`20G`), and `:<line>`
- confirming a search with `/` or `?`
- `gd` and the places `gr` lists
- `]d` `[d`, `]f` `[f` and the other `]` `[` jumps to a diagnostic, function, change or conflict
- `gw`, `gz` and `gZ` (the cursor jumps, the view does not move)
- going to a mark with `'`, and to a change with `g.`

Under the helix keymap also `ge` (the last line). `n` and `N` are not jumps, so after
stepping through forty hits one `C-o` takes you back to where the search began.

Under the vim keymap also `n` `N`, `H` `M` `L`, and `{` `}` `(` `)`, as in vim;
vim's `ge` (back to a word's end) is not.

## Marks

A mark is a place you name, to come back to on purpose.

| Key | Effect |
| --- | --- |
| `M` *a* | mark this place as *a* (`m` *a* under the vim keymap) |
| `'` *a* | go back to mark *a*, opening its file if needed |

A mark's name is one letter or digit. Marks are shared by all files, so `'a` can take
you to another file. In a saved file a mark remembers the line. Marks last until you
quit.

## Changes

| Key | Effect |
| --- | --- |
| `g.` | the last place this file was changed |
| `g;` / `g,` | an older / newer change (vim keymap only) |

Each file keeps its own changes, one entry per line, so `g;` after typing a paragraph
moves by the paragraph, not by the character.
