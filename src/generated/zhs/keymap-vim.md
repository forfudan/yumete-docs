<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 在光标后插入(vim 的 a) | `vim_append_mode` |
| `A` | 在行尾插入(vim 的 A) | `vim_insert_at_line_end` |
| `b` | 光标跳到上一个词首(不选中) | `jump_prev_word_start` |
| `B` | 光标跳到上一个大词首(不选中) | `jump_prev_long_word_start` |
| `c` | 改写(再按一个动作) | `operator_change` |
| `C` | as `c$` | `@c$` |
| `d` | 删除(再按一个动作) | `operator_delete` |
| `D` | as `d$` | `@d$` |
| `e` | 光标跳到下一个词尾(不选中) | `jump_next_word_end` |
| `E` | 光标跳到下一个大词尾(不选中) | `jump_next_long_word_end` |
| `f` | 往后找一个字，选到它 | `find_next_char` |
| `F` | 往前找一个字，选到它 | `find_prev_char` |
| `g` | g 组：前往 | `goto_mode` |
| `G` | 到第几行，不带计数到最后一行(vim 的 G) | `vim_goto_line` |
| `h` `Backspace` `Left` | 左一个字 | `move_char_left` |
| `H` | 屏幕最上面那一行 | `goto_window_top` |
| `i` | 在光标前插入(vim 的 i) | `vim_insert_mode` |
| `I` | 在第一个非空白字符前插入(vim 的 I) | `vim_insert_at_line_start` |
| `j` `C-n` `Down` | 下一行(文件里的) | `move_line_down` |
| `J` | 与下一行合并(vim 的 J) | `vim_join_selections` |
| `k` `C-p` `Up` | 上一行(文件里的) | `move_line_up` |
| `K` | 显示定义文档(浮窗) | `hover` |
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
| `Q` | 回放宏 | `replay_macro` |
| `r` | 把选中的每个字换成另一个字 | `replace` |
| `R` | 覆写模式：打字盖掉原文 | `replace_mode` |
| `s` | as `cl` | `@c{n}l` |
| `S` | as `cc` | `@cc` |
| `t` | 往后找一个字，选到它前面 | `find_till_char` |
| `T` | 往前找一个字，选到它后面 | `till_prev_char` |
| `u` | 撤销 | `undo` |
| `U` | 撤销这一行的所有改动 | `undo_line` |
| `v` | 延伸模式：移动把选区撑大 | `select_mode` |
| `V` | 整行选择模式 | `select_line_mode` |
| `w` | 光标跳到下一个词首(不选中) | `jump_next_word_start` |
| `W` | 光标跳到下一个大词首(不选中) | `jump_next_long_word_start` |
| `x` | 删掉光标下的字，不删换行(vim 的 x) | `vim_delete_char_forward` |
| `X` | 删除光标前的一个字 | `delete_char_backward` |
| `y` | 复制(再按一个动作) | `operator_yank` |
| `Y` | as `y$` | `@y$` |
| `z` | 视图组：把光标行放到屏幕顶、中、底 | `view_mode` |
| `0` | as `gh` | `@gh` |
| `"` | 选寄存器(再按一个字母) | `select_register` |
| `#` | 往回找光标下的词 | `search_word_backward` |
| `$` `End` | 行尾(vim 的 $：往下走也留在行尾) | `vim_goto_line_end` |
| `%` | 配对的括号，不在括号上就找本行的下一个(vim 的 %) | `vim_match_brackets` |
| `'` `` ` `` | 回到标记(再按一个字母) | `goto_mark` |
| `(` | 光标跳到上一句(不选中) | `jump_prev_sentence` |
| `)` | 光标跳到下一句(不选中) | `jump_next_sentence` |
| `*` | 找选中的那段 | `search_selection` |
| `+` | as `jgs` | `@jgs` |
| `,` | 反方向再找一次刚才那个字 | `repeat_find_char_reverse` |
| `-` | as `kgs` | `@kgs` |
| `.` | 用新的计数再做一次刚才的改动 | `vim_repeat_last_change` |
| `/` | 往前搜索 | `search` |
| `:` | 命令行 | `command_mode` |
| `;` | 再找一次刚才那个字 | `repeat_find_char` |
| `<` | 减少缩进(再按一个动作) | `operator_unindent` |
| `>` | 增加缩进(再按一个动作) | `operator_indent` |
| `?` | 往后搜索 | `rsearch` |
| `@` | 回放宏(再按一个字母) | `vim_replay_macro` |
| `[` | [ 组：往前找上一处 | `left_bracket_mode` |
| `\` | 空格菜单 | `space_mode` |
| `]` | ] 组：往后找下一处 | `right_bracket_mode` |
| `^` | as `gs` | `@gs` |
| `_` | 行首第一个非空字(带数字时往下数行) | `vim_goto_first_nonwhitespace` |
| `{` | 光标跳到上一段(不选中) | `jump_prev_paragraph` |
| `\|` | 到这一行的第几列(用计数) | `goto_column` |
| `}` | 光标跳到下一段(不选中) | `jump_next_paragraph` |
| `~` | 大小写互换并往后走(vim 的 ~) | `vim_switch_case` |
| `C-6` `C-^` | 回到最近打开的缓冲区 | `goto_last_accessed_file` |
| `C-a` | 光标处或其后的数字加一(vim 的 C-a) | `vim_increment` |
| `C-b` `PageUp` | 后退一页 | `page_up` |
| `C-d` | 前进半页 | `page_cursor_half_down` |
| `C-e` | 屏幕往下滚一行(光标的字不动) | `scroll_down` |
| `C-f` `PageDown` | 前进一页 | `page_down` |
| `C-i` `Tab` | 跳转表：再往前一处 | `jump_forward` |
| `C-o` | 跳转表：回到刚才那个位置 | `jump_backward` |
| `C-r` | 重做(vim 的 C-r) | `vim_redo` |
| `C-u` | 后退半页 | `page_cursor_half_up` |
| `C-v` | 块选择(vim 的 C-v) | `vim_visual_block_mode` |
| `C-w` | 窗口组 | `window_mode` |
| `C-x` | 光标处或其后的数字减一(vim 的 C-x) | `vim_decrement` |
| `C-y` | 屏幕往上滚一行(光标的字不动) | `scroll_up` |
| `Esc` | 回普通模式(vim：退出可视模式时选区收成一点) | `vim_normal_mode` |
| `Enter` | 下一行的第一个非空白字符 | `goto_next_line_nonwhitespace` |
| `Home` | 行首 | `goto_line_start` |
| `ZQ` | `:quit!` | `:quit!` |
| `ZZ` | `:x` | `:x` |

## Visual mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 选中整个对象(再按一个对象) | `select_around_object` |
| `c` `s` | 剪切后改写 | `change_selection` |
| `d` `x` | 剪切选区(进寄存器) | `delete_selection` |
| `f` | 选区往后撑到某个字 | `extend_next_char` |
| `F` | 选区往前撑到某个字 | `extend_prev_char` |
| `h` `Left` | 选区向左撑一个字 | `extend_char_left` |
| `i` | 选中对象的里面(再按一个对象) | `select_inner_object` |
| `l` `Right` | 选区向右撑一个字 | `extend_char_right` |
| `o` | 换到选区的另一头(vim 可视模式的 o) | `vim_flip_selections` |
| `R` | 用寄存器内容替换选区 | `replace_with_yanked` |
| `t` | 选区往后撑到某个字前面 | `extend_till_char` |
| `T` | 选区往前撑到某个字后面 | `extend_till_prev_char` |
| `u` | 选区转小写并退出可视模式(vim 的 u) | `vim_switch_to_lowercase` |
| `U` | 选区转大写并退出可视模式(vim 的 U) | `vim_switch_to_uppercase` |
| `y` | 复制选区并退出可视模式(vim 的 y) | `vim_yank` |
| `<` | 减少缩进，光标留在原列(vim) | `vim_unindent` |
| `>` | 增加缩进，光标留在原列(vim) | `vim_indent` |
| `Home` | 选区撑到行首 | `extend_to_line_start` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` `C-c` | 退出延伸模式，收起临时显示的东西 | `normal_mode` |
| `Enter` `C-j` | 换行(带上缩进、列表记号) | `insert_newline` |
| `Backspace` `C-h` | 删除光标前的一个字 | `delete_char_backward` |
| `Delete` | 删除光标后的一个字 | `delete_char_forward` |
| `C-d` | 减少缩进 | `unindent` |
| `C-w` | 删除光标前的一个词 | `delete_word_backward` |
| `C-u` | 删到这次插入开始的地方(vim 的 C-u) | `vim_kill_to_line_start` |
| `C-r` | 插入寄存器的内容(再按一个字母) | `insert_register` |
| `C-o` | 临时回普通模式做一件事(vim 的 C-o) | `run_one_normal_command` |
| `Left` | 左一个字 | `move_char_left` |
| `Right` | 右一个字 | `move_char_right` |
| `Up` | 上一行(屏幕上的) | `move_visual_line_up` |
| `Down` | 下一行(屏幕上的) | `move_visual_line_down` |
| `PageUp` | 后退一页 | `page_up` |
| `PageDown` | 前进一页 | `page_down` |
| `Home` | 行首 | `goto_line_start` |
| `End` | 到行尾(最后一个字后面) | `goto_line_end_newline` |
| `C-y` | 打出上一行同一位置的字 | `insert_char_above` |
| `C-e` | 打出下一行同一位置的字 | `insert_char_below` |
| `C-g` | 在这里断开撤销 | `commit_undo_checkpoint` |
| `Tab` `S-Tab` | 插入缩进(文件用的那一种) | `insert_tab` |

