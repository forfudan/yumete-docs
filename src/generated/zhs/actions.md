<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | What it does | helix | vim | Insert |
| --- | --- | --- | --- | --- |
| `move_char_left` | 左一个字 | `h` `Left` | `h` `Left` `Backspace` | `Left` |
| `move_char_right` | 右一个字 | `l` `Right` | `l` `Right` `Space` | `Right` |
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
| `goto_last_line` | 最后一行 | `ge` | `ge` |  |
| `goto_prev_sentence` | 上一句 | `H` |  |  |
| `goto_next_sentence` | 下一句 | `L` |  |  |
| `goto_prev_paragraph` | 上一段 | `[p` | `[p` |  |
| `goto_next_paragraph` | 下一段 | `]p` | `]p` |  |
| `page_cursor_half_down` | 前进半页 | `C-d` `z C-d` `z␣` `Z C-d` `Z␣` | `C-d` `z C-d` `z␣` `Z C-d` `Z␣` |  |
| `page_cursor_half_up` | 后退半页 | `C-u` `z C-u` `z Backspace` `Z C-u` `Z Backspace` | `C-u` `z C-u` `z Backspace` `Z C-u` `Z Backspace` |  |
| `jump_backward` | 跳转表：回到刚才那个位置 | `C-o` | `C-o` |  |
| `select_mode` | 延伸模式：移动把选区撑大 | `v` | `v` |  |
| `extend_line_below` | 选中当前行 | `x` |  |  |
| `extend_to_line_bounds` | 把选区撑到整行边界 |  |  |  |
| `select_all` | 选中整个文件 | `%` |  |  |
| `collapse_selection` | 选区收回光标 | `;` |  |  |
| `delete_selection` | 剪切选区(进寄存器) | `d` | `x` |  |
| `delete_selection_noyank` | 删除选区(不动寄存器) | `A-d` | `A-d` |  |
| `change_selection` | 剪切后改写 | `c` | `s` |  |
| `change_selection_noyank` | 改写选区(不动寄存器) | `A-c` | `A-c` |  |
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
| `repeat_last_change` | 再做一次刚才那个改动 | `.` |  |  |
| `search` | 往前搜索 | `/` `z/` `Z/` | `/` `z/` `Z/` |  |
| `rsearch` | 往后搜索 | `?` `z?` `Z?` | `?` `z?` `Z?` |  |
| `search_next` | 下一处 | `n` `zn` `Zn` | `gn` |  |
| `search_prev` | 上一处 | `N` `zN` `ZN` | `gN` |  |
| `search_selection` | 找选中的那段 | `g/` | `*` `g/` |  |
| `goto_definition` | 前往定义位置 | `gd` | `gd` |  |
| `goto_file` | 打开本行写的文件名 | `gf` | `gf` |  |
| `follow_link` | 前往光标下的链接位置 | `gL` | `gL` |  |
| `open_link` | 用浏览器打开光标下的网址 | `gx` | `gx` |  |
| `goto_declaration` | 跳到声明 | `gD` | `gD` |  |
| `goto_type_definition` | 跳到类型定义 | `gy` | `gy` |  |
| `goto_implementation` | 跳到实现 | `gi` |  |  |
| `goto_last_modified_file` | 最近改过的文件 | `gm` |  |  |
| `insert_char_above` | 打出上一行同一位置的字 |  |  | `C-y` |
| `insert_char_below` | 打出下一行同一位置的字 |  |  | `C-e` |
| `file_picker` | 打开文件挑选器 | `Space f` | `Space f` |  |
| `buffer_picker` | 打开缓冲区选择器 | `Space b` | `Space b` |  |
| `goto_next_buffer` | 切换到下一个缓冲区 | `gn` | `gn` |  |
| `goto_previous_buffer` | 切换到上一个缓冲区 | `gp` |  |  |
| `dictionary` | 字典：光标下那个字的拆分 | `Space n` | `Space n` |  |
| `rotate_view` | 下一个区域 | `C-w w` | `C-w w` |  |
| `global_search` | 高级搜索面板 | `Space /` | `Space /` |  |
| `command_palette` | 所有命令 | `Space ?` | `Space ?` |  |
| `paste_menu` | 粘贴菜单：挑一个寄存器 | `Space "` | `Space "` |  |
| `toggle_comments` | 注释这一行 | `C-c` `Space c` | `Space c` |  |
| `toggle_block_comments` | 整段注释 | `Space C` | `Space C` |  |
| `yank_to_clipboard` | 复制到系统剪贴板 | `Space y` | `Space y` |  |
| `yank_main_selection_to_clipboard` | 主选区复制到系统剪贴板 | `Space Y` | `Space Y` |  |
| `jumplist_picker` | 跳转列表 | `Space j` | `Space j` |  |
| `goto_first_change` | 第一处改动 | `[G` | `[G` |  |
| `goto_last_change` | 最后一处改动 | `]G` | `]G` |  |
| `suspend` | 暂停，回到终端；fg 回来 | `C-z` | `C-z` |  |
| `select_references_to_symbol_under_cursor` | 选中本档里的每一处 | `Space h` | `Space h` |  |
| `format_selections` | 用语言服务器排版选区 | `=` |  |  |
| `expand_selection` | 选区扩到外面那一层语法节点 | `A-o` | `A-o` |  |
| `shrink_selection` | 选区缩回去，或缩到第一个子节点 | `A-i` | `A-i` |  |
| `select_next_sibling` | 选下一个语法节点 | `A-n` | `A-n` |  |
| `select_prev_sibling` | 选上一个语法节点 | `A-p` | `A-p` |  |
| `select_all_siblings` | 选中同一层的每一个节点 | `A-a` | `A-a` |  |
| `select_all_children` | 选中里面的每一个节点 | `A-I` | `A-I` |  |
| `move_parent_node_end` | 到光标所在节点的末尾 | `A-e` | `A-e` |  |
| `move_parent_node_start` | 到光标所在节点的开头，再按到上一层的 | `A-b` | `A-b` |  |
| `extend_parent_node_end` | 选区延到所在节点的末尾 | `A-e` | `A-e` |  |
| `extend_parent_node_start` | 选区延到所在节点的开头 | `A-b` | `A-b` |  |
| `last_picker` | 上一个挑选器 | `Space '` | `Space '` |  |
| `paste_clipboard_after` | 从系统剪贴板粘贴 | `Space p` | `Space p` |  |
| `move_line_up` | 上一行(文件里的) | `gk` `g Up` | `C-p` `k` `Up` `gk` `g Up` |  |
| `move_line_down` | 下一行(文件里的) | `gj` `g Down` | `C-n` `j` `Down` `gj` `g Down` |  |
| `goto_next_line_nonwhitespace` | 下一行的第一个非空白字符 |  | `Enter` |  |
| `jump_next_word_start` | 光标跳到下一个词首(不选中) |  | `w` |  |
| `jump_next_long_word_start` | 光标跳到下一个大词首(不选中) |  | `W` |  |
| `jump_prev_word_start` | 光标跳到上一个词首(不选中) |  | `b` |  |
| `jump_prev_long_word_start` | 光标跳到上一个大词首(不选中) |  | `B` |  |
| `jump_next_word_end` | 光标跳到下一个词尾(不选中) |  | `e` |  |
| `jump_next_long_word_end` | 光标跳到下一个大词尾(不选中) |  | `E` |  |
| `jump_next_paragraph` | 光标跳到下一段(不选中) |  | `}` |  |
| `jump_prev_paragraph` | 光标跳到上一段(不选中) |  | `{` |  |
| `move_next_paragraph` | 选到下一段 | `}` |  |  |
| `move_prev_paragraph` | 选到上一段 | `{` |  |  |
| `goto_window_top` | 屏幕最上面那一行 | `gt` | `H` |  |
| `goto_window_center` | 屏幕中间那一行 | `gc` | `M` |  |
| `goto_window_bottom` | 屏幕最下面那一行 | `gb` | `L` `gb` |  |
| `jump_prev_sentence` | 光标跳到上一句(不选中) |  | `(` |  |
| `jump_next_sentence` | 光标跳到下一句(不选中) |  | `)` |  |
| `add_mark` | 设标记(再按一个字母) | `M` | `m` |  |
| `goto_mark` | 回到标记(再按一个字母) | `'` | `` ` `` `'` `` g` `` |  |
| `view_mode` | 视图组：把光标行放到屏幕顶、中、底 | `z` | `z` |  |
| `sticky_view_mode` | 视图组(按完不收) | `Z` | `Z` |  |
| `right_bracket_mode` | ] 组：往后找下一处 | `]` | `]` |  |
| `left_bracket_mode` | [ 组：往前找上一处 | `[` | `[` |  |
| `goto_mode` | g 组：前往 | `g` | `g` |  |
| `space_mode` | 空格菜单 | `Space` | `Space` `\` |  |
| `find_next_char` | 往后找一个字，选到它 | `f` | `f` |  |
| `find_prev_char` | 往前找一个字，选到它 | `F` | `F` |  |
| `find_till_char` | 往后找一个字，选到它前面 | `t` | `t` |  |
| `till_prev_char` | 往前找一个字，选到它后面 | `T` | `T` |  |
| `select_line_mode` | 整行选择模式 |  | `V` |  |
| `normal_mode` | 退出延伸模式，收起临时显示的东西 | `Esc` |  | `Esc` `C-c` |
| `repeat_find_char` | 再找一次刚才那个字 |  | `;` |  |
| `repeat_find_char_reverse` | 反方向再找一次刚才那个字 |  | `,` |  |
| `copy_selection_on_next_line` | 在下一行复制一个选区 | `C` |  |  |
| `copy_selection_on_prev_line` | 在上一行复制一个选区 | `A-C` | `A-C` |  |
| `keep_primary_selection` | 只留主选区 | `,` |  |  |
| `remove_primary_selection` | 去掉主选区 | `A-,` | `A-,` |  |
| `merge_selections` | 把所有选区合成一个 | `A--` | `A--` |  |
| `merge_consecutive_selections` | 把相连的选区合起来 | `A-_` | `A-_` |  |
| `ensure_selections_forward` | 让每个选区都朝前 | `A-:` | `A-:` |  |
| `shrink_to_line_bounds` | 把选区缩到整行 | `A-x` | `A-x` |  |
| `split_selection_on_newline` | 按行把选区拆开 | `A-s` | `A-s` |  |
| `rotate_selections_forward` | 主选区换成下一个 | `)` |  |  |
| `rotate_selections_backward` | 主选区换成上一个 | `(` |  |  |
| `trim_selections` | 去掉每个选区两头的空白 | `_` |  |  |
| `align_selections` | 把各个选区对齐 | `&` |  |  |
| `rotate_selection_contents_forward` | 各选区的内容往后轮换 | `A-)` | `A-)` |  |
| `rotate_selection_contents_backward` | 各选区的内容往前轮换 | `A-(` | `A-(` |  |
| `select_regex` | 在选区里按正则选出 | `s` |  |  |
| `split_selection` | 按正则把选区拆开 | `S` |  |  |
| `keep_selections` | 只留配得上正则的选区 | `K` |  |  |
| `remove_selections` | 去掉配得上正则的选区 | `A-K` | `A-K` |  |
| `operator_delete` | 删除(再按一个动作) |  | `d` |  |
| `operator_change` | 改写(再按一个动作) |  | `c` |  |
| `operator_yank` | 复制(再按一个动作) |  | `y` |  |
| `operator_indent` | 增加缩进(再按一个动作) |  | `>` |  |
| `operator_unindent` | 减少缩进(再按一个动作) |  | `<` |  |
| `delete_to_line_end` | 删到行尾 | `D` |  |  |
| `delete_to_line_end_noyank` | 删到行尾，不进寄存器 | `A-D` |  |  |
| `vim_delete_char_forward` | 删掉光标下的字，不删换行(vim 的 x) |  | `x` |  |
| `extend_line_above` | 往上选行 | `X` |  |  |
| `move_selected_lines_down` | 把选中的行往下移 | `A-j` | `A-j` |  |
| `move_selected_lines_up` | 把选中的行往上移 | `A-k` | `A-k` |  |
| `goto_line_or_last_line` | 到第 N 行，不带数字到末行 | `G` |  |  |
| `normal_mode_and_collapse` | 退出选择，或收成一个光标 |  |  |  |
| `quit` | 关掉这一个 | `Space q` | `Space q` |  |
| `select_inner_object` | 选中对象的里面(再按一个对象) |  | `i` |  |
| `select_around_object` | 选中整个对象(再按一个对象) |  | `a` |  |
| `undo_line` | 撤销这一行的所有改动 |  | `U` |  |
| `earlier` | 撤销(和 u 一样) | `A-u` | `A-u` |  |
| `later` | 重做(和 U 一样) | `A-U` | `A-U` |  |
| `goto_column` | 到这一行的第几列(用计数) |  | `\|` |  |
| `shell_pipe` | 用外部命令处理选区，换掉它 | `\|` |  |  |
| `shell_insert_output` | 把外部命令的输出插在选区前 | `!` |  |  |
| `shell_append_output` | 把外部命令的输出接在选区后 | `A-!` | `A-!` |  |
| `shell_pipe_to` | 把选区交给外部命令，不改文本 | `A-\|` | `A-\|` |  |
| `shell_keep_pipe` | 只留下终端命令通过的选区 | `$` |  |  |
| `command_mode` | 命令行 | `:` | `:` |  |
| `match_mode` | 配对组：括号、引号、对象 | `m` |  |  |
| `replace` | 把选中的每个字换成另一个字 | `r` | `r` |  |
| `select_register` | 选寄存器(再按一个字母) | `"` | `"` |  |
| `record_macro` | 开始或停止录宏 | `Q` |  |  |
| `replay_macro` | 回放宏 | `q` | `Q` |  |
| `window_mode` | 窗口组 | `C-w` `Space w` | `C-w` `Space w` |  |
| `page_down` | 前进一页 | `C-f` `PageDown` `Space Space` `z C-f` `z PageDown` `Z C-f` `Z PageDown` | `C-f` `PageDown` `Space Space` `z C-f` `z PageDown` `Z C-f` `Z PageDown` | `PageDown` |
| `page_up` | 后退一页 | `C-b` `PageUp` `Space Backspace` `z C-b` `z PageUp` `Z C-b` `Z PageUp` | `C-b` `PageUp` `Space Backspace` `z C-b` `z PageUp` `Z C-b` `Z PageUp` | `PageUp` |
| `join_selections_space` | 合并行并选中接缝 | `A-J` | `A-J` |  |
| `save_selection` | 把这里记进跳转表 | `C-s` | `C-s` |  |
| `jump_forward` | 跳转表：再往前一处 | `C-i` `Tab` | `C-i` `Tab` |  |
| `two_thirds_page_down` | 前进三分之二页 | `C-n` |  |  |
| `two_thirds_page_up` | 后退三分之二页 | `C-p` |  |  |
| `flip_selections` | 光标换到选区另一头 | `A-;` | `A-;` |  |
| `vim_redo` | 重做(vim 的 C-r) |  | `C-r` |  |
| `delete_char_backward` | 删除光标前的一个字 |  | `X` | `Backspace` `C-h` |
| `case_mode` | 字形组：大小写、繁简 | `` ` `` | `` g` `` |  |
| `search_selection_detect_word_boundaries` | 找选中的那段(整词) | `*` |  |  |
| `search_selection_exact` | 找选中的那段(原样) | `A-*` | `A-*` |  |
| `search_word_backward` | 往回找光标下的词 |  | `#` |  |
| `replace_mode` | 覆写模式：打字盖掉原文 |  | `R` |  |
| `goto_line` | 到第几行(用计数) |  |  |  |
| `vim_repeat_last_change` | 用新的计数再做一次刚才的改动 |  | `.` |  |
| `repeat_last_motion` | 再做一次刚才的 f 或 t | `A-.` | `A-.` |  |
| `jump_prev_word_end` | 光标跳到上一个词尾(不选中) |  | `ge` |  |
| `jump_prev_long_word_end` | 光标跳到上一个大词尾(不选中) |  | `gE` |  |
| `goto_word` | 跳到当前屏幕某位置 | `gw` | `gW` `gw` |  |
| `goto_word_by_letters` | 两字母定位单词 | `gz` | `gz` |  |
| `goto_char_by_pinyin` | 多字母定位汉字 | `gZ` | `gZ` |  |
| `goto_last_accessed_file` | 回到最近打开的缓冲区 | `ga` | `` |  |
| `goto_reference` | 用到它的每一处 | `gr` |  |  |
| `move_next_zong` | 竖排时到下一纵(文件里的) |  | `gj` |  |
| `move_prev_zong` | 竖排时到上一纵(文件里的) |  | `gk` |  |
| `goto_last_modification` | 回到最后改动的地方 | `g.` | `g.` |  |
| `reselect_last_selection` | 重选上一次那一段 |  | `gv` |  |
| `insert_at_last_insert` | 回到上次插入处继续插入 |  | `gi` |  |
| `goto_older_change` | 往旧走一处改动 |  | `g;` |  |
| `goto_newer_change` | 往新走一处改动 |  | `g,` |  |
| `operator_lowercase` | 转小写(再按一个动作) |  | `gu` |  |
| `operator_uppercase` | 转大写(再按一个动作) |  | `gU` |  |
| `operator_switch_case` | 大小写互换(再按一个动作) |  | `g~` |  |
| `operator_fill` | 按宽度重排，等待动作 |  | `gq` |  |
| `operator_fill_keep_cursor` | 重新排版，光标不动（vim 的 gw） |  | `gw` |  |
| `join_selections_no_space` | 合并下一行，不补空格 |  | `gJ` |  |
| `file_picker_in_current_directory` | 文件挑选器(工作路径) | `Space F` | `Space F` |  |
| `file_explorer` | 浏览文件(项目路径) | `Space e` | `Space e` |  |
| `file_explorer_in_current_buffer_directory` | 浏览文件(本文件路径) | `Space E` | `Space E` |  |
| `changed_file_picker` | 存在改动文件 | `Space g` | `Space g` |  |
| `paste_clipboard_before` | 从系统剪贴板粘贴在前 | `Space P` | `Space P` |  |
| `replace_selections_with_clipboard` | 用系统剪贴板替换选区 | `Space R` | `Space R` |  |
| `lsp_or_syntax_symbol_picker` | 符号挑选器 | `Space s` | `Space s` |  |
| `lsp_or_syntax_workspace_symbol_picker` | 项目符号挑选器 | `Space S` | `Space S` |  |
| `dictionary_panel` | 显示汉字信息(边栏) | `Space N` | `Space N` |  |
| `hover` | 显示定义文档(浮窗) | `Space k` | `K` `Space k` |  |
| `hover_panel` | 显示定义文档(边栏) | `Space K` | `Space K` |  |
| `diagnostics_picker` | 诊断挑选器 | `Space d` | `Space d` |  |
| `workspace_diagnostics_picker` | 项目诊断挑选器 | `Space D` | `Space D` |  |
| `show_diagnostic` | 显示诊断信息(浮窗) | `Space l` | `Space l` |  |
| `show_diagnostic_panel` | 显示诊断信息(边栏) | `Space L` | `Space L` |  |
| `show_change` | 显示改动(浮窗) | `Space x` | `Space x` |  |
| `show_change_panel` | 显示改动(边栏) | `Space X` | `Space X` |  |
| `rename_symbol` | 改名（各处一起改） | `Space r` | `Space r` |  |
| `code_action` | 代码动作 | `Space a` | `Space a` |  |
| `show_record` | 显示表格行记录(浮窗) | `Space i` | `Space i` |  |
| `show_record_panel` | 显示表格行记录(边栏) | `Space I` | `Space I` |  |
| `table_mode` | 表格操作 | `Space t` | `Space t` |  |
| `conflict_mode` | 合并冲突 | `Space m` | `Space m` |  |
| `open_recent_mode` | 开上次的 | `Space o` | `Space o` |  |
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
| `goto_next_comment` | 下一处注释 | `]c` | `]c` |  |
| `goto_prev_comment` | 上一处注释 | `[c` | `[c` |  |
| `goto_next_parameter` | 选中下一个参数 | `]a` |  |  |
| `goto_prev_parameter` | 选中上一个参数 | `[a` |  |  |
| `goto_next_entry` | 选中下一个条目 | `]e` | `]e` |  |
| `goto_prev_entry` | 选中上一个条目 | `[e` | `[e` |  |
| `goto_next_test` | 选中下一个测试 | `]T` |  |  |
| `goto_prev_test` | 选中上一个测试 | `[T` |  |  |
| `goto_next_xml_element` | 选中下一个 XML 元素 | `]x` | `]x` |  |
| `goto_prev_xml_element` | 选中上一个 XML 元素 | `[x` | `[x` |  |
| `add_newline_below` | 下面加一条空行 | `]␣` | `]␣` |  |
| `add_newline_above` | 上面加一条空行 | `[␣` | `[␣` |  |
| `align_view_center` | 光标行挪到屏幕中间 | `zz` `zc` `Zz` `Zc` | `zz` `Zz` |  |
| `align_view_top` | 光标行挪到屏幕顶上 | `zt` `Zt` | `zt` `Zt` |  |
| `align_view_bottom` | 光标行挪到屏幕底下 | `zb` `Zb` | `zb` `Zb` |  |
| `scroll_down` | 屏幕往下滚一行(光标的字不动) | `zj` `z Down` `Zj` `Z Down` | `C-e` `z Down` `Z Down` |  |
| `scroll_up` | 屏幕往上滚一行(光标的字不动) | `zk` `z Up` `Zk` `Z Up` | `C-y` `z Up` `Z Up` |  |
| `match_brackets` | 前往配对符号的另一个 | `mm` |  |  |
| `select_textobject_inner` | 选择配对符号内部字符 | `mi` |  |  |
| `select_textobject_around` | 选择配对符号和内部字符 | `ma` |  |  |
| `surround_add` | 使用配对符号包住选区 | `ms` |  |  |
| `surround_delete` | 移除配对符号 | `md` |  |  |
| `surround_replace` | 替换配对符号 | `mr` |  |  |
| `jump_view_left` | 去左边那一区 | `C-w h` `C-w Left` | `C-w h` `C-w Left` |  |
| `jump_view_down` | 去下面那一区 | `C-w j` `C-w Down` | `C-w j` `C-w Down` |  |
| `jump_view_up` | 去上面那一区 | `C-w k` `C-w Up` | `C-w k` `C-w Up` |  |
| `jump_view_right` | 去右边那一区 | `C-w l` `C-w Right` | `C-w l` `C-w Right` |  |
| `toggle_left_sidebar` | 开关左栏 | `C-w e` | `C-w e` |  |
| `toggle_right_sidebar` | 开关右栏 | `C-w i` | `C-w i` |  |
| `goto_left_sidebar` | 进左栏 | `C-w E` | `C-w E` |  |
| `goto_right_sidebar` | 进右栏 | `C-w I` | `C-w I` |  |
| `hsplit` | 下面开一个窗口 | `C-w s` | `C-w s` |  |
| `vsplit` | 旁边开一个窗口 | `C-w v` | `C-w v` |  |
| `hsplit_new` | 下面开一个空白窗口 | `C-w n s` | `C-w n` `C-w n s` |  |
| `vsplit_new` | 旁边开一个空白窗口 | `C-w n v` | `C-w n v` |  |
| `window_new_mode` | 空白窗口组：s 下面，v 旁边 | `C-w n` | `C-w n` |  |
| `wclose` | 关掉这一区 | `C-w q` | `C-w q` |  |
| `wonly` | 只留这一区 | `C-w o` | `C-w o` |  |
| `transpose_view` | 并排与上下互换 | `C-w t` |  |  |
| `swap_view_left` | 和左边那一区对调 | `C-w H` |  |  |
| `swap_view_down` | 和下面那一区对调 | `C-w J` |  |  |
| `swap_view_up` | 和上面那一区对调 | `C-w K` |  |  |
| `swap_view_right` | 和右边那一区对调 | `C-w L` |  |  |
| `goto_file_hsplit` | 在下面打开光标下的文件 | `C-w f` | `C-w f` |  |
| `goto_file_vsplit` | 在旁边打开光标下的文件 | `C-w F` |  |  |
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
| `conflict_keep_ours` | 只留我方 | `Space m o` | `Space m o` |  |
| `conflict_keep_theirs` | 只留他方 | `Space m t` | `Space m t` |  |
| `conflict_keep_both` | 两方都留 | `Space m b` | `Space m b` |  |
| `recent_file_picker` | 最近开过的档 | `Space o f` | `Space o f` |  |
| `global_recent_file_picker` | 最近开过的档(全部项目) | `Space o g` | `Space o g` |  |
| `project_picker` | 最近开过的项目 | `Space o p` | `Space o p` |  |
| `resume_session` | 接着上次 | `Space o r` | `Space o r` |  |
| `yume_toggle` | 输入法开/关 | `Space z z` | `Space z z` |  |
| `yume_commit_mode` | 上屏方式 | `Space z m` | `Space z m` |  |
| `yume_panel_mode` | 候选栏画在哪 | `Space z p` | `Space z p` |  |
| `yume_preedit_mode` | 正在打的那一段写在哪 | `Space z e` | `Space z e` |  |
| `yume_toggle_prediction` | 输入预测 开/关 | `Space z y` | `Space z y` |  |
| `yume_pick_scheme` | 选方案 | `Space z i` | `Space z i` |  |
| `yume_next_scheme` | 下一个方案 | `Space z n` | `Space z n` |  |
| `yume_menu_size_3` | 候选栏一页 3 条 | `Space z 3` | `Space z 3` |  |
| `yume_menu_size_4` | 候选栏一页 4 条 | `Space z 4` | `Space z 4` |  |
| `yume_menu_size_5` | 候选栏一页 5 条 | `Space z 5` | `Space z 5` |  |
| `yume_menu_size_6` | 候选栏一页 6 条 | `Space z 6` | `Space z 6` |  |
| `yume_menu_size_7` | 候选栏一页 7 条 | `Space z 7` | `Space z 7` |  |
| `yume_menu_size_8` | 候选栏一页 8 条 | `Space z 8` | `Space z 8` |  |
| `yume_menu_size_9` | 候选栏一页 9 条 | `Space z 9` | `Space z 9` |  |
| `yume_next_annotation` | 候选旁的注解，换下一个 | `Space z /` | `Space z /` |  |
| `yume_installed_table` | 改用安装版码表 | `Space z t` | `Space z t` |  |
| `yume_table_source` | 查看码表源 | `Space z w` | `Space z w` |  |
| `yume_data_location` | 查看数据位置 | `Space z W` | `Space z W` |  |
| `yume_commit_default` | 预设——方案自己说了算 | `Space z m 0` | `Space z m 0` |  |
| `yume_commit_delayed` | 顶字 | `Space z m d` | `Space z m d` |  |
| `yume_commit_unique` | 唯一 | `Space z m u` | `Space z m u` |  |
| `yume_commit_fluency` | 整句 | `Space z m f` | `Space z m f` |  |
| `yume_panel_box` | box——光标旁的框 | `Space z p b` | `Space z p b` |  |
| `yume_panel_bottom` | bottom——窗口最下面那一行 | `Space z p m` | `Space z p m` |  |
| `yume_panel_inline` | inline——光标的下一行 | `Space z p i` | `Space z p i` |  |
| `yume_preedit_off` | off——写在候选栏里 | `Space z e o` | `Space z e o` |  |
| `yume_preedit_composition` | composition——正文里写编码 | `Space z e c` | `Space z e c` |  |
| `yume_preedit_preview` | preview——正文里写首选 | `Space z e p` | `Space z e p` |  |
| `table_source_view` | 源码视图(显示源码) | `Space t o` | `Space t o` |  |
| `table_basic_view` | 基本视图(表格按列对齐) | `Space t b` | `Space t b` |  |
| `table_window_view` | 全窗视图(表格独占窗口) | `Space t t` | `Space t t` |  |
| `table_leave_window` | 退出全窗视图 | `Space t q` | `Space t q` |  |
| `goto_next_table` | 下一张表 | `Space t ]` | `Space t ]` |  |
| `goto_prev_table` | 上一张表 | `Space t [` | `Space t [` |  |
| `table_convert_mode` | 转换表格格式(分隔符) | `Space t x` | `Space t x` |  |
| `table_cell_width` | 长单元格:换行/折叠/全文 | `Space t w` | `Space t w` |  |
| `table_search_columns` | 按列搜索(可指定列范围) | `Space t /` | `Space t /` |  |
| `table_goto_cell` | 去某一格(␣t 20,20g) | `Space t g` | `Space t g` |  |
| `table_enter_cell` | 进格子里(按字走) |  |  |  |
| `table_leave_cell` | 出格子(回到按格走) |  |  |  |
| `table_next_cell` | 下一格，行尾接下一行 |  |  |  |
| `table_prev_cell` | 上一格 |  |  |  |
| `table_yank_column` | 复制这一栏 | `Space t y` | `Space t y` |  |
| `table_replace_column` | 用复制的栏盖掉该栏 | `Space t v` | `Space t v` |  |
| `table_paste_column_right` | 把复制的栏贴到右边 | `Space t p` | `Space t p` |  |
| `table_paste_column_left` | 把复制的栏贴到左边 | `Space t P` | `Space t P` |  |
| `table_add_row_below` | 下面插入新行 | `Space t r` | `Space t r` |  |
| `table_add_row_above` | 上面插入新行 | `Space t R` | `Space t R` |  |
| `table_add_column_right` | 右边加一栏 | `Space t c` | `Space t c` |  |
| `table_add_column_left` | 左边加一栏 | `Space t C` | `Space t C` |  |
| `table_delete_row` | 删除这一行 | `Space t d` | `Space t d` |  |
| `table_delete_column` | 删除这一栏 | `Space t D` | `Space t D` |  |
| `table_move_row_down` | 这行下移 | `Space t j` | `Space t j` |  |
| `table_move_row_up` | 这行上移 | `Space t k` | `Space t k` |  |
| `table_move_column_left` | 这栏左移 | `Space t h` | `Space t h` |  |
| `table_move_column_right` | 这栏右移 | `Space t l` | `Space t l` |  |
| `table_align_left` | 这栏靠左 | `Space t <` | `Space t <` |  |
| `table_align_center` | 这栏居中 | `Space t =` | `Space t =` |  |
| `table_align_right` | 这栏靠右 | `Space t >` | `Space t >` |  |
| `table_line_up` | 重排对齐 | `Space t F` | `Space t F` |  |
| `table_record_panel` | 该行记录 | `Space t i` | `Space t i` |  |
| `table_first_row_is_data` | 表格第一行是否为标题 | `Space t H` | `Space t H` |  |
| `table_sort_ascending` | 按列升序排列(␣t1s) | `Space t s` | `Space t s` |  |
| `table_sort_descending` | 按列降序排列(␣t1S) | `Space t S` | `Space t S` |  |
| `convert_table_to_pipe` | 表格转成 pipe | `Space t x p` | `Space t x p` |  |
| `paste_table_as_pipe` | 剪贴板贴成 pipe 表格 | `Space t x P` | `Space t x P` |  |
| `convert_table_to_csv` | 表格转成 csv | `Space t x c` | `Space t x c` |  |
| `paste_table_as_csv` | 剪贴板贴成 csv 表格 | `Space t x C` | `Space t x C` |  |
| `convert_table_to_tsv` | 表格转成 tsv | `Space t x t` | `Space t x t` |  |
| `paste_table_as_tsv` | 剪贴板贴成 tsv 表格 | `Space t x T` | `Space t x T` |  |
| `no_op` | 什么都不做(绑上它就是解绑那个键) |  | `&` `=` `!` `C-c` |  |
| `extend_char_left` | 选区向左撑一个字 | `h` `Left` | `h` `Left` |  |
| `extend_char_right` | 选区向右撑一个字 | `l` `Right` | `l` `Right` |  |
| `extend_visual_line_up` | 选区撑到上一行(屏幕上的) | `k` `Up` |  |  |
| `extend_visual_line_down` | 选区撑到下一行(屏幕上的) | `j` `Down` |  |  |
| `extend_line_up` | 选区撑到上一行(文件里的) | `gk` | `gk` |  |
| `extend_line_down` | 选区撑到下一行(文件里的) | `gj` | `gj` |  |
| `extend_next_word_start` | 选区撑到下一个词首 | `w` |  |  |
| `extend_prev_word_start` | 选区撑到上一个词首 | `b` |  |  |
| `extend_next_word_end` | 选区撑到下一个词尾 | `e` |  |  |
| `extend_next_long_word_start` | 选区撑到下一个大词首 | `W` |  |  |
| `extend_prev_long_word_start` | 选区撑到上一个大词首 | `B` |  |  |
| `extend_next_long_word_end` | 选区撑到下一个大词尾 | `E` |  |  |
| `extend_search_next` | 下一处也选上(多一个选区) | `n` |  |  |
| `extend_search_prev` | 上一处也选上(多一个选区) | `N` |  |  |
| `extend_till_char` | 选区往后撑到某个字前面 | `t` | `t` |  |
| `extend_next_char` | 选区往后撑到某个字 | `f` | `f` |  |
| `extend_till_prev_char` | 选区往前撑到某个字后面 | `T` | `T` |  |
| `extend_prev_char` | 选区往前撑到某个字 | `F` | `F` |  |
| `extend_to_line_start` | 选区撑到行首 | `Home` | `Home` |  |
| `extend_to_line_end` | 选区撑到行尾 | `End` |  |  |
| `extend_to_file_start` | 选区撑到文件开头 | `gg` | `gg` |  |
| `extend_to_file_end` | 选区撑到文件末尾 |  |  |  |
| `extend_to_last_line` | 选到最后一行 | `ge` | `ge` |  |
| `extend_to_word` | 选区撑到屏幕上某个位置(标签) | `gw` | `gw` |  |
| `insert_newline` | 换行(带上缩进、列表记号) |  |  | `Enter` `C-j` |
| `delete_char_forward` | 删除光标后的一个字 |  |  | `Delete` `C-d` |
| `delete_word_forward` | 删除光标后的一个词 |  |  | `A-d` |
| `delete_word_backward` | 删除光标前的一个词 |  |  | `C-w` |
| `kill_to_line_start` | 删到行首 |  |  | `C-u` |
| `kill_to_line_end` | 删到行尾(插入模式) |  |  | `C-k` |
| `insert_register` | 插入寄存器的内容(再按一个字母) |  |  | `C-r` |
| `run_one_normal_command` | 临时回普通模式做一件事(vim 的 C-o) |  |  | `C-o` |
| `goto_line_end_newline` | 到行尾(最后一个字后面) |  |  | `End` `C-e` |
| `commit_undo_checkpoint` | 在这里断开撤销 |  |  | `C-g` |
| `insert_tab` | 插入缩进(文件用的那一种) |  |  | `Tab` `S-Tab` |
| `insert_other_tab` | 插入另一种缩进(Tab 或空格) |  |  | `S-Tab` |
| `vim_normal_mode` | 回普通模式(vim：退出可视模式时选区收成一点) |  | `Esc` |  |
| `vim_goto_line_end` | 行尾(vim 的 $：往下走也留在行尾) |  | `$` `End` |  |
| `vim_insert_mode` | 在光标前插入(vim 的 i) |  | `i` |  |
| `vim_append_mode` | 在光标后插入(vim 的 a) |  | `a` |  |
| `vim_insert_at_line_start` | 在第一个非空白字符前插入(vim 的 I) |  | `I` |  |
| `vim_insert_at_line_end` | 在行尾插入(vim 的 A) |  | `A` |  |
| `vim_open_below` | 在下方开新行(vim 的 o，计数重复) |  | `o` |  |
| `vim_open_above` | 在上方开新行(vim 的 O，计数重复) |  | `O` |  |
| `vim_join_selections` | 与下一行合并(vim 的 J) |  | `J` |  |
| `vim_switch_case` | 大小写互换并往后走(vim 的 ~) |  | `~` |  |
| `vim_goto_line` | 到第几行，不带计数到最后一行(vim 的 G) |  | `G` |  |
| `vim_indent` | 增加缩进，光标留在原列(vim) |  | `>` |  |
| `vim_unindent` | 减少缩进，光标留在原列(vim) |  | `<` |  |
| `vim_paste_after` | 向后粘贴(vim 的 p) |  | `p` `]p` |  |
| `vim_paste_before` | 向前粘贴(vim 的 P) |  | `P` `[p` |  |
| `vim_increment` | 光标处或其后的数字加一(vim 的 C-a) |  | `C-a` |  |
| `vim_decrement` | 光标处或其后的数字减一(vim 的 C-x) |  | `C-x` |  |
| `vim_search_next` | 下一处(vim 的 n) |  | `n` |  |
| `vim_search_prev` | 上一处(vim 的 N) |  | `N` |  |
| `vim_match_brackets` | 配对的括号，不在括号上就找本行的下一个(vim 的 %) |  | `%` |  |
| `vim_kill_to_line_start` | 删到这次插入开始的地方(vim 的 C-u) |  |  | `C-u` |
| `vim_kill_to_line_end` | 删到行尾，不删换行(vim) |  |  | `C-k` |
| `vim_flip_selections` | 换到选区的另一头(vim 可视模式的 o) |  | `o` |  |
| `vim_switch_to_lowercase` | 选区转小写并退出可视模式(vim 的 u) |  | `u` |  |
| `vim_switch_to_uppercase` | 选区转大写并退出可视模式(vim 的 U) |  | `U` |  |
| `vim_yank` | 复制选区并退出可视模式(vim 的 y) |  | `y` |  |
| `vim_visual_block_mode` | 块选择(vim 的 C-v) |  | `C-v` |  |
| `vim_record_macro` | 录宏(再按一个字母) |  | `q` |  |
| `vim_replay_macro` | 回放宏(再按一个字母) |  | `@` |  |
| `vim_goto_first_nonwhitespace` | 行首第一个非空字(带数字时往下数行) |  | `_` |  |

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
| `normal_mode` | 关掉这一行(命令行、搜索、挑选器) | `Esc` |
| `confirm` | 执行这一行；挑选器里打开选中的那一项 | `Enter` |
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
| `toggle_wide_search` | 繁简拼音通配开关 | `A-j` |

### `[keys.picker]`

| Command | What it does | Keys |
| --- | --- | --- |
| `next_entry` | 下一项 | `Tab` `C-n` `Down` |
| `prev_entry` | 上一项 | `S-Tab` `C-p` `Up` |
| `page_down` | 前进一页 | `PageDown` |
| `page_up` | 后退一页 | `PageUp` |
| `first_entry` | 第一项 |  |
| `last_entry` | 最后一项 |  |
| `cycle_hidden_files` | 换一种：跳过哪些文件(隐藏的、忽略的) | `A-h` |

### `[keys.sidebar]`

| Command | What it does | Keys |
| --- | --- | --- |
| `move_line_down` | 下一行 | `j` `Down` |
| `move_line_up` | 上一行 | `k` `Up` |
| `page_down` | 前进一页 | `J` `PageDown` |
| `page_up` | 后退一页 | `K` `PageUp` |
| `goto_file_start` | 第一行 | `g` `Home` |
| `goto_last_line` | 最后一行 | `G` `End` |
| `collapse_entry` | 收起 | `h` `Left` |
| `expand_entry` | 展开；展开不了就进入 | `l` `Right` |
| `open_entry` | 进入：打开文件、跳到那一行 | `Enter` |
| `toggle_links_graph` | 链接面板：列表/图 | `v` |
| `restore_change` | 还原此处改动 | `u` |
| `yank_old_text` | 复制先前版本 | `y` |
| `refresh_sidebar` | 重读 | `R` |
| `cycle_sidebar_width` | 宽窄 | `w` |
| `next_sidebar_view` | 换视图 | `Tab` |
| `prev_sidebar_view` | 换视图(往回) | `S-Tab` |
| `normal_mode` | 让输入法再挂起一次 | `Esc` |
| `leave_sidebar` | 回编辑区，面板留着 | `q` |
| `command_mode` | 命令行 | `:` |
| `space_mode` | 空格菜单 | `Space` |
| `window_mode` | 窗口组 | `C-w` |

### `[keys.field]`

| Command | What it does | Keys |
| --- | --- | --- |
| `next_field` | 下一格；有灰字时先收下灰字 | `Tab` |
| `prev_field` | 上一格 | `S-Tab` |
| `move_line_down` | 下面那一格 | `Down` |
| `move_line_up` | 上面那一格 | `Up` |
