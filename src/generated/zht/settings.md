<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

### 版面

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] layout` | `"horizontal"` | **排版方向** — 横排還是豎排 (`horizontal` 横排, `vertical` 豎排) |
| `[editor] vertical_keys` | `"visual"` | **豎排的 hjkl** — 豎排時 hjkl 依照行文邏輯還是視覺方向 (`logical` 行文邏輯：h l 跨字、j k 跨行, `visual` 視覺方向：j k 下上、h l 左右) |
| `[editor] zong_length` | `0` | **每縱字數** — 豎排時每縱幾個字。散文讀起來舒服的上限約 32 字 (8–64) |
| `[editor] zong_gap` | `0` | **縱間距** — 縱與縱之間空幾個半角格。每一縱都留，與有無内容無關 (0–4) |
| `[editor] pages_vertical` | `1` | **豎排分頁** — 豎排頁面横向分成幾段，每段從右往左排 (1–4) |
| `[editor] pages_horizontal` | `1` | **横排分頁** — 横排分成幾欄並排，文字從左欄接到右欄 (1–4) |
| `[editor] indent` | `0` | **首行縮進** — 段首空幾格，中文慣例爲 2 (0–8) |
| `[editor] measure` | `0` | **正文寬度** — 正文在此處換行，右側是頁邊距 (0–400) |
| `[editor] hard_wrap` | `0` | **硬換行寬度** — :hard-wrap 不帶數字時用的寬度；改的是文件裏的換行，不是顯示 (1–400) |
| `[editor] ruler` | `0` | **標尺** — 只畫一條線：超出此列的字變色，不換行 (0–400) |
| `[editor] insert_final_newline` | `true` | **文末添加換行符** — 保存時在文末補上缺少的換行符，使用該文件自己的行尾(CRLF 文件補 CRLF)。空文件不補 |
| `[editor] soft_wrap` | `true` | **自動換行** — 横排時長行自動換行；關閉則超出右邊界 |
| `[editor] hanging_punctuation` | `false` | **標點旁置** — 。，、？！：；「」 懸掛在頁邊，不佔正文的格 |
| `[editor] margin` | `"dense"` | **夾行** — 何時顯示夾行(注音、着重號、平仄等) (`never` 從不, `dense` 擠的時候, `loose` 松的時候, `always` 總是) |
| `[editor] tatechuyoko` | `4` | **縱中横** — 豎排時一格内横排幾個半角字符，年份、頁碼就不會一位佔一行 (2–8) |
| `[editor] paper_ticks` | `0` | **稿紙刻度** — 豎排時每隔幾個字在頁邊畫一個淡刻度，像稿紙一樣 (0–64) |
| `[editor] ambiguous_width` | `"auto"` | **歧義寬度** — 東亞歧義寬度字符佔一格還是兩格。顯示錯位時改這裏 (`auto` 問終端, `wide` 兩格, `narrow` 一格) |

### 標記

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] line_numbers` | `"absolute"` | **行號** — 左側顯示行號。相對行號顯示與光標相隔幾行，方便跳行 (`absolute` 絶對, `relative` 相對, `none` 不畫) |
| `[editor] line_number_fill` | `false` | **行號底色** — 行號欄鋪滿淡底色，而不是隻顯示數字 |
| `[editor] diff_gutter` | `true` | **改動條** — 在行號旁用底色標出與 git 不同的行(不在 git 中則對比已保存的文件) |
| `[editor] end_of_line_diagnostics` | `"hint"` | **行末診斷** — 在行末顯示語言服務器診斷，從哪一級起顯示 (`disable` 不顯示, `hint` 建議及以上, `info` 説明及以上, `warning` 警告及以上, `error` 只顯示錯誤) |
| `[editor] modeline` | `true` | **讀 vim 的 modeline** — 文件首尾五行内的 vim: set ft=… ts=…: 可設置文件類型、縮進和硬換行寬度 |
| `[editor] maths_preview` | `true` | **公式預覽** — 光標在公式中時，在下方浮窗顯示排版結果；需要 Ghostty 或 kitty，Typst 公式還需要 typst 命令 |
| `[editor] preview_fit` | `"width"` | **頁面窗口大小** — 頁面窗口中頁面的大小：頁寬適應窗口並隨光標滚動，或整頁放進窗口 (`width` 頁寬, `page` 整頁) |
| `[editor] preview_theme` | `false` | **頁面窗口用主題配色** — 預覽頁面的紙用背景色、黑字用文字色，深色主題下也一樣；關閉則按印刷原樣 |
| `[editor] yank_flash` | `false` | **複製高亮** — 複製後，被複制的範圍閃一下 |
| `[editor] indent_guides` | `false` | **縮進參考線** — 在代碼行首每級縮進畫一條豎線，同 helix；僅用於代碼文件 |
| `[editor] indent_guides_character` | `"│"` | **參考線字符** — 畫參考線用的字符，要佔一格 |
| `[editor] indent_guides_skip_levels` | `0` | **跳過外層** — 最外幾級縮進不畫參考線 (0–8) |
| `[editor] indent_guides_scope` | `true` | **突出當前塊** — 光標所在塊的參考線加深 |
| `[editor] word_level` | `"balanced"` | **分詞鬆緊** — 把幾個字合成一個詞的傾向。嚴格：只認没有爭議的；寬鬆：詞典裏有就算 (`strict` 嚴格, `balanced` 適中, `full` 寬鬆) |
| `[editor] word_mark` | `"color"` | **分詞標記** — 分詞標記的顯示方式 (`off` 不畫, `color` 不同顔色, `ink` 不同明度, `tint` 不同底色, `line` 下劃線) |
| `[editor] code_highlight` | `true` | **代碼高亮** — 代碼塊按其語言高亮；關閉則整塊爲紫色 |
| `[editor] show_ruby` | `false` | **顯示注音** — 在字旁顯示注音。默認關閉，按文件原樣顯示 |
| `[editor] indent_hint` | `"none"` | **段首記號** — 豎排時在段首畫記號，便於在長文中找到分段 (`none` 不畫, `symbol` 畫符號, `color` 換顔色) |
| `[editor] indent_symbol` | `"↵"` | **段首符號** — 段首記號用的字符，僅在段首記號爲「畫符號」時生效 |
| `[editor] table_rules` | `"line dash"` | **表格豎線** — 表格豎線的樣式 (`line dash` 實線加虚線, `line` 實線, `line double` 實線加雙線, `color` 用顔色區分, `off` 不畫) |
| `[editor] char_info` | `true` | **字符信息** — 在狀態欄右端顯示光標處字符的 Unicode 碼位和區塊名 |
| `[editor] status_count` | `"text"` | **狀態欄字數** — 在狀態欄顯示全文字數，有選區時也顯示選區字數 (`text` 文本文件, `all` 所有文件, `off` 關) |
| `[editor] unicode_alarm` | `true` | **可疑字符** — 零寬字符、雙向控制符後面那一格和非普通空格鋪上琥珀底色 |

