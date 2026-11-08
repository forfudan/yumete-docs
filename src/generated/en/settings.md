<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

### layout

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] layout` | `"horizontal"` | **layout** — horizontal or vertical text (`horizontal` horizontal, `vertical` vertical) |
| `[editor] vertical_keys` | `"visual"` | **hjkl in vertical layout** — in vertical layout, whether hjkl follow the text or the screen (`logical` logical: h l by character, j k by line, `visual` visual: j k down/up, h l left/right) |
| `[editor] zong_length` | `0` | **column length** — characters per column in vertical layout; prose reads well up to about 32 (8–64) |
| `[editor] zong_gap` | `0` | **column gap** — half-width cells between one column and the next (0–4) |
| `[editor] pages_vertical` | `1` | **pages, vertical** — how many bands a vertical page is split into (1–4) |
| `[editor] pages_horizontal` | `1` | **pages, horizontal** — how many columns the horizontal page is cut into, side by side (1–4) |
| `[editor] indent` | `0` | **first-line indent** — cells at the head of a paragraph; the Chinese convention is 2 (0–8) |
| `[editor] measure` | `0` | **text width** — lines wrap here; the rest is margin (0–400) |
| `[editor] hard_wrap` | `0` | **hard-wrap width** — what a bare :hard-wrap fills to; it rewrites the file's line breaks, not the display (1–400) |
| `[editor] ruler` | `0` | **ruler** — a guide, not a break: text past it changes colour (0–400) |
| `[editor] insert_final_newline` | `true` | **add a final newline** — on save, add a missing final newline in the file's own line ending; an empty file stays empty |
| `[editor] soft_wrap` | `true` | **soft wrap** — long lines wrap on a horizontal page; off, they run past the right edge |
| `[editor] hanging_punctuation` | `false` | **hanging punctuation** — 。，、？！：；「」 hang in the margin instead of taking a cell |
| `[editor] margin` | `"dense"` | **margin** — when to show the lane for readings, emphasis and 平仄 (`never` never, `dense` when dense, `loose` when loose, `always` always) |
| `[editor] tatechuyoko` | `4` | **tatechuyoko** — half-width characters set across inside one cell, so a year is not one digit to a row (2–8) |
| `[editor] paper_ticks` | `0` | **paper ticks** — a faint tick in the margin every few cells, like manuscript paper (0–64) |
| `[editor] ambiguous_width` | `"auto"` | **ambiguous width** — whether East Asian ambiguous-width characters (— …) take one cell or two; change it if the cursor is misaligned (`auto` ask the terminal, `wide` two cells, `narrow` one cell) |

### marks

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] line_numbers` | `"absolute"` | **line numbers** — line numbers on the left; relative numbers count from the cursor, making jumps easy (`absolute` absolute, `relative` relative, `none` none) |
| `[editor] line_number_fill` | `false` | **line number background** — fill the line-number column with a faint background, not just the number |
| `[editor] diff_gutter` | `true` | **diff gutter** — mark lines that differ from git (or from the saved file) beside the line numbers |
| `[editor] end_of_line_diagnostics` | `"hint"` | **end-of-line diagnostics** — show language-server diagnostics at line end, from which level up (`disable` off, `hint` hints and up, `info` info and up, `warning` warnings and up, `error` errors only) |
| `[editor] modeline` | `true` | **read vim modelines** — vim: set ft=… ts=…: in the first or last five lines of a file sets its type, indentation and hard-wrap width |
| `[editor] maths_preview` | `true` | **maths preview** — while the cursor is in a formula, a popup below shows it typeset; needs Ghostty or kitty, and the typst command for Typst formulas |
| `[editor] preview_fit` | `"width"` | **page window fit** — how the page window draws the page: as wide as the window and scrolled to the cursor, or the whole page (`width` width, `page` whole page) |
| `[editor] preview_theme` | `false` | **page window in theme colours** — the preview's paper in the background colour and its black in the text colour, in dark themes too; off, the page as printed |
| `[editor] yank_flash` | `false` | **yank flash** — flash the copied text after copying |
| `[editor] indent_guides` | `false` | **indent guides** — a rule at each level of a code line's leading blanks, as helix draws them; code files only |
| `[editor] indent_guides_character` | `"│"` | **guide character** — the character the guides are drawn with, one cell wide |
| `[editor] indent_guides_skip_levels` | `0` | **skip levels** — how many outer levels go without a guide (0–8) |
| `[editor] indent_guides_scope` | `true` | **highlight current block** — the guide of the cursor's block is drawn darker |
| `[editor] word_level` | `"balanced"` | **segmentation** — how readily characters join into words: strict takes only the certain ones, loose whatever the dictionary has (`strict` strict, `balanced` balanced, `full` loose) |
| `[editor] word_mark` | `"color"` | **word boundaries** — how word boundaries are shown (`off` none, `color` colour, `ink` brightness, `tint` tint, `line` underline) |
| `[editor] code_highlight` | `true` | **code highlight** — highlight fenced code by its language; off, the block is one colour |
| `[editor] show_ruby` | `false` | **show ruby** — show readings beside their characters. Off by default: the page shows the file as is |
| `[editor] indent_hint` | `"none"` | **paragraph mark** — on a vertical page, mark each paragraph start so breaks are easy to find (`none` none, `symbol` a mark, `color` colour) |
| `[editor] indent_symbol` | `"↵"` | **paragraph mark symbol** — the character for the paragraph mark; used when the indent hint is set to a mark |
| `[editor] table_rules` | `"line dash"` | **table rules** — how the column rules of a table are drawn (`line dash` lines and dashes, `line` lines, `line double` lines and double lines, `color` colour, `off` none) |
| `[editor] char_info` | `true` | **character info** — show the code point and Unicode block of the character under the cursor at the right of the status line |
| `[editor] status_count` | `"text"` | **count on the status line** — the file's character count on the status line, and the selection's when there is one (`text` text files, `all` all files, `off` off) |
| `[editor] unicode_alarm` | `true` | **suspicious characters** — tint the cell after a zero-width or bidi control, and any space that is not a plain space |

