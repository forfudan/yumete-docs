# CJK motions

Chinese is written without spaces, so an editor that finds words by spaces sees
a whole paragraph as one word. yumete finds Chinese words with a dictionary, so
the word keys step through Chinese the way they step through English. This page
covers moving by word, clause and sentence, jumping to what you see, searching
by pinyin and across simplified and traditional characters, and how yumete
learns the names in your book.

## Words, clauses and sentences

| Key | Moves |
| --- | --- |
| `w` | to the next word |
| `e` | to the end of the clause |
| `b` | back to the start of the clause |
| `W` `B` `E` | the same, split on spaces only |
| `H` `L` | to the previous / next sentence; right after `L`, `H` first re-selects the same sentence backwards, as helix's `b` does after `w` |
| `{` `}` | to the previous / next paragraph |

On `我們明天去圖書館借書。` with the cursor on 我, `w` selects 我們, then 明天,
then 去, then 圖書館. `e` instead runs straight to 書, the last character before
the `。`.

**`w` takes a word, `e` takes a clause.** With a dictionary, a `w` and an `e`
that both stopped at word ends would do almost the same thing, so `e` runs to
the next punctuation mark instead. `b` is `e`'s partner and walks back to where
an `e` would have started. A run of punctuation marks such as `：「` is one
stop, as it is in vim and helix.

**Under the vim keymap** `w`, `b` and `e` all go by dictionary word, as vim's
do by English word, and the sentence motions are `(` and `)`. As in vim, `w`
and `b` stop on an empty line, and `e` passes it by.

`W`, `B` and `E` split on whitespace and nothing else, so a run of Chinese with
no spaces in it is one unit. Use them for URLs, paths and version numbers.

A sentence ends after `。` `！` `？` or `…`, and after any closing quote or
bracket that follows: in `「不。」他說。` the first sentence ends after the `」`.
A half-width `.` ends a sentence only when a space or the end of the line
follows, so `3.14` does not. When there is no next sentence in the paragraph,
`L` goes to the first one of the next paragraph.

### Text objects

The same units are text objects. With the cursor on 期 in
`他說：「今天（星期三）要下雨。」`:

| Keys | Selects |
| --- | --- |
| `mi w` | 星期三, the word |
| `mi s` | the sentence, from 他 to the closing `」` |
| `mi u` | 星期三: the clause, up to any punctuation mark on either side |
| `mi (` | 星期三: inside the parentheses; `(` covers `（）` too |
| `mi [` | inside the corner brackets; `[` covers `「」` and `【】` too |

Each ASCII bracket key covers its full-width and Chinese relatives, so your
hand goes to the same key. The full list is in [Match mode](../reference/match.md).
Under the vim keymap these are `iw`, `is` and the rest.

## How words are found

Word boundaries come from a word list. With Yume's data installed (see
[The input method](ime.md)), yumete uses Yume's language model. Otherwise it
uses `segmentation.txt` in the data directory if there is one
(`:word-list-global` opens it), and a built-in list if not. `:word` says which
list is in use, the level and the mark.

`:word-level` sets how readily characters join into words:

| Level | Words |
| --- | --- |
| `off` | no dictionary: a run of Chinese counts as one word |
| `strict` | only the clearest words, more single characters |
| `balanced` | as the dictionary has them (the default) |
| `full` | long and unusual words too |

The setting is `word_level` under `[editor]`.

By default, every other word is drawn in a second colour of the same
lightness, so you can see where yumete thinks the words are. `:word-mark`
changes how: `color` (the default), `ink`, `tint`, `line`, or `off`. The setting
is `word_mark` under `[editor]`.

## The book's own words: `.yumete/words.txt`

The name on every page of your novel is the one word no dictionary has. Left
alone, 阿寧 is cut into 阿 and 寧: `w` stops twice, and the word colours draw two
words. List such words in `.yumete/words.txt` at the root of your project, one
per line. `#` starts a comment.

```text
# People
阿寧
沈鶴年
# Places
落霞鎮
```

