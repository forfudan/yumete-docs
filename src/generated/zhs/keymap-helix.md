<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 在选区后插入 | `append_mode` |
| `A` | 在行尾插入 | `insert_at_line_end` |
| `b` | 上一个词首 | `move_prev_word_start` |
| `B` | 上一个大词首 | `move_prev_long_word_start` |
| `c` | 剪切后改写 | `change_selection` |
| `C` | 在下一行加一个选区 | `copy_selection_on_next_line` |
| `d` | 剪切选区 | `delete_selection` |
| `e` | 下一个词尾 | `move_next_word_end` |
| `E` | 下一个大词尾 | `move_next_long_word_end` |
| `f` | 往后找一个字，选到它 | `find_next_char` |
| `F` | 往前找一个字，选到它 | `find_prev_char` |
| `g` | g 组：跳转 | `goto_mode` |
| `G` | 到第 N 行(用计数) | `goto_line` |
| `h` `Left` | 左一个字 | `move_char_left` |
| `i` | 在选区前插入 | `insert_mode` |
| `I` | 在行首插入 | `insert_at_line_start` |
| `j` `Down` | 下一行(屏幕上的) | `move_visual_line_down` |
| `J` | 与下一行合并 | `join_selections` |
| `k` `Up` | 上一行(屏幕上的) | `move_visual_line_up` |
| `K` | 只保留匹配正则的选区 | `keep_selections` |
| `l` `Right` | 右一个字 | `move_char_right` |
| `m` | 配对组：括号、引号、对象 | `match_mode` |
| `n` | 下一处 | `search_next` |
| `N` | 上一处 | `search_prev` |
| `o` | 在下方开新行 | `open_below` |
| `O` | 在上方开新行 | `open_above` |
| `p` | 向后粘贴 | `paste_after` |
| `P` | 向前粘贴 | `paste_before` |
| `q` | 回放宏 | `replay_macro` |
| `Q` | 开始或停止录宏 | `record_macro` |
| `r` | 把选中的每个字换成另一个字 | `replace` |
| `R` | 用寄存器内容替换选区 | `replace_with_yanked` |
| `s` | 在选区内按正则选择 | `select_regex` |
| `S` | 按正则拆分选区 | `split_selection` |
| `t` | 往后找一个字，选到它前面 | `find_till_char` |
| `T` | 往前找一个字，选到它后面 | `till_prev_char` |
| `u` | 撤销 | `undo` |
| `U` | 重做 | `redo` |
| `v` | 选择模式：移动时扩大选区 | `select_mode` |
| `w` | 下一个词首 | `move_next_word_start` |
| `W` | 下一个大词首(按空格分) | `move_next_long_word_start` |
| `x` | 选中当前行 | `extend_line_below` |
| `X` | 选区扩到整行 | `extend_to_line_bounds` |
| `y` | 复制 | `yank` |
| `z` | 视图组：定位光标行、滚屏、折叠 | `view_mode` |
| `Z` | 视图组(常驻) | `sticky_view_mode` |
| `Space` | 空格菜单 | `space_mode` |
| `!` | 把外部命令的输出插在选区前 | `shell_insert_output` |
| `"` | 选寄存器(再按一个字母) | `select_register` |
| `$` | 只保留终端命令执行成功的选区 | `shell_keep_pipe` |
| `%` | 全选 | `select_all` |
| `&` | 对齐各选区 | `align_selections` |
| `(` | 主选区换成上一个 | `rotate_selections_backward` |
| `)` | 主选区换成下一个 | `rotate_selections_forward` |
| `*` | 搜索选中内容(整词) | `search_selection_detect_word_boundaries` |
| `,` | 只留主选区 | `keep_primary_selection` |
| `.` | 重复上次输入(vim 键位：上次改动) | `repeat_last_change` |
| `/` | 搜索 | `search` |
| `:` | 命令行 | `command_mode` |
| `;` | 选区收成光标 | `collapse_selection` |
| `<` | 减少缩进 | `unindent` |
| `=` | 用语言服务器格式化选区 | `format_selections` |
| `>` | 增加缩进 | `indent` |
| `?` | 反向搜索 | `rsearch` |
| `[` | [ 组：跳到上一个 | `left_bracket_mode` |
| `]` | ] 组：跳到下一个 | `right_bracket_mode` |
| `_` | 去掉每个选区两头的空白 | `trim_selections` |
| `` ` `` | 转小写 | `switch_to_lowercase` |
| `{` | 选到上一段 | `move_prev_paragraph` |
| `\|` | 用外部命令处理选区并替换 | `shell_pipe` |
| `}` | 选到下一段 | `move_next_paragraph` |
| `~` | 大小写互换 | `switch_case` |
| `C-a` | 光标处的数字加一 | `increment` |
| `C-b` `PageUp` | 向上翻页 | `page_up` |
| `C-c` | 行注释 | `toggle_comments` |
| `C-d` | 向下翻半页 | `page_cursor_half_down` |
| `C-f` `PageDown` | 向下翻页 | `page_down` |
| `C-i` `Tab` | 跳转表：前进 | `jump_forward` |
| `C-o` | 跳转表：后退 | `jump_backward` |
| `C-s` | 把当前位置记入跳转表 | `save_selection` |
| `C-u` | 向上翻半页 | `page_cursor_half_up` |
| `C-w` | 窗口组 | `window_mode` |
| `C-x` | 光标处的数字减一 | `decrement` |
| `C-z` | 挂起到终端；fg 返回 | `suspend` |
| `A-!` | 把外部命令的输出接在选区后 | `shell_append_output` |
| `A-(` | 各选区的内容往前轮换 | `rotate_selection_contents_backward` |
| `A-)` | 各选区的内容往后轮换 | `rotate_selection_contents_forward` |
| `A-*` | 搜索选中内容(原样) | `search_selection_exact` |
| `A-,` | 去掉主选区 | `remove_primary_selection` |
| `A--` | 合并所有选区 | `merge_selections` |
| `A-.` | 重复上次的 f 或 t | `repeat_last_motion` |
| `A-:` | 让每个选区都朝前 | `ensure_selections_forward` |
| `A-;` | 光标换到选区另一头 | `flip_selections` |
| `A-_` | 合并相邻的选区 | `merge_consecutive_selections` |
| `` A-` `` | 转大写 | `switch_to_uppercase` |
| `A-a` | 选中所有同级节点 | `select_all_siblings` |
| `A-b` | 到所在节点开头，再按到上一层 | `move_parent_node_start` |
| `A-c` | 改写选区(不进寄存器) | `change_selection_noyank` |
| `A-C` | 在上一行加一个选区 | `copy_selection_on_prev_line` |
| `A-d` | 删除选区(不进寄存器) | `delete_selection_noyank` |
| `A-e` | 到所在节点的末尾 | `move_parent_node_end` |
| `A-i` | 缩小选区，或缩到第一个子节点 | `shrink_selection` |
| `A-I` | 选中所有子节点 | `select_all_children` |
| `A-J` | 合并行并选中连接处 | `join_selections_space` |
| `A-K` | 去掉匹配正则的选区 | `remove_selections` |
| `A-n` | 选中下一个同级节点 | `select_next_sibling` |
| `A-o` | 选区扩到外层语法节点 | `expand_selection` |
| `A-p` | 选中上一个同级节点 | `select_prev_sibling` |
| `A-s` | 按行拆分选区 | `split_selection_on_newline` |
| `A-u` | 撤销(同 u) | `earlier` |
| `A-U` | 重做(同 U) | `later` |
| `A-x` | 把选区缩到整行 | `shrink_to_line_bounds` |
| `A-\|` | 把选区传给外部命令，不改文本 | `shell_pipe_to` |
| `Esc` | 退出选择模式，收起临时显示的内容 | `normal_mode` |
| `Home` | 行首 | `goto_line_start` |
| `End` | 行尾 | `goto_line_end` |

