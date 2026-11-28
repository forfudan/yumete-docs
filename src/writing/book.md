# A book of many files

A novel or a thesis is usually many files in one folder: a chapter per file, a
main file that pulls them together, notes, a bibliography. This page covers how
yumete treats that folder as one project: where it searches from, how it picks
up where you left off, how to jump between chapters, and the book's own wiki.

## The project and the working directory

Two places matter.

The **working directory** is where you started `ye`. If you give a folder on
the command line, that folder is it. After that only `:cd` changes it (`:cd`
alone goes home, `:cd -` goes back), and `:pwd` shows it. `Space F` searches
it, and relative paths in `:open`, `!` shell commands and `:format` start from
it.

The **project** is worked out from the working directory. yumete looks upward
for a folder with a `.yumete` folder or a `.yumete.toml` file in it, then for
the nearest `.git`, `.jj` or `.svn`; with neither, the project is the working
directory itself. The file picker `Space f`, the sidebar's file tree,
project-wide search, the project config, the word list and the wiki all use the
project. A language server is the one exception: it starts from the file's own
folder (see [Language servers](../guide/languages.md)).

```text
~/books/winter/           the project (it has .git)
├── part-1/
│   └── chapter-1.md      started here: ye chapter-1.md
└── notes/
```

Started inside `part-1/`, `Space f` searches all of `winter/` and `Space F`
only `part-1/`. Opening a file from somewhere else does not move either one.

Both respect `.gitignore`, whether or not the folder is a git repository. See
[Search and pickers](../guide/search.md).

## Picking up tomorrow: `--resume`

`ye -r` (or `--resume`) reopens the files that were open last time in this
project, each at the line you left it on, and `:resume` does the same from
inside the editor. See [Files, saving and changes](../guide/files.md).

## Marks across files

Under the helix keymap, `M` and a letter remember the cursor's place; `'` and
the same letter go back to it, opening that file if needed. Under the vim keymap
it is `m` and a letter, as in vim. `C-o` returns to where you were before the
jump.

## Chapters in the outline

The outline sidebar (`:sidebar-outline`) lists the headings of the current file, each with
its count. In a Typst main file, every `#include` is read open, and its
chapter titles are listed in place of the file name:

```typst
= My Book
#include "ch1.typ"
#include "ch2.typ"
```

So the main file works as a table of contents. Put the cursor on an `#include`
line and press `gf` to open that chapter; it is read as Typst whatever its name.

To reorder chapters, put the cursor on a heading with nothing selected and press
`A-j` or `A-k`: the heading and everything under it, sub-sections included, moves
below the next section or above the previous one at the same level; a count
moves past that many. It never leaves the heading above it, and at the first or
last section it stops and says so. One `u` undoes it, and folds go with the
section. In the outline sidebar the same keys move the highlighted heading's
section. Chapters read in from `#include` files do not move from the main file's
outline. With a selection, `A-j`/`A-k` move the selected lines as before.

### Sorting sections: `:sort-sections`

`:sort-sections` puts sibling sections in order by their headings, in Markdown
and Typst. Each section moves with its text and every section under it, and
never leaves its parent; the text above the first heading stays where it is.
A `#` inside a code fence or a comment is not a heading.

| Flag | What it does |
| --- | --- |
| `-k`, `--key` | `pinyin` (the default), `unicode` (code point) or `number` (the first number in the title, `12` or 第十二章, with `1.2` before `1.10`; titles with no number go last) |
| `-l`, `--levels` | Sort only these levels: `-l 2`, `-l 2-3`. A level left out stays put while the levels under it are still sorted |
| `-r`, `--reverse` | Last first |
| `--under` | Only the sections under the one the cursor is in, or under its parent when it has none |

Pinyin counts tones (天 tiān before 田 tián) and reads a title word by word, as
`:ruby-auto` does, so 行 in 行走 is xíng. Without the Yume tables it falls back
to the built-in search table, one character at a time and without tones. Titles
that sound the same are ordered by code point, and identical titles keep their
order. The order is read from what the heading shows: emphasis marks, a link's
address and a Typst label do not count.