### 界面

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] scrolloff` | `5` | **光標邊距** — 光標與邊緣之間至少保留幾行(豎排爲幾縱) (0–20) |
| `[editor] wheel_step` | `3` | **滚輪步長** — 滚輪每格滚動的行數，1 即終端默認 (1–10) |
| `[editor] tabs` | `"auto"` | **標籤欄** — 頂部列出已打開文件的横條 (`auto` 兩個及以上時顯示, `always` 總是顯示, `never` 不顯示) |
| `[editor] command_line` | `true` | **命令行** — 狀態欄下方加一行，用於輸入命令、顯示消息和按鍵提示 |
| `[editor] signature` | `true` | **右下角署名** — 命令行爲空時，右端淡色顯示 yumete |
| `[editor] sidebar_buttons` | `true` | **側欄開關** — 標籤欄兩端各有一個色塊，點擊可開關該側的側欄 |
| `[panel] rounded` | `true` | **面板圓角** — 面板的四個角是圓的還是方的 |
| `[editor] language` | `"auto"` | **界面語言** — 編輯器界面顯示語言 (`auto` 跟隨系統, `zht` 繁體, `zhs` 簡體, `en` English) |

### 配色

| Setting | Default | What it does |
| --- | --- | --- |
| `[theme] name` | `"ink"` | **主題** — 用哪一套主題。内置十個，寫名字即可(「墨香」與 moxiang 相同) (`ink` 墨香：黑、白金、金、紅四色墨，其餘色階自動推算, `one-dark` One Dark：VS Code 中最常見的配色，只有深色, `github` GitHub：GitHub 網站與 VS Code 中的配色，深淺都有, `monokai` Monokai：Sublime Text 的經典配色，只有深色, `dracula` Dracula：紫調的暗色配色，只有深色, `tokyo-night` Tokyo Night：柔和的藍紫調，深淺都有, `catppuccin` Catppuccin：粉彩色，深色 Mocha，淺色 Latte, `gruvbox` Gruvbox：暖棕底的復古配色，深淺都有, `bw` 黑白：只用黑、白、灰，以輕重區分, `morandi` 莫蘭迪：灰調的柔和配色，深淺都有) |
| `[theme] mode` | `"auto"` | **深色/淺色** — 用深色還是淺色主題；「問終端」按終端背景色決定 (`auto` 問終端, `dark` 深色, `light` 淺色) |
| `[theme] ground` | `"paint"` | **背景** — 背景由編輯器繪製，還是使用終端背景(終端設爲透明時選後者) (`paint` 編輯器繪製, `terminal` 終端背景) |
| `[theme] status_bar` | `"sunken"` | **狀態欄底色** — 底部兩行呈凹陷還是凸起 (`sunken` 凹陷, `raised` 凸起) |
| `[theme] fill` | `false` | **代碼底色** — 代碼塊和引用是否加淡底色 |
| `[theme] inactive` | `95` | **非活動窗口淡化** — 非活動窗口的不透明度(百分比)：100 即不變淡，同 vim 和 helix (50–100) |
| `[theme] focus` | `50` | **焦點模式淡化** — 焦點模式下其他段落的不透明度(百分比) (10–100) |

### 輸入法

| Setting | Default | What it does |
| --- | --- | --- |
| `[ime] scheme` | `"pinyin"` | **輸入方案** — 用哪套輸入方案。拼音、靈明、星陳爲内置，其他方案需安裝 (`lingming` 靈明, `xingchen` 星陳, `qingyun` 卿雲, `riyue` 日月, `pinyin` 宇浩拼音) |
| `[ime] commit` | `"default"` | **上屏方式** — 編碼打完後何時上屏：等下一鍵、只剩一個候選時，或整句 (`default` 方案默認, `delayed` 延遲(頂字), `unique` 唯一, `fluency` 整句) |
| `[ime] charset` | `"all"` | **字集過濾** — 候選中只保留哪個字集的漢字 (`all` 全部漢字, `common` 僅常用漢字, `tonggui` 僅簡化漢字, `harmonic` 僅傳統漢字) |
| `[ime] charset_sort` | `"common"` | **字集排序** — 哪個字集的字在候選中靠前，對整句方案無效 (`original` 原始順序, `common` 常用字優先, `tonggui` 簡化字優先, `harmonic` 傳統字優先) |
| `[ime] start` | `false` | **啓動時加載碼表** — 默認關閉：分詞模型照常加載，碼表在第一次輸入中文時加載 |
| `[ime] system` | `"auto"` | **Normal 模式下讓開系統輸入法** — Normal 模式下請系統輸入法讓開，以免按鍵被它攔截 (`auto` 自動, `keep` 不處理) |
| `[ime] others` | `"off"` | **Normal 模式下讓開其他輸入法** — Normal 模式下把鼠須管、搜狗等切到英文；macOS 上切回時約三次失敗一次 (`off` 不動, `aside` 切到英文, `aside-and-back` 切到英文再切回) |
| `[panel] display` | `"box"` | **候選位置** — 打字時候選顯示在哪：光標旁的候選框、窗口底行，還是光標下一行 (`box` 候選框, `bottom` 底行, `inline` 光標下一行) |
| `[panel] inline_preedit` | `"off"` | **未上屏内容** — 未上屏的内容顯示在候選欄裏還是正文裏；在正文裏時顯示編碼還是首選 (`off` 候選欄裏, `composition` 正文裏寫編碼, `preview` 正文裏寫首選) |
| `[panel] page_size` | `6` | **每頁候選數** — 候選框每頁顯示幾個候選 (1–9) |
| `[panel] markers` | `"１２３４５６７８９"` | **候選序號** — 候選前九個序號用什麽字符 |
| `[ime] annotation` | `"off"` | **候選註解** — 候選旁顯示的註解：關閉或某個註解模式；打字時按 / 切換 (`off` 關, `multi` 多重, `double` 二重) |
| `[ime] annotation_modes` | `{}` | **註解模式** — 每個模式顯示哪些欄。新增模式請在配置中寫 [ime.annotation_modes.名字] |

### 編輯

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] word_completion` | `4` | **詞語補全** — 輸入幾個西文字母后列出已打開文件中出現過的詞，漢字爲一半(向上取整)。C-n 隨時列出 (0–20) |
| `[editor] auto_pairs` | `"basic"` | **自動配對** — 輸入左括號或引號時自動補上右半邊；再輸入右半邊會跳過 (`off` 關, `basic` 基本, `full` 完整) |
| `[editor] completion_page_size` | `6` | **補全每頁條數** — 單詞、代碼和終端命令的補全列表一次顯示幾條 (1–20) |
| `[editor] indent_width` | `4` | **縮進寬度** — `>`/`<` 增減的列數，也是 Tab 輸入的空格數 (1–16) |
| `[editor] tab_width` | `8` | **製表符寬度** — 製表符對齊到此數的倍數，碼表靠它對齊 (1–16) |
| `[editor] tab_inserts` | `"spaces"` | **Tab 插入内容** — 插入模式下按 Tab 插入的内容；Shift-Tab 插入另一種 (`spaces` 空格, `tab` 製表符) |
| `[editor] smart_case` | `true` | **智能大小寫** — 搜索詞全小寫時不區分大小寫，含大寫字母時區分 |
| `[editor] fuzzy_search` | `false` | **默認模糊搜索** — 搜索面板的「模糊」開關默認是否打開 |