## 空格 (`\`)

| Key | What it does |
| --- | --- |
| `\f` | 文件挑选器(项目路径) |
| `\F` | 文件挑选器(工作路径) |
| `\e` | 浏览文件(项目路径) |
| `\b` | 缓冲区挑选器 |
| `\j` | 跳转列表 |
| `\'` | 上一个挑选器 |
| `\g` | 存在改动文件 |
| `\y` | 复制到系统剪贴板 |
| `\Y` | 主选区复制到系统剪贴板 |
| `\p` | 从系统剪贴板粘贴 |
| `\P` | 从系统剪贴板粘贴在前 |
| `\R` | 用系统剪贴板替换选区 |
| `\s` | 符号挑选器 |
| `\S` | 项目符号挑选器 |
| `\k` | 显示定义文档(浮窗) |
| `\d` | 诊断挑选器 |
| `\D` | 项目诊断挑选器 |
| `\r` | 改名（各处一起改） |
| `\a` | 代码动作 |
| `\w` | 工作区域操作 |
| `\c` | 行注释 |
| `\C` | 块注释 |
| `\/` | 搜索面板 |
| `\?` | 命令一览 |

## g 前往 (`g`)

| Key | What it does |
| --- | --- |
| `gg` | 文件开头 |
| `g<N>g` | 前往第 N 行 |
| `ge` | 光标跳到上一个词尾(不选中) |
| `gE` | 光标跳到上一个大词尾(不选中) |
| `gf` | 打开这个文件 |
| `gw` | 重新排版，光标不动（vim 的 gw） |
| `gx` | 用浏览器打开网址 |
| `gn / gN` | 下一处/上一处匹配 |
| `gd` | 前往定义 |
| `gD` | 跳到声明 |
| `gj` | 下一行(屏幕上的) |
| `gk` | 上一行(屏幕上的) |
| `gv` | 重选上一次那一段 |
| `gi` | 回到上次插入处继续插入 |
| `g; / g,` | 往旧/往新走一处改动 |
| `gu / gU / g~` | 转小写/转大写/大小写互换，等待动作 |
| `gq` | 按宽度重排，等待动作 |
| `gJ` | 合并下一行，不补空格 |
| `` g` `` | 回到标记(再按一个字母) |

## 下一个 (`]`)

| Key | What it does |
| --- | --- |
| `]d / ]D` | 诊断(大写：第一个/最后一个) |
| `]c` | 改动 |
| `]p` | 向后粘贴(vim 的 p) |
| `]␣` | 下面加一条空行 |

## 上一个 (`[`)

| Key | What it does |
| --- | --- |
| `[d / [D` | 诊断(大写：第一个/最后一个) |
| `[c` | 改动 |
| `[p` | 向前粘贴(vim 的 P) |
| `[␣` | 上面加一条空行 |

## 这一行挪到哪 (`z`)

| Key | What it does |
| --- | --- |
| `zz` | 中间 |
| `zt` | 顶上 |
| `zb` | 底下 |

## 工作区域操作 (`C-w`, `\w`)

| Key | What it does |
| --- | --- |
| `C-w w` | 下一个 |
| `C-w h / C-w j / C-w k / C-w l` | 按方向走 |
| `C-w s` | 下面开一个窗口 |
| `C-w v` | 旁边开一个窗口 |
| `C-w n` | 开一个空白窗口 |
| `C-w q` | 关掉这一区 |
| `C-w o` | 只留这一区 |
| `C-w f` | 在下面打开光标下的文件 |

## 开一个空白窗口 (`C-w n`, `\wn`)

| Key | What it does |
| --- | --- |
| `C-w n s` | 下面开一个空白窗口 |
| `C-w n v` | 旁边开一个空白窗口 |

