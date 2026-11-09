# The page

This page covers how your text is drawn: which markup the file is in, how much
of that markup you see, where lines break, how paragraphs open, and the extras
you can turn on while you write. None of it changes the file. Every setting
here is a way of looking at the text.

Most of these are `:view-*` commands. Most of them, typed alone, tell you
their current state, and `on`, `off` or a value changes it. To keep a setting, put it
in your config (see [Configuration](../guide/configuration.md)) or save it from
the settings panel, `:settings`.

## Source, colour, or WYSIWYG: `:render`

`:render` has three levels:

| Level | What you see |
| --- | --- |
| `off` | the source, uncoloured |
| `basic` (default) | the source, coloured; not one character hidden |
| `full` | the markup comes off the page, except where the cursor is |

Under `basic`, the word in `**bold**` is drawn bold and the two `**` stay on
the page, dimmed. You always see what is really in the file.

Under `full`, the inline marks leave the page: `**`, backticks, the brackets
and target of `[text](target)`, `[[` `]]`, and `%%`. Only the text they
surround stays. A footnote mark `[^1]` is drawn as a superscript `⁽¹⁾`, and so
is the `[^1]:` that starts the note. Only all-digit footnote names are drawn
this way; `[^note]` stays as written.

Block structure is never hidden. A heading keeps its `#`, a list keeps its
marker, a quote keeps its `>`. A terminal cannot make a heading bigger, so the
`#` shows its level, and in ink so does its colour. Typst code such as
`#import "ch1.typ"` is never hidden either; it is coloured as code.

Wherever the cursor or the selection touches a construct, that construct opens
and shows its source. So the cursor is never inside text you cannot see, and
`w`, `x` and `d` work on the characters in front of you. Move away and it
closes again.

`:render` alone tells you the level of the markup, tables and ruby. Tables have
their own levels (see [Tables](tables.md)), and so does ruby (see
[Ruby and annotations](ruby.md)).

## Markdown, Typst or plain text: `:syntax`

A `.md` file is Markdown and a `.typ` file is Typst. A file whose name does not
say, usually a `.txt`, is read when it opens and guessed. A Typst keyword such
as `#let` or `#import`, or a heading in either syntax, settles it. Without
enough evidence the file is plain text, so the `*` and `#` in a novel are not
mistaken for markup.

A new buffer with no name starts as plain text. Each time you leave Insert
mode, yumete guesses again from what you have written. It stops guessing once
you choose a syntax with `:syntax` or save the buffer under a name.

You can always say it yourself:

```
:syntax              which syntax this file is read as
:syntax typst        read it as Typst
:syntax markdown     read it as Markdown
:syntax text         no markup at all: every character is only itself
```

From the shell, `ye --syntax typst draft.txt` does the same, and it beats both
the extension and the config.

For a whole project, write it into the project's `.yumete/config.toml`. An
exact file name beats an extension:

```toml
[syntax]
txt = "typst"              # every .txt here is Typst
"notes.txt" = "markdown"   # except this one
```

`[editor] syntax = "typst"` says the same for every file whose name does not
say, without listing extensions.

A chapter you open with `gf` from a Typst `#include` line is read as Typst
whatever it is called.

## Markdown colouring

Headings, `**bold**`, `*italic*`, `~~struck~~`, `==highlight==`, `` `code` ``,
`$maths$`, links, `[[wiki links]]`, footnotes, quotes, lists, tasks, rules, tables, front
matter and `::: tip` boxes are all coloured. The marks themselves are dimmed,
and the text they fence stands forward. Annotations to yourself, written
`%%like this%%` or `<!-- like this -->`, are set back in a faint colour. Their
words are never hidden, and export leaves them out.

A fenced code block is coloured by the grammar its fence names (```` ```rust ````,
```` ```python ````), with the theme's code colours. `:view-code off` turns this
off, `:view-code` alone turns it round, and turning it on says why a block is
not coloured. The list of languages is on the
[Language servers](../guide/languages.md) page.