### 文件

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] reload_auto` | `true` | **自動重載** — 文件被外部修改時自動重新加載 |
| `[editor] autosave` | `true` | **自動備份** — 未保存時在文件旁保留副本，崩潰後可恢復 |
| `[editor] session` | `false` | **恢復會話** — 不帶文件名啓動時：打開空白文檔，還是恢復上次的文件 |
| `[editor] remember` | `true` | **記住打開過的文件和位置** — 關閉後不再記録或讀取：各文件上次的位置、最近的文件和項目、上次的會話 |

### 鍵位

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] which_wrap` | `"b"` | **哪些鍵跨行** — 哪些鍵可以跨越行尾(vim 鍵位)。只能是 b h l < > ~ |
| `[editor] language_key` | `"C-^"` | **中英切換鍵** — 在無法識别單獨 Shift 的終端上，用此鍵切換中文/ABC |
| `[keys] preset` | `"helix"` | **鍵位** — 鍵位沿用 helix 還是 vim (`helix` helix, `vim` vim) |
| `[keys] flavor` | `"basic"` | **Yumete 鍵位風味** — 在 helix/vim 鍵位之上的改動。基本：看得見的改動，如菜單、新鍵；完整：再加上改變熟悉鍵行爲的幾項，如 `d` `c` 只删不剪，剪切用 `A-d` `A-c`。`[keys.normal]` 優先於它 (`off` 關閉, `basic` 基本, `full` 完整) |
| `[keys] flavor_items` | `{}` | **風味各項** — 逐項開關 Yumete 風味。按 l 或空格進入 |
| `[keys] inherit` | `true` | **側欄與命令行沿用我的改鍵** — [keys.normal] 裏單鍵綁定的命令，側欄也有時在側欄生效；[keys.insert] 同理用於命令行與選擇器。[keys.sidebar] 與 [keys.prompt] 優先於它 |

