# Tables

A CSV file is text, and you can edit it as text. But a table with twelve columns
reads badly as text: the columns do not line up, and to find the fourth field of a
row you count commas. Table mode shows the same text as a grid. The file does not
change; only the way you see it and move through it does.

yumete reads four kinds of table the same way:

- **A delimited file**: `.csv`, `.tsv`, or any file whose every line splits into
  the same number of fields.
- **A Markdown pipe table**: rows written between `|` marks, with a `| --- |` row
  under the heading.
- **A delimited stretch inside a document**: a few comma- or tab-separated lines
  pasted into a chapter, or the entries of a code table.
- **A new table you make** with `:table`.

All four use the same keys. This page starts with the views, then covers moving,
editing, rows and columns, sorting, searching, checking, and converting.

## When table mode turns on

**Opening a `.csv` or `.tsv` file** opens it as a table, filling the window. You
do not have to ask.

**Opening any other file whose lines all split the same way** opens it in the
basic table view. yumete tries tab, comma, semicolon and space, and takes the
first one that appears the same number of times on every line and gives at least
two columns. The status line says what it guessed:

```
this file looks Tab-delimited, so it opens as a table; ␣t o for the source
```

If the guess is wrong, press `Space t o` once. yumete remembers that choice for
that file, so it opens as plain text next time. Press `Space t b` in that file
later to undo the choice. The list keeps the 200 most recent files.

**Starting with `--table`** reads the file as a table even when nothing would
guess it:

```sh
ye --table prices.txt
```

**A Markdown pipe table** turns on by itself when the cursor reaches one of its
rows. In Markdown, only a table that parses counts: it needs its `| --- |` row,
and it must not sit inside a code fence.

