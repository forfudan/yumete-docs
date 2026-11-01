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
| `goto_line_start` | 行首 | `Home` `gh` `g Up` | `Home` `0` | `Home` `C-a` |
| `goto_line_end` | 行尾 | `End` `gl` `g Down` | `End` `$` |  |
| `goto_first_nonwhitespace` | 第一個非空白字符 | `gs` | `gs` `^` |  |
| `goto_file_start` | 文件開頭 | `gg` | `gg` |  |
| `goto_file_end` | 文件末尾 | `ge` | `ge` |  |
| `goto_last_line` | 最後一行 |  |  |  |
| `goto_prev_sentence` | 上一句 | `H` |  |  |
| `goto_next_sentence` | 下一句 | `L` |  |  |
| `goto_prev_paragraph` | 上一段 | `[p` | `[p` |  |
| `goto_next_paragraph` | 下一段 | `]p` | `]p` |  |
| `half_page_down` | 前進半頁 | `C-d` `z C-d` `z␣` `Z C-d` `Z␣` | `C-d` `z C-d` `z␣` `Z C-d` `Z␣` |  |
| `half_page_up` | 後退半頁 | `C-u` `z C-u` `z Backspace` `Z C-u` `Z Backspace` | `C-u` `z C-u` `z Backspace` `Z C-u` `Z Backspace` |  |
| `jump_backward` | 跳轉表：回到剛纔那個位置 | `C-o` | `C-o` |  |
| `select_mode` | 延伸模式：移動把選區撑大 | `v` | `v` |  |
| `extend_line_below` | 選中當前行 | `x` | `x` |  |
| `extend_to_line_bounds` | 把選區撑到整行邊界 | `X` |  |  |
| `select_all` | 選中整個文件 | `%` | `%` |  |
| `collapse_selection` | 選區收回光標 | `;` |  |  |
| `delete_selection` | 剪切選區(進寄存器) | `d` |  |  |
| `delete_selection_noyank` | 删除選區(不動寄存器) | `A-d` | `A-d` |  |
| `change_selection` | 剪切後改寫 | `c` |  |  |
| `change_selection_noyank` | 改寫選區(不動寄存器) | `A-c` | `A-c` |  |
| `insert_mode` | 在選區前插入 | `i` |  |  |
| `append_mode` | 在選區後插入 | `a` |  |  |
| `insert_at_line_start` | 在行首插入 | `I` | `I` |  |
| `insert_at_line_end` | 在行尾插入 | `A` | `A` |  |
| `open_below` | 在下方開新行 | `o` | `o` |  |
| `open_above` | 在上方開新行 | `O` | `O` |  |
| `yank` | 複製 | `y` |  |  |
| `paste_after` | 向後粘貼 | `p` | `p` |  |
| `paste_before` | 向前粘貼 | `P` | `P` |  |
| `replace_with_yanked` | 用寄存器內容替換選區 | `R` |  |  |
| `join_selections` | 與下一行合併 | `J` | `J` |  |
| `indent` | 增加縮進 | `>` |  |  |
| `unindent` | 減少縮進 | `<` |  |  |
| `increment` | 光標處的數字加一 | `C-a` | `C-a` |  |
| `decrement` | 光標處的數字減一 | `C-x` | `C-x` |  |
| `switch_case` | 大小寫互換 | `~` `` `` `` | `~` `` g`` `` |  |
| `undo` | 撤銷 | `u` | `u` |  |
| `redo` | 重做 | `U` |  |  |
| `repeat_last_change` | 再做一次剛纔那個改動 | `.` |  |  |
| `search` | 往前搜索 | `/` `z/` `Z/` | `/` `z/` `Z/` |  |
| `rsearch` | 往後搜索 | `?` `z?` `Z?` | `?` `z?` `Z?` |  |
| `search_next` | 下一處 | `n` `zn` `Zn` | `n` `gn` `zn` `Zn` |  |
| `search_prev` | 上一處 | `N` `zN` `ZN` | `N` `gN` `zN` `ZN` |  |
| `search_selection` | 找選中的那段 | `g/` | `g/` `*` |  |
| `goto_definition` | 前往定義位置 | `gd` | `gd` |  |
| `open_here` | 打開本行寫的檔名 | `gf` | `gf` |  |
| `follow_link` | 前往光標下的鏈接位置 | `gL` | `gL` |  |
| `file_picker` | 打開文件挑選器 | `Space f` | `Space f` |  |
| `buffer_picker` | 打開緩衝區選擇器 | `Space b` | `Space b` |  |
| `next_buffer` | 切換到下一個緩衝區 | `gn` | `gn` |  |
| `prev_buffer` | 切換到上一個緩衝區 | `gp` | `gp` |  |
| `dictionary` | 字典：光標下那個字的拆分 | `Space n` | `Space n` |  |
| `next_region` | 下一個區域 | `C-w w` | `C-w w` |  |
| `search_panel` | 高級搜索面板 | `Space /` | `Space /` |  |
| `command_menu` | 所有命令 | `Space ?` | `Space ?` |  |
| `paste_menu` | 粘貼選單：挑一個寄存器 | `Space "` | `Space "` |  |
| `comment_line` | 註釋這一行 | `Space c` | `Space c` |  |
| `comment_block` | 整段註釋 | `Space C` | `Space C` |  |
| `copy_to_clipboard` | 複製到系統剪貼簿 | `Space y` | `Space y` |  |
| `paste_from_clipboard` | 從系統剪貼簿粘貼 | `Space p` | `Space p` |  |
| `move_line_up` | 上一行(文件裏的) | `gk` `g Up` | `k` `Up` `gk` `g Up` |  |
| `move_line_down` | 下一行(文件裏的) | `gj` `g Down` | `j` `Down` `gj` `g Down` |  |
| `goto_next_line_nonwhitespace` | 下一行的第一個非空白字符 |  | `Enter` |  |
| `jump_next_word_start` | 光標跳到下一個詞首(不選中) |  | `w` |  |
| `jump_next_long_word_start` | 光標跳到下一個大詞首(不選中) |  | `W` |  |
| `jump_prev_word_start` | 光標跳到上一個詞首(不選中) |  | `b` |  |
| `jump_prev_long_word_start` | 光標跳到上一個大詞首(不選中) |  | `B` |  |
| `jump_next_word_end` | 光標跳到下一個詞尾(不選中) |  | `e` |  |
| `jump_next_long_word_end` | 光標跳到下一個大詞尾(不選中) |  | `E` |  |
| `jump_next_paragraph` | 光標跳到下一段(不選中) |  | `}` |  |
| `jump_prev_paragraph` | 光標跳到上一段(不選中) |  | `{` |  |
| `move_next_paragraph` | 選到下一段 | `}` |  |  |
| `move_prev_paragraph` | 選到上一段 | `{` |  |  |
| `goto_window_top` | 屏幕最上面那一行 | `gt` | `H` `gt` |  |
| `goto_window_center` | 屏幕中間那一行 | `gc` | `M` `gc` |  |
| `goto_window_bottom` | 屏幕最下面那一行 | `gb` | `L` `gb` |  |
| `jump_prev_sentence` | 光標跳到上一句(不選中) |  | `(` |  |
| `jump_next_sentence` | 光標跳到下一句(不選中) |  | `)` |  |
| `add_mark` | 設標記(再按一個字母) | `M` | `m` |  |
| `goto_mark` | 回到標記(再按一個字母) | `'` | `'` `` ` `` |  |
| `view_mode` | 視圖組：把光標行放到屏幕頂、中、底 | `z` | `z` |  |
| `sticky_view_mode` | 視圖組(按完不收) | `Z` | `Z` |  |
| `right_bracket_mode` | ] 組：往後找下一處 | `]` | `]` |  |
| `left_bracket_mode` | [ 組：往前找上一處 | `[` | `[` |  |
| `goto_mode` | g 組：前往 | `g` | `g` |  |
| `space_mode` | 空格菜單 | `Space` | `Space` |  |
| `find_next_char` | 往後找一個字，選到它 | `f` | `f` |  |
| `find_prev_char` | 往前找一個字，選到它 | `F` | `F` |  |
| `find_till_char` | 往後找一個字，選到它前面 | `t` | `t` |  |
| `till_prev_char` | 往前找一個字，選到它後面 | `T` | `T` |  |
| `select_line_mode` | 整行選擇模式 |  | `V` |  |
| `normal_mode` | 退出延伸模式，收起臨時顯示的東西 | `Esc` | `Esc` | `Esc` |
| `repeat_find_char` | 再找一次剛纔那個字 |  | `;` |  |
| `repeat_find_char_reverse` | 反方向再找一次剛纔那個字 |  | `,` |  |
| `copy_selection_on_next_line` | 在下一行復制一個選區 | `C` | `C` |  |
| `copy_selection_on_prev_line` | 在上一行復制一個選區 | `A-C` | `A-C` |  |
| `keep_primary_selection` | 只留主選區 | `,` |  |  |
| `remove_primary_selection` | 去掉主選區 | `A-,` | `A-,` |  |
| `merge_selections` | 把所有選區合成一個 | `A--` | `A--` |  |
| `merge_consecutive_selections` | 把相連的選區合起來 | `A-_` | `A-_` |  |
| `ensure_selections_forward` | 讓每個選區都朝前 | `A-:` | `A-:` |  |
| `shrink_to_line_bounds` | 把選區縮到整行 | `A-x` | `A-x` |  |
| `split_selection_on_newline` | 按行把選區拆開 | `A-s` | `A-s` |  |
| `rotate_selections_forward` | 主選區換成下一個 | `)` |  |  |
| `rotate_selections_backward` | 主選區換成上一個 | `(` |  |  |
| `trim_selections` | 去掉每個選區兩頭的空白 | `_` | `_` |  |
| `align_selections` | 把各個選區對齊 | `&` | `&` |  |
| `rotate_selection_contents_forward` | 各選區的內容往後輪換 | `A-)` | `A-)` |  |
| `rotate_selection_contents_backward` | 各選區的內容往前輪換 | `A-(` | `A-(` |  |
| `select_regex` | 在選區裏按正則選出 | `s` | `s` |  |
| `split_selection` | 按正則把選區拆開 | `S` | `S` |  |
| `keep_selections` | 只留配得上正則的選區 | `A-k` `K` | `A-k` `K` |  |
| `remove_selections` | 去掉配得上正則的選區 | `A-K` | `A-K` |  |
| `operator_delete` | 刪除(再按一個動作) |  | `d` |  |
| `operator_change` | 改寫(再按一個動作) |  | `c` |  |
| `operator_yank` | 複製(再按一個動作) |  | `y` |  |
| `operator_indent` | 增加縮進(再按一個動作) |  | `>` |  |
| `operator_unindent` | 減少縮進(再按一個動作) |  | `<` |  |
| `delete_to_line_end` | 刪到行尾 |  | `D` |  |
| `select_inner_object` | 選中對象的裏面(再按一個對象) |  | `i` |  |
| `select_around_object` | 選中整個對象(再按一個對象) |  | `a` |  |
| `undo_line` | 撤銷這一行的所有改動 |  | `U` |  |
| `earlier` | 撤銷(和 u 一樣) | `A-u` | `A-u` |  |
| `later` | 重做(和 U 一樣) | `A-U` | `A-U` |  |
| `goto_column` | 到這一行的第幾列(用計數) |  | `\|` |  |
| `shell_pipe` | 用外部命令處理選區，換掉它 | `\|` |  |  |
| `shell_insert_output` | 把外部命令的輸出插在選區前 | `!` | `!` |  |
| `shell_append_output` | 把外部命令的輸出接在選區後 | `A-!` | `A-!` |  |
| `shell_pipe_to` | 把選區交給外部命令，不改文本 | `A-\|` | `A-\|` |  |
| `command_mode` | 命令行 | `:` | `:` |  |
| `match_mode` | 配對組：括號、引號、對象 | `m` |  |  |
| `replace` | 把選中的每個字換成另一個字 | `r` | `r` |  |
| `select_register` | 選寄存器(再按一個字母) | `"` | `"` |  |
| `record_macro` | 開始或停止錄宏 | `Q` | `Q` `q` |  |
| `replay_macro` | 回放宏 | `q` | `q` `Q` |  |
| `window_mode` | 窗口組 | `C-w` `Space w` | `C-w` `Space w` |  |
| `page_down` | 前進一頁 | `C-f` `Pagedown` `Space Space` `z C-f` `z Pagedown` `Z C-f` `Z Pagedown` | `C-f` `Pagedown` `Space Space` `z C-f` `z Pagedown` `Z C-f` `Z Pagedown` | `Pagedown` |
| `page_up` | 後退一頁 | `C-b` `Pageup` `Space Backspace` `z C-b` `z Pageup` `Z C-b` `Z Pageup` | `C-b` `Pageup` `Space Backspace` `z C-b` `z Pageup` `Z C-b` `Z Pageup` | `Pageup` |
| `join_selections_space` | 合併行並選中接縫 | `A-J` | `A-J` |  |
| `save_selection` | 把這裏記進跳轉表 | `C-s` | `C-s` |  |
| `jump_forward` | 跳轉表：再往前一處 | `Tab` | `Tab` |  |
| `two_thirds_page_down` | 前進三分之二頁 | `C-n` | `C-n` |  |
| `two_thirds_page_up` | 後退三分之二頁 | `C-p` | `C-p` |  |
| `flip_selections` | 光標換到選區另一頭 | `A-;` | `A-;` |  |
| `vim_redo` | 重做(vim 的 C-r) |  | `C-r` |  |
| `delete_char_backward` | 刪除光標前的一個字 |  | `X` | `Backspace` `C-h` |
| `case_mode` | 字形組：大小寫、繁簡 | `` ` `` | `` g` `` |  |
| `search_selection_detect_word_boundaries` | 找選中的那段(整詞) | `*` | `*` |  |
| `search_selection_exact` | 找選中的那段(原樣) | `A-*` | `A-*` |  |
| `search_word_backward` | 往回找光標下的詞 |  | `#` |  |
| `replace_mode` | 覆寫模式：打字蓋掉原文 |  | `R` |  |
| `goto_line` | 到第幾行(用計數) | `G` | `G` |  |
| `vim_repeat_last_change` | 用新的計數再做一次剛纔的改動 |  | `.` |  |
| `repeat_last_motion` | 再做一次剛纔的 f 或 t | `A-.` | `A-.` |  |
| `jump_prev_word_end` | 光標跳到上一個詞尾(不選中) |  | `ge` |  |
| `jump_prev_long_word_end` | 光標跳到上一個大詞尾(不選中) |  | `gE` |  |
| `goto_word` | 跳到當前屏幕某位置 | `gw` | `gw` |  |
| `goto_word_by_letters` | 兩字母定位單詞 | `gx` | `gx` |  |
| `goto_char_by_pinyin` | 多字母定位漢字 | `gz` | `gz` |  |
| `goto_last_accessed_file` | 回到最近打開的緩衝區 | `ga` | `ga` |  |
| `goto_definition_other_window` | 前往定義(另一窗口顯示) | `gD` | `gD` |  |
| `goto_reference` | 用到它的每一處 | `gr` | `gr` |  |
| `search_selection_other_window` | 搜索所選内容(另一窗口顯示) | `g?` | `g?` |  |
| `move_next_zong` | 竪排時到下一縱(文件裏的) |  | `gj` |  |
| `move_prev_zong` | 竪排時到上一縱(文件裏的) |  | `gk` |  |
| `goto_last_modification` | 回到最後改動的地方 | `g.` | `g.` |  |
| `reselect_last_selection` | 重選上一次那一段 |  | `gv` |  |
| `insert_at_last_insert` | 回到上次插入處繼續插入 |  | `gi` |  |
| `goto_older_change` | 往舊走一處改動 |  | `g;` |  |
| `goto_newer_change` | 往新走一處改動 |  | `g,` |  |
| `operator_lowercase` | 轉小寫(再按一個動作) |  | `gu` |  |
| `operator_uppercase` | 轉大寫(再按一個動作) |  | `gU` |  |
| `operator_switch_case` | 大小寫互換(再按一個動作) |  | `g~` |  |
| `operator_fill` | 按寬度重排，等待動作 |  | `gq` |  |
| `join_selections_no_space` | 合併下一行，不補空格 |  | `gJ` |  |
| `file_picker_in_current_directory` | 文件挑選器(工作路徑) | `Space F` | `Space F` |  |
| `file_explorer` | 瀏覽文件(項目路徑) | `Space e` | `Space e` |  |
| `file_explorer_in_current_buffer_directory` | 瀏覽文件(本文件路徑) | `Space E` | `Space E` |  |
| `changed_file_picker` | 存在改動文件 | `Space g` | `Space g` |  |
| `paste_clipboard_before` | 從系統剪貼板粘貼在前 | `Space P` | `Space P` |  |
| `replace_selections_with_clipboard` | 用系統剪貼板替換選區 | `Space R` | `Space R` |  |
| `symbol_picker` | 符號挑選器 | `Space s` | `Space s` |  |
| `workspace_symbol_picker` | 項目符號挑選器 | `Space S` | `Space S` |  |
| `dictionary_panel` | 顯示漢字信息(邊欄) | `Space N` | `Space N` |  |
| `hover` | 顯示定義文檔(浮窗) | `Space k` | `Space k` `K` |  |
| `hover_panel` | 顯示定義文檔(邊欄) | `Space K` | `Space K` |  |
| `diagnostics_picker` | 診斷挑選器 | `Space d` | `Space d` |  |
| `workspace_diagnostics_picker` | 項目診斷挑選器 | `Space D` | `Space D` |  |
| `show_diagnostic` | 顯示診斷信息(浮窗) | `Space l` | `Space l` |  |
| `show_diagnostic_panel` | 顯示診斷信息(邊欄) | `Space L` | `Space L` |  |
| `show_change` | 顯示改動(浮窗) | `Space x` | `Space x` |  |
| `show_change_panel` | 顯示改動(邊欄) | `Space X` | `Space X` |  |
| `rename_symbol` | 改名（各處一起改） | `Space r` | `Space r` |  |
| `code_action` | 代碼動作 | `Space a` | `Space a` |  |
| `show_record` | 顯示表格行記錄(浮窗) | `Space i` | `Space i` |  |
| `show_record_panel` | 顯示表格行記錄(邊欄) | `Space I` | `Space I` |  |
| `table_mode` | 表格操作 | `Space t` | `Space t` |  |
| `conflict_mode` | 合併衝突 | `Space m` | `Space m` |  |
| `open_recent_mode` | 開上次的 | `Space o` | `Space o` |  |
| `yume_mode` | 輸入法 | `Space z` | `Space z` |  |
| `goto_next_conflict` | 下一處合併衝突 | `]m` | `]m` |  |
| `goto_prev_conflict` | 上一處合併衝突 | `[m` | `[m` |  |
| `goto_next_change` | 下一處改動(git) | `]g` | `]g` |  |
| `goto_prev_change` | 上一處改動(git) | `[g` | `[g` |  |
| `goto_next_diag` | 下一條診斷 | `]d` | `]d` |  |
| `goto_prev_diag` | 上一條診斷 | `[d` | `[d` |  |
| `goto_last_diag` | 最後一條診斷 | `]D` | `]D` |  |
| `goto_first_diag` | 第一條診斷 | `[D` | `[D` |  |
| `goto_next_function` | 下一個函數 | `]f` | `]f` |  |
| `goto_prev_function` | 上一個函數 | `[f` | `[f` |  |
| `goto_next_class` | 下一個類 | `]t` | `]t` |  |
| `goto_prev_class` | 上一個類 | `[t` | `[t` |  |
| `goto_next_comment` | 下一處註釋 | `]c` | `]c` |  |
| `goto_prev_comment` | 上一處註釋 | `[c` | `[c` |  |
| `add_newline_below` | 下面加一條空行 | `]␣` | `]␣` |  |
| `add_newline_above` | 上面加一條空行 | `[␣` | `[␣` |  |
| `align_view_center` | 光標行挪到屏幕中間 | `zz` `zc` `Zz` `Zc` | `zz` `zc` `Zz` `Zc` |  |
| `align_view_top` | 光標行挪到屏幕頂上 | `zt` `Zt` | `zt` `Zt` |  |
| `align_view_bottom` | 光標行挪到屏幕底下 | `zb` `Zb` | `zb` `Zb` |  |
| `scroll_down` | 屏幕往下滾一行(光標的字不動) | `zj` `z Down` `Zj` `Z Down` | `zj` `z Down` `Zj` `Z Down` |  |
| `scroll_up` | 屏幕往上滾一行(光標的字不動) | `zk` `z Up` `Zk` `Z Up` | `zk` `z Up` `Zk` `Z Up` |  |
| `match_brackets` | 前往配對符號的另一個 | `mm` | `%` |  |
| `select_textobject_inner` | 選擇配對符號内部字符 | `mi` |  |  |
| `select_textobject_around` | 選擇配對符號和内部字符 | `ma` |  |  |
| `surround_add` | 使用配對符號包住選區 | `ms` |  |  |
| `surround_delete` | 移除配對符號 | `md` |  |  |
| `surround_replace` | 替換配對符號 | `mr` |  |  |
| `jump_view_left` | 去左邊那一區 | `C-w h` `C-w Left` | `C-w h` `C-w Left` |  |
| `jump_view_down` | 去下面那一區 | `C-w j` `C-w Down` | `C-w j` `C-w Down` |  |
| `jump_view_up` | 去上面那一區 | `C-w k` `C-w Up` | `C-w k` `C-w Up` |  |
| `jump_view_right` | 去右邊那一區 | `C-w l` `C-w Right` | `C-w l` `C-w Right` |  |
| `toggle_left_sidebar` | 開關左欄 | `C-w e` | `C-w e` |  |
| `toggle_right_sidebar` | 開關右欄 | `C-w i` | `C-w i` |  |
| `goto_left_sidebar` | 進左欄 | `C-w E` | `C-w E` |  |
| `goto_right_sidebar` | 進右欄 | `C-w I` | `C-w I` |  |
| `hsplit` | 下面開一個窗口 | `C-w s` | `C-w s` |  |
| `vsplit` | 旁邊開一個窗口 | `C-w v` | `C-w v` |  |
| `hsplit_new` | 下面開一個空白窗口 | `C-w n s` | `C-w n` `C-w n s` |  |
| `vsplit_new` | 旁邊開一個空白窗口 | `C-w n v` | `C-w n v` |  |
| `window_new_mode` | 空白窗口組：s 下面，v 旁邊 | `C-w n` | `C-w n` |  |
| `wclose` | 關掉這一區 | `C-w q` | `C-w q` |  |
| `wonly` | 只留這一區 | `C-w o` | `C-w o` |  |
| `switch_to_lowercase` | 轉小寫 | `` `l `` | `` g`l `` |  |
| `switch_to_uppercase` | 轉大寫 | `` `u `` | `` g`u `` |  |
| `convert_to_simplified` | 繁→簡 | `` `s `` | `` g`s `` |  |
| `convert_to_traditional` | 簡→繁 | `` `t `` | `` g`t `` |  |
| `convert_to_taiwan_traditional` | 簡→臺灣繁 | `` `w `` | `` g`w `` |  |
| `convert_to_hong_kong_traditional` | 簡→香港繁 | `` `k `` | `` g`k `` |  |
| `convert_to_mainland_traditional` | 簡→大陸繁 | `` `c `` | `` g`c `` |  |
| `convert_to_classical_traditional` | 簡→古籍繁 | `` `g `` | `` g`g `` |  |
| `convert_to_japanese` | 繁→日文新字體 | `` `j `` | `` g`j `` |  |
| `switch_to_halfwidth` | 轉半角 | `` `h `` | `` g`h `` |  |
| `switch_to_fullwidth` | 轉全角 | `` `f `` | `` g`f `` |  |
| `conflict_keep_ours` | 只留我方 | `Space m o` | `Space m o` |  |
| `conflict_keep_theirs` | 只留他方 | `Space m t` | `Space m t` |  |
| `conflict_keep_both` | 兩方都留 | `Space m b` | `Space m b` |  |
| `recent_file_picker` | 最近開過的檔 | `Space o f` | `Space o f` |  |
| `global_recent_file_picker` | 最近開過的檔(全部項目) | `Space o g` | `Space o g` |  |
| `project_picker` | 最近開過的項目 | `Space o p` | `Space o p` |  |
| `resume_session` | 接着上次 | `Space o r` | `Space o r` |  |
| `yume_toggle` | 輸入法開/關 | `Space z z` | `Space z z` |  |
| `yume_commit_mode` | 上屏方式 | `Space z m` | `Space z m` |  |
| `yume_panel_mode` | 候選欄畫在哪 | `Space z p` | `Space z p` |  |
| `yume_preedit_mode` | 正在打的那一段寫在哪 | `Space z e` | `Space z e` |  |
| `yume_toggle_prediction` | 輸入預測 開/關 | `Space z y` | `Space z y` |  |
| `yume_pick_scheme` | 選方案 | `Space z i` | `Space z i` |  |
| `yume_next_scheme` | 下一個方案 | `Space z n` | `Space z n` |  |
| `yume_menu_size_3` | 候選欄一頁 3 條 | `Space z 3` | `Space z 3` |  |
| `yume_menu_size_4` | 候選欄一頁 4 條 | `Space z 4` | `Space z 4` |  |
| `yume_menu_size_5` | 候選欄一頁 5 條 | `Space z 5` | `Space z 5` |  |
| `yume_menu_size_6` | 候選欄一頁 6 條 | `Space z 6` | `Space z 6` |  |
| `yume_menu_size_7` | 候選欄一頁 7 條 | `Space z 7` | `Space z 7` |  |
| `yume_menu_size_8` | 候選欄一頁 8 條 | `Space z 8` | `Space z 8` |  |
| `yume_menu_size_9` | 候選欄一頁 9 條 | `Space z 9` | `Space z 9` |  |
| `yume_toggle_chaifen` | 候選旁的拆分注解 | `Space z /` | `Space z /` |  |
| `yume_installed_table` | 改用安裝版碼表 | `Space z t` | `Space z t` |  |
| `yume_table_source` | 查看碼表源 | `Space z w` | `Space z w` |  |
| `yume_data_location` | 查看數據位置 | `Space z W` | `Space z W` |  |
| `yume_commit_default` | 預設——方案自己說了算 | `Space z m 0` | `Space z m 0` |  |
| `yume_commit_delayed` | 頂字 | `Space z m d` | `Space z m d` |  |
| `yume_commit_unique` | 唯一 | `Space z m u` | `Space z m u` |  |
| `yume_commit_fluency` | 整句 | `Space z m f` | `Space z m f` |  |
| `yume_panel_box` | box——光標旁的框 | `Space z p b` | `Space z p b` |  |
| `yume_panel_bottom` | bottom——窗口最下面那一行 | `Space z p m` | `Space z p m` |  |
| `yume_panel_inline` | inline——光標的下一行 | `Space z p i` | `Space z p i` |  |
| `yume_preedit_off` | off——寫在候選欄裏 | `Space z e o` | `Space z e o` |  |
| `yume_preedit_composition` | composition——正文裏寫編碼 | `Space z e c` | `Space z e c` |  |
| `yume_preedit_preview` | preview——正文裏寫首選 | `Space z e p` | `Space z e p` |  |
| `table_source_view` | 源碼視圖(顯示源碼) | `Space t o` | `Space t o` |  |
| `table_basic_view` | 基本視圖(表格按列對齊) | `Space t b` | `Space t b` |  |
| `table_window_view` | 全窗視圖(表格獨佔窗口) | `Space t t` | `Space t t` |  |
| `table_leave_window` | 退出全窗視圖 | `Space t q` | `Space t q` |  |
| `goto_next_table` | 下一張表 | `Space t ]` | `Space t ]` |  |
| `goto_prev_table` | 上一張表 | `Space t [` | `Space t [` |  |
| `table_convert_mode` | 轉換表格格式(分隔符) | `Space t x` | `Space t x` |  |
| `table_cell_width` | 長單元格:換行/摺疊/全文 | `Space t w` | `Space t w` |  |
| `table_search_columns` | 按列搜索(可指定列範圍) | `Space t /` | `Space t /` |  |
| `table_search_columns_other_window` | 按列搜索(另一窗口顯示) | `Space t ?` | `Space t ?` |  |
| `table_goto_cell` | 去某一格(␣t 20,20g) | `Space t g` | `Space t g` |  |
| `table_yank_column` | 複製這一欄 | `Space t y` | `Space t y` |  |
| `table_replace_column` | 用複製的欄蓋掉該欄 | `Space t v` | `Space t v` |  |
| `table_paste_column_right` | 把複製的欄貼到右邊 | `Space t p` | `Space t p` |  |
| `table_paste_column_left` | 把複製的欄貼到左邊 | `Space t P` | `Space t P` |  |
| `table_add_row_below` | 下面插入新行 | `Space t r` | `Space t r` |  |
| `table_add_row_above` | 上面插入新行 | `Space t R` | `Space t R` |  |
| `table_add_column_right` | 右邊加一欄 | `Space t c` | `Space t c` |  |
| `table_add_column_left` | 左邊加一欄 | `Space t C` | `Space t C` |  |
| `table_delete_row` | 删除這一行 | `Space t d` | `Space t d` |  |
| `table_delete_column` | 删除這一欄 | `Space t D` | `Space t D` |  |
| `table_move_row_down` | 這行下移 | `Space t j` | `Space t j` |  |
| `table_move_row_up` | 這行上移 | `Space t k` | `Space t k` |  |
| `table_move_column_left` | 這欄左移 | `Space t h` | `Space t h` |  |
| `table_move_column_right` | 這欄右移 | `Space t l` | `Space t l` |  |
| `table_align_left` | 這欄靠左 | `Space t <` | `Space t <` |  |
| `table_align_center` | 這欄居中 | `Space t =` | `Space t =` |  |
| `table_align_right` | 這欄靠右 | `Space t >` | `Space t >` |  |
| `table_line_up` | 重排對齊 | `Space t F` | `Space t F` |  |
| `table_record_panel` | 該行記錄 | `Space t i` | `Space t i` |  |
| `table_first_row_is_data` | 表格第一行是否為標題 | `Space t H` | `Space t H` |  |
| `table_sort_ascending` | 按列升序排列(␣t1s) | `Space t s` | `Space t s` |  |
| `table_sort_descending` | 按列降序排列(␣t1S) | `Space t S` | `Space t S` |  |
| `convert_table_to_pipe` | 表格轉成 pipe | `Space t x p` | `Space t x p` |  |
| `paste_table_as_pipe` | 剪貼板貼成 pipe 表格 | `Space t x P` | `Space t x P` |  |
| `convert_table_to_csv` | 表格轉成 csv | `Space t x c` | `Space t x c` |  |
| `paste_table_as_csv` | 剪貼板貼成 csv 表格 | `Space t x C` | `Space t x C` |  |
| `convert_table_to_tsv` | 表格轉成 tsv | `Space t x t` | `Space t x t` |  |
| `paste_table_as_tsv` | 剪貼板貼成 tsv 表格 | `Space t x T` | `Space t x T` |  |
| `no_op` | 什麽都不做(綁上它就是解綁那個鍵) |  |  |  |
| `extend_char_left` | 選區向左撑一個字 | `h` `Left` | `h` `Left` |  |
| `extend_char_right` | 選區向右撑一個字 | `l` `Right` | `l` `Right` |  |
| `extend_visual_line_up` | 選區撑到上一行(屏幕上的) | `k` `Up` |  |  |
| `extend_visual_line_down` | 選區撑到下一行(屏幕上的) | `j` `Down` |  |  |
| `extend_line_up` | 選區撑到上一行(文件裏的) | `gk` | `gk` |  |
| `extend_line_down` | 選區撑到下一行(文件裏的) | `gj` | `gj` |  |
| `extend_next_word_start` | 選區撑到下一個詞首 | `w` |  |  |
| `extend_prev_word_start` | 選區撑到上一個詞首 | `b` |  |  |
| `extend_next_word_end` | 選區撑到下一個詞尾 | `e` |  |  |
| `extend_next_long_word_start` | 選區撑到下一個大詞首 | `W` |  |  |
| `extend_prev_long_word_start` | 選區撑到上一個大詞首 | `B` |  |  |
| `extend_next_long_word_end` | 選區撑到下一個大詞尾 | `E` |  |  |
| `extend_search_next` | 下一處也選上(多一個選區) | `n` | `n` |  |
| `extend_search_prev` | 上一處也選上(多一個選區) | `N` | `N` |  |
| `extend_till_char` | 選區往後撑到某個字前面 | `t` | `t` |  |
| `extend_next_char` | 選區往後撑到某個字 | `f` | `f` |  |
| `extend_till_prev_char` | 選區往前撑到某個字後面 | `T` | `T` |  |
| `extend_prev_char` | 選區往前撑到某個字 | `F` | `F` |  |
| `extend_to_line_start` | 選區撑到行首 | `Home` | `Home` |  |
| `extend_to_line_end` | 選區撑到行尾 | `End` | `End` |  |
| `extend_to_file_start` | 選區撑到文件開頭 | `gg` | `gg` |  |
| `extend_to_file_end` | 選區撑到文件末尾 | `ge` | `ge` |  |
| `extend_to_word` | 選區撑到屏幕上某個位置(標籤) | `gw` | `gw` |  |
| `insert_newline` | 換行(帶上縮進、列表記號) |  |  | `Enter` |
| `delete_char_forward` | 刪除光標後的一個字 |  |  | `Delete` `C-d` |
| `delete_word_forward` | 刪除光標後的一個詞 |  |  | `A-d` |
| `delete_word_backward` | 刪除光標前的一個詞 |  |  | `C-w` |
| `kill_to_line_start` | 刪到行首 |  |  | `C-u` |
| `kill_to_line_end` | 刪到行尾(插入模式) |  |  | `C-k` |
| `insert_register` | 插入寄存器的內容(再按一個字母) |  |  | `C-r` |
| `run_one_normal_command` | 臨時回普通模式做一件事(vim 的 C-o) |  |  | `C-o` |
| `goto_line_end_newline` | 到行尾(最後一個字後面) |  |  | `End` `C-e` |
| `commit_undo_checkpoint` | 在這裏斷開撤銷 |  |  | `C-g` |
| `insert_tab` | 插入縮進(文件用的那一種) |  |  | `Tab` |
| `insert_other_tab` | 插入另一種縮進(Tab 或空格) |  |  | `S-tab` |

### vim keys that play other keys

| Key | Plays |
| --- | --- |
| `+` | `@jgs` |
| `-` | `@kgs` |
| `Y` | `@y$` |
| `ZZ` | `:x` |
| `ZQ` | `:quit!` |