A line longer than 50,000 characters is left plain, so a one-line data file
does not slow the editor down. `:view-long-line` sets the limit, and
`:view-long-line off` removes it.

### Maths

`$a + b$` and `$$x^2$$` are coloured as maths, and so is display maths set on
lines of its own: a `$$` line, the formula, and a `$$` line; in Typst, a `$`
… `$` over several lines. In Markdown a `$` with a space after it, or a blank
line before the closing `$$`, is not maths, so prices stay prices.

In Ghostty and kitty, and in either one inside tmux with `allow-passthrough
on`, the formula under the cursor is also typeset: a float under the cursor
shows it as maths and follows it as you type. Markdown's LaTeX is drawn inside
yumete, with nothing to install; Chinese in `\text{}` needs a CJK font on the
system. A Typst formula is drawn by the `typst` command, which has to be on
your `PATH`. Other terminals show the coloured source only. `[editor] maths_preview = false`
turns the float off.

### Following a link

Put the cursor anywhere on a link and press `gL`, or hold Ctrl and click it.

| Written | Where it goes |
| --- | --- |
| `[site](https://example.com/)` | opened in the system's browser |
| `[next](02.md)`, `[[Chapter 3]]` | opened here, as a buffer |
| `[snow](#snow)`, `[[Chapter 3#snow]]` | to that heading, opening its file first |

A relative path is read from the folder of the file the link is in; `~/` is
your home folder, and an absolute path is followed as written, inside the
project or not.

`gL` takes any link. The keys helix and vim have for it each take some:
`gx` opens a web address, as in vim; `gf` opens a file or a web address, as
in helix; `gd` follows a file, a `[[page]]` or a heading. `gx` and `gf` also
open a web address written bare, in any file, and `gf` a path written bare
(`~/notes/a.md`, `/etc/hosts`, `ch02.md:12` for its twelfth line), when the
file is there.
`[[Chapter 3]]` names a title, not a file: yumete tries the current file's
extension first, then `.md`. In `[[Chapter 3|that night]]` the part after `|`
is only what the link shows.

Only `http` and `https` links are handed to the system. Any other scheme, such
as `mailto:`, is shown on the status line and not run. A path to a file only
ever opens that file in yumete.

On a footnote mark, `gd` goes to the note, and `gd` in the note brings you back
to the character you left. See [Checks and counts](checks.md) for the note that
floats beside the sentence.

## Soft wrap: `:view-wrap`

A paragraph too wide for the window wraps onto the next row. This is on by
default, because a Chinese paragraph is often one line of several hundred
characters.

```
:view-wrap off         one line per paragraph; the page scrolls sideways
:view-wrap on          wrap at the window's edge
:view-wrap             turn it round
:view-wrap-width 50    wrap at column 50: a measure (below)
:view-wrap-width 0     drop the measure and wrap at the window again
:view-wrap-width       say which width it wraps at
```

With wrapping off the page follows the cursor sideways. vim's `zh` `zl` (a column),
`zH` `zL` (half a page), `zs` `ze` (the cursor at the left, the right edge) and
helix's `zm` (the cursor's column in the middle) move it by hand.

A Latin word is never cut in half. A row never starts with closing punctuation
such as `。` `、` `」` `）`, and never ends with an opener such as `「` `（`.

Under the helix keymap, `j` and `k` move by rows on screen and `gj` `gk` by
lines in the file. Under the vim keymap it is the other way round, as in vim.
The line number is printed only on the first row of a paragraph.

Wrap is for horizontal layout. A vertical column has its own length, set with
`:view-wrap-height`; see [Vertical layout](vertical.md).

## Line numbers: `:line-numbers`

The gutter can number lines three ways:

```
:line-numbers absolute   each line its own number
:line-numbers relative   the cursor line its own number; every other line
                         how far it is from the cursor
:line-numbers none       no gutter
:line-numbers            which is on
```