**A delimited stretch inside a document** turns on when you ask. Put the cursor on
one of its lines and run `:table-render basic`. See
[A table inside a document](#a-table-inside-a-document).

**`:table 3 4`** writes a new, empty pipe table on the line the cursor is on: three
rows (the heading counts as one) by four columns. The line must be blank. Up to
200 rows and 32 columns. You start typing in the first heading cell, and `Tab`
moves to the next.

```
| Name | Age |     |     |
| ---- | --- | --- | --- |
|      |     |     |     |
|      |     |     |     |
```

## The three views

The same table can be drawn three ways. Choose one with a key from the `Space t`
group or with `:table-render`:

| View | Key | Command | What you see |
| --- | --- | --- | --- |
| Source | `Space t o` | `:table-render off` | The file as you typed it. |
| Basic | `Space t b` | `:table-render basic` | The text, with the columns lined up. |
| Window | `Space t t` | `:table-render window` | Only the table, drawn as a grid, filling the window. |

`:table-render` with no word says which view you are in. `Space t q` leaves the
window view and returns to the view you came from. You can switch between any two
directly; you do not need to go back to the source first.

Here is one small file in each view.

```
title,author,year
Rain Notes,Lin,1998
Glass River,Okafor,2011
```

Source:

```
1  title,author,year
2  Rain Notes,Lin,1998
3  Glass River,Okafor,2011
```

Basic:

```
             1      2    3
1  title      ,author,year
2  Rain Notes ,Lin   ,1998
3  Glass River,Okafor,2011
```

Window:

```
             1      2    3
   title       author year
1 ┆Rain Notes ┆Lin   ┆1998┆
2 ┆Glass River┆Okafor┆2011┆
```

### Source

The file exactly as written. A comma is a comma and a `|` is a `|`. Lines wrap as
usual, and every key means what it means in any other text. This is the view to
use when you want to fix the punctuation of the table itself.

### Basic

The basic view is still your text, with every character visible. It only adds
things to the screen; it never hides or replaces a character you typed.

- **The columns line up.** yumete draws extra space after short cells so that
  each delimiter sits under the one above it. The spaces are only on screen; the
  file gains nothing.
- **Widths are measured in terminal columns**, not characters. A Chinese character
  takes two columns, so a column of Chinese mixed with Latin text still lines up:

  ```
  | 字 | reading | strokes |
  | -- | ------- | ------- |
  | 木 | mu      | 4       |
  | 森 | sen     | 12      |
  ```

- **A row of column numbers** sits above the heading. These are the numbers that
  the `Space t` keys count with (see [Sorting](#sorting) and
  [Searching and jumping](#searching-and-jumping)). `:table-numbers off` hides it.
- **Table rows do not wrap.** One row is one line on screen, however long.
- **`Tab` and `S-Tab` move by cell.** Every other key keeps its ordinary meaning:
  `h` `j` `k` `l` move by character, and `j` on the last row walks out into the
  paragraph below.
- **The status line** shows the row, the column number and the column name:
  `Row 7, Col 2 [author]`.

The basic view is the right place to edit a Markdown table inside a chapter, or the
source of a CSV file, when you want to see every comma.

In a Markdown file, the basic view is on by default: every pipe table on the page
is drawn lined up, whether or not the cursor is in it.

### Window

The window view gives the whole window to one table. Nothing else from the file is
shown.

- **The delimiters are drawn as rules** between the columns. You no longer see the
  commas or `|` marks, only the grid.
- **The heading is frozen** on the top line and stays there as you scroll. It is
  drawn, not stood on: the cursor starts on the first data row, and `k` on that
  row goes no further.
- **Row numbers are the table's own.** The first data row is row 1, whatever line
  of the file it is on. Every number you type in this view counts the same way.
- **Keys work on cells.** `h` `j` `k` `l` move from cell to cell, and the cell is
  the unit you copy, delete and replace. To edit characters inside a cell, press
  `Enter`. See [Moving and editing in the window](#moving-and-editing-in-the-window).
- **You stay in the table.** `gg`, `ge`, `:120` and search all stop at the first or
  last row of this table, and the status line says so. To leave, press
  `Space t q` (back to the view you came from), `Space t o` (source), or
  `Space t b` (basic).
- **`Space t ]` and `Space t [`** move to the next or previous pipe table in the
  file. The column names, numbers and widths come from that table.

A `.csv` opens straight into the window view. A Markdown table goes into it only
when you press `Space t t`.

#### Column rules

`:table-rules` sets how the window view separates the columns:

| Command | Drawn |
| --- | --- |
| `:table-rules line dash` | a dashed line `┆` (the default) |
| `:table-rules line` | a solid line `│` |
| `:table-rules line double` | a double line `║` |
| `:table-rules color` | a light background on each column, with a gap between |
| `:table-rules off` | nothing; the alignment alone separates them |
| `:table-rules` | says which one is in use |

To make the choice permanent, set it in the config file:

```toml
[editor]
table_rules = "off"
```

#### Wide cells

A column grows to fit its widest cell, up to 32 terminal columns. A longer cell is
still kept whole in the file; only its display changes. `Space t w` cycles between
three ways to draw it, and works only in the window view:

- **Wrapped** (the default): the rest of the cell continues on the lines below,
  inside its own column. A row is as tall as its tallest cell, and the row number
  appears on its first line only.

  ```
  1 ┆1  ┆short                           ┆
  2 ┆2  ┆This cell holds a rather long   ┆
    ┆   ┆sentence that goes on well past ┆
    ┆   ┆thirty-two columns of width     ┆
  ```

- **Folded**: the cell is cut at the column width, and a `>` marks the cut.

  ```
  1 ┆1  ┆short                           ┆
  2 ┆2  ┆This cell holds a rather long s>┆
  ```

- **Whole**: every column is as wide as its widest cell, up to the width of the
  window. The table scrolls sideways.

Moving onto a folded cell does not unfold it, so the layout does not jump while
you walk across the table. To read a folded cell, open the record panel
in the sidebar (`Space t I`), which wraps the whole value; or press `i` to start typing in it,
which unfolds that one cell until you press `Esc`. While you type in a folded
cell, it scrolls sideways under the cursor, and a `<` at its start shows that part
of it is out of view.

The source and basic views always draw every cell whole. `Space t w` does nothing
there.

## Moving and editing in the window

In the window view the keyboard works at two levels. At the **cell level**, the
whole cell is the unit: you move between cells and copy or replace whole cells.
**Inside a cell**, you edit characters as in any text.

| Key | What it does |
| --- | --- |
| `Enter` | go inside the current cell |
| `Esc` | come back out to the cell level |

The status line shows where you are: `CEL` at the cell level, `CEL.NOR` inside a
cell, `CEL.INS` while typing.

`Esc` at the cell level clears a count or a selection, as everywhere else. It
never leaves the table.

### At the cell level

The current cell is marked by its two side rules turning gold. There is no text
cursor, because there is no character to stand on.

| Key | What it does |
| --- | --- |
| `h` `l` | previous / next cell in the row |
| `j` `k` | same column, next / previous row |
| `0` `$`, `Home` `End` | first / last cell of the row |
| `Tab` `S-Tab` | next / previous cell, wrapping to the next or previous row |
| `C-d` `C-u` | half a page down / up, staying in the same column |
| `C-f` `C-b` | a full page down / up, staying in the same column |
| `i` | start typing at the start of the cell |
| `a` | start typing at the end of the cell |
| `c` | clear the cell into the register and start typing a new value |
| `A-c` | the same, but leave the register alone |
| `d` | clear the cell into the register; the delimiter stays |
| `A-d` | clear the cell, but leave the register alone |
| `y` | copy the cell |
| `Y` | copy the whole row, as text |
| `x` | select the whole row; press again to add the next row |
| `%` | select the whole table, heading included |
| `v` then `h` `l` | extend the selection along the row, a whole cell at a time |
| `p` `P` | put a copied row below / above this one |
| `R` | write what you copied over the cells here |
| `o` `O` | open a new row below / above and start typing in its first cell |
| `t` | the table menu, the same as `Space t` |

Letters at the cell level are commands, not text. Typing `x` does not replace the
cell with "x", as it would in a spreadsheet; `c` does that. Replacing a cell is
the commonest edit, so learn this sequence: move to the cell, `c`, type the new
value, `Esc`. One `u` undoes it.

A mouse click selects a cell. A double click goes inside it, with the cursor on
the character you clicked.

Under the vim keymap, `d`, `c` and `y` wait for a second key, as in vim: `cc`,
`dd` and `yy` act on the cell.

### Inside a cell

Inside, the cell behaves like a small document. `h` `l`, `w` `b` `e`, the
operators, and selections all mean what they mean outside a table, with the cell's edges
as the walls:

- `gg` and `ge` go to the first and last character of the cell. `0` `$`, `Home`
  `End`, and `gh` `gl` do the same.
- `w`, `b` and `e` never leave the cell, and neither do operators built on them,
  so `dw` cannot eat a delimiter.
- `h` at the first character and `l` at the last step into the next cell. `l` at
  the end of a row goes to the first cell of the next row; `h` at the start goes
  to the last character of the cell before.
- `j` and `k` step through the lines of a cell that has several (a wrapped cell,
  or one with a line break in it), and leave the cell at its last line.
- `o` and `O` open a new line inside the cell, not a new row.
- `t` is till again, as outside a table. To reach the table menu from inside, use
  `Space t`.

### Typing

While you type, the arrow keys move as `h` `j` `k` `l` do inside a cell, and:

- **`Tab`** goes to the next cell and **`S-Tab`** to the previous one. You can
  fill a whole row without ever touching a delimiter. `Tab` in the last cell of the
  table opens a new row.
- **`Backspace`** at the start of a cell stops, and says so. One more would join
  two cells.
- **`Enter`** in a CSV or TSV cell puts a line break into the cell. yumete quotes
  the field for you. In the grid the break is drawn as `␊`. In a pipe table a row
  must be one line, so `Enter` does nothing there.
- **`Esc`** returns to the level you came from: to the cell level if you pressed
  `i` there, inside the cell if you pressed `i` inside.

### Copying and putting back

A row always has the same number of cells, so the only thing you can *insert*
without changing the table's shape is a whole row. Everything else you copy is
written *over* cells that are already there.

- **`p` and `P` put rows.** Select a row with `x`, copy it with `y`, move, and
  press `p` to put it below or `P` above. If the register holds a cell rather than
  a row, `p` says so and suggests `R`.
- **`R` writes over.** A single cell goes over the current cell. A run of cells
  (copied with `v`, `l`, `y`) goes over the same number of cells from here to the
  right, delimiters kept. If the row does not have that many cells left, nothing
  changes and yumete says how many fit. A copied row goes over the current row.
- **A block from a spreadsheet** fills right and down. Excel, Numbers,
  LibreOffice and browser tables all copy rows as tab-separated text. Paste it
  with your terminal's paste, or put it in a register and press `R`, and it fills
  from the current cell. A pipe table grows extra rows and columns as needed. A
  CSV's columns are fixed, so a block that does not fit is refused.

## Editing in the basic view

In the basic view the table is part of the page, and most keys are the page's
own. A few things help with cells:

- `Tab` and `S-Tab` move by cell, in Normal mode and while typing.
- `mi l` selects the current cell, so `mi l c` replaces it. See
  [Match mode](../reference/match.md#cells-and-changes).
- The `Space t` group works the same as in the window view.
- A Markdown table keeps its lined-up look while you type, because the padding is
  drawn, not written.

## Rows and columns

The `Space t` group holds the keys that change a table's structure. Press
`Space t` and pause: the menu lists only the keys that work in the table you are
in.

| Key | What it does |
| --- | --- |
| `Space t r` | add a row below |
| `Space t R` | add a row above |
| `Space t d` | delete this row |
| `Space t j` | move this row down |
| `Space t k` | move this row up |
| `Space t c` | add a column to the right |
| `Space t C` | add a column to the left |
| `Space t D` | delete this column |
| `Space t h` | move this column left |
| `Space t l` | move this column right |
| `Space t y` | copy this whole column |
| `Space t p` | paste a copied column over this one |
| `Space t <` `Space t =` `Space t >` | align this column left, centre or right |
| `Space t F` | line the table up in the file |
| `Space t H` | switch whether the first row is a heading |
| `Space t e` | open this table's schema |

Not every table has every key:

| Table | Missing keys | Why |
| --- | --- | --- |
| Markdown pipe table | `Space t H`, `Space t e` | The rule row under the heading already says which row is the heading. |
| CSV, TSV and other table files | `Space t c` `C` `D` `h` `l`, alignment, `Space t F` | The columns belong to the file (and to its schema), so they cannot be added, deleted or moved here. |
| A stretch inside a document | all that change rows or columns | See [A table inside a document](#a-table-inside-a-document). |

`o` and `O` at the cell level also add a row, and drop you straight into its first
cell.

The heading row cannot be deleted. If you delete every data row, the table stays,
with only its heading; `o`, `O`, `p` and `Space t r` add a row again.

### Headings

A table file normally has a heading row. A code table often does not: it is data
from the first line. `Space t H` (or `:table-header off`) makes the first row an
ordinary data row, and the columns are named by number instead. Press it again (or
`:table-header on`) to change back.

This is also how you edit the column names of a CSV without a schema: turn the
heading off, edit row 1 like any other row, and turn it back on.

### Lining up a Markdown table in the file

The basic view draws a Markdown table lined up on screen, but the file keeps the
spaces you typed. `Space t F` writes the alignment into the file, so the table also
looks right on GitHub or in another editor. The widths are measured in terminal
columns, so a column of Chinese lines up too. If the table has no `| --- |` row
yet, yumete adds one.

yumete does not do this on its own. Editing one cell changes only that cell, so a
loose table stays loose. A table that is already lined up in the file stays lined
up after an edit to one of its cells.

`Space t <`, `Space t =` and `Space t >` change the column's alignment by
rewriting its part of the `| --- |` row (`:---`, `:---:`, `---:`). That row is
drawn, not edited: `c`, `i` and `a` are blocked on it.

## Sorting

A sort always names its column, and runs only when you press `s` or `S`:

| Keys | Sorts by |
| --- | --- |
| `Space t 1s` | column 1, ascending |
| `Space t 1S` | column 1, descending |
| `Space t 0s` | the column the cursor is in (`0` means "this column") |
| `Space t 1,5,9s` | columns 1, 5 and 9, ascending |
| `Space t 1a2d4s` | column 1 ascending, then 2 descending, then 4 ascending |

In the last form, `a` and `d` only note a column and its direction; the final `s`
(ascending) or `S` (descending) names the last column and starts the sort. The
status line shows what you have typed so far, and `Esc` drops it. A bare
`Space t s` does nothing: sorting a large table takes time, so it is never one
key away.

Numbers sort as numbers (`9`, `40`, `200`), and everything else by Unicode code
point. The heading row stays on top. `u` undoes a sort.

The same thing as a command:

```
:table-sort 1 a 2 d
```

Here are the books sorted with `Space t 3s` (by year):

```
   title       author year pages
1 ┆Paper Moon ┆Sato  ┆1975┆96   ┆
2 ┆Rain Notes ┆Lin   ┆1998┆212  ┆
3 ┆Salt Road  ┆Ruiz  ┆2003┆458  ┆
4 ┆Glass River┆Okafor┆2011┆340  ┆
```

## Searching and jumping

`/` and `?` search the text line by line, as everywhere. A table can also be
searched **down its columns**, which is the order you want when you ask "where
else does this value appear?":

| Keys | What it does |
| --- | --- |
| `Space t /` | search down the columns for what the cursor is on |
| `Space t ?` | the same, showing the results in the second editor region |
| `Space t 2/` | search column 2 only |
| `Space t 2-10/` | search columns 2 to 10 |
| `n` `N` | next / previous hit |

At the cell level the search looks for the whole cell; inside a cell, for the one
character under the cursor. The first hit is always the first one in the first
column searched, wherever you started, so the same value gives the same route every
time. Each hit is selected, the end wraps to the start, and two hits in one cell
count as two.

If the table's schema names its link columns (see [Schemas](#schemas)), the search
covers only those. Otherwise it covers every column, and says so.

`n` and `N` walk the last search, whichever kind it was. A new `/` takes them back.

`:table-find` gives both directions as a command:

```
:table-find row Lin        line by line, like /
:table-find column Lin     down the columns, like Space t ? (in the second region)
:table-find Lin            no direction: line by line
```

The pattern is a regular expression.

### Going to a cell

| Keys | Goes to |
| --- | --- |
| `Space t 20g` | row 20, same column |
| `Space t 20,3g` | row 20, column 3 |

In the window view, row numbers are the table's own. In the other views they are
the file's line numbers. Either way the cursor stays inside the table.

A `-` means a range and a `,` means a list or a pair: `Space t 2-10/` is columns 2
to 10, `Space t 1,5,9s` is three columns, `Space t 20,3g` is a row and a column.

### Going to a row by name

If a schema names a key column, `:table-jump` goes to the row with that name:

```
:table-jump Okafor
```

`C-o` comes back.

## A table inside a document

Sometimes only a few lines of a file are a table: a list of prices pasted into a
chapter, the entries of a code table under a heading, a LaTeX `tabular`. Put the
cursor on one of those lines and run `:table-render basic` (or press
`Space t b`).

```
Prices from the market:

apple,3,red
pear,5,green
plum,2,purple

More text.
```

yumete finds the table like this:

- **The delimiter is the one under the cursor**, if it is one of tab, comma,
  semicolon or `&`. If you selected some lines first, it is the character that
  appears the same number of times on each. Otherwise it tries those four in that
  order.
- **The table runs up and down from the cursor** until a line without that
  delimiter. A blank line ends it, and so does a heading.
- **The rows must agree.** Two or three lines must all have the same number of
  fields. From four lines up, two thirds agreeing is enough, and the table is as
  wide as its widest line. If they do not agree, yumete does not draw a table.
- **The first row is data.** The columns are named 1, 2, 3.

Such a table is somebody else's data in the middle of your text, so yumete reads
it but does not restructure it. You can move by cell, search its columns, sort it,
go to a cell, and copy or paste a column (`Space t p` stops at the table's last
line). The keys that add, delete or move rows and columns are not offered. To do
those, convert it into a real table first with `:convert-table pipe`.

When the cursor walks out of the stretch, the table view ends. Run the command
again to see it again.

## Checking a table

`:table-check` looks over the whole table and lists what is wrong:

- **rows with the wrong number of fields**;
- **a quoted field that does not close on the same line**;
- **a row name used twice**, when a schema names a key column;
- **a name with no row of its own**, when a schema names link columns. Structure
  marks such as `⿰` do not count.

The list opens in a new buffer, sorted by line. `gf` on an entry goes to that row.
If nothing is wrong, yumete says so in one line and opens nothing.

```
name,code,note
ant,a1,small
bee,b2
ant,a3,again
```

```
3: 2 columns here, 3 expected
```

In a file with several tables, `:table-check` checks the one the cursor is in. The
`| --- |` row is neither checked nor counted.

## What the editor will not let you break

A delimited file is read by counting delimiters. One stray comma turns a
three-column row into four, and every column after it shifts. So yumete keeps one
rule: **a row always splits into the same number of cells.** Every way of changing
text obeys it: typing, pasting, `R`, the input method, `:s`, and deleting.

- **A delimiter you type into a CSV cell is quoted for you.** Type `Smith, John`
  into a cell and the file gets `"Smith, John"`. Remove the comma and the quotes go.
  You never type or see the quotes; they are the file format's, not yours. A field
  can also hold a quote (written doubled in the file) or a line break.
- **A `|` cannot be typed into a pipe-table cell.** Write `\|` instead, the one
  escape Markdown tables have: `a\|b` is one cell.
- **Pasting text that holds the delimiter is refused**, all of it, with the row and
  column it would have landed in. Nothing changes, so there is nothing to undo.
  Pasting into a pipe table escapes `|` as `\|` instead.
- **`:s` checks every row it touches.** A substitution that only changes what is
  inside cells runs as usual. One that would change the number of cells or rows is
  refused with the line number:

  ```
  row 2 would go from 4 cells to 5 — add the t flag to mean it (`:%s/…/…/gt`)
  ```

  Add the `t` flag when you mean it. This holds in every view, the source view
  included.
- **`Backspace` will not join two cells**, and `d` on an empty cell will not delete
  the delimiter beside it.
- **A table is always horizontal.** `:vertical` is refused while a file is in the
  window view, and `--table` overrides `--vertical`. A pipe table inside a vertical
  page is not affected.

What yumete does *not* do is refuse a broken table. A row with the wrong number of
fields still opens; it is marked, and its missing cells are drawn empty, so you can
fix it in table mode. `:table-check` lists them all.

## Converting and exporting

### Making a pipe table from delimited text

Select some comma-, semicolon- or tab-separated lines and run
`:convert-table pipe`. With no selection, it takes the stretch around the cursor,
up to the nearest blank line on each side. The first line becomes the heading, the
`| --- |` row is added, the columns are lined up, and you are in the table.

```
fruit,price,colour
apple,3,red
pear,5,green
```

becomes

```
| fruit | price | colour |
| ----- | ----- | ------ |
| apple | 3     | red    |
| pear  | 5     | green  |
```

yumete guesses the delimiter from tab, comma and semicolon: whichever appears the
same number of times on every line. It needs at least two lines to guess. If none
fits, nothing changes and the status line asks you to name it:

```
:convert-table , pipe      the source uses commas
:convert-table tab pipe    the source uses tabs
:convert-table ; pipe      any single character works
:convert-table space pipe  spaces
```

`tab` or `\t`, `space` or `\s`, `comma` and `semicolon` name the characters that
are hard to type on the command line. yumete never guesses a space by itself,
because a space also joins the words of a sentence; you can still name one.

The guess only checks that every line has the same count. Two lines of ordinary text that
each happen to contain one comma will become a two-column table. `u` undoes it.

### Taking a table apart

The other direction turns the pipe table under the cursor into delimited text:

```
:convert-table csv
:convert-table tsv
:convert-table ;
```

The padding goes, and `\|` becomes `|` again. The same command converts between
two delimited forms: `:convert-table tsv` on a CSV makes it tab-separated.
`:convert-table pipe` on something that is already a pipe table is refused.

If a cell already contains the target delimiter, yumete stops and names the row
and column. It does not add quotes for you; choose another delimiter or change
that cell first.

`Space t x` is the same as a menu: `Space t x p`, `Space t x c` and `Space t x t`
convert to pipe, CSV and TSV. The capital letters (`Space t x P`, `C`, `T`) paste
the clipboard as a table in that format, the same as `:paste-table pipe`,
`:paste-table csv` and `:paste-table tsv`.

### Exporting a copy

`:convert-table` changes your file. To leave the file alone and write the table
somewhere else, use `:export`:

```
:export csv
:export tsv
:export csv prices.csv
```

It writes the table under the cursor. Without a name, the file is named after the
document, with the new extension. It works on a pipe table and on a whole table
file, so reading a `.csv` and writing a `.tsv` is one command. The copy keeps the
source file's line endings and byte-order mark. An existing file is not overwritten
unless you add `!` (`:export! csv`). For HTML and Typst export of the whole
document, see [Export](export.md).

## The record panel

A wide row is hard to read across. The record panel shows the current row as a
list, one field per line:

```
╭─Record──2──────────────╮
│                        │
│  1 title  Glass River  │
│  2 author Okafor       │
│  3 year   2011         │
│  4 pages  340          │
╰────────────────────────╯
```

| Key | Opens it |
| --- | --- |
| `Space t i` | floating beside the cursor |
| `Space t I` | in the sidebar |

`Space i` and `Space I` do the same. Press the key again to close it. The panel
never opens by itself: it shows the row you asked about, and when you move to
another row it empties until you ask again.

- **Every column is listed, empty ones too**, with its number. Often the question
  you opened it for is "is this field empty?".
- **In the sidebar, a long field wraps** instead of being cut, so this is the place
  to read a cell that is folded in the grid. The floating panel cuts it short
  with `…`.
- **A computed field** from a schema has a `*` after its name, as a reminder that
  the file has no such column.
- **In a link column** (see [Schemas](#schemas)), the panel lists at the top each
  name the cell refers to, with the row where that name is defined. A name with no
  row is marked `—`.

The panel works in every kind of table, including code tables with no heading,
where the fields are named by number.

## Schemas

A schema is a small TOML file that tells yumete how to read one table file: the
delimiter, which columns to show and under what names, which column names a row,
and which columns refer to other rows. You do not need one; without it the file's
own first line names the columns. A schema helps with a large table you work on
often.

yumete looks for schemas in `.yumete/tables/*.toml`, starting in the folder the data
file is in and going up. A file that a schema names opens as a table automatically.

```toml
[table]
file = ["parts.csv"]      # the data files this schema is for
key = "char"              # the column that names each row
delimiter = ","
header = true             # whether the first line is the heading

[[table.column]]
name = "char"
label = "Char"            # shown in the heading instead of the name

[[table.column]]
name = "parts"

[[table.column]]
name = "notes"
hidden = true             # read and written, but not drawn or stopped on

[[table.detail]]          # shown only in the record panel, never written
name = "codepoint"
compute = "codepoint(char)"

[table.link]              # the cells of these columns name other rows
from = ["parts"]
to = "char"
```

A `[[table.detail]]` field can use `codepoint(column)`, `block(column)` (the
Unicode block) or `range_label(column, name)`, which looks the character up in a
`[ranges.name]` table of your own:

```toml
[ranges.blocks]
"Extension B" = [0x20000, 0x2A6DF]
```

What a schema adds:

- `key` makes `:table-jump` work and lets `:table-check` find repeated names.
- `[table.link]` limits `Space t /` to the link columns, lets `:table-check` find
  names with no row, and fills the top of the record panel.
- `hidden` columns stop taking space.

**`Space t e`** (or `:table-schema`) opens the schema of the current table file in
the second editor region. If there is none, yumete writes one first, into `.yumete/tables/`
beside the data, describing exactly what you see now: the delimiter it guessed, the
column names from the first line, and the heading setting. Opening and saving it
unchanged changes nothing. Edit it, save, then press `Space t o` and `Space t b`
(or run `:table-render off` and `:table-render basic`) to read the table the new
way. An existing schema file is never overwritten.

A schema with an error is not ignored silently: yumete reports the file and what is
wrong with it. Schemas are for whole table files. A pipe table or a stretch inside a
document has none.

## Commands

| Command | What it does |
| --- | --- |
| `:table-render off\|basic\|window` | choose the view; with no word, say which one |
| `:table <rows> <columns>` | write a new pipe table on a blank line |
| `:table-rules <style>` | how the window view separates columns |
| `:table-numbers on\|off` | the row of column numbers |
| `:table-header on\|off` | whether the first row is a heading |
| `:table-sort 1 a 2 d` | sort by columns and directions |
| `:table-find row\|column <pattern>` | search across rows or down columns |
| `:table-jump <name>` | go to the row with this name |
| `:table-check` | list problems in the table |
| `:table-detail on\|off` | the record panel |
| `:table-schema` | open or write this table's schema |
| `:convert-table [<from>] <to>` | rewrite the table in another format |
| `:paste-table [<from>] <to>` | paste the clipboard as a table |
| `:export csv\|tsv [<file>]` | write the table to another file |

Every `Space t` key is listed on the [Keymap](../reference/keymap.md) page, and
every command on the [Commands](../reference/commands.md) page.
