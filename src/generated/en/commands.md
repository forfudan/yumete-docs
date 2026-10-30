<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | Arguments | What it does |
| --- | --- | --- |
| `:cd` | `<path>` | change the working directory |
| `:pwd` |  | show the working directory |
| `:open` `:o` `:e` `:edit` | `<path>` | open a file |
| `:new` `:enew` |  | start an empty buffer |
| `:write` `:w` | `<path>` | save; a path writes a copy, `:write-as` moves to it |
| `:write-all` `:wa` |  | save every file that changed |
| `:write-as` | `<path>` | save under a new name and edit that one (`:w <path>` only copies) |
| `:recover` |  | ask whether to use the draft |
| `:reload` |  | read the file again; ! throws away what you changed here |
| `:reload-config` |  | after editing config.toml, without restarting |
| `:reload-auto` | `on｜off｜toggle` | re-read by itself when the file changes outside — a warning, not a re-read, when you have changes of your own |
| `:readonly` `:ro` | `on｜off｜toggle` | read-only: lock this one against editing |
| `:goto` | `<行號>` | go to a line (`:42` will do) |
| `:count` `:wc` |  | how much has been written; `:count-progress` for today, `:count-target` for a daily goal |
| `:count-progress` |  | how much was written today, and how far the target still is |
| `:count-target` | `<字數>｜off` | how many words a day; `:count-target off` stops counting against one |
| `:check-usage` |  | check usage: where the text wrote the other spelling of something it usually spells one way |
| `:check-config` |  | check the config: the line that voids the whole file, and the keys nobody reads |
| `:check-names` |  | check names: a wiki name written with one homophone out of place |
| `:diagnostics-all` |  | everything the language servers have complained about, as a listing gf can walk |
| `:check-charset` |  | check the character set: characters no current standard carries — the ones a typesetter's font will not have |
| `:check-merge` |  | list the merge conflicts in this file |
| `:check-punct` |  | check punctuation: half-width marks in Chinese, `...` for ……, and a 「 nothing closes |
| `:convert` | `s｜t｜tw｜hk｜jp｜c｜g s｜t｜tw｜hk｜jp｜c｜g` | 簡繁 conversion, run by opencc — :convert lists the pairs it can do |
| `:convert-opencc` |  | whether opencc is installed, where, and which version |
| `:convert-opencc-install` |  | install opencc — run here on macOS, printed for you elsewhere |
| `:convert-opencc-update` |  | bring opencc up to date |
| `:quit` `:q` |  | close this file; leave only when it was the last one (`quit!` ignores changes) |
| `:quit-all` `:qa` |  | close every open file, then leave (short: :qa) |
| `:write-quit` `:wq` | `<path>` | always save, then leave (short: :wq; :x saves only if changed) |
| `:write-quit-all` `:wqa` `:xa` |  | save every file that changed, then leave |
| `:exit` `:x` `:xit` | `<path>` | save if changed, then leave (short: :x, also :xit) |
| `:update` `:up` |  | save if changed, and stay (short: :up) |
| `:undo` `:u` |  | undo the last change |
| `:earlier` `:ear` | `<步數>｜<時間>` | undo to so many steps or so long ago (5m, 1h) |
| `:later` `:lat` | `<步數>｜<時間>` | redo to so many steps or so long on |
| `:redo` `:red` |  | redo |
| `:word` `:wd` |  | words: which list, the mark, the level |
| `:word-mark` | `off｜color｜ink｜tint｜line｜字色｜墨色` | word mark |
| `:wiki` | `<詞條名>` | look an entry up by name — misspelt or out of order still finds it |
| `:wiki-edit` |  | open this project's .yumete/wiki.md, existing or not |
| `:wiki-global` |  | open the global wiki.md — what a whole series shares |
| `:keymap-yumete-flavor` | `on｜off｜toggle` | the Yumete keymap flavour: a small set of departures over helix/vim. Bare reports it |
| `:wiki-panel` | `on｜off｜toggle` | keep the entry in the sidebar — while it is open it no longer floats |
| `:wiki-mark` | `color｜line｜off` | how a wiki name is marked in the text: 金, an underline, or not at all |
| `:wiki-where` |  | where the wiki looked: which files were read, how many entries each, what cannot be marked |
| `:wiki-reload` |  | read the wiki and every file it includes again |
| `:word-list` |  | which word list is in force |
| `:word-list-local` |  | open this project's word list, .yumete/words.txt — names of people and places |
| `:word-list-global` |  | open the global word list, segmentation.txt |
| `:word-list-reload` |  | reread both word lists, this project's and the global one |
| `:word-level` | `off｜strict｜balanced｜full` | word level: how readily characters join into words |
| `:word-discover` |  | mine this file's own words: the names no dictionary has |
| `:word-discover-working` |  | mine the working directory's own words |
| `:word-discover-project` |  | mine the project's own words |
| `:word-habit` |  | habit words: what this one says far more than ordinary text does |
| `:vertical` |  | turn this page down |
| `:horizontal` |  | turn this page across |
| `:vertical-keys` `:vk` | `logical｜visual｜<logical｜visual>` | whether hjkl follow the text or the screen when the page runs down |
| `:theme` | `ink｜one-dark｜github｜monokai｜dracula｜tokyo-night｜catppuccin｜gruvbox｜bw｜morandi｜<主題名>` | theme: which set of inks (light or dark is :theme-mode) |
| `:theme-mode` | `system｜dark｜light` | dark or light (system asks the terminal) |
| `:language` `:lang` | `zh｜zhs｜en` | which language the editor speaks: `zh` 繁體 / `zhs` 简体 / `en` English |
| `:version` `:ver` |  | which build this is, and where the config, data and log live |
| `:keymap` | `helix｜vim` | keymap preset: helix (default) or vim — vim's x s dd ^ $ translated |
| `:keymap-actions` |  | list every action a key can be bound to |
| `:info` |  | this file: where it is, how big, how many lines and characters, its language, which servers watch it |
| `:instant-info` | `dictionary｜wiki｜record｜docs｜diagnostics｜change` | info: which of record / diagnostics / dictionary / wiki / docs follows the cursor (blank: by the file) |
| `:rules` | `<欄>…｜off` | tint these columns: :rules 80 100 120; bare is 80 and 100, off clears them |
| `:theme-fill` | `on｜off｜toggle` | whether code and quotations sit on a ground (they do not by default) |
| `:shot` | `screen｜png｜html｜txt <path>` | a picture: the clipboard by default, or a file with `png`/`html`/`txt` |
| `:yume` `:y` | `on｜off` | the Yume input engine's switch: on (中文) or off |
| `:yume-where` |  | where the 碼表 and other data are looked for, in order |
| `:yume-which` |  | which scheme is in use, and where its 碼表 came from |
| `:yume-scheme` | `lingming｜xingchen｜qingyun｜riyue｜pinyin` | start typing: load a scheme (with no name, the configured one) |
| `:yume-chaifen` | `on｜off｜toggle` | the 拆分 annotation beside the candidates |
| `:yume-commit` | `default｜delayed｜unique｜fluency｜auto` | commit method: default (the scheme's own), delayed (頂字), unique, fluency (whole sentence) |
| `:yume-panel` | `box｜bottom｜inline` | where the candidates are drawn: box by the caret, bottom on the bottom line, inline on the line under the caret |
| `:yume-inline-preedit` | `off｜composition｜preview` | where the composition shows: off in the candidate bar, composition or preview in the text |
| `:yume-menu-size` | `<1–9>` | how many candidates a page holds (1-9, 6 by default) |
| `:yume-autocompletion` | `on｜off｜toggle` | autocompletion: offer candidates before the code is finished |
| `:yume-installed` |  | use the 碼表 the system has installed (builtin's other half) |
| `:yume-builtin` |  | use the built-in 靈明 table, whatever else is installed |
| `:yume-table` | `<path>` | use your own table (a Rime .dict.yaml will do) |
| `:syntax` `:syn` | `markdown｜typst｜text｜python｜javascript｜json｜yaml｜toml｜html｜css｜ada｜c｜gas｜go｜java｜nasm｜pascal｜r｜rust｜<語法>` | which markup this file is written in (with no argument, which one it is now) |
| `:pipe` | `<命令>` | send the selection through a terminal command and take back its output |
| `:sh` | `<命令>` | run a command and keep its output in a buffer |
| `:!command` |  | hand the terminal over and watch it run (vi's spelling) |
| `:which-wrap` | `<字母>` | which keys cross a line end, spelled as in vim: b h l < > ~ — vim keys only |
| `:view-wrap` | `on｜off｜0｜<幾欄>` | wrap long paragraphs to the next row; `:view-wrap 50` sets a measure, `off` stops wrapping |
| `:view-wrap-vertical` | `0｜<幾字>` | how many characters go in one vertical column; `0` follows the window |
| `:view-margin` | `never｜dense｜loose｜always` | margin: the lane for readings, hung marks, emphasis dots and 平仄 |
| `:view-pages-horizontal` | `<1–4>` | pages, horizontal: side-by-side columns, the text running on from the left one to the right |
| `:view-pages-vertical` | `<1–4>` | pages, vertical: divide the vertical page across — top right to top left, then bottom right to bottom left |
| `:view-sentence` | `on｜off｜toggle` | one sentence to a column — a view of the page, not an edit |
| `:view-hanging` | `on｜off｜toggle` | hanging punctuation: 句讀 sit in the margin |
| `:view-numbers-fill` | `on｜off｜toggle` | whether the line-number band has a ground of its own (no by default, in both layouts) |
| `:view-diff` | `on｜off｜toggle` | change bar: the cell beside the line number says which lines differ from git |
| `:view-typewriter` | `on｜off｜toggle` | typewriter: the row you are writing stays in the middle and the paper moves |
| `:view-focus` | `on｜off｜toggle` | focus: the paragraph you are writing stays lit and the rest of the page stands back |
| `:view-meter` | `on｜off｜toggle` | 平仄: the tone class of every character in the margin, 韻腳 at the end of a 句 |
| `:view-punct` | `on｜off｜toggle` | punctuation hints: the full-width mark a half-width one should have been |
| `:view-code` | `on｜off｜toggle` | code colours: code in a fence, coloured by its own grammar |
| `:view-long-line` | `off｜<幾字>` | stop colouring a line past this many characters |
| `:view-hud` | `off｜basic｜full` | the little sign beside the caret: nothing, a pill, a bordered panel |
| `:view-preview` | `on｜off｜toggle` | hand it to a real typesetter and read it in a browser |
| `:render` | `off｜basic｜full` | how much of the result the page shows: source, coloured, WYSIWYG |
| `:indent` | `off｜basic｜full｜<幾格，至多 8>` | how a paragraph opens: `off` / `basic` (indented, blank line kept) / `full` (the blank line folded too), or a width |
| `:indent-tab` | `spaces｜tab` | what Tab types: spaces or a tab (Shift-Tab types the other) |
| `:indent-width` | `<幾格，1–16>` | indent width: the spaces Tab types, and how far > and < shift |
| `:reflow` | `<幾欄>` | refill the selection to a width (80 columns by default) |
| `:auto-pairs` | `off｜basic｜full` | type an opening bracket and its closer comes too: off, basic, full; bare says which it is now |
| `:indent-hint` | `none｜color｜symbol` | what is drawn in a paragraph's opening squares |
| `:table` | `<行>x<欄>` | an empty table: `:table 3 4` is three rows by four columns, the first row the headings; only on a blank line |
| `:table-render` | `off｜basic｜window` | how much of a table is drawn: the source, basic, or window view; bare says which it is now |
| `:table-check` |  | look the whole table over: repeated row names, components with no row, rows of the wrong width |
| `:table-rules` | `off｜color｜line｜<樣式> solid｜dash｜double` | column rules: how the columns are told apart |
| `:table-sort` | `<欄> a｜d …` | sort by these columns: `sort 1 a 2 d` is column 1 ascending, then column 2 descending |
| `:replace` `:r` | `<path>` | search and replace |
| `:replace-buffers` `:rb` |  | replace across every open buffer |
| `:replace-working` `:rw` |  | search and replace in the working directory |
| `:replace-project` `:rp` |  | search and replace in the project |
| `:pipe-before` | `<命令>` | run a terminal command and put its output before the selection |
| `:pipe-after` | `<命令>` | run a terminal command and put its output after the selection |
| `:read` | `<path>` | put a file's contents after the selection |
| `:pipe-to` | `<命令>` | send the selection through a terminal command and keep nothing back |
| `:yuhao` |  | open the Yuhao input method website |
| `:search` `:s` `:grep` | `<path>` | search: open the search panel — across files, with more options |
| `:search-buffers` `:sb` |  | search every open buffer |
| `:search-working` `:sw` |  | search the working directory |
| `:search-project` `:sp` |  | search the project |
| `:sidebar` | `off｜explorer｜buffers｜outline｜search｜info` | the sidebar: bare says what is open, `off` closes it, a name opens that panel |
| `:table-detail` | `on｜off｜toggle` | the record panel: on, off, or a width |
| `:table-numbers` | `on｜off｜toggle` | the row of column numbers — what ␣t3/ and ␣t20,20g count with |
| `:table-header` | `on｜off｜toggle` | whether the first row names the columns or is a row like any other |
| `:table-schema` |  | open this table's schema in the other region — writing a starting one if there is none |
| `:table-jump` | `<列名>` | go to the row this table names (`:table-jump 木`) |
| `:table-find` | `row｜column｜<字符串> <字符串>` | search: `row` runs across (that is `/`), `column` runs down (that is Space t / in a table) |
| `:paste-table` | `<格式> [<格式>]` | paste the clipboard's table as the named format; with two words the first is the source |
| `:convert-table` | `<格式> [<格式>]` | convert to the named format (csv, tsv, pipe); with two words the first is the source |
| `:wheel` | `<幾行，1–10>` | how far one notch of the wheel moves; `:wheel 1` is the terminal's own |
| `:clipboard` |  | the paste menu: the clipboard and what was yanked, pick one |
| `:clipboard-yank` |  | put the selection on the system clipboard |
| `:clipboard-paste` |  | paste from the system clipboard |
| `:buffer` |  | the open files: list, switch, close |
| `:buffer-next` `:bn` |  | the next one |
| `:buffer-previous` `:bp` |  | the previous one |
| `:buffer-close` `:bc` |  | close this one (`close!` ignores changes) |
| `:format` `:fmt` |  | format this file the way the config says ([language.markdown] format = …) |
| `:run` | `<名字>` | run the command this language names in the config |
| `:markdown-footnote` |  | a footnote: the next free number, and its note opened with it |
| `:markdown-footnote-inline` |  | an inline note ^[…], which does not go to the foot |
| `:settings` `:set` |  | a full page of settings, each with a name and a note; :w saves |
| `:resume` |  | take up this directory's last session — adds, closes nothing |
| `:recent-files` |  | files opened under this project, newest first |
| `:recent-files-global` |  | files opened anywhere, newest first |
| `:recent-projects` |  | the directories a session was kept for |
| `:tutor` |  | a lesson: the text is copied into a file of your own, and you learn by editing it |
| `:help` `:h` | `chinese｜vertical｜table｜commands｜<題目>` | the keys and the commands, opened as a file you can read and search |
| `:export` `:ex` | `html｜typst｜csv｜tsv <path>` | write it out as html or typst, layout and all |
| `:diff` | `<path>` | what changed, by word rather than by line |
| `:lsp-rename` | `<新名>` | rename the name under the caret everywhere, through the language server |
| `:git-show` | `<提交>` | the committed draft, read-only, in the other region |
| `:git-diff` | `<提交>` | against what git has, word by word: HEAD unless a commit is named |
| `:toc` `:outline` | `<第幾條>` | list the headings; `:toc 3` goes to the third |
| `:ruby` |  | edit the reading here |
| `:ruby-render` | `off｜basic｜full` | reading render mode: the source, coloured, laid out beside the base; with no argument it reports the mode |
| `:ruby-auto` |  | write the readings in, by word (the selection, or the file) |
| `:ruby-auto-rare` |  | annotate only the characters outside 通用規範漢字表 |
| `:ruby-html` | `on｜off｜toggle` | read `<ruby>` |
| `:ruby-typst` | `on｜off｜toggle` | read `#ruby(…)` |
| `:ruby-format` | `html｜typst` | rewrite the readings in another dialect |
| `:s/pat/rep/` |  | substitute in the selection; `%s` the file, `1-40s` a span, `1,5,9s` a list; flags g i f c n t y j |
