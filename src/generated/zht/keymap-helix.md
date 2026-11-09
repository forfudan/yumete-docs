<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 在選區後插入 | `append_mode` |
| `A` | 在行尾插入 | `insert_at_line_end` |
| `b` | 上一個詞首 | `move_prev_word_start` |
| `B` | 上一個大詞首 | `move_prev_long_word_start` |
| `c` | 剪切後改寫 | `change_selection` |
| `C` | 在下一行加一個選區 | `copy_selection_on_next_line` |
| `d` | 剪切選區 | `delete_selection` |
| `e` | 下一個詞尾 | `move_next_word_end` |
| `E` | 下一個大詞尾 | `move_next_long_word_end` |
| `f` | 往後找一個字，選到它 | `find_next_char` |
| `F` | 往前找一個字，選到它 | `find_prev_char` |
| `g` | g 組：跳轉 | `goto_mode` |
| `G` | 到第 N 行(用計數) | `goto_line` |
| `h` `Left` | 左一個字 | `move_char_left` |
| `i` | 在選區前插入 | `insert_mode` |
| `I` | 在行首插入 | `insert_at_line_start` |
| `j` `Down` | 下一行(屏幕上的) | `move_visual_line_down` |
| `J` | 與下一行合併 | `join_selections` |
| `k` `Up` | 上一行(屏幕上的) | `move_visual_line_up` |
| `K` | 只保留匹配正則的選區 | `keep_selections` |
| `l` `Right` | 右一個字 | `move_char_right` |
| `m` | 配對組：括號、引號、對象 | `match_mode` |
| `n` | 下一處 | `search_next` |
| `N` | 上一處 | `search_prev` |
| `o` | 在下方開新行 | `open_below` |
| `O` | 在上方開新行 | `open_above` |
| `p` | 向後粘貼 | `paste_after` |
| `P` | 向前粘貼 | `paste_before` |
| `q` | 回放宏 | `replay_macro` |
| `Q` | 開始或停止録宏 | `record_macro` |
| `r` | 把選中的每個字換成另一個字 | `replace` |
| `R` | 用寄存器内容替換選區 | `replace_with_yanked` |
| `s` | 在選區内按正則選擇 | `select_regex` |
| `S` | 按正則拆分選區 | `split_selection` |
| `t` | 往後找一個字，選到它前面 | `find_till_char` |
| `T` | 往前找一個字，選到它後面 | `till_prev_char` |
| `u` | 撤銷 | `undo` |
| `U` | 重做 | `redo` |
| `v` | 選擇模式：移動時擴大選區 | `select_mode` |
| `w` | 下一個詞首 | `move_next_word_start` |
| `W` | 下一個大詞首(按空格分) | `move_next_long_word_start` |
| `x` | 選中當前行 | `extend_line_below` |
| `X` | 選區擴到整行 | `extend_to_line_bounds` |
| `y` | 複製 | `yank` |
| `z` | 視圖組：定位光標行、滚屏、摺疊 | `view_mode` |
| `Z` | 視圖組(常駐) | `sticky_view_mode` |
| `Space` | 空格菜單 | `space_mode` |
| `!` | 把外部命令的輸出插在選區前 | `shell_insert_output` |
| `"` | 選寄存器(再按一個字母) | `select_register` |
| `$` | 只保留終端命令執行成功的選區 | `shell_keep_pipe` |
| `%` | 全選 | `select_all` |
| `&` | 對齊各選區 | `align_selections` |
| `(` | 主選區換成上一個 | `rotate_selections_backward` |
| `)` | 主選區換成下一個 | `rotate_selections_forward` |
| `*` | 搜索選中内容(整詞) | `search_selection_detect_word_boundaries` |
| `,` | 只留主選區 | `keep_primary_selection` |
| `.` | 重複上次輸入(vim 鍵位：上次改動) | `repeat_last_change` |
| `/` | 搜索 | `search` |
| `:` | 命令行 | `command_mode` |
| `;` | 選區收成光標 | `collapse_selection` |
| `<` | 減少縮進 | `unindent` |
| `=` | 用語言服務器格式化選區 | `format_selections` |
| `>` | 增加縮進 | `indent` |
| `?` | 反向搜索 | `rsearch` |
| `[` | [ 組：跳到上一個 | `left_bracket_mode` |
| `]` | ] 組：跳到下一個 | `right_bracket_mode` |
| `_` | 去掉每個選區兩頭的空白 | `trim_selections` |
| `` ` `` | 轉小寫 | `switch_to_lowercase` |
| `{` | 選到上一段 | `move_prev_paragraph` |
| `\|` | 用外部命令處理選區並替換 | `shell_pipe` |
| `}` | 選到下一段 | `move_next_paragraph` |
| `~` | 大小寫互換 | `switch_case` |
| `C-a` | 光標處的數字加一 | `increment` |
| `C-b` `PageUp` | 向上翻頁 | `page_up` |
| `C-c` | 行註釋 | `toggle_comments` |
| `C-d` | 向下翻半頁 | `page_cursor_half_down` |
| `C-f` `PageDown` | 向下翻頁 | `page_down` |
| `C-i` `Tab` | 跳轉表：前進 | `jump_forward` |
| `C-o` | 跳轉表：後退 | `jump_backward` |
| `C-s` | 把當前位置記入跳轉表 | `save_selection` |
| `C-u` | 向上翻半頁 | `page_cursor_half_up` |
| `C-w` | 窗口組 | `window_mode` |
| `C-x` | 光標處的數字減一 | `decrement` |
| `C-z` | 掛起到終端；fg 返回 | `suspend` |
| `A-!` | 把外部命令的輸出接在選區後 | `shell_append_output` |
| `A-(` | 各選區的内容往前輪換 | `rotate_selection_contents_backward` |
| `A-)` | 各選區的内容往後輪換 | `rotate_selection_contents_forward` |
| `A-*` | 搜索選中内容(原樣) | `search_selection_exact` |
| `A-,` | 去掉主選區 | `remove_primary_selection` |
| `A--` | 合併所有選區 | `merge_selections` |
| `A-.` | 重複上次的 f 或 t | `repeat_last_motion` |
| `A-:` | 讓每個選區都朝前 | `ensure_selections_forward` |
| `A-;` | 光標換到選區另一頭 | `flip_selections` |
| `A-_` | 合併相鄰的選區 | `merge_consecutive_selections` |
| `` A-` `` | 轉大寫 | `switch_to_uppercase` |
| `A-a` | 選中所有同級節點 | `select_all_siblings` |
| `A-b` | 到所在節點開頭，再按到上一層 | `move_parent_node_start` |
| `A-c` | 改寫選區(不進寄存器) | `change_selection_noyank` |
| `A-C` | 在上一行加一個選區 | `copy_selection_on_prev_line` |
| `A-d` | 删除選區(不進寄存器) | `delete_selection_noyank` |
| `A-e` | 到所在節點的末尾 | `move_parent_node_end` |
| `A-i` | 縮小選區，或縮到第一個子節點 | `shrink_selection` |
| `A-I` | 選中所有子節點 | `select_all_children` |
| `A-J` | 合併行並選中連接處 | `join_selections_space` |
| `A-K` | 去掉匹配正則的選區 | `remove_selections` |
| `A-n` | 選中下一個同級節點 | `select_next_sibling` |
| `A-o` | 選區擴到外層語法節點 | `expand_selection` |
| `A-p` | 選中上一個同級節點 | `select_prev_sibling` |
| `A-s` | 按行拆分選區 | `split_selection_on_newline` |
| `A-u` | 撤銷(同 u) | `earlier` |
| `A-U` | 重做(同 U) | `later` |
| `A-x` | 把選區縮到整行 | `shrink_to_line_bounds` |
| `A-\|` | 把選區傳給外部命令，不改文本 | `shell_pipe_to` |
| `Esc` | 退出選擇模式，收起臨時顯示的内容 | `normal_mode` |
| `Home` | 行首 | `goto_line_start` |
| `End` | 行尾 | `goto_line_end` |