A range in front (`:'<,'>sort-sections`, `:3,9sort-sections`) or a selection
sorts only the sections that start inside it, each taken whole. The whole sort is one `u`, and the cursor
stays with its section. Before anything is written the result is checked:
every line must still be there, and every heading must have the same parents.
A sort that fails the check changes nothing.

### Numbering headings: `:heading-numbering`

`:heading-numbering` numbers a Markdown file's headings, and running it again
brings the numbers up to date after sections move. `:heading-numbering-off`
takes them off. Typst numbers its headings itself with
`#set heading(numbering: …)`, so these two leave a Typst file alone.

The numbering is written in the file, in the front matter:

```yaml
---
heading-numbering: ["-", "第一章 ", "1. ", "1.1. "]
---
```

or in a comment above the first heading:

```markdown
<!-- heading-numbering: ["-", "第一章 ", "1. ", "1.1. "] -->
```

The front matter wins when both are there. The list has one pattern for each
level, from `#` down; `"-"` leaves a level unnumbered, here the book title. In a
pattern, `1`, `一`, `壹`, `a`, `A`, `i` and `I` are where numbers go, and the
rest is written as it stands, including the space or `、` before the title.
A pattern shows as many levels' numbers as it has number places, ending with
its own: `"1.1. "` is the parent's number and this heading's. A level a heading
skips reads `0`. With no list the numbering is `1. `, `1.1. `, `1.1.1. ` and so on.
The example above gives:

```markdown
# 書
## 第一章 出山
### 1. 下山
#### 1.1. 夜行
## 第二章 入城
```

Chinese numerals are written 十一, 二十, 一百零三; `壹` writes 壹拾壹 and
貳佰參拾陸 when the front matter says `lang: zh-Hant` (or `zh-TW`, `zh-HK`,
`zh-MO`). A heading ending in `<!-- omit from toc -->` (or with that comment on
the line above) gets no number and does not use one up.

Only a number the level's pattern could have written is replaced, so a title
such as `2024. 回顧` keeps its year. A heading that would read two numbers, or an underlined title that a number such as `1. ` would turn into a list item, is left as it is and named in the status line. To change the patterns, run
`:heading-numbering-off` first, then edit the list and number again.

## Links between chapters

