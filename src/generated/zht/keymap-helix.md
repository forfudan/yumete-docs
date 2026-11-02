<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 在選區後插入 | `append_mode` |
| `A` | 在行尾插入 | `insert_at_line_end` |
| `b` | 上一個詞首 | `move_prev_word_start` |
| `B` | 上一個大詞首 | `move_prev_long_word_start` |
| `c` | 剪切後改寫 | `change_selection` |
| `C` | 在下一行復制一個選區 | `copy_selection_on_next_line` |
| `d` | 剪切選區(進寄存器) | `delete_selection` |
| `e` | 下一個詞尾 | `move_next_word_end` |
| `E` | 下一個大詞尾 | `move_next_long_word_end` |
| `f` | 往後找一個字，選到它 | `find_next_char` |
| `F` | 往前找一個字，選到它 | `find_prev_char` |
| `g` | g 組：前往 | `goto_mode` |
| `G` | 到第幾行(用計數) | `goto_line` |
| `h` `Left` | 左一個字 | `move_char_left` |
| `i` | 在選區前插入 | `insert_mode` |
| `I` | 在行首插入 | `insert_at_line_start` |
| `j` `Down` | 下一行(屏幕上的) | `move_visual_line_down` |
| `J` | 與下一行合併 | `join_selections` |
| `k` `Up` | 上一行(屏幕上的) | `move_visual_line_up` |
| `K` | 只留配得上正則的選區 | `keep_selections` |
| `l` `Right` | 右一個字 | `move_char_right` |
| `m` | 配對組：括號、引號、對象 | `match_mode` |
| `n` | 下一處 | `search_next` |
| `N` | 上一處 | `search_prev` |
| `o` | 在下方開新行 | `open_below` |
| `O` | 在上方開新行 | `open_above` |
| `p` | 向後粘貼 | `paste_after` |
| `P` | 向前粘貼 | `paste_before` |
| `q` | 回放宏 | `replay_macro` |
| `Q` | 開始或停止錄宏 | `record_macro` |
| `r` | 把選中的每個字換成另一個字 | `replace` |
| `R` | 用寄存器內容替換選區 | `replace_with_yanked` |
| `s` | 在選區裏按正則選出 | `select_regex` |
| `S` | 按正則把選區拆開 | `split_selection` |
| `t` | 往後找一個字，選到它前面 | `find_till_char` |
| `T` | 往前找一個字，選到它後面 | `till_prev_char` |
| `u` | 撤銷 | `undo` |
| `U` | 重做 | `redo` |
| `v` | 延伸模式：移動把選區撑大 | `select_mode` |
| `w` | 下一個詞首 | `move_next_word_start` |
| `W` | 下一個大詞首(按空格分) | `move_next_long_word_start` |
| `x` | 選中當前行 | `extend_line_below` |
| `X` | 把選區撑到整行邊界 | `extend_to_line_bounds` |
| `y` | 複製 | `yank` |
| `z` | 視圖組：把光標行放到屏幕頂、中、底 | `view_mode` |
| `Z` | 視圖組(按完不收) | `sticky_view_mode` |
| `Space` | 空格菜單 | `space_mode` |
| `!` | 把外部命令的輸出插在選區前 | `shell_insert_output` |
| `"` | 選寄存器(再按一個字母) | `select_register` |
| `$` | 只留下終端命令通過的選區 | `shell_keep_pipe` |
| `%` | 選中整個文件 | `select_all` |
| `&` | 把各個選區對齊 | `align_selections` |
| `(` | 主選區換成上一個 | `rotate_selections_backward` |
| `)` | 主選區換成下一個 | `rotate_selections_forward` |
| `*` | 找選中的那段(整詞) | `search_selection_detect_word_boundaries` |
| `,` | 只留主選區 | `keep_primary_selection` |
| `.` | 再做一次剛纔那個改動 | `repeat_last_change` |
| `/` | 往前搜索 | `search` |
| `:` | 命令行 | `command_mode` |
| `;` | 選區收回光標 | `collapse_selection` |
| `<` | 減少縮進 | `unindent` |
| `=` | 用語言服務器排版選區 | `format_selections` |
| `>` | 增加縮進 | `indent` |
| `?` | 往後搜索 | `rsearch` |
| `[` | [ 組：往前找上一處 | `left_bracket_mode` |
| `]` | ] 組：往後找下一處 | `right_bracket_mode` |
| `_` | 去掉每個選區兩頭的空白 | `trim_selections` |
| `` ` `` | 轉小寫 | `switch_to_lowercase` |
| `{` | 選到上一段 | `move_prev_paragraph` |
| `\|` | 用外部命令處理選區，換掉它 | `shell_pipe` |
| `}` | 選到下一段 | `move_next_paragraph` |
| `~` | 大小寫互換 | `switch_case` |
| `C-a` | 光標處的數字加一 | `increment` |
| `C-b` `PageUp` | 後退一頁 | `page_up` |
| `C-c` | 註釋這一行 | `toggle_comments` |
| `C-d` | 前進半頁 | `page_cursor_half_down` |
| `C-f` `PageDown` | 前進一頁 | `page_down` |
| `C-i` `Tab` | 跳轉表：再往前一處 | `jump_forward` |
| `C-o` | 跳轉表：回到剛纔那個位置 | `jump_backward` |
| `C-s` | 把這裏記進跳轉表 | `save_selection` |
| `C-u` | 後退半頁 | `page_cursor_half_up` |
| `C-w` | 窗口組 | `window_mode` |
| `C-x` | 光標處的數字減一 | `decrement` |
| `C-z` | 暫停，回到終端；fg 回來 | `suspend` |
| `A-!` | 把外部命令的輸出接在選區後 | `shell_append_output` |
| `A-(` | 各選區的內容往前輪換 | `rotate_selection_contents_backward` |
| `A-)` | 各選區的內容往後輪換 | `rotate_selection_contents_forward` |
| `A-*` | 找選中的那段(原樣) | `search_selection_exact` |
| `A-,` | 去掉主選區 | `remove_primary_selection` |
| `A--` | 把所有選區合成一個 | `merge_selections` |
| `A-.` | 再做一次剛纔的 f 或 t | `repeat_last_motion` |
| `A-:` | 讓每個選區都朝前 | `ensure_selections_forward` |
| `A-;` | 光標換到選區另一頭 | `flip_selections` |
| `A-_` | 把相連的選區合起來 | `merge_consecutive_selections` |
| `` A-` `` | 轉大寫 | `switch_to_uppercase` |
| `A-a` | 選中同一層的每一個節點 | `select_all_siblings` |
| `A-b` | 到光標所在節點的開頭，再按到上一層的 | `move_parent_node_start` |
| `A-c` | 改寫選區(不動寄存器) | `change_selection_noyank` |
| `A-C` | 在上一行復制一個選區 | `copy_selection_on_prev_line` |
| `A-d` | 删除選區(不動寄存器) | `delete_selection_noyank` |
| `A-e` | 到光標所在節點的末尾 | `move_parent_node_end` |
| `A-i` | 選區縮回去，或縮到第一個子節點 | `shrink_selection` |
| `A-I` | 選中裏面的每一個節點 | `select_all_children` |
| `A-J` | 合併行並選中接縫 | `join_selections_space` |
| `A-K` | 去掉配得上正則的選區 | `remove_selections` |
| `A-n` | 選下一個語法節點 | `select_next_sibling` |
| `A-o` | 選區擴到外面那一層語法節點 | `expand_selection` |
| `A-p` | 選上一個語法節點 | `select_prev_sibling` |
| `A-s` | 按行把選區拆開 | `split_selection_on_newline` |
| `A-u` | 撤銷(和 u 一樣) | `earlier` |
| `A-U` | 重做(和 U 一樣) | `later` |
| `A-x` | 把選區縮到整行 | `shrink_to_line_bounds` |
| `A-\|` | 把選區交給外部命令，不改文本 | `shell_pipe_to` |
| `Esc` | 退出延伸模式，收起臨時顯示的東西 | `normal_mode` |
| `Home` | 行首 | `goto_line_start` |
| `End` | 行尾 | `goto_line_end` |