## Select mode

| Key | What it does | Command |
| --- | --- | --- |
| `b` | 选区扩到上一个词首 | `extend_prev_word_start` |
| `B` | 选区扩到上一个大词首 | `extend_prev_long_word_start` |
| `e` | 选区扩到下一个词尾 | `extend_next_word_end` |
| `E` | 选区扩到下一个大词尾 | `extend_next_long_word_end` |
| `f` | 选区向后扩到某个字 | `extend_next_char` |
| `F` | 选区向前扩到某个字 | `extend_prev_char` |
| `h` `Left` | 选区向左扩一个字 | `extend_char_left` |
| `j` `Down` | 选区扩到下一行(屏幕上的) | `extend_visual_line_down` |
| `k` `Up` | 选区扩到上一行(屏幕上的) | `extend_visual_line_up` |
| `l` `Right` | 选区向右扩一个字 | `extend_char_right` |
| `n` | 加选下一处匹配 | `extend_search_next` |
| `N` | 加选上一处匹配 | `extend_search_prev` |
| `t` | 选区向后扩到某个字之前 | `extend_till_char` |
| `T` | 选区向前扩到某个字之后 | `extend_till_prev_char` |
| `w` | 选区扩到下一个词首 | `extend_next_word_start` |
| `W` | 选区扩到下一个大词首 | `extend_next_long_word_start` |
| `A-b` | 选区扩到所在节点开头 | `extend_parent_node_start` |
| `A-e` | 选区扩到所在节点末尾 | `extend_parent_node_end` |
| `Home` | 选区扩到行首 | `extend_to_line_start` |
| `End` | 选区扩到行尾 | `extend_to_line_end` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` | 退出选择模式，收起临时显示的内容 | `normal_mode` |
| `Enter` `C-j` | 换行(延续缩进和列表符号) | `insert_newline` |
| `Backspace` `C-h` | 删除光标前的一个字 | `delete_char_backward` |
| `Delete` `C-d` | 删除光标后的一个字 | `delete_char_forward` |
| `A-d` | 删除光标后的一个词 | `delete_word_forward` |
| `C-w` | 删除光标前的一个词 | `delete_word_backward` |
| `C-u` | 删到行首 | `kill_to_line_start` |
| `C-k` | 删到行尾(插入模式) | `kill_to_line_end` |
| `C-r` | 插入寄存器内容(再按一个字母) | `insert_register` |
| `Left` | 左一个字 | `move_char_left` |
| `Right` | 右一个字 | `move_char_right` |
| `Up` | 上一行(屏幕上的) | `move_visual_line_up` |
| `Down` | 下一行(屏幕上的) | `move_visual_line_down` |
| `PageUp` | 向上翻页 | `page_up` |
| `PageDown` | 向下翻页 | `page_down` |
| `Home` | 行首 | `goto_line_start` |
| `End` | 到行尾(最后一个字后面) | `goto_line_end_newline` |
| `Tab` `S-Tab` | 插入缩进(与文件一致) | `insert_tab` |

## 空格 (`Space`)

| Key | What it does |
| --- | --- |
| `Space f` | 文件选择器(项目目录) |
| `Space F` | 文件选择器(工作目录) |
| `Space e` | 浏览文件(项目目录) |
| `Space b` | 缓冲区选择器 |
| `Space j` | 跳转列表 |
| `Space '` | 重开上一个选择器 |
| `Space g` | 已改动的文件 |
| `Space y` | 复制到系统剪贴板 |
| `Space Y` | 复制主选区到系统剪贴板 |
| `Space p` | 从系统剪贴板粘贴 |
| `Space P` | 从系统剪贴板粘贴到前面 |
| `Space R` | 用系统剪贴板替换选区 |
| `Space s` | 符号选择器 |
| `Space S` | 项目符号选择器 |
| `Space k` | 显示文档(浮窗) |
| `Space d` | 诊断选择器 |
| `Space D` | 项目诊断选择器 |
| `Space r` | 重命名符号 |
| `Space h` | 选中本文件中的所有引用 |
| `Space a` | 代码动作 |
| `Space w` | 区域 |
| `Space c` | 行注释 |
| `Space C` | 块注释 |
| `Space A-c` | 只用行注释 |
| `Space /` | 搜索面板 |
| `Space ?` | 所有命令 |