`:word-list-local` opens the file, even before it exists. The project is
worked out from the working directory, not from the file; see
[A book of many files](book.md#the-project-and-the-working-directory).

The list is read at startup, and again whenever you save it with `:w`; the
status line says how many words are now in force. If you changed it outside
yumete, `:word-list-reload` reads both lists again.

Your words are laid over the dictionary. The dictionary still decides
everywhere else, and only where one of your words is spelled out does it
become one word. The longer match wins, so 阿寧 beats 阿.

yumete only reads this file and never writes to it.

## Words yumete finds by itself

You do not have to list every name. When you open a file, yumete reads it in
the background and picks out strings that behave like words but are not in the
dictionary, and from then on treats them as words. Nothing is shown and
nothing waits: before the scan finishes, `w` follows the dictionary, and after
it `w` steps over 落霞鎮 in one go.

It reads the file you opened first, then the folder it is in, subfolders
included. Saving asks again: a different file is read at once, the same file
only after five minutes. Very large files are skipped.

A string counts as a word when its characters occur together far more often
than chance would give, and it turns up next to many different characters on
both sides. The first test separates 阿寧 from 的時; the second separates 阿寧
from 阿寧說, which always has the same neighbour. Anything the dictionary already
joins is left out.

This list lives only in memory. There is nothing to accept or reject: close
yumete and it is gone, and the next file you open works it out again.

### Seeing the list: `:word-discover`

| Command | Reads |
| --- | --- |
| `:word-discover` | this file |
| `:word-discover-working` | the working directory, subfolders included |
| `:word-discover-project` | the project, subfolders included |

The command works the list out on the spot, writes it to
`.yumete/discovered_words.txt`, ordered by count, and opens it.

That file goes one way only: yumete writes it on every run and never reads it
back, so editing it does nothing. To keep a word for good, copy it into
`.yumete/words.txt`, which goes the other way: you write it and yumete reads it.

## Jumping to what you see

Three keys jump to a place on the screen. `C-o` takes you back.

**`gw`: any clause.** Every clause on the screen gets a letter label on its first
character; type the label to jump there. Up to 26 places and each label is
one letter; more, and labels take two. The places are the units `e` stops at,
so `那年冬天，雪下得早。` gets two labels, not one per character. It works the same on a
vertical page, one label to a column.

**`gx`: two letters of Latin text.** Type the first two letters of a word you
can see, and every place on the screen spelled that way gets a label. A
one-letter word such as `a` is followed by a space, and the space is its second
letter. `gx` looks only at Latin text; for Chinese use `gz`.

**`gz`: a Chinese character by its reading.** Type the pinyin of the character
you are looking at. A panel lists the characters on the screen with that reading
and how many times each appears; keep typing until the list is short. Then pick
one with its number, or with `Space`, `;` or `'` for the first three. Each place
it appears gets a label. `-` and `=` page through a long list. For example,
on a screen with 雪, 下 and 見 on it, `gz` `x` lists all three, and `;` then
labels every 下.

To find one character on the line, `f` and `t` take Chinese as well. With
Chinese input on, type the character's code and pick it as usual. `f,` does
not find `，`: they are different characters.

## Searching by pinyin and across 繁簡

A search can be widened in two ways: simplified and traditional forms count as
the same character, and pinyin finds the characters it spells. `/shuzhai`
finds 書齋 and 书斋, and letters and characters can be mixed, as in
`zhong国`. On the `/` prompt `A-j` turns both on; `:s` has a flag for each, and
the search panel and `ye --grep` have both on. See
[Search and pickers](../guide/search.md#chinese-in-a-search) for the rules.

## Punctuation

Chinese punctuation is full-width, and yumete treats it that way:

- **Joining lines.** `J` puts no space between two Chinese characters and one
  space between two Latin words, so joining a broken paragraph gives back a
  clean one. `A-J` does the same and leaves the seam selected, so you can see
  what was decided and type over it.
- **Line breaks.** A wrapped row never starts with a closing mark such as `。`
  `，` or `」`, and never ends with an opening one such as `「` or `（`.
- **Brackets.** `mi (`, `ma [` and the rest of the match group treat `（）`,
  `「」`, `《》` and their kin as the pairs they are. With
  `auto_pairs = "full"` under `[editor]`, typing an opening Chinese bracket
  adds the closing one (see [Settings](../reference/settings.md)).
- **Width.** `` `f `` turns the selection full-width and `` `h `` half-width,
  for the characters Unicode pairs: `,` and `，`, `A` and `Ａ`. `「」` and `。` have
  no half-width form and are left alone.
- **Wrong marks.** `:view-punct` shows the right mark beside a half-width one
  in Chinese text (see [Ruby and annotations](ruby.md#punctuation-hints-view-punct)),
  and `:check-punct` lists the problems (see [Checks and counts](checks.md)).
