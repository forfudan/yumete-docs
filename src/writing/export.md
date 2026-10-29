# Export

Vertical layout, hung punctuation and ruby exist only on screen. `:export`
writes them into a file you can open, print or hand to a typesetter.

```
:export html               chapter.md → chapter.html
:export typst              chapter.md → chapter.typ
:export html out/ch1.html  a name of your own
:export! html              write over a file that is already there
:export csv                the table under the cursor, comma separated
:export tsv                the table under the cursor, tab separated
```

With no path, the export takes the file's name and changes the extension. An
existing file is not overwritten unless you add `!`, and a file open in the
editor is never written over. A new buffer needs a path.

## HTML

`:export html` writes one self-contained page. Vertical text becomes
`writing-mode: vertical-rl`, hung punctuation becomes `hanging-punctuation`,
and ruby becomes `<ruby>`.

The page prints as it is. It carries print styles for the paper size and
margins, starts each chapter on a new page, and keeps a heading from being left
alone at the foot of a page. For vertical text the type size is worked out from
the column: the paper's height divided by how many characters go in a column.
Set both before you print:

```toml
[editor]
zong_length = 30   # characters per column; 0 follows the window

[export]
page = "A5"        # A4, A5, A6, B5, B6, letter, 16k, 32k, d32k, or "130x184" in mm
```

`zong_length` left at 0 means however tall your window happens to be. See
[Vertical layout](vertical.md).

There are no page numbers or running heads. Browsers do not support the CSS
that would place them, so use the print dialog's header and footer.

## Typst

`:export typst` writes Typst source, always horizontal, because Typst has no
vertical layout. The file says so at the top. Ruby becomes
`#ruby(base, reading)`, with a definition at the top of the file that you can
change.

## What carries over

Both formats carry:

- headings and paragraphs;
- `**bold**`, `*italic*` and the other inline marks, as real formatting, not as
  asterisks;
- lists, nested, numbered or not;
- block quotes;
- footnotes, numbered in the order they appear: a list at the end of the HTML
  page, `#footnote[…]` at the mark in Typst;
- pipe tables, with their column alignment;
- rules (`---`, `* * *`);
- ruby.

Anything else comes out as text. Annotations to yourself, written
`%%like this%%` or as HTML comments, are left out.

## Language and line breaks

The page's language comes from the text. A file with more Latin words than
Chinese characters is set as English: `lang="en"`, a Latin serif, and
paragraphs spaced apart instead of indented. Kana make it Japanese. Otherwise it
is set as Chinese, with a first-line indent.

A line break inside a paragraph is kept between lines of Chinese, where it is
usually meant. Between two lines of Latin text it becomes a space, as CommonMark
reads it, so a hard-wrapped English paragraph comes out as one paragraph.

## Tables as CSV or TSV

`:export csv` and `:export tsv` write only the table under the cursor, not the
whole document, and leave the buffer as it is. See [Tables](tables.md).

## Seeing it before you export

`:view-preview` shows the typeset result in a browser while you write: a live
Typst preview, or an HTML export of a Markdown file. See
[The page](page.md#preview-in-a-real-typesetter-view-preview).