## Select mode

| Key | What it does | Command |
| --- | --- | --- |
| `b` | 選區擴到上一個詞首 | `extend_prev_word_start` |
| `B` | 選區擴到上一個大詞首 | `extend_prev_long_word_start` |
| `e` | 選區擴到下一個詞尾 | `extend_next_word_end` |
| `E` | 選區擴到下一個大詞尾 | `extend_next_long_word_end` |
| `f` | 選區向後擴到某個字 | `extend_next_char` |
| `F` | 選區向前擴到某個字 | `extend_prev_char` |
| `h` `Left` | 選區向左擴一個字 | `extend_char_left` |
| `j` `Down` | 選區擴到下一行(屏幕上的) | `extend_visual_line_down` |
| `k` `Up` | 選區擴到上一行(屏幕上的) | `extend_visual_line_up` |
| `l` `Right` | 選區向右擴一個字 | `extend_char_right` |
| `n` | 加選下一處匹配 | `extend_search_next` |
| `N` | 加選上一處匹配 | `extend_search_prev` |
| `t` | 選區向後擴到某個字之前 | `extend_till_char` |
| `T` | 選區向前擴到某個字之後 | `extend_till_prev_char` |
| `w` | 選區擴到下一個詞首 | `extend_next_word_start` |
| `W` | 選區擴到下一個大詞首 | `extend_next_long_word_start` |
| `A-b` | 選區擴到所在節點開頭 | `extend_parent_node_start` |
| `A-e` | 選區擴到所在節點末尾 | `extend_parent_node_end` |
| `Home` | 選區擴到行首 | `extend_to_line_start` |
| `End` | 選區擴到行尾 | `extend_to_line_end` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` | 退出選擇模式，收起臨時顯示的内容 | `normal_mode` |
| `Enter` `C-j` | 換行(延續縮進和列表符號) | `insert_newline` |
| `Backspace` `C-h` | 删除光標前的一個字 | `delete_char_backward` |
| `Delete` `C-d` | 删除光標後的一個字 | `delete_char_forward` |
| `A-d` | 删除光標後的一個詞 | `delete_word_forward` |
| `C-w` | 删除光標前的一個詞 | `delete_word_backward` |
| `C-u` | 删到行首 | `kill_to_line_start` |
| `C-k` | 删到行尾(插入模式) | `kill_to_line_end` |
| `C-r` | 插入寄存器内容(再按一個字母) | `insert_register` |
| `Left` | 左一個字 | `move_char_left` |
| `Right` | 右一個字 | `move_char_right` |
| `Up` | 上一行(屏幕上的) | `move_visual_line_up` |
| `Down` | 下一行(屏幕上的) | `move_visual_line_down` |
| `PageUp` | 向上翻頁 | `page_up` |
| `PageDown` | 向下翻頁 | `page_down` |
| `Home` | 行首 | `goto_line_start` |
| `End` | 到行尾(最後一個字後面) | `goto_line_end_newline` |
| `Tab` `S-Tab` | 插入縮進(與文件一致) | `insert_tab` |

## 空格 (`Space`)

| Key | What it does |
| --- | --- |
| `Space f` | 文件選擇器(項目目録) |
| `Space F` | 文件選擇器(工作目録) |
| `Space e` | 瀏覽文件(項目目録) |
| `Space b` | 緩衝區選擇器 |
| `Space j` | 跳轉列表 |
| `Space '` | 重開上一個選擇器 |
| `Space g` | 已改動的文件 |
| `Space y` | 複製到系統剪貼板 |
| `Space Y` | 複製主選區到系統剪貼板 |
| `Space p` | 從系統剪貼板粘貼 |
| `Space P` | 從系統剪貼板粘貼到前面 |
| `Space R` | 用系統剪貼板替換選區 |
| `Space s` | 符號選擇器 |
| `Space S` | 項目符號選擇器 |
| `Space k` | 顯示文檔(浮窗) |
| `Space d` | 診斷選擇器 |
| `Space D` | 項目診斷選擇器 |
| `Space r` | 重命名符號 |
| `Space h` | 選中本文件中的所有引用 |
| `Space a` | 代碼動作 |
| `Space w` | 區域 |
| `Space c` | 行註釋 |
| `Space C` | 塊註釋 |
| `Space A-c` | 只用行註釋 |
| `Space /` | 搜索面板 |
| `Space ?` | 所有命令 |