Relative numbers are for counted jumps: the line four above the cursor
says `4`, so `4k` goes there, and `6j` goes to the line that says `6`
below. The cursor line keeps its own number, flush left, so you still know
where you are in the file. With a selection the count runs from the head,
the end that moves; with several cursors it runs from the primary one.
The vertical page numbers its columns the same way, the digits stacked
above each column.

The command holds for the session; `[editor] line_numbers` in the config
sets the starting point. Vim calls this `number` with `relativenumber`,
helix `line-number = "relative"`.

## Hard wrap: `:hard-wrap`

Soft wrap folds long lines on screen and leaves the file alone. `:hard-wrap`
rewrites the file's own line breaks, like vim's `gq`, but it reads the text
first and never changes what it means:

```
:hard-wrap 50     the selected lines, or the paragraph under the cursor,
                  re-filled to fifty cells
:hard-wrap 0      each paragraph joined into one line
:hard-wrap        the width from [editor] hard_wrap; unset, it says so
```

With nothing selected it takes the unit the cursor is in — a paragraph, a
list item, a block of comments — and nothing else; `%` first takes the whole
file. One `u` takes it back.

What it respects, by syntax:

- **Markdown**: a line ending in two spaces or a `\` is a hard break and
  stays exactly as written; code fences and what is in them, indented code,
  tables, headings, a setext underline and the line above it, rules, HTML
  blocks, front matter and reference definitions are not touched; quotes keep
  their `>`, list items and footnotes hang under their marker. A continuation
  line never begins with something that would open a block there, such as `-`
  or `1.`; code spans, `[[links]]` and `[text](url)` are never broken inside.
- **Typst**: headings, `#` code lines, raw blocks, display maths and block
  comments are left alone; `\` at the end of a line is a hard break; items
  hang; `//` comments re-fill behind their marker.
- **Code**: only comments. A run of lines with the same indent and marker is
  one unit and the marker is written again on every line; `///`, `//!` and
  `//` are never merged into one another. A block comment's ` * ` rail is
  kept, its opening and closing lines are left alone. Every line of code, and
  a comment that follows code on the same line, is left as it is. A Python or
  Mojo docstring, the `"""` right after a `def` or `class` or at the top of
  the file, is documentation and re-fills; every other string is never
  touched. A comment's body is read as Markdown in turn, so a fenced example
  inside a `///` is skipped.
- **Chinese**: width is counted in cells, so fifty is twenty-five characters.
  A line breaks between any two characters, but never starts with `。，、」）`
  and never ends with `「（`; a word or a number is never split. Two lines
  joined across Chinese take no space between them, and a space where a letter
  is on either side, as `J` joins them.

`gq` and `:reflow` stay what vim's and helix's are: plain fillers that know
nothing of the text, for when that is what you want.

## The measure

A measure writes the page narrow. `:view-wrap-width 50` wraps every line at column 50
and tints everything to the right of it. On a wide monitor this
keeps lines at a length the eye can follow. If the window is narrower than the
measure, the window wins.

To keep it, set `measure` in the config:

```toml
[editor]
measure = 50   # wrap here; 0 is the window's width
ruler = 80     # only a cue: tint whatever runs past column 80
```

`ruler` does not wrap anything. It tints what runs past the column, which helps
if you break long sentences by hand. With wrap off it also draws a vertical
line there.

## First-line indent: `:indent`

A Chinese paragraph opens with a two-square indent, not a blank line. `:indent`
draws that indent without changing the file.

```
:indent full     indent every paragraph and fold away the blank line between them
:indent basic    indent, and keep the blank lines
:indent off      no indent (default)
:indent 2        the width in squares, up to 8; turns the indent on if it was off
:indent          tell me the current level and width
```

```toml
[editor]
indent = 2       # a width here turns the indent on, at the full level
```

Under `full`, the blank line between two paragraphs stays in the file but
leaves the screen, and the line numbers skip (1, 3, 5) to show that it is
there. The paragraph the cursor is in is drawn as the file has it, with no
indent and its blank line back above it. Two or more blank lines in a row stay
on the page, as do blank lines inside a code fence or front matter. The cursor
never stops inside an indent or on a folded line.

