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

The outline sidebar (`Space s`) lists the headings of the current file, each with
its count. In a Typst main file, every `#include` is read open, and its
chapter titles are listed in place of the file name:

```typst
= My Book
#include "ch1.typ"
#include "ch2.typ"
```

So the main file works as a table of contents. Put the cursor on an `#include`
line and press `gf` to open that chapter; it is read as Typst whatever its name.

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
| `](#` | this file's headings, written as anchors |
| `[[` | the files in this file's folder and its subfolders |
| `[@` | citation keys from the bibliography beside the file |

`Tab` writes the next entry into the text, `Shift-Tab` goes back. The closing
brackets are added for you. Nothing changes until you press `Tab`, so you can
type the whole reference by hand and ignore the list. `Enter` and `Esc` keep
their usual meaning.

`[[` searches only this file's folder and below, not the whole book, so the
list stays short. What you type matches the whole path, so `rain` finds
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

What the wiki does:

- **Entry names become words.** `w` steps over a name in one go.
  One-character entries are not words.
- **Names are marked** in the text, in gold by default. `:wiki-mark line` uses
  a dotted underline, `:wiki-mark off` nothing. Names inside code or notes are
  not marked.
- **The entry floats beside the cursor** when you stand on a name, and folds
  away when you leave. `:wiki-panel on` shows it in the sidebar instead; `C-w`
  moves into the sidebar to scroll it, `q` comes back.
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

`:check-names` uses the wiki to find a name written with a homophone in one
place, the kind of slip an input method makes when the wrong candidate is
taken. It needs the reading table from the input method's data; without it, it
reports nothing.
