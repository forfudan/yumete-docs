<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | Arguments | What it does |
| --- | --- | --- |
| `:cd` | `<路径>` | 切换工作目录 |
| `:pwd` |  | 显示工作目录 |
| `:vsplit` `:vs` | `<路径>` | 在旁边分出窗口（同 C-w v）；可带文件名 |
| `:hsplit` `:hs` `:split` | `<路径>` | 在下方分出窗口（同 C-w s）；可带文件名 |
| `:vnew` |  | 在旁边打开空白窗口（同 C-w n v） |
| `:hnew` |  | 在下方打开空白窗口（同 C-w n s） |
| `:open` `:o` `:e` `:edit` | `<路径>` | 打开一个文件 |
| `:new` `:enew` `:ene` |  | 新建空缓冲区 |
| `:tabnew` `:tabe` `:tabedit` | `<路径>` | vim 的 :tabnew：新建空缓冲区，带文件名则打开该文件 |
| `:write` `:w` | `<路径>` | 保存；带路径则另存副本，`:write-as` 会切换到新文件 |
| `:write-all` `:wa` |  | 保存所有改动过的文件 |
| `:write-as` | `<路径>` | 另存为新文件并切换过去(`:w <文件名>` 只保存副本，仍留在原文件) |
| `:recover` |  | 询问是否恢复未保存的内容 |
| `:encoding` | `utf-8｜gb18030｜big5｜shift-jis` | 文件保存时用的编码：utf-8、gb18030、big5、shift-jis |
| `:reload` |  | 重新载入文件；加 ! 放弃本地改动 |
| `:reload-config` `:config-reload` |  | 重新载入 config.toml，无需重启 |
| `:config-open` |  | 打开全局 config.toml |
| `:config-open-workspace` |  | 打开本项目的 .yumete/config.toml |
| `:reload-auto` | `on｜off` | 文件在外部被修改时自动重新载入；有未保存的改动时只提醒 |
| `:readonly` `:ro` | `on｜off` | 只读：禁止编辑此文件 |
| `:goto` | `<行號>` | 跳转到某行(直接 `:42` 也行) |
| `:count` `:wc` |  | 字数统计；`progress` 看今天，`target` 设每日目标 |
| `:count-progress` |  | 写作进度：今天写了多少，离目标还有多少 |
| `:count-target` | `<字數>｜off` | 每日字数目标；`:count-target off` 取消 |
| `:check-usage` |  | 检查用字：同一个词有两种写法时(里/裡、为/爲、自定义的人名)，列出较少的那种 |
| `:check-config` |  | 检查配置：哪一行导致整个文件失效，哪些键无人读取 |
| `:check-names` |  | 检查专名：找出百科词条名写错同音字的地方(醉翁亭写成醉翁停) |
| `:diagnostics-all` |  | 列出语言服务器报告的所有问题，可用 gf 跳转 |
| `:check-charset` |  | 检查字集：列出不在通用规范/台湾/香港/古籍字表中的字(多数字体缺这些字) |
| `:check-merge` |  | 列出这份文件里的合并冲突 |
| `:check-punct` |  | 检查标点：中文里的半角逗号句号、`...`，以及未闭合的「」()《》 |
| `:convert` | `s｜t｜tw｜hk｜jp｜c｜g s｜t｜tw｜hk｜jp｜c｜g` | 简繁转换(用 opencc)；:convert 列出可用的转换 |
| `:convert-opencc` |  | opencc 是否已安装、安装位置、版本 |
| `:convert-opencc-install` |  | 安装 opencc(macOS 上直接运行，其他系统只打印命令) |
| `:convert-opencc-update` |  | 把 opencc 升级到最新版 |
| `:quit` `:q` |  | 关闭当前区域；若是最后一个窗口则退出编辑器(`quit!` 放弃改动) |
| `:quit-window` `:close` `:clo` |  | 关闭当前区域，但不关闭最后一个窗口(vim 的 `:close`，简写 `:clo`) |
| `:quit-others` `:only` `:on` |  | 只保留当前窗口，关闭其他窗口和侧栏(vim 的 `:only`，简写 `:on`) |
| `:quit-all` `:qa` |  | 关闭所有文件并退出(简写 `:qa`) |
| `:write-quit` `:wq` | `<路径>` | 保存并退出(简写 `:wq`；`:x` 只在有改动时保存) |
| `:write-quit-all` `:wqa` `:xa` |  | 保存所有改动过的文件并退出 |
| `:exit` `:x` `:xit` | `<路径>` | 有改动才保存，然后退出(简写 `:x`，也可用 `:xit`) |
| `:update` `:up` |  | 有改动才保存，不退出(简写 `:up`) |
| `:undo` `:u` |  | 撤销上一次改动 |
| `:earlier` `:ear` | `<步數>｜<時間>` | 撤销若干步，或回到多久以前(5m、1h) |
| `:later` `:lat` | `<步數>｜<時間>` | 重做若干步，或前进到多久以后 |
| `:redo` `:red` |  | 重做 |
| `:word` `:wd` |  | 分词：词表、标记、粒度 |
| `:word-mark` | `off｜color｜ink｜tint｜line｜字色｜墨色` | 分词标记 |
| `:wiki` | `<詞條名>` | 按名称查词条，拼错或顺序颠倒也能找到 |
| `:wiki-edit` |  | 打开本项目的 .yumete/wiki.md，不存在则新建 |
| `:wiki-global` |  | 打开全局 wiki.md(整个系列共用的设定) |
| `:keymap-yumete-flavor` | `off｜basic｜full` | Yumete 键位风味：在 helix/vim 键位上的少量改动；不带参数显示当前状态 |
| `:links` | `list｜graph｜off` | 链接面板：哪些文件 [[链接]] 到这里、这里链接到哪里；list 列表、graph 图、off 关闭 |
| `:links-export` |  | 将项目链接图导出为 .yumete/graph.html 并在浏览器中打开 |
| `:links-reindex` |  | 重新读取项目的 [[链接]] |
| `:wiki-mark` | `color｜line｜off` | 正文中词条名的标记：金色、下划线或不标 |
| `:wiki-where` |  | 百科来源：读取了哪些文件、各有几条、哪些无法标记 |
| `:wiki-reload` |  | 重新读取百科及其引用的所有文件 |
| `:word-list` |  | 当前使用的词表 |
| `:word-list-local` |  | 打开项目词表 .yumete/words.txt(人名、地名) |
| `:word-list-global` |  | 打开全局词表 segmentation.txt |
| `:word-list-reload` |  | 重新读取项目词表和全局词表 |
| `:word-level` | `off｜strict｜balanced｜full` | 分词粒度：多少个字算一个词 |
| `:word-discover` |  | 挖掘本文的用户词语：词典里没有的人名、地名 |
| `:word-discover-working` |  | 在工作目录中挖掘用户词语 |
| `:word-discover-project` |  | 在项目中挖掘用户词语 |
| `:word-habit` |  | 口头禅：本文比一般文本多用的词 |
| `:vertical` |  | 把这一页改为竖排 |
| `:horizontal` |  | 把这一页改为横排 |
| `:vertical-keys` `:vk` | `logical｜visual｜<logical｜visual>` | 竖排时 hjkl 按文字方向还是按屏幕方向移动 |
| `:theme` | `ink｜one-dark｜github｜monokai｜dracula｜tokyo-night｜catppuccin｜gruvbox｜bw｜morandi｜<主題名>` | 主题(深浅色用 :theme-mode) |
| `:theme-mode` | `system｜dark｜light` | 深色或浅色(system 跟随终端) |
| `:language` `:lang` | `zht｜zhs｜en｜<語言>` | 界面语言：`zht` 繁体/`zhs` 简体/`en` English |
| `:version` `:ver` |  | 版本号，以及配置、数据、日志的位置 |
| `:keymap` | `helix｜vim` | 键位预设：helix(默认)或 vim(支持 vim 的 x s dd ^ $ 等) |
| `:keymap-actions` |  | 列出所有可绑定的动作名 |
| `:info` |  | 文件信息：路径、大小、行数字数、语言、关联的语言服务器 |
| `:instant-info` | `dictionary｜wiki｜record｜docs｜diagnostics｜change` | 信息栏随光标显示哪一种(record/diagnostics/dictionary/wiki/docs；不写则按文件类型) |
| `:rules` | `<欄>…｜off` | 在指定列加标尺：`:rules 80 100 120`；不带数字为 80 和 100，`off` 关闭 |
| `:theme-fill` | `on｜off` | 代码和引用是否加底色(默认不加) |
| `:shot` | `screen｜png｜html｜txt <路径>` | 截图：默认复制到剪贴板；png/html/txt 则保存到下载文件夹 |
| `:yume` `:y` | `on｜off` | 宇梦输入引擎开关：on 打开、off 关闭 |
| `:yume-where` |  | 码表和数据的查找位置及顺序 |
| `:yume-which` |  | 当前方案及码表来源 |
| `:yume-scheme` | `lingming｜xingchen｜qingyun｜riyue｜pinyin` | 开始输入：载入方案(不写名称则用配置中的) |
| `:yume-annotation` | `off｜next｜multi｜double｜<模式名>` | 候选注解：关、下一个，或指定模式 |
| `:yume-commit` | `default｜delayed｜unique｜fluency｜auto` | 上屏方式：默认、延迟(顶字)、唯一、整句 |
| `:yume-charset` | `all｜common｜tonggui｜harmonic` | 字集过滤：全部、常用、简化、传统 |
| `:yume-charset-sort` | `original｜common｜tonggui｜harmonic` | 字集排序：原始、常用、简化、传统字优先 |
| `:yume-lanes` | `tonggui｜tongfan｜tai｜common｜harmonic｜guji｜gang｜default` | 整句字集轨：把一轨提到首轨，default 回到默认 |
| `:yume-panel` | `box｜bottom｜inline` | 候选位置：box 光标旁的框，bottom 窗口底行，inline 光标下一行 |
| `:yume-inline-preedit` | `off｜composition｜preview` | 编码显示位置：off 候选栏，composition 正文显示编码，preview 正文显示首选 |
| `:yume-menu-size` | `<1–9>` | 每页候选数(1–9，默认 6) |
| `:yume-autocompletion` | `on｜off` | 输入预测：编码未打完就给出候选 |
| `:yume-installed` |  | 改用系统安装的码表(与 builtin 相对) |
| `:yume-builtin` |  | 改用内置码表，忽略已安装的 |
| `:yume-table` | `<路径>` | 用你自己的码表(Rime 的 .dict.yaml 也行) |
| `:set` `:se` | `<選項>` | vim 的 :set，支持 modeline 的几项：ft、ts、sw、et、tw；不带参数则打开设置面板 |
| `:setfiletype` `:setf` | `<文件類型>` | vim 的 :setf，同 :set ft= |
| `:syntax` `:syn` | `markdown｜typst｜text｜python｜javascript｜json｜yaml｜toml｜html｜css｜ada｜c｜gas｜go｜java｜nasm｜pascal｜r｜rust｜<語法>` | 文件的标记语言(不带参数显示当前值) |
| `:pipe` | `<命令>` | 将选区传给终端命令，用输出替换选区 |
| `:sh` | `<命令>` | 运行命令，输出放进一个缓冲区 |
| `:!command` |  | 在终端里直接运行命令并查看输出(vi 写法) |
| `:which-wrap` | `<字母>` | 哪些键可以跨越行尾(vim 键位)。只能是 b h l < > ~ |
| `:line-numbers` `:ln` | `absolute｜relative｜none` | 行号：absolute 绝对、relative 相对光标、none 不显示；不带参数显示当前模式 |
| `:view-wrap` | `on｜off` | 自动换行开关；宽度用 `:view-wrap-width` 设 |
| `:view-wrap-width` | `0｜<幾欄>` | 正文宽度(列数)；`:view-wrap-width 50` 设宽度，`0` 跟随窗口 |
| `:view-wrap-height` | `0｜<幾字>` | 竖排每列字数；`:view-wrap-height 30` 设长度，`0` 跟随窗口 |
| `:view-margin` | `never｜dense｜loose｜always` | 页边：是否为注音、悬挂标点、着重号、平仄留出位置 |
| `:view-pages-horizontal` | `<1–4>` | 分栏：横排时分成多栏并排，文字从左栏接到右栏 |
| `:view-pages-vertical` | `<1–4>` | 段组：把竖排的页面横着分成几条，右上读到左上，再右下读到左下 |
| `:view-sentence` | `on｜off` | 一句一纵：竖排时每句另起一纵，只改显示，不改文件 |
| `:view-hanging` | `on｜off` | 标点悬挂：句读挂在页边 |
| `:view-numbers-fill` | `on｜off` | 行号栏是否加底色(默认不加，横排竖排一样) |
| `:view-diagnostics` | `hint｜info｜warning｜error｜off` | 行末诊断：hint、info、warning、error 或 off |
| `:view-diff` | `on｜off` | 改动条：行号旁用底色标出与 git 版本不同的行 |
| `:view-typewriter` | `on｜off` | 打字机模式：光标所在行始终居中 |
| `:view-focus` | `on｜off` | 专注：正在写的段落保持清晰，其余变淡 |
| `:view-meter` | `on｜off` | 平仄：字旁标平仄，句末标韵脚(今音，入派三声) |
| `:view-punct` | `on｜off` | 标点提示：在半角标点和 ... 旁显示应使用的全角标点 |
| `:view-code` | `on｜off` | 代码着色：代码块按其语言着色 |
| `:view-long-line` | `off｜<幾字>` | 行长超过此字数时停止着色 |
| `:view-hud` | `off｜basic｜full` | 光标提示：不显示、胶囊、面板 |
| `:view-preview` | `on｜off` | 打开或关闭排版后的页面：先在旁边开页面窗口，开不了就用浏览器 |
| `:view-preview-window` | `on｜off` | 在旁边的窗口中显示排好的页面，跟随光标(需要 tinymist，以及 Ghostty 或 kitty) |
| `:view-preview-browser` | `on｜off` | 交给排版器排版，在浏览器中查看 |
| `:view-preview-fit` | `width｜page` | 页面窗口中页面的大小：页宽或整页 |
| `:view-preview-theme` | `on｜off` | 用主题配色显示预览页面：纸为背景色，黑字为文字色；关闭则按印刷原样 |
| `:view-preview-vertical` | `on｜off` | 文字窗口竖排时，Markdown 预览也竖排：从右往左一列一列，像竖排导出那样 |
| `:render` | `off｜basic｜full` | 渲染程度：源码、着色、所见即所得 |
| `:indent` | `off｜basic｜full｜<幾格，至多 8>` | 首行缩进：`off`/`basic`(保留段间空行)/`full`(隐藏段间空行)，或格数 |
| `:indent-tab` | `spaces｜tab` | Tab 键输入空格还是制表符(Shift-Tab 输入另一种) |
| `:indent-width` | `<幾格，1–16>` | 缩进宽度：Tab 输入的空格数，> 和 < 移动的格数 |
| `:hard-wrap` | `<幾欄>` | 按宽度重新硬换行(选区或光标所在段)，不改内容；0 把每段合成一行；不带数字按 hard_wrap 设置 |
| `:align` | `<符號>` | 按某个符号对齐选中的行，默认为 = |
| `:split-join` |  | 把光标所在括号里的各项拆成每行一项，或合并回一行 |
| `:reflow` | `<幾欄>` | 按宽度重排选区(默认 80 列) |
| `:auto-pairs` | `off｜basic｜full` | 自动补上右括号：关/基本/完整；不带参数显示当前档位 |
| `:indent-hint` | `none｜color｜symbol` | 缩进的两格显示什么 |
| `:table` `:ta` `:tab` | `<行>x<欄>` | 插入空表：`:table 3 4` 为三行四列，首行为表头；只能在空行使用 |
| `:table-render` | `off｜basic｜window` | 表格显示：源码、基本、全窗；不带参数显示当前模式 |
| `:table-check` |  | 检查整张表：行名重复、列数不对、字不在字集里 |
| `:table-rules` | `off｜color｜line｜<樣式> solid｜dash｜double` | 列线：列与列之间的分隔方式 |
| `:table-sort` | `<欄> a｜d …` | 按列排序：`sort 1 a 2 d` 先按第一列升序，再按第二列降序 |
| `:replace` `:r` | `<路径>` | 搜索与替换 |
| `:replace-buffers` `:rb` |  | 在所有打开的文件中替换 |
| `:replace-working` `:rw` |  | 在工作目录中替换 |
| `:replace-project` `:rp` |  | 在项目中替换 |
| `:pipe-before` | `<命令>` | 运行终端命令，把输出插在选区之前 |
| `:pipe-after` | `<命令>` | 运行终端命令，把输出插在选区之后 |
| `:read` | `<路径>` | 将文件内容插入选区之后 |
| `:view-fold` |  | 把选中的行做成折叠 |
| `:keep-pipe` | `<命令>` | 只保留终端命令执行成功的选区 |
| `:pipe-to` | `<命令>` | 把选区交给终端命令，不收回输出 |
| `:yuhao` |  | 打开宇浩输入法官网 |
| `:search` `:s` `:grep` | `<路径>` | 打开搜索面板：可跨文件，选项更多 |
| `:search-buffers` `:sb` |  | 在所有打开的文件中搜索 |
| `:search-working` `:sw` |  | 在工作目录中搜索 |
| `:search-project` `:sp` |  | 在项目中搜索 |
| `:sidebar-explorer` | `on｜off` | 打开或关闭左侧栏的文件树，打开时光标移过去 |
| `:sidebar-buffers` | `on｜off` | 打开或关闭左侧栏的缓冲区列表，打开时光标移过去 |
| `:sidebar-outline` | `on｜off` | 打开或关闭左侧栏的大纲，打开时光标移过去 |
| `:sidebar-search` | `on｜off` | 打开或关闭左侧栏的搜索，打开时光标移过去 |
| `:sidebar-links` | `on｜off` | 打开或关闭左侧栏的链接，打开时光标移过去 |
| `:sidebar-info` | `on｜off` | 打开或关闭右侧栏的信息面板，光标留在正文 |
| `:table-detail` | `on｜off` | 记录面板：显示或隐藏 |
| `:table-numbers` | `on｜off` | 列号行：␣t3/、␣t20,20g 用的就是它 |
| `:table-header` | `on｜off` | 首行是表头还是数据 |
| `:table-schema` | `write` | 显示表格结构；write 写入同目录的 datapackage.json |
| `:table-delimiter` | `<分隔符>` | 按此分隔符把文件读成表格并记住(tab、space、comma、semicolon 或该字符) |
| `:table-hide` | `<欄號>` | 隐藏第 N 列(只是不显示，照常读写)，并记住 |
| `:table-show` | `<欄號>` | 重新显示被隐藏的第 N 列 |
| `:table-jump` | `<列名>` | 跳到表格中该名称所在的行(`:table-jump 木`) |
| `:table-find` | `row｜column｜<字符串> <字符串>` | 查找：`row` 按行(同 `/`)，`column` 按列(同表格里的 t/ t?) |
| `:paste-table` | `<格式> [<格式>]` | 将剪贴板中的表格粘贴为目标格式；两个参数时第一个为源格式 |
| `:convert-table` | `<格式> [<格式>]` | 转为目标格式(csv、tsv、pipe)；两个参数时第一个为源格式 |
| `:wheel` | `<幾行，1–10>` | 滚轮每格滚动的行数；`:wheel 1` 为终端默认 |
| `:clipboard` `:reg` |  | 粘贴菜单：从剪贴板和复制过的内容里选一项粘贴(也可先按 ␣ 再按双引号) |
| `:clipboard-yank` |  | 复制选区到系统剪贴板 |
| `:clipboard-paste` |  | 从系统剪贴板粘贴 |
| `:buffer` |  | 打开的文件：列出、切换、关闭 |
| `:buffer-next` `:bn` |  | 下一个 |
| `:buffer-previous` `:bp` |  | 上一个 |
| `:buffer-close` `:bc` |  | 关闭这个文件(`buffer-close!` 放弃改动) |
| `:format` `:fmt` |  | 按配置格式化此文件([language.markdown] format = …) |
| `:run` | `<名字>` | 运行配置中为该语言定义的命令 |
| `:markdown-footnote` |  | 脚注：自动编号并创建注释 |
| `:markdown-footnote-inline` |  | 行内注 ^[…]，不放到文末 |
| `:settings` | `<设置项>` | 设置页：每项附有说明，改了就写入并生效，u 撤销 |
| `:resume` |  | 恢复上次会话：打开这个目录上次开着的文件(不关闭现有的) |
| `:recent-files` |  | 最近打开的文件(本项目) |
| `:recent-files-global` |  | 最近打开的文件(所有项目) |
| `:changed-files` |  | 改动过的文件：git 中有改动的与未保存的(同 Space g) |
| `:recent-projects` |  | 最近打开的项目 |
| `:tutor` |  | 教程：把课文复制成你自己的文件，边改边学 |
| `:help` `:h` | `chinese｜vertical｜table｜commands｜<題目>` | 以可搜索的文件打开按键与命令列表 |
| `:export` `:ex` | `html｜typst｜epub｜csv｜tsv vertical｜horizontal｜hanging｜no-hanging｜ruby-html｜no-ruby-html｜ruby-typst｜no-ruby-typst｜ruby-markdown｜no-ruby-markdown｜turn｜jlreq｜page=｜font=｜<路径>` | 导出为 html、typst 或 epub |
| `:export-as-preview` | `html｜pdf｜<路径>` | 照预览的样子导出：Markdown 为 html，Typst 为 pdf |
| `:diff` | `<路径>` | 查看改动：按词比较，而非按行 |
| `:lsp-rename` | `<新名>` | 通过语言服务器重命名光标下的符号(各处一起改) |
| `:git-show` | `<提交>` | 在另一个窗口以只读方式打开已提交的版本 |
| `:git-diff` | `<提交>` | 与 git 中的版本逐词比较，默认比 HEAD |
| `:outline` | `<級>` | 大纲只列到第几级；`0` 关闭；不带参数报告状态 |
| `:ruby` |  | 编辑此处注音 |
| `:ruby-render` | `off｜basic｜full` | 注音显示：源码、着色、夹行；不带参数显示当前模式 |
| `:ruby-auto` |  | 按词自动注音(选区或整个文件) |
| `:ruby-auto-rare` |  | 只注陆、台、港常用字表都没有的字 |
| `:ruby-html` | `on｜off` | 识别 `<ruby>` |
| `:ruby-typst` | `on｜off` | 识别 `#ruby(…)` |
| `:ruby-markdown` | `on｜off` | 识别 `{这些\|zhèxiē}` |
| `:ruby-format` | `html｜typst｜markdown` | 把注音改写成另一种写法 |
| `:s/pat/rep/` |  | 替换：默认在选区内；`%s` 全文、`1-40s` 指定范围、`1,5,9s` 指定行；标志 g i f c n t y j；分隔符可换 |
