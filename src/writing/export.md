# Export

Vertical layout, hung punctuation and ruby are drawn on screen as you write.
`:export` sets the file as a page you can open, print or hand to a
typesetter, with its own settings for each of them.

```
:export html               chapter.md → chapter.html
:export typst              chapter.md → chapter.typ
:export epub               chapter.md → chapter.epub
:export html out/ch1.html  a name of your own
:export epub vertical jlreq page=A5 book.epub
                           words for this one export, then the path
:export! html              write over a file that is already there
:export csv                the table under the cursor, comma separated
:export tsv                the table under the cursor, tab separated
:export-as-preview         the file as its preview draws it (see below)
```

With no path, the export takes the file's name and changes the extension. An
existing file is not overwritten unless you add `!`, and a file open in the
editor is never written over. A new buffer needs a path.

## Settings and words

An export does not follow the editing window. `:vertical`, `:view-hanging`,
`zong_length`, `:ruby-html`, `tatechuyoko` and `:render` change how you see
the draft; how the exported page is set comes from `[export]` alone:

```toml
[export]
vertical = false          # set the page vertically, right to left
hanging = false           # stops hang past the end of a line
ruby_html = true          # read <ruby> in the source as ruby
ruby_typst = true         # read #ruby in the source as ruby
ruby_markdown = true      # read {漢字|hàn zì} in a Markdown source as ruby
vertical_latin = "turn"   # or "jlreq"; see "A vertical page"
page = "A5"               # A4, A5, A6, B5, B6, letter, 16k, 32k, d32k, or "130x184" in mm
font_family = '-apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", system-ui, "Ubuntu", "Droid Sans", sans-serif'
```

All of these are in the settings panel (`:settings`, Files). Each one is
also a word for a single export, written after the format and before the
path, in any order:

| Word | Setting |
| --- | --- |
| `vertical`, `horizontal` | `vertical` |
| `hanging`, `no-hanging` | `hanging` |
| `ruby-html`, `no-ruby-html` | `ruby_html` |
| `ruby-typst`, `no-ruby-typst` | `ruby_typst` |
| `ruby-markdown`, `no-ruby-markdown` | `ruby_markdown` |
| `turn`, `jlreq` | `vertical_latin` |
| `page=A5`, `page=130x184` | `page` |
| `font="Songti SC", serif` | `font_family` |

A font list keeps its spaces: a word goes on past a space inside quotes or
after a comma. A word yumete does not know is reported, not taken as a file
name. A path has a `/`, an extension, or quotes; write a file called
`vertical` as `./vertical`.

## HTML

`:export html` writes one self-contained page. A vertical page becomes
`writing-mode: vertical-rl`, hung punctuation becomes `hanging-punctuation`,
and ruby becomes `<ruby>`.

On screen the page has no fixed measure: a line is as wide as the window, a
vertical column as tall as it. The page prints as it is. It carries print
styles for the paper `[export] page` names and its margins, sets the text in
10.5 point (五号), starts each chapter on a new page, and keeps a heading from
being left alone at the foot of a page. The paper then decides how many
characters a line or a column holds: 44 down an A5 page, for example.

There are no page numbers or running heads. Browsers do not support the CSS
that would place them, so use the print dialog's header and footer.

### Fonts

The page asks for the fonts in `[export] font_family`, written the way VS
Code's `markdown.preview.fontFamily` is, so you can paste that line in. The
default is VS Code's default, which is your system's own fonts. To print a
Chinese book in a serif face, name one:

```toml
[export]
font_family = '"Source Han Serif SC", "Noto Serif CJK SC", "Songti SC", serif'
```

The Markdown preview beside the text (`:view-preview on`) is set in the same
fonts, followed by the Chinese or Japanese face that suits the document.

For vertical text, pick a face that turns punctuation, such as Source Han
Serif, Noto Serif CJK or Songti. Otherwise `，` may not sit in the corner of
its square.

### A vertical page

A page is vertical when `[export] vertical` is on, or with the word
`vertical`. It is set the way a printed vertical book is.

**Latin letters and digits** follow `[export] vertical_latin`:

| | `turn` (default) | `jlreq` |
| --- | --- | --- |
| `Python`, `don’t worry` | turned | turned |
| `GPS`, `A` | turned | upright, one to a square |
| `3` | turned | upright |
| `12` | turned | across in one square |
| `1997` | turned | turned |
| `5%` | turned as one | across in one square |
| `50%` | turned as one | turned as one |
| `$x$`, `$\frac12$` | turned | upright |
| `$x^2+1$` | turned | turned |
| `` `count` ``, `` `取值(x)` `` (code) | turned whole | turned whole |

