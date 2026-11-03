<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## `basic`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`case_menu`](#case_menu) | `` ` `` | `` g` `` | 大小写与繁简菜单 |
| [`sentences_on_h_l`](#sentences_on_h_l) | `H` `L` | — | 按句子走 |
| [`marks_on_m_quote`](#marks_on_m_quote) | `M` `'` | — | 设标记、跳标记 |
| [`two_thirds_page`](#two_thirds_page) | `C-n` `C-p` | — | 翻三分之二页 |
| [`tables`](#tables) | `Space t` | `Space t` | 表格菜单 |
| [`merge_conflicts`](#merge_conflicts) | `Space m` `]m` `[m` | `Space m` | 合并冲突 |
| [`input_method_menu`](#input_method_menu) | `Space z` | `Space z` | 输入法菜单 |
| [`recent_files`](#recent_files) | `Space o` | `Space o` | 最近的文件和项目 |
| [`registers_menu`](#registers_menu) | `Space "` | `Space "` | 寄存器菜单 |
| [`dictionary`](#dictionary) | `Space n` `Space N` | `Space n` `Space N` | 词典 |
| [`popup_panel_pairs`](#popup_panel_pairs) | `Space K` `Space l` `Space L` `Space x` `Space X` `Space i` `Space I` | `Space K` `Space l` `Space L` `Space x` `Space X` `Space i` `Space I` | 浮窗与侧栏 |
| [`explorer_here`](#explorer_here) | `Space E` | `Space E` | 从当前文件的目录浏览 |
| [`space_paging`](#space_paging) | `Space Space` `Space Backspace` | `Space Space` `Space Backspace` | 翻页 |
| [`space_quit`](#space_quit) | `Space q` | `Space q` | 关闭窗口 |
| [`sidebars`](#sidebars) | `C-w e` `C-w i` `C-w E` `C-w I` | `C-w e` `C-w i` `C-w E` `C-w I` | 侧栏 |
| [`goto_extras`](#goto_extras) | `gz` `gZ` `g/` `gL` `gx` | `gz` `gZ` `g/` `gL` `gW` | 跳转、搜这个词、链接 |
| [`insert_extras`](#insert_extras) | `C-a` `C-e` `C-n` `C-g` | — | 插入态的行首行尾、补全、断撤销点 |
| [`insert_ctrl_c`](#insert_ctrl_c) | `C-c` | — | 插入态退出 |
| [`x_selects_upward`](#x_selects_upward) | `X` | — | 往上选行 |
| [`bare_g_last_line`](#bare_g_last_line) | `G` | — | 到末行 |
| [`move_lines`](#move_lines) | `A-j` `A-k` | `A-j` `A-k` | 上下移动行 |
| [`line_start_keys`](#line_start_keys) | `0` `^` | — | 行首、首字 |
| [`d_to_line_end`](#d_to_line_end) | `D` `A-D` | — | 删到行尾 |
| [`block_comment_lines`](#block_comment_lines) | `Space C` | `Space C` | 块注释标记各占一行 |
| [`heading_folds`](#heading_folds) |  |  | 按标题折叠 |
| [`helix_fold_keys`](#helix_fold_keys) | `za` `zR` `zM` `zf` | — | helix 下的折叠键 |
| [`vim_comment_keys`](#vim_comment_keys) | — | `gc` | vim 的 gc 注释 |
| [`vim_space_menu`](#vim_space_menu) | — | `Space` | 空格菜单 |
| [`helix_keys_under_vim`](#helix_keys_under_vim) | — | `g.` `;` `,` `A-C` `A-,` `A--` `A-_` `A-:` `A-x` `A-s` `A-(` `A-)` `A-K` `A-d` `A-c` `A-u` `A-U` `A-!` `A-\|` `A-J` `A-;` `A-*` `A-.` `` A-` `` `A-o` `A-i` `A-I` `A-p` `A-n` `A-e` `A-b` `A-a` `C-s` `Z` `gb` `gy` `]g` `[g` `]e` `[e` `]x` `[x` | 借用 helix 的键 |

## `full`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`delete_keeps_register`](#delete_keeps_register) | `d` `c` `A-d` `A-c` | — | 删除不进寄存器 |
| [`esc_collapses`](#esc_collapses) | `Esc` | — | 收成一个光标 |
| [`shift_tab_other_indent`](#shift_tab_other_indent) | `S-Tab` | `S-Tab` | 插另一种缩进 |

## What each item changes

### `case_menu` {#case_menu}

开：反引号打开大小写与繁简转换菜单，vim 下是 g 加反引号。关：helix 的反引号转小写、A 加反引号转大写；vim 的 g 加反引号跳到标记。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `` ` `` | 字形组：大小写、繁简 | 转小写 |
| 字形 | `` `l `` | 转小写 |  |
| 字形 | `` `u `` | 转大写 |  |
| 字形 | ``` `` ``` | 大小写互换 |  |
| 字形 | `` `s `` | 繁→简 |  |
| 字形 | `` `t `` | 简→繁 |  |
| 字形 | `` `w `` | 简→台湾繁 |  |
| 字形 | `` `f `` | 转全角 |  |
| 字形 | `` `h `` | 转半角 |  |
| 字形 | `` `k `` | 简→香港繁 |  |
| 字形 | `` `c `` | 简→大陆繁 |  |
| 字形 | `` `g `` | 简→古籍繁 |  |
| 字形 | `` `j `` | 繁→日文新字体 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 前往 | `` g` `` | 字形组：大小写、繁简 | 回到标记(再按一个字母) |
| 字形 | `` g`l `` | 转小写 |  |
| 字形 | `` g`u `` | 转大写 |  |
| 字形 | ``` g`` ``` | 大小写互换 |  |
| 字形 | `` g`s `` | 繁→简 |  |
| 字形 | `` g`t `` | 简→繁 |  |
| 字形 | `` g`w `` | 简→台湾繁 |  |
| 字形 | `` g`f `` | 转全角 |  |
| 字形 | `` g`h `` | 转半角 |  |
| 字形 | `` g`k `` | 简→香港繁 |  |
| 字形 | `` g`c `` | 简→大陆繁 |  |
| 字形 | `` g`g `` | 简→古籍繁 |  |
| 字形 | `` g`j `` | 繁→日文新字体 |  |

### `sentences_on_h_l` {#sentences_on_h_l}

开：H、L 到上一句、下一句。关：helix 没有绑这两个键。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `H` | 上一句 |  |
| Normal mode | `L` | 下一句 |  |

### `marks_on_m_quote` {#marks_on_m_quote}

开：M 加一个标记，' 跳回去，可以跨文件。关：这两个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `M` | 设标记(再按一个字母) |  |
| Normal mode | `'` | 回到标记(再按一个字母) |  |

### `two_thirds_page` {#two_thirds_page}

开：C-n、C-p 往下、往上翻三分之二页。关：这两个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `C-n` | 前进三分之二页 |  |
| Normal mode | `C-p` | 后退三分之二页 |  |

### `tables` {#tables}

开：空格 t 打开表格菜单。关：表格命令照样可以在 : 里输入。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space t` | 表格操作 |  |
| ␣t 表格 | `Space t o` | 源码视图(显示源码) |  |
| ␣t 表格 | `Space t b` | 基本视图(表格按列对齐) |  |
| ␣t 表格 | `Space t t` | 全窗视图(表格独占窗口) |  |
| ␣t 表格 | `Space t q` | 退出全窗视图 |  |
| ␣t 表格 | `Space t ] / Space t [` | 下一张表/上一张表 |  |
| ␣t 表格 | `Space t x` | 转换表格格式(分隔符) |  |
| ␣t 表格 | `Space t w` | 长单元格:换行/折叠/全文 |  |
| ␣t 表格 | `Space t /` | 按列搜索(可指定列范围) |  |
| ␣t 表格 | `Space t g` | 去某一格(␣t 20,20g) |  |
| ␣t 表格 | `Space t r / Space t R` | 插入新行(下/上) |  |
| ␣t 表格 | `Space t c / Space t C` | 加一栏(右/左) |  |
| ␣t 表格 | `Space t d / Space t D` | 删这行/这栏 |  |
| ␣t 表格 | `Space t j / Space t k` | 这行下移/上移 |  |
| ␣t 表格 | `Space t h / Space t l` | 这栏左移/右移 |  |
| ␣t 表格 | `Space t y / Space t p / Space t P` | 复制该栏/贴到右边/贴到左边 |  |
| ␣t 表格 | `Space t v` | 用复制的栏盖掉该栏 |  |
| ␣t 表格 | `Space t 1s / Space t 1S` | 按列升序/降序排列(␣t1s; 1a2d8as 多列排序) |  |
| ␣t 表格 | `Space t < / Space t = / Space t >` | 这栏靠左/居中/靠右 |  |
| ␣t 表格 | `Space t F` | 重排对齐 |  |
| ␣t 表格 | `Space t i` | 该行记录 |  |
| ␣t 表格 | `Space t H` | 表格第一行是否为标题 |  |
| 转换表格格式(分隔符) | `Space t x p / Space t x P` | pipe(转换/粘贴) |  |
| 转换表格格式(分隔符) | `Space t x c / Space t x C` | csv(转换/粘贴) |  |
| 转换表格格式(分隔符) | `Space t x t / Space t x T` | tsv(转换/粘贴) |  |

### `merge_conflicts` {#merge_conflicts}

开：空格 m 处理合并冲突，helix 下 ]m、[m 跳到下一处、上一处。关：这几个键空着。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space m` | 合并冲突 |  |
| 下一个 | `]m` | 合并冲突 |  |
| 上一个 | `[m` | 合并冲突 |  |
| 合并冲突 | `Space m o` | 只留我方 |  |
| 合并冲突 | `Space m t` | 只留他方 |  |
| 合并冲突 | `Space m b` | 两方都留 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space m` | 合并冲突 |  |
| 合并冲突 | `Space m o` | 只留我方 |  |
| 合并冲突 | `Space m t` | 只留他方 |  |
| 合并冲突 | `Space m b` | 两方都留 |  |

### `input_method_menu` {#input_method_menu}

开：空格 z 打开输入法菜单。关：切中英的键照常能用。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space z` | 输入法 |  |
| 输入法 | `Space z z` | 输入法开/关 |  |
| 输入法 | `Space z m` | 上屏方式 |  |
| 输入法 | `Space z p` | 候选栏画在哪 |  |
| 输入法 | `Space z e` | 正在打的那一段写在哪 |  |
| 输入法 | `Space z y` | 输入预测 开/关 |  |
| 输入法 | `Space z i` | 选方案 |  |
| 输入法 | `Space z n` | 下一个方案 |  |
| 输入法 | `Space z 3-9` | 一页几条 |  |
| 输入法 | `Space z /` | 候选旁的注解，换下一个 |  |
| 输入法 | `Space z t` | 改用安装版码表 |  |
| 输入法 | `Space z w` | 查看码表源 |  |
| 输入法 | `Space z W` | 查看数据位置 |  |

### `recent_files` {#recent_files}

开：空格 o 打开最近的文件和项目。关：这个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space o` | 开上次的 |  |
| 开上次的 | `Space o f` | 最近开过的档 |  |
| 开上次的 | `Space o g` | 最近开过的档(全部项目) |  |
| 开上次的 | `Space o p` | 最近开过的项目 |  |
| 开上次的 | `Space o r` | 接着上次 |  |

### `registers_menu` {#registers_menu}

开：空格加双引号打开寄存器菜单。关：这个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space "` | 寄存器·剪贴板 |  |

### `dictionary` {#dictionary}

开：空格 n 在浮窗里查光标下的字，空格 N 在侧栏里查。关：这两个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space n` | 显示汉字信息(浮窗) |  |
| 空格 | `Space N` | 显示汉字信息(边栏) |  |

### `popup_panel_pairs` {#popup_panel_pairs}

开：空格 K 把说明放进侧栏；空格 l、x、i 在浮窗里看诊断、改动、表格记录，大写在侧栏里看。关：这些键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space K` | 显示定义文档(边栏) |  |
| 空格 | `Space l` | 显示诊断信息(浮窗) |  |
| 空格 | `Space L` | 显示诊断信息(边栏) |  |
| 空格 | `Space x` | 显示改动(浮窗) |  |
| 空格 | `Space X` | 显示改动(边栏) |  |
| 空格 | `Space i` | 显示表格行记录(浮窗) |  |
| 空格 | `Space I` | 显示表格行记录(边栏) |  |

### `explorer_here` {#explorer_here}

开：空格 E 从当前文件所在的目录浏览文件。关：这个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space E` | 浏览文件(本文件路径) |  |

### `space_paging` {#space_paging}

开：空格 空格往下翻一页，空格 退格往上翻一页。关：这两个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space Space` | 下一页 |  |
| 空格 | `Space Backspace` | 上一页 |  |

### `space_quit` {#space_quit}

开：空格 q 关闭当前窗口，同 :quit。关：这个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space q` | 关闭窗口 |  |

### `sidebars` {#sidebars}

开：C-w e、C-w i 显示或隐藏左右侧栏，C-w E、C-w I 进到侧栏里。关：这些键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 工作区域操作 | `C-w e / C-w i` | 开关左右栏 |  |
| 工作区域操作 | `C-w E / C-w I` | 进左右栏 |  |

### `goto_extras` {#goto_extras}

开：gz 按头两个字母跳，gZ 按拼音跳，g/ 搜光标下的词，gL 跟任何链接；helix 下 gx 用浏览器打开网址，vim 下 gW 是跳转标签。关：这些键空着。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 前往 | `gL` | 跟着链接走 |  |
| g 前往 | `gx` | 用浏览器打开网址 |  |
| g 前往 | `gz` | 两字母定位单词 |  |
| g 前往 | `gZ` | 多字母定位汉字 |  |
| g 前往 | `g/` | 搜索所选内容 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 前往 | `gL` | 跟着链接走 |  |
| g 前往 | `gW` | 跳到当前屏幕某位置 |  |
| g 前往 | `gz` | 两字母定位单词 |  |
| g 前往 | `gZ` | 多字母定位汉字 |  |
| g 前往 | `g/` | 搜索所选内容 |  |

### `insert_extras` {#insert_extras}

开：插入态 C-a、C-e 到行首、行尾，C-n 补全，C-g 断一个撤销点。关：这些键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-a` | 行首 |  |
| Insert mode | `C-e` | 到行尾(最后一个字后面) |  |
| Insert mode | `C-g` | 在这里断开撤销 |  |

### `insert_ctrl_c` {#insert_ctrl_c}

开：插入态 C-c 回到普通态，同 Esc。关：这个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-c` | 退出延伸模式，收起临时显示的东西 |  |

### `x_selects_upward` {#x_selects_upward}

开：X 往上选一行，再按再多选一行，同 x 往下。关：helix 的 X，把选区扩到整行。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `X` | 往上选行 | 把选区撑到整行边界 |

### `bare_g_last_line` {#bare_g_last_line}

开：不带数字的 G 到末行行首，带数字照旧到那一行。关：helix 的 G，不带数字不动。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `G` | 到第 N 行，不带数字到末行 | 到第几行(用计数) |

### `move_lines` {#move_lines}

开：A-j、A-k 把选中的行往下、往上移，写文章时一行就是一段。关：这两个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `A-j` | 把选中的行往下移 |  |
| Normal mode | `A-k` | 把选中的行往上移 |  |

### `line_start_keys` {#line_start_keys}

开：0、^ 到行首、行首第一个字，同 vim；行尾是 gl。关：这两个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `0` | 行首 |  |
| Normal mode | `^` | 第一个非空白字符 |  |

### `d_to_line_end` {#d_to_line_end}

开：D 删到行尾并放进寄存器，A-D 删到行尾不进寄存器。关：这两个键空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `D` | 删到行尾 |  |
| Normal mode | `A-D` | 删到行尾，不进寄存器 |  |

### `block_comment_lines` {#block_comment_lines}

开：在 Markdown、Typst、HTML 里用 空格 C 注释多整行时，<!-- 与 --> 各占一行。关：照 helix，标记写在首行开头与末行结尾。

It changes what its keys do, not which command they run.

### `heading_folds` {#heading_folds}

开：Markdown 与 Typst 的每个标题都是一个折叠，盖住它那一节，开始时全开着。关：照 vim，只有 zf 做的折叠。

It changes what its keys do, not which command they run.

### `helix_fold_keys` {#helix_fold_keys}

开：helix 下 za 开合折叠，zR 全开，zM 全合，zf 把选中的行做成折叠，同 vim。关：这几个键空着，折叠只用命令。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 这一行挪到哪 | `za` | 开合折叠(vim 的 za) |  |
| 这一行挪到哪 | `zR` | 打开所有折叠(vim 的 zR) |  |
| 这一行挪到哪 | `zM` | 合上所有折叠(vim 的 zM) |  |
| 这一行挪到哪 | `zf` | 把选中的行做成折叠 |  |

### `vim_comment_keys` {#vim_comment_keys}

开：vim 键位下 gc 接动作、gcc、可视模式的 gc 注释所在的行，同 vim 9.1 自带的包与 Neovim。关：只有空格菜单里的 c。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 前往 | `gc` | 注释（等一个动作） |  |

### `vim_space_menu` {#vim_space_menu}

开：vim 下空格打开空格菜单。关：空格同 vim 往右走一格，空格菜单改用反斜线打开。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Space` | 空格菜单 | 右一个字 |

### `helix_keys_under_vim` {#helix_keys_under_vim}

开：vim 下借用 helix 的键，只用 vim 空着的键：Alt 键、C-s、Z、gb、gy 等。关：这些键什么都不做，同 vim。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Z` | 视图组(按完不收) |  |
| Normal mode | `C-s` | 把这里记进跳转表 |  |
| Normal mode | `A-!` | 把外部命令的输出接在选区后 |  |
| Normal mode | `A-(` | 各选区的内容往前轮换 |  |
| Normal mode | `A-)` | 各选区的内容往后轮换 |  |
| Normal mode | `A-*` | 找选中的那段(原样) |  |
| Normal mode | `A-,` | 去掉主选区 |  |
| Normal mode | `A--` | 把所有选区合成一个 |  |
| Normal mode | `A-.` | 再做一次刚才的 f 或 t |  |
| Normal mode | `A-:` | 让每个选区都朝前 |  |
| Normal mode | `A-;` | 光标换到选区另一头 |  |
| Normal mode | `A-_` | 把相连的选区合起来 |  |
| Normal mode | `` A-` `` | 转大写 |  |
| Normal mode | `A-a` | 选中同一层的每一个节点 |  |
| Normal mode | `A-b` | 到光标所在节点的开头，再按到上一层的 |  |
| Normal mode | `A-c` | 改写选区(不动寄存器) |  |
| Normal mode | `A-C` | 在上一行复制一个选区 |  |
| Normal mode | `A-d` | 删除选区(不动寄存器) |  |
| Normal mode | `A-e` | 到光标所在节点的末尾 |  |
| Normal mode | `A-i` | 选区缩回去，或缩到第一个子节点 |  |
| Normal mode | `A-I` | 选中里面的每一个节点 |  |
| Normal mode | `A-J` | 合并行并选中接缝 |  |
| Normal mode | `A-K` | 去掉配得上正则的选区 |  |
| Normal mode | `A-n` | 选下一个语法节点 |  |
| Normal mode | `A-o` | 选区扩到外面那一层语法节点 |  |
| Normal mode | `A-p` | 选上一个语法节点 |  |
| Normal mode | `A-s` | 按行把选区拆开 |  |
| Normal mode | `A-u` | 撤销(和 u 一样) |  |
| Normal mode | `A-U` | 重做(和 U 一样) |  |
| Normal mode | `A-x` | 把选区缩到整行 |  |
| Normal mode | `A-\|` | 把选区交给外部命令，不改文本 |  |
| Insert mode | `A-d` | 删除光标后的一个词 |  |
| Insert mode | `C-k` | 删到行尾，不删换行(vim) |  |
| g 前往 | `gy` | 跳到类型定义 |  |
| g 前往 | `g.` | 回到最后改动的地方 |  |
| g 前往 | `gb` | 光标移至屏幕顶部/中部/底部 |  |
| 下一个 | `]g / ]G` | 改动(大写：第一处/最后一处) |  |
| 下一个 | `]e` | 条目 |  |
| 下一个 | `]x` | XML 元素 |  |
| 上一个 | `[g / [G` | 改动(大写：第一处/最后一处) |  |
| 上一个 | `[e` | 条目 |  |
| 上一个 | `[x` | XML 元素 |  |

### `delete_keeps_register` {#delete_keeps_register}

开：d、c 删除时不进寄存器，A-d、A-c 才剪。关：helix 的 d、c 剪。

It changes what its keys do, not which command they run.

### `esc_collapses` {#esc_collapses}

开：普通态按 Esc 也把多个光标收成一个。关：helix 的 Esc 只退出选择态。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Esc` | 退出选择，或收成一个光标 | 退出延伸模式，收起临时显示的东西 |

### `shift_tab_other_indent` {#shift_tab_other_indent}

开：插入态 S-Tab 插另一种缩进，文件用空格时插 Tab。关：S-Tab 插文件自己的那种缩进。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `S-Tab` | 插入另一种缩进(Tab 或空格) | 插入缩进(文件用的那一种) |

