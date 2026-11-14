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
`zong_length`, `:ruby-html`, `:ruby-typst`, `:ruby-markdown`, `tatechuyoko`
and `:render` change how you see the draft; how the exported page is set
comes from `[export]` alone (`:export-as-preview` is the exception: it is
vertical when the preview is):

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
| `font=Songti`, `font='"Songti SC", serif'` | `font_family` |

A word runs to the next space. A font list with a space or a comma in it is
quoted whole: `font='"Songti SC", serif'`, or `font="Songti SC, serif"`. A
word that ends in a comma is reported, not read on into the next one, so
`font=Songti, book.html` is a mistake said, not a font named `book.html`. A
word yumete does not know is reported, not taken as a file name. A path has
a `/`, an extension, or quotes; write a file called `vertical` as
`./vertical`.

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

The Markdown preview beside the text (`:preview on`) is set in the same
fonts, followed by the Chinese or Japanese face that suits the document. To
read in one face and print in another, give the preview its own list in
`[editor] preview_font_family`, written the same way. Left empty, as it is
at first, the preview follows `[export] font_family`. `:export` and
`ye --export` never read it.

```toml
[editor]
preview_font_family = '"LXGW WenKai Screen", "Kaiti SC", serif'
```

The Typst export asks for the same fonts; see [Typst](#typst).

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
| `GPS`, `A`, `x` | turned | upright, one to a square |
| `x.`, `(x)`, `x, y` | turned | each letter upright, its marks beside it |
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
the W3C requirements for Japanese and Chinese layout (JLREQ and clreq). A
single letter stands upright under `jlreq`, a small one as a capital does,
as `$x$` does, and so does a letter with a mark joined to it: in `x.` and
`(x)` the letter stands and the marks are set as marks on their own are.
A letter with an accent typed apart from it (`e` and a combining acute)
stands whole, as `é` does. `x, y` is two letters, each upright, not a
phrase.

**Curly quotes round Chinese become corner brackets** on a Chinese page:
`“”` as `『』` and `‘’` as `「」`. They are real characters, so a copy from the
page is still Chinese. Quotes round Western words keep their own marks, as
clreq has quoted Western text keep them: in `他说“go”`, `“go”` stays — a pair
stays curly when it holds a Latin letter and no Chinese. A pair that holds no
letter at all, only marks, digits or code (`“……”`, `“——”`, `“1949”`,
``“`走`”``), follows the text round it, so in a Chinese sentence it becomes
`『』`. A quote whose partner is in another paragraph (a quotation running on
over several) goes by the first letter inside it. A page is Chinese when its
prose is, as its `lang` says (see [Language and line breaks](#language-and-line-breaks));
the vertical Markdown preview asks the same question. An apostrophe inside an English word stays an
apostrophe. Other punctuation is left as you wrote it, and the font turns it;
a half-width mark on its own, such as `×` or `±`, stands as the browser's
vertical text sets it (upright for those two, turned for `·` or `/`).

**A formula on a line of its own** is turned on its side and starts two
characters below the top of its column.

**A table is a vertical table**, like a chronology in an old Chinese book.
Each row of the source becomes a column, read from right to left, with the
header row on the right. The caption runs down beside it. A short cell stays
on one line; a long one wraps, and a long word or address in it breaks
anywhere, and a formula in it is held to the cell, so the table is never
taller than a column.

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

A picture among words, `文中有图 ![小图](a.png) 在此`, is a picture in the
line, no longer than the line; two pictures on one line are two such
pictures, not a figure. A path with a space in it is written in angle
brackets, `![图](<my pic.png>)`, or with `%20`, `![图](my%20pic.png)`.
A picture written with no words, `![](a.png)`, is drawn too.

The HTML page refers to the picture where the Markdown file does. An EPUB
carries every picture inside the book, a figure's and one in a line; one it
cannot read, or one on the web, is left out, a figure keeping its caption and
a picture in a line its text. The Typst export writes a table's caption
as a `#figure`, and a figure as its caption's words.

## Typst

`:export typst` writes Typst source, always horizontal, because Typst has no
vertical layout; a vertical export says so at the top of the file.
It is set on the paper `[export] page` names, and in the fonts
`font_family` names; CSS's words for the system's fonts (`serif`,
`system-ui`, `-apple-system`…) mean nothing to Typst and are left out,
and the default list names none, so Typst sets its own type and falls
back to the fonts you have. `vertical`, `hanging` and `jlreq` do not
apply, and an export with them on says so. Front matter goes in a frame,
as on the page. Ruby becomes
`#ruby(base, reading)`, with a definition at the top of the file that you can
change.
A code block left open in Markdown, which ends with the file or the
quotation it stands in, is closed in the Typst source, before the end of
its `#quote` when it is in one.

## EPUB

`:export epub` writes an EPUB 3 book with the same text and look as the HTML
page. A vertical page becomes a vertical book that turns from right to left,
as a Chinese or Japanese book does, whatever language the page is in.
Formulas, figures and pictures in a line go in as pictures,
and the headings become the table of contents. The book's title is the first
heading, or the file's name.

Open it in Apple Books, Thorium or any EPUB 3 reader. How a reader sets
vertical text is up to the reader; older ones set every book horizontally.

Control characters an XML page cannot hold (a form feed, say) are left out,
so a strict reader opens the book. A picture shown more than once is in the
book once. A link to a file beside the manuscript, `[第二章](ch2.html)`, which
the book does not hold, keeps its words with the target as their tooltip,
and so does a link in any scheme but `http`, `https` and `mailto`
(`file:///…`), which a reader cannot follow from inside a book; links to
the web, mail addresses, footnotes and headings stay links. HTML typed
into the text goes into the book as XML: a tag closed in its place stays
a tag, one left open (`<span>` with no `</span>`), closing nothing, or a
block such as `<div>` typed in a line of text goes in as the words it
was typed as, and a picture written as
`<img src="a.png">` goes inside the book like any other, or leaves its
`alt` when it cannot be read. HTML's `align`, which a book's XHTML does not
have, goes in as the style it means. A heading that is only a picture is
named in the table of contents by the picture's words. The book's
language is read from its prose; code and links are not counted.

## What carries over

All three formats carry:

- headings and paragraphs; in HTML and EPUB each heading takes the anchor
  GitHub gives it, so `[第二章](#第二章)` and `[see](#hello-world)` lead
  to `# 第二章` and `## Hello, World!` (its words in small letters, a space
  as `-`, other marks left out; the same words again take `-1`, `-2`);
- `**bold**`, `*italic*` and the other inline marks, as real formatting, not as
  asterisks;
- lists, nested, numbered or not;
- block quotes;
- footnotes, numbered in the order they appear, a footnote cited twice
  linking to one note: a list at the end of the HTML page, `#footnote[…]` at
  the mark in Typst;
- pipe tables, with their column alignment and a caption, as wide as their
  header row (extra cells are dropped, as in GFM);
- pictures alone in a paragraph, as figures with a caption, and pictures in
  a line as pictures (HTML and EPUB);
- TeX formulas in Markdown, drawn as pictures in HTML and EPUB;
- GitHub alerts (`> [!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`,
  `[!CAUTION]`) and `:::` containers, as callouts (HTML and EPUB);
- front matter (`---` … `---` at the head of the file), in a frame;
- HTML blocks, a line opening with a block's tag (`<details>`, `<div>`,
  `<p align="center">`) up to the next blank line, as they were written
  (HTML and EPUB; their words in Typst);
- entities such as `&nbsp;`, `&hellip;` and `&#x4E00;`, as the
  characters they name, except in code;
- fenced code blocks, with three or more backticks or tildes as CommonMark
  reads them (closed only by the same character, at least as many), in syntax
  colours when they name a language, and code blocks indented four spaces or
  a tab (a fence written inside one is part of its code);
- links, as links, a target in angle brackets with its spaces (HTML and
  EPUB; the Typst export keeps their words);
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
files may be named at once. A file whose output would land on another file
named on the line, or on another's output (`a.md` and `a.typ` both making
`a.html`), is refused before anything is written, and the rest are
exported; use `--out` for one of them. `pdf` needs the [Typst](https://typst.app)
compiler on the PATH (`brew install typst`): a `.typ` file is compiled as it
is, with `#include` and images resolved from its own folder; a Markdown file
goes through the Typst export above first. Your config's `[export]` settings
apply, as they do to `:export`.

## Seeing it before you export

`:preview` shows the typeset result while you write, in a preview tab
beside the text: a Typst page set by tinymist, or a Markdown file set by
yumete itself. The Markdown preview draws readings by the same three
`[export] ruby_*` settings as the export. See
[The page](page.md#preview-in-a-real-typesetter-preview).

## Exporting what the preview shows

`:export-as-preview` writes the file the way its preview draws it, so what
you see is what you get.

```
:export-as-preview              chapter.md → chapter.html, book.typ → book.pdf
:export-as-preview html         a Markdown file's preview, as a web page
:export-as-preview pdf          a Markdown file's preview as long PDF pages; a Typst file's, as a PDF
:export-as-preview out/a.html   a name of your own
:export-as-preview!             write over a file that is already there
```

**A Markdown file** becomes the same HTML page `:export html` writes, with
its look taken from the Markdown preview rather than from `[export]`:

- the preview's fonts: `[editor] preview_font_family`, or `[export]
  font_family` while that is empty, then the CJK face of the
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

**As a PDF** (`:export-as-preview pdf`), a Markdown file is drawn exactly as
the preview lays it out, with the same fonts, sizes, colours, line breaks and
direction, as wide as the preview's window when one shows it, else an A4
sheet's width. Its type is text in embedded fonts, so it can be selected and
searched; formulas and images are pictures. The document is one long page,
cut into several only where a page would pass 200 inches, which many PDF
readers will not open: between blocks, or between the lines of a block longer
than that.

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
message says how many open files have them. Quitting while it typesets stops
the compiler and leaves no half-written file; a half-written file a crash left
is removed by the next export to the same PDF.

The path rules are `:export`'s: without a path the file's name with the
extension changed (the book's name for a chapter), `!` to write over an
existing file, and never over a file open in the editor. `html` on a Typst
file, `pdf` on a Markdown file, and any other word say which format the
file's preview has.

The page is a browser's, so it is as close to the preview as CSS allows, not
the same picture: lines may break a character earlier or later, punctuation
squeezing follows the browser and the font, and hanging punctuation shows
only in Safari.
