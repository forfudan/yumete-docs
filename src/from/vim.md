# Coming from vim

yumete's default keys are helix's: you select first and act second. Under them
some vim habits change the wrong text: `x` selects a line, and `dd` deletes
two characters. The vim keymap is a whole keymap of its own: vim's way of
pressing on yumete's commands, and vim's caret, `f`, registers and page. [What
follows your keymap](../reference/keymaps-and-yumete.md) lists what changes
with it.

Turn it on in the config:

```toml
[keys]
preset = "vim"
```

or type `:keymap vim` to use it for this session only. `:keymap helix` goes
back, and `:keymap` on its own says which keymap is in force. Keys you bind in
`[keys.normal]` win over the keymap. See [Key remapping](../guide/remapping.md).

What yumete adds over vim's keys is the
[Yumete flavour](../reference/flavor.md), on at its `basic`
level: the `Space` menu on `Space`, `` g` `` for the case menu, `gW` for jump
labels, `gz` `gZ` to jump by letters or pinyin, `A-j` `A-k` to move lines, and
helix's keys on keys vim and Neovim leave free (the Alt keys, `C-s`, `gb`,
`gy` and the rest). With `flavor = "off"` under `[keys]` the keys are vim's alone: `Space`
moves right and the `Space` menu is on `\`, vim's leader.

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
| search | `/` `?` then the pattern and `Enter`, `n` `N`, and `gn` `gN` for the match itself: `cgn` then `.` changes one match after another |
| marks | `` ` `` *a* and `'` *a*, and `` `< `` `` `> `` `'<` `'>` for the last selection |
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

`gq` fills lines to 79 columns, as vim's `gq` does with its factory settings,
or to the file's `tw` (`:set tw=60` or a modeline), as vim's `textwidth`
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