Headings, lists, quotes, tables, code fences and footnote bodies are not
indented, and a line already indented gets nothing added.

The indent squares are blank by default. To see them:

```
:indent-hint color     a faint tint
:indent-hint symbol    a mark in the first square (↵, or [editor] indent_symbol)
:indent-hint none      blank (default)
```

## Pages side by side: `:view-pages-*`

On a wide window you can cut the page into columns that run on from one to the
next, like a newspaper. The text flows from the left page into the right one.

```
:view-pages-horizontal 2    two pages side by side
:view-pages-horizontal 1    one page, the whole window
:view-pages-vertical 2      in vertical layout, two pages one above the other
:view-pages-horizontal      how many there are now
```

The number is 1 to 4, and each layout keeps its own. Each horizontal page has
its own line numbers and wraps at its own width, even with wrap off. Moving,
scrolling, paging, `zt` `zz` `zb` and mouse clicks work across all the pages as
if they were one. When the window is too narrow, you get fewer pages: each page
needs at least 30 cells of text.

```toml
[editor]
pages_horizontal = 2
pages_vertical = 2
```

## The margin: `:view-margin`

Ruby readings, hung punctuation, emphasis dots and 平仄 marks are drawn in the
**margin**, a narrow strip beside the text: the row above a line, or the cell
to the right of a vertical column. `:view-margin` decides when the margin is
kept.

| Value | The margin is kept |
| --- | --- |
| `never` | nowhere |
| `dense` (default) | on each row or column that carries something |
| `loose` | on every row or column of a paragraph if any of it carries something |
| `always` | everywhere |

`loose` keeps the spacing even through a paragraph; `always` looks most like
squared paper. Under `never`, ruby tags are still hidden but the readings are
not set. The indent is not part of the margin, so `never` does not turn it off.
In config: `[editor] margin = "dense"`.

## Preview in a real typesetter: `:preview`

`:render full` is the most this screen can show. `:preview` hands the file
to a real typesetter and shows the result beside the text, or in your browser.

```
:preview on           this document's preview beside the text, or the browser
:preview off          close this document's preview
:preview              turn it round
:preview-window       the preview tab only; says why when it cannot be drawn
:preview-browser      the browser only
:preview-fit page     show a whole Typst page (width is the default)
:preview-theme on     draw a Typst page in the theme's colours
:preview-vertical off keep the Markdown preview horizontal when the text is vertical
```

| File | What happens |
| --- | --- |
| Typst | tinymist draws the page in a preview tab beside the text |
| Markdown | yumete sets the file itself in a preview tab beside the text |
| Markdown, no pictures | an HTML export goes to a temporary file, and the browser opens it; it shows the text as it was then |

A Typst preview is a tab, like an open file. It is listed in the tab line as
"Preview main.typ", in `:b` and the buffer picker, and `gn`, `gp` and `ga`
reach it. `:preview on` opens it in a new window to the right of the
text and leaves you where you were; if the preview is already on the screen,
it says so. Open another file in the preview's window and that file shows
there; the preview stays open as a tab, and `:b`, `ga`, `C-o` or
`:preview` bring it back.

Each preview belongs to one document: the Typst file it was opened from, and
the Typst files under that file's folder, subfolders too, which is how a
book's chapters are included. Opened from a chapter, it typesets the open file that includes the
chapter with `#include` or `#import`, since a chapter alone lacks what its
book sets up; with no such file open, it typesets the chapter. It shows the page the cursor is on while you are in that document, and on a blank line the page of the nearest text,
and keeps its place while you work anywhere else. Each document can have its
own preview, and several can be open at once.

`:q` in a preview's window closes the window; the tab stays open. `:bc` on the
preview tab, or `:preview off`, closes the preview. A preview's window is a
window like any other: `:q` in the last text window closes it and leaves the
preview, and `:q` in the last window of all quits. A session keeps its preview tabs, and which
window showed one.

