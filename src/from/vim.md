# Coming from vim

yumete's default keys are helix's: you select first and act second. Under them
some vim habits change the wrong text: `x` selects a line, and `dd` deletes
two characters. The vim keymap puts vim's way of pressing onto yumete's own
commands.

Turn it on in the config:

```toml
[keys]
preset = "vim"
```

or type `:keymap vim` to use it for this session only. `:keymap helix` goes
back, and `:keymap` on its own says which keymap is in force. Keys you bind in
`[keys.normal]` win over the keymap. See [Key remapping](../guide/remapping.md).

## Operators wait for a motion

`d`, `c`, `y`, `>` and `<` are operators, as in vim. After one, the status
line lists the motions it can take, `Esc` lets go, and a key that is not a
motion is told so.

| Motion | Keys |
| --- | --- |
| words | `w` `W` `b` `B` `e` `E` `ge` `gE` |
| in the line | `0` `^` `$`, `h` `l` |
| whole lines | `j` `k` `G` `gg` `+` `-` `Enter`, and `H` `M` `L` |
| brackets | `%`: to the other half, inclusive, looking along the line when the cursor is not on one |
| paragraphs, sentences | `{` `}`, `(` `)` |
| find a character | `f` `F` `t` `T`, and `;` `,` to repeat the last one |
| text objects | `i` and `a` with an object: `diw`, `ci"`, `ya(`, `dap` |
| the whole line | the operator again: `dd` `yy` `cc` `>>`, or `d_` |

`d`, `c` and `y` all write to a register, as in vim, so `ddp` swaps two lines
and `p` after `dw` puts the word back.

`w`, `b` and `e` go through a Chinese segmenter, so in Chinese they stop at
word edges rather than at spaces. See [CJK motions](../writing/cjk.md). As in
vim, `w` `W` `b` `B` stop on an empty line, and `e` passes it by.

### Case and fill operators

`gu`, `gU` and `g~` change case and wait for a motion: `guw` lowers a word,
`gUU` raises the whole line. `gUgU`, `gugu`, `g~g~` and `gqgq` are the line
too, as in vim.

