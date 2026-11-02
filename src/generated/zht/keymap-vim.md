<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 在光標後插入(vim 的 a) | `vim_append_mode` |
| `A` | 在行尾插入(vim 的 A) | `vim_insert_at_line_end` |
| `b` | 光標跳到上一個詞首(不選中) | `jump_prev_word_start` |
| `B` | 光標跳到上一個大詞首(不選中) | `jump_prev_long_word_start` |
| `c` | 改寫(再按一個動作) | `operator_change` |
| `C` | as `c$` | `@c$` |
| `d` | 刪除(再按一個動作) | `operator_delete` |
| `D` | as `d$` | `@d$` |
| `e` | 光標跳到下一個詞尾(不選中) | `jump_next_word_end` |
| `E` | 光標跳到下一個大詞尾(不選中) | `jump_next_long_word_end` |
| `f` | 往後找一個字，選到它 | `find_next_char` |
| `F` | 往前找一個字，選到它 | `find_prev_char` |
| `g` | g 組：前往 | `goto_mode` |
| `G` | 到第幾行，不帶計數到最後一行(vim 的 G) | `vim_goto_line` |
| `h` `Backspace` `Left` | 左一個字 | `move_char_left` |
| `H` | 屏幕最上面那一行 | `goto_window_top` |
| `i` | 在光標前插入(vim 的 i) | `vim_insert_mode` |
| `I` | 在第一個非空白字符前插入(vim 的 I) | `vim_insert_at_line_start` |
| `j` `C-n` `Down` | 下一行(文件裏的) | `move_line_down` |
| `J` | 與下一行合併(vim 的 J) | `vim_join_selections` |
| `k` `C-p` `Up` | 上一行(文件裏的) | `move_line_up` |
| `K` | 顯示定義文檔(浮窗) | `hover` |
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
| `q` | 錄宏(再按一個字母) | `vim_record_macro` |
| `Q` | 回放宏 | `replay_macro` |
| `r` | 把選中的每個字換成另一個字 | `replace` |
| `R` | 覆寫模式：打字蓋掉原文 | `replace_mode` |
| `s` | as `cl` | `@c{n}l` |
| `S` | as `cc` | `@cc` |
| `t` | 往後找一個字，選到它前面 | `find_till_char` |
| `T` | 往前找一個字，選到它後面 | `till_prev_char` |
| `u` | 撤銷 | `undo` |
| `U` | 撤銷這一行的所有改動 | `undo_line` |
| `v` | 延伸模式：移動把選區撑大 | `select_mode` |
| `V` | 整行選擇模式 | `select_line_mode` |
| `w` | 光標跳到下一個詞首(不選中) | `jump_next_word_start` |
| `W` | 光標跳到下一個大詞首(不選中) | `jump_next_long_word_start` |
| `x` | 刪掉光標下的字，不刪換行(vim 的 x) | `vim_delete_char_forward` |
| `X` | 刪除光標前的一個字 | `delete_char_backward` |
| `y` | 複製(再按一個動作) | `operator_yank` |
| `Y` | as `y$` | `@y$` |
| `z` | 視圖組：把光標行放到屏幕頂、中、底 | `view_mode` |
| `0` | as `gh` | `@gh` |
| `"` | 選寄存器(再按一個字母) | `select_register` |
| `#` | 往回找光標下的詞 | `search_word_backward` |
| `$` `End` | 行尾(vim 的 $：往下走也留在行尾) | `vim_goto_line_end` |
| `%` | 配對的括號，不在括號上就找本行的下一個(vim 的 %) | `vim_match_brackets` |
| `'` `` ` `` | 回到標記(再按一個字母) | `goto_mark` |
| `(` | 光標跳到上一句(不選中) | `jump_prev_sentence` |
| `)` | 光標跳到下一句(不選中) | `jump_next_sentence` |
| `*` | 找選中的那段 | `search_selection` |
| `+` | as `jgs` | `@jgs` |
| `,` | 反方向再找一次剛纔那個字 | `repeat_find_char_reverse` |
| `-` | as `kgs` | `@kgs` |
| `.` | 用新的計數再做一次剛纔的改動 | `vim_repeat_last_change` |
| `/` | 往前搜索 | `search` |
| `:` | 命令行 | `command_mode` |
| `;` | 再找一次剛纔那個字 | `repeat_find_char` |
| `<` | 減少縮進(再按一個動作) | `operator_unindent` |
| `>` | 增加縮進(再按一個動作) | `operator_indent` |
| `?` | 往後搜索 | `rsearch` |
| `@` | 回放宏(再按一個字母) | `vim_replay_macro` |
| `[` | [ 組：往前找上一處 | `left_bracket_mode` |
| `\` | 空格菜單 | `space_mode` |
| `]` | ] 組：往後找下一處 | `right_bracket_mode` |
| `^` | as `gs` | `@gs` |
| `_` | 行首第一個非空字(帶數字時往下數行) | `vim_goto_first_nonwhitespace` |
| `{` | 光標跳到上一段(不選中) | `jump_prev_paragraph` |
| `\|` | 到這一行的第幾列(用計數) | `goto_column` |
| `}` | 光標跳到下一段(不選中) | `jump_next_paragraph` |
| `~` | 大小寫互換並往後走(vim 的 ~) | `vim_switch_case` |
| `C-6` `C-^` | 回到最近打開的緩衝區 | `goto_last_accessed_file` |
| `C-a` | 光標處或其後的數字加一(vim 的 C-a) | `vim_increment` |
| `C-b` `PageUp` | 後退一頁 | `page_up` |
| `C-d` | 前進半頁 | `page_cursor_half_down` |
| `C-e` | 屏幕往下滾一行(光標的字不動) | `scroll_down` |
| `C-f` `PageDown` | 前進一頁 | `page_down` |
| `C-i` `Tab` | 跳轉表：再往前一處 | `jump_forward` |
| `C-o` | 跳轉表：回到剛纔那個位置 | `jump_backward` |
| `C-r` | 重做(vim 的 C-r) | `vim_redo` |
| `C-u` | 後退半頁 | `page_cursor_half_up` |
| `C-v` | 塊選擇(vim 的 C-v) | `vim_visual_block_mode` |
| `C-w` | 窗口組 | `window_mode` |
| `C-x` | 光標處或其後的數字減一(vim 的 C-x) | `vim_decrement` |
| `C-y` | 屏幕往上滾一行(光標的字不動) | `scroll_up` |
| `C-z` | 暫停，回到終端；fg 回來 | `suspend` |
| `Esc` | 回普通模式(vim：退出可視模式時選區收成一點) | `vim_normal_mode` |
| `Enter` | 下一行的第一個非空白字符 | `goto_next_line_nonwhitespace` |
| `Home` | 行首 | `goto_line_start` |
| `ZQ` | `:quit!` | `:quit!` |
| `ZZ` | `:x` | `:x` |

## Visual mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | 選中整個對象(再按一個對象) | `select_around_object` |
| `c` `s` | 剪切後改寫 | `change_selection` |
| `d` `x` | 剪切選區(進寄存器) | `delete_selection` |
| `f` | 選區往後撑到某個字 | `extend_next_char` |
| `F` | 選區往前撑到某個字 | `extend_prev_char` |
| `h` `Left` | 選區向左撑一個字 | `extend_char_left` |
| `i` | 選中對象的裏面(再按一個對象) | `select_inner_object` |
| `l` `Right` | 選區向右撑一個字 | `extend_char_right` |
| `o` | 換到選區的另一頭(vim 可視模式的 o) | `vim_flip_selections` |
| `R` | 用寄存器內容替換選區 | `replace_with_yanked` |
| `t` | 選區往後撑到某個字前面 | `extend_till_char` |
| `T` | 選區往前撑到某個字後面 | `extend_till_prev_char` |
| `u` | 選區轉小寫並退出可視模式(vim 的 u) | `vim_switch_to_lowercase` |
| `U` | 選區轉大寫並退出可視模式(vim 的 U) | `vim_switch_to_uppercase` |
| `y` | 複製選區並退出可視模式(vim 的 y) | `vim_yank` |
| `<` | 減少縮進，光標留在原列(vim) | `vim_unindent` |
| `>` | 增加縮進，光標留在原列(vim) | `vim_indent` |
| `A-b` | 選區延到所在節點的開頭 | `extend_parent_node_start` |
| `A-e` | 選區延到所在節點的末尾 | `extend_parent_node_end` |
| `Home` | 選區撑到行首 | `extend_to_line_start` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` `C-c` | 退出延伸模式，收起臨時顯示的東西 | `normal_mode` |
| `Enter` `C-j` | 換行(帶上縮進、列表記號) | `insert_newline` |
| `Backspace` `C-h` | 刪除光標前的一個字 | `delete_char_backward` |
| `Delete` | 刪除光標後的一個字 | `delete_char_forward` |
| `C-d` | 減少縮進 | `unindent` |
| `C-w` | 刪除光標前的一個詞 | `delete_word_backward` |
| `C-u` | 刪到這次插入開始的地方(vim 的 C-u) | `vim_kill_to_line_start` |
| `C-r` | 插入寄存器的內容(再按一個字母) | `insert_register` |
| `C-o` | 臨時回普通模式做一件事(vim 的 C-o) | `run_one_normal_command` |
| `Left` | 左一個字 | `move_char_left` |
| `Right` | 右一個字 | `move_char_right` |
| `Up` | 上一行(屏幕上的) | `move_visual_line_up` |
| `Down` | 下一行(屏幕上的) | `move_visual_line_down` |
| `PageUp` | 後退一頁 | `page_up` |
| `PageDown` | 前進一頁 | `page_down` |
| `Home` | 行首 | `goto_line_start` |
| `End` | 到行尾(最後一個字後面) | `goto_line_end_newline` |
| `C-y` | 打出上一行同一位置的字 | `insert_char_above` |
| `C-e` | 打出下一行同一位置的字 | `insert_char_below` |
| `C-g` | 在這裏斷開撤銷 | `commit_undo_checkpoint` |
| `Tab` `S-Tab` | 插入縮進(文件用的那一種) | `insert_tab` |

