# The input method

yumete has an input method inside it. It is the engine of the 宇浩 input
method, Yume, built into the editor. You type a code in Insert mode, a list of
candidates appears, and the one you pick goes into the text. You do not need a
system input method to write Chinese in yumete, and you do not need to switch
anything at the operating system level.

This page is for someone who has never used it. It covers:

- what the input method needs before it can type;
- turning it on and off, and switching between Chinese and English;
- choosing a scheme;
- typing: codes, candidates, paging and committing;
- the candidate panel: where it is drawn and how it looks;
- the quick symbols on `;`;
- the `Space z` menu;
- using your system input method instead;
- the settings that matter, and what to do when something is wrong.

If you have used 宇浩 on macOS or Windows, most of this will feel familiar. The
schemes, the codes, the candidate order and the commit rules are the same,
because the engine is the same.

## What it needs

An input method is two things: an engine and a code table (碼表) that says which
code gives which character. The engine is always in yumete. The code tables are
data, and where they come from decides which schemes you can use.

### The two tables in every build

Every yumete binary carries two small tables of its own:

- **靈明, 精華版.** Every character in the CJK basic block and Extension A, the
  宇浩 component block, and the rest of the characters in the seven character
  sets, plus the short codes. It has **no words**, so whole-sentence input
  falls back to one character at a time.
- **星陳, 精簡版.** The same idea for 星陳.

With nothing else installed, you can type 靈明 and 星陳 with these. The other
schemes are not carried. If you ask for one and its table is not on the
machine, yumete says the table is not installed and stays on the scheme you
were using.

### Installed data

When the 宇浩 input method is installed on the same machine, yumete reads its
data. You get all of its schemes (靈明, 星陳, 卿雲, 日月 and 宇浩拼音), the
full tables with words, and any schemes you added to 宇浩 yourself. There is
nothing to configure: yumete looks where 宇浩 keeps its data on each system.

- **macOS:** `~/Library/Application Support/Yume/` (and its `data/compiled/`),
  then the input method's app bundle, for one user or for the whole machine.
