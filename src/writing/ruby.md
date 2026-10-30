# Ruby and annotations

This page covers four things yumete draws beside the text:

- **readings** (ruby): pinyin, bopomofo or kana over or beside a character;
- **emphasis dots** (着重號) beside emphasised characters on a vertical page;
- **平仄 marks** for writing classical verse;
- **punctuation hints**: the full-width mark a half-width one should have been.

Only readings are stored in the file, as markup. The other three are views and
never change a byte.

Readings and 平仄 marks are drawn in the margin: the cell to the right of each
column on a vertical page, the row above the line on a horizontal one. Emphasis
dots go in the margin too, but only on a vertical page. Punctuation hints are
drawn in the text, beside the mark they correct. See
[The page](page.md#the-margin-view-margin) for when the margin is kept.

## Writing a reading

A reading is written into the file as markup. yumete reads two kinds. HTML
ruby, for Markdown, HTML and plain text:

```html
<ruby>漢<rt>hàn</rt></ruby>
```

and Typst's `ruby` call, for Typst:

```typst
#ruby("漢", "hàn")
```

A browser shows the HTML form as ruby, and Typst's compiler typesets the Typst
form, so the file stays useful outside yumete. Both kinds are read in every
file, and one file may mix them.

One reading can cover a whole word, or each character can have its own:

```html
<ruby>漢字<rt>hàn zì</rt></ruby>
<ruby>漢<rt>hàn</rt></ruby><ruby>字<rt>zì</rt></ruby>
```

The second form, one group per character, is how Chinese ruby is usually set.

## How readings are shown

```text
:ruby-render off        the markup is plain text
:ruby-render basic      the readings are known; the markup stays on the page
:ruby-render full       the readings are laid out and the markup is hidden
:ruby-render            say which one is on
```

The default is `basic`. The markup stays where you typed it, but yumete knows
what is a reading: the word count, for example, counts 漢字 as two characters
and the pinyin as nothing. `off` treats every tag as text.

With `full`, the readings are drawn beside their characters and the tags are
hidden. Move the cursor into a group and its whole source comes back for you
to edit, as with any other Markdown mark. To start in `full`, set
`show_ruby = true` under `[editor]`. `:render full` (see [The page](page.md))
lays out readings along with all the other markup.

To stop reading one kind of markup, `:ruby-html off` or `:ruby-typst off`.
`:ruby-html on` or `:ruby-typst on` reads it again and lays it out. With no
word after it, either command says which kinds are being read. Both kinds are
read from the start.

### On a horizontal page

A reading sits on the row above, over the character it belongs to. Only a line
that has a reading gets the extra row, so one annotated word does not
double-space the whole chapter.

A reading wider than its characters runs over, and the next reading is pushed
to the right:

```text
   ㄩㄥˇ ㄏㄜˊ
   住在永和的人。
```

The characters themselves are not spread apart, because that would shove the
rest of the line along. And no reading is dropped: a reading a cell out of
place is one you can see.

### On a vertical page

A reading stands in the margin to the right of its column, and the characters
are spaced out down the column to match its length. Two readings can never
collide this way.

```text
   寫
     h
   漢à
     n
   字z
     ì
   給
```

The margin is one cell wide for pinyin. If any reading on the page is
full-width (bopomofo, kana), the margin is two cells wide for the whole page,
so the columns stay in line. Pinyin with a tone mark also takes two cells when
`ambiguous_width` is `"wide"`, because that is how the terminal draws it.

When a hung punctuation mark wants the same cell as a reading, the mark wins
and the reading moves up into the rows above its character (see
[Hanging punctuation](vertical.md#hanging-punctuation)).

## Editing a reading: `:ruby`

`:ruby` opens the command line, below the status line, for the reading alone:

- **On a character that has a reading**, the line holds that reading. Change
  it and press `Enter`.
- **With characters selected**, the line starts empty. Type the reading and
  press `Enter`.
- **An empty line removes the reading**, markup and all. So Backspace on an
  empty line does not close it, as it would on the search line. Press `Esc` to
  leave without changing anything.
- **The input method works here**, so you can type kana or bopomofo.

To give each character its own reading, split the reading with `|`, one part
per character: `hàn|zì` on 漢字 writes two groups, while `hàn zì` writes one
reading for the word.

`:ruby` has no key of its own. Its action name is `ruby`, so you can bind it to
one; see [Key remapping](../guide/remapping.md).

## Changing the markup: `:ruby-format`

```text
:ruby-format html       rewrite every reading in the file as HTML
:ruby-format typst      rewrite every reading as Typst
```

Fenced code blocks and the front matter at the top of the file are left as
they are. A book about readings is full of markup examples, and those must not
be rewritten.

## Readings written for you: `:ruby-auto`

```text
:ruby-auto          every word in the selection, or in the file
:ruby-auto-rare     only words with a rare character in them
```

`:ruby-auto` goes through the selection word by word, or the whole file when
nothing is selected, and writes in every reading it can find. It writes Typst
markup in a `.typ` file and HTML everywhere else, one group per character. The
status line says how many words it annotated, and one `u` takes them all back.

It needs Yume's 拆分表, the table `:yume-scheme` loads (see
[The input method](ime.md)). Without it, the command says so and does nothing.

**It reads by word, not by character.** 了 is `le` in 為了 and `liǎo` in 了解.
yumete looks the whole word up, so a character with several readings gets the
one its word uses. A word it cannot find is left as it was; nothing is guessed.

**Readings that differ only in tone are not told apart.** The word table has
no tones, so 為 (`wéi` in 認為, `wèi` in 為了) always gets the more common
reading. 難, 好, 教 and 中 are the same. Check those by hand. Readings spelled
differently, such as 了, 行, 和 and 長, are settled correctly.

**Readings already in the file are left alone**, so a reading you corrected by
hand is never overwritten.

### Only the rare characters

A novel with a reading on every character reads like a textbook. Usually you
want readings only where a reader would stop, and that is `:ruby-auto-rare`.

It annotates a word only if one of its characters is in neither the mainland
通用規範漢字表 nor the traditional counterpart of that list. A character either
of them has is not rare. When a word has a rare character, the whole word gets readings,
not only that character.

## Emphasis dots

Chinese does not slant its characters for emphasis. It puts a dot beside every
emphasised character (着重號), and on a vertical page the dot goes to the right.
So on a vertical page, yumete draws `*這樣*` as emphasis dots:

```text
   只
   是
   一·
   個·
   詞·
   而
   已
```

There is no new markup: `*…*` is already emphasis, and dots are what emphasis
looks like in Chinese. `**…**` gets no dots; bold is a different weight.

The dots go in the margin, and a column with emphasis keeps a margin for them.
They come last: if a reading, a hung mark or a 平仄 mark wants the cell, the dot
gives way. Nothing is drawn under `:view-margin never` or `:render off`; with
`:render off`, `*` is just an asterisk. A horizontal page draws no dots.

## 平仄: `:view-meter`

When you write classical verse or fill in a 詞 pattern, you check 平仄 one
character at a time. `:view-meter` marks it for you, in the notation 詞譜 use:

```text
   春○
   眠○
   不●
   覺○
   曉▲
```

```text
:view-meter on
:view-meter off
:view-meter toggle
:view-meter             say whether it is on
```

| Mark | Means |
| --- | --- |
| `○` | 平 |
| `●` | 仄 |
| `△` | 平, at the end of a 句 |
| `▲` | 仄, at the end of a 句 |

The triangles mark the last character of a 句, where a rhyme can fall. A 句
ends at `。` `，` `！` `？` `；` `：` or `…`. `、` does not end one, and neither
does `——`. Punctuation inside brackets belongs to the aside and does not end
the 句 around it.

On a vertical page the marks are in the margin; on a horizontal page they are
on the row above. The command needs a margin; if `:view-margin` is `never`,
write `:view-meter! on` to turn the margin on as well.

The tone of each character is looked up by word, from the same 拆分表 that
`:ruby-auto` uses. Without it, there is nothing to look up, and the status line
says so.

**These are modern readings, and 入聲 is where they go wrong.** The tone comes
from Mandarin pinyin. The old 入聲 characters have spread over all four modern
tones, so 竹 (`zhú`), 白 (`bái`) and 石 (`shí`) are 仄 by the classical rules but
marked 平 here. The data has no Middle Chinese readings, and pinyin cannot be
worked back to them.

- Writing by 中華新韻, the marks are right.
- Writing by 平水韻, they are a first pass: they catch the mistakes in the
  third and fourth tones and say nothing about 入聲.

A syllable in the neutral tone gets no mark; it is neither 平 nor 仄.

When a cell already holds a reading or a hung mark, the 平仄 mark gives way.

## Punctuation hints: `:view-punct`

A half-width `,` in Chinese text is easy to type and hard to see.
`:view-punct` writes the right mark beside the wrong one, where you are
reading:

```text
他説,，好吧...……我知道了!！
```

```text
:view-punct on
:view-punct off
:view-punct toggle
:view-punct             say whether it is on
```

The hint is drawn in the colour the editor uses to point at things, not in
the colour of the text, so you can tell them apart. On a vertical page it turns
with the page, in the same cell.

**The hint is not in the file.** The cursor cannot land on it, `x` cannot
delete it, and `:w` writes what you typed. Fix the mark and the hint goes away.

It shows two things: a half-width mark next to a Chinese character, and `...`.
`3.14`, `1,000` and English sentences are left alone, and so are code blocks,
where `,` is correct. Nothing is drawn under `:render off`, which shows the file
exactly as it is.

A missing `」` is not shown, because one line cannot see the next paragraph.
`:check-punct` lists those; see [Checks and counts](checks.md).