A preview is drawn in a frame, thick and gold while the keys are in it and thin otherwise, and the status line says `PRV` there. In a Markdown preview, the page follows the cursor to the visual line it is on, even deep in a long paragraph, and a gold bar stands beside that line, in the left margin or along the top of a vertical page; when that paragraph is out of view, arrows on the frame (`▶` `◀`, or `▼` `▲`) point the way to it. Inside a preview, the keys are a PDF reader's under vim:

| Key | Action |
| --- | --- |
| `j` `k` | scroll a little |
| `C-d` `C-u` | half a screen |
| `C-f` `C-b` | a screen |
| `gg` `G` | the top, the bottom of the page |
| `h` `l` | a column left, right (a vertical Markdown preview) |
| `J` `K` | the next, the previous page |
| `5G` `5gg` | page 5 |
| `gn` `gp` `ga` | the next tab, the previous tab, the tab you were in before |

`:`, `C-w`, `Space`, `C-o` and `C-i` work as anywhere else, and so do `ZZ`
and `ZQ` under the vim keys. A preview holds no text: nothing in it can be
typed into or searched, `:w` and `:wq` there say there is no file to write,
and `:x` closes its window as `:q` does. The status line shows only the
preview's name, and the buffer picker says which file it typesets.

The page is drawn again a moment after you stop typing, without saving. It
needs a terminal that draws pictures (Ghostty or kitty) and tinymist 0.13.30
or later. In another terminal, or with an older tinymist, `:preview` opens
tinymist's preview in the browser instead and says why.

The page is shown as it prints, also under a dark theme. `:preview-theme
on` draws it in the theme's colours instead: the paper in the background colour
and black text in the text colour, coloured parts keeping their hue. In
config: `[editor] preview_theme = true`.

In the browser, the Typst preview follows your typing too: each keystroke is
sent to the typesetter, which recompiles only what changed. The first compile of
a long book can take a while, and the page stays grey until it finishes. The
browser preview stops when you close that file, when you type `:preview
off`, or when you quit. The file must have a name; save a new buffer first.

### The Markdown preview

A Markdown file's preview is set by yumete itself, as VS Code's Markdown
preview is: proportional type in the export's fonts (your system's by
default), real heading sizes,
tables with lines, code in its language's colours, formulas, images (paths
from the file's folder), footnotes at the end, task lists, quotes, `:::`
containers and GitHub alerts. It is drawn in your theme's colours, light or
dark, and follows `:theme` and `:theme-mode`.