## 空格 (`\`)

| Key | What it does |
| --- | --- |
| `\f` | 文件挑選器(項目路徑) |
| `\F` | 文件挑選器(工作路徑) |
| `\e` | 瀏覽文件(項目路徑) |
| `\b` | 緩衝區挑選器 |
| `\j` | 跳轉列表 |
| `\'` | 上一個挑選器 |
| `\g` | 存在改動文件 |
| `\y` | 複製到系統剪貼板 |
| `\Y` | 主選區複製到系統剪貼板 |
| `\p` | 從系統剪貼板粘貼 |
| `\P` | 從系統剪貼板粘貼在前 |
| `\R` | 用系統剪貼板替換選區 |
| `\s` | 符號挑選器 |
| `\S` | 項目符號挑選器 |
| `\k` | 顯示定義文檔(浮窗) |
| `\d` | 診斷挑選器 |
| `\D` | 項目診斷挑選器 |
| `\r` | 改名（各處一起改） |
| `\h` | 選中本檔裏的每一處 |
| `\a` | 代碼動作 |
| `\w` | 工作區域操作 |
| `\c` | 行注釋 |
| `\C` | 塊注釋 |
| `\A-c` | 只用行注釋 |
| `\/` | 搜索面板 |
| `\?` | 命令一覽 |

