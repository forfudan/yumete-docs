<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 在光标后插入(vim 的 a) | `vim_append_mode` |
| `A` | 在行尾插入(vim 的 A) | `vim_insert_at_line_end` |
| `b` | 跳到上一个词首(不选中) | `jump_prev_word_start` |
| `B` | 跳到上一个大词首(不选中) | `jump_prev_long_word_start` |
| `c` | 改写(再按一个动作) | `operator_change` |
| `C` | as `c$` | `@c$` |
| `d` | 删除(再按一个动作) | `operator_delete` |
| `D` | as `d$` | `@d$` |
| `e` | 跳到下一个词尾(不选中) | `jump_next_word_end` |
| `E` | 跳到下一个大词尾(不选中) | `jump_next_long_word_end` |
| `f` | 往后找一个字，选到它 | `find_next_char` |
| `F` | 往前找一个字，选到它 | `find_prev_char` |
| `g` | g 组：跳转 | `goto_mode` |
| `G` | 到第 N 行，不带计数到末行(vim 的 G) | `vim_goto_line` |
| `h` `Backspace` `Left` | 左一个字 | `move_char_left` |
| `H` | 屏幕最上面那一行 | `goto_window_top` |
| `i` | 在光标前插入(vim 的 i) | `vim_insert_mode` |
| `I` | 在第一个非空白字符前插入(vim 的 I) | `vim_insert_at_line_start` |
| `j` `C-n` `Down` | 下一行(文件里的) | `move_line_down` |
| `J` | 与下一行合并(vim 的 J) | `vim_join_selections` |
| `k` `C-p` `Up` | 上一行(文件里的) | `move_line_up` |
| `K` | 显示文档(浮窗) | `hover` |
| `l` `Space` `Right` | 右一个字 | `move_char_right` |
| `L` | 屏幕最下面那一行 | `goto_window_bottom` |
| `m` | 设标记(再按一个字母) | `add_mark` |
| `M` | 屏幕中间那一行 | `goto_window_center` |
| `n` | 下一处(vim 的 n) | `vim_search_next` |
| `N` | 上一处(vim 的 N) | `vim_search_prev` |
| `o` | 在下方开新行(vim 的 o，计数重复) | `vim_open_below` |
| `O` | 在上方开新行(vim 的 O，计数重复) | `vim_open_above` |
| `p` | 向后粘贴(vim 的 p) | `vim_paste_after` |
| `P` | 向前粘贴(vim 的 P) | `vim_paste_before` |
| `q` | 录宏(再按一个字母) | `vim_record_macro` |
| `Q` | 回放上次录的宏(vim 的 Q) | `vim_replay_last_macro` |
| `r` | 把选中的每个字换成另一个字 | `replace` |
| `R` | 替换模式：输入覆盖原文 | `replace_mode` |
| `s` | as `cl` | `@c{n}l` |
| `S` | as `cc` | `@cc` |
| `t` | 往后找一个字，选到它前面 | `find_till_char` |
| `T` | 往前找一个字，选到它后面 | `till_prev_char` |
| `u` | 撤销 | `undo` |
| `U` | 撤销这一行的所有改动 | `undo_line` |
| `v` | 选择模式：移动时扩大选区 | `select_mode` |
| `V` | 整行选择模式 | `select_line_mode` |
| `w` | 跳到下一个词首(不选中) | `jump_next_word_start` |
| `W` | 跳到下一个大词首(不选中) | `jump_next_long_word_start` |
| `x` | 删掉光标下的字，不删换行(vim 的 x) | `vim_delete_char_forward` |
| `X` | 删除光标前的一个字 | `delete_char_backward` |
| `y` | 复制(再按一个动作) | `operator_yank` |
| `Y` | as `y$` | `@y$` |
| `z` | 视图组：定位光标行、滚屏、折叠 | `view_mode` |
| `0` | as `gh` | `@gh` |
| `"` | 选寄存器(再按一个字母) | `select_register` |
| `#` | 反向搜索光标下的词 | `search_word_backward` |
| `$` `End` | 行尾(vim 的 $：往下走也留在行尾) | `vim_goto_line_end` |
| `%` | 跳到匹配的括号，不在括号上则找本行下一个(vim 的 %) | `vim_match_brackets` |
| `'` `` ` `` | 回到标记(再按一个字母) | `goto_mark` |
| `(` | 跳到上一句(不选中) | `jump_prev_sentence` |
| `)` | 跳到下一句(不选中) | `jump_next_sentence` |
| `*` | 搜索选中内容 | `search_selection` |
| `+` | as `jgs` | `@jgs` |
| `,` | 反向再找一次刚才那个字 | `repeat_find_char_reverse` |
| `-` | as `kgs` | `@kgs` |
| `.` | 用新的计数再做一次刚才的改动 | `vim_repeat_last_change` |
| `/` | 搜索 | `search` |
| `:` | 命令行 | `command_mode` |
| `;` | 再找一次刚才那个字 | `repeat_find_char` |
| `<` | 减少缩进(再按一个动作) | `operator_unindent` |
| `>` | 增加缩进(再按一个动作) | `operator_indent` |
| `?` | 反向搜索 | `rsearch` |
| `@` | 回放宏(再按一个字母) | `vim_replay_macro` |
| `[` | [ 组：跳到上一个 | `left_bracket_mode` |
| `\` | 空格菜单 | `space_mode` |
| `]` | ] 组：跳到下一个 | `right_bracket_mode` |
| `^` | as `gs` | `@gs` |
| `_` | 第一个非空白字符(带数字时下移几行) | `vim_goto_first_nonwhitespace` |
| `{` | 跳到上一段(不选中) | `jump_prev_paragraph` |
| `\|` | 到本行第 N 列(用计数) | `goto_column` |
| `}` | 跳到下一段(不选中) | `jump_next_paragraph` |
| `~` | 切换大小写并后移(vim 的 ~) | `vim_switch_case` |
| `C-6` `C-^` | 回到刚才的缓冲区 | `goto_last_accessed_file` |
| `C-a` | 光标处或其后的数字加一(vim 的 C-a) | `vim_increment` |
| `C-b` `PageUp` | 向上翻页 | `page_up` |
| `C-d` | 向下翻半页 | `page_cursor_half_down` |
| `C-e` | 向下滚动一行(光标位置不变) | `scroll_down` |
| `C-f` `PageDown` | 向下翻页 | `page_down` |
| `C-i` `Tab` | 跳转表：前进 | `jump_forward` |
| `C-o` | 跳转表：后退 | `jump_backward` |
| `C-r` | 重做(vim 的 C-r) | `vim_redo` |
| `C-u` | 向上翻半页 | `page_cursor_half_up` |
| `C-v` | 块选择(vim 的 C-v) | `vim_visual_block_mode` |
| `C-w` | 窗口组 | `window_mode` |
| `C-x` | 光标处或其后的数字减一(vim 的 C-x) | `vim_decrement` |
| `C-y` | 向上滚动一行(光标位置不变) | `scroll_up` |
| `C-z` | 挂起到终端；fg 返回 | `suspend` |
| `Esc` | 回到普通模式(退出可视模式时选区收成光标) | `vim_normal_mode` |
| `Enter` | 下一行的第一个非空白字符 | `goto_next_line_nonwhitespace` |
| `Home` | 行首 | `goto_line_start` |
| `ZQ` | `:quit!` | `:quit!` |
| `ZZ` | `:x` | `:x` |

## Visual mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 选中整个对象(再按对象键) | `select_around_object` |
| `c` `s` | 剪切后改写 | `change_selection` |
| `d` `x` | 剪切选区 | `delete_selection` |
| `f` | 选区向后扩到某个字 | `extend_next_char` |
| `F` | 选区向前扩到某个字 | `extend_prev_char` |
| `h` `Left` | 选区向左扩一个字 | `extend_char_left` |
| `i` | 选中对象内部(再按对象键) | `select_inner_object` |
| `l` `Right` | 选区向右扩一个字 | `extend_char_right` |
| `o` | 换到选区的另一头(vim 可视模式的 o) | `vim_flip_selections` |
| `R` | 用寄存器内容替换选区 | `replace_with_yanked` |
| `t` | 选区向后扩到某个字之前 | `extend_till_char` |
| `T` | 选区向前扩到某个字之后 | `extend_till_prev_char` |
| `u` | 选区转小写并退出可视模式(vim 的 u) | `vim_switch_to_lowercase` |
| `U` | 选区转大写并退出可视模式(vim 的 U) | `vim_switch_to_uppercase` |
| `y` | 复制选区并退出可视模式(vim 的 y) | `vim_yank` |
| `<` | 减少缩进，光标留在原列(vim) | `vim_unindent` |
| `>` | 增加缩进，光标留在原列(vim) | `vim_indent` |
| `A-b` | 选区扩到所在节点开头 | `extend_parent_node_start` |
| `A-e` | 选区扩到所在节点末尾 | `extend_parent_node_end` |
| `Home` | 选区扩到行首 | `extend_to_line_start` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` `C-c` | 退出选择模式，收起临时显示的内容 | `normal_mode` |
| `Enter` `C-j` | 换行(延续缩进和列表符号) | `insert_newline` |
| `Backspace` `C-h` | 删除光标前的一个字 | `delete_char_backward` |
| `Delete` | 删除光标后的一个字 | `delete_char_forward` |
| `C-d` | 减少缩进 | `unindent` |
| `C-w` | 删除光标前的一个词 | `delete_word_backward` |
| `C-u` | 删到这次插入开始的地方(vim 的 C-u) | `vim_kill_to_line_start` |
| `C-r` | 插入寄存器内容(再按一个字母) | `insert_register` |
| `C-o` | 临时执行一条普通模式命令(vim 的 C-o) | `run_one_normal_command` |
| `Left` | 左一个字 | `move_char_left` |
| `Right` | 右一个字 | `move_char_right` |
| `Up` | 上一行(屏幕上的) | `move_visual_line_up` |
| `Down` | 下一行(屏幕上的) | `move_visual_line_down` |
| `PageUp` | 向上翻页 | `page_up` |
| `PageDown` | 向下翻页 | `page_down` |
| `Home` | 行首 | `goto_line_start` |
| `End` | 到行尾(最后一个字后面) | `goto_line_end_newline` |
| `C-y` | 插入上一行同列的字 | `insert_char_above` |
| `C-e` | 插入下一行同列的字 | `insert_char_below` |
| `C-g` | 新建撤销点 | `commit_undo_checkpoint` |
| `Tab` `S-Tab` | 插入缩进(与文件一致) | `insert_tab` |

