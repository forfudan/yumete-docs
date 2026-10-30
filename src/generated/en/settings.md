<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

### layout

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] layout` | `"horizontal"` | **layout** — whether the page runs across or down (`horizontal` across, `vertical` down) |
| `[editor] vertical_keys` | `"visual"` | **hjkl when the page runs down** — in vertical layout, whether hjkl follow the text or the screen (`logical` logical: h l by character, j k by line, `visual` visual: j k down/up, h l left/right) |
| `[editor] zong_length` | `0` | **column length** — characters to a column when set down; text reads well up to about 32 (8–64) |
| `[editor] zong_gap` | `0` | **column gap** — half-width cells between one column and the next (0–4) |
| `[editor] pages_vertical` | `1` | **pages, vertical** — how many bands a set-down page is cut into across (1–4) |
| `[editor] pages_horizontal` | `1` | **pages, horizontal** — how many columns the horizontal page is cut into, side by side (1–4) |
| `[editor] indent` | `0` | **indent** — cells at the head of a paragraph; the Chinese convention is 2 (0–8) |
| `[editor] measure` | `0` | **measure** — the line really breaks here; what is right of it is margin (0–400) |
| `[editor] hard_wrap` | `0` | **hard-wrap width** — what a bare :hard-wrap fills to; it rewrites the file's line breaks, not the display (1–400) |
| `[editor] ruler` | `0` | **ruler** — a line, not a break: what runs past it changes colour (0–400) |
| `[editor] insert_final_newline` | `true` | **add a final line ending** — on save, add the line ending this file's own lines use when the last one is missing it; an empty file stays empty |
| `[editor] soft_wrap` | `true` | **soft wrap** — long lines fold when set across; off, they run past the right edge |
| `[editor] hanging_punctuation` | `false` | **hanging punctuation** — 。，、？！：；「」 hang in the margin instead of taking a cell |
| `[editor] margin` | `"dense"` | **margin** — when to show the lane that carries readings, emphasis and 平仄 (`never` never, `dense` when dense, `loose` when loose, `always` always) |
| `[editor] tatechuyoko` | `4` | **tatechuyoko** — half-width characters set across inside one cell, so a year is not one digit to a row (2–8) |
| `[editor] paper_ticks` | `0` | **paper ticks** — a faint tick in the margin every so many cells, the way squared paper does (0–64) |
| `[editor] ambiguous_width` | `"auto"` | **ambiguous width** — whether East Asian ambiguous-width characters such as — and … take one cell or two; change it if the caret sits off its character (`auto` ask the terminal, `wide` two cells, `narrow` one cell) |

### marks

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] line_numbers` | `"absolute"` | **line numbers** — the column on the left that numbers the lines; relative numbers count from the caret, which makes jumps easy to type (`absolute` absolute, `relative` relative, `none` none) |
| `[editor] line_number_fill` | `false` | **line number fill** — fill the line-number column with a faint ground, not just the number |
| `[editor] diff_gutter` | `true` | **diff gutter** — the cell beside the line number marks lines that differ from git, or from the saved file outside git |
| `[editor] word_level` | `"balanced"` | **word level** — how readily characters are joined into a word: strict takes only the certain ones, loose whatever the dictionary has (`strict` strict, `balanced` balanced, `full` full (loose)) |
| `[editor] word_mark` | `"color"` | **word mark** — how word boundaries are shown (`off` none, `color` colour, `ink` brightness, `tint` tint, `line` underline) |
| `[editor] code_highlight` | `true` | **code highlight** — code in a fence is coloured by its own language; off, the whole block is one colour |
| `[editor] show_ruby` | `false` | **show ruby** — lay readings out beside their characters. Off by default: what is in the file is what is on the page |
| `[editor] indent_hint` | `"none"` | **indent hint** — on a vertical page, a mark at the head of each paragraph, so the breaks in a long one are easy to find (`none` none, `symbol` a mark, `color` colour) |
| `[editor] indent_symbol` | `"↵"` | **indent symbol** — which character the paragraph mark is; used when the indent hint is set to a mark |
| `[editor] table_rules` | `"line dash"` | **table rules** — how the column rules of a table are drawn (`line dash` lines and dashes, `line` lines, `line double` lines and double lines, `color` colour, `off` none) |
| `[editor] char_info` | `true` | **char info** — the right end of the status line names the character under the caret: its code point and Unicode block |
| `[editor] status_count` | `"text"` | **count on the status line** — how long the file is, on the status line, and the selection too when there is one (`text` text files, `all` every file, `off` off) |
| `[editor] unicode_alarm` | `true` | **suspicious characters** — tint the cell after a zero-width or bidi control, and any space that is not a plain space |