- **Windows:** `%APPDATA%\Yume\` (and its `data\compiled\`), and the
  `Resources\` folder beside the installed program.
- **Linux:** `yume/` under `$XDG_DATA_HOME` (by default `~/.local/share`), then
  `$YUME_DATADIR`, then `yume/` under each of `$XDG_DATA_DIRS` (by default
  `/usr/local/share` and `/usr/share`).

An installed table always wins over the built-in one. The built-in tables are
the fallback for a machine with nothing installed.

### Naming a directory yourself

If your tables live somewhere else, such as a shared drive or a portable
install, name the directory in the config. These directories are searched
first, in the order you write them:

```toml
[ime]
data_dirs = ["~/tables/yume"]
```

For one run only, set `YUMETE_DATA_DIR` instead.

`~/.local/share/yumete` is yumete's own directory (your word list and sessions
live there), but it is **not** searched for tables. A table copied there is
ignored. Use `data_dirs` to name a directory.

To see every directory yumete searched, in order, and which files it found in
each, run `:yume-where` (or press `Space z W`). The answer opens as a buffer, so
you can search it and follow the paths with `gf`. The last line says which
table is in use right now.

### When the table is loaded

By default the code table is **not** loaded at start-up. Loading it takes a
tenth of a second or so, and many people open yumete without wanting to type
Chinese. The language model behind word motions (`w`, `b`, `e`) is loaded
either way; it does not depend on the scheme.

The table loads the first time you turn the input method on. The status line
says "loading the 碼表…" for that moment. If you type Chinese every day, load it
at start-up instead:

```toml
[ime]
scheme = "lingming"
start = true
```

## Turning it on and off

### The sign on the status line

The status line always tells you what the input method will do with the next
letter, in every mode:

| Status line | State | What a letter does |
| --- | --- | --- |
| `[中 靈明]` | Chinese, with the scheme's name | starts a code |
| `[ABC]` | English | types itself |
| nothing | off | types itself, and the system input method is free to work |

In Normal mode the sign tells you which one you will land in when you press
`i`, before you type the wrong thing.

### Two switches

There are two separate questions, and each has its own switch.

**Is the input method in use at all?** This is on or off.

- `:yume` (or `:y`) turns it on, in Chinese. If no table is loaded yet, this
  loads the scheme named in the config first.
- `:yume off` turns it off and hands the keyboard back to the system.
- `Space z z` flips between the two: off becomes Chinese, and Chinese or
  English becomes off.

**Chinese or English, while it is on?** This is a tap of Shift on its own.

- Tap `Shift` (press and release it, with no other key) to go from Chinese to
  English, and tap again to come back.
- A Shift tap does nothing while the input method is off. Use `:yume` or
  `Space z z` to turn it on.
- A Shift tap works in every mode, not only in Insert mode. Except in the
  settings panel, it sets what the next `i` will give you.

English and off look the same when you type: the letters type themselves. The
difference is whether yumete is still holding the keyboard. In English, yumete
keeps the system input method out of the way, and one tap of Shift brings
Chinese back. When it is off, yumete lets the system input method work. See
[Using a system input method instead](#using-a-system-input-method-instead).

### What the terminal must support

A Shift tap on its own is only visible to a program when the terminal speaks
the Kitty keyboard protocol. Ghostty, kitty, WezTerm, foot, Alacritty and
Konsole all do. Apple's Terminal does not.

When the terminal cannot report a lone Shift, yumete says so on the status line
at start-up. In that case use the stand-in key, `C-^` (Control and `^`). It does
exactly what a Shift tap does. Set it in the config:

```toml
[editor]
language_key = "C-^"   # or "C-<char>", "A-<char>", "F1"…"F12", or "off"
```

`C-^` is the default, and it works in every terminal, not only the ones without
the protocol. Older terminals send the same byte for `C-^` and `C-6`, so on
those the two names are one key.

## Choosing a scheme

A scheme (方案) is a way of turning keys into characters: 靈明, 星陳, 卿雲 and
日月 are shape-based (形碼); 宇浩拼音 is phonetic.

### `:yume-scheme`

```text
:yume-scheme              load the scheme the config names (靈明 by default)
:yume-scheme xingchen     switch to 星陳
:yume-s r                 the same idea, short: 日月
```

The names are `lingming`, `xingchen`, `qingyun`, `riyue` and `pinyin`. Type
`:yume-scheme ` (with the space) and the menu lists every scheme yumete found
on this machine, with its Chinese name beside it. Schemes you added to 宇浩
yourself appear at the end, under a tag such as `custom.9a54773d` and the name
their author gave them.

You can shorten both the command and the scheme, as long as the short form
matches only one thing. `:yume-s` is `:yume-scheme`, because no other `:yume-`
command starts with `s`. `l`, `x`, `q`, `r` and `p` are each enough for a
scheme. If a short form matches two things, yumete picks neither and shows you
both in the menu: `:yume-c` could be `:yume-chaifen` or `:yume-commit`, so type
`:yume-ch` or `:yume-co`.

If the scheme's table is not installed, yumete says so and stays on the scheme
that was working. You are never left unable to type.

To set the scheme you start in, write it in the config:

```toml
[ime]
scheme = "xingchen"
```

### Built-in or installed

When both a built-in and an installed table exist for 靈明 or 星陳, the
installed one is used. Two commands switch between them. They are useful when a
candidate surprises you and you want to know which table is answering.

- `:yume-builtin` switches to the built-in 靈明 table, whatever is installed.
- `:yume-installed` (or `Space z t`) switches back to the installed table for
  the current scheme.

`:yume-which` tells you which one is in use; see
[Troubleshooting](#troubleshooting).

### A table of your own

```text
:yume-table ~/tables/wubi86.dict.yaml
```

`:yume-table` loads any code table file. A Rime `.dict.yaml` works as it is: 五筆,
倉頡, 粵拼 and others. yumete strips the YAML header and works out the column
order (`字<TAB>碼` or `碼<TAB>字`) and whether the columns are separated by tabs
or spaces. A two-column text file you wrote by hand works too.

This changes the spelling only. The word frequencies and vocabulary still come
from the installed data.

A code or a word longer than 255 bytes cannot be stored, so such rows are
dropped and the reply ends with "N over-long rows skipped". A real code table
has no rows that long. If you see this, check that the path points at the file
you meant. If no row at all can be read, yumete says so.

## Typing

### Codes and candidates

In Insert mode with the sign at `[中 …]`, type a code. As soon as there is a
letter, the candidate panel appears, with the code you typed at its head and the
candidates numbered below it. With 靈明, typing `wo` looks like this:

```text
╭─────╮
│wo   │
│１ 和│
│２ 辶│
│３ 𠂎│
│４ 𠂒│
│５ 𱍸│
│６ ⺧│
╰─────╯
```

Press `Space` to take the first candidate, or a digit to take the one with that
number.

### Keys while you type a code

| Key | What it does |
| --- | --- |
| `Space` | commit the highlighted candidate |
| `1`–`9` | commit the candidate with that number on this page |
| `;` / `'` | commit the second / third candidate (靈明 and the other 宇浩 schemes) |
| `=` / `-` | next page / previous page |
| `PageDown` / `PageUp` | next page / previous page |
| arrow keys | move the highlight and turn pages (see below) |
| `Backspace` | delete the last letter of the code |
| `Enter` | commit the code itself, as letters |
| `Esc` | cancel the code |
| `Tab` | show the dictionary entry for the highlighted candidate |
| a `Shift` tap | commit the code as letters, then switch to English |

