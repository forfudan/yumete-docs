# Commands

Press `:` to open the command line. Every command is listed below it, and the list
narrows as you type. `Enter` runs the line, `Esc` closes it.

## Typing a command

**A space shows what comes next.** After `:view-wrap ` the line lists the words the
command takes (`on`, `off`, `0`, or a number); `Tab` cycles through them, completing
the word you are typing rather than the whole line.

**A prefix nobody else has is enough**, for commands and for their arguments alike.
`:y` is `:yume`, and `:yume-scheme l` is `:yume-scheme lingming`. When a prefix fits two
names, neither is chosen: `:re` begins `recover`, `redo` and `render`, so it is
refused instead of guessed. The shortest spelling of each command is shown in brackets
in the list.

**Declared short names win over the prefix rule**: `:w` is `write` and `:e` is `open`,
even though other commands begin with those letters.

**A hyphen makes a family.** `:buffer-close` is a kind of `:buffer`, `:view-wrap` a kind
of `:view`; the list folds each family under its head (`:view- +17`) and opens it as you
type. Only some commands have a short form, and where there is one it is usually the
initials: `:bc`, `:qa`, `:wa`. A space where
a hyphen belongs is refused with the right spelling, so `:write all` is not read as a
file called `all`.

**A `!` forces.** `:q!` quits without saving, `:export! html` overwrites an existing
file. Only the commands that have something to force take it.

**The line can be edited**: `←` `→`, `Home` `End`, `C-w` deletes a word, `C-u` the
whole line, and `↑` `↓` walk this session's history. `:` and `/` keep separate histories.

## `::` — find a command by what it does

Press `:` on an empty command line (so the line starts `::`) and type what you want to
do instead of a name: `::wrap`, `::sort`, `::vertical`. Commands and keys are on one
list, ranked by how well your words fit their descriptions and a few extra search words
each one carries. Chinese works too (`::竖排`), with the input method on for that line.
`Tab` and `Shift-Tab` step through the list; `Enter` runs the command or presses the
key.

## Running a shell command

| Command | What happens |
| --- | --- |
| `:sh <command>` | runs it and opens the output in a buffer you can search and copy from |
| `:!<command>` | hands the terminal to the command so you can watch it run, then asks for a key to come back |
| `:pipe <command>` | sends the selection through the command and replaces it with the output |
| `:pipe-before` / `:pipe-after` | puts the command's output before or after the selection |
| `:pipe-to <command>` | sends the selection to the command and keeps nothing back |

The command goes through `$SHELL -c`, so pipes and globs work. On a shell line the
prompt reads `Shell:`, `Tab` completes program names (the first word) and file names
(the rest), and the last shell command waits in grey after the cursor for `Tab` to
take.

## Every command

This table is written from the editor's own command list (`ye --docgen`), so it always
matches the version it was generated from.

<!--@include: ../generated/en/commands.md-->
