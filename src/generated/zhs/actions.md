<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | What it does | helix | vim | Insert |
| --- | --- | --- | --- | --- |
| `move_char_left` | 左一个字 | `h` `Left` | `h` `Left` `Backspace` | `Left` |
| `move_char_right` | 右一个字 | `l` `Right` | `l` `Right` | `Right` |
| `move_visual_line_up` | 上一行(屏幕上的) | `k` `Up` | `gk` `g Up` | `Up` |
| `move_visual_line_down` | 下一行(屏幕上的) | `j` `Down` | `gj` `g Down` | `Down` |
| `move_next_word_start` | 下一个词首 | `w` |  |  |
| `move_prev_word_start` | 上一个词首 | `b` |  |  |
| `move_next_word_end` | 下一个词尾 | `e` |  |  |
| `move_next_long_word_start` | 下一个大词首(按空格分) | `W` |  |  |
| `move_prev_long_word_start` | 上一个大词首 | `B` |  |  |
| `move_next_long_word_end` | 下一个大词尾 | `E` |  |  |
| `goto_line_start` | 行首 | `0` `Home` `gh` `g Up` | `Home` `0` | `Home` `C-a` |
| `goto_line_end` | 行尾 | `End` `gl` `g Down` |  |  |
| `goto_first_nonwhitespace` | 第一个非空白字符 | `^` `gs` | `^` |  |
| `goto_file_start` | 文件开头 | `gg` | `gg` |  |
| `goto_file_end` | 文件末尾 |  |  |  |
| `goto_last_line` | 最后一行 | `ge` |  |  |
| `goto_prev_sentence` | 上一句 | `H` |  |  |
| `goto_next_sentence` | 下一句 | `L` |  |  |
| `goto_prev_paragraph` | 上一段 | `[p` |  |  |
| `goto_next_paragraph` | 下一段 | `]p` |  |  |
| `page_cursor_half_down` | 向下翻半页 | `C-d` `z C-d` `z␣` `Z C-d` `Z␣` | `C-d` `Z C-d` `Z␣` |  |
| `page_cursor_half_up` | 向上翻半页 | `C-u` `z C-u` `z Backspace` `Z C-u` `Z Backspace` | `C-u` `Z C-u` `Z Backspace` |  |
| `jump_backward` | 跳转表：后退 | `C-o` | `C-o` |  |
| `select_mode` | 选择模式：移动时扩大选区 | `v` | `v` |  |
| `extend_line_below` | 选中当前行 | `x` |  |  |
| `extend_to_line_bounds` | 选区扩到整行 |  |  |  |
| `select_all` | 全选 | `%` |  |  |
| `collapse_selection` | 选区收成光标 | `;` |  |  |
| `delete_selection` | 剪切选区 | `d` | `x` |  |
| `delete_selection_noyank` | 删除选区(不进寄存器) | `A-d` | `A-d` |  |
| `change_selection` | 剪切后改写 | `c` | `s` |  |
| `change_selection_noyank` | 改写选区(不进寄存器) | `A-c` | `A-c` |  |
| `insert_mode` | 在选区前插入 | `i` |  |  |
| `append_mode` | 在选区后插入 | `a` |  |  |
| `insert_at_line_start` | 在行首插入 | `I` |  |  |
| `insert_at_line_end` | 在行尾插入 | `A` |  |  |
| `open_below` | 在下方开新行 | `o` |  |  |
| `open_above` | 在上方开新行 | `O` |  |  |
| `yank` | 复制 | `y` |  |  |
| `paste_after` | 向后粘贴 | `p` |  |  |
| `paste_before` | 向前粘贴 | `P` |  |  |
| `replace_with_yanked` | 用寄存器内容替换选区 | `R` |  |  |
| `join_selections` | 与下一行合并 | `J` |  |  |
| `indent` | 增加缩进 | `>` |  |  |
| `unindent` | 减少缩进 | `<` |  | `C-d` |
| `increment` | 光标处的数字加一 | `C-a` |  |  |
| `decrement` | 光标处的数字减一 | `C-x` |  |  |
| `switch_case` | 大小写互换 | `~` ``` `` ``` | ``` g`` ``` |  |
| `undo` | 撤销 | `u` |  |  |
| `redo` | 重做 | `U` |  |  |
| `repeat_last_change` | 重复上次输入(vim 键位：上次改动) | `.` |  |  |
| `search` | 搜索 | `/` `z/` `Z/` | `/` `Z/` |  |
| `rsearch` | 反向搜索 | `?` `z?` `Z?` | `?` `Z?` |  |
| `search_next` | 下一处 | `n` `zn` `Zn` | `gn` `Zn` |  |
| `search_prev` | 上一处 | `N` `zN` `ZN` | `gN` `ZN` |  |
| `search_selection` | 搜索选中内容 | `g/` | `*` `g/` |  |
| `goto_definition` | 转到定义 | `gd` | `gd` |  |
| `goto_file` | 打开本行所写的文件 | `gf` | `gf` |  |
| `follow_link` | 跳到光标下的链接目标 | `gL` | `gL` |  |
| `open_link` | 用浏览器打开光标下的网址 | `gx` | `gx` |  |
| `goto_declaration` | 转到声明 | `gD` | `gD` |  |
| `goto_type_definition` | 转到类型定义 | `gy` | `gy` |  |
| `goto_implementation` | 转到实现 | `gi` |  |  |
| `goto_last_modified_file` | 最近修改的文件 | `gm` |  |  |
| `insert_char_above` | 插入上一行同列的字 |  |  | `C-y` |
| `insert_char_below` | 插入下一行同列的字 |  |  | `C-e` |
| `file_picker` | 打开文件选择器 | `Space f` | `Space f` |  |
| `buffer_picker` | 打开缓冲区选择器 | `Space b` | `Space b` |  |
| `goto_next_buffer` | 下一个缓冲区 | `gn` |  |  |
| `goto_previous_buffer` | 上一个缓冲区 | `gp` |  |  |
| `dictionary` | 字典：光标处汉字的拆分 | `Space n` | `Space n` |  |
| `rotate_view` | 下一个区域 | `C-w w` | `C-w w` |  |
| `global_search` | 高级搜索面板 | `Space /` | `Space /` |  |
| `command_palette` | 所有命令 | `Space ?` | `Space ?` |  |
| `paste_menu` | 粘贴菜单：选寄存器 | `Space "` | `Space "` |  |
| `toggle_comments` | 行注释 | `C-c` `Space c` | `Space c` |  |
| `toggle_block_comments` | 块注释 | `Space C` | `Space C` |  |
| `toggle_line_comments` | 只用行注释 | `Space A-c` | `Space A-c` |  |
| `yank_to_clipboard` | 复制到系统剪贴板 | `Space y` | `Space y` |  |
| `yank_main_selection_to_clipboard` | 复制主选区到系统剪贴板 | `Space Y` | `Space Y` |  |
| `jumplist_picker` | 跳转列表 | `Space j` | `Space j` |  |
| `goto_first_change` | 第一处改动 | `[G` | `[G` |  |
| `goto_last_change` | 最后一处改动 | `]G` | `]G` |  |
| `suspend` | 挂起到终端；fg 返回 | `C-z` | `C-z` |  |
| `select_references_to_symbol_under_cursor` | 选中本文件中的所有引用 | `Space h` | `Space h` |  |
| `format_selections` | 用语言服务器格式化选区 | `=` |  |  |
| `expand_selection` | 选区扩到外层语法节点 | `A-o` | `A-o` |  |
| `shrink_selection` | 缩小选区，或缩到第一个子节点 | `A-i` | `A-i` |  |
| `select_next_sibling` | 选中下一个同级节点 | `A-n` | `A-n` |  |
| `select_prev_sibling` | 选中上一个同级节点 | `A-p` | `A-p` |  |
| `select_all_siblings` | 选中所有同级节点 | `A-a` | `A-a` |  |
| `select_all_children` | 选中所有子节点 | `A-I` | `A-I` |  |
| `move_parent_node_end` | 到所在节点的末尾 | `A-e` | `A-e` |  |
| `move_parent_node_start` | 到所在节点开头，再按到上一层 | `A-b` | `A-b` |  |
| `extend_parent_node_end` | 选区扩到所在节点末尾 | `A-e` | `A-e` |  |
| `extend_parent_node_start` | 选区扩到所在节点开头 | `A-b` | `A-b` |  |
| `last_picker` | 重开上一个选择器 | `Space '` | `Space '` |  |
| `paste_clipboard_after` | 从系统剪贴板粘贴 | `Space p` | `Space p` |  |
| `move_line_up` | 上一行(文件里的) | `gk` `g Up` | `C-p` `k` `Up` |  |
| `move_line_down` | 下一行(文件里的) | `gj` `g Down` | `C-n` `j` `Down` |  |
| `goto_next_line_nonwhitespace` | 下一行的第一个非空白字符 |  | `Enter` |  |
| `jump_next_word_start` | 跳到下一个词首(不选中) |  | `w` |  |
| `jump_next_long_word_start` | 跳到下一个大词首(不选中) |  | `W` |  |
| `jump_prev_word_start` | 跳到上一个词首(不选中) |  | `b` |  |
| `jump_prev_long_word_start` | 跳到上一个大词首(不选中) |  | `B` |  |
| `jump_next_word_end` | 跳到下一个词尾(不选中) |  | `e` |  |
| `jump_next_long_word_end` | 跳到下一个大词尾(不选中) |  | `E` |  |
| `jump_next_paragraph` | 跳到下一段(不选中) |  | `}` |  |
| `jump_prev_paragraph` | 跳到上一段(不选中) |  | `{` |  |
| `move_next_paragraph` | 选到下一段 | `}` |  |  |
| `move_prev_paragraph` | 选到上一段 | `{` |  |  |
| `goto_window_top` | 屏幕最上面那一行 | `gt` | `H` |  |
| `goto_window_center` | 屏幕中间那一行 | `gc` | `M` |  |
| `goto_window_bottom` | 屏幕最下面那一行 | `gb` | `L` `gb` |  |
| `jump_prev_sentence` | 跳到上一句(不选中) |  | `(` |  |
| `jump_next_sentence` | 跳到下一句(不选中) |  | `)` |  |
| `add_mark` | 设标记(再按一个字母) | `M` | `m` |  |
| `goto_mark` | 回到标记(再按一个字母) | `'` | `'` |  |
| `goto_mark_exact` | 回到标记所在的那个字(再按一个字母) |  | `` ` `` |  |
| `view_mode` | 视图组：定位光标行、滚屏、折叠 | `z` | `z` |  |
| `sticky_view_mode` | 视图组(常驻) | `Z` | `Z` |  |
| `right_bracket_mode` | ] 组：跳到下一个 | `]` | `]` |  |
| `left_bracket_mode` | [ 组：跳到上一个 | `[` | `[` |  |
| `goto_mode` | g 组：跳转 | `g` | `g` |  |
| `space_mode` | 空格菜单 | `Space` | `Space` `\` |  |
| `find_next_char` | 往后找一个字，选到它 | `f` | `f` |  |
| `find_prev_char` | 往前找一个字，选到它 | `F` | `F` |  |
| `find_till_char` | 往后找一个字，选到它前面 | `t` | `t` |  |
| `till_prev_char` | 往前找一个字，选到它后面 | `T` | `T` |  |
| `select_line_mode` | 整行选择模式 |  | `V` |  |
| `normal_mode` | 退出选择模式，收起临时显示的内容 | `Esc` |  | `Esc` `C-c` |
| `repeat_find_char` | 再找一次刚才那个字 |  | `;` |  |
| `repeat_find_char_reverse` | 反向再找一次刚才那个字 |  | `,` |  |
| `copy_selection_on_next_line` | 在下一行加一个选区 | `C` |  |  |
| `copy_selection_on_prev_line` | 在上一行加一个选区 | `A-C` | `A-C` |  |
| `keep_primary_selection` | 只留主选区 | `,` |  |  |
| `remove_primary_selection` | 去掉主选区 | `A-,` | `A-,` |  |
| `merge_selections` | 合并所有选区 | `A--` | `A--` |  |
| `merge_consecutive_selections` | 合并相邻的选区 | `A-_` | `A-_` |  |
| `ensure_selections_forward` | 让每个选区都朝前 | `A-:` | `A-:` |  |
| `shrink_to_line_bounds` | 把选区缩到整行 | `A-x` | `A-x` |  |
| `split_selection_on_newline` | 按行拆分选区 | `A-s` | `A-s` |  |
| `rotate_selections_forward` | 主选区换成下一个 | `)` |  |  |
| `rotate_selections_backward` | 主选区换成上一个 | `(` |  |  |
| `trim_selections` | 去掉每个选区两头的空白 | `_` |  |  |
| `align_selections` | 对齐各选区 | `&` |  |  |
| `rotate_selection_contents_forward` | 各选区的内容往后轮换 | `A-)` | `A-)` |  |
| `rotate_selection_contents_backward` | 各选区的内容往前轮换 | `A-(` | `A-(` |  |
| `select_regex` | 在选区内按正则选择 | `s` |  |  |
| `split_selection` | 按正则拆分选区 | `S` |  |  |
| `keep_selections` | 只保留匹配正则的选区 | `K` |  |  |
| `remove_selections` | 去掉匹配正则的选区 | `A-K` | `A-K` |  |
| `operator_delete` | 删除(再按一个动作) |  | `d` |  |
| `operator_change` | 改写(再按一个动作) |  | `c` |  |
| `operator_yank` | 复制(再按一个动作) |  | `y` `zy` |  |
| `operator_indent` | 增加缩进(再按一个动作) |  | `>` |  |
| `operator_unindent` | 减少缩进(再按一个动作) |  | `<` |  |
| `delete_to_line_end` | 删到行尾 | `D` |  |  |
| `delete_to_line_end_noyank` | 删到行尾(不进寄存器) | `A-D` |  |  |
| `vim_delete_char_forward` | 删掉光标下的字，不删换行(vim 的 x) |  | `x` |  |
| `extend_line_above` | 往上选行 | `X` |  |  |
| `move_selected_lines_down` | 把选中的行往下移 | `A-j` | `A-j` |  |
| `move_selected_lines_up` | 把选中的行往上移 | `A-k` | `A-k` |  |
| `goto_line_or_last_line` | 到第 N 行，不带数字到末行 | `G` |  |  |
| `normal_mode_and_collapse` | 退出选择模式，或收成一个光标 |  |  |  |
| `quit` | 关闭此区；最后一个窗口则退出编辑器 |  |  |  |
| `select_inner_object` | 选中对象内部(再按对象键) |  | `i` |  |
| `select_around_object` | 选中整个对象(再按对象键) |  | `a` |  |
| `undo_line` | 撤销这一行的所有改动 |  | `U` |  |
| `earlier` | 撤销(同 u) | `A-u` | `A-u` |  |
| `later` | 重做(同 U) | `A-U` | `A-U` |  |
| `goto_column` | 到本行第 N 列(用计数) |  | `\|` |  |
| `shell_pipe` | 用外部命令处理选区并替换 | `\|` |  |  |
| `shell_insert_output` | 把外部命令的输出插在选区前 | `!` |  |  |
| `shell_append_output` | 把外部命令的输出接在选区后 | `A-!` | `A-!` |  |
| `shell_pipe_to` | 把选区传给外部命令，不改文本 | `A-\|` | `A-\|` |  |
| `shell_keep_pipe` | 只保留终端命令执行成功的选区 | `$` |  |  |
| `command_mode` | 命令行 | `:` | `:` `C-w :` |  |
| `match_mode` | 配对组：括号、引号、对象 | `m` |  |  |
| `replace` | 把选中的每个字换成另一个字 | `r` | `r` |  |
| `select_register` | 选寄存器(再按一个字母) | `"` | `"` |  |
| `record_macro` | 开始或停止录宏 | `Q` |  |  |
| `replay_macro` | 回放宏 | `q` |  |  |
| `window_mode` | 窗口组 | `C-w` `Space w` | `C-w` `Space w` |  |
| `page_down` | 向下翻页 | `C-f` `PageDown` `Space Space` `z C-f` `z PageDown` `Z C-f` `Z PageDown` | `C-f` `PageDown` `Space Space` `Z C-f` `Z PageDown` | `PageDown` |
| `page_up` | 向上翻页 | `C-b` `PageUp` `Space Backspace` `z C-b` `z PageUp` `Z C-b` `Z PageUp` | `C-b` `PageUp` `Space Backspace` `Z C-b` `Z PageUp` | `PageUp` |
| `join_selections_space` | 合并行并选中连接处 | `A-J` | `A-J` |  |
| `save_selection` | 把当前位置记入跳转表 | `C-s` | `C-s` |  |
| `jump_forward` | 跳转表：前进 | `C-i` `Tab` | `C-i` `Tab` |  |
| `two_thirds_page_down` | 向下翻三分之二页 | `C-n` |  |  |
| `two_thirds_page_up` | 向上翻三分之二页 | `C-p` |  |  |
| `flip_selections` | 光标换到选区另一头 | `A-;` | `A-;` |  |
| `vim_redo` | 重做(vim 的 C-r) |  | `C-r` |  |
| `delete_char_backward` | 删除光标前的一个字 |  | `X` | `Backspace` `C-h` |
| `case_mode` | 字形组：大小写、繁简 | `` ` `` | `` g` `` |  |
| `search_selection_detect_word_boundaries` | 搜索选中内容(整词) | `*` |  |  |
| `search_selection_exact` | 搜索选中内容(原样) | `A-*` | `A-*` |  |
| `search_word_backward` | 反向搜索光标下的词 |  | `#` |  |
| `replace_mode` | 替换模式：输入覆盖原文 |  | `R` |  |
| `goto_line` | 到第 N 行(用计数) |  |  |  |
| `vim_repeat_last_change` | 用新的计数再做一次刚才的改动 |  | `.` |  |
| `repeat_last_motion` | 重复上次的 f 或 t | `A-.` | `A-.` |  |
| `jump_prev_word_end` | 跳到上一个词尾(不选中) |  | `ge` |  |
| `jump_prev_long_word_end` | 跳到上一个大词尾(不选中) |  | `gE` |  |
| `goto_word` | 跳到屏幕上某处 | `gw` | `gW` |  |
| `goto_word_by_letters` | 两字母定位单词 | `gz` | `gz` |  |
| `split_join` | 拆开/合并括号里的各项 | `gS` | `gS` |  |
| `goto_char_by_pinyin` | 按读音定位汉字 | `gZ` | `gZ` |  |
| `goto_last_accessed_file` | 回到刚才的缓冲区 | `ga` | `` |  |
| `goto_reference` | 转到引用 | `gr` |  |  |
| `move_next_zong` | 竖排时到下一纵(文件里的) |  | `gj` |  |
| `move_prev_zong` | 竖排时到上一纵(文件里的) |  | `gk` |  |
| `goto_last_modification` | 最后改动处 | `g.` | `g.` |  |
| `reselect_last_selection` | 重选上次选区 |  | `gv` |  |
| `insert_at_last_insert` | 在上次插入处继续插入 |  | `gi` |  |
| `goto_older_change` | 跳到较旧的改动 |  | `g;` |  |
| `goto_newer_change` | 跳到较新的改动 |  | `g,` |  |
| `operator_lowercase` | 转小写(再按一个动作) |  | `gu` |  |
| `operator_uppercase` | 转大写(再按一个动作) |  | `gU` |  |
| `operator_switch_case` | 大小写互换(再按一个动作) |  | `g~` |  |
| `operator_comment` | 注释(再按一个动作) |  | `gc` |  |
| `operator_fill` | 按宽度重排，后接动作 |  | `gq` |  |
| `operator_fill_keep_cursor` | 重排文本，光标不动(vim 的 gw) |  | `gw` |  |
| `join_selections_no_space` | 合并下一行(不加空格) |  | `gJ` |  |
| `file_picker_in_current_directory` | 文件选择器(工作目录) | `Space F` | `Space F` |  |
| `file_explorer` | 浏览文件(项目目录) | `Space e` | `Space e` |  |
| `file_explorer_in_current_buffer_directory` | 浏览文件(当前文件目录) | `Space E` | `Space E` |  |
| `changed_file_picker` | 已改动的文件 | `Space g` | `Space g` |  |
| `paste_clipboard_before` | 从系统剪贴板粘贴到前面 | `Space P` | `Space P` |  |
| `replace_selections_with_clipboard` | 用系统剪贴板替换选区 | `Space R` | `Space R` |  |
| `lsp_or_syntax_symbol_picker` | 符号选择器 | `Space s` | `Space s` |  |
| `lsp_or_syntax_workspace_symbol_picker` | 项目符号选择器 | `Space S` | `Space S` |  |
| `dictionary_panel` | 显示汉字信息(侧栏) | `Space N` | `Space N` |  |
| `hover` | 显示文档(浮窗) | `Space k` | `K` `Space k` |  |
| `hover_panel` | 显示文档(侧栏) | `Space K` | `Space K` |  |
| `diagnostics_picker` | 诊断选择器 | `Space d` | `Space d` |  |
| `workspace_diagnostics_picker` | 项目诊断选择器 | `Space D` | `Space D` |  |
| `show_diagnostic` | 显示诊断(浮窗) | `Space l` | `Space l` |  |
| `show_diagnostic_panel` | 显示诊断(侧栏) | `Space L` | `Space L` |  |
| `show_change` | 显示改动(浮窗) | `Space x` | `Space x` |  |
| `show_change_panel` | 显示改动(侧栏) | `Space X` | `Space X` |  |
| `rename_symbol` | 重命名符号 | `Space r` | `Space r` |  |
| `code_action` | 代码动作 | `Space a` | `Space a` |  |
| `show_record` | 显示行记录(浮窗) | `Space i` | `Space i` |  |
| `show_record_panel` | 显示行记录(侧栏) | `Space I` | `Space I` |  |
| `table_mode` | 表格 | `Space t` | `Space t` |  |
| `conflict_mode` | 合并冲突 | `Space m` | `Space m` |  |
| `open_recent_mode` | 最近打开 | `Space o` | `Space o` |  |
| `yume_mode` | 输入法 | `Space z` | `Space z` |  |
| `goto_next_conflict` | 下一处合并冲突 | `]m` |  |  |
| `goto_prev_conflict` | 上一处合并冲突 | `[m` |  |  |
| `goto_next_change` | 下一处改动(git) | `]g` | `]g` `]c` |  |
| `goto_prev_change` | 上一处改动(git) | `[g` | `[g` `[c` |  |
| `goto_next_diag` | 下一条诊断 | `]d` | `]d` |  |
| `goto_prev_diag` | 上一条诊断 | `[d` | `[d` |  |
| `goto_last_diag` | 最后一条诊断 | `]D` | `]D` |  |
| `goto_first_diag` | 第一条诊断 | `[D` | `[D` |  |
| `goto_next_function` | 下一个函数 | `]f` |  |  |
| `goto_prev_function` | 上一个函数 | `[f` |  |  |
| `goto_next_class` | 下一个类 | `]t` |  |  |
| `goto_prev_class` | 上一个类 | `[t` |  |  |
| `goto_next_comment` | 下一处注释 | `]c` |  |  |
| `goto_prev_comment` | 上一处注释 | `[c` |  |  |
| `goto_next_parameter` | 选中下一个参数 | `]a` |  |  |
| `goto_prev_parameter` | 选中上一个参数 | `[a` |  |  |
| `goto_next_entry` | 选中下一个条目 | `]e` | `]e` |  |
| `goto_prev_entry` | 选中上一个条目 | `[e` | `[e` |  |
| `goto_next_test` | 选中下一个测试 | `]T` |  |  |
| `goto_prev_test` | 选中上一个测试 | `[T` |  |  |
| `goto_next_xml_element` | 选中下一个 XML 元素 | `]x` | `]x` |  |
| `goto_prev_xml_element` | 选中上一个 XML 元素 | `[x` | `[x` |  |
| `add_newline_below` | 下方插入空行 | `]␣` | `]␣` |  |
| `add_newline_above` | 上方插入空行 | `[␣` | `[␣` |  |
| `align_view_center` | 光标行移到中间 | `zz` `zc` `Zz` `Zc` | `zz` `Zz` `Zc` |  |
| `align_view_top` | 光标行移到顶部 | `zt` `Zt` | `zt` `Zt` |  |
| `align_view_bottom` | 光标行移到底部 | `zb` `Zb` | `zb` `Zb` |  |
| `scroll_down` | 向下滚动一行(光标位置不变) | `zj` `z Down` `Zj` `Z Down` | `C-e` `Zj` `Z Down` |  |
| `scroll_up` | 向上滚动一行(光标位置不变) | `zk` `z Up` `Zk` `Z Up` | `C-y` `Zk` `Z Up` |  |
| `match_brackets` | 跳到配对符号的另一半 | `mm` |  |  |
| `select_textobject_inner` | 选中配对符号内的内容 | `mi` |  |  |
| `select_textobject_around` | 选中配对符号及其内容 | `ma` |  |  |
| `surround_add` | 用配对符号包围选区 | `ms` |  |  |
| `surround_delete` | 移除配对符号 | `md` |  |  |
| `surround_replace` | 替换配对符号 | `mr` |  |  |
| `jump_view_left` | 去左边那一区 | `C-w h` `C-w Left` | `C-w h` `C-w Left` |  |
| `jump_view_down` | 去下面那一区 | `C-w j` `C-w Down` | `C-w j` `C-w Down` |  |
| `jump_view_up` | 去上面那一区 | `C-w k` `C-w Up` | `C-w k` `C-w Up` |  |
| `jump_view_right` | 去右边那一区 | `C-w l` `C-w Right` | `C-w l` `C-w Right` |  |
| `toggle_left_sidebar` | 开关左侧栏 | `C-w e` | `C-w e` |  |
| `toggle_right_sidebar` | 开关右侧栏 | `C-w i` | `C-w i` |  |
| `goto_left_sidebar` | 进入左侧栏 | `C-w E` | `C-w E` |  |
| `goto_right_sidebar` | 进入右侧栏 | `C-w I` | `C-w I` |  |
| `hsplit` | 向下拆分 | `C-w s` |  |  |
| `hsplit_above` | 向上拆分 |  | `C-w S` `C-w s` |  |
| `vsplit_left` | 向左拆分 |  | `C-w v` |  |
| `vsplit` | 向右拆分 | `C-w v` |  |  |
| `hsplit_new` | 下方新建空白窗口 | `C-w n s` | `C-w n s` |  |
| `vsplit_new` | 右侧新建空白窗口 | `C-w n v` | `C-w n v` |  |
| `window_new_mode` | 空白窗口组：s 下面，v 旁边 | `C-w n` |  |  |
| `new_window_left` | 左侧新建空白窗口 | `C-w n h` |  |  |
| `new_window_down` | 下方新建空白窗口 | `C-w n j` |  |  |
| `new_window_up` | 上方新建空白窗口 | `C-w n k` | `C-w n` |  |
| `new_window_right` | 右侧新建空白窗口 | `C-w n l` |  |  |
| `new_window_left_pick` | 左侧新建窗口并选择缓冲区 | `C-w n H` |  |  |
| `new_window_down_pick` | 下方新建窗口并选择缓冲区 | `C-w n J` |  |  |
| `new_window_up_pick` | 上方新建窗口并选择缓冲区 | `C-w n K` |  |  |
| `new_window_right_pick` | 右侧新建窗口并选择缓冲区 | `C-w n L` |  |  |
| `wclose` | 关闭窗口 | `C-w q` | `C-w q` |  |
| `wonly` | 只保留此窗口 | `C-w o` | `C-w o` |  |
| `transpose_view` | 并排与上下互换 | `C-w t` |  |  |
| `swap_view_left` | 和左边那一区对调 | `C-w H` |  |  |
| `swap_view_down` | 和下面那一区对调 | `C-w J` |  |  |
| `swap_view_up` | 和上面那一区对调 | `C-w K` |  |  |
| `swap_view_right` | 和右边那一区对调 | `C-w L` |  |  |
| `goto_file_hsplit` | 下方打开光标处文件 | `C-w f` |  |  |
| `goto_file_vsplit` | 旁边打开光标处文件 | `C-w F` |  |  |
| `goto_file_hsplit_above` | 上方打开光标处文件 |  | `C-w F` `C-w f` |  |
| `create_fold` | 创建折叠，后接移动 | `zf` `Zf` | `zf` |  |
| `create_fold_lines` | 折叠 N 行(用计数) |  | `zF` |  |
| `open_fold` | 展开 |  | `zo` |  |
| `open_folds_recursively` | 递归展开 |  | `zO` |  |
| `close_fold` | 折叠 |  | `zc` |  |
| `close_folds_recursively` | 递归折叠 |  | `zC` |  |
| `toggle_fold` | 切换折叠 | `za` `Za` | `za` |  |
| `toggle_folds_recursively` | 递归切换折叠 |  | `zA` |  |
| `open_folds_to_cursor` | 展开到光标所在行 |  | `zv` |  |
| `open_all_folds` | 全部展开 | `zR` `ZR` | `zR` |  |
| `close_all_folds` | 全部折叠 | `zM` `ZM` | `zM` |  |
| `delete_fold` | 删除此处折叠，保留文本 |  | `zd` |  |
| `delete_folds_recursively` | 删除此处所有 zf 折叠 |  | `zD` |  |
| `delete_all_folds` | 删除所有 zf 折叠 |  | `zE` |  |
| `goto_next_fold` | 到下一个折叠开头 |  | `zj` |  |
| `goto_prev_fold` | 到上一个折叠末尾 |  | `zk` |  |
| `disable_folds` | 停用折叠 |  | `zn` |  |
| `enable_folds` | 启用折叠 |  | `zN` |  |
| `toggle_folds_enabled` | 启用/停用折叠 |  | `zi` |  |
| `fold_more` | 多折叠一层 |  | `zm` |  |
| `fold_less` | 多展开一层 |  | `zr` |  |
| `goto_fold_start` | 到当前折叠开头 |  | `[z` |  |
| `goto_fold_end` | 到当前折叠末尾 |  | `]z` |  |
| `reapply_fold_level_and_view` | 按层级重新折叠并显示光标行 |  | `zx` |  |
| `reapply_fold_level` | 按层级重新折叠 |  | `zX` |  |
| `vim_align_view_top` | 本行移到顶部，光标到缩进后 |  | `z Enter` |  |
| `vim_align_view_center` | 本行居中，光标到缩进后 |  | `z.` |  |
| `vim_align_view_bottom` | 本行移到底部，光标到缩进后 |  | `z-` |  |
| `vim_align_view_below_top` | 下一页首行移到顶部 |  | `z+` |  |
| `vim_align_view_above_bottom` | 上一页末行移到底部 |  | `z^` |  |
| `scroll_view_left` | 视图左移一列 |  | `zh` `z Left` |  |
| `scroll_view_right` | 视图右移一列 |  | `zl` `z Right` |  |
| `scroll_view_half_left` | 视图左移半屏 |  | `zH` |  |
| `scroll_view_half_right` | 视图右移半屏 |  | `zL` |  |
| `align_view_cursor_left` | 光标列移到最左边 |  | `zs` |  |
| `align_view_cursor_right` | 光标列移到最右边 |  | `ze` |  |
| `align_view_middle` | 横向居中 | `zm` `Zm` | `Zm` |  |
| `rotate_view_reverse` | 上一个 |  | `C-w W` |  |
| `jump_view_first` | 第一个窗口 |  | `C-w t` |  |
| `jump_view_last` | 最后一个窗口 |  | `C-w b` |  |
| `jump_view_last_accessed` | 上一个窗口 |  | `C-w p` |  |
| `exchange_view` | 与下一个窗口交换 |  | `C-w x` |  |
| `rotate_views_forward` | 本排窗口向后轮换 |  | `C-w r` |  |
| `rotate_views_backward` | 本排窗口向前轮换 |  | `C-w R` |  |
| `move_view_far_left` | 移到最左侧 |  | `C-w H` |  |
| `move_view_far_down` | 移到最下方 |  | `C-w J` |  |
| `move_view_far_up` | 移到最上方 |  | `C-w K` |  |
| `move_view_far_right` | 移到最右侧 |  | `C-w L` |  |
| `vim_close_window` | 关闭窗口但不退出 |  | `C-w c` |  |
| `goto_last_accessed_file_hsplit` | 上方打开上一个文件 |  | `C-w ^` |  |
| `switch_to_lowercase` | 转小写 | `` `l `` | `` g`l `` |  |
| `switch_to_uppercase` | 转大写 | `` A-` `` `` `u `` | `` A-` `` `` g`u `` |  |
| `convert_to_simplified` | 繁→简 | `` `s `` | `` g`s `` |  |
| `convert_to_traditional` | 简→繁 | `` `t `` | `` g`t `` |  |
| `convert_to_taiwan_traditional` | 简→台湾繁 | `` `w `` | `` g`w `` |  |
| `convert_to_hong_kong_traditional` | 简→香港繁 | `` `k `` | `` g`k `` |  |
| `convert_to_mainland_traditional` | 简→大陆繁 | `` `c `` | `` g`c `` |  |
| `convert_to_classical_traditional` | 简→古籍繁 | `` `g `` | `` g`g `` |  |
| `convert_to_japanese` | 繁→日文新字体 | `` `j `` | `` g`j `` |  |
| `switch_to_halfwidth` | 转半角 | `` `h `` | `` g`h `` |  |
| `switch_to_fullwidth` | 转全角 | `` `f `` | `` g`f `` |  |
| `conflict_keep_ours` | 保留我方 | `Space m o` | `Space m o` |  |
| `conflict_keep_theirs` | 保留对方 | `Space m t` | `Space m t` |  |
| `conflict_keep_both` | 保留双方 | `Space m b` | `Space m b` |  |
| `recent_file_picker` | 最近打开的文件 | `Space o f` | `Space o f` |  |
| `global_recent_file_picker` | 最近打开的文件(所有项目) | `Space o g` | `Space o g` |  |
| `project_picker` | 最近打开的项目 | `Space o p` | `Space o p` |  |
| `resume_session` | 恢复上次会话 | `Space o r` | `Space o r` |  |
| `yume_toggle` | 输入法开/关 | `Space z z` | `Space z z` |  |
| `yume_commit_mode` | 上屏方式 | `Space z m` | `Space z m` |  |
| `yume_panel_mode` | 候选栏位置 | `Space z p` | `Space z p` |  |
| `yume_preedit_mode` | 未上屏内容显示在哪 | `Space z e` | `Space z e` |  |
| `yume_toggle_prediction` | 输入预测开/关 | `Space z y` | `Space z y` |  |
| `yume_pick_scheme` | 选择方案 | `Space z i` | `Space z i` |  |
| `yume_next_scheme` | 下一个方案 | `Space z n` | `Space z n` |  |
| `yume_menu_size_3` | 每页 3 个候选 | `Space z 3` | `Space z 3` |  |
| `yume_menu_size_4` | 每页 4 个候选 | `Space z 4` | `Space z 4` |  |
| `yume_menu_size_5` | 每页 5 个候选 | `Space z 5` | `Space z 5` |  |
| `yume_menu_size_6` | 每页 6 个候选 | `Space z 6` | `Space z 6` |  |
| `yume_menu_size_7` | 每页 7 个候选 | `Space z 7` | `Space z 7` |  |
| `yume_menu_size_8` | 每页 8 个候选 | `Space z 8` | `Space z 8` |  |
| `yume_menu_size_9` | 每页 9 个候选 | `Space z 9` | `Space z 9` |  |
| `yume_next_annotation` | 切换候选注解 | `Space z /` | `Space z /` |  |
| `yume_installed_table` | 改用安装版码表 | `Space z t` | `Space z t` |  |
| `yume_table_source` | 查看码表来源 | `Space z w` | `Space z w` |  |
| `yume_data_location` | 查看数据位置 | `Space z W` | `Space z W` |  |
| `yume_commit_default` | 默认(由方案决定) | `Space z m 0` | `Space z m 0` |  |
| `yume_commit_delayed` | 顶字 | `Space z m d` | `Space z m d` |  |
| `yume_commit_unique` | 唯一 | `Space z m u` | `Space z m u` |  |
| `yume_commit_fluency` | 整句 | `Space z m f` | `Space z m f` |  |
| `yume_panel_box` | box：光标旁的框 | `Space z p b` | `Space z p b` |  |
| `yume_panel_bottom` | bottom：窗口底行 | `Space z p m` | `Space z p m` |  |
| `yume_panel_inline` | inline：光标下一行 | `Space z p i` | `Space z p i` |  |
| `yume_preedit_off` | off：显示在候选栏 | `Space z e o` | `Space z e o` |  |
| `yume_preedit_composition` | composition：正文中显示编码 | `Space z e c` | `Space z e c` |  |
| `yume_preedit_preview` | preview：正文中显示首选 | `Space z e p` | `Space z e p` |  |
| `yume_charset_mode` | 字集过滤 | `Space z 0` | `Space z 0` |  |
| `yume_sort_mode` | 字集排序 | `Space z s` | `Space z s` |  |
| `yume_lanes_mode` | 整句字集轨 | `Space z g` | `Space z g` |  |
| `yume_builtin_mode` | 切到内置方案 | `Space z b` | `Space z b` |  |
| `yume_charset_all` | 全部汉字 | `Space z 0 a` | `Space z 0 a` |  |
| `yume_charset_common` | 仅常用汉字 | `Space z 0 c` | `Space z 0 c` |  |
| `yume_charset_tonggui` | 仅简化汉字 | `Space z 0 s` | `Space z 0 s` |  |
| `yume_charset_harmonic` | 仅传统汉字 | `Space z 0 t` | `Space z 0 t` |  |
| `yume_sort_original` | 原始顺序 | `Space z s o` | `Space z s o` |  |
| `yume_sort_common` | 常用字优先 | `Space z s c` | `Space z s c` |  |
| `yume_sort_tonggui` | 简化字优先 | `Space z s s` | `Space z s s` |  |
| `yume_sort_harmonic` | 传统字优先 | `Space z s t` | `Space z s t` |  |
| `yume_lane_tonggui` | 通用规范汉字 | `Space z g j` | `Space z g j` |  |
| `yume_lane_tongfan` | 通规标准繁体字 | `Space z g f` | `Space z g f` |  |
| `yume_lane_tai` | 常用与次常用国字 | `Space z g t` | `Space z g t` |  |
| `yume_builtin_pinyin` | 宇浩拼音 | `Space z b p` | `Space z b p` |  |
| `yume_builtin_lingming` | 灵明 | `Space z b l` | `Space z b l` |  |
| `yume_builtin_xingchen` | 星陈 | `Space z b x` | `Space z b x` |  |
| `table_source_view` | 源码视图 | `Space t o` | `Space t o` |  |
| `table_basic_view` | 基本视图(按列对齐) | `Space t b` | `Space t b` |  |
| `table_window_view` | 全窗视图(表格独占窗口) | `Space t t` | `Space t t` |  |
| `table_leave_window` | 退出全窗视图 | `Space t q` | `Space t q` |  |
| `goto_next_table` | 下一张表 | `Space t ]` | `Space t ]` |  |
| `goto_prev_table` | 上一张表 | `Space t [` | `Space t [` |  |
| `table_convert_mode` | 转换表格格式(分隔符) | `Space t x` | `Space t x` |  |
| `table_cell_width` | 长单元格：换行/折叠/全文 | `Space t w` | `Space t w` |  |
| `table_search_columns` | 按列搜索(可指定列范围) | `Space t /` | `Space t /` |  |
| `table_goto_cell` | 跳到单元格(␣t 20,20g) | `Space t g` | `Space t g` |  |
| `table_enter_cell` | 进入单元格(按字移动) |  |  |  |
| `table_leave_cell` | 离开单元格(回到按格移动) |  |  |  |
| `table_next_cell` | 下一格，到行尾接下一行 |  |  |  |
| `table_prev_cell` | 上一格 |  |  |  |
| `table_yank_column` | 复制本列 | `Space t y` | `Space t y` |  |
| `table_replace_column` | 用复制的列覆盖本列 | `Space t v` | `Space t v` |  |
| `table_paste_column_right` | 把复制的列粘贴到右边 | `Space t p` | `Space t p` |  |
| `table_paste_column_left` | 把复制的列粘贴到左边 | `Space t P` | `Space t P` |  |
| `table_add_row_below` | 下方插入一行 | `Space t r` | `Space t r` |  |
| `table_add_row_above` | 上方插入一行 | `Space t R` | `Space t R` |  |
| `table_add_column_right` | 右边加一列 | `Space t c` | `Space t c` |  |
| `table_add_column_left` | 左边加一列 | `Space t C` | `Space t C` |  |
| `table_delete_row` | 删除本行 | `Space t d` | `Space t d` |  |
| `table_delete_column` | 删除本列 | `Space t D` | `Space t D` |  |
| `table_move_row_down` | 本行下移 | `Space t j` | `Space t j` |  |
| `table_move_row_up` | 本行上移 | `Space t k` | `Space t k` |  |
| `table_move_column_left` | 本列左移 | `Space t h` | `Space t h` |  |
| `table_move_column_right` | 本列右移 | `Space t l` | `Space t l` |  |
| `table_align_left` | 本列左对齐 | `Space t <` | `Space t <` |  |
| `table_align_center` | 本列居中 | `Space t =` | `Space t =` |  |
| `table_align_right` | 本列右对齐 | `Space t >` | `Space t >` |  |
| `table_line_up` | 重新对齐 | `Space t F` | `Space t F` |  |
| `table_record_panel` | 本行记录 | `Space t i` | `Space t i` |  |
| `table_first_row_is_data` | 首行作为表头 | `Space t H` | `Space t H` |  |
| `table_sort_ascending` | 按列升序排列(␣t1s) | `Space t s` | `Space t s` |  |
| `table_sort_descending` | 按列降序排列(␣t1S) | `Space t S` | `Space t S` |  |
| `convert_table_to_pipe` | 表格转成 pipe | `Space t x p` | `Space t x p` |  |
| `paste_table_as_pipe` | 从剪贴板粘贴为 pipe 表格 | `Space t x P` | `Space t x P` |  |
| `convert_table_to_csv` | 表格转成 csv | `Space t x c` | `Space t x c` |  |
| `paste_table_as_csv` | 从剪贴板粘贴为 csv 表格 | `Space t x C` | `Space t x C` |  |
| `convert_table_to_tsv` | 表格转成 tsv | `Space t x t` | `Space t x t` |  |
| `paste_table_as_tsv` | 从剪贴板粘贴为 tsv 表格 | `Space t x T` | `Space t x T` |  |
| `no_op` | 什么都不做(绑定它即解绑该键) |  | `&` `=` `!` `C-c` |  |
| `extend_char_left` | 选区向左扩一个字 | `h` `Left` | `h` `Left` |  |
| `extend_char_right` | 选区向右扩一个字 | `l` `Right` | `l` `Right` |  |
| `extend_visual_line_up` | 选区扩到上一行(屏幕上的) | `k` `Up` |  |  |
| `extend_visual_line_down` | 选区扩到下一行(屏幕上的) | `j` `Down` |  |  |
| `extend_line_up` | 选区扩到上一行(文件里的) | `gk` |  |  |
| `extend_line_down` | 选区扩到下一行(文件里的) | `gj` |  |  |
| `extend_next_word_start` | 选区扩到下一个词首 | `w` |  |  |
| `extend_prev_word_start` | 选区扩到上一个词首 | `b` |  |  |
| `extend_next_word_end` | 选区扩到下一个词尾 | `e` |  |  |
| `extend_next_long_word_start` | 选区扩到下一个大词首 | `W` |  |  |
| `extend_prev_long_word_start` | 选区扩到上一个大词首 | `B` |  |  |
| `extend_next_long_word_end` | 选区扩到下一个大词尾 | `E` |  |  |
| `extend_search_next` | 加选下一处匹配 | `n` |  |  |
| `extend_search_prev` | 加选上一处匹配 | `N` |  |  |
| `extend_till_char` | 选区向后扩到某个字之前 | `t` | `t` |  |
| `extend_next_char` | 选区向后扩到某个字 | `f` | `f` |  |
| `extend_till_prev_char` | 选区向前扩到某个字之后 | `T` | `T` |  |
| `extend_prev_char` | 选区向前扩到某个字 | `F` | `F` |  |
| `extend_to_line_start` | 选区扩到行首 | `Home` | `Home` |  |
| `extend_to_line_end` | 选区扩到行尾 | `End` |  |  |
| `extend_to_file_start` | 选区扩到文件开头 | `gg` | `gg` |  |
| `extend_to_file_end` | 选区扩到文件末尾 |  |  |  |
| `extend_to_last_line` | 选到最后一行 | `ge` |  |  |
| `extend_to_word` | 选区扩到某个跳转标签 | `gw` |  |  |
| `insert_newline` | 换行(延续缩进和列表符号) |  |  | `Enter` `C-j` |
| `delete_char_forward` | 删除光标后的一个字 |  |  | `Delete` `C-d` |
| `delete_word_forward` | 删除光标后的一个词 |  |  | `A-d` |
| `delete_word_backward` | 删除光标前的一个词 |  |  | `C-w` |
| `kill_to_line_start` | 删到行首 |  |  | `C-u` |
| `kill_to_line_end` | 删到行尾(插入模式) |  |  | `C-k` |
| `insert_register` | 插入寄存器内容(再按一个字母) |  |  | `C-r` |
| `run_one_normal_command` | 临时执行一条普通模式命令(vim 的 C-o) |  |  | `C-o` |
| `goto_line_end_newline` | 到行尾(最后一个字后面) |  |  | `End` `C-e` |
| `commit_undo_checkpoint` | 新建撤销点 |  |  | `C-g` |
| `insert_tab` | 插入缩进(与文件一致) |  |  | `Tab` `S-Tab` |
| `insert_other_tab` | 插入另一种缩进(Tab 或空格) |  |  | `S-Tab` |
| `vim_normal_mode` | 回到普通模式(退出可视模式时选区收成光标) |  | `Esc` |  |
| `vim_goto_line_end` | 行尾(vim 的 $：往下走也留在行尾) |  | `$` `End` |  |
| `vim_insert_mode` | 在光标前插入(vim 的 i) |  | `i` |  |
| `vim_append_mode` | 在光标后插入(vim 的 a) |  | `a` |  |
| `vim_insert_at_line_start` | 在第一个非空白字符前插入(vim 的 I) |  | `I` |  |
| `vim_insert_at_line_end` | 在行尾插入(vim 的 A) |  | `A` |  |
| `vim_open_below` | 在下方开新行(vim 的 o，计数重复) |  | `o` |  |
| `vim_open_above` | 在上方开新行(vim 的 O，计数重复) |  | `O` |  |
| `vim_join_selections` | 与下一行合并(vim 的 J) |  | `J` |  |
| `vim_switch_case` | 切换大小写并后移(vim 的 ~) |  | `~` |  |
| `vim_goto_line` | 到第 N 行，不带计数到末行(vim 的 G) |  | `G` |  |
| `vim_indent` | 增加缩进，光标留在原列(vim) |  | `>` |  |
| `vim_unindent` | 减少缩进，光标留在原列(vim) |  | `<` |  |
| `vim_paste_after` | 向后粘贴(vim 的 p) |  | `p` `zp` |  |
| `vim_paste_before` | 向前粘贴(vim 的 P) |  | `P` `zP` |  |
| `vim_paste_after_indented` | 向后粘贴，缩进对齐这一行(vim 的 ]p) |  | `]p` |  |
| `vim_paste_before_indented` | 向前粘贴，缩进对齐这一行(vim 的 [p) |  | `]P` `[p` `[P` |  |
| `vim_increment` | 光标处或其后的数字加一(vim 的 C-a) |  | `C-a` |  |
| `vim_decrement` | 光标处或其后的数字减一(vim 的 C-x) |  | `C-x` |  |
| `vim_search_next` | 下一处(vim 的 n) |  | `n` |  |
| `vim_search_prev` | 上一处(vim 的 N) |  | `N` |  |
| `vim_match_brackets` | 跳到匹配的括号，不在括号上则找本行下一个(vim 的 %) |  | `%` |  |
| `vim_kill_to_line_start` | 删到这次插入开始的地方(vim 的 C-u) |  |  | `C-u` |
| `vim_kill_to_line_end` | 删到行尾，不删换行(vim) |  |  | `C-k` |
| `vim_flip_selections` | 换到选区的另一头(vim 可视模式的 o) |  | `o` |  |
| `vim_switch_to_lowercase` | 选区转小写并退出可视模式(vim 的 u) |  | `u` |  |
| `vim_switch_to_uppercase` | 选区转大写并退出可视模式(vim 的 U) |  | `U` |  |
| `vim_yank` | 复制选区并退出可视模式(vim 的 y) |  | `y` |  |
| `vim_visual_block_mode` | 块选择(vim 的 C-v) |  | `C-v` |  |
| `vim_record_macro` | 录宏(再按一个字母) |  | `q` |  |
| `vim_replay_macro` | 回放宏(再按一个字母) |  | `@` |  |
| `vim_replay_last_macro` | 回放上次录的宏(vim 的 Q) |  | `Q` |  |
| `vim_goto_first_nonwhitespace` | 第一个非空白字符(带数字时下移几行) |  | `_` |  |

### vim keys that play other keys

| Key | Plays |
| --- | --- |
| `+` | `@jgs` |
| `-` | `@kgs` |
| `D` | `@d$` |
| `C` | `@c$` |
| `Y` | `@y$` |
| `S` | `@cc` |
| `ZZ` | `:x` |
| `ZQ` | `:quit!` |

### In a table's grid (`[keys.table]`)

| Key | Command |
| --- | --- |
| `h` | `move_char_left` |
| `l` | `move_char_right` |
| `j` | `move_visual_line_down` `move_line_down` |
| `k` | `move_visual_line_up` `move_line_up` |
| `Home` | `goto_line_start` |
| `End` | `goto_line_end` `vim_goto_line_end` |
| `x` | `extend_line_below` |
| `%` | `select_all` |
| `Enter` | `table_enter_cell` |
| `Esc` | `table_leave_cell` |
| `Tab` | `table_next_cell` |
| `S-Tab` | `table_prev_cell` |
| `C-n` | `two_thirds_page_down` |
| `C-p` | `two_thirds_page_up` |
| `C-d` | `page_cursor_half_down` |
| `C-u` | `page_cursor_half_up` |
| `PageDown` | `page_down` |
| `PageUp` | `page_up` |
| `y` | `yank` `operator_yank` |
| `d` | `delete_selection` `operator_delete` |
| `A-d` | `delete_selection_noyank` |
| `c` | `change_selection` `operator_change` |
| `A-c` | `change_selection_noyank` |
| `p` | `paste_after` `vim_paste_after` |
| `P` | `paste_before` `vim_paste_before` |
| `R` | `replace_with_yanked` |
| `i` | `insert_mode` `vim_insert_mode` |
| `a` | `append_mode` `vim_append_mode` |
| `I` | `insert_at_line_start` `vim_insert_at_line_start` |
| `A` | `insert_at_line_end` `vim_insert_at_line_end` |
| `o` | `open_below` `vim_open_below` |
| `O` | `open_above` `vim_open_above` |

### `[keys.prompt]`

| Command | What it does | Keys |
| --- | --- | --- |
| `normal_mode` | 关闭命令行、搜索框或选择器 | `Esc` |
| `confirm` | 执行；在选择器中打开选中项 | `Enter` |
| `completion_next` | 补全：下一个 | `Tab` |
| `completion_prev` | 补全：上一个 | `S-Tab` |
| `history_prev` | 历史：上一条 | `Up` `C-p` |
| `history_next` | 历史：下一条 | `Down` `C-n` |
| `move_char_left` | 左一个字 | `Left` |
| `move_char_right` | 右一个字 | `Right` |
| `goto_line_start` | 行首 | `Home` `C-a` |
| `goto_line_end` | 行尾 | `End` `C-e` |
| `delete_char_backward` | 删除光标前的一个字 | `Backspace` |
| `delete_char_forward` | 删除光标后的一个字 | `Delete` |
| `delete_word_backward` | 删除光标前的一个词 | `C-w` |
| `kill_to_line_start` | 删到行首 | `C-u` |
| `toggle_wide_search` | 繁简/拼音通配(开关) | `A-j` |

### `[keys.picker]`

| Command | What it does | Keys |
| --- | --- | --- |
| `next_entry` | 下一项 | `Tab` `C-n` `Down` |
| `prev_entry` | 上一项 | `S-Tab` `C-p` `Up` |
| `page_down` | 向下翻页 | `PageDown` |
| `page_up` | 向上翻页 | `PageUp` |
| `first_entry` | 第一项 |  |
| `last_entry` | 最后一项 |  |
| `cycle_hidden_files` | 切换跳过的文件：隐藏/忽略 | `A-h` |

### `[keys.sidebar]`

| Command | What it does | Keys |
| --- | --- | --- |
| `move_line_down` | 下一行 | `j` `Down` |
| `move_line_up` | 上一行 | `k` `Up` |
| `page_down` | 向下翻页 | `J` `PageDown` |
| `page_up` | 向上翻页 | `K` `PageUp` |
| `goto_file_start` | 第一行 | `g` `Home` |
| `goto_last_line` | 最后一行 | `G` `End` |
| `collapse_entry` | 收起，或退到上一层 | `h` `Left` |
| `expand_entry` | 展开，或进入 | `l` `Right` |
| `open_entry` | 进入：打开文件、跳到那一行 | `Enter` |
| `toggle_links_graph` | 链接面板：列表/图 | `v` |
| `restore_change` | 还原此处改动 | `u` |
| `yank_old_text` | 复制改动前的文本 | `y` |
| `refresh_sidebar` | 刷新 | `R` |
| `cycle_sidebar_width` | 切换宽度：窄、中、宽 | `w` |
| `next_sidebar_view` | 下一个面板 | `Tab` |
| `prev_sidebar_view` | 上一个面板 | `S-Tab` |
| `normal_mode` | 让输入法再挂起一次 | `Esc` |
| `leave_sidebar` | 回到编辑区(面板不关) | `q` |
| `command_mode` | 命令行 | `:` |
| `space_mode` | 空格菜单 | `Space` |
| `window_mode` | 窗口组 | `C-w` |

### `[keys.field]`

| Command | What it does | Keys |
| --- | --- | --- |
| `next_field` | 下一格；有灰字时先接受灰字 | `Tab` |
| `prev_field` | 上一格 | `S-Tab` |
| `move_line_down` | 下面那一格 | `Down` |
| `move_line_up` | 上面那一格 | `Up` |