It is a preview tab like a Typst file's, "Preview notes.md": `:preview
on` opens it to the right of the text, `:q` in its window closes the window,
`:bc` on it or `:preview off` closes it, a session keeps it, and each
Markdown file can have its own.

It shows the unsaved text, laid out again a moment after you stop typing,
and follows the cursor: the line you are on stays a third of the way down
the preview while you are in that file, and the preview keeps its place
while you are anywhere else.

Inside it, `j` `k` scroll a line of the terminal, `C-d` `C-u` half a screen,
`C-f` `C-b` (and `PageDown` `PageUp`) a screen, `gg` `G` the top and the end.
A Markdown page is one long page, so `J`, `K` and `5G` do nothing there.
`:`, `C-w`, `Space`, `C-o` and `C-i` work as anywhere else.

The type is set to the terminal's: a cell 20 pixels tall gives a 16-pixel
body, a Retina terminal twice that. A document written in Traditional Chinese
is set in a Traditional face (PingFang TC, Noto Sans CJK TC), one in Japanese
in a Japanese face; front matter `lang: zh-Hant` or `lang: ja`, or
`<span lang="ja">…</span>` around a phrase, says so where the text cannot.
The faces come after the export's fonts (`[export] font_family`), or after
the preview's own, `[editor] preview_font_family`, when you name some there;
see [Export](export.md#fonts).
Adjacent full-width punctuation gives up its blank half, as Chinese
typesetting squeezes `。」` and `（「`.

Across the page, a table's caption (`Table: …` or `: …`, just above or
below it) stands over the table, and a picture alone in its paragraph is a
figure with its text as a caption under it. `:export-as-preview` writes the
preview as an HTML page, in its fonts and colours; see
[Export](export.md#exporting-what-the-preview-shows).

#### Set vertically

While the text window is vertical (`:vertical`), the Markdown preview is
vertical too: columns from the right, the page going on to the left. It is set
as the vertical export sets a page, not as the editing window shows the draft,
so `:render`, `tatechuyoko` and the column length do not reach it.

- Chinese characters stand upright, punctuation in its vertical forms; quotes
  round Chinese become corner brackets, `“”` as `『』` and `‘’` as `「」`, on a
  page the export calls Chinese and by the export's rule, and quotes round
  Western words keep their own marks, turned on their side as a browser turns
  them. A
  half-width mark on its own stands as the export's page sets it: `×` and
  `±` upright, `·` and `/` turned.
- Latin letters and digits go as `[export] vertical_latin` says. `turn` (the
  default) turns every run on its side with the marks joined to it (`5%`,
  `don’t`), and every inline formula. `jlreq` turns words, stands capitals and
  single letters, small ones too and ones with a mark joined to them (`x.`,
  `(x)`, `x, y`), upright one to a square, one digit upright,
  two digits across in one square, longer numbers turned; `$x$` and `$\frac12$` stand upright.
- No stop or closing bracket begins a column, no opening bracket ends one, and
  `——` or `……` is never split. A stop that does not fit takes the character
  before it to the next column, or hangs below the column under `[export]
  hanging`. Every column of a paragraph but its last reaches the foot.
- A display formula is turned, on a column of its own, two characters from its
  head. A table is read as columns from the right, the header row on the
  right, its caption (`Table: …` just above or below) beside it. A long
  cell wraps, a long word or address in it is broken to fit, and a turned
  formula in it is scaled down to its cell, so the table is never longer
  than the column; a table with more
  columns than the page holds even at a character each goes on in a second
  band to the left, each band with every row. A picture alone in its
  paragraph stands upright with its text as a caption to its left. A reading in ruby is drawn to the right of its characters. Code is
  turned on its side whole, Chinese in it too: inline code as a turned
  word, never upright, under `turn` and `jlreq` alike; a code block in its
  colours and on its ground, each line running down the page and the next
  to its left. A line longer than the column goes on in the next one, two
  characters in, after a small hook (↳ turned with the line), so nothing is
  cut off and nothing has to be scrolled.

It follows the cursor, the line you are on a third of the way from the right.
`j` `k`, `C-d` `C-u` and `C-f` `C-b` move along the page (`j` to the left),
`h` `l` a column to the left and to the right, `gg` `G` the start and the end.

`:preview-vertical off`, or `[editor] preview_vertical = false`, keeps
the preview horizontal whatever the text window does.

It needs a terminal that draws pictures (Ghostty or kitty). Elsewhere
`:preview on` opens the browser's HTML preview and says why;
`:preview-window` says why and opens nothing.

## Focus and typewriter

```
:view-focus on          the paragraph you are in stays lit; the rest steps back
:view-typewriter on     the row you are writing stays in the middle of the screen
```

Focus works by paragraph, not by row: a paragraph wrapped over three rows is
lit as a whole. Both take `on` and `off`; typed alone, each turns round and
says which way it went. How far the rest steps back is `[theme] focus`, the percent
of ink it keeps: 50 by default. The other windows step back as far, so the
paragraph you are in is the one thing at full ink.

## The count as you write

The status line shows how long the file is, after the cursor position, and the
outline sidebar (`:sidebar-outline`) shows each heading's count. See
[Checks and counts](checks.md#the-count-on-the-status-line) for how words are
counted and where the count is shown.

## The page you left

`ye -r` and `:resume` bring back how the page looked along with the files. See
[Files, saving and changes](../guide/files.md).
