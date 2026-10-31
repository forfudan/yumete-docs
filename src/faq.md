# FAQ

## How do I change the interface language?

By default yumete follows your system's locale: a Taiwan, Hong Kong or Macau
locale gets traditional Chinese, any other Chinese locale gets simplified
Chinese, and everything else gets English. To choose one yourself, set it in
the config:

```toml
[editor]
language = "zh"    # "auto" (default), "zh" traditional, "zhs" simplified, "en"
```

`:language en` switches for the current session without a restart, and
`ye --lang=en` does it for one run. See
[Configuration](guide/configuration.md).

## Why do I get letters when I type, not Chinese?

The input method is off when yumete starts, so insert mode types letters. Type
`:yume` (or just `:y`) to turn it on; the first time, it loads the scheme's
code table. To have it on from the start:

```toml
[ime]
start = true
```

If it is on and you still get letters, it is in English (`[ABC]`). Tap Shift on
its own to switch between Chinese and English. Terminals that cannot report a lone
Shift (Apple's Terminal, for one) use `C-^` instead; `[editor] language_key`
sets that key. See [The input method](writing/ime.md).

## yumete crashed. Where is my work?

While a file has unsaved changes, yumete keeps a recovery copy beside it, as a
hidden file: `chapter.md` gets `.chapter.md.<number>.yumete-swp`. It is removed when you save
or quit normally. On macOS and Linux, closing the terminal window (`SIGHUP`)
or a `SIGTERM` writes every unsaved file's copy on the way out. After a crash,
open the file again and yumete asks whether to
recover the copy, throw it away, or leave it for later. `:recover` asks again.
Typing in an unnamed buffer is kept too, in the data directory, and comes back
the same way.

Recovering replaces the file's text in the buffer; nothing is saved until you
`:w`, and `u` undoes it. See [Files, saving and changes](guide/files.md).

## Where is the config?

| What | Where |
| --- | --- |
| Your config | `~/.config/yumete/config.toml` (`$XDG_CONFIG_HOME/yumete/` if set; `%APPDATA%\yumete\` on Windows) |
| A project's config | `.yumete/config.toml` in the project; its values override yours, key by key |
| Data, sessions, log | `~/.local/share/yumete/` (`$XDG_DATA_HOME/yumete/` if set; `%APPDATA%\yumete\` on Windows) |

`:version` shows the exact paths on your machine. `:settings` opens a panel of
every setting with a note on each, and `:w` there saves it. After editing a
file by hand, `:reload-config` applies it, and `:check-config` points out lines
it cannot read. See [Configuration](guide/configuration.md).

## Some cells have an amber background. What is that?

A hidden character is next to them: a zero-width space, a soft hyphen, a
byte-order mark, or a bidi control. A tinted space is a space that is not a
plain one, such as a no-break space. Put the cursor on the tinted cell and the
status line names the character. To turn this off:

```toml
[editor]
unicode_alarm = false
```

See [Checks and counts](writing/checks.md#invisible-characters).

## How do I hide the count on the status line?

Set `[editor] status_count = "off"`, or `"all"` to show it in code files too.
See [Settings](reference/settings.md).

## How do I make `ye` reopen yesterday's files?

`ye -r` reopens what was open last time in this project. Set
`[editor] session = true` to do it every time. See
[Files, saving and changes](guide/files.md).

## Can I use vim keys?

Yes. Set `[keys] preset = "vim"`. See [Coming from vim](from/vim.md).

## What is not there yet?

- **Reading marks** (the circles and dots used in classical texts). They can be
  drawn in the margin, but there is no markup for them yet.
- **Rotated Latin text in vertical layout.** A terminal cannot rotate letters,
  so a long Latin run stacks letter by letter down the column. A few
  half-width characters, four by default, can sit side by side in one square
  (see [Vertical layout](writing/vertical.md)), but not a sentence.
- **Editor regions side by side, or more than two.** `C-w s` splits the editor
  into two, one above the other, and that is all. See
  [Windows and the sidebar](guide/windows.md).
