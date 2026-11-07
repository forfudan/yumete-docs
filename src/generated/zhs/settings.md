<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

### 版面

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] layout` | `"horizontal"` | **排版方向** — 横排还是竖排 (`horizontal` 横排, `vertical` 竖排) |
| `[editor] vertical_keys` | `"visual"` | **竖排的 hjkl** — 竖排时 hjkl 依照行文逻辑还是视觉方向 (`logical` 行文逻辑：h l 跨字、j k 跨行, `visual` 视觉方向：j k 下上、h l 左右) |
| `[editor] zong_length` | `0` | **每纵字数** — 竖排时每纵几个字。散文读起来舒服的上限约 32 字 (8–64) |
| `[editor] zong_gap` | `0` | **纵间距** — 纵与纵之间空几个半角格。每一纵都留，与有无内容无关 (0–4) |
| `[editor] pages_vertical` | `1` | **竖排分页** — 竖排页面横向分成几段，每段从右往左排 (1–4) |
| `[editor] pages_horizontal` | `1` | **横排分页** — 横排分成几栏并排，文字从左栏接到右栏 (1–4) |
| `[editor] indent` | `0` | **首行缩进** — 段首空几格，中文惯例为 2 (0–8) |
| `[editor] measure` | `0` | **正文宽度** — 正文在此处换行，右侧是页边距 (0–400) |
| `[editor] hard_wrap` | `0` | **硬换行宽度** — :hard-wrap 不带数字时用的宽度；改的是文件里的换行，不是显示 (1–400) |
| `[editor] ruler` | `0` | **标尺** — 只画一条线：超出此列的字变色，不换行 (0–400) |
| `[editor] insert_final_newline` | `true` | **文末添加换行符** — 保存时在文末补上缺少的换行符，使用该文件自己的行尾(CRLF 文件补 CRLF)。空文件不补 |
| `[editor] soft_wrap` | `true` | **自动换行** — 横排时长行自动换行；关闭则超出右边界 |
| `[editor] hanging_punctuation` | `false` | **标点旁置** — 。，、？！：；「」 悬挂在页边，不占正文的格 |
| `[editor] margin` | `"dense"` | **夹行** — 何时显示夹行(注音、着重号、平仄等) (`never` 从不, `dense` 挤的时候, `loose` 松的时候, `always` 总是) |
| `[editor] tatechuyoko` | `4` | **纵中横** — 竖排时一格内横排几个半角字符，年份、页码就不会一位占一行 (2–8) |
| `[editor] paper_ticks` | `0` | **稿纸刻度** — 竖排时每隔几个字在页边画一个淡刻度，像稿纸一样 (0–64) |
| `[editor] ambiguous_width` | `"auto"` | **歧义宽度** — 东亚歧义宽度字符占一格还是两格。显示错位时改这里 (`auto` 问终端, `wide` 两格, `narrow` 一格) |

### 标记

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] line_numbers` | `"absolute"` | **行号** — 左侧显示行号。相对行号显示与光标相隔几行，方便跳行 (`absolute` 绝对, `relative` 相对, `none` 不画) |
| `[editor] line_number_fill` | `false` | **行号底色** — 行号栏铺满淡底色，而不是只显示数字 |
| `[editor] diff_gutter` | `true` | **改动条** — 在行号旁用底色标出与 git 不同的行(不在 git 中则对比已保存的文件) |
| `[editor] end_of_line_diagnostics` | `"hint"` | **行末诊断** — 在行末显示语言服务器诊断，从哪一级起显示 (`disable` 不显示, `hint` 建议及以上, `info` 说明及以上, `warning` 警告及以上, `error` 只显示错误) |
| `[editor] modeline` | `true` | **读 vim 的 modeline** — 文件首尾五行内的 vim: set ft=… ts=…: 可设置文件类型、缩进和硬换行宽度 |
| `[editor] maths_preview` | `true` | **公式预览** — 光标在公式中时，在下方浮窗显示排版结果；需要 Ghostty 或 kitty 以及 typst 命令 |
| `[editor] preview_fit` | `"width"` | **页面窗口大小** — 页面窗口中页面的大小：页宽适应窗口并随光标滚动，或整页放进窗口 (`width` 页宽, `page` 整页) |
| `[editor] yank_flash` | `false` | **复制高亮** — 复制后，被复制的范围闪一下 |
| `[editor] indent_guides` | `false` | **缩进参考线** — 在代码行首每级缩进画一条竖线，同 helix；仅用于代码文件 |
| `[editor] indent_guides_character` | `"│"` | **参考线字符** — 画参考线用的字符，要占一格 |
| `[editor] indent_guides_skip_levels` | `0` | **跳过外层** — 最外几级缩进不画参考线 (0–8) |
| `[editor] indent_guides_scope` | `true` | **突出当前块** — 光标所在块的参考线加深 |
| `[editor] word_level` | `"balanced"` | **分词松紧** — 把几个字合成一个词的倾向。严格：只认没有争议的；宽松：词典里有就算 (`strict` 严格, `balanced` 适中, `full` 宽松) |
| `[editor] word_mark` | `"color"` | **分词标记** — 分词标记的显示方式 (`off` 不画, `color` 不同颜色, `ink` 不同明度, `tint` 不同底色, `line` 下划线) |
| `[editor] code_highlight` | `true` | **代码高亮** — 代码块按其语言高亮；关闭则整块为紫色 |
| `[editor] show_ruby` | `false` | **显示注音** — 在字旁显示注音。默认关闭，按文件原样显示 |
| `[editor] indent_hint` | `"none"` | **段首记号** — 竖排时在段首画记号，便于在长文中找到分段 (`none` 不画, `symbol` 画符号, `color` 换颜色) |
| `[editor] indent_symbol` | `"↵"` | **段首符号** — 段首记号用的字符，仅在段首记号为「画符号」时生效 |
| `[editor] table_rules` | `"line dash"` | **表格竖线** — 表格竖线的样式 (`line dash` 实线加虚线, `line` 实线, `line double` 实线加双线, `color` 用颜色区分, `off` 不画) |
| `[editor] char_info` | `true` | **字符信息** — 在状态栏右端显示光标处字符的 Unicode 码位和区块名 |
| `[editor] status_count` | `"text"` | **状态栏字数** — 在状态栏显示全文字数，有选区时也显示选区字数 (`text` 文本文件, `all` 所有文件, `off` 关) |
| `[editor] unicode_alarm` | `true` | **可疑字符** — 零宽字符、双向控制符后面那一格和非普通空格铺上琥珀底色 |