### interface

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] scrolloff` | `3` | **scrolloff** — how many lines (columns, on a vertical page) to keep between the caret and the edge (0–20) |
| `[editor] wheel_step` | `3` | **wheel step** — how many lines one notch of the wheel moves; 1 is the terminal's own step (1–10) |
| `[editor] tabs` | `"auto"` | **tabs** — the bar along the top that lists the open files (`auto` two or more, `always` always, `never` never) |
| `[editor] command_line` | `true` | **command line** — a line under the status line for commands, for what just happened, and for the keys you can press now |
| `[panel] rounded` | `true` | **rounded** — whether panel corners are round or square |
| `[editor] language` | `"auto"` | **language** — interface language (`auto` the system's, `zh` 繁體, `zhs` 简体, `en` English) |

### colours

| Setting | Default | What it does |
| --- | --- | --- |
| `[theme] name` | `"ink"` | **name** — which ink to use: ten built-in themes, named by their names (墨香 and moxiang are the same) (`ink` moxiang: black, white-gold, gold and red ink; every other shade computed, `one-dark` one-dark: the scheme most VS Code users know; dark only, `github` github: GitHub's own scheme, as on the site and in VS Code; light and dark, `monokai` monokai: the classic Sublime Text scheme; dark only, `dracula` dracula: the purple-toned dark scheme; dark only, `tokyo-night` tokyo-night: soft blue-purple tones; light and dark, `catppuccin` catppuccin: pastels; Mocha dark, Latte light, `gruvbox` gruvbox: retro colours on warm brown; light and dark, `bw` heibai: black, white and grey only — weight says it, colour says nothing, `morandi` morandi: muted, greyed colours; light and dark) |
| `[theme] mode` | `"auto"` | **mode** — the dark or the light half of the theme; ask the terminal checks what its background is (`auto` ask the terminal, `dark` dark, `light` light) |
| `[theme] ground` | `"paint"` | **ground** — the editor paints the paper itself, or leaves the background to the terminal (use this with a transparent terminal) (`paint` paint the paper, `terminal` the terminal's own) |
| `[theme] status_bar` | `"sunken"` | **status bar** — whether the two bottom lines sit lower than the paper or one step towards the ink (`sunken` sunken, `raised` raised) |
| `[theme] fill` | `false` | **fill** — whether code blocks and quotes sit on a faint ground |

### input

| Setting | Default | What it does |
| --- | --- | --- |
| `[ime] scheme` | `"lingming"` | **scheme** — which 碼表 to type with. 靈明 and 星陳 come built in; the others need the data installed (`lingming` 靈明, `xingchen` 星陳, `qingyun` 卿雲, `riyue` 日月, `pinyin` 拼音) |
| `[ime] commit` | `"default"` | **commit method** — when a finished code goes to the page (`default` the scheme's own, `delayed` delayed (頂字), `unique` unique, `fluency` whole-sentence) |
| `[ime] start` | `false` | **load the 碼表 at start** — off by default: the word model loads as usual, and the 碼表 waits for the first Chinese you type |
| `[ime] system` | `"auto"` | **move the system input method aside in Normal mode** — while yumete reads the keys itself (Normal mode, the command line), ask the system's input method to step aside, so it does not eat them (`auto` auto, `keep` leave it) |
| `[panel] display` | `"box"` | **where candidates go** — where the candidates are drawn while you type: a box by the caret, the bottom line of the window, or the line under the caret (`box` box, `bottom` bottom line, `inline` in the line) |
| `[panel] inline_preedit` | `"off"` | **preedit** — whether what you are typing is written in the candidate bar or in the text, and if in the text, the code or the first candidate (`off` in the candidate bar, `composition` the code in the text, `preview` the first candidate in the text) |
| `[panel] page_size` | `6` | **page size** — how many candidates a page lists (1–9) |
| `[panel] markers` | `"１２３４５６７８９"` | **markers** — the characters the nine candidate numbers are drawn as |
| `[editor] show_chaifen` | `false` | **show 拆分** — while typing, show each candidate's 拆分 beside it |

### editing

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] word_completion` | `4` | **word completion** — after this many Latin letters, list words that appear in the open files; for Chinese characters, half as many (rounded up). C-n lists them at any time (0–20) |
| `[editor] auto_pairs` | `"basic"` | **auto-pairs** — typing an opening bracket or quote adds its closer; typing the closer then steps over it (`off` off, `basic` basic, `full` full) |
| `[editor] completion_page_size` | `6` | **completion page size** — how many items the word, code and shell completion lists show at once (1–20) |
| `[editor] indent_width` | `4` | **indent width** — how many columns > adds and < takes away, and how many spaces Tab types (1–16) |
| `[editor] tab_width` | `8` | **tab width** — how far a tab character reaches: to the next multiple of this. Code tables line up by it (1–16) |
| `[editor] tab_inserts` | `"spaces"` | **tab inserts** — what Tab types in Insert mode; Shift-Tab types the other (`spaces` spaces, `tab` a tab) |
| `[editor] smart_case` | `true` | **smart case** — searching: no capital in the pattern ignores case, one capital respects it |
| `[editor] fuzzy_search` | `false` | **fuzzy search** — whether the search panel's fuzzy switch starts on |

### files

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] reload_auto` | `true` | **auto reload** — reload the file when something outside changes it |
| `[editor] autosave` | `true` | **autosave** — while a file is unsaved, keep a copy beside it, so a crash loses nothing |
| `[editor] session` | `false` | **session** — when started with no file: a blank page, or the files that were open last time |
| `[editor] remember` | `true` | **remember files and places** — off: nothing is written or read: the line each file was left on, recent files and projects, the last session |

### keys

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] which_wrap` | `"b"` | **which wrap** — which keys cross a line end, spelled as in vim: b h l < > ~ — vim keys only |
| `[editor] language_key` | `"C-^"` | **language key** — the key that switches 中/ABC on a terminal that cannot report a lone Shift |
| `[keys] flavor` | `false` | **Yumete keymap flavour** — with this on, `d` and `c` only delete and `A-d`/`A-c` are the ones that cut, so a tidy-up between a copy and a paste cannot eat the copy. `[keys.normal]` still wins |
| `[keys] preset` | `"helix"` | **keymap** — whether the keys follow helix or vim (`helix` helix, `vim` vim) |