`turn` turns every run of half-width letters and digits on its side, with
the marks joined to it, so `5%` and `don’t` turn as one piece. `jlreq` follows
the W3C requirements for Japanese and Chinese layout (JLREQ and clreq).

**Curly quotes become corner brackets** on a Chinese page: `“”` as `『』`
and `‘’` as `「」`. They are real characters, so a copy from the page is
still Chinese. An apostrophe inside an English word stays an apostrophe.
Other punctuation is left as you wrote it, and the font turns it.

**A formula on a line of its own** is turned on its side and starts two
characters below the top of its column.

**A table is a vertical table**, like a chronology in an old Chinese book.
Each row of the source becomes a column, read from right to left, with the
header row on the right. The caption runs down beside it. A short cell stays
on one line; a long one wraps, so the table is never taller than a column.

**A picture alone in its paragraph is a figure**. The picture stays upright,
and its text becomes a caption beside it.

**Code is turned on its side whole**, Chinese in it too: it is
verbatim, so nothing in it stands upright and its columns stay lined up.
Inline code turns as one word under `turn` and `jlreq` alike. In a code
block each line runs down the page and the next is to its left; a line
longer than the column wraps at the foot of the column and goes on two
characters in, after a small hook. The page has no fixed column length,
so where a line wraps follows the window, as the columns of text do.
Copying from the page gives the code exactly as written.

## Formulas