## 空格 (`\`)

| Key | What it does |
| --- | --- |
| `\f` | 文件选择器(项目目录) |
| `\F` | 文件选择器(工作目录) |
| `\e` | 浏览文件(项目目录) |
| `\b` | 缓冲区选择器 |
| `\j` | 跳转列表 |
| `\'` | 重开上一个选择器 |
| `\g` | 已改动的文件 |
| `\y` | 复制到系统剪贴板 |
| `\Y` | 复制主选区到系统剪贴板 |
| `\p` | 从系统剪贴板粘贴 |
| `\P` | 从系统剪贴板粘贴到前面 |
| `\R` | 用系统剪贴板替换选区 |
| `\s` | 符号选择器 |
| `\S` | 项目符号选择器 |
| `\k` | 显示文档(浮窗) |
| `\d` | 诊断选择器 |
| `\D` | 项目诊断选择器 |
| `\r` | 重命名符号 |
| `\h` | 选中本文件中的所有引用 |
| `\a` | 代码动作 |
| `\w` | 区域 |
| `\c` | 行注释 |
| `\C` | 块注释 |
| `\A-c` | 只用行注释 |
| `\/` | 搜索面板 |
| `\?` | 所有命令 |

## g 转到 (`g`)

| Key | What it does |
| --- | --- |
| `gg` | 文件开头 |
| `g<N>g` | 前往第 N 行 |
| `ge` | 跳到上一个词尾(不选中) |
| `gE` | 跳到上一个大词尾(不选中) |
| `gf` | 打开这个文件 |
| `gw` | 重排文本，光标不动(vim 的 gw) |
| `gx` | 用浏览器打开网址 |
| `gn / gN` | 下一处/上一处匹配 |
| `gd` | 转到定义 |
| `gD` | 转到声明 |
| `gj` | 下一行(屏幕上的) |
| `gk` | 上一行(屏幕上的) |
| `gv` | 重选上次选区 |
| `gi` | 在上次插入处继续插入 |
| `g; / g,` | 更早/更晚一处改动 |
| `gu / gU / g~` | 小写/大写/大小写互换，后接动作 |
| `gq` | 按宽度重排，后接动作 |
| `gJ` | 合并下一行(不加空格) |
| `` g` `` | 回到标记(再按一个字母) |

## 下一个 (`]`)

| Key | What it does |
| --- | --- |
| `]d / ]D` | 诊断(大写：第一个/最后一个) |
| `]c` | 改动 |
| `]p` | 向后粘贴，缩进对齐这一行(vim 的 ]p) |
| `]P` | 向前粘贴，缩进对齐这一行(vim 的 [p) |
| `]z` | 到当前折叠末尾 |
| `]␣` | 下方插入空行 |

## 上一个 (`[`)

| Key | What it does |
| --- | --- |
| `[d / [D` | 诊断(大写：第一个/最后一个) |
| `[c` | 改动 |
| `[p / [P` | 向前粘贴，缩进对齐这一行(vim 的 [p) |
| `[z` | 到当前折叠开头 |
| `[␣` | 上方插入空行 |

## 视图 (`z`)

| Key | What it does |
| --- | --- |
| `zz` | 居中 |
| `zf` | 创建折叠，后接移动 |
| `zF` | 折叠 N 行(用计数) |
| `zo` | 展开 |
| `zO` | 递归展开 |
| `zc` | 折叠 |
| `zC` | 递归折叠 |
| `za` | 切换折叠 |
| `zA` | 递归切换折叠 |
| `zv` | 展开到光标所在行 |
| `zR` | 全部展开 |
| `zM` | 全部折叠 |
| `zd` | 删除此处折叠，保留文本 |
| `zD` | 删除此处所有 zf 折叠 |
| `zE` | 删除所有 zf 折叠 |
| `zj` | 到下一个折叠开头 |
| `zk` | 到上一个折叠末尾 |
| `zn` | 停用折叠 |
| `zN` | 启用折叠 |
| `zi` | 启用/停用折叠 |
| `zm` | 多折叠一层 |
| `zr` | 多展开一层 |
| `zx` | 按层级重新折叠并显示光标行 |
| `zX` | 按层级重新折叠 |
| `zt` | 顶部 |
| `zb` | 底部 |

## 区域 (`C-w`, `\w`)

| Key | What it does |
| --- | --- |
| `C-w w` | 下一个 |
| `C-w W` | 上一个 |
| `C-w t` | 第一个窗口 |
| `C-w b` | 最后一个窗口 |
| `C-w p` | 上一个窗口 |
| `C-w x` | 与下一个窗口交换 |
| `C-w r` | 本排窗口向后轮换 |
| `C-w R` | 本排窗口向前轮换 |
| `C-w H / C-w J / C-w K / C-w L` | 移到那一边 |
| `C-w c` | 关闭窗口但不退出 |
| `C-w S / C-w s` | 向上拆分 |
| `C-w F / C-w f` | 上方打开光标处文件 |
| `C-w ^` | 上方打开上一个文件 |
| `C-w :` | 命令行 |
| `C-w h / C-w j / C-w k / C-w l` | 按方向切换 |
| `C-w v` | 并排拆分 |
| `C-w n` | 新建空白窗口 |
| `C-w q` | 关闭窗口 |
| `C-w o` | 只保留此窗口 |

## 新建空白窗口 (`C-w n`, `\wn`)

| Key | What it does |
| --- | --- |
| `C-w n s` | 下方新建空白窗口 |
| `C-w n v` | 旁边新建空白窗口 |