Markdown links go between files: `[next](chapter-2.md)` with a path, or
`[[chapter-2]]` with a title, no extension needed. `[[chapter-2#snow]]` goes to
a heading in it, and `[[chapter-2|the next day]]` shows the text after `|`.
Press `gL` on any of them to follow it. See
[The page](page.md#following-a-link).

## Completing references

In insert mode, start a reference and a list opens under the cursor:

| Type | It lists |
| --- | --- |
| `[^` | this file's footnotes, each with its first words, and a new unused number |
| `](#` | this file's headings, written as anchors, each with its level and the heading it is under |
| `[[` | the files of the project, the ones nearest this file first, each with its folder (`root` at the top of the project) |
| `[[name#` | the headings of the file `[[name` opens, found the way `gd` finds it, each with its level and the heading it is under |
| `[@` | citation keys from the bibliography beside the file |

`Tab` (or `C-n`, `Down`) writes the next entry into the text and `Shift-Tab`
(or `C-p`, `Up`) the one before, closing brackets and all. Typing on keeps it;
`Enter` keeps it, closes the list and starts a new line, as it always does;
`C-y` keeps it and closes the list without one; `Esc` keeps it and leaves
Insert mode; `C-c` (or `C-e`, as in vim) takes it back out and restores what
you typed.
Nothing changes until you press `Tab`, so you can type the whole reference by
hand and ignore the list. The bottom row shows `Tab complete · 3/12`. Word
completion uses the same list and the same keys.

In Chinese, word completion also offers what your open files repeat: type
`长江` and press `C-x`, and `长江三角洲` is offered when it is written at least
twice, though a dictionary cuts it in two. It completes the last characters that
go on somewhere, so `位于长江` still finds it. While you type, the list waits for
half of `[editor] word_completion` in characters (4 by default); one character
alone never offers a phrase.

`[[` lists the files nearest this one first. What you type matches the whole path, so `rain` finds
`part-2/rain`. A file of the same kind as this one is written as its title,
without the extension.

`:markdown-footnote` writes a new footnote: the next free number, the note
opened at the foot of the file, and the cursor in the note.

### Citations

`[@` lists the keys from the `.bib` files in this file's folder and from the
file the front matter names (`bibliography: refs.bib`, BibTeX or hayagriva),
each with its title. `As Knuth argued [@kn` then `Tab` gives `[@knuth84]`.

In Typst, `@` after a space does the same, reading the file that
`#bibliography(...)` names and the `.bib` files beside it. The labels the
document sets come first: `= Introduction <intro>` offers `intro`. An address
such as `a@b.com` opens nothing.

## The book's wiki: `:wiki`

Characters, places and terms go into `.yumete/wiki.md` in the project. `##`
starts an entry; `#` is a group heading and not an entry itself:

```markdown
# People

## Anning
The hero. Born in Luoxia.
### Childhood
…

# Places
<!-- [yumete] places.md -->
```

An entry runs to the next heading of its own level or higher, so `###`
subheadings belong to it. A comment holding `[yumete] places.md` pulls that file
in at that point, as if pasted there. Paths are read from the file that names
them, and a path outside the book is not read.

A second, global wiki lives in the data directory as `wiki.md`, for what a
whole series shares. Both are read, this book's first.

### A folder of entries

A wiki can also be a folder, one file per entry, as an Obsidian vault is.
`.yumete/wiki/` is read whenever it is there, with or without a `wiki.md`
beside it: `.yumete/wiki/安寧.md` is the entry 安寧, its own headings are its
sub-entries, and a sub-folder is the group above its files, as a `#` heading
is in `wiki.md`. Front matter with `aliases: [小寧, 寧兒]` gives the entry
more names.

Another folder is named from `wiki.md`, either way:

```markdown
---
wiki: ../百科/
---
<!-- [yumete] ../地理/ -->
```

A `[yumete]` line ending in `/` reads a folder rather than a file; paths are
from the file that names them, so `../` is the project itself. Naming the
project makes every file's name an entry — the chapters, the notes, all of
them — and so marks every one of them in gold wherever it is written. Hidden
folders (`.yumete/`, `.git/`) are left out. `:wiki-where` lists each folder
with how many files and entries it gave.

What the wiki does:

- **Entry names become words.** `w` steps over a name in one go.
  One-character entries are not words.
- **Names are marked** in the text, in gold by default. `:wiki-mark line` uses
  a dotted underline, `:wiki-mark off` nothing. Names inside code or notes are
  not marked.
- **The entry floats beside the cursor** when you stand on a name, and folds
  away when you leave. `:sidebar-info` shows it in the right sidebar instead;
  `C-w l` moves into the sidebar to scroll it, and `q` comes back.
- **`gd` on a name** opens the file the entry lives in, at its heading. `C-o`
  comes back.

```
:wiki Anning     look an entry up; misspelt or out of order still finds it
:wiki            browse the entries
:wiki-where      which files were read, and names in this chapter left unmarked
:wiki-edit       open this book's wiki.md, or start one
:wiki-global     open the global wiki
:wiki-reload     read it again
```

Saving any wiki file re-reads it. A name is marked only where word segmentation
cuts it as one word, so a name can sit in a sentence unmarked; `:wiki-where`
lists those with their line numbers.

### Names written wrong: `:check-names`

`:check-names` compares the file against the book's names: the wiki's entries
and every word in `.yumete/words.txt`. It lists each place a name is written
another way, and why: **同音**, one character replaced by a homophone, the slip an
input method makes when the wrong candidate is taken (醉翁停 for 醉翁亭);
**繁简**, 简体 for 繁體 or the reverse, in any number of characters (瀋鶴年 for
沈鹤年); **异体**, a variant form of the same character (説 for 說); and
**兼容字**, a compatibility ideograph or Kangxi radical in place of the ordinary
character. Characters that only look alike are not reported. `:check-names book`
checks every file of the book (the Markdown files the links panel reads, not the
wiki's own pages), and each row names its file so `gf` goes there, and `]q` /
`[q` walk them from the chapter you are fixing. Homophones
need the reading table from the input method's data; without it the other three
are still checked and the status line says so. To keep a variant on purpose,
list that spelling in `words.txt` too: a spelling that is on the list is never
reported. It runs only when you ask.

```
:check-names        this file
:check-names book   every file of the book
```
