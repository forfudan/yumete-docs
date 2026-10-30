<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

### 版面

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] layout` | `"horizontal"` | **排版方向** — 整頁的字是橫着走還是竪着走 (`horizontal` 橫排, `vertical` 竪排) |
| `[editor] vertical_keys` | `"visual"` | **竪排的 hjkl** — 竪排時 hjkl 依照行文邏輯還是視覺方向 (`logical` 行文邏輯：h l 跨字、j k 跨行, `visual` 視覺方向：j k 下上、h l 左右) |
| `[editor] zong_length` | `0` | **每縱字數** — 竪排時一縱寫幾個字。散文舒服的上限在 32 字前後 (8–64) |
| `[editor] zong_gap` | `0` | **縱間距** — 縱與縱之間空幾個半角格。每一縱都有，跟有没有東西無關 (0–4) |
| `[editor] pages_vertical` | `1` | **竪排分頁** — 竪排的頁面橫着分成幾條，每一條各自從右往左排 (1–4) |
| `[editor] pages_horizontal` | `1` | **橫排分頁** — 橫排分成幾欄並排，文字從左欄接到右欄 (1–4) |
| `[editor] indent` | `0` | **首行縮進** — 每段開頭空幾格。中文的慣例是 2 (0–8) |
| `[editor] measure` | `0` | **正文寬度** — 行在這裏折疊，右邊是頁邊距 (0–400) |
| `[editor] hard_wrap` | `0` | **硬換行寬度** — :hard-wrap 不帶數字時用的寬度；改的是文件裏的換行，不是顯示 (1–400) |
| `[editor] ruler` | `0` | **想寫多長** — 只是一條綫：超過這一欄的字變色，行照舊不折 (0–400) |
| `[editor] insert_final_newline` | `true` | **文末添加換行符** — 存檔時在文末添加缺少的換行符，用這個文件自己的行尾(CRLF 文件添 CRLF)。空文件不添 |
| `[editor] soft_wrap` | `true` | **長行折回來** — 橫排時長段落折到下一行；關掉則跑出右邊看不見 |
| `[editor] hanging_punctuation` | `false` | **標點旁置** — 。，、？！：；「」 掛在邊欄上，不佔正文那一格 |
| `[editor] margin` | `"dense"` | **夾行** — 何時顯示夾行(注音、着重號、平仄等信息) (`never` 從不, `dense` 擠的時候, `loose` 鬆的時候, `always` 總是) |
| `[editor] tatechuyoko` | `4` | **縱中橫** — 竪排時一格裏橫着塞幾個半角字，年份和頁碼就不會一位一行 (2–8) |
| `[editor] paper_ticks` | `0` | **稿紙刻度** — 竪排時每幾個字在邊欄點一個淡刻度，像真的稿紙 (0–64) |
| `[editor] ambiguous_width` | `"auto"` | **歧義寬度** — 「東亞歧義寬度」那些字符佔一格還是兩格。畫歪了就改這裏 (`auto` 問終端, `wide` 兩格, `narrow` 一格) |

### 標記

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] line_numbers` | `"absolute"` | **行號** — 左邊那一欄畫第幾行。相對行號數的是「離光標幾行」，跳行時好按 (`absolute` 絕對, `relative` 相對, `none` 不畫) |
| `[editor] line_number_fill` | `false` | **行號鋪底** — 行號那一格用淡底色鋪滿，而不是只寫一個數 |
| `[editor] diff_gutter` | `true` | **改動條** — 行號旁邊那一格用底色説哪幾行跟 git 裏的不一樣 |
| `[editor] word_level` | `"balanced"` | **分詞鬆緊** — 多容易把幾個字併成一個詞。嚴：只認没爭議的；松：詞典説是就是 (`strict` 嚴格, `balanced` 適中, `full` 寬松) |
| `[editor] word_mark` | `"color"` | **分詞標記** — 分詞標記用哪一種畫法 (`off` 不畫, `color` 不同顔色, `ink` 不同明度, `tint` 不同底色, `line` 下劃線) |
| `[editor] code_highlight` | `true` | **代碼上色** — 圍欄裏的代碼按它自己的語法上色；關掉則整塊一種紫 |
| `[editor] show_ruby` | `false` | **排出注音** — 把注音排在字的旁邊。默認關：文件裏是什麽，畫面上就是什麽 |
| `[editor] indent_hint` | `"none"` | **段首記號** — 竪排時段落開頭畫一個記號，長段落裏找得到分段在哪 (`none` 不畫, `symbol` 畫符號, `color` 換顔色) |
| `[editor] indent_symbol` | `"↵"` | **段首那個符號** — 段首記號畫成什麽字。段首記號設成「畫符號」時才用得上 |
| `[editor] table_rules` | `"line dash"` | **表格的欄線** — 表格裏那些竪線畫成什麽樣 (`line dash` 實線加虚線, `line` 只有實線, `line double` 實線加雙線, `color` 靠顔色分, `off` 不畫) |
| `[editor] char_info` | `true` | **字的碼位** — 狀態欄右端説出光標下那個字的 Unicode 碼位和區塊名 |
| `[editor] status_count` | `"text"` | **狀態欄字數** — 在狀態欄顯示全文的字數，有選區時也顯示選區的 (`text` 文本文件, `all` 所有文件, `off` 關) |
| `[editor] unicode_alarm` | `true` | **可疑字符** — 零寬字符、雙向控制符後面那一格和非普通空格鋪上琥珀底色 |