## Select mode

| Key | What it does | Command |
| --- | --- | --- |
| `b` | 選區撑到上一個詞首 | `extend_prev_word_start` |
| `B` | 選區撑到上一個大詞首 | `extend_prev_long_word_start` |
| `e` | 選區撑到下一個詞尾 | `extend_next_word_end` |
| `E` | 選區撑到下一個大詞尾 | `extend_next_long_word_end` |
| `f` | 選區往後撑到某個字 | `extend_next_char` |
| `F` | 選區往前撑到某個字 | `extend_prev_char` |
| `h` `Left` | 選區向左撑一個字 | `extend_char_left` |
| `j` `Down` | 選區撑到下一行(屏幕上的) | `extend_visual_line_down` |
| `k` `Up` | 選區撑到上一行(屏幕上的) | `extend_visual_line_up` |
| `l` `Right` | 選區向右撑一個字 | `extend_char_right` |
| `n` | 下一處也選上(多一個選區) | `extend_search_next` |
| `N` | 上一處也選上(多一個選區) | `extend_search_prev` |
| `t` | 選區往後撑到某個字前面 | `extend_till_char` |
| `T` | 選區往前撑到某個字後面 | `extend_till_prev_char` |
| `w` | 選區撑到下一個詞首 | `extend_next_word_start` |
| `W` | 選區撑到下一個大詞首 | `extend_next_long_word_start` |
| `A-b` | 選區延到所在節點的開頭 | `extend_parent_node_start` |
| `A-e` | 選區延到所在節點的末尾 | `extend_parent_node_end` |
| `Home` | 選區撑到行首 | `extend_to_line_start` |
| `End` | 選區撑到行尾 | `extend_to_line_end` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` | 退出延伸模式，收起臨時顯示的東西 | `normal_mode` |
| `Enter` `C-j` | 換行(帶上縮進、列表記號) | `insert_newline` |
| `Backspace` `C-h` | 刪除光標前的一個字 | `delete_char_backward` |
| `Delete` `C-d` | 刪除光標後的一個字 | `delete_char_forward` |
| `A-d` | 刪除光標後的一個詞 | `delete_word_forward` |
| `C-w` | 刪除光標前的一個詞 | `delete_word_backward` |
| `C-u` | 刪到行首 | `kill_to_line_start` |
| `C-k` | 刪到行尾(插入模式) | `kill_to_line_end` |
| `C-r` | 插入寄存器的內容(再按一個字母) | `insert_register` |
| `Left` | 左一個字 | `move_char_left` |
| `Right` | 右一個字 | `move_char_right` |
| `Up` | 上一行(屏幕上的) | `move_visual_line_up` |
| `Down` | 下一行(屏幕上的) | `move_visual_line_down` |
| `PageUp` | 後退一頁 | `page_up` |
| `PageDown` | 前進一頁 | `page_down` |
| `Home` | 行首 | `goto_line_start` |
| `End` | 到行尾(最後一個字後面) | `goto_line_end_newline` |
| `Tab` `S-Tab` | 插入縮進(文件用的那一種) | `insert_tab` |

## 空格 (`Space`)

| Key | What it does |
| --- | --- |
| `Space f` | 文件挑選器(項目路徑) |
| `Space F` | 文件挑選器(工作路徑) |
| `Space e` | 瀏覽文件(項目路徑) |
| `Space b` | 緩衝區挑選器 |
| `Space j` | 跳轉列表 |
| `Space '` | 上一個挑選器 |
| `Space g` | 存在改動文件 |
| `Space y` | 複製到系統剪貼板 |
| `Space Y` | 主選區複製到系統剪貼板 |
| `Space p` | 從系統剪貼板粘貼 |
| `Space P` | 從系統剪貼板粘貼在前 |
| `Space R` | 用系統剪貼板替換選區 |
| `Space s` | 符號挑選器 |
| `Space S` | 項目符號挑選器 |
| `Space k` | 顯示定義文檔(浮窗) |
| `Space d` | 診斷挑選器 |
| `Space D` | 項目診斷挑選器 |
| `Space r` | 改名（各處一起改） |
| `Space h` | 選中本檔裏的每一處 |
| `Space a` | 代碼動作 |
| `Space w` | 工作區域操作 |
| `Space c` | 行注釋 |
| `Space C` | 塊注釋 |
| `Space /` | 搜索面板 |
| `Space ?` | 命令一覽 |

