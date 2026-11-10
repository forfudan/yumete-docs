<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 在光標後插入(vim 的 a) | `vim_append_mode` |
| `A` | 在行尾插入(vim 的 A) | `vim_insert_at_line_end` |
| `b` | 跳到上一個詞首(不選中) | `jump_prev_word_start` |
| `B` | 跳到上一個大詞首(不選中) | `jump_prev_long_word_start` |
| `c` | 改寫(再按一個動作) | `operator_change` |
| `C` | as `c$` | `@c$` |
| `d` | 删除(再按一個動作) | `operator_delete` |
| `D` | as `d$` | `@d$` |
| `e` | 跳到下一個詞尾(不選中) | `jump_next_word_end` |
| `E` | 跳到下一個大詞尾(不選中) | `jump_next_long_word_end` |
| `f` | 往後找一個字，選到它 | `find_next_char` |
| `F` | 往前找一個字，選到它 | `find_prev_char` |
| `g` | g 組：跳轉 | `goto_mode` |
| `G` | 到第 N 行，不帶計數到末行(vim 的 G) | `vim_goto_line` |
| `h` `Backspace` `Left` | 左一個字 | `move_char_left` |
| `H` | 屏幕最上面那一行 | `goto_window_top` |
| `i` | 在光標前插入(vim 的 i) | `vim_insert_mode` |
| `I` | 在第一個非空白字符前插入(vim 的 I) | `vim_insert_at_line_start` |
| `j` `C-n` `Down` | 下一行(文件裏的) | `move_line_down` |
| `J` | 與下一行合併(vim 的 J) | `vim_join_selections` |
| `k` `C-p` `Up` | 上一行(文件裏的) | `move_line_up` |
| `K` | 顯示文檔(浮窗) | `hover` |
| `l` `Space` `Right` | 右一個字 | `move_char_right` |
| `L` | 屏幕最下面那一行 | `goto_window_bottom` |
| `m` | 設標記(再按一個字母) | `add_mark` |
| `M` | 屏幕中間那一行 | `goto_window_center` |
| `n` | 下一處(vim 的 n) | `vim_search_next` |
| `N` | 上一處(vim 的 N) | `vim_search_prev` |
| `o` | 在下方開新行(vim 的 o，計數重複) | `vim_open_below` |
| `O` | 在上方開新行(vim 的 O，計數重複) | `vim_open_above` |
| `p` | 向後粘貼(vim 的 p) | `vim_paste_after` |
| `P` | 向前粘貼(vim 的 P) | `vim_paste_before` |
| `q` | 録宏(再按一個字母) | `vim_record_macro` |
| `Q` | 回放上次録的宏(vim 的 Q) | `vim_replay_last_macro` |
| `r` | 把選中的每個字換成另一個字 | `replace` |
| `R` | 替換模式：輸入覆蓋原文 | `replace_mode` |
| `s` | as `cl` | `@c{n}l` |
| `S` | as `cc` | `@cc` |
| `t` | 往後找一個字，選到它前面 | `find_till_char` |
| `T` | 往前找一個字，選到它後面 | `till_prev_char` |
| `u` | 撤銷 | `undo` |
| `U` | 撤銷這一行的所有改動 | `undo_line` |
| `v` | 選擇模式：移動時擴大選區 | `select_mode` |
| `V` | 整行選擇模式 | `select_line_mode` |
| `w` | 跳到下一個詞首(不選中) | `jump_next_word_start` |
| `W` | 跳到下一個大詞首(不選中) | `jump_next_long_word_start` |
| `x` | 删掉光標下的字，不删換行(vim 的 x) | `vim_delete_char_forward` |
| `X` | 删除光標前的一個字 | `delete_char_backward` |
| `y` | 複製(再按一個動作) | `operator_yank` |
| `Y` | as `y$` | `@y$` |
| `z` | 視圖組：定位光標行、滚屏、摺疊 | `view_mode` |
| `0` | as `gh` | `@gh` |
| `"` | 選寄存器(再按一個字母) | `select_register` |
| `#` | 反向搜索光標下的詞 | `search_word_backward` |
| `$` `End` | 行尾(vim 的 $：往下走也留在行尾) | `vim_goto_line_end` |
| `%` | 跳到匹配的括號，不在括號上則找本行下一個(vim 的 %) | `vim_match_brackets` |
| `'` | 回到標記(再按一個字母) | `goto_mark` |
| `(` | 跳到上一句(不選中) | `jump_prev_sentence` |
| `)` | 跳到下一句(不選中) | `jump_next_sentence` |
| `*` | 搜索選中内容 | `search_selection` |
| `+` | as `jgs` | `@jgs` |
| `,` | 反向再找一次剛纔那個字 | `repeat_find_char_reverse` |
| `-` | as `kgs` | `@kgs` |
| `.` | 用新的計數再做一次剛纔的改動 | `vim_repeat_last_change` |
| `/` | 搜索 | `search` |
| `:` | 命令行 | `command_mode` |
| `;` | 再找一次剛纔那個字 | `repeat_find_char` |
| `<` | 減少縮進(再按一個動作) | `operator_unindent` |
| `>` | 增加縮進(再按一個動作) | `operator_indent` |
| `?` | 反向搜索 | `rsearch` |
| `@` | 回放宏(再按一個字母) | `vim_replay_macro` |
| `[` | [ 組：跳到上一個 | `left_bracket_mode` |
| `\` | 空格菜單 | `space_mode` |
| `]` | ] 組：跳到下一個 | `right_bracket_mode` |
| `^` | as `gs` | `@gs` |
| `_` | 第一個非空白字符(帶數字時下移幾行) | `vim_goto_first_nonwhitespace` |
| `` ` `` | 回到標記所在的那個字(再按一個字母) | `goto_mark_exact` |
| `{` | 跳到上一段(不選中) | `jump_prev_paragraph` |
| `\|` | 到本行第 N 列(用計數) | `goto_column` |
| `}` | 跳到下一段(不選中) | `jump_next_paragraph` |
| `~` | 切換大小寫並後移(vim 的 ~) | `vim_switch_case` |
| `C-6` `C-^` | 回到剛纔的緩衝區 | `goto_last_accessed_file` |
| `C-a` | 光標處或其後的數字加一(vim 的 C-a) | `vim_increment` |
| `C-b` `PageUp` | 向上翻頁 | `page_up` |
| `C-d` | 向下翻半頁 | `page_cursor_half_down` |
| `C-e` | 向下滚動一行(光標位置不變) | `scroll_down` |
| `C-f` `PageDown` | 向下翻頁 | `page_down` |
| `C-i` `Tab` | 跳轉表：前進 | `jump_forward` |
| `C-o` | 跳轉表：後退 | `jump_backward` |
| `C-r` | 重做(vim 的 C-r) | `vim_redo` |
| `C-u` | 向上翻半頁 | `page_cursor_half_up` |
| `C-v` | 塊選擇(vim 的 C-v) | `vim_visual_block_mode` |
| `C-w` | 窗口組 | `window_mode` |
| `C-x` | 光標處或其後的數字減一(vim 的 C-x) | `vim_decrement` |
| `C-y` | 向上滚動一行(光標位置不變) | `scroll_up` |
| `C-z` | 掛起到終端；fg 返回 | `suspend` |
| `Esc` | 回到普通模式(退出可視模式時選區收成光標) | `vim_normal_mode` |
| `Enter` | 下一行的第一個非空白字符 | `goto_next_line_nonwhitespace` |
| `Home` | 行首 | `goto_line_start` |
| `ZQ` | `:quit!` | `:quit!` |
| `ZZ` | `:x` | `:x` |

