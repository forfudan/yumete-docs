<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

### 版面

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] layout` | `"horizontal"` | **排版方向** — 整页的字是横着走还是竖着走 (`horizontal` 横排, `vertical` 竖排) |
| `[editor] vertical_keys` | `"visual"` | **竖排的 hjkl** — 竖排时 hjkl 依照行文逻辑还是视觉方向 (`logical` 行文逻辑：h l 跨字、j k 跨行, `visual` 视觉方向：j k 下上、h l 左右) |
| `[editor] zong_length` | `0` | **每纵字数** — 竖排时一纵写几个字。散文舒服的上限在 32 字前后 (8–64) |
| `[editor] zong_gap` | `0` | **纵间距** — 纵与纵之间空几个半角格。每一纵都有，跟有没有东西无关 (0–4) |
| `[editor] pages_vertical` | `1` | **竖排分页** — 竖排的页面横着分成几条，每一条各自从右往左排 (1–4) |
| `[editor] pages_horizontal` | `1` | **横排分页** — 横排分成几栏并排，文字从左栏接到右栏 (1–4) |
| `[editor] indent` | `0` | **首行缩进** — 每段开头空几格。中文的惯例是 2 (0–8) |
| `[editor] measure` | `0` | **正文宽度** — 行在这里折叠，右边是页边距 (0–400) |
| `[editor] ruler` | `0` | **想写多长** — 只是一条线：超过这一栏的字变色，行照旧不折 (0–400) |
| `[editor] insert_final_newline` | `true` | **文末添加换行符** — 存档时在文末添加缺少的换行符，用这个文件自己的行尾(CRLF 文件添 CRLF)。空文件不添 |
| `[editor] soft_wrap` | `true` | **长行折回来** — 横排时长段落折到下一行；关掉则跑出右边看不见 |
| `[editor] hanging_punctuation` | `false` | **标点旁置** — 。，、？！：；「」 挂在边栏上，不占正文那一格 |
| `[editor] margin` | `"dense"` | **夹行** — 何时显示夹行(注音、着重号、平仄等信息) (`never` 从不, `dense` 挤的时候, `loose` 松的时候, `always` 总是) |
| `[editor] tatechuyoko` | `4` | **纵中横** — 竖排时一格里横着塞几个半角字，年份和页码就不会一位一行 (2–8) |
| `[editor] paper_ticks` | `0` | **稿纸刻度** — 竖排时每几个字在边栏点一个淡刻度，像真的稿纸 (0–64) |
| `[editor] ambiguous_width` | `"auto"` | **歧义宽度** — 「东亚歧义宽度」那些字符占一格还是两格。画歪了就改这里 (`auto` 问终端, `wide` 两格, `narrow` 一格) |

### 标记

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] line_numbers` | `"absolute"` | **行号** — 左边那一栏画第几行。相对行号数的是「离光标几行」，跳行时好按 (`absolute` 绝对, `relative` 相对, `none` 不画) |
| `[editor] line_number_fill` | `false` | **行号铺底** — 行号那一格用淡底色铺满，而不是只写一个数 |
| `[editor] diff_gutter` | `true` | **改动条** — 行号旁边那一格用底色説哪几行跟 git 里的不一样 |
| `[editor] word_level` | `"balanced"` | **分词松紧** — 多容易把几个字并成一个词。严：只认没争议的；松：词典説是就是 (`strict` 严格, `balanced` 适中, `full` 宽松) |
| `[editor] word_mark` | `"color"` | **分词标记** — 分词标记用哪一种画法 (`off` 不画, `color` 不同颜色, `ink` 不同明度, `tint` 不同底色, `line` 下划线) |
| `[editor] code_highlight` | `true` | **代码上色** — 围栏里的代码按它自己的语法上色；关掉则整块一种紫 |
| `[editor] show_ruby` | `false` | **排出注音** — 把注音排在字的旁边。默认关：文件里是什么，画面上就是什么 |
| `[editor] indent_hint` | `"none"` | **段首记号** — 竖排时段落开头画一个记号，长段落里找得到分段在哪 (`none` 不画, `symbol` 画符号, `color` 换颜色) |
| `[editor] indent_symbol` | `"↵"` | **段首那个符号** — 段首记号画成什么字。段首记号设成「画符号」时才用得上 |
| `[editor] table_rules` | `"line dash"` | **表格的栏线** — 表格里那些竖线画成什么样 (`line dash` 实线加虚线, `line` 只有实线, `line double` 实线加双线, `color` 靠颜色分, `off` 不画) |
| `[editor] char_info` | `true` | **字的码位** — 状态栏右端説出光标下那个字的 Unicode 码位和区块名 |
| `[editor] status_count` | `"text"` | **状态栏字数** — 在状态栏显示全文的字数，有选区时也显示选区的 (`text` 文本文件, `all` 所有文件, `off` 关) |
| `[editor] unicode_alarm` | `true` | **可疑字符** — 零宽字符、双向控制符后面那一格和非普通空格铺上琥珀底色 |