### 界面

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] scrolloff` | `3` | **光標邊距** — 光標周圍至少留幾行(竪排是幾縱)不讓它貼到邊上 (0–20) |
| `[editor] wheel_step` | `3` | **滚輪一格** — 滚輪撥一下走幾行。1 就是終端自己那一格 (1–10) |
| `[editor] tabs` | `"auto"` | **上方分頁條** — 頂上那條列着打開了哪些文件的横條 (`auto` 有兩個才畫, `always` 總是畫, `never` 不畫) |
| `[editor] command_line` | `true` | **命令行那一行** — 狀態欄底下再加一行：打命令、剛纔怎麽了、現在能按什麽 |
| `[panel] rounded` | `true` | **面板圓角** — 面板的四個角是圓的還是方的 |
| `[editor] language` | `"auto"` | **界面語言** — 編輯器界面顯示語言 (`auto` 跟隨系統, `zh` 繁體, `zhs` 簡體, `en` English) |

### 配色

| Setting | Default | What it does |
| --- | --- | --- |
| `[theme] name` | `"ink"` | **主題** — 用哪一套墨。十個内置主題，寫名字就行(「墨香」和 moxiang 一樣) (`ink` 墨香：黑墨、白金墨、金墨、紅墨，其餘的色階都算出來, `one-dark` One Dark：VS Code 裏最常見的那一套配色，只有深色, `github` GitHub：GitHub 網站與 VS Code 裏的那一套配色，深淺都有, `monokai` Monokai：Sublime Text 的經典配色，只有深色, `dracula` Dracula：紫調的暗色配色，只有深色, `tokyo-night` Tokyo Night：柔和的藍紫調，深淺都有, `catppuccin` Catppuccin：粉彩色，深色 Mocha，淺色 Latte, `gruvbox` Gruvbox：暖棕底的復古配色，深淺都有, `bw` 黑白：只有黑、白和灰——輕重説話，顏色不説, `morandi` 莫蘭迪：灰調的柔和配色，深淺都有) |
| `[theme] mode` | `"auto"` | **深色淺色** — 用深色那一套還是淺色那一套。「問終端」是去問終端底色是什麽 (`auto` 問終端, `dark` 深色, `light` 淺色) |
| `[theme] ground` | `"paint"` | **紙面** — 編輯器自己畫出紙的底色，還是把底色還給終端(終端設了透明就用這個) (`paint` 自己畫紙, `terminal` 還給終端) |
| `[theme] status_bar` | `"sunken"` | **狀態欄的底** — 底下那兩行比紙更沉，還是往墨的方向抬一階 (`sunken` 比紙更沉, `raised` 往墨抬一階) |
| `[theme] fill` | `false` | **代碼坐在底色上** — 代碼塊和引用要不要坐在一塊淡底色上 |

### 輸入法

| Setting | Default | What it does |
| --- | --- | --- |
| `[ime] scheme` | `"lingming"` | **輸入方案** — 用哪一套輸入方案（靈明和星陳自帶精華版），其他方案需安裝 (`lingming` 靈明, `xingchen` 星陳, `qingyun` 卿雲, `riyue` 日月, `pinyin` 拼音) |
| `[ime] commit` | `"default"` | **上屏方式** — 碼打完了什麽時候上屏：等下一鍵、只有一個候選就上，還是攢成整句 (`default` 預設, `delayed` 延遲(頂字), `unique` 唯一, `fluency` 整句) |
| `[ime] start` | `false` | **啓動就載入碼表** — 默認不載入——分詞模型照常載入，碼表等你第一次打字 |
| `[ime] system` | `"auto"` | **NORMAL模式下屏蔽系統版宇夢輸入法** — Normal 模態下請系統輸入法讓開，免得按鍵被它吃掉 (`auto` 自動, `keep` 不管它) |
| `[panel] display` | `"box"` | **候選怎麽畫** — 打字的時候候選畫在哪：光標旁邊的候選框、窗口最下面那一行，還是光標的下一行 (`box` 候選框, `bottom` 底行, `inline` 行中) |
| `[panel] inline_preedit` | `"off"` | **正在打的那一段** — 正在打的那一段寫在候選欄裏，還是寫進正文；寫進正文的時候寫編碼還是寫首選 (`off` 候選欄裏, `composition` 正文裏寫編碼, `preview` 正文裏寫首選) |
| `[panel] page_size` | `6` | **候選一頁幾條** — 候選框一頁列幾個字 (1–9) |
| `[panel] markers` | `"１２３４５６７８９"` | **候選的序號** — 候選前面那九個序號畫成什麽字 |
| `[editor] show_chaifen` | `false` | **候選旁的拆分** — 打字時在候選字旁邊寫出它的拆分 |

### 編輯

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] word_completion` | `4` | **詞語補全** — 打幾個西文字母後，列出打開的文件裏出現過的詞；漢字是這個數的一半（向上取整）。C-n 隨時列出 (0–20) |
| `[editor] auto_pairs` | `"basic"` | **自動配對** — 輸入左括號或引號時自動補上右半邊；再打右半邊會跳過去 (`off` 關, `basic` 基本, `full` 完整) |
| `[editor] completion_page_size` | `6` | **補全一頁幾條** — 單詞、代碼和終端命令的補全列表一次顯示幾條 (1–20) |
| `[editor] indent_width` | `4` | **縮進幾列** — `>` 加、`<` 減的列數，也是 Tab 打出來的空格數 (1–16) |
| `[editor] tab_width` | `8` | **TAB 有多寬** — 一個 TAB 推進到幾的倍數。碼表就是靠它對齊的 (1–16) |
| `[editor] tab_inserts` | `"spaces"` | **Tab 打什麽** — 插入模式按 Tab 打出來的是什麽。Shift-Tab 打另一種 (`spaces` 空格, `tab` 製表符) |
| `[editor] smart_case` | `true` | **智能大小寫** — 搜索時：模式裏没有大寫就不分大小寫，有一個大寫就分 |
| `[editor] fuzzy_search` | `false` | **模糊搜索出廠開着** — 搜索面板那個「模糊」開關一開始是開是關 |

