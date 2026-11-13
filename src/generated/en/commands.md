<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | Arguments | What it does |
| --- | --- | --- |
| `:cd` | `<path>` | change the working directory |
| `:pwd` |  | show the working directory |
| `:vsplit` `:vs` | `<path>` | split a window beside (as C-w v), optionally opening a file |
| `:hsplit` `:hs` `:split` | `<path>` | split a window below (as C-w s), optionally opening a file |
| `:vnew` |  | open a blank window beside (as C-w n v) |
| `:hnew` |  | open a blank window below (as C-w n s) |
| `:open` `:o` `:e` `:edit` | `<path>` | open a file |
| `:new` `:enew` `:ene` |  | new empty buffer |
| `:tabnew` `:tabe` `:tabedit` | `<path>` | vim's :tabnew: a new scratch buffer, or the named file |
| `:write` `:w` | `<path>` | save; with a path, save a copy (`:write-as` switches to it) |
| `:write-all` `:wa` |  | save every file that changed |
| `:write-as` | `<path>` | save under a new name and switch to it (`:w <path>` only writes a copy) |
| `:recover` |  | ask whether to restore unsaved changes |
| `:encoding` | `utf-8｜gb18030｜big5｜shift-jis` | the encoding the file is saved in: utf-8, gb18030, big5 or shift-jis |
| `:reload` |  | reload the file; ! discards your changes |
| `:reload-config` `:config-reload` |  | reload config.toml without restarting |
| `:config-open` |  | open the global config.toml |
| `:config-open-workspace` |  | open this project's .yumete/config.toml |
| `:reload-auto` | `on｜off` | reload when the file changes on disk; only warn if you have unsaved changes |
| `:readonly` `:ro` | `on｜off` | read-only: lock this file against editing |
| `:goto` | `<行號>` | go to a line (`:42` also works) |
| `:count` `:wc` |  | word count; `:count-progress` for today, `:count-target` for a daily goal |
| `:count-progress` |  | today's word count, and how far to the target |
| `:count-target` | `<字數>｜off` | daily word target; `:count-target off` turns it off |
| `:check-usage` |  | check usage: where a word is spelled two ways, list the less common spelling |
| `:check-config` |  | check the config: the line that breaks the whole file, and unused keys |
| `:check-names` |  | check names: wiki names written with a wrong homophone |
| `:diagnostics-all` |  | list every problem the language servers report; gf jumps to each |
| `:check-charset` |  | check the character set: characters in no standard list, which most fonts lack |
| `:check-merge` |  | list the merge conflicts in this file |
| `:check-punct` |  | check punctuation: half-width marks in Chinese, `...` for ……, and unclosed 「」()《》 |
| `:convert` | `s｜t｜tw｜hk｜jp｜c｜g s｜t｜tw｜hk｜jp｜c｜g` | simplified/traditional conversion via opencc; :convert lists the pairs |
| `:convert-opencc` |  | whether opencc is installed, where, and which version |
| `:convert-opencc-install` |  | install opencc (runs on macOS; elsewhere prints the command) |
| `:convert-opencc-update` |  | update opencc |
| `:quit` `:q` |  | close this region; in the last window, quit the editor (`quit!` discards changes) |
| `:quit-window` `:close` `:clo` |  | close this region, but never the last window (vim's `:close`, short: `:clo`) |
| `:quit-others` `:only` `:on` |  | keep only this window; close other windows and sidebars (vim's `:only`, short: `:on`) |
| `:quit-all` `:qa` |  | close all files and quit (short: :qa) |
| `:write-quit` `:wq` | `<path>` | always save, then quit (short: :wq; :x saves only if changed) |
| `:write-quit-all` `:wqa` `:xa` |  | save every file that changed, then quit |
| `:exit` `:x` `:xit` | `<path>` | save if changed, then quit (short: :x, also :xit) |
| `:update` `:up` |  | save if changed, and stay (short: :up) |
| `:undo` `:u` |  | undo the last change |
| `:earlier` `:ear` | `<步數>｜<時間>` | undo a number of steps, or back in time (5m, 1h) |
| `:later` `:lat` | `<步數>｜<時間>` | redo a number of steps, or forward in time |
| `:redo` `:red` |  | redo |
| `:word` `:wd` |  | word segmentation: list, mark, level |
| `:word-mark` | `off｜color｜ink｜tint｜line｜字色｜墨色` | word mark |
| `:wiki` | `<詞條名>` | look up an entry by name, even misspelt or out of order |
| `:wiki-edit` |  | open this project's .yumete/wiki.md, creating it if needed |
| `:wiki-global` |  | open the global wiki.md, shared by a whole series |
| `:keymap-yumete-flavor` | `off｜basic｜full` | Yumete keymap flavour: a few changes on top of helix/vim; no argument shows the current one |
| `:links` | `list｜graph｜off` | links panel: what [[links]] here and what this links to; list, graph or off |
| `:links-export` |  | export the project's link graph to .yumete/graph.html and open it in the browser |
| `:links-reindex` |  | reread the project's [[links]] |
| `:wiki-mark` | `color｜line｜off` | how wiki names are marked in the text: gold, underline, or none |
| `:wiki-where` |  | wiki sources: files read, entries in each, and what cannot be marked |
| `:wiki-reload` |  | reload the wiki and every file it includes |
| `:word-list` |  | the word list in use |
| `:word-list-local` |  | open this project's word list, .yumete/words.txt (names of people and places) |
| `:word-list-global` |  | open the global word list, segmentation.txt |
| `:word-list-reload` |  | reread both word lists, this project's and the global one |
| `:word-level` | `off｜strict｜balanced｜full` | word level: how readily characters join into words |
| `:word-discover` |  | mine this file's own words: the names no dictionary has |
| `:word-discover-working` |  | mine the working directory's own words |
| `:word-discover-project` |  | mine the project's own words |
| `:word-habit` |  | habit words: those this text uses far more than usual |
| `:vertical` | `on｜off` | vertical layout: on, off for across, alone to turn it round |
| `:vertical-keys` `:vk` | `logical｜visual｜<logical｜visual>` | in vertical text, whether hjkl follow the text or the screen |
| `:theme` | `ink｜one-dark｜github｜monokai｜dracula｜tokyo-night｜catppuccin｜gruvbox｜bw｜morandi｜<主題名>` | colour theme (light or dark: :theme-mode) |
| `:theme-mode` | `system｜dark｜light` | dark or light (system follows the terminal) |
| `:language` `:lang` | `zht｜zhs｜en｜<語言>` | interface language: `zht` 繁體 / `zhs` 简体 / `en` English |
| `:version` `:ver` |  | version, and where config, data and logs live |
| `:keymap` | `helix｜vim` | keymap preset: helix (default) or vim (x s dd ^ $ and more) |
| `:keymap-actions` |  | list every action a key can be bound to |
| `:info` |  | file info: path, size, lines and characters, language, attached language servers |
| `:instant-info` | `dictionary｜wiki｜record｜docs｜diagnostics｜change` | info: which of record / diagnostics / dictionary / wiki / docs follows the cursor (none given: by file type) |
| `:rules` | `<欄>…｜off` | column rulers: :rules 80 100 120; bare is 80 and 100, off clears them |
| `:theme-fill` | `on｜off` | whether code and quotations get a background (off by default) |
| `:shot` | `screen｜png｜html｜txt <path>` | screenshot: to the clipboard by default, or a file in Downloads with `png`/`html`/`txt` |
| `:yume` `:y` | `on｜off` | Yume input method: on or off |
| `:yume-where` |  | where the table and other data are looked for, in order |
| `:yume-which` |  | the current scheme and where its table came from |
| `:yume-scheme` | `lingming｜xingchen｜qingyun｜riyue｜pinyin` | start typing: load a scheme (with no name, the configured one) |
| `:yume-annotation` | `off｜next｜multi｜double｜<模式名>` | candidate annotations: off, next, or a named mode |
| `:yume-commit` | `default｜delayed｜unique｜fluency｜auto` | commit method: default (the scheme's own), delayed (頂字), unique, fluency (whole sentence) |
| `:yume-charset` | `all｜common｜tonggui｜harmonic` | charset filter: all, common, simplified or traditional characters |
| `:yume-charset-sort` | `original｜common｜tonggui｜harmonic` | charset sort: original, or common, simplified or traditional first |
| `:yume-lanes` | `tonggui｜tongfan｜tai｜common｜harmonic｜guji｜gang｜default` | sentence lanes: put one first, or default for the usual order |
| `:yume-panel` | `box｜bottom｜inline` | where the candidates go: box by the cursor, bottom on the last line, inline under the cursor |
| `:yume-inline-preedit` | `off｜composition｜preview` | where the composition shows: off in the candidate bar, composition or preview in the text |
| `:yume-menu-size` | `<1–9>` | candidates per page (1-9, 6 by default) |
| `:yume-autocompletion` | `on｜off` | autocompletion: offer candidates before the code is finished |
| `:yume-installed` |  | use the installed table (the opposite of builtin) |
| `:yume-builtin` |  | use this scheme's built-in table, ignoring installed ones |
| `:yume-table` | `<path>` | use your own table (a Rime .dict.yaml will do) |
| `:set` `:se` | `<選項>` | vim's :set for modeline options: ft, ts, sw, et, tw; no argument opens the settings panel |
| `:setlocal` `:setl` | `<選項>` | vim's :setlocal: the same options as :set, for this buffer; no argument shows their values |
| `:setfiletype` `:setf` | `<文件類型>` | vim's :setf, as :set ft= |
| `:syntax` `:syn` | `markdown｜typst｜text｜python｜javascript｜json｜yaml｜toml｜html｜css｜ada｜c｜gas｜go｜java｜nasm｜pascal｜r｜rust｜<語法>` | the markup this file uses (no argument shows the current one) |
| `:pipe` | `<命令>` | pipe the selection through a shell command and replace it with the output |
| `:sh` | `<命令>` | run a command and show its output in a buffer |
| `:!command` |  | hand the terminal to a command and watch it run (vi's spelling) |
| `:which-wrap` | `<字母>` | which keys cross a line end (vim keymap): b h l < > ~ |
| `:line-numbers` `:ln` | `absolute｜relative｜none` | line numbers: absolute, relative to the cursor, or none; no argument shows the current one |
| `:view-wrap` | `on｜off` | soft wrap, on or off; `:view-wrap-width` sets the width |
| `:view-wrap-width` | `0｜<幾欄>` | text width in columns; `0` follows the window |
| `:view-wrap-height` | `0｜<幾字>` | characters per vertical column; `0` follows the window |
| `:view-margin` | `never｜dense｜loose｜always` | margin: whether to leave room for readings, hanging punctuation, emphasis dots and tones |
| `:view-pages-horizontal` | `<1–4>` | pages, horizontal: columns side by side, the text flowing left to right |
| `:view-pages-vertical` | `<1–4>` | pages, vertical: divide the vertical page across — top right to top left, then bottom right to bottom left |
| `:view-sentence` | `on｜off` | one sentence per column: display only, the file is unchanged |
| `:view-hanging` | `on｜off` | hanging punctuation: stops and commas sit in the margin |
| `:view-numbers-fill` | `on｜off` | whether the line-number gutter has its own background (off by default, both layouts) |
| `:view-diagnostics` | `hint｜info｜warning｜error｜off` | end-of-line diagnostics: hint, info, warning, error or off |
| `:view-diff` | `on｜off` | change bar: marks lines that differ from git, beside the line number |
| `:view-typewriter` | `on｜off` | typewriter: the cursor line stays centred |
| `:view-focus` | `on｜off` | focus: the current paragraph stays bright, the rest dims |
| `:view-meter` | `on｜off` | 平仄: the tone class of every character in the margin, and rhymes at line ends |
| `:view-punct` | `on｜off` | punctuation hints: show the full-width mark next to a half-width one |
| `:view-code` | `on｜off` | code highlighting: fenced code coloured by its language |
| `:view-long-line` | `off｜<幾字>` | stop colouring a line past this many characters |
| `:view-hud` | `off｜basic｜full` | cursor hint: off, pill, panel |
| `:preview` | `on｜off` | show or hide the typeset page: in a window beside the text, or in a browser when a window cannot be drawn |
| `:preview-window` | `on｜off` | the typeset page in a window beside the text, following the cursor (needs tinymist, and Ghostty or kitty) |
| `:preview-browser` | `on｜off` | typeset with a real typesetter and preview in a browser |
| `:preview-fit` | `width｜page` | how big the page window draws the page: as wide as the window, or whole |
| `:preview-theme` | `on｜off` | draw the preview's page in the theme's colours, the paper as the background and black as the text colour, or as printed |
| `:preview-vertical` | `on｜off` | set the Markdown preview vertically while the text window is vertical: columns from the right, as the vertical export sets them |
| `:preview-redraw` |  | draw the previews again at their windows' size now |
| `:render` | `off｜basic｜full` | how much is rendered: source, coloured, WYSIWYG |
| `:indent` | `off｜basic｜full｜<幾格，至多 8>` | first-line indent: `off` / `basic` (blank lines kept) / `full` (blank lines hidden), or a width |
| `:indent-tab` | `spaces｜tab` | what Tab types: spaces or a tab (Shift-Tab types the other) |
| `:indent-width` | `<幾格，1–16>` | indent width: the spaces Tab types, and how far > and < shift |
| `:hard-wrap` | `<幾欄>` | hard-wrap to a width without changing content: the selection or the unit at the cursor; 0 joins each into one line; no number uses the hard_wrap setting |
| `:align` | `<符號>` | align the selected lines on a character (= by default) |
| `:split-join` |  | put the items in the brackets around the cursor one per line, or join them back |
| `:reflow` | `<幾欄>` | reflow the selection to a width (80 columns by default) |
| `:auto-pairs` | `off｜basic｜full` | auto-close brackets: off, basic, full; no argument shows the current one |
| `:indent-hint` | `none｜color｜symbol` | what to show in the indent cells |
| `:table` `:ta` `:tab` | `<行>x<欄>` | insert an empty table: `:table 3 4` is three rows by four columns, the first row headings; only on a blank line |
| `:table-render` | `off｜basic｜window` | table display: source, basic or window view; no argument shows the current one |
| `:table-check` |  | check the whole table: duplicate row names, wrong column counts, characters outside the standards |
| `:table-rules` | `off｜color｜line｜<樣式> solid｜dash｜double` | column rules: how columns are separated |
| `:table-sort` | `<欄> a｜d …` | sort by these columns: `sort 1 a 2 d` is column 1 ascending, then column 2 descending |
| `:replace` `:r` | `<path>` | search and replace |
| `:replace-buffers` `:rb` |  | replace across every open buffer |
| `:replace-working` `:rw` |  | search and replace in the working directory |
| `:replace-project` `:rp` |  | search and replace in the project |
| `:pipe-before` `:insert-output` | `<命令>` | run a shell command and insert its output before the selection |
| `:pipe-after` `:append-output` | `<命令>` | run a shell command and insert its output after the selection |
| `:read` | `<path>` | put a file's contents after the selection |
| `:view-fold` |  | make a fold of the selected lines |
| `:keep-pipe` | `<命令>` | keep the selections a shell command succeeds on |
| `:decimo` | `<表達式>` | evaluate an expression with decimo and insert the result after the selection |
| `:decimo-replace` | `<表達式>` | evaluate an expression with decimo (the selection when none is written) and replace the selection with the result |
| `:pipe-to` | `<命令>` | pipe the selection to a shell command, ignoring the output |
| `:yuhao` |  | open the Yuhao input method website |
| `:search` `:s` `:grep` | `<path>` | open the search panel: across files, with more options |
| `:search-buffers` `:sb` |  | search every open buffer |
| `:search-working` `:sw` |  | search the working directory |
| `:search-project` `:sp` |  | search the project |
| `:sidebar-explorer` | `on｜off` | show or hide the file tree in the left sidebar; the cursor goes into it |
| `:sidebar-buffers` | `on｜off` | show or hide the open files in the left sidebar; the cursor goes into it |
| `:sidebar-outline` | `on｜off` | show or hide the outline in the left sidebar; the cursor goes into it |
| `:sidebar-search` | `on｜off` | show or hide search in the left sidebar; the cursor goes into it |
| `:sidebar-links` | `on｜off` | show or hide the links in the left sidebar; the cursor goes into it |
| `:sidebar-info` | `on｜off` | show or hide the info panel in the right sidebar; the cursor stays in the text |
| `:table-detail` | `on｜off` | the record panel: show or hide it |
| `:table-numbers` | `on｜off` | the row of column numbers — what ␣t3/ and ␣t20,20g count with |
| `:table-header` | `on｜off` | whether the first row is a header or data |
| `:table-schema` | `write` | show the table schema; write saves it to datapackage.json next to the data |
| `:table-delimiter` | `<分隔符>` | read this file as a table split on that delimiter, and remember it (tab, space, comma, semicolon or a character) |
| `:table-hide` | `<欄號>` | hide column N (not drawn, still read and written), and remember it |
| `:table-show` | `<欄號>` | show hidden column N again |
| `:table-jump` | `<列名>` | go to the row with this name (`:table-jump 木`) |
| `:table-find` | `row｜column｜<字符串> <字符串>` | search: `row` by row (as `/`), `column` by column (as Space t / in a table) |
| `:paste-table` | `<格式> [<格式>]` | paste the clipboard's table as the named format; with two words the first is the source |
| `:convert-table` | `<格式> [<格式>]` | convert to the named format (csv, tsv, pipe); with two words the first is the source |
| `:wheel` | `<幾行，1–10>` | lines per wheel notch; `:wheel 1` is the terminal's own step |
| `:clipboard` `:reg` |  | paste menu: pick from the clipboard or past yanks (also Space, then a double quote) |
| `:clipboard-yank` |  | copy the selection to the system clipboard |
| `:clipboard-paste` |  | paste from the system clipboard |
| `:buffer` |  | open files: list, switch, close |
| `:buffer-next` `:bn` |  | next |
| `:buffer-previous` `:bp` |  | previous |
| `:buffer-close` `:bc` |  | close this file (`buffer-close!` discards changes) |
| `:format` `:fmt` |  | format this file as configured ([language.markdown] format = …) |
| `:run` | `<名字>` | run the command configured for this language |
| `:markdown-footnote` |  | footnote: next free number, with its note created |
| `:markdown-footnote-inline` |  | an inline note ^[…], kept in place |
| `:settings` | `<setting>` | settings page, each item explained; a change is written at once, u undoes it |
| `:resume` |  | resume this directory's last session (adds files, closes none) |
| `:recent-files` |  | recent files in this project |
| `:recent-files-global` |  | recent files in all projects |
| `:changed-files` |  | changed files: what git reports, and unsaved buffers (as Space g) |
| `:recent-projects` |  | recent projects |
| `:tutor` |  | tutorial: copies the lesson into a file of your own to learn by editing |
| `:help` `:h` | `chinese｜vertical｜table｜commands｜<題目>` | keys and commands, opened as a searchable file |
| `:export` `:ex` | `html｜typst｜epub｜csv｜tsv vertical｜horizontal｜hanging｜no-hanging｜ruby-html｜no-ruby-html｜ruby-typst｜no-ruby-typst｜ruby-markdown｜no-ruby-markdown｜turn｜jlreq｜page=｜font=｜<path>` | export as html, typst or epub |
| `:export-as-preview` | `html｜pdf｜<path>` | export as the preview draws it: html for Markdown, pdf for Typst |
| `:diff` | `<path>` | show changes, by word rather than by line |
| `:lsp-rename` | `<新名>` | rename the symbol under the cursor everywhere, via the language server |
| `:git-show` | `<提交>` | open a committed version read-only in the other window |
| `:git-diff` | `<提交>` | compare with git word by word; HEAD unless a commit is named |
| `:outline` | `<級>` | how many heading levels the outline lists; `0` closes it; bare reports |
| `:ruby` |  | edit the reading here |
| `:ruby-render` | `off｜basic｜full` | ruby display: source, coloured, or beside the text; no argument shows the current one |
| `:ruby-auto` |  | add readings by word (the selection or the whole file) |
| `:ruby-auto-rare` |  | annotate only characters missing from the mainland, Taiwan and Hong Kong common lists |
| `:ruby-html` | `on｜off` | recognise `<ruby>` |
| `:ruby-typst` | `on｜off` | recognise `#ruby(…)` |
| `:ruby-markdown` | `on｜off` | recognise `{漢字\|かんじ}` |
| `:ruby-format` | `html｜typst｜markdown` | rewrite the readings in another syntax |
| `:s/pat/rep/` |  | substitute in the selection; `%s` the file, `1-40s` a range, `1,5,9s` listed lines; flags g i f c n t y j |
