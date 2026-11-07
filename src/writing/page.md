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
shows it as maths and follows it as you type. The picture is made by the
`typst` command, which has to be on your `PATH`. Markdown's LaTeX goes through
the MiTeX package, which comes with yumete, so nothing is downloaded. Other
terminals show the coloured source only. `[editor] maths_preview = false`
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

## Preview in a real typesetter: `:view-preview`

`:render full` is the most this screen can show. `:view-preview` hands the file
to a real typesetter and shows the result beside the text, or in your browser.

```
:view-preview on          the page in a window beside the text, or the browser
:view-preview off         put away whichever preview is up
:view-preview             turn it round
:view-preview-window      the window only; says why when it cannot be drawn
:view-preview-browser     the browser only
:view-preview-fit page    show the whole page in the window (width is the default)
```

| File | What happens |
| --- | --- |
| Typst | tinymist draws the page into a window beside the text |
| Markdown | an HTML export goes to a temporary file, and the browser opens it |

The preview window is a window like any other: `C-w` moves into it, and `:q`
closes it. It shows the page the cursor is on and follows the cursor, and it is
drawn again a moment after you stop typing, without saving. It needs a terminal
that draws pictures (Ghostty or kitty) and tinymist 0.13.30 or later; without
them, `:view-preview` opens the browser instead and says why. The page is shown
as it prints, also under a dark theme.

In the browser, the Typst preview follows your typing too: each keystroke is
sent to the typesetter, which recompiles only what changed. The first compile of
a long book can take a while, and the page stays grey until it finishes. The
browser preview stops when you close that file, when you type `:view-preview
off`, or when you quit. The file must have a name; save a new buffer first.

## Focus and typewriter

```
:view-focus on          the paragraph you are in stays lit; the rest steps back
:view-typewriter on     the row you are writing stays in the middle of the screen
```

Focus works by paragraph, not by row: a paragraph wrapped over three rows is
lit as a whole. Both take `on`, `off` and `toggle`; typed alone, each says
whether it is on. How far the rest steps back is `[theme] focus`, the percent
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