## g 转到 (`g`)

| Key | What it does |
| --- | --- |
| `gg` | 文件开头 |
| `g<N>g` | 前往第 N 行 |
| `ge` | 最后一行 |
| `gh / gl` | 行首/行尾 |
| `gs` | 首个非空白字符 |
| `gf` | 打开这个文件 |
| `gw` | 跳到屏幕上某处 |
| `ga` | 回到刚才的缓冲区 |
| `gn / gp` | 下/上一个缓冲区 |
| `gd` | 转到定义 |
| `gD` | 转到声明 |
| `gy` | 转到类型定义 |
| `gi` | 转到实现 |
| `gm` | 最近修改的文件 |
| `gr` | 转到引用 |
| `gj / gk` | 下/上一逻辑行 |
| `g.` | 最后改动处 |
| `gt / gc / gb` | 屏幕顶部/中部/底部 |

## m (`m`)

| Key | What it does |
| --- | --- |
| `mm` | 跳到配对符号的另一半 |
| `mi` | 选中配对符号内的内容 |
| `ma` | 选中配对符号及其内容 |
| `ms` | 用配对符号包围选区 |
| `md` | 移除配对符号 |
| `mr` | 替换配对符号 |

## 下一个 (`]`)

| Key | What it does |
| --- | --- |
| `]g / ]G` | 改动(大写：第一处/最后一处) |
| `]d / ]D` | 诊断(大写：第一个/最后一个) |
| `]f` | 函数 |
| `]t` | 类 |
| `]c` | 注释 |
| `]a` | 参数 |
| `]e` | 条目 |
| `]T` | 测试 |
| `]x` | XML 元素 |
| `]p` | 下一段 |
| `]␣` | 下方插入空行 |