`gq` fills lines to 79 columns, as vim's `gq` does with its factory settings
(for a filler that knows what Markdown, Typst and code comments mean, see
[`:hard-wrap`](../writing/page#hard-wrap-hard-wrap)):
`gqip` a paragraph, `gqq` a line, `gq` on a visual selection. A blank line
ends a paragraph. A `>` quote marker, and in code a comment leader such as
`//` or `#`, is written again on each filled line, and a list item's lines
hang under its text. A run of Chinese has no spaces to break at, so `gq`
leaves it whole, as vim does. Two lines joined between Chinese characters get
no space. A line that opens with the two-square indent (U+3000) is a paragraph
of its own: it is never joined to the line before it, and the lines filled
after it carry no indent.

`v` or `V` and then `Esc` leaves nothing selected, with the cursor where it
stood, as in vim.

## Counts

A count can go before the operator, before the motion, or both: `3dw` and
`d3w` delete three words, and `2d3w` deletes six. `3dd` deletes three lines
and `2x` two characters.

Other keys take a count too. `3p` pastes three copies as one piece. `3rx`
writes `x` over three characters, and changes nothing when the line has fewer
left. `3~` changes the case of three characters.

A count before `i`, `a`, `I`, `A`, `o` or `O` types the text that many times:
`5ix` then `Esc` gives five `x`, and `3o甲` then `Esc` gives three lines of
甲. One `u` takes it all back.

## Text objects

After an operator, or after `v`, the object names are vim's: `w` `W` `s` `p`,
the brackets and quotes, and `b` `B` for `(` and `{`. yumete adds three:

- `u` is a clause, up to any punctuation mark: `diu`.
- `m` is the nearest pair of any kind: `dim`.
- `k` is the Markdown marks around the cursor: `dik` on `**bold**`.

A bracket key also covers the full-width and Chinese brackets: `di(` works
inside `（）`, and `di[` inside `「」` and `【】`. With the cursor outside any
pair, `di(` and `da"` reach ahead to the next one, as vim does. The full list
is in [Match mode](../reference/match.md).

## Surround

vim-surround's keys are built in: `ysiw(` wraps a word, `ds(` deletes the pair
around the cursor, and `cs([` changes `(…)` to `[…]`. `ys` takes any motion or
object, so `ys$"` quotes to the end of the line.

## Visual mode

`v` starts a selection, `V` selects the whole line, and `gv` selects the last
selection again. In visual mode `o` goes to the other end, `d` or `x` deletes,
`c` or `s` changes, `u` `U` `~` change case, and `p` replaces the selection
with the register.

A count before `.` replaces the count the change was made with: after `rx`,
`3.` writes `x` over three characters, and a bare `.` after that writes three
again.

`J`, `gJ`, `r`, `>` and `<` in visual mode return to Normal mode afterwards, as in
vim. `>` and `<` keep the cursor's column, as nvim's do. `.` repeats a visual
`J`, `>` or `<` on as many lines.

`C-v` starts blockwise visual. The motions grow a rectangle, and the status
line says `SEL`.

- `I` and `A` write before or after the block on every line. `I` skips a line
  too short to reach the block, `A` pads one with spaces, and `$A` writes at
  the end of each line. What you type is copied to the other lines on `Esc`.
- `c` `d` `y` `r` `~` `u` `U` `>` `<` `J` act on the block.
- `o` and `O` move to the other corners.
- `p` puts a block you took back as a block.

## `.` is vim's

Under the vim keymap `.` repeats the whole last change, as vim's does: a
`d`, a `c` with what you typed, an `r`, a paste. `ciw` then `foo` then `Esc`,
then `w.`, changes the next word too. Under the helix keymap `.` repeats only
the last insert, as helix's does.

## Other keys

| Key | Does |
| --- | --- |
| `x` `X` | cut the character under or before the cursor |
| `s` `S` | change one character, change the whole line |
| `D` `C` `Y` | delete, change, yank to the end of the line (`Y` as in Neovim) |
| `r` | replace the character; with the input method on, pick a Chinese one. A count writes over that many; `r` `Enter` breaks the line, in the file's own line ending |
| `R` | overwrite mode until `Esc`; `Backspace` gives back what was covered |
| `u` `C-r` `U` | undo, redo, undo all recent changes on the line |
| `J` `gJ` | join lines; `gJ` adds no space at all |
| `0` `^` `$` | start of line, first character, end of line |
| `%` | the matching bracket; off a bracket, the partner of the first one further along the line, and `d%` deletes from the cursor to there |
| `*` `#` | the word under the cursor, forward or back |
| `n` `N`, `gn` `gN` | the next or previous match |
| `m` *a*, `'` *a* | set mark *a*, go back to its line, across files; `` ` `` *a* does the same |
| *N*`\|` | go to column *N*; a Chinese character is two columns wide |
| `H` `M` `L` | top, middle, bottom of the screen |
| `(` `)` | previous, next sentence |
| `g;` `g,` | older and newer places you changed |
| `gi` | insert again where the last Insert stopped |
| `C-o` in insert mode | run one Normal command and come back |
| `C-u` `C-w` in insert mode | delete to the start of the line, the word before; each first stops where this Insert began |
| `K` | the documentation for the thing under the cursor |
| `q`, `Q` | record a macro (`q` again stops), play it |
| `ZZ` `ZQ` | save and quit, quit without saving |

Under the vim keymap the case and conversion menu moves from `` ` `` to
``g` ``, since `` ` `` jumps to a mark: ``g`s`` turns traditional characters
into simplified ones.

### Line wrapping for `h` and `l`

`h` and `l` stop at the ends of a line, as in vim. `[editor] which_wrap`
takes vim's `whichwrap` letters (`b` `h` `l` `<` `>` `~`); only `b`, for
`Backspace`, is on by default. `:which-wrap hl` sets it for this session and
`:which-wrap off` clears it.

## What is not there

- There are no named macros: `qa`…`q` and `@a` are not there. There is one
  macro, the last one recorded; `q` records it and `Q` plays it. See
  [Registers](../reference/registers.md).
- The code objects (functions, parameters, tests, HTML elements) have no vim
  spelling, and neither has vim's tag object `it`.
- vim-surround's visual `S` is not there. Use `ys` with a motion.
- `gh` and `gl` do nothing; use `0` and `$`.
- `:sp` is `:search-project`, not a split. Split with `C-w s`; there is no
  vertical split. With the window split, `:q` closes the region you are in,
  as vim's `:q` closes a window.
- `:set` opens the settings panel. It does not take `option=value`; each
  option is its own command or config key. See
  [Settings](../reference/settings.md).
- There is no `:g` and no `:normal`.

Everything else, the `Space` menu and the input method included, is the same
under both keymaps. See [Coming from helix](helix.md).
