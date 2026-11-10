<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | What it does | helix | vim | Insert |
| --- | --- | --- | --- | --- |
| `move_char_left` | 左一個字 | `h` `Left` | `h` `Left` `Backspace` | `Left` |
| `move_char_right` | 右一個字 | `l` `Right` | `l` `Right` | `Right` |
| `move_visual_line_up` | 上一行(屏幕上的) | `k` `Up` | `gk` `g Up` | `Up` |
| `move_visual_line_down` | 下一行(屏幕上的) | `j` `Down` | `gj` `g Down` | `Down` |
| `move_next_word_start` | 下一個詞首 | `w` |  |  |
| `move_prev_word_start` | 上一個詞首 | `b` |  |  |
| `move_next_word_end` | 下一個詞尾 | `e` |  |  |
| `move_next_long_word_start` | 下一個大詞首(按空格分) | `W` |  |  |
| `move_prev_long_word_start` | 上一個大詞首 | `B` |  |  |
| `move_next_long_word_end` | 下一個大詞尾 | `E` |  |  |
| `goto_line_start` | 行首 | `0` `Home` `gh` `g Up` | `Home` `0` | `Home` `C-a` |
| `goto_line_end` | 行尾 | `End` `gl` `g Down` |  |  |
| `goto_first_nonwhitespace` | 第一個非空白字符 | `^` `gs` | `^` |  |
| `goto_file_start` | 文件開頭 | `gg` | `gg` |  |
| `goto_file_end` | 文件末尾 |  |  |  |
| `goto_last_line` | 最後一行 | `ge` |  |  |
| `goto_prev_sentence` | 上一句 | `H` |  |  |
| `goto_next_sentence` | 下一句 | `L` |  |  |
| `goto_prev_paragraph` | 上一段 | `[p` |  |  |
| `goto_next_paragraph` | 下一段 | `]p` |  |  |
| `page_cursor_half_down` | 向下翻半頁 | `C-d` `z C-d` `z␣` `Z C-d` `Z␣` | `C-d` `Z C-d` `Z␣` |  |
| `page_cursor_half_up` | 向上翻半頁 | `C-u` `z C-u` `z Backspace` `Z C-u` `Z Backspace` | `C-u` `Z C-u` `Z Backspace` |  |
| `jump_backward` | 跳轉表：後退 | `C-o` | `C-o` |  |
| `select_mode` | 選擇模式：移動時擴大選區 | `v` | `v` |  |
| `extend_line_below` | 選中當前行 | `x` |  |  |
| `extend_to_line_bounds` | 選區擴到整行 |  |  |  |
| `select_all` | 全選 | `%` |  |  |
| `collapse_selection` | 選區收成光標 | `;` |  |  |
| `delete_selection` | 剪切選區 | `d` | `x` |  |
| `delete_selection_noyank` | 删除選區(不進寄存器) | `A-d` | `A-d` |  |
| `change_selection` | 剪切後改寫 | `c` | `s` |  |
| `change_selection_noyank` | 改寫選區(不進寄存器) | `A-c` | `A-c` |  |
| `insert_mode` | 在選區前插入 | `i` |  |  |
| `append_mode` | 在選區後插入 | `a` |  |  |
| `insert_at_line_start` | 在行首插入 | `I` |  |  |
| `insert_at_line_end` | 在行尾插入 | `A` |  |  |
| `open_below` | 在下方開新行 | `o` |  |  |
| `open_above` | 在上方開新行 | `O` |  |  |
| `yank` | 複製 | `y` |  |  |
| `paste_after` | 向後粘貼 | `p` |  |  |
| `paste_before` | 向前粘貼 | `P` |  |  |
| `replace_with_yanked` | 用寄存器内容替換選區 | `R` |  |  |
| `join_selections` | 與下一行合併 | `J` |  |  |
| `indent` | 增加縮進 | `>` |  |  |
| `unindent` | 減少縮進 | `<` |  | `C-d` |
| `increment` | 光標處的數字加一 | `C-a` |  |  |
| `decrement` | 光標處的數字減一 | `C-x` |  |  |
| `switch_case` | 大小寫互換 | `~` ``` `` ``` | ``` g`` ``` |  |
| `undo` | 撤銷 | `u` |  |  |
| `redo` | 重做 | `U` |  |  |
| `repeat_last_change` | 重複上次輸入(vim 鍵位：上次改動) | `.` |  |  |
| `search` | 搜索 | `/` `z/` `Z/` | `/` `Z/` |  |
| `rsearch` | 反向搜索 | `?` `z?` `Z?` | `?` `Z?` |  |
| `search_next` | 下一處 | `n` `zn` `Zn` | `gn` `Zn` |  |
| `search_prev` | 上一處 | `N` `zN` `ZN` | `gN` `ZN` |  |
| `search_selection` | 搜索選中内容 | `g/` | `*` `g/` |  |
| `goto_definition` | 轉到定義 | `gd` | `gd` |  |
| `goto_file` | 打開本行所寫的文件 | `gf` | `gf` |  |
| `follow_link` | 跳到光標下的鏈接目標 | `gL` | `gL` |  |
| `open_link` | 用瀏覽器打開光標下的網址 | `gx` | `gx` |  |
| `goto_declaration` | 轉到聲明 | `gD` | `gD` |  |
| `goto_type_definition` | 轉到類型定義 | `gy` | `gy` |  |
| `goto_implementation` | 轉到實現 | `gi` |  |  |
| `goto_last_modified_file` | 最近修改的文件 | `gm` |  |  |
| `insert_char_above` | 插入上一行同列的字 |  |  | `C-y` |
| `insert_char_below` | 插入下一行同列的字 |  |  | `C-e` |
| `file_picker` | 打開文件選擇器 | `Space f` | `Space f` |  |
| `buffer_picker` | 打開緩衝區選擇器 | `Space b` | `Space b` |  |
| `goto_next_buffer` | 下一個緩衝區 | `gn` |  |  |
| `goto_previous_buffer` | 上一個緩衝區 | `gp` |  |  |
| `dictionary` | 字典：光標處漢字的拆分 | `Space n` | `Space n` |  |
| `rotate_view` | 下一個區域 | `C-w w` | `C-w w` |  |
| `global_search` | 高級搜索面板 | `Space /` | `Space /` |  |
| `command_palette` | 所有命令 | `Space ?` | `Space ?` |  |
| `paste_menu` | 粘貼菜單：選寄存器 | `Space "` | `Space "` |  |
| `toggle_comments` | 行註釋 | `C-c` `Space c` | `Space c` |  |
| `toggle_block_comments` | 塊註釋 | `Space C` | `Space C` |  |
| `toggle_line_comments` | 只用行註釋 | `Space A-c` | `Space A-c` |  |
| `yank_to_clipboard` | 複製到系統剪貼板 | `Space y` | `Space y` |  |
| `yank_main_selection_to_clipboard` | 複製主選區到系統剪貼板 | `Space Y` | `Space Y` |  |
| `jumplist_picker` | 跳轉列表 | `Space j` | `Space j` |  |
| `goto_first_change` | 第一處改動 | `[G` | `[G` |  |
| `goto_last_change` | 最後一處改動 | `]G` | `]G` |  |
| `suspend` | 掛起到終端；fg 返回 | `C-z` | `C-z` |  |
| `select_references_to_symbol_under_cursor` | 選中本文件中的所有引用 | `Space h` | `Space h` |  |
| `format_selections` | 用語言服務器格式化選區 | `=` |  |  |
| `expand_selection` | 選區擴到外層語法節點 | `A-o` | `A-o` |  |
| `shrink_selection` | 縮小選區，或縮到第一個子節點 | `A-i` | `A-i` |  |
| `select_next_sibling` | 選中下一個同級節點 | `A-n` | `A-n` |  |
| `select_prev_sibling` | 選中上一個同級節點 | `A-p` | `A-p` |  |
| `select_all_siblings` | 選中所有同級節點 | `A-a` | `A-a` |  |
| `select_all_children` | 選中所有子節點 | `A-I` | `A-I` |  |
| `move_parent_node_end` | 到所在節點的末尾 | `A-e` | `A-e` |  |
| `move_parent_node_start` | 到所在節點開頭，再按到上一層 | `A-b` | `A-b` |  |
| `extend_parent_node_end` | 選區擴到所在節點末尾 | `A-e` | `A-e` |  |
| `extend_parent_node_start` | 選區擴到所在節點開頭 | `A-b` | `A-b` |  |
| `last_picker` | 重開上一個選擇器 | `Space '` | `Space '` |  |
| `paste_clipboard_after` | 從系統剪貼板粘貼 | `Space p` | `Space p` |  |
| `move_line_up` | 上一行(文件裏的) | `gk` `g Up` | `C-p` `k` `Up` |  |
| `move_line_down` | 下一行(文件裏的) | `gj` `g Down` | `C-n` `j` `Down` |  |
| `goto_next_line_nonwhitespace` | 下一行的第一個非空白字符 |  | `Enter` |  |
| `jump_next_word_start` | 跳到下一個詞首(不選中) |  | `w` |  |
| `jump_next_long_word_start` | 跳到下一個大詞首(不選中) |  | `W` |  |
| `jump_prev_word_start` | 跳到上一個詞首(不選中) |  | `b` |  |
| `jump_prev_long_word_start` | 跳到上一個大詞首(不選中) |  | `B` |  |
| `jump_next_word_end` | 跳到下一個詞尾(不選中) |  | `e` |  |
| `jump_next_long_word_end` | 跳到下一個大詞尾(不選中) |  | `E` |  |
| `jump_next_paragraph` | 跳到下一段(不選中) |  | `}` |  |
| `jump_prev_paragraph` | 跳到上一段(不選中) |  | `{` |  |
| `move_next_paragraph` | 選到下一段 | `}` |  |  |
| `move_prev_paragraph` | 選到上一段 | `{` |  |  |
| `goto_window_top` | 屏幕最上面那一行 | `gt` | `H` |  |
| `goto_window_center` | 屏幕中間那一行 | `gc` | `M` |  |
| `goto_window_bottom` | 屏幕最下面那一行 | `gb` | `L` `gb` |  |
| `jump_prev_sentence` | 跳到上一句(不選中) |  | `(` |  |
| `jump_next_sentence` | 跳到下一句(不選中) |  | `)` |  |
| `add_mark` | 設標記(再按一個字母) | `M` | `m` |  |
| `goto_mark` | 回到標記(再按一個字母) | `'` | `'` |  |
| `goto_mark_exact` | 回到標記所在的那個字(再按一個字母) |  | `` ` `` |  |
| `view_mode` | 視圖組：定位光標行、滚屏、摺疊 | `z` | `z` |  |
| `sticky_view_mode` | 視圖組(常駐) | `Z` | `Z` |  |
| `right_bracket_mode` | ] 組：跳到下一個 | `]` | `]` |  |
| `left_bracket_mode` | [ 組：跳到上一個 | `[` | `[` |  |
| `goto_mode` | g 組：跳轉 | `g` | `g` |  |
| `space_mode` | 空格菜單 | `Space` | `Space` `\` |  |
| `find_next_char` | 往後找一個字，選到它 | `f` | `f` |  |
| `find_prev_char` | 往前找一個字，選到它 | `F` | `F` |  |
| `find_till_char` | 往後找一個字，選到它前面 | `t` | `t` |  |
| `till_prev_char` | 往前找一個字，選到它後面 | `T` | `T` |  |
| `select_line_mode` | 整行選擇模式 |  | `V` |  |
| `normal_mode` | 退出選擇模式，收起臨時顯示的内容 | `Esc` |  | `Esc` `C-c` |
| `repeat_find_char` | 再找一次剛纔那個字 |  | `;` |  |
| `repeat_find_char_reverse` | 反向再找一次剛纔那個字 |  | `,` |  |
| `copy_selection_on_next_line` | 在下一行加一個選區 | `C` |  |  |
| `copy_selection_on_prev_line` | 在上一行加一個選區 | `A-C` | `A-C` |  |
| `keep_primary_selection` | 只留主選區 | `,` |  |  |
| `remove_primary_selection` | 去掉主選區 | `A-,` | `A-,` |  |
| `merge_selections` | 合併所有選區 | `A--` | `A--` |  |
| `merge_consecutive_selections` | 合併相鄰的選區 | `A-_` | `A-_` |  |
| `ensure_selections_forward` | 讓每個選區都朝前 | `A-:` | `A-:` |  |
| `shrink_to_line_bounds` | 把選區縮到整行 | `A-x` | `A-x` |  |
| `split_selection_on_newline` | 按行拆分選區 | `A-s` | `A-s` |  |
| `rotate_selections_forward` | 主選區換成下一個 | `)` |  |  |
| `rotate_selections_backward` | 主選區換成上一個 | `(` |  |  |
| `trim_selections` | 去掉每個選區兩頭的空白 | `_` |  |  |
| `align_selections` | 對齊各選區 | `&` |  |  |
| `rotate_selection_contents_forward` | 各選區的内容往後輪換 | `A-)` | `A-)` |  |
| `rotate_selection_contents_backward` | 各選區的内容往前輪換 | `A-(` | `A-(` |  |
| `select_regex` | 在選區内按正則選擇 | `s` |  |  |
| `split_selection` | 按正則拆分選區 | `S` |  |  |
| `keep_selections` | 只保留匹配正則的選區 | `K` |  |  |
| `remove_selections` | 去掉匹配正則的選區 | `A-K` | `A-K` |  |
| `operator_delete` | 删除(再按一個動作) |  | `d` |  |
| `operator_change` | 改寫(再按一個動作) |  | `c` |  |
| `operator_yank` | 複製(再按一個動作) |  | `y` `zy` |  |
| `operator_indent` | 增加縮進(再按一個動作) |  | `>` |  |
| `operator_unindent` | 減少縮進(再按一個動作) |  | `<` |  |
| `delete_to_line_end` | 删到行尾 | `D` |  |  |
| `delete_to_line_end_noyank` | 删到行尾(不進寄存器) | `A-D` |  |  |
| `vim_delete_char_forward` | 删掉光標下的字，不删換行(vim 的 x) |  | `x` |  |
| `extend_line_above` | 往上選行 | `X` |  |  |
| `move_selected_lines_down` | 把選中的行往下移 | `A-j` | `A-j` |  |
| `move_selected_lines_up` | 把選中的行往上移 | `A-k` | `A-k` |  |
| `goto_line_or_last_line` | 到第 N 行，不帶數字到末行 | `G` |  |  |
| `normal_mode_and_collapse` | 退出選擇模式，或收成一個光標 |  |  |  |
| `quit` | 關閉此區；最後一個窗口則退出編輯器 |  |  |  |
| `select_inner_object` | 選中對象内部(再按對象鍵) |  | `i` |  |
| `select_around_object` | 選中整個對象(再按對象鍵) |  | `a` |  |
| `undo_line` | 撤銷這一行的所有改動 |  | `U` |  |
| `earlier` | 撤銷(同 u) | `A-u` | `A-u` |  |
| `later` | 重做(同 U) | `A-U` | `A-U` |  |
| `goto_column` | 到本行第 N 列(用計數) |  | `\|` |  |
| `shell_pipe` | 用外部命令處理選區並替換 | `\|` |  |  |
| `shell_insert_output` | 把外部命令的輸出插在選區前 | `!` |  |  |
| `shell_append_output` | 把外部命令的輸出接在選區後 | `A-!` | `A-!` |  |
| `shell_pipe_to` | 把選區傳給外部命令，不改文本 | `A-\|` | `A-\|` |  |
| `shell_keep_pipe` | 只保留終端命令執行成功的選區 | `$` |  |  |
| `command_mode` | 命令行 | `:` | `:` `C-w :` |  |
| `match_mode` | 配對組：括號、引號、對象 | `m` |  |  |
| `replace` | 把選中的每個字換成另一個字 | `r` | `r` |  |
| `select_register` | 選寄存器(再按一個字母) | `"` | `"` |  |
| `record_macro` | 開始或停止録宏 | `Q` |  |  |
| `replay_macro` | 回放宏 | `q` |  |  |
| `window_mode` | 窗口組 | `C-w` `Space w` | `C-w` `Space w` |  |
| `page_down` | 向下翻頁 | `C-f` `PageDown` `Space Space` `z C-f` `z PageDown` `Z C-f` `Z PageDown` | `C-f` `PageDown` `Space Space` `Z C-f` `Z PageDown` | `PageDown` |
| `page_up` | 向上翻頁 | `C-b` `PageUp` `Space Backspace` `z C-b` `z PageUp` `Z C-b` `Z PageUp` | `C-b` `PageUp` `Space Backspace` `Z C-b` `Z PageUp` | `PageUp` |
| `join_selections_space` | 合併行並選中連接處 | `A-J` | `A-J` |  |
| `save_selection` | 把當前位置記入跳轉表 | `C-s` | `C-s` |  |
| `jump_forward` | 跳轉表：前進 | `C-i` `Tab` | `C-i` `Tab` |  |
| `two_thirds_page_down` | 向下翻三分之二頁 | `C-n` |  |  |
| `two_thirds_page_up` | 向上翻三分之二頁 | `C-p` |  |  |
| `flip_selections` | 光標換到選區另一頭 | `A-;` | `A-;` |  |
| `vim_redo` | 重做(vim 的 C-r) |  | `C-r` |  |
| `delete_char_backward` | 删除光標前的一個字 |  | `X` | `Backspace` `C-h` |
| `case_mode` | 字形組：大小寫、繁簡 | `` ` `` | `` g` `` |  |
| `search_selection_detect_word_boundaries` | 搜索選中内容(整詞) | `*` |  |  |
| `search_selection_exact` | 搜索選中内容(原樣) | `A-*` | `A-*` |  |
| `search_word_backward` | 反向搜索光標下的詞 |  | `#` |  |
| `replace_mode` | 替換模式：輸入覆蓋原文 |  | `R` |  |
| `goto_line` | 到第 N 行(用計數) |  |  |  |
| `vim_repeat_last_change` | 用新的計數再做一次剛纔的改動 |  | `.` |  |
| `repeat_last_motion` | 重複上次的 f 或 t | `A-.` | `A-.` |  |
| `jump_prev_word_end` | 跳到上一個詞尾(不選中) |  | `ge` |  |
| `jump_prev_long_word_end` | 跳到上一個大詞尾(不選中) |  | `gE` |  |
| `goto_word` | 跳到屏幕上某處 | `gw` | `gW` |  |
| `goto_word_by_letters` | 兩字母定位單詞 | `gz` | `gz` |  |
| `split_join` | 拆開/合併括號裏的各項 | `gS` | `gS` |  |
| `goto_char_by_pinyin` | 按讀音定位漢字 | `gZ` | `gZ` |  |
| `goto_last_accessed_file` | 回到剛纔的緩衝區 | `ga` | `` |  |
| `goto_reference` | 轉到引用 | `gr` |  |  |
| `move_next_zong` | 豎排時到下一縱(文件裏的) |  | `gj` |  |
| `move_prev_zong` | 豎排時到上一縱(文件裏的) |  | `gk` |  |
| `goto_last_modification` | 最後改動處 | `g.` | `g.` |  |
| `reselect_last_selection` | 重選上次選區 |  | `gv` |  |
| `insert_at_last_insert` | 在上次插入處繼續插入 |  | `gi` |  |
| `goto_older_change` | 跳到較舊的改動 |  | `g;` |  |
| `goto_newer_change` | 跳到較新的改動 |  | `g,` |  |
| `operator_lowercase` | 轉小寫(再按一個動作) |  | `gu` |  |
| `operator_uppercase` | 轉大寫(再按一個動作) |  | `gU` |  |
| `operator_switch_case` | 大小寫互換(再按一個動作) |  | `g~` |  |
| `operator_comment` | 註釋(再按一個動作) |  | `gc` |  |
| `operator_fill` | 按寬度重排，後接動作 |  | `gq` |  |
| `operator_fill_keep_cursor` | 重排文本，光標不動(vim 的 gw) |  | `gw` |  |
| `join_selections_no_space` | 合併下一行(不加空格) |  | `gJ` |  |
| `file_picker_in_current_directory` | 文件選擇器(工作目録) | `Space F` | `Space F` |  |
| `file_explorer` | 瀏覽文件(項目目録) | `Space e` | `Space e` |  |
| `file_explorer_in_current_buffer_directory` | 瀏覽文件(當前文件目録) | `Space E` | `Space E` |  |
| `changed_file_picker` | 已改動的文件 | `Space g` | `Space g` |  |
| `paste_clipboard_before` | 從系統剪貼板粘貼到前面 | `Space P` | `Space P` |  |
| `replace_selections_with_clipboard` | 用系統剪貼板替換選區 | `Space R` | `Space R` |  |
| `lsp_or_syntax_symbol_picker` | 符號選擇器 | `Space s` | `Space s` |  |
| `lsp_or_syntax_workspace_symbol_picker` | 項目符號選擇器 | `Space S` | `Space S` |  |
| `dictionary_panel` | 顯示漢字信息(側欄) | `Space N` | `Space N` |  |
| `hover` | 顯示文檔(浮窗) | `Space k` | `K` `Space k` |  |
| `hover_panel` | 顯示文檔(側欄) | `Space K` | `Space K` |  |
| `diagnostics_picker` | 診斷選擇器 | `Space d` | `Space d` |  |
| `workspace_diagnostics_picker` | 項目診斷選擇器 | `Space D` | `Space D` |  |
| `show_diagnostic` | 顯示診斷(浮窗) | `Space l` | `Space l` |  |
| `show_diagnostic_panel` | 顯示診斷(側欄) | `Space L` | `Space L` |  |
| `show_change` | 顯示改動(浮窗) | `Space x` | `Space x` |  |
| `show_change_panel` | 顯示改動(側欄) | `Space X` | `Space X` |  |
| `rename_symbol` | 重命名符號 | `Space r` | `Space r` |  |
| `code_action` | 代碼動作 | `Space a` | `Space a` |  |
| `show_record` | 顯示行記録(浮窗) | `Space i` | `Space i` |  |
| `show_record_panel` | 顯示行記録(側欄) | `Space I` | `Space I` |  |
| `table_mode` | 表格 | `Space t` | `Space t` |  |
| `conflict_mode` | 合併衝突 | `Space m` | `Space m` |  |
| `open_recent_mode` | 最近打開 | `Space o` | `Space o` |  |
| `yume_mode` | 輸入法 | `Space z` | `Space z` |  |
| `goto_next_conflict` | 下一處合併衝突 | `]m` |  |  |
| `goto_prev_conflict` | 上一處合併衝突 | `[m` |  |  |
| `goto_next_change` | 下一處改動(git) | `]g` | `]g` `]c` |  |
| `goto_prev_change` | 上一處改動(git) | `[g` | `[g` `[c` |  |
| `goto_next_diag` | 下一條診斷 | `]d` | `]d` |  |
| `goto_prev_diag` | 上一條診斷 | `[d` | `[d` |  |
| `goto_last_diag` | 最後一條診斷 | `]D` | `]D` |  |
| `goto_first_diag` | 第一條診斷 | `[D` | `[D` |  |
| `goto_next_function` | 下一個函數 | `]f` |  |  |
| `goto_prev_function` | 上一個函數 | `[f` |  |  |
| `goto_next_class` | 下一個類 | `]t` |  |  |
| `goto_prev_class` | 上一個類 | `[t` |  |  |
| `goto_next_comment` | 下一處註釋 | `]c` |  |  |
| `goto_prev_comment` | 上一處註釋 | `[c` |  |  |
| `goto_next_parameter` | 選中下一個參數 | `]a` |  |  |
| `goto_prev_parameter` | 選中上一個參數 | `[a` |  |  |
| `goto_next_entry` | 選中下一個條目 | `]e` | `]e` |  |
| `goto_prev_entry` | 選中上一個條目 | `[e` | `[e` |  |
| `goto_next_test` | 選中下一個測試 | `]T` |  |  |
| `goto_prev_test` | 選中上一個測試 | `[T` |  |  |
| `goto_next_xml_element` | 選中下一個 XML 元素 | `]x` | `]x` |  |
| `goto_prev_xml_element` | 選中上一個 XML 元素 | `[x` | `[x` |  |
| `add_newline_below` | 下方插入空行 | `]␣` | `]␣` |  |
| `add_newline_above` | 上方插入空行 | `[␣` | `[␣` |  |
| `align_view_center` | 光標行移到中間 | `zz` `zc` `Zz` `Zc` | `zz` `Zz` `Zc` |  |
| `align_view_top` | 光標行移到頂部 | `zt` `Zt` | `zt` `Zt` |  |
| `align_view_bottom` | 光標行移到底部 | `zb` `Zb` | `zb` `Zb` |  |
| `scroll_down` | 向下滚動一行(光標位置不變) | `zj` `z Down` `Zj` `Z Down` | `C-e` `Zj` `Z Down` |  |
| `scroll_up` | 向上滚動一行(光標位置不變) | `zk` `z Up` `Zk` `Z Up` | `C-y` `Zk` `Z Up` |  |
| `match_brackets` | 跳到配對符號的另一半 | `mm` |  |  |
| `select_textobject_inner` | 選中配對符號内的内容 | `mi` |  |  |
| `select_textobject_around` | 選中配對符號及其内容 | `ma` |  |  |
| `surround_add` | 用配對符號包圍選區 | `ms` |  |  |
| `surround_delete` | 移除配對符號 | `md` |  |  |
| `surround_replace` | 替換配對符號 | `mr` |  |  |
| `jump_view_left` | 去左邊那一區 | `C-w h` `C-w Left` | `C-w h` `C-w Left` |  |
| `jump_view_down` | 去下面那一區 | `C-w j` `C-w Down` | `C-w j` `C-w Down` |  |
| `jump_view_up` | 去上面那一區 | `C-w k` `C-w Up` | `C-w k` `C-w Up` |  |
| `jump_view_right` | 去右邊那一區 | `C-w l` `C-w Right` | `C-w l` `C-w Right` |  |
| `toggle_left_sidebar` | 開關左側欄 | `C-w e` | `C-w e` |  |
| `toggle_right_sidebar` | 開關右側欄 | `C-w i` | `C-w i` |  |
| `goto_left_sidebar` | 進入左側欄 | `C-w E` | `C-w E` |  |
| `goto_right_sidebar` | 進入右側欄 | `C-w I` | `C-w I` |  |
| `hsplit` | 向下拆分 | `C-w s` |  |  |
| `hsplit_above` | 向上拆分 |  | `C-w S` `C-w s` |  |
| `vsplit_left` | 向左拆分 |  | `C-w v` |  |
| `vsplit` | 向右拆分 | `C-w v` |  |  |
| `hsplit_new` | 下方新建空白窗口 | `C-w n s` | `C-w n s` |  |
| `vsplit_new` | 右側新建空白窗口 | `C-w n v` | `C-w n v` |  |
| `window_new_mode` | 空白窗口組：s 下面，v 旁邊 | `C-w n` |  |  |
| `new_window_left` | 左側新建空白窗口 | `C-w n h` |  |  |
| `new_window_down` | 下方新建空白窗口 | `C-w n j` |  |  |
| `new_window_up` | 上方新建空白窗口 | `C-w n k` | `C-w n` |  |
| `new_window_right` | 右側新建空白窗口 | `C-w n l` |  |  |
| `new_window_left_pick` | 左側新建窗口並選擇緩衝區 | `C-w n H` |  |  |
| `new_window_down_pick` | 下方新建窗口並選擇緩衝區 | `C-w n J` |  |  |
| `new_window_up_pick` | 上方新建窗口並選擇緩衝區 | `C-w n K` |  |  |
| `new_window_right_pick` | 右側新建窗口並選擇緩衝區 | `C-w n L` |  |  |
| `wclose` | 關閉窗口 | `C-w q` | `C-w q` |  |
| `wonly` | 只保留此窗口 | `C-w o` | `C-w o` |  |
| `transpose_view` | 並排與上下互換 | `C-w t` |  |  |
| `swap_view_left` | 和左邊那一區對調 | `C-w H` |  |  |
| `swap_view_down` | 和下面那一區對調 | `C-w J` |  |  |
| `swap_view_up` | 和上面那一區對調 | `C-w K` |  |  |
| `swap_view_right` | 和右邊那一區對調 | `C-w L` |  |  |
| `goto_file_hsplit` | 下方打開光標處文件 | `C-w f` |  |  |
| `goto_file_vsplit` | 旁邊打開光標處文件 | `C-w F` |  |  |
| `goto_file_hsplit_above` | 上方打開光標處文件 |  | `C-w F` `C-w f` |  |
| `create_fold` | 創建摺疊，後接移動 | `zf` `Zf` | `zf` |  |
| `create_fold_lines` | 摺疊 N 行(用計數) |  | `zF` |  |
| `open_fold` | 展開 |  | `zo` |  |
| `open_folds_recursively` | 遞歸展開 |  | `zO` |  |
| `close_fold` | 摺疊 |  | `zc` |  |
| `close_folds_recursively` | 遞歸摺疊 |  | `zC` |  |
| `toggle_fold` | 切換摺疊 | `za` `Za` | `za` |  |
| `toggle_folds_recursively` | 遞歸切換摺疊 |  | `zA` |  |
| `open_folds_to_cursor` | 展開到光標所在行 |  | `zv` |  |
| `open_all_folds` | 全部展開 | `zR` `ZR` | `zR` |  |
| `close_all_folds` | 全部摺疊 | `zM` `ZM` | `zM` |  |
| `delete_fold` | 删除此處摺疊，保留文本 |  | `zd` |  |
| `delete_folds_recursively` | 删除此處所有 zf 摺疊 |  | `zD` |  |
| `delete_all_folds` | 删除所有 zf 摺疊 |  | `zE` |  |
| `goto_next_fold` | 到下一個摺疊開頭 |  | `zj` |  |
| `goto_prev_fold` | 到上一個摺疊末尾 |  | `zk` |  |
| `disable_folds` | 停用摺疊 |  | `zn` |  |
| `enable_folds` | 啓用摺疊 |  | `zN` |  |
| `toggle_folds_enabled` | 啓用/停用摺疊 |  | `zi` |  |
| `fold_more` | 多摺疊一層 |  | `zm` |  |
| `fold_less` | 多展開一層 |  | `zr` |  |
| `goto_fold_start` | 到當前摺疊開頭 |  | `[z` |  |
| `goto_fold_end` | 到當前摺疊末尾 |  | `]z` |  |
| `reapply_fold_level_and_view` | 按層級重新摺疊並顯示光標行 |  | `zx` |  |
| `reapply_fold_level` | 按層級重新摺疊 |  | `zX` |  |
| `vim_align_view_top` | 本行移到頂部，光標到縮進後 |  | `z Enter` |  |
| `vim_align_view_center` | 本行居中，光標到縮進後 |  | `z.` |  |
| `vim_align_view_bottom` | 本行移到底部，光標到縮進後 |  | `z-` |  |
| `vim_align_view_below_top` | 下一頁首行移到頂部 |  | `z+` |  |
| `vim_align_view_above_bottom` | 上一頁末行移到底部 |  | `z^` |  |
| `scroll_view_left` | 視圖左移一列 |  | `zh` `z Left` |  |
| `scroll_view_right` | 視圖右移一列 |  | `zl` `z Right` |  |
| `scroll_view_half_left` | 視圖左移半屏 |  | `zH` |  |
| `scroll_view_half_right` | 視圖右移半屏 |  | `zL` |  |
| `align_view_cursor_left` | 光標列移到最左邊 |  | `zs` |  |
| `align_view_cursor_right` | 光標列移到最右邊 |  | `ze` |  |
| `align_view_middle` | 横向居中 | `zm` `Zm` | `Zm` |  |
| `rotate_view_reverse` | 上一個 |  | `C-w W` |  |
| `jump_view_first` | 第一個窗口 |  | `C-w t` |  |
| `jump_view_last` | 最後一個窗口 |  | `C-w b` |  |
| `jump_view_last_accessed` | 上一個窗口 |  | `C-w p` |  |
| `exchange_view` | 與下一個窗口交換 |  | `C-w x` |  |
| `rotate_views_forward` | 本排窗口向後輪換 |  | `C-w r` |  |
| `rotate_views_backward` | 本排窗口向前輪換 |  | `C-w R` |  |
| `move_view_far_left` | 移到最左側 |  | `C-w H` |  |
| `move_view_far_down` | 移到最下方 |  | `C-w J` |  |
| `move_view_far_up` | 移到最上方 |  | `C-w K` |  |
| `move_view_far_right` | 移到最右側 |  | `C-w L` |  |
| `vim_close_window` | 關閉窗口但不退出 |  | `C-w c` |  |
| `goto_last_accessed_file_hsplit` | 上方打開上一個文件 |  | `C-w ^` |  |
| `switch_to_lowercase` | 轉小寫 | `` `l `` | `` g`l `` |  |
| `switch_to_uppercase` | 轉大寫 | `` A-` `` `` `u `` | `` A-` `` `` g`u `` |  |
| `convert_to_simplified` | 繁→簡 | `` `s `` | `` g`s `` |  |
| `convert_to_traditional` | 簡→繁 | `` `t `` | `` g`t `` |  |
| `convert_to_taiwan_traditional` | 簡→臺灣繁 | `` `w `` | `` g`w `` |  |
| `convert_to_hong_kong_traditional` | 簡→香港繁 | `` `k `` | `` g`k `` |  |
| `convert_to_mainland_traditional` | 簡→大陸繁 | `` `c `` | `` g`c `` |  |
| `convert_to_classical_traditional` | 簡→古籍繁 | `` `g `` | `` g`g `` |  |
| `convert_to_japanese` | 繁→日文新字體 | `` `j `` | `` g`j `` |  |
| `switch_to_halfwidth` | 轉半角 | `` `h `` | `` g`h `` |  |
| `switch_to_fullwidth` | 轉全角 | `` `f `` | `` g`f `` |  |
| `conflict_keep_ours` | 保留我方 | `Space m o` | `Space m o` |  |
| `conflict_keep_theirs` | 保留對方 | `Space m t` | `Space m t` |  |
| `conflict_keep_both` | 保留雙方 | `Space m b` | `Space m b` |  |
| `recent_file_picker` | 最近打開的文件 | `Space o f` | `Space o f` |  |
| `global_recent_file_picker` | 最近打開的文件(所有項目) | `Space o g` | `Space o g` |  |
| `project_picker` | 最近打開的項目 | `Space o p` | `Space o p` |  |
| `resume_session` | 恢復上次會話 | `Space o r` | `Space o r` |  |
| `yume_toggle` | 輸入法開/關 | `Space z z` | `Space z z` |  |
| `yume_commit_mode` | 上屏方式 | `Space z m` | `Space z m` |  |
| `yume_panel_mode` | 候選欄位置 | `Space z p` | `Space z p` |  |
| `yume_preedit_mode` | 未上屏内容顯示在哪 | `Space z e` | `Space z e` |  |
| `yume_toggle_prediction` | 輸入預測開/關 | `Space z y` | `Space z y` |  |
| `yume_pick_scheme` | 選擇方案 | `Space z i` | `Space z i` |  |
| `yume_next_scheme` | 下一個方案 | `Space z n` | `Space z n` |  |
| `yume_menu_size_3` | 每頁 3 個候選 | `Space z 3` | `Space z 3` |  |
| `yume_menu_size_4` | 每頁 4 個候選 | `Space z 4` | `Space z 4` |  |
| `yume_menu_size_5` | 每頁 5 個候選 | `Space z 5` | `Space z 5` |  |
| `yume_menu_size_6` | 每頁 6 個候選 | `Space z 6` | `Space z 6` |  |
| `yume_menu_size_7` | 每頁 7 個候選 | `Space z 7` | `Space z 7` |  |
| `yume_menu_size_8` | 每頁 8 個候選 | `Space z 8` | `Space z 8` |  |
| `yume_menu_size_9` | 每頁 9 個候選 | `Space z 9` | `Space z 9` |  |
| `yume_next_annotation` | 切換候選註解 | `Space z /` | `Space z /` |  |
| `yume_installed_table` | 改用安裝版碼表 | `Space z t` | `Space z t` |  |
| `yume_table_source` | 查看碼表來源 | `Space z w` | `Space z w` |  |
| `yume_data_location` | 查看數據位置 | `Space z W` | `Space z W` |  |
| `yume_commit_default` | 默認(由方案決定) | `Space z m 0` | `Space z m 0` |  |
| `yume_commit_delayed` | 頂字 | `Space z m d` | `Space z m d` |  |
| `yume_commit_unique` | 唯一 | `Space z m u` | `Space z m u` |  |
| `yume_commit_fluency` | 整句 | `Space z m f` | `Space z m f` |  |
| `yume_panel_box` | box：光標旁的框 | `Space z p b` | `Space z p b` |  |
| `yume_panel_bottom` | bottom：窗口底行 | `Space z p m` | `Space z p m` |  |
| `yume_panel_inline` | inline：光標下一行 | `Space z p i` | `Space z p i` |  |
| `yume_preedit_off` | off：顯示在候選欄 | `Space z e o` | `Space z e o` |  |
| `yume_preedit_composition` | composition：正文中顯示編碼 | `Space z e c` | `Space z e c` |  |
| `yume_preedit_preview` | preview：正文中顯示首選 | `Space z e p` | `Space z e p` |  |
| `yume_charset_mode` | 字集過濾 | `Space z 0` | `Space z 0` |  |
| `yume_sort_mode` | 字集排序 | `Space z s` | `Space z s` |  |
| `yume_lanes_mode` | 整句字集軌 | `Space z g` | `Space z g` |  |
| `yume_builtin_mode` | 切到内置方案 | `Space z b` | `Space z b` |  |
| `yume_charset_all` | 全部漢字 | `Space z 0 a` | `Space z 0 a` |  |
| `yume_charset_common` | 僅常用漢字 | `Space z 0 c` | `Space z 0 c` |  |
| `yume_charset_tonggui` | 僅簡化漢字 | `Space z 0 s` | `Space z 0 s` |  |
| `yume_charset_harmonic` | 僅傳統漢字 | `Space z 0 t` | `Space z 0 t` |  |
| `yume_sort_original` | 原始順序 | `Space z s o` | `Space z s o` |  |
| `yume_sort_common` | 常用字優先 | `Space z s c` | `Space z s c` |  |
| `yume_sort_tonggui` | 簡化字優先 | `Space z s s` | `Space z s s` |  |
| `yume_sort_harmonic` | 傳統字優先 | `Space z s t` | `Space z s t` |  |
| `yume_lane_tonggui` | 通用規範漢字 | `Space z g j` | `Space z g j` |  |
| `yume_lane_tongfan` | 通規標準繁體字 | `Space z g f` | `Space z g f` |  |
| `yume_lane_tai` | 常用與次常用國字 | `Space z g t` | `Space z g t` |  |
| `yume_builtin_pinyin` | 宇浩拼音 | `Space z b p` | `Space z b p` |  |
| `yume_builtin_lingming` | 靈明 | `Space z b l` | `Space z b l` |  |
| `yume_builtin_xingchen` | 星陳 | `Space z b x` | `Space z b x` |  |
| `table_source_view` | 源碼視圖 | `Space t o` | `Space t o` |  |
| `table_basic_view` | 基本視圖(按列對齊) | `Space t b` | `Space t b` |  |
| `table_window_view` | 全窗視圖(表格獨佔窗口) | `Space t t` | `Space t t` |  |
| `table_leave_window` | 退出全窗視圖 | `Space t q` | `Space t q` |  |
| `goto_next_table` | 下一張表 | `Space t ]` | `Space t ]` |  |
| `goto_prev_table` | 上一張表 | `Space t [` | `Space t [` |  |
| `table_convert_mode` | 轉換表格格式(分隔符) | `Space t x` | `Space t x` |  |
| `table_cell_width` | 長單元格：換行/摺疊/全文 | `Space t w` | `Space t w` |  |
| `table_search_columns` | 按列搜索(可指定列範圍) | `Space t /` | `Space t /` |  |
| `table_goto_cell` | 跳到單元格(␣t 20,20g) | `Space t g` | `Space t g` |  |
| `table_enter_cell` | 進入單元格(按字移動) |  |  |  |
| `table_leave_cell` | 離開單元格(回到按格移動) |  |  |  |
| `table_next_cell` | 下一格，到行尾接下一行 |  |  |  |
| `table_prev_cell` | 上一格 |  |  |  |
| `table_yank_column` | 複製本列 | `Space t y` | `Space t y` |  |
| `table_replace_column` | 用複製的列覆蓋本列 | `Space t v` | `Space t v` |  |
| `table_paste_column_right` | 把複製的列粘貼到右邊 | `Space t p` | `Space t p` |  |
| `table_paste_column_left` | 把複製的列粘貼到左邊 | `Space t P` | `Space t P` |  |
| `table_add_row_below` | 下方插入一行 | `Space t r` | `Space t r` |  |
| `table_add_row_above` | 上方插入一行 | `Space t R` | `Space t R` |  |
| `table_add_column_right` | 右邊加一列 | `Space t c` | `Space t c` |  |
| `table_add_column_left` | 左邊加一列 | `Space t C` | `Space t C` |  |
| `table_delete_row` | 删除本行 | `Space t d` | `Space t d` |  |
| `table_delete_column` | 删除本列 | `Space t D` | `Space t D` |  |
| `table_move_row_down` | 本行下移 | `Space t j` | `Space t j` |  |
| `table_move_row_up` | 本行上移 | `Space t k` | `Space t k` |  |
| `table_move_column_left` | 本列左移 | `Space t h` | `Space t h` |  |
| `table_move_column_right` | 本列右移 | `Space t l` | `Space t l` |  |
| `table_align_left` | 本列左對齊 | `Space t <` | `Space t <` |  |
| `table_align_center` | 本列居中 | `Space t =` | `Space t =` |  |
| `table_align_right` | 本列右對齊 | `Space t >` | `Space t >` |  |
| `table_line_up` | 重新對齊 | `Space t F` | `Space t F` |  |
| `table_record_panel` | 本行記録 | `Space t i` | `Space t i` |  |
| `table_first_row_is_data` | 首行作爲表頭 | `Space t H` | `Space t H` |  |
| `table_sort_ascending` | 按列升序排列(␣t1s) | `Space t s` | `Space t s` |  |
| `table_sort_descending` | 按列降序排列(␣t1S) | `Space t S` | `Space t S` |  |
| `convert_table_to_pipe` | 表格轉成 pipe | `Space t x p` | `Space t x p` |  |
| `paste_table_as_pipe` | 從剪貼板粘貼爲 pipe 表格 | `Space t x P` | `Space t x P` |  |
| `convert_table_to_csv` | 表格轉成 csv | `Space t x c` | `Space t x c` |  |
| `paste_table_as_csv` | 從剪貼板粘貼爲 csv 表格 | `Space t x C` | `Space t x C` |  |
| `convert_table_to_tsv` | 表格轉成 tsv | `Space t x t` | `Space t x t` |  |
| `paste_table_as_tsv` | 從剪貼板粘貼爲 tsv 表格 | `Space t x T` | `Space t x T` |  |
| `no_op` | 什麽都不做(綁定它即解綁該鍵) |  | `&` `=` `!` `C-c` |  |
| `extend_char_left` | 選區向左擴一個字 | `h` `Left` | `h` `Left` |  |
| `extend_char_right` | 選區向右擴一個字 | `l` `Right` | `l` `Right` |  |
| `extend_visual_line_up` | 選區擴到上一行(屏幕上的) | `k` `Up` |  |  |
| `extend_visual_line_down` | 選區擴到下一行(屏幕上的) | `j` `Down` |  |  |
| `extend_line_up` | 選區擴到上一行(文件裏的) | `gk` |  |  |
| `extend_line_down` | 選區擴到下一行(文件裏的) | `gj` |  |  |
| `extend_next_word_start` | 選區擴到下一個詞首 | `w` |  |  |
| `extend_prev_word_start` | 選區擴到上一個詞首 | `b` |  |  |
| `extend_next_word_end` | 選區擴到下一個詞尾 | `e` |  |  |
| `extend_next_long_word_start` | 選區擴到下一個大詞首 | `W` |  |  |
| `extend_prev_long_word_start` | 選區擴到上一個大詞首 | `B` |  |  |
| `extend_next_long_word_end` | 選區擴到下一個大詞尾 | `E` |  |  |
| `extend_search_next` | 加選下一處匹配 | `n` |  |  |
| `extend_search_prev` | 加選上一處匹配 | `N` |  |  |
| `extend_till_char` | 選區向後擴到某個字之前 | `t` | `t` |  |
| `extend_next_char` | 選區向後擴到某個字 | `f` | `f` |  |
| `extend_till_prev_char` | 選區向前擴到某個字之後 | `T` | `T` |  |
| `extend_prev_char` | 選區向前擴到某個字 | `F` | `F` |  |
| `extend_to_line_start` | 選區擴到行首 | `Home` | `Home` |  |
| `extend_to_line_end` | 選區擴到行尾 | `End` |  |  |
| `extend_to_file_start` | 選區擴到文件開頭 | `gg` | `gg` |  |
| `extend_to_file_end` | 選區擴到文件末尾 |  |  |  |
| `extend_to_last_line` | 選到最後一行 | `ge` |  |  |
| `extend_to_word` | 選區擴到某個跳轉標籤 | `gw` |  |  |
| `insert_newline` | 換行(延續縮進和列表符號) |  |  | `Enter` `C-j` |
| `delete_char_forward` | 删除光標後的一個字 |  |  | `Delete` `C-d` |
| `delete_word_forward` | 删除光標後的一個詞 |  |  | `A-d` |
| `delete_word_backward` | 删除光標前的一個詞 |  |  | `C-w` |
| `kill_to_line_start` | 删到行首 |  |  | `C-u` |
| `kill_to_line_end` | 删到行尾(插入模式) |  |  | `C-k` |
| `insert_register` | 插入寄存器内容(再按一個字母) |  |  | `C-r` |
| `run_one_normal_command` | 臨時執行一條普通模式命令(vim 的 C-o) |  |  | `C-o` |
| `goto_line_end_newline` | 到行尾(最後一個字後面) |  |  | `End` `C-e` |
| `commit_undo_checkpoint` | 新建撤銷點 |  |  | `C-g` |
| `insert_tab` | 插入縮進(與文件一致) |  |  | `Tab` `S-Tab` |
| `insert_other_tab` | 插入另一種縮進(Tab 或空格) |  |  | `S-Tab` |
| `vim_normal_mode` | 回到普通模式(退出可視模式時選區收成光標) |  | `Esc` |  |
| `vim_goto_line_end` | 行尾(vim 的 $：往下走也留在行尾) |  | `$` `End` |  |
| `vim_insert_mode` | 在光標前插入(vim 的 i) |  | `i` |  |
| `vim_append_mode` | 在光標後插入(vim 的 a) |  | `a` |  |
| `vim_insert_at_line_start` | 在第一個非空白字符前插入(vim 的 I) |  | `I` |  |
| `vim_insert_at_line_end` | 在行尾插入(vim 的 A) |  | `A` |  |
| `vim_open_below` | 在下方開新行(vim 的 o，計數重複) |  | `o` |  |
| `vim_open_above` | 在上方開新行(vim 的 O，計數重複) |  | `O` |  |
| `vim_join_selections` | 與下一行合併(vim 的 J) |  | `J` |  |
| `vim_switch_case` | 切換大小寫並後移(vim 的 ~) |  | `~` |  |
| `vim_goto_line` | 到第 N 行，不帶計數到末行(vim 的 G) |  | `G` |  |
| `vim_indent` | 增加縮進，光標留在原列(vim) |  | `>` |  |
| `vim_unindent` | 減少縮進，光標留在原列(vim) |  | `<` |  |
| `vim_paste_after` | 向後粘貼(vim 的 p) |  | `p` `zp` |  |
| `vim_paste_before` | 向前粘貼(vim 的 P) |  | `P` `zP` |  |
| `vim_paste_after_indented` | 向後粘貼，縮進對齊這一行(vim 的 ]p) |  | `]p` |  |
| `vim_paste_before_indented` | 向前粘貼，縮進對齊這一行(vim 的 [p) |  | `]P` `[p` `[P` |  |
| `vim_increment` | 光標處或其後的數字加一(vim 的 C-a) |  | `C-a` |  |
| `vim_decrement` | 光標處或其後的數字減一(vim 的 C-x) |  | `C-x` |  |
| `vim_search_next` | 下一處(vim 的 n) |  | `n` |  |
| `vim_search_prev` | 上一處(vim 的 N) |  | `N` |  |
| `vim_match_brackets` | 跳到匹配的括號，不在括號上則找本行下一個(vim 的 %) |  | `%` |  |
| `vim_kill_to_line_start` | 删到這次插入開始的地方(vim 的 C-u) |  |  | `C-u` |
| `vim_kill_to_line_end` | 删到行尾，不删換行(vim) |  |  | `C-k` |
| `vim_flip_selections` | 換到選區的另一頭(vim 可視模式的 o) |  | `o` |  |
| `vim_switch_to_lowercase` | 選區轉小寫並退出可視模式(vim 的 u) |  | `u` |  |
| `vim_switch_to_uppercase` | 選區轉大寫並退出可視模式(vim 的 U) |  | `U` |  |
| `vim_yank` | 複製選區並退出可視模式(vim 的 y) |  | `y` |  |
| `vim_visual_block_mode` | 塊選擇(vim 的 C-v) |  | `C-v` |  |
| `vim_record_macro` | 録宏(再按一個字母) |  | `q` |  |
| `vim_replay_macro` | 回放宏(再按一個字母) |  | `@` |  |
| `vim_replay_last_macro` | 回放上次録的宏(vim 的 Q) |  | `Q` |  |
| `vim_goto_first_nonwhitespace` | 第一個非空白字符(帶數字時下移幾行) |  | `_` |  |

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
| `normal_mode` | 關閉命令行、搜索框或選擇器 | `Esc` |
| `confirm` | 執行；在選擇器中打開選中項 | `Enter` |
| `completion_next` | 補全：下一個 | `Tab` |
| `completion_prev` | 補全：上一個 | `S-Tab` |
| `history_prev` | 歷史：上一條 | `Up` `C-p` |
| `history_next` | 歷史：下一條 | `Down` `C-n` |
| `move_char_left` | 左一個字 | `Left` |
| `move_char_right` | 右一個字 | `Right` |
| `goto_line_start` | 行首 | `Home` `C-a` |
| `goto_line_end` | 行尾 | `End` `C-e` |
| `delete_char_backward` | 删除光標前的一個字 | `Backspace` |
| `delete_char_forward` | 删除光標後的一個字 | `Delete` |
| `delete_word_backward` | 删除光標前的一個詞 | `C-w` |
| `kill_to_line_start` | 删到行首 | `C-u` |
| `toggle_wide_search` | 繁簡/拼音通配(開關) | `A-j` |

### `[keys.picker]`

| Command | What it does | Keys |
| --- | --- | --- |
| `next_entry` | 下一項 | `Tab` `C-n` `Down` |
| `prev_entry` | 上一項 | `S-Tab` `C-p` `Up` |
| `page_down` | 向下翻頁 | `PageDown` |
| `page_up` | 向上翻頁 | `PageUp` |
| `first_entry` | 第一項 |  |
| `last_entry` | 最後一項 |  |
| `cycle_hidden_files` | 切換跳過的文件：隱藏/忽略 | `A-h` |

### `[keys.sidebar]`

| Command | What it does | Keys |
| --- | --- | --- |
| `move_line_down` | 下一行 | `j` `Down` |
| `move_line_up` | 上一行 | `k` `Up` |
| `page_down` | 向下翻頁 | `J` `PageDown` |
| `page_up` | 向上翻頁 | `K` `PageUp` |
| `goto_file_start` | 第一行 | `g` `Home` |
| `goto_last_line` | 最後一行 | `G` `End` |
| `collapse_entry` | 收起，或退到上一層 | `h` `Left` |
| `expand_entry` | 展開，或進入 | `l` `Right` |
| `open_entry` | 進入：打開文件、跳到那一行 | `Enter` |
| `toggle_links_graph` | 鏈接面板：列表/圖 | `v` |
| `restore_change` | 還原此處改動 | `u` |
| `yank_old_text` | 複製改動前的文本 | `y` |
| `refresh_sidebar` | 刷新 | `R` |
| `cycle_sidebar_width` | 切換寬度：窄、中、寬 | `w` |
| `next_sidebar_view` | 下一個面板 | `Tab` |
| `prev_sidebar_view` | 上一個面板 | `S-Tab` |
| `normal_mode` | 讓輸入法再掛起一次 | `Esc` |
| `leave_sidebar` | 回到編輯區(面板不關) | `q` |
| `command_mode` | 命令行 | `:` |
| `space_mode` | 空格菜單 | `Space` |
| `window_mode` | 窗口組 | `C-w` |

### `[keys.field]`

| Command | What it does | Keys |
| --- | --- | --- |
| `next_field` | 下一格；有灰字時先接受灰字 | `Tab` |
| `prev_field` | 上一格 | `S-Tab` |
| `move_line_down` | 下面那一格 | `Down` |
| `move_line_up` | 上面那一格 | `Up` |