### 界面

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] scrolloff` | `5` | **光标边距** — 光标与边缘之间至少保留几行(竖排为几纵) (0–20) |
| `[editor] wheel_step` | `3` | **滚轮步长** — 滚轮每格滚动的行数，1 即终端默认 (1–10) |
| `[editor] tabs` | `"auto"` | **标签栏** — 顶部列出已打开文件的横条 (`auto` 两个及以上时显示, `always` 总是显示, `never` 不显示) |
| `[editor] command_line` | `true` | **命令行** — 状态栏下方加一行，用于输入命令、显示消息和按键提示 |
| `[editor] signature` | `true` | **右下角署名** — 命令行为空时，右端淡色显示 yumete |
| `[editor] sidebar_buttons` | `true` | **侧栏开关** — 标签栏两端各有一个色块，点击可开关该侧的侧栏 |
| `[panel] rounded` | `true` | **面板圆角** — 面板的四个角是圆的还是方的 |
| `[editor] language` | `"auto"` | **界面语言** — 编辑器界面显示语言 (`auto` 跟随系统, `zht` 繁体, `zhs` 简体, `en` English) |

### 配色

| Setting | Default | What it does |
| --- | --- | --- |
| `[theme] name` | `"ink"` | **主题** — 用哪一套主题。内置十个，写名字即可(「墨香」与 moxiang 相同) (`ink` 墨香：黑、白金、金、红四色墨，其余色阶自动推算, `one-dark` One Dark：VS Code 中最常见的配色，只有深色, `github` GitHub：GitHub 网站与 VS Code 中的配色，深浅都有, `monokai` Monokai：Sublime Text 的经典配色，只有深色, `dracula` Dracula：紫调的暗色配色，只有深色, `tokyo-night` Tokyo Night：柔和的蓝紫调，深浅都有, `catppuccin` Catppuccin：粉彩色，深色 Mocha，浅色 Latte, `gruvbox` Gruvbox：暖棕底的复古配色，深浅都有, `bw` 黑白：只用黑、白、灰，以轻重区分, `morandi` 莫兰迪：灰调的柔和配色，深浅都有) |
| `[theme] mode` | `"auto"` | **深色/浅色** — 用深色还是浅色主题；「问终端」按终端背景色决定 (`auto` 问终端, `dark` 深色, `light` 浅色) |
| `[theme] ground` | `"paint"` | **背景** — 背景由编辑器绘制，还是使用终端背景(终端设为透明时选后者) (`paint` 编辑器绘制, `terminal` 终端背景) |
| `[theme] status_bar` | `"sunken"` | **状态栏底色** — 底部两行呈凹陷还是凸起 (`sunken` 凹陷, `raised` 凸起) |
| `[theme] fill` | `false` | **代码底色** — 代码块和引用是否加淡底色 |
| `[theme] inactive` | `95` | **非活动窗口淡化** — 非活动窗口的不透明度(百分比)：100 即不变淡，同 vim 和 helix (50–100) |
| `[theme] focus` | `50` | **焦点模式淡化** — 焦点模式下其他段落的不透明度(百分比) (10–100) |

### 输入法

| Setting | Default | What it does |
| --- | --- | --- |
| `[ime] scheme` | `"pinyin"` | **输入方案** — 用哪套输入方案。拼音、灵明、星陈为内置，其他方案需安装 (`lingming` 灵明, `xingchen` 星陈, `qingyun` 卿云, `riyue` 日月, `pinyin` 宇浩拼音) |
| `[ime] commit` | `"default"` | **上屏方式** — 编码打完后何时上屏：等下一键、只剩一个候选时，或整句 (`default` 方案默认, `delayed` 延迟(顶字), `unique` 唯一, `fluency` 整句) |
| `[ime] charset` | `"all"` | **字集过滤** — 候选中只保留哪个字集的汉字 (`all` 全部汉字, `common` 仅常用汉字, `tonggui` 仅简化汉字, `harmonic` 仅传统汉字) |
| `[ime] charset_sort` | `"common"` | **字集排序** — 哪个字集的字在候选中靠前，对整句方案无效 (`original` 原始顺序, `common` 常用字优先, `tonggui` 简化字优先, `harmonic` 传统字优先) |
| `[ime] start` | `false` | **启动时加载码表** — 默认关闭：分词模型照常加载，码表在第一次输入中文时加载 |
| `[ime] system` | `"auto"` | **Normal 模式下让开系统输入法** — Normal 模式下请系统输入法让开，以免按键被它拦截 (`auto` 自动, `keep` 不处理) |
| `[ime] others` | `"off"` | **Normal 模式下让开其他输入法** — Normal 模式下把鼠须管、搜狗等切到英文；macOS 上切回时约三次失败一次 (`off` 不动, `aside` 切到英文, `aside-and-back` 切到英文再切回) |
| `[panel] display` | `"box"` | **候选位置** — 打字时候选显示在哪：光标旁的候选框、窗口底行，还是光标下一行 (`box` 候选框, `bottom` 底行, `inline` 光标下一行) |
| `[panel] inline_preedit` | `"off"` | **未上屏内容** — 未上屏的内容显示在候选栏里还是正文里；在正文里时显示编码还是首选 (`off` 候选栏里, `composition` 正文里写编码, `preview` 正文里写首选) |
| `[panel] page_size` | `6` | **每页候选数** — 候选框每页显示几个候选 (1–9) |
| `[panel] markers` | `"１２３４５６７８９"` | **候选序号** — 候选前九个序号用什么字符 |
| `[ime] annotation` | `"off"` | **候选注解** — 候选旁显示的注解：关闭或某个注解模式；打字时按 / 切换 (`off` 关, `multi` 多重, `double` 二重) |
| `[ime] annotation_modes` | `{}` | **注解模式** — 每个模式显示哪些栏。新增模式请在配置中写 [ime.annotation_modes.名字] |

### 编辑

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] word_completion` | `4` | **词语补全** — 输入几个西文字母后列出已打开文件中出现过的词，汉字为一半(向上取整)。C-n 随时列出 (0–20) |
| `[editor] auto_pairs` | `"basic"` | **自动配对** — 输入左括号或引号时自动补上右半边；再输入右半边会跳过 (`off` 关, `basic` 基本, `full` 完整) |
| `[editor] completion_page_size` | `6` | **补全每页条数** — 单词、代码和终端命令的补全列表一次显示几条 (1–20) |
| `[editor] indent_width` | `4` | **缩进宽度** — `>`/`<` 增减的列数，也是 Tab 输入的空格数 (1–16) |
| `[editor] tab_width` | `8` | **制表符宽度** — 制表符对齐到此数的倍数，码表靠它对齐 (1–16) |
| `[editor] tab_inserts` | `"spaces"` | **Tab 插入内容** — 插入模式下按 Tab 插入的内容；Shift-Tab 插入另一种 (`spaces` 空格, `tab` 制表符) |
| `[editor] smart_case` | `true` | **智能大小写** — 搜索词全小写时不区分大小写，含大写字母时区分 |
| `[editor] fuzzy_search` | `false` | **默认模糊搜索** — 搜索面板的「模糊」开关默认是否打开 |

