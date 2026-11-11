<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## `basic`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`case_menu`](#case_menu) | `` ` `` | `` g` `` | 大小写与繁简菜单 |
| [`sentences_on_h_l`](#sentences_on_h_l) | `H` `L` | — | 按句移动 |
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
| [`sidebars`](#sidebars) | `C-w e` `C-w i` `C-w E` `C-w I` | `C-w e` `C-w i` `C-w E` `C-w I` | 侧栏 |
| [`goto_extras`](#goto_extras) | `gz` `gZ` `g/` `gL` `gx` | `gz` `gZ` `g/` `gL` `gW` | 跳转、搜索当前词、链接 |
| [`window_sides`](#window_sides) | `C-w n h` `C-w n j` `C-w n k` `C-w n l` `C-w n H` `C-w n J` `C-w n K` `C-w n L` | — | 朝一边新建窗口 |
| [`split_join`](#split_join) | `gS` | `gS` | 拆开/合并括号 |
| [`insert_extras`](#insert_extras) | `C-a` `C-e` `C-n` `C-g` | — | 插入模式：行首行尾、补全、撤销点 |
| [`insert_ctrl_c`](#insert_ctrl_c) | `C-c` | — | 插入模式：退出 |
| [`x_selects_upward`](#x_selects_upward) | `X` | — | 往上选行 |
| [`bare_g_last_line`](#bare_g_last_line) | `G` | — | 到末行 |
| [`move_lines`](#move_lines) | `A-j` `A-k` | `A-j` `A-k` | 上下移动行 |
| [`line_start_keys`](#line_start_keys) | `0` `^` | — | 行首、首字 |
| [`d_to_line_end`](#d_to_line_end) | `D` `A-D` | — | 删到行尾 |
| [`helix_fold_keys`](#helix_fold_keys) | `za` `zR` `zM` `zf` | — | helix 下的折叠键 |
| [`vim_comment_keys`](#vim_comment_keys) | — | `gc` | vim 的 gc 注释 |
| [`vim_space_menu`](#vim_space_menu) | — | `Space` | 空格菜单 |
| [`helix_keys_under_vim`](#helix_keys_under_vim) | — | `g.` `;` `,` `A-C` `A-,` `A--` `A-_` `A-:` `A-x` `A-s` `A-(` `A-)` `A-K` `A-d` `A-c` `A-u` `A-U` `A-!` `A-\|` `A-J` `A-;` `A-*` `A-.` `` A-` `` `A-o` `A-i` `A-I` `A-p` `A-n` `A-e` `A-b` `A-a` `C-s` `Z` `gb` `gy` `]g` `[g` `]e` `[e` `]x` `[x` | 借用 helix 的键 |

## `full`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`delete_keeps_register`](#delete_keeps_register) | `d` `c` `A-d` `A-c` | — | 删除不进寄存器 |
| [`esc_collapses`](#esc_collapses) | `Esc` | — | 收成一个光标 |
| [`shift_tab_other_indent`](#shift_tab_other_indent) | `S-Tab` | `S-Tab` | 插入另一种缩进 |

## What each item changes

### `case_menu` {#case_menu}

开：反引号打开大小写与繁简转换菜单，vim 下是 g 加反引号。关：helix 的反引号转小写、A 加反引号转大写；vim 的 g 加反引号跳到标记。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `` ` `` | 字形组：大小写、繁简 | 转小写 |
| 转换 | `` `l `` | 转小写 |  |
| 转换 | `` `u `` | 转大写 |  |
| 转换 | ``` `` ``` | 大小写互换 |  |
| 转换 | `` `s `` | 繁→简 |  |
| 转换 | `` `t `` | 简→繁 |  |
| 转换 | `` `w `` | 简→台湾繁 |  |
| 转换 | `` `f `` | 转全角 |  |
| 转换 | `` `h `` | 转半角 |  |
| 转换 | `` `k `` | 简→香港繁 |  |
| 转换 | `` `c `` | 简→大陆繁 |  |
| 转换 | `` `g `` | 简→古籍繁 |  |
| 转换 | `` `j `` | 繁→日文新字体 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 转到 | `` g` `` | 字形组：大小写、繁简 | 回到标记所在的那个字(再按一个字母) |
| 转换 | `` g`l `` | 转小写 |  |
| 转换 | `` g`u `` | 转大写 |  |
| 转换 | ``` g`` ``` | 大小写互换 |  |
| 转换 | `` g`s `` | 繁→简 |  |
| 转换 | `` g`t `` | 简→繁 |  |
| 转换 | `` g`w `` | 简→台湾繁 |  |
| 转换 | `` g`f `` | 转全角 |  |
| 转换 | `` g`h `` | 转半角 |  |
| 转换 | `` g`k `` | 简→香港繁 |  |
| 转换 | `` g`c `` | 简→大陆繁 |  |
| 转换 | `` g`g `` | 简→古籍繁 |  |
| 转换 | `` g`j `` | 繁→日文新字体 |  |

### `sentences_on_h_l` {#sentences_on_h_l}

开：H、L 到上一句、下一句。关：同 helix，未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `H` | 上一句 |  |
| Normal mode | `L` | 下一句 |  |

### `marks_on_m_quote` {#marks_on_m_quote}

开：M 设标记，' 跳回标记，可以跨文件。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `M` | 设标记(再按一个字母) |  |
| Normal mode | `'` | 回到标记(再按一个字母) |  |

### `two_thirds_page` {#two_thirds_page}

开：C-n、C-p 向下、向上翻三分之二页。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `C-n` | 向下翻三分之二页 |  |
| Normal mode | `C-p` | 向上翻三分之二页 |  |

### `tables` {#tables}

开：空格 t 打开表格菜单。关：表格命令仍可在 : 命令行输入。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space t` | 表格 |  |
| ␣t 表格 | `Space t o` | 源码视图 |  |
| ␣t 表格 | `Space t b` | 基本视图(按列对齐) |  |
| ␣t 表格 | `Space t t` | 全窗视图(表格独占窗口) |  |
| ␣t 表格 | `Space t q` | 退出全窗视图 |  |
| ␣t 表格 | `Space t ] / Space t [` | 下/上一张表 |  |
| ␣t 表格 | `Space t x` | 转换表格格式(分隔符) |  |
| ␣t 表格 | `Space t w` | 长单元格：换行/折叠/全文 |  |
| ␣t 表格 | `Space t /` | 按列搜索(可指定列范围) |  |
| ␣t 表格 | `Space t g` | 跳到单元格(␣t 20,20g) |  |
| ␣t 表格 | `Space t r / Space t R` | 插入行(下/上) |  |
| ␣t 表格 | `Space t c / Space t C` | 插入列(右/左) |  |
| ␣t 表格 | `Space t d / Space t D` | 删除行/列 |  |
| ␣t 表格 | `Space t j / Space t k` | 本行下移/上移 |  |
| ␣t 表格 | `Space t h / Space t l` | 本列左移/右移 |  |
| ␣t 表格 | `Space t y / Space t p / Space t P` | 复制本列/粘贴到右边/左边 |  |
| ␣t 表格 | `Space t v` | 用复制的列覆盖本列 |  |
| ␣t 表格 | `Space t 1s / Space t 1S` | 按列升序/降序排列(␣t1s; 1a2d8as 多列排序) |  |
| ␣t 表格 | `Space t < / Space t = / Space t >` | 本列左对齐/居中/右对齐 |  |
| ␣t 表格 | `Space t F` | 重新对齐 |  |
| ␣t 表格 | `Space t i` | 本行记录 |  |
| ␣t 表格 | `Space t H` | 首行作为表头 |  |
| 转换表格格式(分隔符) | `Space t x p / Space t x P` | pipe(转换/粘贴) |  |
| 转换表格格式(分隔符) | `Space t x c / Space t x C` | csv(转换/粘贴) |  |
| 转换表格格式(分隔符) | `Space t x t / Space t x T` | tsv(转换/粘贴) |  |

### `merge_conflicts` {#merge_conflicts}

开：空格 m 处理合并冲突，helix 下 ]m、[m 跳到下一处、上一处。关：未绑定。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space m` | 合并冲突 |  |
| 下一个 | `]m` | 合并冲突 |  |
| 上一个 | `[m` | 合并冲突 |  |
| 合并冲突 | `Space m o` | 保留我方 |  |
| 合并冲突 | `Space m t` | 保留对方 |  |
| 合并冲突 | `Space m b` | 保留双方 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space m` | 合并冲突 |  |
| 合并冲突 | `Space m o` | 保留我方 |  |
| 合并冲突 | `Space m t` | 保留对方 |  |
| 合并冲突 | `Space m b` | 保留双方 |  |

### `input_method_menu` {#input_method_menu}

开：空格 z 打开输入法菜单。关：切中英的键照常能用。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space z` | 输入法 |  |
| 输入法 | `Space z z` | 输入法开/关 |  |
| 输入法 | `Space z m` | 上屏方式 |  |
| 输入法 | `Space z p` | 候选栏位置 |  |
| 输入法 | `Space z e` | 未上屏内容显示在哪 |  |
| 输入法 | `Space z y` | 输入预测开/关 |  |
| 输入法 | `Space z i` | 选择方案 |  |
| 输入法 | `Space z n` | 下一个方案 |  |
| 输入法 | `Space z 3-9` | 每页候选数 |  |
| 输入法 | `Space z 0` | 字集过滤 |  |
| 输入法 | `Space z s` | 字集排序 |  |
| 输入法 | `Space z g` | 整句字集轨 |  |
| 输入法 | `Space z b` | 切到内置方案 |  |
| 输入法 | `Space z /` | 切换候选注解 |  |
| 输入法 | `Space z t` | 改用安装版码表 |  |
| 输入法 | `Space z w` | 查看码表来源 |  |
| 输入法 | `Space z W` | 查看数据位置 |  |

### `recent_files` {#recent_files}

开：空格 o 打开最近的文件和项目。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space o` | 最近打开 |  |
| 最近打开 | `Space o f` | 最近打开的文件 |  |
| 最近打开 | `Space o g` | 最近打开的文件(所有项目) |  |
| 最近打开 | `Space o p` | 最近打开的项目 |  |
| 最近打开 | `Space o r` | 恢复上次会话 |  |

### `registers_menu` {#registers_menu}

开：空格加双引号打开寄存器菜单。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space "` | 寄存器·剪贴板 |  |

### `dictionary` {#dictionary}

开：空格 n 在浮窗里查光标处的字，空格 N 在侧栏里查。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space n` | 显示汉字信息(浮窗) |  |
| 空格 | `Space N` | 显示汉字信息(侧栏) |  |

### `popup_panel_pairs` {#popup_panel_pairs}

开：空格 K 把说明放进侧栏；空格 l、x、i 在浮窗里看诊断、改动、表格记录，大写在侧栏里看。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space K` | 显示文档(侧栏) |  |
| 空格 | `Space l` | 显示诊断(浮窗) |  |
| 空格 | `Space L` | 显示诊断(侧栏) |  |
| 空格 | `Space x` | 显示改动(浮窗) |  |
| 空格 | `Space X` | 显示改动(侧栏) |  |
| 空格 | `Space i` | 显示行记录(浮窗) |  |
| 空格 | `Space I` | 显示行记录(侧栏) |  |

### `explorer_here` {#explorer_here}

开：空格 E 从当前文件所在目录浏览文件。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space E` | 浏览文件(当前文件目录) |  |

### `space_paging` {#space_paging}

开：空格 空格向下翻页，空格 退格向上翻页。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space Space` | 下一页 |  |
| 空格 | `Space Backspace` | 上一页 |  |

### `sidebars` {#sidebars}

开：C-w e、C-w i 显示或隐藏左右侧栏，C-w E、C-w I 进入侧栏。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 区域 | `C-w e / C-w i` | 开关左/右侧栏 |  |
| 区域 | `C-w E / C-w I` | 进入左/右侧栏 |  |

### `goto_extras` {#goto_extras}

开：gz 按前两个字母跳转，gZ 按拼音跳转，g/ 搜索光标处的词，gL 打开任意链接；helix 下 gx 用浏览器打开网址，vim 下 gW 显示跳转标签。关：未绑定。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 转到 | `gL` | 跟随链接 |  |
| g 转到 | `gx` | 用浏览器打开网址 |  |
| g 转到 | `gz` | 两字母定位单词 |  |
| g 转到 | `gZ` | 按读音定位汉字 |  |
| g 转到 | `g/` | 搜索选中内容 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 转到 | `gL` | 跟随链接 |  |
| g 转到 | `gW` | 跳到屏幕上某处 |  |
| g 转到 | `gz` | 两字母定位单词 |  |
| g 转到 | `gZ` | 按读音定位汉字 |  |
| g 转到 | `g/` | 搜索选中内容 |  |

### `window_sides` {#window_sides}

开：C-w n（␣wn）组里 h j k l 在左下上右新建空白窗口，H J K L 新建窗口并打开缓冲区选择器。关：这八个键未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 新建空白窗口 | `C-w n h` | 左侧新建空白窗口 |  |
| 新建空白窗口 | `C-w n j` | 下方新建空白窗口 |  |
| 新建空白窗口 | `C-w n k` | 上方新建空白窗口 |  |
| 新建空白窗口 | `C-w n l` | 右侧新建空白窗口 |  |
| 新建空白窗口 | `C-w n H` | 左侧新建窗口并选择缓冲区 |  |
| 新建空白窗口 | `C-w n J` | 下方新建窗口并选择缓冲区 |  |
| 新建空白窗口 | `C-w n K` | 上方新建窗口并选择缓冲区 |  |
| 新建空白窗口 | `C-w n L` | 右侧新建窗口并选择缓冲区 |  |

### `split_join` {#split_join}

开：gS 把光标所在括号里的各项拆成每项一行，再按一次合回一行。关：gS 未绑定，:split-join 命令照样可用。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 转到 | `gS` | 拆开/合并括号里的各项 |  |

### `insert_extras` {#insert_extras}

开：插入模式下 C-a、C-e 到行首、行尾，C-n 补全，C-g 新建撤销点。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-a` | 行首 |  |
| Insert mode | `C-e` | 到行尾(最后一个字后面) |  |
| Insert mode | `C-g` | 新建撤销点 |  |

### `insert_ctrl_c` {#insert_ctrl_c}

开：插入模式下 C-c 回到普通模式，同 Esc。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-c` | 退出选择模式，收起临时显示的内容 |  |

### `x_selects_upward` {#x_selects_upward}

开：X 向上选一行，每按一次多选一行，与 x 向下相对。关：同 helix，X 把选区扩到整行。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `X` | 往上选行 | 选区扩到整行 |

### `bare_g_last_line` {#bare_g_last_line}

开：G 不带数字时到末行行首，带数字到该行。关：同 helix，G 不带数字时不动。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `G` | 到第 N 行，不带数字到末行 | 到第 N 行(用计数) |

### `move_lines` {#move_lines}

开：A-j、A-k 把选中的行下移、上移，写文章时一行就是一段。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `A-j` | 把选中的行往下移 |  |
| Normal mode | `A-k` | 把选中的行往上移 |  |

### `line_start_keys` {#line_start_keys}

开：0、^ 到行首、行首第一个字，同 vim；行尾是 gl。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `0` | 行首 |  |
| Normal mode | `^` | 第一个非空白字符 |  |

### `d_to_line_end` {#d_to_line_end}

开：D 删到行尾并放进寄存器，A-D 删到行尾不进寄存器。关：未绑定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `D` | 删到行尾 |  |
| Normal mode | `A-D` | 删到行尾(不进寄存器) |  |

### `helix_fold_keys` {#helix_fold_keys}

开：helix 下也能用 vim 的 za 开合折叠、zR 全部展开、zM 全部折叠，zf 把选中的行折叠。关：未绑定，只能用命令折叠。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 视图 | `za` | 切换折叠 |  |
| 视图 | `zR` | 全部展开 |  |
| 视图 | `zM` | 全部折叠 |  |
| 视图 | `zf` | 折叠选中的行 |  |

### `vim_comment_keys` {#vim_comment_keys}

开：vim 键位下 gc 接动作、gcc、可视模式的 gc 注释所在行，同 vim 9.1 自带插件和 Neovim。关：只能用空格菜单里的 c。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 转到 | `gc` | 注释(再按一个动作) |  |

### `vim_space_menu` {#vim_space_menu}

开：vim 下空格打开空格菜单。关：空格同 vim 右移一格，空格菜单改用反斜杠打开。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Space` | 空格菜单 | 右一个字 |

### `helix_keys_under_vim` {#helix_keys_under_vim}

开：vim 下在 vim 没用的键上借用 helix 的键：Alt 键、C-s、Z、gb、gy 等。关：同 vim，这些键不起作用。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Z` | 视图组(常驻) |  |
| Normal mode | `C-s` | 把当前位置记入跳转表 |  |
| Normal mode | `A-!` | 把外部命令的输出接在选区后 |  |
| Normal mode | `A-(` | 各选区的内容往前轮换 |  |
| Normal mode | `A-)` | 各选区的内容往后轮换 |  |
| Normal mode | `A-*` | 搜索选中内容(原样) |  |
| Normal mode | `A-,` | 去掉主选区 |  |
| Normal mode | `A--` | 合并所有选区 |  |
| Normal mode | `A-.` | 重复上次的 f 或 t |  |
| Normal mode | `A-:` | 让每个选区都朝前 |  |
| Normal mode | `A-;` | 光标换到选区另一头 |  |
| Normal mode | `A-_` | 合并相邻的选区 |  |
| Normal mode | `` A-` `` | 转大写 |  |
| Normal mode | `A-a` | 选中所有同级节点 |  |
| Normal mode | `A-b` | 到所在节点开头，再按到上一层 |  |
| Normal mode | `A-c` | 改写选区(不进寄存器) |  |
| Normal mode | `A-C` | 在上一行加一个选区 |  |
| Normal mode | `A-d` | 删除选区(不进寄存器) |  |
| Normal mode | `A-e` | 到所在节点的末尾 |  |
| Normal mode | `A-i` | 缩小选区，或缩到第一个子节点 |  |
| Normal mode | `A-I` | 选中所有子节点 |  |
| Normal mode | `A-J` | 合并行并选中连接处 |  |
| Normal mode | `A-K` | 去掉匹配正则的选区 |  |
| Normal mode | `A-n` | 选中下一个同级节点 |  |
| Normal mode | `A-o` | 选区扩到外层语法节点 |  |
| Normal mode | `A-p` | 选中上一个同级节点 |  |
| Normal mode | `A-s` | 按行拆分选区 |  |
| Normal mode | `A-u` | 撤销(同 u) |  |
| Normal mode | `A-U` | 重做(同 U) |  |
| Normal mode | `A-x` | 把选区缩到整行 |  |
| Normal mode | `A-\|` | 把选区传给外部命令，不改文本 |  |
| Insert mode | `A-d` | 删除光标后的一个词 |  |
| Insert mode | `C-k` | 删到行尾，不删换行(vim) |  |
| g 转到 | `gy` | 转到类型定义 |  |
| g 转到 | `g.` | 最后改动处 |  |
| g 转到 | `gb` | 屏幕顶部/中部/底部 |  |
| 下一个 | `]g / ]G` | 改动(大写：第一处/最后一处) |  |
| 下一个 | `]e` | 条目 |  |
| 下一个 | `]x` | XML 元素 |  |
| 上一个 | `[g / [G` | 改动(大写：第一处/最后一处) |  |
| 上一个 | `[e` | 条目 |  |
| 上一个 | `[x` | XML 元素 |  |

### `delete_keeps_register` {#delete_keeps_register}

开：d、c 删除时不进寄存器，A-d、A-c 才剪切。关：同 helix，d、c 剪切。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `c` | 改写选区(不进寄存器) | 剪切后改写 |
| Normal mode | `d` | 删除选区(不进寄存器) | 剪切选区 |
| Normal mode | `D` | 删到行尾(不进寄存器) | 删到行尾 |
| Normal mode | `A-c` | 剪切后改写 | 改写选区(不进寄存器) |
| Normal mode | `A-d` | 剪切选区 | 删除选区(不进寄存器) |
| Normal mode | `A-D` | 删到行尾 | 删到行尾(不进寄存器) |

### `esc_collapses` {#esc_collapses}

开：普通模式下按 Esc 也把多个光标收成一个。关：同 helix，Esc 只退出选择模式。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Esc` | 退出选择模式，或收成一个光标 | 退出选择模式，收起临时显示的内容 |

### `shift_tab_other_indent` {#shift_tab_other_indent}

开：插入模式下 S-Tab 插入另一种缩进，文件用空格时插入 Tab。关：S-Tab 插入文件本身的缩进。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `S-Tab` | 插入另一种缩进(Tab 或空格) | 插入缩进(与文件一致) |