## g 轉到 (`g`)

| Key | What it does |
| --- | --- |
| `gg` | 文件開頭 |
| `g<N>g` | 前往第 N 行 |
| `ge` | 最後一行 |
| `gh / gl` | 行首/行尾 |
| `gs` | 首個非空白字符 |
| `gf` | 打開這個文件 |
| `gw` | 跳到屏幕上某處 |
| `ga` | 回到剛纔的緩衝區 |
| `gn / gp` | 下/上一個緩衝區 |
| `gd` | 轉到定義 |
| `gD` | 轉到聲明 |
| `gy` | 轉到類型定義 |
| `gi` | 轉到實現 |
| `gm` | 最近修改的文件 |
| `gr` | 轉到引用 |
| `gj / gk` | 下/上一邏輯行 |
| `g.` | 最後改動處 |
| `gt / gc / gb` | 屏幕頂部/中部/底部 |

## m (`m`)

| Key | What it does |
| --- | --- |
| `mm` | 跳到配對符號的另一半 |
| `mi` | 選中配對符號内的内容 |
| `ma` | 選中配對符號及其内容 |
| `ms` | 用配對符號包圍選區 |
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
| `]␣` | 下方插入空行 |

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
| `[␣` | 上方插入空行 |

## 視圖 (`z`)

| Key | What it does |
| --- | --- |
| `zz / zc` | 居中 |
| `zt` | 頂部 |
| `zb` | 底部 |
| `zm` | 横向居中 |
| `zj / z↓` | 向下滚動一行 |
| `zk / z↑` | 向上滚動一行 |
| `zC-d / z␣` | 向下翻半頁 |
| `zC-u / z⌫` | 向上翻半頁 |
| `zC-f / zPgDn` | 向下翻頁 |
| `zC-b / zPgUp` | 向上翻頁 |
| `z/` | 搜索 |
| `z?` | 反向搜索 |
| `zn` | 下一處 |
| `zN` | 上一處 |

## 區域 (`C-w`, `Space w`)

| Key | What it does |
| --- | --- |
| `C-w w` | 下一個 |
| `C-w h / C-w j / C-w k / C-w l` | 按方向切換 |
| `C-w s` | 向下拆分 |
| `C-w v` | 向右拆分 |
| `C-w n` | 新建空白窗口 |
| `C-w q` | 關閉窗口 |
| `C-w o` | 只保留此窗口 |
| `C-w t` | 並排與上下互換 |
| `C-w H / C-w J / C-w K / C-w L` | 與該方向的窗口交換 |
| `C-w f` | 下方打開光標處文件 |
| `C-w F` | 旁邊打開光標處文件 |

## 新建空白窗口 (`C-w n`, `Space w n`)

| Key | What it does |
| --- | --- |
| `C-w n s` | 下方新建空白窗口 |
| `C-w n v` | 右側新建空白窗口 |