A digit with no candidate under it on this page is swallowed. It does not type
itself, and it does not pick a candidate you cannot see.

`;`, `'`, `-` and `=` are the scheme's own keys, not yumete's. If you load a
table of your own that uses one of them as part of its codes, that key goes
back to being a code key.

While a code is open, no key leaks through to the editor. The cursor does not
move, so whatever you commit goes where you were typing.

### Arrow keys

Two arrow keys move the highlight, and the other two turn the page. Which two
depends on which way the candidates run:

| Panel and layout | Next candidate | Next page |
| --- | --- | --- |
| `box`, horizontal text | `↓` | `→` |
| `box`, vertical text | `←` | `↓` |
| `bottom`, either layout | `→` | `↓` |
| `inline`, horizontal text | `→` | `↓` |
| `inline`, vertical text | `↓` | `←` |

The opposite keys go back. Moving past the last candidate on a page goes on to
the first one on the next page. `Space` then commits whichever candidate is
highlighted.

### The dictionary on `Tab`

`Tab` while a code is open shows the dictionary entry for the highlighted
candidate: its 拆分 (how it splits into components), its code and more. For a
word, it shows the first character. The entry floats beside the text, or appears
in the sidebar if the sidebar's information panel is already open. It does not
open the sidebar for you. This is the same entry `Space n` shows for the
character under the cursor in Normal mode.

### The 拆分 beside each candidate

`:yume-chaifen on` writes the 拆分 and code beside each candidate in the box.
`:yume-chaifen off` removes them, `:yume-chaifen toggle` flips, and
`:yume-chaifen` on its own says which it is. The strip panels (`bottom` and
`inline`, below) have no room for this; use `Tab` there.

### When a character goes into the text

When a finished code commits is the commit method (上屏方式). There are three,
plus "let the scheme decide":

| Method | Name | What happens |
| --- | --- | --- |
| `delayed` | 延遲上屏 (頂字) | A finished code waits. The next key commits it when that key cannot continue the code. |
| `unique` | 唯一上屏 | A finished code with exactly one candidate commits at once. `auto` is another name for it. |
| `fluency` | 整句 | Type on. `Space` commits the whole sentence. Nothing commits on its own. |
| `default` | 預設 | The scheme decides. 靈明, for example, uses `delayed`. |

