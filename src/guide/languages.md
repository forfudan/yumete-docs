# Language servers

yumete understands code in two ways. Built-in grammars give every supported language
its colours, indentation, comments and outline, with nothing to install. A **language
server** is a separate program you install yourself; when one is running, yumete shows
its errors and offers its completions, definitions, renames and fixes. The editor speaks
the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/),
the same one helix and VS Code use.

## Supported languages

Each language below has a grammar compiled into yumete. A grammar gives you:

- syntax colours, in code files and in Markdown code fences (```` ```py ````, ```` ```rust ````)
- indentation after an opener, on `Enter` and on `o`
- comments, as in helix: `Space c` or `C-c` comments the lines (and takes off a block
  comment already round them), `Space A-c` uses line comments only, and `Space C` wraps
  exactly what is selected in a block comment, half a line included. In a fenced block
  the comment is the block's language. In Markdown, Typst and HTML, `Space C` over
  several whole lines puts `<!--` and `-->` on lines of their own (the flavour's
  `block_comment_lines`). Under the vim keymap `gc{motion}`, `gcc` and Visual `gc` comment
  lines, as in Neovim (the flavour's `vim_comment_keys`).
- the symbol picker (`Space s`) without a server, and `]f` `[f` to the next or previous function, `]t` `[t` to
  the next or previous class
- text objects such as `mi f` (inside a function) and `mi c` (inside a comment); see
  [match mode](../reference/match.md)

The name in the first column is the one you write in `[lsp.<name>]` and
`[language.<name>]`.

<!--@include: ../generated/en/languages.md-->

## What a server gives you

| Key | What it does |
| --- | --- |
| `gd` `gD` `gy` `gi` | go to the definition, the declaration, the type's definition, the implementation, across files: one is gone to, several open a picker. `C-o` comes back |
| `gr` | every place the name is used: one is gone to, several open a picker showing the line around each |
| `Space k` / `Space K` | documentation for the name under the cursor, in a float / in the sidebar |
| `Space s` / `Space S` | the symbols of this file / of the project, in a picker; the project one asks the server again as you type |
| `Space d` / `Space D` | the diagnostics of this file / of the project, in a picker |
| `Space l` / `Space L` | the diagnostics on this line, in a float / in the sidebar |
| `]d` / `[d` | the next / previous diagnostic; `]D` / `[D` the last / first |
| `Space r` | rename the name everywhere: opens `:lsp-rename` with the old name typed in. Edit it and press `Enter` |
| `Space a` | code actions for the selection: quick fixes, refactors. Pick one from the list |
| `C-n` or `C-x` (Insert) | open the completion list by hand |
| `:diagnostics-all` | every diagnostic from every file, as a `path:line:` listing; `gf` on a line goes there |

In Insert mode, completion opens by itself as you type a word or after `.` and `:`.
`C-n` and `C-p` (or the arrows) move through it, `Tab` takes an item and `Esc` closes it.
Each letter you type narrows the list at once without asking the server again. When
you type `(` or `,` inside a call, the signature appears beside the cursor with the
parameter you are filling in highlighted.

While a float is open, `PageUp`, `PageDown`, `C-u` and `C-d` scroll it instead of the
page.

Diagnostics wait until you leave Insert mode, since a half-typed line is always broken.
In code files they show in a two-cell column in the gutter: a solid red cell for an
error, and a pale cell marked `!` for a warning, `i` for information or `·` for a hint.
The column is drawn in code files, and in a text file a server checks, only while
line numbers are on.

The loudest message of a line is also written after it, as helix's
end-of-line diagnostics: two cells after the text, in the colour of its column,
cut with `…` at the window's edge, and never in the way of the cursor. In
Markdown a line is a paragraph, so the message follows the paragraph's last
row, as in helix and nvim. It is
left off the line you are typing on in Insert mode, and it moves with its line
as you add and remove lines, until the server speaks again.
`:view-diagnostics warning` (or `error`, `info`, `hint`, `off`) sets how loud a
message must be, for this session; `[editor] end_of_line_diagnostics` sets it
for good, with helix's words (`disable`, `hint`, `info`, `warning`, `error`), and
`hint`, every message, is the default.

Rename and code actions can change files you have not opened. Those files are opened,
each gets one undo step, and nothing is saved until you save it.

`gd` in a text file follows footnotes and links instead; see [the page](../writing/page.md).

## Configuring a server

Servers are set in `config.toml`, one table per language:

```toml
[lsp.rust]
command = "rust-analyzer"

[lsp.typescript]
command = "typescript-language-server"
args = ["--stdio"]
```

`command` is the program and `args` its arguments, as a list. The program is started
directly, not through a shell. Writing a language replaces its whole factory entry, and
`command = ""` turns the language's server off.

A language can list several servers, as an array of tables:

```toml
[[lsp.python]]
command = "ty"
args = ["server"]

[[lsp.python]]
command = "pylsp"
```

Every server in the list that is installed is started. Diagnostics come from all of them,
and `Space a` gathers code actions from all of them. Other questions (documentation,
definitions, references, completion, renames) go to the first one in the list that is
running, so put the one that answers those best first.

These come filled in:

| Language | Servers |
| --- | --- |
| `rust` | `rust-analyzer` |
| `go` | `gopls` |
| `mojo` | `mojo-lsp-server` |
| `python` | `ty server`, `pylsp`, `jedi-language-server`, `ruff server` |

For any other language, add a table yourself. `tsx` is its own name, separate from
`typescript`, so a TSX file needs `[lsp.tsx]` too.

### Where yumete looks for the program

Before `PATH`, yumete looks inside the project. Starting from the file's folder and
going up to the outermost git repository, it checks `.venv/bin`, `venv/bin`,
`node_modules/.bin`, and the environments under `.pixi/envs/` and `.direnv/`. A copy
found there wins over one on `PATH`, because it matches the project's own interpreter
and dependencies, and the status line says so when it is used. A `command` with a `/`
in it is taken as a path.

A server starts when you first open a saved file of its language. If none of the
configured programs can be found, the status line says so once. `:diagnostics-all`
names each running server and where its program is.

A project's own `.yumete/config.toml` can set `[lsp.<name>]` too, so a repository can
choose its servers for everyone who opens it.

## Servers for text files

Markdown, Typst and plain text have no server by default. Name one and it is attached,
for example a spelling and grammar checker such as `harper-ls`:

```toml
[[lsp.markdown]]
command = "harper-ls"
args = ["--stdio"]

[[lsp.text]]
command = "harper-ls"
args = ["--stdio"]
```

The text-file names are `markdown`, `typst` and `text`. The server's complaints are under
`Space d`, `Space l` and `]d`, and its fixes under `Space a`.

## Formatting and other commands

`=` asks the language server to format the selection, as helix's does; one
selection at a time, and only a server that formats a range answers.

`:format` (or `:fmt`) does not ask the language server. It runs the command the config
names for the file's language, under `[language.<name>]`:

```toml
[language.markdown]
format = { run = "rumdl check --fix {file}" }

[language.typst]
preview = { run = "tinymist preview --no-open {file}", kind = "server" }
```

`format` is used by `:format`, `preview` by `:view-preview`, and any other name you give
by `:run <name>`. `{file}`, `{dir}` and `{name}` are replaced with the file's path, its
folder and its name. `kind` says how the command runs:

| `kind` | Effect |
| --- | --- |
| `once` (default) | run it, then read the file again |
| `server` | keep it running; `:view-preview off` stops it |
| `filter` | send the text on standard input and replace it with the output; `u` undoes it |

As with servers, the command is not passed to a shell.
