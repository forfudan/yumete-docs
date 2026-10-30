<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | Arguments | What it does |
| --- | --- | --- |
| `:cd` | `<路径>` | 更改工作路径 |
| `:pwd` |  | 查询工作路径 |
| `:open` `:o` `:e` `:edit` | `<路径>` | 打开一个文件 |
| `:new` `:enew` |  | 开一个空的缓冲区 |
| `:write` `:w` | `<路径>` | 保存；给路径存一份副本，`:write-as` 才换过去 |
| `:write-all` `:wa` |  | 存下所有改过的文件 |
| `:write-as` | `<路径>` | 另存成新文件并改编辑它(`:w <文件名>` 只抄一份，人还在这边) |
| `:recover` |  | 问要不要用抢救稿 |
| `:reload` |  | 把文件再读一遍；加 ! 是丢掉你这里的改动 |
| `:reload-config` |  | 改完 config.toml，不必重启 |
| `:reload-auto` | `on｜off｜toggle` | 文件在外面改了就自己重读——你这里有改动时只提醒，不动手 |
| `:readonly` `:ro` | `on｜off｜toggle` | 只读：锁住这一份，不许改 |
| `:goto` | `<行號>` | 跳到某一行(`:42` 就够了) |
| `:count` `:wc` |  | 写了多少；`progress` 今天，`target` 每天要多少 |
| `:count-progress` |  | 写作进度：今天写了多少，离目标还有多少 |
| `:count-target` | `<字數>｜off` | 每天要写多少字；`:count-target off` 不再算 |
| `:check-usage` |  | 查用字：全文写了两种写法的(里/裡、为/爲、你自己配的人名)，列出少数那一边 |
| `:check-config` |  | 查配置档：哪一行让整份失效，哪一行写了没人读 |
| `:check-names` |  | 查专名：文件里把百科的名字写错了一个同音字的地方(醉翁亭写成醉翁停) |
| `:diagnostics-all` |  | 语言服务器説过的全部问题，排成一张 gf 跳得了的单子 |
| `:check-charset` |  | 查字集：不在通用规范/台湾/香港/古籍里的字，排版社的字体多半也没有 |
| `:check-merge` |  | 列出这份文件里的合并冲突 |
| `:check-punct` |  | 查标点：中文里的半角逗号句号、`...`、还有开了口没收尾的「」()《》 |
| `:convert` | `s｜t｜tw｜hk｜jp｜c｜g s｜t｜tw｜hk｜jp｜c｜g` | 简繁转换：交给 opencc 跑，:convert 看能走哪几条路 |
| `:convert-opencc` |  | opencc 装了没有、装在哪、哪个版本 |
| `:convert-opencc-install` |  | 装 opencc(macOS 这里真的会跑，别的机器只把命令印给你) |
| `:convert-opencc-update` |  | 把 opencc 升到最新 |
| `:quit` `:q` |  | 关掉这一个文件；只剩一个时才真的退出(`quit!` 不管改动) |
| `:quit-all` `:qa` |  | 每个开着的文件都关掉，然后离开(短写 `:qa`) |
| `:write-quit` `:wq` | `<路径>` | 无条件存好再退出(短写 `:wq`；`:x` 是改过才存的那个) |
| `:write-quit-all` `:wqa` `:xa` |  | 保存所有改动过的文件并退出 |
| `:exit` `:x` `:xit` | `<路径>` | 改过才存，然后退出(短写 `:x`，也认 `:xit`) |
| `:update` `:up` |  | 改过才存，不退出(短写 `:up`) |
| `:undo` `:u` |  | 撤销上一次改动 |
| `:earlier` `:ear` | `<步數>｜<時間>` | 撤销至几步或多久以前（5m、1h） |
| `:later` `:lat` | `<步數>｜<時間>` | 重做至几步或多久以后 |
| `:redo` `:red` |  | 重做 |
| `:word` `:wd` |  | 分词：哪一份词表、标记、粒度 |
| `:word-mark` | `off｜color｜ink｜tint｜line｜字色｜墨色` | 分词标记 |
| `:wiki` | `<詞條名>` | 查一个词条：打名字，打错了、顺序反了也找得到 |
| `:wiki-edit` |  | 打开本项目的 .yumete/wiki.md，没有就建一个 |
| `:wiki-global` |  | 打开全局的 wiki.md——整个系列共用的设定 |
| `:keymap-yumete-flavor` | `on｜off｜toggle` | Yumete 键位风味：在 helix/vim 键位之上的一小组改动。不带参数报当前状态 |
| `:wiki-panel` | `on｜off｜toggle` | 把词条固定在边栏——开着的时候不再浮出来 |
| `:wiki-mark` | `color｜line｜off` | 正文里怎么给词条名做记号：金色、下划线，或者不做 |
| `:wiki-where` |  | 百科到哪里找的：读了哪些文件、各几条、哪些标不出来 |
| `:wiki-reload` |  | 重读百科和它引到的每一个文件 |
| `:word-list` |  | 此刻用的是哪一份词表 |
| `:word-list-local` |  | 开项目的词表 .yumete/words.txt——人名、地名 |
| `:word-list-global` |  | 开全域词表 segmentation.txt |
| `:word-list-reload` |  | 重读两份词表(项目的 ＋ 全域的) |
| `:word-level` | `off｜strict｜balanced｜full` | 分词粒度：多少个字算一个词 |
| `:word-discover` |  | 挖掘这一篇的用户词语：人名地名，字典里没有的 |
| `:word-discover-working` |  | 在工作路径中挖掘用户词语 |
| `:word-discover-project` |  | 在项目路径中挖掘用户词语 |
| `:word-habit` |  | 口头禅：这一篇比别人多説的那些词 |
| `:vertical` |  | 把这一页转成竖排 |
| `:horizontal` |  | 把这一页转成横排 |
| `:vertical-keys` `:vk` | `logical｜visual｜<logical｜visual>` | 竖排的 hjkl 走行文还是走版面 |
| `:theme` | `ink｜one-dark｜github｜monokai｜dracula｜tokyo-night｜catppuccin｜gruvbox｜bw｜morandi｜<主題名>` | 主题：用哪一套墨(深浅在 :theme-mode) |
| `:theme-mode` | `system｜dark｜light` | 深色还是浅色(system 问终端) |
| `:language` `:lang` | `zh｜zhs｜en` | 编辑器自己説话用哪种语言：`zh` 繁体/`zhs` 简体/`en` English |
| `:version` `:ver` |  | 这是哪一版，以及配置、数据、日志都放在哪 |
| `:keymap` | `helix｜vim` | 键位预设：helix(出厂)或 vim——把 vim 的 x s dd ^ $ 翻过来 |
| `:keymap-actions` |  | 列出每个能绑的动作名 |
| `:info` |  | 这份文档：位置、大小、行字数、语言、哪几个服务器同它关联 |
| `:instant-info` | `dictionary｜wiki｜record｜docs｜diagnostics｜change` | 信息：即时显示哪一种(record/diagnostics/dictionary/wiki/docs；不写就按文件算) |
| `:rules` | `<欄>…｜off` | 在指定的栏上铺一道底纹：`:rules 80 100 120`；不写数字就是 80 和 100，`off` 关掉 |
| `:theme-fill` | `on｜off｜toggle` | 代码、引用要不要坐在底色上(出厂不坐) |
| `:shot` | `screen｜png｜html｜txt <路径>` | 截图：默认进剪贴板，png/html/txt 则存成文件(进下载文件夹) |
| `:yume` `:y` | `on｜off` | 宇梦输入引擎开关：on 打开、off 关闭 |
| `:yume-where` |  | 码表和字料之数据源及回退顺序 |
| `:yume-which` |  | 现在用的是哪个方案、码表打哪来 |
| `:yume-scheme` | `lingming｜xingchen｜qingyun｜riyue｜pinyin` | 开始打字：载入一个方案(不写名字就用配置里那个) |
| `:yume-chaifen` | `on｜off｜toggle` | 候选旁的拆分注解 |
| `:yume-commit` | `default｜delayed｜unique｜fluency｜auto` | 上屏方式：预设、延迟(顶字)、唯一、整句 |
| `:yume-panel` | `box｜bottom｜inline` | 候选画在哪：box 光标旁边的框，bottom 窗口最下面那一行，inline 光标的下一行 |
| `:yume-inline-preedit` | `off｜composition｜preview` | 正在打的那一段写在哪：off 候选栏里，composition 正文里写编码，preview 正文里写首选 |
| `:yume-menu-size` | `<1–9>` | 候选面板一页几条(1–9，出厂 6) |
| `:yume-autocompletion` | `on｜off｜toggle` | 输入预测：码没打完就先给候选 |
| `:yume-installed` |  | 改用系统装的那份码表(builtin 的反面) |
| `:yume-builtin` |  | 改用出厂自带的灵明码表，不管装了什么 |
| `:yume-table` | `<路径>` | 用你自己的码表(Rime 的 .dict.yaml 也行) |
| `:syntax` `:syn` | `markdown｜typst｜text｜python｜javascript｜json｜yaml｜toml｜html｜css｜ada｜c｜gas｜go｜java｜nasm｜pascal｜r｜rust｜<語法>` | 这个文件是哪种标记(不给参数就説现在是哪个) |
| `:pipe` | `<命令>` | 将选区发送为终端命令，且使用其输出替换选区 |
| `:sh` | `<命令>` | 跑一条命令，输出收进一个缓冲区 |
| `:!command` |  | 让出终端跑一条命令，直接看它跑(vi 的写法) |
| `:which-wrap` | `<字母>` | 哪些按键会跨越行尾(vim 功能)。只允许 b h l < > ~ |
| `:view-wrap` | `on｜off｜0｜<幾欄>` | 长段落折到下一行；`:view-wrap 50` 定宽度，`off` 不折 |
| `:view-wrap-vertical` | `0｜<幾字>` | 竖排一列写几个字；`:view-wrap-vertical 30` 定长度，`0` 跟着窗口 |
| `:view-margin` | `never｜dense｜loose｜always` | 边栏：注音、旁置标点、着重号、平仄那一格留不留 |
| `:view-pages-horizontal` | `<1–4>` | 分栏：横排分成几栏并排，文字从左栏接到右栏 |
| `:view-pages-vertical` | `<1–4>` | 段组：把竖排的页面横着分成几条，右上读到左上，再右下读到左下 |
| `:view-sentence` | `on｜off｜toggle` | 一句一纵：竖排时每句话单起一纵，只是看法，不动文件 |
| `:view-hanging` | `on｜off｜toggle` | 标点旁置：句读挂在边栏 |
| `:view-numbers-fill` | `on｜off｜toggle` | 行号那一条有没有自己的底色(默认没有，横排竖排一样) |
| `:view-diff` | `on｜off｜toggle` | 改动条：行号旁边那一格用底色説哪几行跟 git 那一份不一样 |
| `:view-typewriter` | `on｜off｜toggle` | 打字机：光标那一行一直停在画面中间，纸往上走 |
| `:view-focus` | `on｜off｜toggle` | 焦点：正在写的那一段留在纸上，其余的退后一级 |
| `:view-meter` | `on｜off｜toggle` | 平仄：每个字的平仄画在旁边，句末画韵脚(今音，入声已派入三声) |
| `:view-punct` | `on｜off｜toggle` | 标点提示：半角标点与 ... 旁边画出该用的那一个 |
| `:view-code` | `on｜off｜toggle` | 代码上色：围栏里的代码按它自己的语法上色 |
| `:view-long-line` | `off｜<幾字>` | 某行长度超过此字数，将停止上色 |
| `:view-hud` | `off｜basic｜full` | 光标旁边那个小牌子：不画、药丸、带框的面板 |
| `:view-preview` | `on｜off｜toggle` | 交给真正的排版器去排，在浏览器里看 |
| `:render` | `off｜basic｜full` | 画面上显示多少「结果」：原文、著色、所见即所得 |
| `:indent` | `off｜basic｜full｜<幾格，至多 8>` | 首行缩进：`off`/`basic`(缩进，空行留着)/`full`(连段间空行一起收)，或几格 |
| `:indent-tab` | `spaces｜tab` | Tab 键打什么：空格还是制表符(Shift-Tab 打另一种) |
| `:indent-width` | `<幾格，1–16>` | 缩进宽度：Tab 打几个空格、> 和 < 挪几格 |
| `:reflow` | `<幾欄>` | 选区按宽度重排（默认 80 栏） |
| `:auto-pairs` | `off｜basic｜full` | 输入左括号时自动补上右括号：关、基本、完整。无参数时，报告当前档位 |
| `:indent-hint` | `none｜color｜symbol` | 缩进的那两格上画什么 |
| `:table` | `<行>x<欄>` | 一张空表：`:table 3 4` 是三行四栏，首行是栏名。只能在空行上用 |
| `:table-render` | `off｜basic｜window` | 表格渲染模式：源码视图、基本视图、全窗视图。无参数时，报告当前模式名 |
| `:table-check` |  | 从头看一遍：重复的行名、栏数不对的行、超出字集的字 |
| `:table-rules` | `off｜color｜line｜<樣式> solid｜dash｜double` | 栏线：栏与栏之间怎么分开 |
| `:table-sort` | `<欄> a｜d …` | 照这几栏排：`sort 1 a 2 d` 是先第一栏顺排、再第二栏倒排 |
| `:replace` `:r` | `<路径>` | 找了换：面板里打找什么、换成什么 |
| `:replace-buffers` `:rb` |  | 在缓冲区(打开的每一个文件)替换 |
| `:replace-working` `:rw` |  | 在工作路径中替换 |
| `:replace-project` `:rp` |  | 在项目路径中替换 |
| `:pipe-before` | `<命令>` | 跑一条终端命令，把输出插在选区之前 |
| `:pipe-after` | `<命令>` | 跑一条终端命令，把输出接在选区之后 |
| `:read` | `<路径>` | 将文件内容插入选区之后 |
| `:pipe-to` | `<命令>` | 将选区发送为终端命令 |
| `:yuhao` |  | 打开宇浩输入法官网 |
| `:search` `:s` `:grep` | `<路径>` | 搜索：打开搜索面板进行搜索，可跨文件搜索，提供更多搜索选项 |
| `:search-buffers` `:sb` |  | 在缓冲区(打开的每一个文件)搜索 |
| `:search-working` `:sw` |  | 在工作路径搜索 |
| `:search-project` `:sp` |  | 在项目路径搜索 |
| `:sidebar` | `off｜explorer｜buffers｜outline｜search｜info` | 边栏：不写就说开着哪几扇，`off` 关掉，写名字就开那一扇 |
| `:table-detail` | `on｜off｜toggle` | 记录那一格：开、关，或者给个宽度 |
| `:table-numbers` | `on｜off｜toggle` | 栏号那一行：␣t3/、␣t20,20g 用的就是它 |
| `:table-header` | `on｜off｜toggle` | 第一行是栏名，还是跟别的行一样是数据 |
| `:table-schema` | `write` | 说这张表是怎么读的；write 写进旁边的 datapackage.json |
| `:table-delimiter` | `<分隔符>` | 照这个分隔符把文件读成表格，并记住(tab、space、comma、semicolon 或那个字符) |
| `:table-hide` | `<欄號>` | 把第 N 栏藏起来(只是不画，照样读写)，并记住 |
| `:table-show` | `<欄號>` | 把藏起来的第 N 栏再画出来 |
| `:table-jump` | `<列名>` | 跳到表格里叫这个名字的那一行(`:table-jump 木`) |
| `:table-find` | `row｜column｜<字符串> <字符串>` | 找：`row` 一行一行(就是 `/`)，`column` 一栏一栏(表格里 t/ t? 就是它) |
| `:paste-table` | `<格式> [<格式>]` | 将剪贴板中表格贴作目标格式；两个参数时第一个为源格式 |
| `:convert-table` | `<格式> [<格式>]` | 转为目标格式(csv,tsv,pipe)；两个参数时第一个为源格式 |
| `:wheel` | `<幾行，1–10>` | 滚轮一格走几行；`:wheel 1` 是终端自己的一格 |
| `:clipboard` |  | 粘贴菜单：剪贴板和取过的那几段，挑一个贴(␣" 也是) |
| `:clipboard-yank` |  | 选区送到系统剪贴板 |
| `:clipboard-paste` |  | 从系统剪贴板贴进来 |
| `:buffer` |  | 开着的文件：列出、切换、关掉 |
| `:buffer-next` `:bn` |  | 下一个 |
| `:buffer-previous` `:bp` |  | 上一个 |
| `:buffer-close` `:bc` |  | 关掉这一个(`close!` 不管改动) |
| `:format` `:fmt` |  | 照这种文件在配置里説的那样格式化([language.markdown] format = …) |
| `:run` | `<名字>` | 跑这种文件在配置里自己起名的那条命令 |
| `:markdown-footnote` |  | 脚注：号码自己找空的，注也一并开好 |
| `:markdown-footnote-inline` |  | 行内注 ^[…]，不去文末 |
| `:settings` `:set` |  | 整页一扇设置：每一项有名字有说明，改完 :w 存盘 |
| `:resume` |  | 接着上次：把这个目录上次开着的那几个加进来 |
| `:recent-files` |  | 最近开过的档(这个项目) |
| `:recent-files-global` |  | 最近开过的档(全部项目) |
| `:recent-projects` |  | 最近开过的项目 |
| `:tutor` |  | 一课：把课文抄成你自己的一个文件，边改边学 |
| `:help` `:h` | `chinese｜vertical｜table｜commands｜<題目>` | 键和命令，开成一个可以读、可以搜的文件 |
| `:export` `:ex` | `html｜typst｜csv｜tsv <路径>` | 导出成 html 或 typst，排版一起带上 |
| `:diff` | `<路径>` | 改了什么：按词比，不是按行 |
| `:lsp-rename` | `<新名>` | 让语言服务器把光标下的名字各处一起改 |
| `:git-show` | `<提交>` | 把提交过的那一稿以只读方式开在另一个编辑区 |
| `:git-diff` | `<提交>` | 跟 git 里那一份比，逐词：不写提交就是 HEAD |
| `:toc` `:outline` | `<第幾條>` | 列出标题；`:toc 3` 跳到第三条 |
| `:ruby` |  | 编辑此处注音 |
| `:ruby-render` | `off｜basic｜full` | 注音渲染模式：显示源码、颜色渲染、夹行显示。无参数时，报告当前模式名 |
| `:ruby-auto` |  | 按词自动注音(选中的，或者整份) |
| `:ruby-auto-rare` |  | 只注陆、台、港常用字表都没有的字 |
| `:ruby-html` | `on｜off｜toggle` | 认 `<ruby>` 这一种 |
| `:ruby-typst` | `on｜off｜toggle` | 认 `#ruby(…)` 这一种 |
| `:ruby-format` | `html｜typst` | 把注音改写成另一种写法 |
| `:s/pat/rep/` |  | 取代：选区内；`%s` 全文、`1-40s` 一段、`1,5,9s` 几行；旗标 g i f c n t y j；分隔符可换 |