Set it with `:yume-commit delayed` (and so on), or `Space z m` followed by `d`,
`u`, `f`, or `0` for default. `:yume-commit` on its own says which method is in
force.

These are the same methods as in 宇浩's own settings on macOS and Windows, with
the same names. The one you pick stays when you change scheme.

宇浩拼音 is the exception. It has no code table to look up a segment in, so it
always types whole sentences. If you set another method while in 拼音,
yumete says so instead of pretending the setting took.

`default` is the way back. Once you set one of the other three, it stays until
you choose `default` again. In the config, `[ime] commit` is the same setting;
leave it out, or write `"default"`, to let each scheme decide.

### Prediction

Prediction (輸入預測) offers candidates before the code is complete.
`:yume-autocompletion on` and `:yume-autocompletion off` set it,
`:yume-autocompletion toggle` flips it, and `:yume-autocompletion` alone says
whether it is on. `Space z y` flips it.

### Candidates on a page

A page holds six candidates by default. `:yume-menu-size 4` (any number from 1
to 9) changes it for this session, and so does `Space z` followed by a digit
from `3` to `9`. Nine is the limit because the selection keys are `1` to `9`.
To change the default, set `[panel] page_size`.

A short window or a narrow strip holds fewer candidates than this. The page size
is a ceiling, and yumete never numbers a candidate it could not draw.

## Where you can type Chinese

The input method works wherever you type text:

- Insert mode;
- the search line, `/`;
- the command search, `::`, which finds a command by what it does;
- the pickers, such as `Space f` for files and `Space b` for buffers;
- the `:ruby` line;
- the keys that wait for one character of the text: `f` and `F`, `r`, and the
  surround keys such as `ms` and `mr`. Type `f`, then a code, and the character
  you pick is the one `f` looks for.

It does **not** work on the `:` command line, including the arguments. That line
is always English. To open a file with a Chinese name, run `:open` with no path:
that opens the file picker, where you can type Chinese to filter the list. The
picker also matches pinyin and simplified or traditional forms of a name. If
you need Chinese on the command line, you can still paste it.

When a prompt line opens, any code you were typing is cancelled first, because
nothing on that line could finish it. `:` and `::` always open in English,
because what you type there first is a command name, and hand back Insert
mode's Chinese or English when they close. `/`, the `:ruby` line and the pickers keep
whatever you were using, since a search term or a file name is often Chinese. A
Shift tap on a prompt line changes that line only.

## The candidate panel

Two things about the panel are separate settings. **Where the candidates are
drawn** is `:yume-panel`. **Where the code you are typing is shown** is
`:yume-inline-preedit`. Any combination of the two works.

### Where the candidates are drawn

`:yume-panel box`, `bottom` or `inline`, or `Space z p` followed by `b`, `m` or
`i`. `:yume-panel` on its own says which one is on. In the config it is
`[panel] display`.

**`box`** (the default) is the bordered list beside the cursor, one candidate per
line. It has room for the 拆分 and code beside each candidate. It covers as
much of the text as it has candidates.

**`bottom`** puts the candidates in a row on the last line of the window, the
line where `:` and `/` are typed. They run left to right in both horizontal
and vertical layout. The text loses nothing, because that line is reserved
anyway:

```text
1  第一行。
2  第二行。
~
 INS   [中 靈明] b.md   Ln 1, Col 1
wo  １ 和  ２ 辶  ３ 𠂎  ４ 𠂒  ５ 𱍸  ６ ⺧
```

If there is no command line (`[editor] command_line = false`, or a window too
short for it), the candidates go on the status line while you type.

**`inline`** puts the same row on the line under the one you are writing, so the
candidates sit where your eyes already are. It covers that one line. If there
is no line below the cursor, it goes on the line above. In vertical layout it
is a column instead of a row: the column to the left of the one you are
writing, read downward.