## g 前往 (`g`)

| Key | What it does |
| --- | --- |
| `gg` | 文件開頭 |
| `g<N>g` | 前往第 N 行 |
| `ge` | 光標跳到上一個詞尾(不選中) |
| `gE` | 光標跳到上一個大詞尾(不選中) |
| `gf` | 打開這個文件 |
| `gw` | 重新排版，光標不動（vim 的 gw） |
| `gx` | 用瀏覽器打開網址 |
| `gn / gN` | 下一處/上一處匹配 |
| `gd` | 前往定義 |
| `gD` | 跳到聲明 |
| `gj` | 下一行(屏幕上的) |
| `gk` | 上一行(屏幕上的) |
| `gv` | 重選上一次那一段 |
| `gi` | 回到上次插入處繼續插入 |
| `g; / g,` | 往舊/往新走一處改動 |
| `gu / gU / g~` | 轉小寫/轉大寫/大小寫互換，等待動作 |
| `gq` | 按寬度重排，等待動作 |
| `gJ` | 合併下一行，不補空格 |
| `` g` `` | 回到標記(再按一個字母) |

## 下一個 (`]`)

| Key | What it does |
| --- | --- |
| `]d / ]D` | 診斷(大寫：第一個/最後一個) |
| `]c` | 改動 |
| `]p` | 向後粘貼(vim 的 p) |
| `]␣` | 下面加一條空行 |

## 上一個 (`[`)

| Key | What it does |
| --- | --- |
| `[d / [D` | 診斷(大寫：第一個/最後一個) |
| `[c` | 改動 |
| `[p` | 向前粘貼(vim 的 P) |
| `[␣` | 上面加一條空行 |

## 這一行挪到哪 (`z`)

| Key | What it does |
| --- | --- |
| `zz` | 中間 |
| `zt` | 頂上 |
| `zb` | 底下 |

## 工作區域操作 (`C-w`, `\w`)

| Key | What it does |
| --- | --- |
| `C-w w` | 下一個 |
| `C-w h / C-w j / C-w k / C-w l` | 按方向走 |
| `C-w s` | 下面開一個窗口 |
| `C-w v` | 旁邊開一個窗口 |
| `C-w n` | 開一個空白窗口 |
| `C-w q` | 關掉這一區 |
| `C-w o` | 只留這一區 |
| `C-w f` | 在下面打開光標下的文件 |

## 開一個空白窗口 (`C-w n`, `\wn`)

| Key | What it does |
| --- | --- |
| `C-w n s` | 下面開一個空白窗口 |
| `C-w n v` | 旁邊開一個空白窗口 |