## Visual mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 選中整個對象(再按對象鍵) | `select_around_object` |
| `c` `s` | 剪切後改寫 | `change_selection` |
| `d` `x` | 剪切選區 | `delete_selection` |
| `f` | 選區向後擴到某個字 | `extend_next_char` |
| `F` | 選區向前擴到某個字 | `extend_prev_char` |
| `h` `Left` | 選區向左擴一個字 | `extend_char_left` |
| `i` | 選中對象内部(再按對象鍵) | `select_inner_object` |
| `l` `Right` | 選區向右擴一個字 | `extend_char_right` |
| `o` | 換到選區的另一頭(vim 可視模式的 o) | `vim_flip_selections` |
| `R` | 用寄存器内容替換選區 | `replace_with_yanked` |
| `t` | 選區向後擴到某個字之前 | `extend_till_char` |
| `T` | 選區向前擴到某個字之後 | `extend_till_prev_char` |
| `u` | 選區轉小寫並退出可視模式(vim 的 u) | `vim_switch_to_lowercase` |
| `U` | 選區轉大寫並退出可視模式(vim 的 U) | `vim_switch_to_uppercase` |
| `y` | 複製選區並退出可視模式(vim 的 y) | `vim_yank` |
| `<` | 減少縮進，光標留在原列(vim) | `vim_unindent` |
| `>` | 增加縮進，光標留在原列(vim) | `vim_indent` |
| `A-b` | 選區擴到所在節點開頭 | `extend_parent_node_start` |
| `A-e` | 選區擴到所在節點末尾 | `extend_parent_node_end` |
| `Home` | 選區擴到行首 | `extend_to_line_start` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` `C-c` | 退出選擇模式，收起臨時顯示的内容 | `normal_mode` |
| `Enter` `C-j` | 換行(延續縮進和列表符號) | `insert_newline` |
| `Backspace` `C-h` | 删除光標前的一個字 | `delete_char_backward` |
| `Delete` | 删除光標後的一個字 | `delete_char_forward` |
| `C-d` | 減少縮進 | `unindent` |
| `C-w` | 删除光標前的一個詞 | `delete_word_backward` |
| `C-u` | 删到這次插入開始的地方(vim 的 C-u) | `vim_kill_to_line_start` |
| `C-r` | 插入寄存器内容(再按一個字母) | `insert_register` |
| `C-o` | 臨時執行一條普通模式命令(vim 的 C-o) | `run_one_normal_command` |
| `Left` | 左一個字 | `move_char_left` |
| `Right` | 右一個字 | `move_char_right` |
| `Up` | 上一行(屏幕上的) | `move_visual_line_up` |
| `Down` | 下一行(屏幕上的) | `move_visual_line_down` |
| `PageUp` | 向上翻頁 | `page_up` |
| `PageDown` | 向下翻頁 | `page_down` |
| `Home` | 行首 | `goto_line_start` |
| `End` | 到行尾(最後一個字後面) | `goto_line_end_newline` |
| `C-y` | 插入上一行同列的字 | `insert_char_above` |
| `C-e` | 插入下一行同列的字 | `insert_char_below` |
| `C-g` | 新建撤銷點 | `commit_undo_checkpoint` |
| `Tab` `S-Tab` | 插入縮進(與文件一致) | `insert_tab` |

## 空格 (`\`)

| Key | What it does |
| --- | --- |
| `\f` | 文件選擇器(項目目録) |
| `\F` | 文件選擇器(工作目録) |
| `\e` | 瀏覽文件(項目目録) |
| `\b` | 緩衝區選擇器 |
| `\j` | 跳轉列表 |
| `\'` | 重開上一個選擇器 |
| `\g` | 已改動的文件 |
| `\y` | 複製到系統剪貼板 |
| `\Y` | 複製主選區到系統剪貼板 |
| `\p` | 從系統剪貼板粘貼 |
| `\P` | 從系統剪貼板粘貼到前面 |
| `\R` | 用系統剪貼板替換選區 |
| `\s` | 符號選擇器 |
| `\S` | 項目符號選擇器 |
| `\k` | 顯示文檔(浮窗) |
| `\d` | 診斷選擇器 |
| `\D` | 項目診斷選擇器 |
| `\r` | 重命名符號 |
| `\h` | 選中本文件中的所有引用 |
| `\a` | 代碼動作 |
| `\w` | 區域 |
| `\c` | 行註釋 |
| `\C` | 塊註釋 |
| `\A-c` | 只用行註釋 |
| `\/` | 搜索面板 |
| `\?` | 所有命令 |