```text
1  第一行。
wo  １ 和  ２ 辶  ３ 𠂎  ４ 𠂒  ５ 𱍸  ６ ⺧
```

The two strips work like the box: the same numbers and colours, the same
highlight, the same keys. They show only the number and the candidate, with no
拆分 or code beside it. Use `Tab` for those.

In a few places there is no row to spare, so the bordered box is used whatever
the setting: while you type into `/`, `::` or a picker, inside a panel's input
field, and in a table grid.

### Where the code is shown

`:yume-inline-preedit off`, `composition` or `preview`, or `Space z e` followed
by `o`, `c` or `p`. On its own, the command says which one is on. In the config
it is `[panel] inline_preedit`.

- **`off`** (the default) keeps the code out of the text. It stands at the head
  of the candidates: the first line of the box, or the left end of the strip.
- **`composition`** writes the **code** into the text, where the character will
  go. The candidate panel stops showing it a second time.

  ```text
  1  wo第一行。
  ```

- **`preview`** writes the **highlighted candidate** into the text, where it
  will go, with the cursor after it. You read the sentence, not the code. In
  this setting the code is not shown anywhere; choose `composition` if you want
  to see it.

  ```text
  1  和第一行。
  ```

Three combinations people use most:

| Panel | Code | Result |
| --- | --- | --- |
| `box` | `off` | the bordered list with the code at its head |
| `bottom` | `composition` | the code in the sentence, the candidates along the foot |
| `bottom` | `preview` | the candidate in the sentence, the candidates along the foot |

What the preedit draws in the text is not in the file until you commit, but it
takes up room on the page like real text. Wrapping, line-break rules and the
cursor all count it, so the text after it never jumps somewhere you cannot see.

Two exceptions. In a `/` search there is no text to draw into, so the code
stays at the head of the box. And with more than one selection, the preedit is
not drawn into the text; the panel shows it instead, so the code does not
appear in several places at once.

### How the panel looks

- **Colours** come from the theme, the same way the completion menu's do: the
  same background and border, the code in grey, the highlighted candidate in
  reverse. Change the theme and the panel follows. See
  [Themes](../guide/themes.md).
- **Numbers** are the full-width digits `１２３…` by default. `[panel] markers`
  sets your own, in order. Each must be full width (two cells), or the columns
  come apart: `１２３` and `㊀㊁㊂` work; `123` and `①②③` do not.
- **Corners** are rounded by default. `[panel] rounded = false` makes them
  square.
- **In vertical layout** the candidates run right to left, the same direction
  as the text they will join. The code reads downward in the rightmost column.

```toml
[panel]
display = "bottom"          # "box" | "bottom" | "inline"
inline_preedit = "composition"  # "off" | "composition" | "preview"
page_size = 6               # 1–9
markers = "１２３４５６７８９"
rounded = true
```

## Quick symbols on `;`

With no code open, press `;`. Instead of the candidate list, a chart of
punctuation appears. Each letter stands for one mark, and pressing the letter
commits that mark. There is no choosing between duplicates and no paging.

```text
╭────────────────────────────────────────────────────╮
│快捷符號 — press a letter to commit it              │
│a ：「  b ～    c ！    d 」    e ”     f 『    g 』│
│i ·     j 、    k 〔    l 〕    m 》    n 《    o ␣ │
│q ：“   r ‘     s 「    t ’     v ？    w “     x ……│
│z ——    ; ；    , ，    . 。    $ ￥    ` `         │
╰────────────────────────────────────────────────────╯
```

The letters are laid out by where they sit on the keyboard:

| Keys | Commit |
| --- | --- |
| `q w e r t` | `：“` `“` `”` `‘` `’` |
| `a s d f g` | `：「` `「` `」` `『` `』` |
| `z x c v b` | `——` `……` `！` `？` `～` |
| `i j k l` | `·` `、` `〔` `〕` |
| `m n o` | `》` `《` and a full-width space (shown as `␣`) |