## g 前往 (`g`)

| Key | What it does |
| --- | --- |
| `gg` | 文件開頭 |
| `g<N>g` | 前往第 N 行 |
| `ge` | 最後一行 |
| `gh / gl` | 行首/行尾 |
| `gs` | 首個非空白字符 |
| `gf` | 打開這個文件 |
| `gw` | 跳到當前屏幕某位置 |
| `ga` | 回到最近打開的緩衝區 |
| `gn / gp` | 下/上一個緩衝區 |
| `gd` | 前往定義 |
| `gD` | 跳到聲明 |
| `gy` | 跳到類型定義 |
| `gi` | 跳到實現 |
| `gm` | 最近改過的文件 |
| `gr` | 用到它的每一處 |
| `gj / gk` | 下/上一邏輯行 |
| `g.` | 回到最後改動的地方 |
| `gt / gc / gb` | 光標移至屏幕頂部/中部/底部 |

## m (`m`)

| Key | What it does |
| --- | --- |
| `mm` | 前往配對符號的另一個 |
| `mi` | 選擇配對符號内部字符 |
| `ma` | 選擇配對符號和内部字符 |
| `ms` | 使用配對符號包住選區 |
| `md` | 移除配對符號 |
| `mr` | 替換配對符號 |

## 下一個 (`]`)