### 文件

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] reload_auto` | `true` | **自動重載** — 自動重新載入文檔以反映外部更改 |
| `[editor] autosave` | `true` | **搶救副本** — 没保存的時候在文件旁邊留一份副本，崩了還能撈回來 |
| `[editor] session` | `false` | **接着上次** — 不帶文件名啓動時：開空白文檔，還是接着上次那些文件 |
| `[editor] remember` | `true` | **記住打開過的文件和位置** — 關掉後不記録也不讀取：每個文件上次停在哪一行、最近的文件和項目、上次開着的文件 |

### 鍵盤

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] which_wrap` | `"b"` | **哪些鍵跨行** — 哪些按鍵會跨越行尾(vim 功能)。只允許 b h l < > ~ |
| `[editor] language_key` | `"C-^"` | **切中英的鍵** — 報不出單獨 Shift 的終端上，用這個鍵切中文/ABC |
| `[keys] flavor` | `false` | **Yumete 鍵位風味** — 開了之後 `d` `c` 只删不剪，要剪按 `A-d` `A-c`。剛複製好的那一段不再被一次隨手删除吃掉。`[keys.normal]` 蓋得過它 |
| `[keys] preset` | `"helix"` | **鍵位那一套** — 整套鍵位照 helix 還是照 vim 的習慣 (`helix` helix, `vim` vim) |