Five more keys on the chart are fixed: `;` `,` `.` give the full-width `；，。`,
`$` gives `￥`, and a backtick gives itself.

To leave the chart:

- press a letter, which commits its mark;
- press `;` again, or `Space`, to commit `；` itself;
- press `Esc` or `Backspace` to close it without committing anything;
- press any other key, which closes the chart and then acts as if you had just
  pressed it.

This chart is 宇浩's, shared with its macOS, Windows and Linux front ends, so the
keys are the same in yumete as in the system input method. Schemes that use `;`
as a code key move the chart to another lead key; the scheme decides which.

While a code is open, `;` is not the chart: in 靈明 it commits the second
candidate.

## The `Space z` menu

In Normal mode, `Space z` opens the input method's own menu. A popup lists the
keys, so you do not have to remember them.

| Keys | What it does | Same as |
| --- | --- | --- |
| `Space z z` | turn the input method on (in Chinese) or off | `:yume`, `:yume off` |
| `Space z m` then `0` `d` `u` `f` | commit method: default, delayed, unique, fluency | `:yume-commit` |
| `Space z p` then `b` `m` `i` | candidates: box, bottom, inline | `:yume-panel` |
| `Space z e` then `o` `c` `p` | code shown: off, composition, preview | `:yume-inline-preedit` |
| `Space z y` | turn prediction on or off | `:yume-autocompletion toggle` |
| `Space z i` | pick a scheme from the list | `:yume-scheme` |
| `Space z n` | switch to the next scheme | |
| `Space z 3`–`9` | candidates on a page | `:yume-menu-size` |
| `Space z /` | show or hide the 拆分 beside each candidate | `:yume-chaifen toggle` |
| `Space z t` | use the installed table | `:yume-installed` |
| `Space z w` | which scheme and table are in use | `:yume-which` |
| `Space z W` | where the data is | `:yume-where` |

Where 宇浩 has a Control-Shift shortcut for the same thing, the letter after
`Space z` is the same letter: `m` for ⌃⇧M (commit method), `y` for ⌃⇧Y
(prediction), `n` for ⌃⇧N (next scheme), and the digits for ⌃⇧3 to ⌃⇧9 (page size). If you know one, you
know the other.

`Esc` closes the menu. A key it does not know shows the list again.

## Using a system input method instead

The terminal does not know that yumete has its own input method. It sees a
window where people type, so the system input method takes each key first. In
Normal mode that means `j` opens a list of system candidates instead of moving
down a line. With yumete's input method on, it means two input methods trying
to compose the same letters.

So yumete asks the system input method to stand aside whenever yumete wants to
read the keys itself, and gives the keyboard back when it does not.

### When yumete stands it aside

| Status line | Normal mode | Insert mode and other typing places |
| --- | --- | --- |
| `[中 靈明]` | stand aside | stand aside |
| `[ABC]` | stand aside | stand aside |
| nothing | stand aside | **leave it alone** |

In Normal mode every letter is a command, so the system input method always
stands aside. Where you type text, it stands aside only when yumete itself is
typing for you.

The bottom row is how you use a system input method in yumete. Run `:yume off`
(or never load a table: with the default `[ime] start = false`, nothing is
loaded until you ask). Then in Insert mode the system input method works as
usual, and in Normal mode it still stands aside so your commands work. This is
also the row for anyone writing Japanese or another language in yumete.

While the input method is on, both top rows say "stand aside", so pressing `i`
and `Esc` all day changes nothing. Only the bottom row changes with the mode.

### What yumete does for 宇浩

What yumete sends is 宇浩's own "modal suspend" signal. It is the same signal
`yume-mode off` and `yume-mode on` send for helix and vim. On macOS it is a
system-wide notification; on Windows it is a window message to 宇浩.

While suspended, 宇浩 passes every key to the terminal untouched. It does not
switch the input source, and it does not change its own Chinese or English
state, so the menu bar does not change. 宇浩 also records which program asked,
so yumete standing it aside does not mute it in your browser.