| Key | What it does |
| --- | --- |
| `]g / ]G` | 改動(大寫：第一處/最後一處) |
| `]d / ]D` | 診斷(大寫：第一個/最後一個) |
| `]f` | 函數 |
| `]t` | 類 |
| `]c` | 註釋 |
| `]a` | 參數 |
| `]e` | 條目 |
| `]T` | 測試 |
| `]x` | XML 元素 |
| `]p` | 下一段 |
| `]␣` | 下面加一條空行 |

## 上一個 (`[`)

| Key | What it does |
| --- | --- |
| `[g / [G` | 改動(大寫：第一處/最後一處) |
| `[d / [D` | 診斷(大寫：第一個/最後一個) |
| `[f` | 函數 |
| `[t` | 類 |
| `[c` | 註釋 |
| `[a` | 參數 |
| `[e` | 條目 |
| `[T` | 測試 |
| `[x` | XML 元素 |
| `[p` | 上一段 |
| `[␣` | 上面加一條空行 |

## 這一行挪到哪 (`z`)

| Key | What it does |
| --- | --- |
| `zz` | 中間 |
| `zt` | 頂上 |
| `zb` | 底下 |

## 工作區域操作 (`C-w`, `Space w`)

| Key | What it does |
| --- | --- |
| `C-w w` | 下一個 |
| `C-w h / C-w j / C-w k / C-w l` | 按方向走 |
| `C-w s` | 下面開一個窗口 |
| `C-w v` | 旁邊開一個窗口 |
| `C-w n` | 開一個空白窗口 |
| `C-w q` | 關掉這一區 |
| `C-w o` | 只留這一區 |
| `C-w t` | 並排與上下互換 |
| `C-w H / C-w J / C-w K / C-w L` | 和那個方向的對調 |
| `C-w f` | 在下面打開光標下的文件 |
| `C-w F` | 在旁邊打開光標下的文件 |

## 開一個空白窗口 (`C-w n`, `Space w n`)

| Key | What it does |
| --- | --- |
| `C-w n s` | 下面開一個空白窗口 |
| `C-w n v` | 旁邊開一個空白窗口 |