In Markdown, `$x^2$` and `$$\frac{a}{b}$$` are TeX. The HTML and EPUB exports
draw them as pictures sized to the text. On a vertical page they are turned
on their side (see [A vertical page](#a-vertical-page)). A `$$` block on lines
of its own is one formula:

```markdown
$$
\int_0^1 \frac{\mathrm{d}x}{1+x^2} = \frac{\pi}{4}
$$
```

A formula that cannot be drawn stays as you wrote it. The picture carries the
TeX as its alternative text. Typst formulas in a `.typ` file are Typst, not
TeX, and are not drawn here; the Typst export keeps Markdown formulas as text.

## Captions and figures

A table takes a caption from a paragraph just above or below it that starts
with `Table:` or `: `, as in Pandoc:

```markdown
| Month | Rain |
| --- | --- |
| July | 215 |

Table: Rain in the summer
```

A picture alone in its paragraph is a figure, and its text is the caption:

```markdown
![The weather station](station.png)
```

The HTML page refers to the picture where the Markdown file does. An EPUB
carries the picture inside the book; one it cannot read, or one on the web,
is left out and its caption kept. The Typst export writes a table's caption
as a `#figure`, and a figure as its caption's words.

## Typst

`:export typst` writes Typst source, always horizontal, because Typst has no
vertical layout; a vertical export says so at the top of the file.
`[export] font_family` and `page` do not reach it: Typst sets its own. Ruby becomes
`#ruby(base, reading)`, with a definition at the top of the file that you can
change.

## EPUB

`:export epub` writes an EPUB 3 book with the same text and look as the HTML
page. A vertical page becomes a vertical book that turns from right to left,
as a Chinese or Japanese book does. Formulas and figures go in as pictures,
and the headings become the table of contents. The book's title is the first
heading, or the file's name.

Open it in Apple Books, Thorium or any EPUB 3 reader. How a reader sets
vertical text is up to the reader; older ones set every book horizontally.

## What carries over

All three formats carry:

- headings and paragraphs;
- `**bold**`, `*italic*` and the other inline marks, as real formatting, not as
  asterisks;
- lists, nested, numbered or not;
- block quotes;
- footnotes, numbered in the order they appear: a list at the end of the HTML
  page, `#footnote[…]` at the mark in Typst;
- pipe tables, with their column alignment and a caption;
- pictures alone in a paragraph, as figures with a caption (HTML and EPUB);
- TeX formulas in Markdown, drawn as pictures in HTML and EPUB;
- GitHub alerts (`> [!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`,
  `[!CAUTION]`) and `:::` containers, as callouts (HTML and EPUB);
- front matter (`---` … `---` at the head of the file), in a frame;
- a fenced code block naming a language, in syntax colours;
- links, as links;
- task lists, `- [ ]` and `- [x]`, with their boxes (☐ or ☑ in Typst);
- rules (`---`, `* * *`);
- ruby, in all three kinds of markup; the brace form only from a Markdown
  file.

Anything else comes out as text. Annotations to yourself, written
`%%like this%%` or as HTML comments, are left out.

## Language and line breaks

The page's language comes from the text. A file with more Latin words than
Chinese characters is set as English: `lang="en"`, and
paragraphs spaced apart instead of indented. Kana make it Japanese. Otherwise it
is set as Chinese, with a first-line indent.

A line break inside a paragraph is kept between lines of Chinese, where it is
usually meant. Between two lines of Latin text it becomes a space, as CommonMark
reads it, so a hard-wrapped English paragraph comes out as one paragraph.

## Tables as CSV or TSV

`:export csv` and `:export tsv` write only the table under the cursor, not the
whole document, and leave the buffer as it is. See [Tables](tables.md).

## From the command line

`ye --export` does the same without opening the editor, and writes over a
file that is already there, as a compiler would:

```
ye --export html ch1.md            ch1.md → ch1.html, beside it
ye --export typst ch1.md           ch1.md → ch1.typ
ye --export epub ch1.md            ch1.md → ch1.epub
ye --export epub vertical jlreq page=A5 ch1.md
ye --export pdf book.typ           book.typ → book.pdf
ye --export pdf ch1.md             Markdown → Typst → PDF
ye --export tsv parts.csv          a table file in the other format
ye --export html --out out/a.html ch1.md
```

The words go among the files, as on `:export`. In a shell, quote a font
list whole: `font='"Songti SC", serif'`. `--vertical` is the editor's
layout for that run and does not make the export vertical; the word
`vertical` does.

The path written is printed, one a line, so a script can pick it up; several
files may be named at once. `pdf` needs the [Typst](https://typst.app)
compiler on the PATH (`brew install typst`): a `.typ` file is compiled as it
is, with `#include` and images resolved from its own folder; a Markdown file
goes through the Typst export above first. Your config's `[export]` settings
apply, as they do to `:export`.

## Seeing it before you export

`:view-preview` shows the typeset result while you write, in a preview tab
beside the text: a Typst page set by tinymist, or a Markdown file set by
yumete itself. The Markdown preview draws readings by the same three
`[export] ruby_*` settings as the export. See
[The page](page.md#preview-in-a-real-typesetter-view-preview).

## Exporting what the preview shows

`:export-as-preview` writes the file the way its preview draws it, so what
you see is what you get.

```
:export-as-preview              chapter.md → chapter.html, book.typ → book.pdf
:export-as-preview html         a Markdown file's preview, as a web page
:export-as-preview pdf          a Typst file's preview, as a PDF
:export-as-preview out/a.html   a name of your own
:export-as-preview!             write over a file that is already there
```

**A Markdown file** becomes the same HTML page `:export html` writes, with
its look taken from the Markdown preview rather than from `[export]`:

- the preview's fonts: `[export] font_family`, then the CJK face of the
  document's writing system (Simplified, Traditional or Japanese, from its
  text or its front matter's `lang`); emphasised Chinese in a Kai face;
- the preview's type sizes, GitHub's: 16 px body, headings at 2, 1.5 and 1.25
  em, code at 0.85 em;
- the colours of your theme, in the mood it is shown in now, light or dark:
  the page's ground, headings, links, code, quotes, tables, callouts and task
  boxes; formulas are drawn in the colour of the text around them, a
  quotation's or a footnote's included;
- vertical exactly when the preview is: the text window vertical and
  `[editor] preview_vertical` on. `[export] vertical` does not decide it here;
  `[export] vertical_latin`, `hanging` and the `ruby_*` settings apply as the
  preview reads them.

Formulas are pictures inside the page; images are referenced by the path the
source uses, as `:export html` references them, so keep the page beside the
source.

**A Typst file** becomes the PDF of the document its preview typesets: the
file itself, or, for a chapter, the book that includes it (the main file of
an open preview tab, else an open file that `#include`s or `#import`s it).
It is compiled by the [Typst](https://typst.app) compiler (`brew install
typst`) on the project root a language server would use, so `#include` and
images resolve as in the preview. The compiler runs in the background: you go
on writing, the status line says "typesetting book.typ…", and then where the
PDF went, or the compiler's first line of complaint. One PDF is typeset at a
time; asking again meanwhile says so. Without `typst` nothing is written. The
compiler reads the files on disk: unsaved changes are not in the PDF, and the
message says how many open files have them.

The path rules are `:export`'s: without a path the file's name with the
extension changed (the book's name for a chapter), `!` to write over an
existing file, and never over a file open in the editor. `html` on a Typst
file, `pdf` on a Markdown file, and any other word say which format the
file's preview has.

The page is a browser's, so it is as close to the preview as CSS allows, not
the same picture: lines may break a character earlier or later, punctuation
squeezing follows the browser and the font, and hanging punctuation shows
only in Safari.
