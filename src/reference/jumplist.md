# Jumplist

When a motion takes you far away, yumete notes where you were. That list of places is
the jumplist, and it works across files.

| Key | Effect |
| --- | --- |
| `C-o` | back to where the last jump came from |
| `C-i` or `Tab` | forward again |
| `C-s` | add the current position to the list by hand |

A new jump after going back drops the places ahead of you, and the list keeps the last
100. If a place is in a file you have since closed, `C-o` says so instead of going there.

## What makes a jump

- `gg`, `ge`, a count before `G` (`20G`), and `:<line>`
- searching with `/`, `?`, `n` and `N`
- following a heading in the outline, or a `path:line` with `gf`
- `gd` and the places `gr` lists
- `]d` `[d`, `]f` `[f` and the other `]` `[` jumps to a diagnostic, function, change or conflict
- `gw`, `gx` and `gz` (the cursor jumps, the view does not move)
- going to a mark with `'`, and to a change with `g.`

Switching files with `ga`, `gn`, `gp` or `:open` does not add a jump.

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
