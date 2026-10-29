# Search and pickers

yumete has four ways to find things, from small to large:

| Keys | Where it looks | What you get |
| --- | --- | --- |
| `/` `?` | this file | one match at a time, with `n` and `N` |
| `g/` `g?` | this file | the word under the cursor, without typing it |
| `Space /` | this file, the open buffers, a directory or the project | a panel listing every match, with find and replace |
| `Space f` `Space e` `Space b` | file names, folders, open buffers | a picker that opens what you choose |

Searches can treat simplified and traditional characters as one (書 finds
书), and full pinyin can find the characters it spells (`shuzhai` finds 書齋).
Where each is on is under [Chinese in a search](#chinese-in-a-search).

## Searching in the file: `/`

| Key | Action |
| --- | --- |
| `/` | search forwards |
| `?` | search backwards |
| `n` `N` | next / previous match |
| `g/` | search for the selection, or the word under the cursor |
| `g?` | the same, shown in the other editor region |
| `*` | helix keymap: put the selection in the search register (`n` then finds it) |

`/` opens a `search:` prompt at the bottom of the screen. You can type
Chinese there with the input method. `Enter` jumps to the first match after
the cursor, and the match becomes the selection, so `c` right after a search
changes the word you found.

The pattern is a regular expression. `/第.+章` finds every chapter heading.
To find a character that means something in a regex, such as `.` `*` `(` or
`[`, escape it with `\`.

The last pattern you searched for waits on an empty prompt in grey. `Enter`
on its own searches for it again, and `Tab` turns it into text you can edit.
`C-p` and `C-n` (or `Up` and `Down`) walk your search history.

### Case

A pattern with no capital letters ignores case; one capital makes case count.
This is the same smart case helix uses. Since Chinese has no case, most
searches never notice. To turn it around once, start the pattern with
`(?-i)`. To turn it off for good:

```toml
[editor]
smart_case = false
```

### Searching for the word you are on

`g/` takes the selection, or the word under the cursor, and jumps to the next
place it appears. The text is taken as it stands, so brackets and dots need
no escaping. `g?` shows the same match in the other editor region, so the
place you are standing stays on screen (see [Windows and the sidebar](./windows.md)).

Under the helix keymap, `*` works as in helix: it puts the selection into the search register without
moving, with word boundaries when the selection is a whole word (`A-*`
without them). Press `n` to go.

## Chinese in a search

Two kinds of matching are added on top of the plain text. Each can be on or
off on its own.

**Glyphs (繁簡).** A character also matches its other written forms:
simplified, traditional, and the regional variants. `書齋` finds `书斋`, and
`书斋` finds `書齋`. The rule is one-sided on purpose: a vague character finds
more, a precise one stays precise. `发` stands for both 發 and 髮, so it finds
both; `發` does not find 髮.

Glyph folding works inside a regex too. Only the characters you typed plainly
are folded, so `書.*齋` still means "書, anything, 齋". One thing to watch:
inside a negated class it excludes more than you typed. `[^書]` also refuses
书. Turn glyph matching off when you need the exact class.

**Pinyin.** A run of Latin letters also finds the characters it spells.
`shuzhai` finds 書齋 and 书斋. Every syllable must be spelled in full: `sz`
and `shuzh` find nothing. Every reading of a character counts, so both
`chang` and `zhang` find 長. Letters and characters can be mixed:
`zhongguo很大`, `zhong国` and `中guo` all find 中國很大. The plain-text match
still runs, so `hello` keeps finding `hello`.

Where each kind is used:

| Where | Glyphs | Pinyin |
| --- | --- | --- |
| `/` and `?` | off until you press `A-j` | off until you press `A-j` |
| `:s` | the `j` flag | the `y` flag |
| the search panel | on (row `2`) | on (row `2`) |
| the file picker | on | on |
| `ye --grep` | on | on |

On the `/` prompt, `A-j` turns both on together, and the prompt changes from
`search:` to `wide search:` so you can see which you have. It stays as you
left it. It starts off because English text is full of short words like `de`,
`shi` and `an`, and every one of them is also a syllable.

## The search panel: `Space /`

`Space /` opens the search panel in the left sidebar. Where `/` gives you one
match at a time, the panel lists all of them, across as many files as you ask
for.

```
╔Search══════════════════1/2═╗
║  Search: shuzhai           ║
║1 case [smart]              ║
║2 Chinese [glyphs+pinyin]   ║
║3 matching [literal]        ║
║4 whole word [ ]            ║
║5 replace [off]             ║
║6 In: this file             ║
╠════════════════════════════╣
║3  他走進書齋，看見桌上的書…║
║5  书斋裏很安靜。           ║
╚Tab Explorer>Buffers>Outlin…╝
```

The panel opens with the keys in the search box. A selection longer than one
character is searched for at once; otherwise your last search waits in grey,
and `Enter` runs it again. In "this file" the list updates as you type. The
wider scopes wait for `Enter`, since reading a hundred files per keystroke
would be too slow; the top right corner says `Enter to search` until then.

### Keys in the panel

While you type in a box:

| Key | Action |
| --- | --- |
| `Enter` | search, then leave the box (you stay in the panel) |
| `Down` `Up` | next / previous box |
| `Esc` | leave the box; what you typed stays |

Out of the box:

| Key | Action |
| --- | --- |
| `j` `k` | walk the boxes, then the results; on a result, the text follows |
| `h` `l` | move inside a box; on the results, fold or open a file |
| `i` `a` `I` `A` | start typing in this box |
| `d` `D` `c` `C` | delete in the box, as in the text |
| `/` | back to the search box |
| `1` to `7` | flip that row's switch |
| `Enter` | search again; on a result, go there |
| `w` | make the sidebar wider or narrower |
| `q` | give the keys back to the text, leaving the panel open |
| `Tab` | the next view in this sidebar |

`j` on a result shows that match in the text while the keys stay in the
panel. `Enter` goes there and hands the keys to the text. Once you edit the
text the list is out of date, and `Enter` searches again before it jumps.

### The switches

Each row is a number, a name and the state it is in now. Press the number to
step to the next state.

| Key | Row | States (first is the default) |
| --- | --- | --- |
| `1` | case | `smart`, `match`, `ignore` |
| `2` | Chinese | `glyphs+pinyin`, `glyphs`, `pinyin`, off |
| `3` | matching | `literal`, `regex`, `fuzzy` |
| `4` | whole word | off, on |
| `5` | replace | `off`, `as typed`, `keep case` |
| `6` | In | the scope, see below |
| `7` | skip | `hidden+ignored`, `hidden`, `ignored`, `nothing` |

Matching is literal by default: in ordinary text you look for `(注)` or `A.B` more
often than for a pattern. "Whole word" only works on Latin words; Chinese has
no word boundaries, so with it on a Chinese search finds nothing. The
switches last until you quit; `[editor] fuzzy_search = true` starts on fuzzy.

### Fuzzy matching

Fuzzy finds the characters you typed, in order and close together: `他説`
finds 他輕輕地説. The whole match must fit in twice the number of characters
you typed, plus four, or nearly every long line of text would match. This is
not the file picker's fuzzy matching, which ranks short names and ignores
case.

Fuzzy is for finding only. Turning replace on sets matching back to literal,
and while replace is on, `3` steps between literal and regex.

### Scopes

The `6` row says where to look. Press `6` (or `h` / `l` while standing on it)
to step around:

| Scope | What it searches | Command |
| --- | --- | --- |
| this file | the buffer in front of you | `:search` (`:s`, `Space /`) |
| open buffers | every open buffer, unnamed ones included | `:search-buffers` (`:sb`) |
| working directory | the directory you started `ye` in; `:cd` moves it | `:search-working` (`:sw`) |
| the project | the nearest folder above with `.yumete`, or else `.git`, `.jj` or `.svn` | `:search-project` (`:sp`) |
| a folder | the folder you name | `:search <folder>` |

The commands take where to look, never what to find: `:search 稿` searches
the folder `稿`. A relative path counts from the working directory. An open
file is searched in its buffer, so unsaved changes are found. The scope does
not follow the cursor into another repository; `:cd` there first.

### Which files: only, except, skip

Scopes that read from disk add three more rows.

| Row | Example | Meaning |
| --- | --- | --- |
| only | `*.md`, `docs/*.py` | search only files that match |
| except | `**/舊稿/*` | never search files that match |
| `7` skip | `[hidden+ignored]` | what is left out |

"only" and "except" take comma-separated globs, written as in `.gitignore`.
"Hidden" is dot-files; "ignored" is what `.gitignore` and `.ignore` name. A
search that comes back short is usually missing an ignored folder, and the
first press of `7` lets those in. Binary files are never searched, and a very
long search stops after five seconds; the count then ends in `+`.

### Replacing across files

`:replace` (`:r`) opens the same panel with a "replace with" box below the
search box. `:replace-buffers` (`:rb`), `:replace-working` (`:rw`),
`:replace-project` (`:rp`) and `:replace <folder>` choose the scope, as the
search commands do. You can also press `5` in an open panel.

On the results:

| Key | Action |
| --- | --- |
| `j` `k` | step through the matches; the text follows |
| `r` on a match | replace this one |
| `r` on a file's row | replace every match in that file (asks first) |
| `R` | replace every match (asks first when more than one file is involved) |
| `u` | undo the last replacement, in every file it touched (asks) |

Standing on a match, a preview under the list shows the line after the
change, with what goes out struck through and what comes in in green.

Nothing is written to disk. Each file with a match is changed in a buffer,
and `:wa` saves them all. `u` in the panel takes the whole run back, except
in a file you have typed in since, which it leaves alone and names.

`keep case` (the third state of `5`) follows the case of what it replaces:
`server` → `daemon` turns `SERVER_DEBUG` into `DAEMON_DEBUG`. Capture groups
such as `$1` work only with matching set to regex. A replacement that would
change the number of cells in a table row is refused; `:replace!` does it
anyway.

## Substitute: `:s`

For a quick change in this file, vi's substitute is there. `:s/find/replace/`
changes the lines the selection covers; `:%s` changes the whole file. With a
slash, `:s` is substitute; without one, it opens the search panel.

A range goes before `s`: `:1-40s` is lines 1 to 40, `:1,5,9s` is those three
lines only, and `:.-$s` is this line to the end. Note that `,` lists single
lines here, so `:1,40s` is two lines, not forty.

| Flag | Meaning |
| --- | --- |
| `g` | every match on a line, not just the first |
| `i` | ignore case |
| `c` | ask at each match: `y` yes, `n` no, `a` all the rest, `l` this one then stop, `q` stop |
| `n` | count the matches, change nothing |
| `f` | the pattern and replacement are literal text |
| `j` | glyph matching (繁簡) |
| `y` | pinyin matching |
| `t` | allow a change that breaks a table row |

The separator is whatever follows `s`, so `:s#2024/01#2025/02#` needs no
escaping. In the replacement, `$1` is the first capture group, `\n` a
newline and `$$` a dollar sign. However many matches a substitution changes,
one `u` undoes all of it.

## Pickers

A picker opens in the middle of the screen, with a list on the left and a
preview on the right. You type straight away to narrow the list.

| Key | Picker |
| --- | --- |
| `Space f` | files under the project |
| `Space F` | files under the working directory |
| `Space e` | browse folders, starting at the project |
| `Space E` | browse folders, starting at this file's folder |
| `Space b` | open buffers |

`:open` with no file name opens the file picker too.

| Key | Action |
| --- | --- |
| typing | narrow the list |
| `Tab` `S-Tab` | down / up (also `C-n` `C-p`, `Down` `Up`) |
| `PageDown` `PageUp` | a page at a time |
| `A-h` | step what is skipped: hidden + ignored, hidden, ignored, nothing |
| `Enter` | open |
| `Esc` | close |

The file picker matches loosely: the letters you type must appear in order,
so `ch63` finds `卷三/ch63.md`. It reads pinyin too, and digits and
characters mix: `di120` finds `第120章.md`. The matched characters are drawn
in gold. Before you type, files you opened this session come first, then the
rest in path order. A file that is already open is previewed from its buffer.

`Space e` shows one folder at a time, folders first, with `../` at the top.
`Enter` on a folder opens it in the same picker; `Enter` on a file opens the
file. The preview shows what a folder holds.

## From the shell: `ye --grep`

The search panel can be asked from the command line, without opening the
editor. Pinyin and 繁簡 are on, which `grep` and `rg` cannot do.

```
$ ye --grep shuzhai
ch1.md
3:4:他走進書齋，看見桌上的書。

ch2.md
3:1:书斋裏很安靜。
```

On a terminal, hits are grouped under their file, as `rg` prints them. In a
pipe each hit is one line, `file:line:column:text`, so `awk` and `xargs` can
read it. `--heading` and `--no-heading` choose one. The text is sixty
characters either side of the match, since a line of text can be a whole
paragraph. The exit code is 0 if anything was found, 1 if nothing was, and 2
if the pattern was wrong.

`ye --files` finds file names the way `Space f` does:

```
$ ye --files di120
卷一/第120章.md
```

Both search the current directory. Name a directory or a file to search that
instead, or pass `--project` to search from the project root.

`--open` (`-O`) opens the editor on the answer instead of printing it:
`--grep` with the panel already run, `--files` with the picker already
filtered. `-G` is short for `--grep`, and short names string together:

```
$ ye -GO zhongguo
```

The search word is always its own argument (`-G zhongguo`, not `-Gzhongguo`).

The other switches carry `rg`'s names: `--ignore-case`, `--case-sensitive`,
`--word`, `--regex`, `--fixed` (the default), `--fuzzy`, `--hidden` (`-.`),
`--no-ignore` (`-u`; `-uu` adds the dot-files), `--glob=`, `--exclude=` and
`--color=`, plus `--chinese=both|glyphs|pinyin|off`. `--files` takes only
`--hidden`, `--no-ignore`, `--glob=`, `--exclude=` and `--project`.
`ye --help` lists everything.