## g 轉到 (`g`)

| Key | What it does |
| --- | --- |
| `gg` | 文件開頭 |
| `g<N>g` | 前往第 N 行 |
| `ge` | 跳到上一個詞尾(不選中) |
| `gE` | 跳到上一個大詞尾(不選中) |
| `gf` | 打開這個文件 |
| `gw` | 重排文本，光標不動(vim 的 gw) |
| `gx` | 用瀏覽器打開網址 |
| `gn / gN` | 下一處/上一處匹配 |
| `gd` | 轉到定義 |
| `gD` | 轉到聲明 |
| `gj` | 下一行(屏幕上的) |
| `gk` | 上一行(屏幕上的) |
| `gv` | 重選上次選區 |
| `gi` | 在上次插入處繼續插入 |
| `g; / g,` | 更早/更晚一處改動 |
| `gu / gU / g~` | 小寫/大寫/大小寫互換，後接動作 |
| `gq` | 按寬度重排，後接動作 |
| `gJ` | 合併下一行(不加空格) |
| `` g` `` | 回到標記所在的那個字(再按一個字母) |

## 下一個 (`]`)

| Key | What it does |
| --- | --- |
| `]d / ]D` | 診斷(大寫：第一個/最後一個) |
| `]c` | 改動 |
| `]p` | 向後粘貼，縮進對齊這一行(vim 的 ]p) |
| `]P` | 向前粘貼，縮進對齊這一行(vim 的 [p) |
| `]z` | 到當前摺疊末尾 |
| `]␣` | 下方插入空行 |

## 上一個 (`[`)

| Key | What it does |
| --- | --- |
| `[d / [D` | 診斷(大寫：第一個/最後一個) |
| `[c` | 改動 |
| `[p / [P` | 向前粘貼，縮進對齊這一行(vim 的 [p) |
| `[z` | 到當前摺疊開頭 |
| `[␣` | 上方插入空行 |

## 視圖 (`z`)

| Key | What it does |
| --- | --- |
| `zz` | 居中 |
| `zf` | 創建摺疊，後接移動 |
| `zF` | 摺疊 N 行(用計數) |
| `zo` | 展開 |
| `zO` | 遞歸展開 |
| `zc` | 摺疊 |
| `zC` | 遞歸摺疊 |
| `za` | 切換摺疊 |
| `zA` | 遞歸切換摺疊 |
| `zv` | 展開到光標所在行 |
| `zR` | 全部展開 |
| `zM` | 全部摺疊 |
| `zd` | 删除此處摺疊，保留文本 |
| `zD` | 删除此處所有 zf 摺疊 |
| `zE` | 删除所有 zf 摺疊 |
| `zj` | 到下一個摺疊開頭 |
| `zk` | 到上一個摺疊末尾 |
| `zn` | 停用摺疊 |
| `zN` | 啓用摺疊 |
| `zi` | 啓用/停用摺疊 |
| `zm` | 多摺疊一層 |
| `zr` | 多展開一層 |
| `zx` | 按層級重新摺疊並顯示光標行 |
| `zX` | 按層級重新摺疊 |
| `zt` | 頂部 |
| `zb` | 底部 |

## 區域 (`C-w`, `\w`)

| Key | What it does |
| --- | --- |
| `C-w w` | 下一個 |
| `C-w W` | 上一個 |
| `C-w t` | 第一個窗口 |
| `C-w b` | 最後一個窗口 |
| `C-w p` | 上一個窗口 |
| `C-w x` | 與下一個窗口交換 |
| `C-w r` | 本排窗口向後輪換 |
| `C-w R` | 本排窗口向前輪換 |
| `C-w H / C-w J / C-w K / C-w L` | 移到那一邊 |
| `C-w c` | 關閉窗口但不退出 |
| `C-w S / C-w s` | 向上拆分 |
| `C-w F / C-w f` | 上方打開光標處文件 |
| `C-w ^` | 上方打開上一個文件 |
| `C-w :` | 命令行 |
| `C-w h / C-w j / C-w k / C-w l` | 按方向切換 |
| `C-w v` | 向左拆分 |
| `C-w n` | 上方新建空白窗口 |
| `C-w q` | 關閉窗口 |
| `C-w o` | 只保留此窗口 |

## 新建空白窗口 (`C-w n`, `\wn`)

| Key | What it does |
| --- | --- |
| `C-w n s` | 下方新建空白窗口 |
| `C-w n v` | 右側新建空白窗口 |

