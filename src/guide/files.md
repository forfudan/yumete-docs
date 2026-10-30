# Files, saving and changes

This page covers what happens between the buffer and the disk: saving,
files that change underneath you, the recovery copy that protects unsaved
work, and the tools that show what you have changed.

## Saving and quitting

| Command | Action |
| --- | --- |
| `:write` (`:w`) | save this file |
| `:w <path>` | write a copy to `<path>`; you keep editing this file |
| `:write-as <path>` | save under a new name and edit that one |
| `:write-all` (`:wa`) | save every file that changed |
| `:update` (`:up`) | save only if changed |
| `:write-quit` (`:wq`) | save, then quit |
| `:exit` (`:x`, `:xit`) | save only if changed, then quit |
| `:write-quit-all` (`:wqa`, `:xa`) | save every file that changed, then quit |
| `:quit` (`:q`) | close this file; quit when it was the last one; in a split, close this region |
| `:quit-all` (`:qa`) | close every file and quit |

A `!` after `:q` or `:qa` throws away unsaved changes. Without it, quitting
with unsaved changes stops and says so.

With the window split, `:q`, `:q!`, `:wq` and `:x` close only the region you
are in. The file stays open with its changes, so `:q!` throws nothing away
there. In the last region they work as above.

`:w` always writes, even when nothing changed, and that moves the file's
modification time. Build tools and sync programs read that time, so an idle
`:wq` over a dozen files you only looked at can make them all look rewritten.
`:x` and `:up` write nothing when nothing changed; the status line says
`unchanged; nothing written`. Given a path, `:x <path>` always writes.

### What a save writes

Files are read and written as UTF-8. A byte-order mark at the start is
kept out of the text you edit, and saving puts it back. A file in another encoding, such as Big5 or
GB18030, is refused with a note to convert it first, for example with
`iconv -f big5 -t utf-8`.

A saved file ends with a line break, as in vim and helix. It uses the file's
own line ending, `\r\n` or `\n`, and an empty file stays empty. Line endings
already in the file are never rewritten. To write the file back byte for byte
instead:

```toml
[editor]
insert_final_newline = false
```

The row after the final line break shows `~` in the gutter rather than a line
number: the break ends the line above, it does not start a new one. Under the
helix keymap the cursor can stand on that row to start a new paragraph; under
the vim keymap it cannot.

### A save that makes the file much bigger

One key, such as aligning a table whose widest cell is a paragraph, can
multiply the size of a file. When a save would leave a file both at least
twice as big and more than 256 KB bigger, it stops and asks:

```
safety check

saving would take 《notes.md》 from 25 KB to 1.1 MB — 44.1× as big.

y  save it
d  see what changed
n  cancel
```

`y` saves. `d` opens `:diff` and does not save; look, then save again if it
was right. `n` or `Esc` cancels. Both conditions must hold, so a short draft
that doubles, or a long book that gains a chapter, is never stopped. A file's
first save never asks.

Every save goes through this check: `:w!`, `:wq`, `:wa` and `:wqa!`
included. The `!` overrides a change made outside, not this question.

## When the file changes outside

Another program can change a file you have open: a git checkout, a sync
folder, a formatter, `:!sed -i`, or the same file open somewhere else.
yumete checks the disk every two seconds.

- **No unsaved changes here:** the new version is read in, and the status
  line says so.
- **Unsaved changes here:** nothing is read. The status line tells you once,
  and the choice is yours.
- **The file was deleted:** nothing is read, and you keep the text you had.

If you then try to save over a file that changed outside, the save stops:

```
the file changed on disk — `:reload!` takes its version, `:w!` keeps yours
```

| Command | Action |
| --- | --- |
| `:reload` | read the file again; refuses when you have unsaved changes |
| `:reload!` | read the file again and throw away your changes |
| `:w!` | write your version over the one on disk |

A file whose time changed but whose bytes did not, as after a `touch` or a
sync that rewrote the same content, does not count as changed. A file that
was deleted does.

Reading changed files back by itself is on by default. `:reload-auto off`
turns it off for this run and `:reload-auto` on its own says which it is. To
turn it off for good:

```toml
[editor]
reload_auto = false
```

## The recovery copy

While a file has unsaved changes, yumete writes a copy of it beside the file
every few seconds, at most five, and also when you stop typing. The copy of
`chapter.md` is a hidden file beside it, `.chapter.md.yumete.<number>`, where the
number identifies the running yumete, so two yumetes never write over each
other's copy. Saving or quitting
normally deletes it, so you only see it after something went wrong.

On macOS and Linux, closing the terminal window (`SIGHUP`) or a `SIGTERM`
makes yumete write the copy of every unsaved file on the way out, so nothing
typed since the last copy is lost.

If yumete, the terminal or the machine stops before you saved, the next time
you open the file it asks:

```
a draft was kept

《chapter.md》 has a draft from 10-29 23:56, left by a run that ended
before it saved; the file itself was saved at 10-29 23:55.

y  recover
d  throw the draft away
n  leave it for now
```

The draft is never loaded without asking. `y` asks once more, with
`y` recover it, `d` open the comparison, `n` cancel, so no single key replaces
your text. After recovering, `u` goes back to the version on disk, and `:w`
keeps the draft.

`n` leaves the draft where it is. The file shows `[draft]` after its name in
the status line, and `:recover` asks the question again whenever you like.
Typing does not overwrite a draft nobody has claimed, and `:q!` does not
delete it; only `d` does.

Each running yumete keeps its own copy, so two windows on the same file do not
delete each other's.

### Unnamed buffers

A buffer with no file name, such as the one `ye` opens with no arguments, has
nowhere to put a copy beside it. Its copy goes to the `drafts` folder in
yumete's data directory instead, once something has been typed in it. After a
crash the next start says:

```
1 unsaved draft(s) — :recover opens them
```

`:recover` opens each one as a buffer. Save it with `:w <name>` to keep it.

To turn recovery copies off altogether:

```toml
[editor]
autosave = false
```

## Seeing what changed

### The change bar

The column between the line numbers and the text marks lines that differ from
the last commit (`HEAD`):

| Mark | Meaning |
| --- | --- |
| green | a new line |
| blue | a changed line |
| a thin line at the top of a line | lines were deleted just above it |

A file outside git, or one git does not track, is compared with its saved
copy instead, so the bar shows what you changed since the last save.

The bar follows the buffer, unsaved changes included, and updates a moment
after you stop typing. It is on by default; `:view-diff off` hides it, and
`[editor] diff_gutter = false` turns it off for good.

| Key | Action |
| --- | --- |
| `]g` `[g` | next / previous change |
| `Space x` | show what this block was before, in a float |
| `Space X` | the same, in the Info sidebar; there `u` puts the old text back |
| `mi g` | select the changed lines around the cursor |

### `:diff`, word by word

Most diff tools compare lines, and a Chinese paragraph is one long line:
change one word and the whole paragraph is reported. `:diff` compares
**words**, using the same word boundaries as `w`.

`:diff` with no argument compares the buffer with the saved file: what you
have changed since you last saved. `:diff <path>` compares with another file,
such as an earlier draft; a relative path counts from this file's folder.

The report opens as a read-only buffer, one pair of rows per change:

```
3-  她伸手去碰，指尖一涼。
3+  她伸手去碰了碰，指尖一涼，那朵花就化了。
```

The `-` row is the old text, the `+` row the new. Removed words are drawn on
red, added words on green. Each row carries its own line number in its own
file. `gf` on either row goes to that place in the file you are editing.

`:git-diff` is the same comparison against git: `HEAD` by default, or the
commit you name (`:git-diff HEAD~3`, `:git-diff v1.0`). Both compare the
buffer, unsaved changes included.

### `:git-show`

`:git-show` opens the committed copy of this file (`HEAD`, or the commit you
name) read-only in the other window, at the line you are on. The keys
stay in the file you are writing, so you can read the two side by side.
Asking again replaces that copy. When git has no answer, such as for a file
never committed, git's own message is shown.

## Sessions: `-r` and `:resume`

yumete records which files are open, separately for each project (see
[A book of many files](../writing/book.md#the-project-and-the-working-directory)).
Sessions live in the data directory, so nothing is added to the project. To
pick up where you left off:

```
$ ye -r
```

`-r` (`--resume`) reopens those files, each at the line you left it on.
`:resume` does the same from inside the editor, adding them to what is
already open. At most 24 files are kept. Files that have moved or been
deleted since are skipped quietly. Quitting with no file open leaves the last
session alone.

The session is written whenever the open files change, not only when you
quit, so `-r` also brings them back after a crash.

The session also keeps how the page looked: the layout, the `:view-*`
settings and the theme, where they differ from your config. `:reload-config`
puts everything back the way the config says.

To resume every time you start without a file name:

```toml
[editor]
session = true
```

Then `ye --new` starts on an empty buffer.

`[editor] remember = false` keeps no memory at all: no session, no recent
files, no line to return to. `--private` does the same for one run. Recovery
copies are kept either way.

## Copying to and from other programs

The terminal keeps `Cmd+C` and `Cmd+V` for itself. Use the `Space` menu:

| Key | Action |
| --- | --- |
| `Space y` | copy the selection to the system clipboard |
| `Space p` `Space P` | paste from the system clipboard after / before |

Pasting with the terminal's own paste also works; the text arrives as text,
not as keys. Copying goes through the terminal, so it works over ssh and
tmux. Pasting reads the local clipboard (`pbpaste` on macOS, `wl-paste` or
`xclip` on Linux).

Recent yanks and deletes are kept too; `Space "` lists them. See
[Registers](../reference/registers.md).