Vim's `relativenumber` option is `:line-numbers relative`: the cursor line shows
its own number and the rest their distance, so the count for `k` and `j`
is on the gutter (see [Line numbers](../writing/page#line-numbers-line-numbers)).

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

vim-surround's keys are built in: `ysiw(` wraps a word as `( word )` and
`ysiw)` as `(word)`; `ds(` deletes the pair around the cursor and the spaces
inside it, `ds)` only the pair; `cs(]` changes `( … )` to `[…]`. With no pair
around the cursor, `ds` and `cs` take the next one on the line, as vim's `a(`
does. `b`, `B`, `r`
and `a` name `)`, `}`, `]` and `>`, and `q` a straight quote. `t` (or `<`)
asks for a tag: `ysiwt` then `em` Enter gives `<em>word</em>`, `dst` takes
tags off, `cst` changes them. `f` asks for a function name: `ysiwf` then
`print` Enter gives `print(word)`, and `dsf` takes a call's name and brackets
off. `.` repeats all of them, and a count reaches a pair further out (`2ds(`).
`ys` takes any motion or object, so `ys$"` quotes to the end of the line, and a
count before it is the motion's (`2ysw(` wraps two words). `yss` wraps the line.
Over whole lines (`ysj`, `ysip`) the marks go on lines of their own. `yS` does
the same over any motion and indents what it wraps: `ySS{` puts the line
between `{` and `}` on lines of their own, and `ySiw(` keeps the `(` where the
word was. In Visual mode `S` wraps the selection: `veS)` gives `(word)`, `VS{`
puts the lines inside braces on lines of their own, indented, and in a block
`S` wraps each line's piece. The menu after `ys`, `ds` and `cs` lists every key.

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
line says `SEL`. As in vim, its corner can stand just past the end of a short
line, so the rectangle's width follows the cursor: `C-v j l` from the start of
`abc` down onto `d` is two columns wide.

- `I` and `A` write before or after the block on every line. `I` skips a line
  too short to reach the block, `A` pads one with spaces, and `$A` writes at
  the end of each line. What you type is copied to the other lines on `Esc`.
- `c` `d` `y` `r` `~` `u` `U` `>` `<` `J` act on the block.
- `o` and `O` move to the other corners.
- `p` puts a block you took back as a block. `p` `P` `gp` `gP` over a block
  replace it: a block goes in its place, a word goes on every line of it, and
  lines go below it (above it for `P`).
- `gv` selects the last block again, and `` `< `` `` `> `` go to its corners.

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
| `n` `N` | the next or previous match |
| `gn` `gN` | select the next or previous match |
| `m` *a*, `'` *a* | set mark *a*, go back to its line, across files; `` ` `` *a* does the same |
| `` `[ `` `` `] ``, `'[` `']` | where the last change or yank began and ended; `>` and `<` set them as vim does |
| *N*`\|` | go to column *N*; a Chinese character is two columns wide |
| `H` `M` `L` | top, middle, bottom of the screen |
| `(` `)` | previous, next sentence |
| `g;` `g,` | older and newer places you changed |
| `gi` | insert again where the last Insert stopped |
| `C-o` in insert mode | run one Normal command and come back; a `:`, `/` or `?` line comes back when it ends, by Enter or `Esc` |
| `C-u` `C-w` in insert mode | delete to the start of the line, the word before; each first stops where this Insert began |
| `C-v` in insert mode | write the next character or `Tab` as it is: no closing pair, no completion list. `C-v Enter` writes a carriage return (drawn `␍`), and a code writes the character it names: `C-v065` and `C-vx41` are `A`, `C-vu4e2d` is `中`, as are `o` octal and `U` with eight hex digits |
| `gp` `gP` | put after, before, and leave the cursor just past what was put |
| `C-n` `C-p` in insert mode | open the completion list with the first or the last entry written in |
| `K` | the documentation for the thing under the cursor |
| `q`*a*, `@`*a*, `@@`, `Q` | record a macro into register *a* (`q` again stops; `q`*A* adds to it), play it, play the last one played, play the last one recorded |
| `C-n` `C-p` `_` | down, up a line; the first non-blank character, a count of lines down |
| `]p` `[p` `]P` `[P` | put after, before, with the indent adjusted to the current line |
| `C-^` | the previous file; while typing it switches the input method between Chinese and English, as vim's Insert-mode `C-^` switches language |
| `ZZ` `ZQ` | save and quit, quit without saving |
| `gw` | fill, as `gq`, with the cursor kept |
| `gx` | open the web address under the cursor |
| `gD` | the declaration, asked of the language server |
| `C-e` `C-y` | scroll a line down, up |
| `''` | back where the last jump came from; again, forward |
| `C-y` `C-e` in insert mode | type the character above, below the cursor; while the completion list is open, keep / cancel the entry, as in vim's popup menu |
| `]c` `[c` | next, previous change |
| `C-t` in insert mode | put one indent width on the line, rounded to a multiple of it, the cursor staying on its text |
| `C-c` `C-d` `C-g u` in insert mode | leave Insert, take one indent width off the line (rounded, as `C-t`), start a new undo step (`undo_steps = "sentence"` does this at each sentence end by itself) |

Under the vim keymap the case and conversion menu moves from `` ` `` to
``g` ``, since `` ` `` jumps to a mark: ``g`s`` turns traditional characters
into simplified ones.

### Line wrapping for `h` and `l`

`h` and `l` stop at the ends of a line, as in vim. `[editor] which_wrap`
takes vim's `whichwrap` letters (`b` `h` `l` `<` `>` `~`); only `b`, for
`Backspace`, is on by default. `:which-wrap hl` sets it for this session and
`:which-wrap off` clears it.

## Your vim or Neovim config

`ye --import vim` reads your vimrc, and `ye --import nvim` your Neovim
config, by running the editor headless on a copy of it in a temporary
directory (see
[Bringing a config](../guide/configuration.md#bringing-a-config-from-helix-vim-neovim-or-lazyvim)).
Nothing your config does reaches your own files: it writes into the copy, git
stays inside it, and what your editor starts is stopped with it, also when
you press Ctrl-C. A link in your config to a folder outside it is left out of
the copy, and the import says which, so a config that sources files from
elsewhere through such a link may come over without them; links that stay
inside the config work as they do at home. It gives up after 10 seconds.
If your config stops at an error part way, what it sets after the error is
never read; the file says so at the top, under what the editor said.
What comes over:

- **Settings you changed**: `number` and `relativenumber` (as
  `line_numbers`), `tabstop`, `shiftwidth`, `expandtab`, `textwidth`,
  `colorcolumn` (every column, as `rulers`, `+1` counted from `textwidth`),
  `scrolloff`, `wrap`, `ignorecase` with `smartcase`, `whichwrap`,
  `modeline`, `fixendofline`, `autoread`, `ambiwidth`, `pumheight` and
  Neovim's `mousescroll`, and `mouse` emptied (as `mouse = false`). A setting left at the editor's default is not
  written, even where yumete's default differs.
- **The colour scheme**, when yumete has its family (tokyonight, catppuccin,
  gruvbox, github, onedark, dracula, monokai), light or dark from its name or
  from `background`.
- **`yank_flash`**, when a `TextYankPost` autocommand mentions yanking (the
  line says so), and `indent_guides` when indent-blankline is loaded; one
  that says nothing of a yank is listed. A LazyVim config that takes
  either away has it written `false`.
- **Maps**, under `[keys.vim.normal]`, `[keys.vim.select]` (vim's Visual
  mode) and `[keys.vim.insert]`, so they hold under the vim keys only. A map
  whose right side is a run of keys becomes an `@` run; Visual `>gv` and
  `<gv` become `indent` and `unindent`, which keep the selection; one to an Ex command
  yumete has becomes that command (`:sp` becomes `:hsplit`, `:bd`
  `:buffer-close`); `:Telescope find_files`, `:Neotree toggle`, the
  language-server functions (`vim.lsp.buf.definition`) and a few dozen more
  become yumete's own action. With a Space leader, `<leader>ff` becomes
  `[keys.vim.normal.space.f] f`, its description the menu's label. A group
  key that was one of yumete's (`Space f`, the file picker) is taken over, as
  in Neovim, and listed under `# Takes over yumete's keys:` with what yumete
  had there (`Space w` is the window group, which stays on `C-w`). With
  another leader the map is a run, `",w" = ":write"`, its description a
  comment.
- A deleted Neovim `Y` brings vim's `Y` back (`"@yy"`).

What is listed instead, one line a map: a map to a Lua function of your
own, an expression map, a plugin's own key (`<Plug>`), keys yumete cannot
bind (`<Esc>`, `<F5>`), a run of keys in Insert mode, an Ex map that uses
`%`, `#` or a shell command (`:w !sudo tee %`, `:e #`), a map of the Space
key itself (the Space menu stays), Operator-pending,
command-line and terminal maps, per-language `FileType` settings, and any
option yumete has no counterpart for. A map that already does in yumete what
it does in vim is counted, not written.

An `@` run presses yumete's vim keys, not your own maps: a `nmap` that relied
on another map of yours loses it. A `[keys.vim.normal]` line holds in Visual
mode too, as every Normal-mode line does, so an imported `nnoremap Q <Nop>`
also takes Visual `Q` away.

## What is not there

- A macro is written in its register as helix writes it: `"ap` after `qaihello<Esc>q`
  gives `ihello<esc>`, where vim gives `ihello^[`. See
  [Registers](../reference/registers.md).
- `gt` (no tab pages) and `gs` do nothing, and `!` does nothing yet. `&` is
  nvim's `:&&` (the last `:s` again on this line, with its flags); `g&` runs it
  over every line with the last search's pattern. `:&` and `:s` alone run it
  without its flags, `:&&` with them. Under helix's keymap `:s` alone still
  opens the search panel.
- `=` re-indents code by the syntax tree, the same levels Enter opens, in the
  file's indent unit: `==`, `=ip`, `=G`, Visual `=`. It is not vim's indent
  scripts, so a line can come out differently from vim; in prose, Python, Mojo
  and the languages with no indent rules it changes nothing and says so.
- `d<C-v>` (a forced blockwise motion) is not there; `dv` and `dV` are.
- On the `:` and `/` lines, `C-r C-w` puts the word under the cursor, `C-r C-a`
  the WORD and `C-r C-l` the line.
- Folds are vim's, made with `zf` (see [Folds](../reference/folds.md)); in
  Markdown and Typst the headings fold too, all open at first. There is no
  `foldmethod`. vim's fold command is `:view-fold`, on the selected lines;
  the commands that open and close folds over a range are not there.
- The code objects (functions, parameters, tests, HTML elements) have no vim
  spelling, and neither has vim's tag object `it`.
- vim-surround's `cS`, visual `gS`, the `C-]` `C-t` `C-f` replacements and
  Insert mode's `C-g s` are not there. `yS`, `ySS` and `VS` indent by one of
  yumete's own indent levels (what `>>` adds) and do not re-indent with `=`. In
  a block, a line too short to reach the block is left alone.
- `gh` and `gl` do nothing; use `0` and `$`.
- `:r` is `:replace`, not `:read`; to put a file's text in, use `:read <file>`,
  or `:read !cmd` for a command's output. `:0read` and `:$read` put it above the
  first line and after the last.
- `:put [x]` (`:pu`) puts a register on lines of its own below the cursor's
  line, `:put!` above, `:0put` above the first line and `:$put` after the last;
  `:put =expr` is not there. `:delete [x] [count]` (`:d`, `:de`, `:del`) takes
  lines into a register as `dd` does: `:3,5d a`, `:d 3`. `:de` is no longer
  `:decimo`. Neither takes a `|` after it.
- `:sort` takes vim's `!`, `i`, `n` and `u`, and a range in front (`:%sort`,
  `:2-5sort`); `r /pat/` is not taken.
- `:sp` is `:search-project`, not a split. Split with `C-w s` or `:hsplit`,
  side by side with `C-w v` or `:vsplit`; new windows open below and to the
  right, as with vim's `splitbelow` and `splitright`, under either keymap. `C-w n` opens a blank window below at once; `:new` is helix's: a new empty buffer in this window,
  and the split versions are `:hsplit-new` and `:vsplit-new` (`:hnew`, `:vnew`). `:q` closes the window you
  are in, and quits in the last one, as vim's `:q` does.
- `:set` is `:settings`, which takes what a modeline takes, for this file: `ft`, `ts`, `sw`, `et`
  and `tw`, as in `:set ft=python ts=2 sw=2 et`; `:setf python` is `:syntax
  python`. `:set ts?`, or `:set ts` alone for an option with a value,
  says its value, as in vim. `tw` is the width `gq`, `gw` and `:hard-wrap`
  fill to; lines are not broken while you type. Other options are their own
  commands or config keys: `:set nu` or `:set nowrap` is refused on the status
  line, saying what `:set` takes. `:set` on its own opens the settings panel,
  and `:set` with a setting's name opens it on that row. See [Settings](../reference/settings.md).
  `:setl` (`:setlocal`) is `:settings-buffer`, the same, since these options are the file's
  anyway; on its own it says their values.
- There are no tab pages, so no `:tabnew`: `:ene` is `:new`, a buffer with
  no name in this window, and a file by its name, whether it is on disk yet
  or not, is `:e` (`:open`), or `:hsplit`/`:vsplit` in a new window. vim's `tabn` and `tabp` are not there; typed,
  they point to `:buffer-next` and `:buffer-previous`.
- There is no `:g`.
- `:normal` (`:norm`) runs keys as typed in Normal mode: once at the cursor,
  or at the start of each line of a range or of the selection, as
  `:%norm A;`. A failing motion ends that line's keys and an unfinished
  command is dropped, as in vim; the whole run is one undo step. `:normal!`
  leaves out your own key bindings.
- A range is written with `,` as in vim, or with `-`: `:3,6s` and `:3-6s` are
  lines 3 to 6. `:'<,'>` is the selection and `:'a,'b` the lines between two
  marks; `:.,+2` and `:'a+1` are not spellings in `:s`. `:s`, `:sort`,
  `:normal`, `:read`, `:put` and `:delete` take a range. See
  [Search and replace](../guide/search.md).
- A long line wrapped over several rows scrolls a row at a time, as with
  Neovim's `smoothscroll`: after `G` the top row can be the tail of a line,
  and `scrolloff` counts rows.
- Modelines are read for `ft`, `ts`, `sw`, `et` and `tw` only; `fenc`, `ff`
  and the rest are passed over, and the encoding is read from the bytes. See
  [Modelines](../guide/files.md#modelines).

Everything else, the `Space` menu and the input method included, is the same
under both keymaps. See [Coming from helix](helix.md).