### 文件

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] reload_auto` | `true` | **自动重载** — 文件被外部修改时自动重新加载 |
| `[editor] autosave` | `true` | **自动备份** — 未保存时在文件旁保留副本，崩溃后可恢复 |
| `[editor] session` | `false` | **恢复会话** — 不带文件名启动时：打开空白文档，还是恢复上次的文件 |
| `[editor] remember` | `true` | **记住打开过的文件和位置** — 关闭后不再记录或读取：各文件上次的位置、最近的文件和项目、上次的会话 |

### 键位

| Setting | Default | What it does |
| --- | --- | --- |
| `[editor] which_wrap` | `"b"` | **哪些键跨行** — 哪些键可以跨越行尾(vim 键位)。只能是 b h l < > ~ |
| `[editor] language_key` | `"C-^"` | **中英切换键** — 在无法识别单独 Shift 的终端上，用此键切换中文/ABC |
| `[keys] preset` | `"helix"` | **键位** — 键位沿用 helix 还是 vim (`helix` helix, `vim` vim) |
| `[keys] flavor` | `"basic"` | **Yumete 键位风味** — 在 helix/vim 键位之上的改动。基本：看得见的改动，如菜单、新键；完整：再加上改变熟悉键行为的几项，如 `d` `c` 只删不剪，剪切用 `A-d` `A-c`。`[keys.normal]` 优先于它 (`off` 关闭, `basic` 基本, `full` 完整) |
| `[keys] flavor_items` | `{}` | **风味各项** — 逐项开关 Yumete 风味。按 l 或空格进入 |
| `[keys] inherit` | `true` | **侧栏与命令行沿用我的改键** — [keys.normal] 里单键绑定的命令，侧栏也有时在侧栏生效；[keys.insert] 同理用于命令行与选择器。[keys.sidebar] 与 [keys.prompt] 优先于它 |