yumete gives the keyboard back:

- when you quit, including after a crash;
- when `:!` hands the screen to another program;
- when the terminal loses focus, so that typing in another window works.

If yumete is killed without a chance to say so (for example, you close the
terminal window), 宇浩 on macOS notices that the program is gone and resumes on
its own.

Losing focus depends on the terminal reporting it. Most modern terminals do.

### Other input methods, and Linux

Only 宇浩 understands the modal-suspend signal, so only 宇浩 can be stood aside.
On Linux, 宇浩's fcitx5 add-on has no modal suspend yet, so yumete sends nothing
there.

With any other input method, or on Linux, switch your system input method to
English yourself before you use Normal mode, or turn it off while you work in
yumete and use yumete's own.

To stop yumete from sending the signal at all, for example in a remote session
or an unusual terminal:

```toml
[ime]
system = "keep"   # "auto" (default) or "keep"
```

### Coming back to find the system input method on

Sometimes you type with 宇浩 in another window, come back to yumete, and the
input method is still active: keys in Normal mode get swallowed. yumete thinks
it has already asked 宇浩 to stand aside, and 宇浩 has come back on its own.

**Press `Esc` once more in Normal mode.** When `Esc` has nothing else to do (no
selection to drop, no panel to close), it sends the request again.

### Why off and English are two states

To see a Shift tap on its own, yumete turns on a Kitty keyboard protocol mode
that reports every key as an escape code. That same mode stops a system input
method from composing: what it commits arrives as a row of spaces. So yumete
turns that mode on only while its own input method is on, and turns it off the
moment you hand the keyboard back. That is why English (yumete still holds the
keyboard) and off (yumete has let go) are different.

## Settings

All of these can also be set in the settings panel (`:settings`), under the
input method group, or in the config file. See
[Configuration](../guide/configuration.md) and
[Settings](../reference/settings.md).

| Setting | Default | What it does |
| --- | --- | --- |
| `[ime] scheme` | `"lingming"` | The scheme to load: `lingming`, `xingchen`, `qingyun`, `riyue`, `pinyin`, or a `custom.…` tag. |
| `[ime] start` | `false` | Load the code table at start-up. |
| `[ime] commit` | `"default"` | Commit method: `default`, `delayed`, `unique` (or `auto`), `fluency`. `default` means the scheme decides. |
| `[ime] data_dirs` | `[]` | Directories to search for tables first, in order. `~` is expanded. |
| `[ime] system` | `"auto"` | `auto` stands the system input method aside; `keep` never touches it. |
| `[panel] display` | `"box"` | Where candidates are drawn: `box`, `bottom`, `inline`. |
| `[panel] inline_preedit` | `"off"` | Where the code is shown: `off`, `composition`, `preview`. |
| `[panel] page_size` | `6` | Candidates on a page, 1 to 9. |
| `[panel] markers` | `"１２３４５６７８９"` | The numbers in front of candidates; each must be full width. |
| `[panel] rounded` | `true` | Rounded corners on the box. |
| `[editor] language_key` | `"C-^"` | Stand-in for a Shift tap, or `"off"`. |

The panel takes its colours from the theme. `[panel] ink` and `[panel] paper`
are still accepted in old config files, but they have no effect.

A complete example for someone who types Chinese every day:

```toml
[ime]
scheme = "lingming"
start = true
commit = "default"

[panel]
display = "bottom"
inline_preedit = "composition"
page_size = 6
```

## Commands