### interface

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] scrolloff` | `5` | **scrolloff** — how many lines (columns, on a vertical page) to keep between the cursor and the edge (0–20) |
| `[editor] wheel_step` | `3` | **wheel step** — how many lines one notch of the wheel moves; 1 is the terminal's own step (1–10) |
| `[editor] tabs` | `"auto"` | **tabs** — the bar along the top that lists the open files (`auto` two or more, `always` always, `never` never) |
| `[editor] command_line` | `true` | **command line** — a line under the status line for commands, messages and key hints |
| `[editor] signature` | `true` | **name in the corner** — a quiet yumete at the right end of the command line while it is empty |
| `[editor] sidebar_buttons` | `true` | **sidebar buttons** — a block at each end of the tab line; a click opens or closes that side's sidebar |
| `[panel] rounded` | `true` | **rounded corners** — whether panel corners are round or square |
| `[editor] language` | `"auto"` | **language** — interface language (`auto` follow system, `zht` 繁體, `zhs` 简体, `en` English) |

### colours

| Setting | Default | What it does |
| --- | --- | --- |
| `[theme] name` | `"ink"` | **theme** — which theme to use: ten are built in, chosen by name (墨香 and moxiang are the same) (`ink` moxiang: black, white-gold, gold and red ink; every other shade computed, `one-dark` one-dark: the scheme most VS Code users know; dark only, `github` github: GitHub's own scheme, as on the site and in VS Code; light and dark, `monokai` monokai: the classic Sublime Text scheme; dark only, `dracula` dracula: the purple-toned dark scheme; dark only, `tokyo-night` tokyo-night: soft blue-purple tones; light and dark, `catppuccin` catppuccin: pastels; Mocha dark, Latte light, `gruvbox` gruvbox: retro colours on warm brown; light and dark, `bw` heibai: black, white and grey only; weight, not colour, sets things apart, `morandi` morandi: muted, greyed colours; light and dark) |
| `[theme] mode` | `"auto"` | **dark / light** — dark or light theme; 'ask the terminal' follows its background (`auto` ask the terminal, `dark` dark, `light` light) |
| `[theme] ground` | `"paint"` | **background** — whether the editor paints the background or leaves it to the terminal (use the latter with a transparent terminal) (`paint` editor, `terminal` terminal) |
| `[theme] status_bar` | `"sunken"` | **status bar** — whether the two bottom lines look sunken or raised (`sunken` sunken, `raised` raised) |
| `[theme] fill` | `false` | **code background** — whether code blocks and quotes get a faint background |
| `[theme] inactive` | `95` | **inactive windows** — opacity of inactive windows, in percent: 100 does not dim, as in vim and helix (50–100) |
| `[theme] focus` | `50` | **focus mode** — opacity of other paragraphs in focus mode, in percent (10–100) |

### input method

| Setting | Default | What it does |
| --- | --- | --- |
| `[ime] scheme` | `"pinyin"` | **scheme** — which scheme to type with. Pinyin, Lingming and Xingchen are built in; the others need installing (`lingming` 靈明, `xingchen` 星陳, `qingyun` 卿雲, `riyue` 日月, `pinyin` 宇浩拼音) |
| `[ime] commit` | `"default"` | **commit mode** — when a finished code commits: on the next key, when only one candidate is left, or as a whole sentence (`default` scheme default, `delayed` delayed (頂字), `unique` unique, `fluency` whole-sentence) |
| `[ime] charset` | `"all"` | **charset filter** — which character set the candidates are limited to (`all` all characters, `common` common characters only, `tonggui` simplified only, `harmonic` traditional only) |
| `[ime] charset_sort` | `"common"` | **charset sort** — which characters come first among the candidates; a whole-sentence scheme orders its own (`original` original order, `common` common first, `tonggui` simplified first, `harmonic` traditional first) |
| `[ime] start` | `false` | **load the code table at start** — off by default: the word model loads as usual, and the code table waits for the first Chinese you type |
| `[ime] system` | `"auto"` | **move the system input method aside in Normal mode** — while yumete reads the keys itself (Normal mode, the command line), ask the system's input method to step aside, so it does not eat them (`auto` auto, `keep` leave it) |
| `[ime] others` | `"off"` | **move other input methods aside in Normal mode** — in Normal mode, switch other input methods (Squirrel, Sogou, fcitx) to English; on macOS switching back fails about one time in three (`off` leave alone, `aside` switch to English, `aside-and-back` switch to English and back) |
| `[panel] display` | `"box"` | **candidate position** — where candidates show while you type: a box by the cursor, the last line of the window, or the line below the cursor (`box` box, `bottom` bottom line, `inline` below the cursor) |
| `[panel] inline_preedit` | `"off"` | **preedit** — whether text being typed shows in the candidate bar or in the text, and if in the text, the code or the first candidate (`off` in the candidate bar, `composition` the code in the text, `preview` the first candidate in the text) |
| `[panel] page_size` | `6` | **candidates per page** — how many candidates a page lists (1–9) |
| `[panel] markers` | `"１２３４５６７８９"` | **candidate numbers** — the characters used for the nine candidate numbers |
| `[ime] annotation` | `"off"` | **annotation** — what shows beside each candidate: nothing, or an annotation mode; / while typing switches (`off` off, `multi` multi, `double` double) |
| `[ime] annotation_modes` | `{}` | **annotation modes** — which fields each mode shows. To add a mode, write [ime.annotation_modes.name] in the config |

### editing

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] word_completion` | `4` | **word completion** — after this many Latin letters, list words that appear in the open files; for Chinese characters, half as many (rounded up). C-n lists them at any time (0–20) |
| `[editor] auto_pairs` | `"basic"` | **auto-pairs** — typing an opening bracket or quote adds its closer; typing the closer then steps over it (`off` off, `basic` basic, `full` full) |
| `[editor] completion_page_size` | `6` | **completion page size** — how many items the word, code and shell completion lists show at once (1–20) |
| `[editor] indent_width` | `4` | **indent width** — how many columns > adds and < takes away, and how many spaces Tab types (1–16) |
| `[editor] tab_width` | `8` | **tab width** — a tab reaches the next multiple of this; code tables line up by it (1–16) |
| `[editor] tab_inserts` | `"spaces"` | **Tab inserts** — what Tab types in Insert mode; Shift-Tab types the other (`spaces` spaces, `tab` tab) |
| `[editor] smart_case` | `true` | **smart case** — when searching, ignore case unless the pattern has a capital |
| `[editor] fuzzy_search` | `false` | **fuzzy search by default** — whether the search panel's fuzzy switch starts on |

