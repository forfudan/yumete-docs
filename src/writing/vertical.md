# Vertical layout

yumete can set a page vertically, the way Chinese and Japanese books are set
(縱書): characters run from top to bottom, and each new column stands to the
left of the one before. It is a way of looking at the file. The file on disk
stays an ordinary text file, and `:w` writes exactly what you typed.

A terminal cell is about twice as tall as it is wide, so one full-width
character in two cells is a square. Stack those squares and you get a column
that reads like a printed page.

## Turning the page

| To | Type |
| --- | --- |
| set this page vertically | `:vertical` |
| set it across again | `:horizontal` |
| open a file vertically | `ye --vertical file.md` |
| open it across, whatever the config says | `ye --horizontal file.md` |
| make vertical the default | `layout = "vertical"` under `[editor]` |

Two kinds of file are always set across:

- **Program files.** Open a `.rs` or `.py` and the page stays horizontal.
  Indentation is part of the syntax there, and line numbers and diagnostics
  need one line to a row. `:vertical` says so on the status line and changes
  nothing else: switch back to your manuscript and it is still vertical.
- **Tables.** A file opened with `--table` is a grid, and a grid is always
  horizontal.

On the status line and in messages, a column is called a **縱** (*zong*). Here
"line" and "column" each have two meanings, so the column gets a name of its
own. A paragraph is one line of the file. A long paragraph wraps into as many
columns as it needs and runs on from the foot of one column to the head of
the next.

```text
   12  他  起那
   章  在  了年
   ︒1997  大冬
       年  雪天
       寫  ︒︐
       了    山
       第    下
```