## 上一个 (`[`)

| Key | What it does |
| --- | --- |
| `[g / [G` | 改动(大写：第一处/最后一处) |
| `[d / [D` | 诊断(大写：第一个/最后一个) |
| `[f` | 函数 |
| `[t` | 类 |
| `[c` | 注释 |
| `[a` | 参数 |
| `[e` | 条目 |
| `[T` | 测试 |
| `[x` | XML 元素 |
| `[p` | 上一段 |
| `[␣` | 上方插入空行 |

## 视图 (`z`)

| Key | What it does |
| --- | --- |
| `zz / zc` | 居中 |
| `zt` | 顶部 |
| `zb` | 底部 |
| `zm` | 横向居中 |
| `zj / z↓` | 向下滚动一行 |
| `zk / z↑` | 向上滚动一行 |
| `zC-d / z␣` | 向下翻半页 |
| `zC-u / z⌫` | 向上翻半页 |
| `zC-f / zPgDn` | 向下翻页 |
| `zC-b / zPgUp` | 向上翻页 |
| `z/` | 搜索 |
| `z?` | 反向搜索 |
| `zn` | 下一处 |
| `zN` | 上一处 |

## 区域 (`C-w`, `Space w`)

| Key | What it does |
| --- | --- |
| `C-w w` | 下一个 |
| `C-w h / C-w j / C-w k / C-w l` | 按方向切换 |
| `C-w s` | 向下拆分 |
| `C-w v` | 并排拆分 |
| `C-w n` | 新建空白窗口 |
| `C-w q` | 关闭窗口 |
| `C-w o` | 只保留此窗口 |
| `C-w t` | 并排与上下互换 |
| `C-w H / C-w J / C-w K / C-w L` | 与该方向的窗口交换 |
| `C-w f` | 下方打开光标处文件 |
| `C-w F` | 旁边打开光标处文件 |

## 新建空白窗口 (`C-w n`, `Space w n`)

| Key | What it does |
| --- | --- |
| `C-w n s` | 下方新建空白窗口 |
| `C-w n v` | 旁边新建空白窗口 |

