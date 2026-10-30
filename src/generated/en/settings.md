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
| `[editor] ruler` | `0` | **ruler** — a line, not a break: what runs past it changes colour (0–400) |
| `[editor] insert_final_newline` | `true` | **add a final line ending** — on save, add the line ending this file's own lines use when the last one is missing it; an empty file stays empty |
| `[editor] soft_wrap` | `true` | **soft wrap** — long lines fold when set across; off, they run past the right edge |
| `[editor] hanging_punctuation` | `false` | **hanging punctuation** — 。，、？！：；「」 hang in the margin instead of taking a cell |
| `[editor] margin` | `"dense"` | **interlinear lane** — when to show the lane that carries readings, emphasis and 平仄 (`never` never, `dense` when dense, `loose` when loose, `always` always) |
| `[editor] tatechuyoko` | `4` | **tatechuyoko** — half-width characters set across inside one cell, so a year is not one digit to a row (2–8) |
| `[editor] paper_ticks` | `0` | **paper ticks** — a faint tick in the margin every so many cells, the way squared paper has (0–64) |
| `[editor] ambiguous_width` | `"auto"` | **ambiguous width** — ambiguous width (`auto` ask the terminal, `wide` two cells, `narrow` one cell) |

### marks

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] line_numbers` | `"absolute"` | **line numbers** — line numbers (`absolute` absolute, `relative` relative, `none` none) |
| `[editor] line_number_fill` | `false` | **line number fill** — line number fill |
| `[editor] diff_gutter` | `true` | **diff gutter** — diff gutter |
| `[editor] word_level` | `"balanced"` | **word level** — word level (`strict` strict, `balanced` balanced, `full` loose) |
| `[editor] word_mark` | `"color"` | **word mark** — word mark (`off` none, `color` colour, `ink` brightness, `tint` tint, `line` underline) |
| `[editor] code_highlight` | `true` | **code highlight** — code highlight |
| `[editor] show_ruby` | `false` | **show ruby** — show ruby |
| `[editor] indent_hint` | `"none"` | **indent hint** — indent hint (`none` none, `symbol` a mark, `color` colour) |
| `[editor] indent_symbol` | `"↵"` | **indent symbol** — indent symbol |
| `[editor] table_rules` | `"line dash"` | **table rules** — table rules (`line dash` table rules.line dash, `line` lines, `line double` table rules.line double, `color` colour, `off` none) |
| `[editor] char_info` | `true` | **char info** — char info |
| `[editor] status_count` | `"text"` | **count on the status line** — how long the file is, on the status line, and the selection too when there is one (`text` text files, `all` every file, `off` off) |
| `[editor] unicode_alarm` | `true` | **suspicious characters** — tint the cell after a zero-width or bidi control, and any space that is not a plain space |

### interface

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] scrolloff` | `3` | **scrolloff** — scrolloff (0–20) |
| `[editor] wheel_step` | `3` | **wheel step** — wheel step (1–10) |
| `[editor] tabs` | `"auto"` | **tabs** — tabs (`auto` two or more, `always` always, `never` never) |
| `[editor] command_line` | `true` | **command line** — command line |
| `[panel] rounded` | `true` | **rounded** — rounded |
| `[editor] language` | `"auto"` | **language** — interface language (`auto` the system's, `zh` 繁體, `zhs` 简体, `en` English) |

### colours

| Setting | Default | What it does |
| --- | --- | --- |
| `[theme] name` | `"ink"` | **name** — name (`ink` moxiang: black, white-gold, gold and red ink; every other shade computed, `one-dark` one-dark: the scheme most VS Code users know; dark only, `github` github: GitHub's own scheme, as on the site and in VS Code; light and dark, `monokai` monokai: the classic Sublime Text scheme; dark only, `dracula` dracula: the purple-toned dark scheme; dark only, `tokyo-night` tokyo-night: soft blue-purple tones; light and dark, `catppuccin` catppuccin: pastels; Mocha dark, Latte light, `gruvbox` gruvbox: retro colours on warm brown; light and dark, `bw` heibai: black, white and grey only — weight says it, colour says nothing, `morandi` morandi: muted, greyed colours; light and dark) |
| `[theme] mode` | `"auto"` | **mode** — mode (`auto` ask the terminal, `dark` dark, `light` light) |
| `[theme] ground` | `"paint"` | **ground** — ground (`paint` paint the paper, `terminal` the terminal's own) |
| `[theme] status_bar` | `"sunken"` | **status bar** — status bar (`sunken` sunken, `raised` raised) |
| `[theme] fill` | `false` | **fill** — fill |

### input

| Setting | Default | What it does |
| --- | --- | --- |
| `[ime] scheme` | `"lingming"` | **scheme** — scheme (`lingming` 靈明, `xingchen` 星陳, `qingyun` 卿雲, `riyue` 日月, `pinyin` 拼音) |
| `[ime] commit` | `"default"` | **commit method** — when a finished code goes to the page (`default` the scheme's own, `delayed` delayed (頂字), `unique` unique, `fluency` whole-sentence) |
| `[ime] start` | `false` | **start** — start |
| `[ime] system` | `"auto"` | **system** — system (`auto` auto, `keep` leave it) |
| `[panel] display` | `"box"` | **display** — display (`box` box, `bottom` bottom line, `inline` in the line) |
| `[panel] inline_preedit` | `"off"` | **preedit** — preedit (`off` inline-preedit.off, `composition` the code in the text, `preview` the first candidate in the text) |
| `[panel] page_size` | `6` | **page size** — page size (1–9) |
| `[panel] markers` | `"１２３４５６７８９"` | **markers** — markers |
| `[editor] show_chaifen` | `false` | **show chaifen** — show chaifen |

### editing

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] word_completion` | `4` | **word completion** — After this many Latin letters, list words that appear in the open files; for Chinese characters, half as many (rounded up). C-n lists them at any time (0–20) |
| `[editor] auto_pairs` | `"basic"` | **auto-pairs** — Typing an opening bracket or quote adds its closer; typing the closer then steps over it (`off` off, `basic` basic, `full` full) |
| `[editor] completion_page_size` | `6` | **completion page size** — How many items the word, code and shell completion lists show at once (1–20) |
| `[editor] indent_width` | `4` | **indent width** — indent width (1–16) |
| `[editor] tab_width` | `8` | **tab width** — tab width (1–16) |
| `[editor] tab_inserts` | `"spaces"` | **tab inserts** — tab inserts (`spaces` spaces, `tab` a tab) |
| `[editor] smart_case` | `true` | **smart case** — searching: no capital in the pattern ignores case, one capital respects it |
| `[editor] fuzzy_search` | `false` | **fuzzy search** — fuzzy search |

### files

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] reload_auto` | `true` | **auto reload** — reload the file when something outside changes it |
| `[editor] autosave` | `true` | **autosave** — autosave |
| `[editor] session` | `false` | **session** — session |
| `[editor] remember` | `true` | **remember files and places** — off: nothing is written or read: the line each file was left on, recent files and projects, the last session |

### keys

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] which_wrap` | `"b"` | **which wrap** — which keys cross a line end, spelled as in vim: b h l < > ~ — vim keys only |
| `[editor] language_key` | `"C-^"` | **language key** — language key |
| `[keys] flavor` | `false` | **Yumete keymap flavour** — with this on, `d` and `c` only delete and `A-d`/`A-c` are the ones that cut, so a tidy-up between a copy and a paste cannot eat the copy. `[keys.normal]` still wins |
| `[keys] preset` | `"helix"` | **key preset** — whether the keys follow helix or vim (`helix` helix, `vim` vim) |

