# Getting started

Open a file by naming it:

```sh
ye notes.md
```

Name several to open them all, or none to start on a blank page. A file that
does not exist yet opens empty and is created when you save it.

| Command | What it opens |
| --- | --- |
| `ye ch01.md ch02.md` | both files, one buffer each |
| `ye` | a blank, unnamed buffer |
| `ye -r` | the files that were open last time in this project, each at the line you left |
| `ye --tutor` | the lesson (see [below](#tutor)) |

The fastest way in is the lesson. If you have five minutes, type `:tutor` and
`Enter` now, and come back to this page later.

## Modes

yumete is a modal editor, like helix and vim. The same key does different
things depending on the mode you are in.

| Mode | How to get in | What keys do |
| --- | --- | --- |
| Normal | `Esc` | move, select, and act on the selection. The mode you start in |
| Insert | `i` `a` `I` `A` `o` `O`, or `c` | type text. The input method works here |
| Select | `v` | motions grow the selection instead of replacing it |
| Command | `:` | type a command, such as `:w` |
| Command search | `:` again, on an empty command line | describe what you want to do and find the command |
| Search | `/` forward, `?` backward | type what to look for |

The first word on the status line names the mode: `NOR`, `INS` or `SEL`. The
cursor shape says the same thing. A block means the next key is a command; a
bar means the next key is text. Every place where you type, including the
command line and the search box, shows a bar.

You will press `Esc` hundreds of times a day. Most systems let you turn Caps Lock
into a second `Esc` in their keyboard settings; it is worth doing once.

## Moving

These work in Normal mode.

| Keys | Move |
| --- | --- |
| `h` `j` `k` `l` | left, down, up, right. The arrow keys work too |
| `w` | next word |
| `e` `b` | to the end of the clause, back to its start |
| `gg` `ge` | start and end of the file |
| `gh` `gl` | start and end of the line |
| `C-d` `C-u` | half a page down and up |
| `/` then `n` `N` | search, then next and previous match |

`w` knows where a Chinese word ends. In 我們明天去爬山, `w` takes 我們,
then 明天, 去 and 爬山, not one character at a time. `e` and `b` go from one
punctuation mark to the next. In English text they move by word, as in vim.
See [CJK motions](../writing/cjk.md).

A number in front repeats a key: `3w` moves three words, `10j` ten lines. Type
`30G` or `:30` to go to line 30.

## Selecting and changing

yumete follows helix: you select first, then say what to do with the
selection. The cursor is a selection one character wide.

| Keys | What it does |
| --- | --- |
| `x` | select the whole line. In a text file, a line is usually a paragraph |
| `v` | start extending the selection with motions |
| `d` | delete the selection |
| `c` | delete the selection and start typing in its place |
| `y` `p` `P` | copy, paste after, paste before |
| `u` `U` | undo, redo |
| `.` | repeat the last change |

So `w` then `d` deletes a word, and `x` then `c` rewrites a paragraph. If your
hands know vim instead, see [Vim keys](#vim-keys) below.

## Typing Chinese

The input method is part of the editor, and it starts off. Turn it on with
`:yume` (`:y`) or `Space z z`, or set `[ime] start = true` in the config. Once it
is on, tap Shift on its own in Insert mode to switch between Chinese and ABC. The status line shows which one is on: the name
of the scheme in brackets for Chinese, `[ABC]` for Latin letters. Type a code,
and a bar of candidates appears; `Space` takes the first.

`Space z z` in Normal mode turns it off again.

A tap of Shift needs a terminal that reports Shift on its own. On one that does
not, `C-^` switches instead; the setting `language_key` changes which key that
is. The full story is in [The input method](../writing/ime.md).

## Saving and quitting

| Command | What it does |
| --- | --- |
| `:w` | save |
| `:w other.md` | write a copy to `other.md`, and stay on this file |
| `:q` | close this file, and leave when it was the last one |
| `:q!` | the same, throwing away unsaved changes |
| `:wq` | save, then leave |
| `:x` | save only if something changed, then leave |
| `:wa` | save every file that changed |
| `:qa` | close every file and leave |

`:q` refuses while there are unsaved changes, and says so on the line under the
status line. A `[+]` after the file name on the status line means unsaved
changes.

Nothing is lost if the terminal closes before you save. yumete keeps a rescue
copy of every unsaved change, and the next time you open the file it offers it
back with `:recover`.

## When you forget a key

### The editor tells you what comes next

Many keys wait for a second one. When you press one, yumete shows what can
follow:

- `g`, `m` and `Space` open a table of their keys, each with a few words on
  what it does. Press one of them, or `Esc` to let go.
- `f`, `t` and the other keys that take a character say so in a small box.
- A number opens a table of the keys where a count means something other than
  "do it this many times". `10` then `gg` goes to line 10, for example.
- Under the vim keys, `d`, `c` and `y` list the motions they accept.

What you have typed so far shows at the right end of the status line and beside
the cursor. `:view-hud basic` makes the one beside the cursor smaller, and
`:view-hud off` removes it.

The line below the status line answers in words: what just happened, why a key
was turned away, or what keys the panel you are in accepts.

### `:tutor`

`:tutor` copies a lesson into a file of your own and opens it. You learn by
editing it, so every key it teaches is safe to press there, and `:w` saves your
notes. Running `:tutor` again gives you a fresh copy and keeps the old one. The
lesson is in English when the interface is, and in Chinese otherwise.

### `:help`

`:help` (or `:h`) opens the keys you will use most, in a buffer of its own.
Every motion and `/` work in it, so you can search it like any file. Most of it
is drawn from the key tables the editor itself runs on.

| Command | What it opens |
| --- | --- |
| `:help` | the common keys |
| `:help commands` | every command |
| `:help chinese` | Chinese text: punctuation, readings, the input method |
| `:help vertical` | vertical layout |
| `:help table` | table mode |

`:q` closes the help buffer.

### `::` searches commands by what they do

Command names are short English words, and you may remember only what you want
done. Press `:` twice. The command line now takes a description, in English or
Chinese:

```text
::sort         → :table-sort
::竖排          → :vertical
```

The list mixes commands and keys: whichever does the job comes up. `Tab` moves
down the list, `Enter` runs the highlighted entry, and the entry shows what to
type next time. Letters only need to be in order, so `tbsort` finds
`table-sort`. Backspace past the start returns to an ordinary `:` line.

`Space ?` lists every command as a menu.

### `:` completes as you type

An ordinary `:` line shows the commands that match what you have typed so far,
above the command line. `Tab` cycles through them, and once a command is chosen,
through the words it accepts.

## Vim keys

If your fingers know vim, switch the keymap:

```text
:keymap vim
```

`d`, `c` and `y` then wait for a motion (`dw`, `cc`, `y$`), `x` deletes a
character, and `V` selects a line. `:keymap helix` switches back, and `:keymap`
alone says which one is in use.

`:keymap` lasts for this session. To keep it, set it in the
[configuration](./configuration.md):

```toml
[keys]
preset = "vim"
```

or open `:settings` and change it under Keys. [Coming from vim](../from/vim.md)
lists what is different.

## Next

- [Configuration](./configuration.md): the config files and the settings panel.
- [Key remapping](./remapping.md): put any action on any key.
- [Keymap](../reference/keymap.md) and [Commands](../reference/commands.md): every
  key and every command.