### files

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] reload_auto` | `true` | **auto reload** — reload the file when something outside changes it |
| `[editor] autosave` | `true` | **autosave** — keep a copy beside unsaved files to recover from a crash |
| `[editor] session` | `false` | **session** — when started with no file: a blank page, or the files that were open last time |
| `[editor] remember` | `true` | **remember files and places** — when off, none of this is saved or read: the line each file was left on, recent files and projects, the last session |
| `[export] vertical` | `false` | **vertical export** — HTML and EPUB set vertically, right to left, whatever the editing window shows |
| `[export] hanging` | `false` | **hanging punctuation in export** — a stop at the end of a line hangs outside the text block |
| `[export] ruby_html` | `true` | **HTML ruby in export** — `<ruby>` in the source is exported as ruby |
| `[export] ruby_typst` | `true` | **Typst ruby in export** — `#ruby` in the source is exported as ruby |
| `[export] ruby_markdown` | `true` | **Markdown ruby in export** — `{漢字\|かんじ}` in a Markdown source is exported as ruby |
| `[export] page` | `"a5"` | **export paper** — the paper a print is set on: a4 a5 a6 b5 b6 letter 16開 32開 大32開, or millimetres such as 130x184 |
| `[export] vertical_latin` | `"turn"` | **Latin in vertical export** — how half-width letters and digits are set in a vertical HTML or EPUB export; the terminal's vertical page is not affected (`turn` all turned, `jlreq` as JLREQ and clreq) |
| `[export] font_family` | `'-apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", system-ui, "Ubuntu", "Droid Sans", sans-serif'` | **export fonts** — the fonts an HTML or EPUB export asks for, written as VS Code's markdown.preview.fontFamily |

### keys

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] which_wrap` | `"b"` | **keys that cross lines** — which keys cross a line end (vim keymap): b h l < > ~ |
| `[editor] language_key` | `"C-^"` | **language key** — the key that switches Chinese/ABC on a terminal that cannot report a lone Shift |
| `[keys] preset` | `"helix"` | **keymap** — whether the keys follow helix or vim (`helix` helix, `vim` vim) |
| `[keys] flavor` | `"basic"` | **Yumete keymap flavour** — what yumete changes over helix or vim. basic: the changes you can see, such as menus and new keys; full: also the items that change what a familiar key does, such as `d` and `c` deleting without cutting (`A-d` and `A-c` cut). `[keys.normal]` overrides it (`off` off, `basic` basic, `full` full) |
| `[keys] flavor_items` | `{}` | **flavour items** — each item of the Yumete flavour, one tick each. l or Space opens it |
| `[keys] inherit` | `true` | **sidebars and prompts use my keys** — a one-key command bound in `[keys.normal]` also works in a sidebar that has it, and one in `[keys.insert]` in the command line and pickers. `[keys.sidebar]` and `[keys.prompt]` override it |