Two paragraphs with an empty line between them, each wrapping into two
columns. `1997` is set across in one cell (see
[Half-width characters](#half-width-characters)).

## How long a column is

By default a column is as long as the window is tall. To set your own length:

```text
:view-wrap-vertical 24      24 characters to a column
:view-wrap-vertical 0       as long as the window again
:view-wrap-vertical         say what it is now
```

The length can be 8 to 64; a smaller number is raised to 8. The setting is
`zong_length` under `[editor]` (`0` follows the window). A column never runs
past the bottom of the window, whatever number you give. `:view-wrap` is the
horizontal measure and does nothing to a vertical page.

Two more settings shape the columns:

- `zong_gap` under `[editor]`: half-width cells of white space between one
  column and the next, `0` to `4`. The default is `0`.
- `:view-pages-vertical 2` cuts the window into two pages, one above the
  other. You read the top page right to left, then the bottom page right to
  left. It takes `1` to `4`, and `1` is one page. The setting is
  `pages_vertical` under `[editor]`. On a horizontal page the number waits
  until you turn the page.

## Moving

The page has turned ninety degrees, and by default `h` `j` `k` `l` turn with
it. Each key goes where it points:

| Key | Vertical page |
| --- | --- |
| `j` `k` | down / up the column |
| `h` | to the next column, on the left |
| `l` | to the previous column, on the right |
| `↓` `↑` `←` `→` | the same as `j` `k` `h` `l` |
| `gh` `gl` | start / end of the paragraph (`0` `$` under the vim keymap) |
| `gj` `gk` | next / previous paragraph; under the vim keymap, next / previous column |
| `C-d` `C-u` | half a page onward / back, across the columns |
| `C-f` `C-b` | a whole page |

`j` at the foot of a column carries on at the head of the next one, so you can
walk a whole paragraph with one key.

The mouse wheel turns the page sideways, three columns a notch. `:wheel 5`
changes how many.

### Keys that follow the text instead

```text
:vertical-keys logical
:vertical-keys visual       the default
:vertical-keys              switch to the other one
```

With `logical`, the four letters mean what they mean on a horizontal page:
`h` and `l` are a character back and a character on, `j` and `k` are the next
and previous line. A line here is a column, so `j` steps to the column on the
left. A count or an operator then means the same thing in both layouts: `3j`
is three lines and `d2l` is two characters, whichever way the page points.
Choose this if you record macros or switch layouts often. The setting is
`vertical_keys` under `[editor]`.

The setting changes only those four letters:

- **The arrow keys always point.** `↓` is one character down the column and
  `←` is the column on the left, under either setting.
- **Key bindings you write mean the logical keys.** `"x" = "@dl"` in
  `[keys.normal]` deletes one character under either setting. Only the keys
  your own hand presses are turned.
- `gh` `gl` `gj` `gk` do not change. A paragraph and its two ends do not point
  anywhere.

Under the vim keymap, whether `h` and `l` cross the end of a paragraph follows
`which_wrap`, as it does in vim.

### Where the cursor is

The status line reads `Zong 55, Heng 11, Chr 20` on a vertical page. These are
the horizontal `Ln`, `Col` and `Chr` turned on their side:

| Field | Means | Across the page it is |
| --- | --- | --- |
| Zong | the paragraph number, the same for every column it wraps into | `Ln` |
| Heng | how many cells down the paragraph | `Col` |
| Chr | how many characters down the paragraph | `Chr` |

Heng and Chr differ when several half-width characters share one cell (see
[Half-width characters](#half-width-characters)). In `26年`, 年 is the
third character but stands in the second cell. When the status line is
crowded, Chr is the part left out.

### Paragraph numbers

Each paragraph's number stands above its first column, two digits to a row, so
`1280` takes two rows. Two numbers side by side could run together, so every
other number is a step dimmer. Odd and even follow the paragraph number, so the
pattern does not crawl as you scroll. The number of the paragraph the cursor is
in has the theme's accent colour. A `~` marks the empty line at the end of the
file. `:view-numbers-fill on` gives the number band a ground of its own.

## What the page does on its own

### Punctuation turns

Punctuation is drawn in its vertical form:

| In the file | On the page |
| --- | --- |
| `。` `，` `、` | `︒` `︐` `︑` |
| `：` `；` `！` `？` | `︓` `︔` `︕` `︖` |
| `「」` `『』` | `﹁﹂` `﹃﹄` |
| `（）` `《》` `【】` | `︵︶` `︽︾` `︻︼` |
| `——` `……` | `︱︱` `︙︙` |

Only the screen changes. Copying, searching and saving all see the original
characters.

The vertical forms live at U+FE10–FE48. Fonts with CJK coverage have them:
Source Han and Noto CJK, Sarasa Gothic, LXGW WenKai Mono. A font with only Latin
glyphs shows boxes instead.

### Line breaking

A column does not begin with a mark that closes something (`。` `，` `、` `」`
`）` and the like), and does not end with a mark that opens something (`「`
`（`). When a break would fall there, the character moves to the next column
with its neighbour. A two-cell mark such as `——` or `……` is never split
between two columns. The horizontal page follows the same rules.

### Half-width characters

Latin letters and digits stand one to a row, against the right side of the
cell, so they line up with the right edge of the Chinese characters.

A short run of them is set across inside one cell instead, so a year reads as
one number and not as a stack of digits. This is tatechuyoko (縱中橫):

```toml
[editor]
tatechuyoko = 4    # 0 is off; 2 to 8 is the longest run set across
```

The default is `4`, which covers years (`1997`) and chapter numbers
(`第12章`).

- **A run is set across whole, or not at all.** Half of `1997` in one cell and
  half in the next would read as `19` and `97`.
- **A run of 2 fits the cell exactly**, so the grid is not disturbed. This is
  how Japanese books set two-digit numbers.
- **A run of 3 or more is wider than the cell.** It borrows the gap to its
  left, and only that column moves over. A few years and acronyms on a page
  cost little; if a page is full of long runs, set it back to `2`.
- **A run longer than the setting** is stacked one character to a row.

The cursor still moves one character at a time. Press `j` on `1997` and Heng
and Chr move four times while the cell stays boxed whole.

### Paper ticks

```toml
[editor]
paper_ticks = 10
```

This puts a faint tick in the margin every ten characters, as on squared
manuscript paper, so you can judge length at a glance. It is off by default
(`0`). Turning it on gives every column a margin, so the whole page shifts one
cell to the left. A reading or a hung mark takes the cell before a tick does.

## The margin

One cell to the right of each column is the **margin**. Readings, hung
punctuation, emphasis dots, 平仄 marks and paper ticks are drawn there.
`:view-margin` decides when a column keeps that cell; see
[The page](page.md#the-margin-view-margin) for its values, and
[Ruby and annotations](ruby.md) for what goes in it.

## Hanging punctuation

In old books, `。，、？！：；「」` do not take a square of their own. They hang
in the margin beside the character they belong to, and the text runs on
unbroken. A page of dialogue then stops looking half empty.

```text
:view-hanging on
:view-hanging off
:view-hanging toggle
:view-hanging            say whether it is on
```

The setting is `hanging_punctuation = true` under `[editor]`. It needs a
vertical page and a margin. If either is missing, the command says so; write
`:view-hanging! on` to turn them on with it.

```text
   off      on
   起那     了 那
   了年     大 年
   大冬     雪｡冬
   雪天        天,
   ︒︐        山
     山        下
     下        起
```

The hung marks are half-width, because the margin is one cell wide:

| Mark | Hangs as |
| --- | --- |
| `。` `、` `「」` | `｡` `､` `｢｣` |
| `，` `？` `！` `：` `；` `（）` | `,` `?` `!` `:` `;` `()` |

A full-width mark in that cell would spill over the column to its right.

Some marks always keep their square:

- `《》` `【】` `『』` `〔〕` have no half-width form.
- `——` and `……` would break in two.
- A mark at the start of a paragraph has nothing to hang on.
- A mark whose character already has something in its margin.

An opening bracket hangs beside the character it opens onto. Every other mark
hangs beside the character before it.

**Two marks in a row do not hang.** `。」` and `、」` squeeze together into one
square of the text, `｡｣`, half a cell each; print sets them the same way. `？」`
and `！」` have no true half-width form, so each of the two takes its own
square at full size.

When a reading and a hung mark want the same cell, the mark wins and the
reading moves up to the rows above its character.

## One sentence to a column

When you proofread, you read one sentence at a time.

```text
:view-sentence on       one sentence to a column
:view-sentence off      full columns again
```

Every sentence then starts at the head of a new column. A sentence ends at
`。` `！` `？` or `…`, and a closing quote after it goes with it: `「你回來了。」`
is one sentence, and the `」` is not pushed onto the next column. A sentence
longer than a column still wraps into the next one; only the next sentence
always starts fresh.

```text
   我他﹁
   點問你
   頭︒回
   ︒  來
       了
       ︒
       ﹂
```

The breaks are the same ones the sentence motions jump between (`H` and `L`,
or `(` and `)` under the vim keymap), so the head of every column is a place
the cursor can jump to.

Nothing in the file changes. It needs a vertical page; `:view-sentence! on`
turns that on too.

## See also

- [Ruby and annotations](ruby.md): readings, emphasis dots and 平仄, all drawn
  in the margin.
- [CJK motions](cjk.md): moving by word, clause and sentence.
- [Settings](../reference/settings.md) for every `[editor]` setting named here.