### 界面

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] scrolloff` | `3` | **光标边距** — 光标周围至少留几行(竖排是几纵)不让它贴到边上 (0–20) |
| `[editor] wheel_step` | `3` | **滚轮一格** — 滚轮拨一下走几行。1 就是终端自己那一格 (1–10) |
| `[editor] tabs` | `"auto"` | **上方分页条** — 顶上那条列着打开了哪些文件的横条 (`auto` 有两个才画, `always` 总是画, `never` 不画) |
| `[editor] command_line` | `true` | **命令行那一行** — 状态栏底下再加一行：打命令、刚才怎么了、现在能按什么 |
| `[panel] rounded` | `true` | **面板圆角** — 面板的四个角是圆的还是方的 |
| `[editor] language` | `"auto"` | **界面语言** — 编辑器界面显示语言 (`auto` 跟随系统, `zh` 繁体, `zhs` 简体, `en` English) |

### 配色

| Setting | Default | What it does |
| --- | --- | --- |
| `[theme] name` | `"ink"` | **主题** — 用哪一套墨。十个内置主题，写名字就行(「墨香」和 moxiang 一样) (`ink` 墨香：黑墨、白金墨、金墨、红墨，其余的色阶都算出来, `one-dark` One Dark：VS Code 里最常见的那一套配色，只有深色, `github` GitHub：GitHub 网站与 VS Code 里的那一套配色，深浅都有, `monokai` Monokai：Sublime Text 的经典配色，只有深色, `dracula` Dracula：紫调的暗色配色，只有深色, `tokyo-night` Tokyo Night：柔和的蓝紫调，深浅都有, `catppuccin` Catppuccin：粉彩色，深色 Mocha，浅色 Latte, `gruvbox` Gruvbox：暖棕底的复古配色，深浅都有, `bw` 黑白：只有黑、白和灰——轻重説话，颜色不説, `morandi` 莫兰迪：灰调的柔和配色，深浅都有) |
| `[theme] mode` | `"auto"` | **深色浅色** — 用深色那一套还是浅色那一套。「问终端」是去问终端底色是什么 (`auto` 问终端, `dark` 深色, `light` 浅色) |
| `[theme] ground` | `"paint"` | **纸面** — 编辑器自己画出纸的底色，还是把底色还给终端(终端设了透明就用这个) (`paint` 自己画纸, `terminal` 还给终端) |
| `[theme] status_bar` | `"sunken"` | **状态栏的底** — 底下那两行比纸更沉，还是往墨的方向抬一阶 (`sunken` 比纸更沉, `raised` 往墨抬一阶) |
| `[theme] fill` | `false` | **代码坐在底色上** — 代码块和引用要不要坐在一块淡底色上 |

### 输入法

| Setting | Default | What it does |
| --- | --- | --- |
| `[ime] scheme` | `"lingming"` | **输入方案** — 用哪一套输入方案（灵明和星陈自带精华版），其他方案需安装 (`lingming` 灵明, `xingchen` 星陈, `qingyun` 卿云, `riyue` 日月, `pinyin` 拼音) |
| `[ime] commit` | `"default"` | **上屏方式** — 码打完了什么时候上屏：等下一键、只有一个候选就上，还是攒成整句 (`default` 预设, `delayed` 延迟(顶字), `unique` 唯一, `fluency` 整句) |
| `[ime] start` | `false` | **启动就载入码表** — 默认不载入——分词模型照常载入，码表等你第一次打字 |
| `[ime] system` | `"auto"` | **NORMAL模式下屏蔽系统版宇梦输入法** — Normal 模态下请系统输入法让开，免得按键被它吃掉 (`auto` 自动, `keep` 不管它) |
| `[panel] display` | `"box"` | **候选怎么画** — 打字的时候候选画在哪：光标旁边的候选框、窗口最下面那一行，还是光标的下一行 (`box` 候选框, `bottom` 底行, `inline` 行中) |
| `[panel] inline_preedit` | `"off"` | **正在打的那一段** — 正在打的那一段写在候选栏里，还是写进正文；写进正文的时候写编码还是写首选 (`off` 候选栏里, `composition` 正文里写编码, `preview` 正文里写首选) |
| `[panel] page_size` | `6` | **候选一页几条** — 候选框一页列几个字 (1–9) |
| `[panel] markers` | `"１２３４５６７８９"` | **候选的序号** — 候选前面那九个序号画成什么字 |
| `[editor] show_chaifen` | `false` | **候选旁的拆分** — 打字时在候选字旁边写出它的拆分 |

### 编辑

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] word_completion` | `4` | **词语补全** — 打几个西文字母后，列出打开的文件里出现过的词；汉字是这个数的一半（向上取整）。C-n 随时列出 (0–20) |
| `[editor] auto_pairs` | `"basic"` | **自动配对** — 输入左括号或引号时自动补上右半边；再打右半边会跳过去 (`off` 关, `basic` 基本, `full` 完整) |
| `[editor] completion_page_size` | `6` | **补全一页几条** — 单词、代码和终端命令的补全列表一次显示几条 (1–20) |
| `[editor] indent_width` | `4` | **缩进几列** — `>` 加、`<` 减的列数，也是 Tab 打出来的空格数 (1–16) |
| `[editor] tab_width` | `8` | **TAB 有多宽** — 一个 TAB 推进到几的倍数。码表就是靠它对齐的 (1–16) |
| `[editor] tab_inserts` | `"spaces"` | **Tab 打什么** — 插入模式按 Tab 打出来的是什么。Shift-Tab 打另一种 (`spaces` 空格, `tab` 制表符) |
| `[editor] smart_case` | `true` | **智能大小写** — 搜索时：模式里没有大写就不分大小写，有一个大写就分 |
| `[editor] fuzzy_search` | `false` | **模糊搜索出厂开着** — 搜索面板那个「模糊」开关一开始是开是关 |

### 文件

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] reload_auto` | `true` | **自动重载** — 自动重新加载文档以反映外部更改 |
| `[editor] autosave` | `true` | **抢救副本** — 没保存的时候在文件旁边留一份副本，崩了还能捞回来 |
| `[editor] session` | `false` | **接着上次** — 不带文件名启动时：开空白文档，还是接着上次那些文件 |
| `[editor] remember` | `true` | **记住打开过的文件和位置** — 关掉后不记录也不读取：每个文件上次停在哪一行、最近的文件和项目、上次开着的文件 |

### 键盘

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] which_wrap` | `"b"` | **哪些键跨行** — 哪些按键会跨越行尾(vim 功能)。只允许 b h l < > ~ |
| `[editor] language_key` | `"C-^"` | **切中英的键** — 报不出单独 Shift 的终端上，用这个键切中文/ABC |
| `[keys] flavor` | `false` | **Yumete 键位风味** — 开了之后 `d` `c` 只删不剪，要剪按 `A-d` `A-c`。刚复制好的那一段不再被一次随手删除吃掉。`[keys.normal]` 盖得过它 |
| `[keys] preset` | `"helix"` | **键位那一套** — 整套键位照 helix 还是照 vim 的习惯 (`helix` helix, `vim` vim) |