| Command | What it does |
| --- | --- |
| `:yume`, `:y` | Turn the input method on, in Chinese. Loads the table if needed. |
| `:yume off` | Turn it off and give the keyboard back to the system. |
| `:yume-scheme [name]` | Load a scheme; with no name, the one in the config. |
| `:yume-builtin` | Use the built-in 靈明 table. |
| `:yume-installed` | Use the installed table for the current scheme. |
| `:yume-table <path>` | Use a code table file of your own, including Rime `.dict.yaml`. |
| `:yume-commit [method]` | Set or show the commit method. |
| `:yume-panel [where]` | Set or show where candidates are drawn. |
| `:yume-inline-preedit [mode]` | Set or show where the code is shown. |
| `:yume-menu-size [1–9]` | Set or show the candidates on a page. |
| `:yume-chaifen [on\|off\|toggle]` | Set or show the 拆分 beside candidates. |
| `:yume-autocompletion [on\|off\|toggle]` | Set or show prediction. |
| `:yume-which` | Say which scheme and table are in use. |
| `:yume-where` | Open a report of where tables are searched for and found. |

Every command that takes a setting answers a question when you leave the
setting off: `:yume-panel` says where the candidates are, `:yume-commit` says
which method is in force. The full list of commands is in
[Commands](../reference/commands.md).

`:yume-commit`, `:yume-chaifen` and `:yume-autocompletion` change the engine, so
they need a table to be loaded. If none is, yumete says so. The panel commands
do not need a table.

## Troubleshooting

### Ask first: `:yume-which`

`:yume-which` (or `Space z w`) answers in one line:

```text
靈明 · 碼表 ~/Library/Input Methods/Yume.app/Contents/Resources/schemes/lingming.ytab · 拆分 off · commit delayed (頂字)
```

That is the scheme, the table file it is reading, whether the 拆分 annotation is
on, and the commit method in force. If the panel is not the box, or the code is
not shown in the default place, it adds that too. For the built-in table, the
table part says `出廠自帶` followed by the time that table was built, so you know
how old it is.

If no table is loaded, it says so, and tells you that `:yume-scheme` loads one.
If the binary carries no built-in table either, it tells you to install the
data first.

### Letters type themselves and nothing appears

Look at the status line.

- **No sign at all.** The input method is off, or no table is loaded. Run
  `:yume` or press `Space z z`.
- **`[ABC]`.** You are in English. Tap Shift, or press `C-^`.
- **`[中 …]` but no candidates.** Check where the panel is (`:yume-panel`). With
  `bottom`, the candidates are on the last line of the window. With
  `preview`, the code is not shown anywhere, only the candidate.

### Shift does nothing

Your terminal probably does not speak the Kitty keyboard protocol. yumete said
so on the status line when it started. Use `C-^`, or switch to a terminal such
as Ghostty, kitty or WezTerm.

A Shift tap also does nothing while the input method is off. Turn it on first.

### "No 碼表 installed for …"

The scheme you asked for has no table on this machine, and yumete stayed on the
one you had. Install the 宇浩 input method, or name the directory that holds
your tables in `[ime] data_dirs`. Then run `:yume-where` to check that yumete
finds it.

### The candidates look old, or wrong

`:yume-which` shows which table is answering. If it is a table you did not
expect, `:yume-where` lists every place searched, in order, and the first one
holding a file wins. Each file is listed with the format stamp it carries.

To tell whether the built-in or the installed table is at fault, switch between
them with `:yume-builtin` and `:yume-installed` and type the same code.

### The 拆分 annotations disappeared

The data's binary format follows the engine. After an update, an older data
directory can look complete while the engine refuses some files. `:yume-which`
adds a line at the end when that happens, naming the file and what the engine
expected. Update or reinstall the 宇浩 data to fix it.

### Keys are swallowed in Normal mode

The system input method is active in the terminal.

- With 宇浩 on macOS or Windows, press `Esc` once more in Normal mode. yumete
  asks it to stand aside again.
- With another input method, or on Linux, switch the system input method to
  English yourself.
- If you set `[ime] system = "keep"`, yumete never asks; set it back to
  `"auto"`.

### A table of your own loads with rows missing

The reply said "N over-long rows skipped". A code or word over 255 bytes cannot
be stored. A real table has none, so the path probably points at the wrong
file.
