<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## `basic`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`case_menu`](#case_menu) | `` ` `` | `` g` `` | 大小寫與繁簡菜單 |
| [`sentences_on_h_l`](#sentences_on_h_l) | `H` `L` | — | 按句子走 |
| [`marks_on_m_quote`](#marks_on_m_quote) | `M` `'` | — | 設標記、跳標記 |
| [`two_thirds_page`](#two_thirds_page) | `C-n` `C-p` | — | 翻三分之二頁 |
| [`tables`](#tables) | `Space t` | `Space t` | 表格菜單 |
| [`merge_conflicts`](#merge_conflicts) | `Space m` `]m` `[m` | `Space m` | 合併衝突 |
| [`input_method_menu`](#input_method_menu) | `Space z` | `Space z` | 輸入法菜單 |
| [`recent_files`](#recent_files) | `Space o` | `Space o` | 最近的文件和項目 |
| [`registers_menu`](#registers_menu) | `Space "` | `Space "` | 寄存器菜單 |
| [`dictionary`](#dictionary) | `Space n` `Space N` | `Space n` `Space N` | 詞典 |
| [`popup_panel_pairs`](#popup_panel_pairs) | `Space K` `Space l` `Space L` `Space x` `Space X` `Space i` `Space I` | `Space K` `Space l` `Space L` `Space x` `Space X` `Space i` `Space I` | 浮窗與側欄 |
| [`explorer_here`](#explorer_here) | `Space E` | `Space E` | 從當前文件的目錄瀏覽 |
| [`space_paging`](#space_paging) | `Space Space` `Space Backspace` | `Space Space` `Space Backspace` | 翻頁 |
| [`space_quit`](#space_quit) | `Space q` | `Space q` | 關閉窗口 |
| [`sidebars`](#sidebars) | `C-w e` `C-w i` `C-w E` `C-w I` | `C-w e` `C-w i` `C-w E` `C-w I` | 側欄 |
| [`goto_extras`](#goto_extras) | `gz` `gZ` `g/` `gL` `gx` | `gz` `gZ` `g/` `gL` `gW` | 跳轉、搜這個詞、鏈接 |
| [`insert_extras`](#insert_extras) | `C-a` `C-e` `C-n` `C-g` | — | 插入態的行首行尾、補全、斷撤銷點 |
| [`insert_ctrl_c`](#insert_ctrl_c) | `C-c` | — | 插入態退出 |
| [`x_selects_upward`](#x_selects_upward) | `X` | — | 往上選行 |
| [`bare_g_last_line`](#bare_g_last_line) | `G` | — | 到末行 |
| [`move_lines`](#move_lines) | `A-j` `A-k` | `A-j` `A-k` | 上下移動行 |
| [`line_start_keys`](#line_start_keys) | `0` `^` | — | 行首、首字 |
| [`d_to_line_end`](#d_to_line_end) | `D` `A-D` | — | 刪到行尾 |
| [`vim_space_menu`](#vim_space_menu) | — | `Space` | 空格菜單 |
| [`helix_keys_under_vim`](#helix_keys_under_vim) | — | `g.` `;` `,` `A-C` `A-,` `A--` `A-_` `A-:` `A-x` `A-s` `A-(` `A-)` `A-K` `A-d` `A-c` `A-u` `A-U` `A-!` `A-\|` `A-J` `A-;` `A-*` `A-.` `` A-` `` `A-o` `A-i` `A-I` `A-p` `A-n` `A-e` `A-b` `A-a` `C-s` `Z` `gb` `gy` `]g` `[g` `]e` `[e` `]x` `[x` | 借用 helix 的鍵 |

## `full`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`delete_keeps_register`](#delete_keeps_register) | `d` `c` `A-d` `A-c` | — | 刪除不進寄存器 |
| [`esc_collapses`](#esc_collapses) | `Esc` | — | 收成一個光標 |
| [`shift_tab_other_indent`](#shift_tab_other_indent) | `S-Tab` | `S-Tab` | 插另一種縮進 |

## What each item changes

### `case_menu` {#case_menu}

開：反引號打開大小寫與繁簡轉換菜單，vim 下是 g 加反引號。關：helix 的反引號轉小寫、A 加反引號轉大寫；vim 的 g 加反引號跳到標記。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `` ` `` | 字形組：大小寫、繁簡 | 轉小寫 |
| 字形 | `` `l `` | 轉小寫 |  |
| 字形 | `` `u `` | 轉大寫 |  |
| 字形 | ``` `` ``` | 大小寫互換 |  |
| 字形 | `` `s `` | 繁→簡 |  |
| 字形 | `` `t `` | 簡→繁 |  |
| 字形 | `` `w `` | 簡→臺灣繁 |  |
| 字形 | `` `f `` | 轉全角 |  |
| 字形 | `` `h `` | 轉半角 |  |
| 字形 | `` `k `` | 簡→香港繁 |  |
| 字形 | `` `c `` | 簡→大陸繁 |  |
| 字形 | `` `g `` | 簡→古籍繁 |  |
| 字形 | `` `j `` | 繁→日文新字體 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 前往 | `` g` `` | 字形組：大小寫、繁簡 | 回到標記(再按一個字母) |
| 字形 | `` g`l `` | 轉小寫 |  |
| 字形 | `` g`u `` | 轉大寫 |  |
| 字形 | ``` g`` ``` | 大小寫互換 |  |
| 字形 | `` g`s `` | 繁→簡 |  |
| 字形 | `` g`t `` | 簡→繁 |  |
| 字形 | `` g`w `` | 簡→臺灣繁 |  |
| 字形 | `` g`f `` | 轉全角 |  |
| 字形 | `` g`h `` | 轉半角 |  |
| 字形 | `` g`k `` | 簡→香港繁 |  |
| 字形 | `` g`c `` | 簡→大陸繁 |  |
| 字形 | `` g`g `` | 簡→古籍繁 |  |
| 字形 | `` g`j `` | 繁→日文新字體 |  |

### `sentences_on_h_l` {#sentences_on_h_l}

開：H、L 到上一句、下一句。關：helix 沒有綁這兩個鍵。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `H` | 上一句 |  |
| Normal mode | `L` | 下一句 |  |

### `marks_on_m_quote` {#marks_on_m_quote}

開：M 加一個標記，' 跳回去，可以跨文件。關：這兩個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `M` | 設標記(再按一個字母) |  |
| Normal mode | `'` | 回到標記(再按一個字母) |  |

### `two_thirds_page` {#two_thirds_page}

開：C-n、C-p 往下、往上翻三分之二頁。關：這兩個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `C-n` | 前進三分之二頁 |  |
| Normal mode | `C-p` | 後退三分之二頁 |  |

### `tables` {#tables}

開：空格 t 打開表格菜單。關：表格命令照樣可以在 : 裏輸入。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space t` | 表格操作 |  |
| ␣t 表格 | `Space t o` | 源碼視圖(顯示源碼) |  |
| ␣t 表格 | `Space t b` | 基本視圖(表格按列對齊) |  |
| ␣t 表格 | `Space t t` | 全窗視圖(表格獨佔窗口) |  |
| ␣t 表格 | `Space t q` | 退出全窗視圖 |  |
| ␣t 表格 | `Space t ] / Space t [` | 下一張表/上一張表 |  |
| ␣t 表格 | `Space t x` | 轉換表格格式(分隔符) |  |
| ␣t 表格 | `Space t w` | 長單元格:換行/摺疊/全文 |  |
| ␣t 表格 | `Space t /` | 按列搜索(可指定列範圍) |  |
| ␣t 表格 | `Space t g` | 去某一格(␣t 20,20g) |  |
| ␣t 表格 | `Space t r / Space t R` | 插入新行(下/上) |  |
| ␣t 表格 | `Space t c / Space t C` | 加一欄(右/左) |  |
| ␣t 表格 | `Space t d / Space t D` | 删這行/這欄 |  |
| ␣t 表格 | `Space t j / Space t k` | 這行下移/上移 |  |
| ␣t 表格 | `Space t h / Space t l` | 這欄左移/右移 |  |
| ␣t 表格 | `Space t y / Space t p / Space t P` | 複製該欄/貼到右邊/貼到左邊 |  |
| ␣t 表格 | `Space t v` | 用複製的欄蓋掉該欄 |  |
| ␣t 表格 | `Space t 1s / Space t 1S` | 按列升序/降序排列(␣t1s; 1a2d8as 多列排序) |  |
| ␣t 表格 | `Space t < / Space t = / Space t >` | 這欄靠左/居中/靠右 |  |
| ␣t 表格 | `Space t F` | 重排對齊 |  |
| ␣t 表格 | `Space t i` | 該行記錄 |  |
| ␣t 表格 | `Space t H` | 表格第一行是否為標題 |  |
| 轉換表格格式(分隔符) | `Space t x p / Space t x P` | pipe(轉換/貼上) |  |
| 轉換表格格式(分隔符) | `Space t x c / Space t x C` | csv(轉換/貼上) |  |
| 轉換表格格式(分隔符) | `Space t x t / Space t x T` | tsv(轉換/貼上) |  |

### `merge_conflicts` {#merge_conflicts}

開：空格 m 處理合併衝突，helix 下 ]m、[m 跳到下一處、上一處。關：這幾個鍵空着。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space m` | 合併衝突 |  |
| 下一個 | `]m` | 合併衝突 |  |
| 上一個 | `[m` | 合併衝突 |  |
| 合併衝突 | `Space m o` | 只留我方 |  |
| 合併衝突 | `Space m t` | 只留他方 |  |
| 合併衝突 | `Space m b` | 兩方都留 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space m` | 合併衝突 |  |
| 合併衝突 | `Space m o` | 只留我方 |  |
| 合併衝突 | `Space m t` | 只留他方 |  |
| 合併衝突 | `Space m b` | 兩方都留 |  |

### `input_method_menu` {#input_method_menu}

開：空格 z 打開輸入法菜單。關：切中英的鍵照常能用。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space z` | 輸入法 |  |
| 輸入法 | `Space z z` | 輸入法開/關 |  |
| 輸入法 | `Space z m` | 上屏方式 |  |
| 輸入法 | `Space z p` | 候選欄畫在哪 |  |
| 輸入法 | `Space z e` | 正在打的那一段寫在哪 |  |
| 輸入法 | `Space z y` | 輸入預測 開/關 |  |
| 輸入法 | `Space z i` | 選方案 |  |
| 輸入法 | `Space z n` | 下一個方案 |  |
| 輸入法 | `Space z 3-9` | 一頁幾條 |  |
| 輸入法 | `Space z /` | 候選旁的注解，換下一個 |  |
| 輸入法 | `Space z t` | 改用安裝版碼表 |  |
| 輸入法 | `Space z w` | 查看碼表源 |  |
| 輸入法 | `Space z W` | 查看數據位置 |  |

### `recent_files` {#recent_files}

開：空格 o 打開最近的文件和項目。關：這個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space o` | 開上次的 |  |
| 開上次的 | `Space o f` | 最近開過的檔 |  |
| 開上次的 | `Space o g` | 最近開過的檔(全部項目) |  |
| 開上次的 | `Space o p` | 最近開過的項目 |  |
| 開上次的 | `Space o r` | 接着上次 |  |

### `registers_menu` {#registers_menu}

開：空格加雙引號打開寄存器菜單。關：這個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space "` | 寄存器·剪貼板 |  |

### `dictionary` {#dictionary}

開：空格 n 在浮窗裏查光標下的字，空格 N 在側欄裏查。關：這兩個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space n` | 顯示漢字信息(浮窗) |  |
| 空格 | `Space N` | 顯示漢字信息(邊欄) |  |

### `popup_panel_pairs` {#popup_panel_pairs}

開：空格 K 把說明放進側欄；空格 l、x、i 在浮窗裏看診斷、改動、表格記錄，大寫在側欄裏看。關：這些鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space K` | 顯示定義文檔(邊欄) |  |
| 空格 | `Space l` | 顯示診斷信息(浮窗) |  |
| 空格 | `Space L` | 顯示診斷信息(邊欄) |  |
| 空格 | `Space x` | 顯示改動(浮窗) |  |
| 空格 | `Space X` | 顯示改動(邊欄) |  |
| 空格 | `Space i` | 顯示表格行記錄(浮窗) |  |
| 空格 | `Space I` | 顯示表格行記錄(邊欄) |  |

### `explorer_here` {#explorer_here}

開：空格 E 從當前文件所在的目錄瀏覽文件。關：這個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space E` | 瀏覽文件(本文件路徑) |  |

### `space_paging` {#space_paging}

開：空格 空格往下翻一頁，空格 退格往上翻一頁。關：這兩個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space Space` | 下一頁 |  |
| 空格 | `Space Backspace` | 上一頁 |  |

### `space_quit` {#space_quit}

開：空格 q 關閉當前窗口，同 :quit。關：這個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space q` | 關閉窗口 |  |

### `sidebars` {#sidebars}

開：C-w e、C-w i 顯示或隱藏左右側欄，C-w E、C-w I 進到側欄裏。關：這些鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 工作區域操作 | `C-w e / C-w i` | 開關左右欄 |  |
| 工作區域操作 | `C-w E / C-w I` | 進左右欄 |  |

### `goto_extras` {#goto_extras}

開：gz 按頭兩個字母跳，gZ 按拼音跳，g/ 搜光標下的詞，gL 跟任何鏈接；helix 下 gx 用瀏覽器打開網址，vim 下 gW 是跳轉標籤。關：這些鍵空着。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 前往 | `gL` | 跟着鏈接走 |  |
| g 前往 | `gx` | 用瀏覽器打開網址 |  |
| g 前往 | `gz` | 兩字母定位單詞 |  |
| g 前往 | `gZ` | 多字母定位漢字 |  |
| g 前往 | `g/` | 搜索所選内容 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 前往 | `gL` | 跟着鏈接走 |  |
| g 前往 | `gW` | 跳到當前屏幕某位置 |  |
| g 前往 | `gz` | 兩字母定位單詞 |  |
| g 前往 | `gZ` | 多字母定位漢字 |  |
| g 前往 | `g/` | 搜索所選内容 |  |

### `insert_extras` {#insert_extras}

開：插入態 C-a、C-e 到行首、行尾，C-n 補全，C-g 斷一個撤銷點。關：這些鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-a` | 行首 |  |
| Insert mode | `C-e` | 到行尾(最後一個字後面) |  |
| Insert mode | `C-g` | 在這裏斷開撤銷 |  |

### `insert_ctrl_c` {#insert_ctrl_c}

開：插入態 C-c 回到普通態，同 Esc。關：這個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-c` | 退出延伸模式，收起臨時顯示的東西 |  |

### `x_selects_upward` {#x_selects_upward}

開：X 往上選一行，再按再多選一行，同 x 往下。關：helix 的 X，把選區擴到整行。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `X` | 往上選行 | 把選區撑到整行邊界 |

### `bare_g_last_line` {#bare_g_last_line}

開：不帶數字的 G 到末行行首，帶數字照舊到那一行。關：helix 的 G，不帶數字不動。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `G` | 到第 N 行，不帶數字到末行 | 到第幾行(用計數) |

### `move_lines` {#move_lines}

開：A-j、A-k 把選中的行往下、往上移，寫文章時一行就是一段。關：這兩個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `A-j` | 把選中的行往下移 |  |
| Normal mode | `A-k` | 把選中的行往上移 |  |

### `line_start_keys` {#line_start_keys}

開：0、^ 到行首、行首第一個字，同 vim；行尾是 gl。關：這兩個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `0` | 行首 |  |
| Normal mode | `^` | 第一個非空白字符 |  |

### `d_to_line_end` {#d_to_line_end}

開：D 刪到行尾並放進寄存器，A-D 刪到行尾不進寄存器。關：這兩個鍵空着。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `D` | 刪到行尾 |  |
| Normal mode | `A-D` | 刪到行尾，不進寄存器 |  |

### `vim_space_menu` {#vim_space_menu}

開：vim 下空格打開空格菜單。關：空格同 vim 往右走一格，空格菜單改用反斜線打開。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Space` | 空格菜單 | 右一個字 |

### `helix_keys_under_vim` {#helix_keys_under_vim}

開：vim 下借用 helix 的鍵，只用 vim 空着的鍵：Alt 鍵、C-s、Z、gb、gy 等。關：這些鍵什麼都不做，同 vim。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Z` | 視圖組(按完不收) |  |
| Normal mode | `C-s` | 把這裏記進跳轉表 |  |
| Normal mode | `A-!` | 把外部命令的輸出接在選區後 |  |
| Normal mode | `A-(` | 各選區的內容往前輪換 |  |
| Normal mode | `A-)` | 各選區的內容往後輪換 |  |
| Normal mode | `A-*` | 找選中的那段(原樣) |  |
| Normal mode | `A-,` | 去掉主選區 |  |
| Normal mode | `A--` | 把所有選區合成一個 |  |
| Normal mode | `A-.` | 再做一次剛纔的 f 或 t |  |
| Normal mode | `A-:` | 讓每個選區都朝前 |  |
| Normal mode | `A-;` | 光標換到選區另一頭 |  |
| Normal mode | `A-_` | 把相連的選區合起來 |  |
| Normal mode | `` A-` `` | 轉大寫 |  |
| Normal mode | `A-a` | 選中同一層的每一個節點 |  |
| Normal mode | `A-b` | 到光標所在節點的開頭，再按到上一層的 |  |
| Normal mode | `A-c` | 改寫選區(不動寄存器) |  |
| Normal mode | `A-C` | 在上一行復制一個選區 |  |
| Normal mode | `A-d` | 删除選區(不動寄存器) |  |
| Normal mode | `A-e` | 到光標所在節點的末尾 |  |
| Normal mode | `A-i` | 選區縮回去，或縮到第一個子節點 |  |
| Normal mode | `A-I` | 選中裏面的每一個節點 |  |
| Normal mode | `A-J` | 合併行並選中接縫 |  |
| Normal mode | `A-K` | 去掉配得上正則的選區 |  |
| Normal mode | `A-n` | 選下一個語法節點 |  |
| Normal mode | `A-o` | 選區擴到外面那一層語法節點 |  |
| Normal mode | `A-p` | 選上一個語法節點 |  |
| Normal mode | `A-s` | 按行把選區拆開 |  |
| Normal mode | `A-u` | 撤銷(和 u 一樣) |  |
| Normal mode | `A-U` | 重做(和 U 一樣) |  |
| Normal mode | `A-x` | 把選區縮到整行 |  |
| Normal mode | `A-\|` | 把選區交給外部命令，不改文本 |  |
| Insert mode | `A-d` | 刪除光標後的一個詞 |  |
| Insert mode | `C-k` | 刪到行尾，不刪換行(vim) |  |
| g 前往 | `gy` | 跳到類型定義 |  |
| g 前往 | `g.` | 回到最後改動的地方 |  |
| g 前往 | `gb` | 光標移至屏幕頂部/中部/底部 |  |
| 下一個 | `]g / ]G` | 改動(大寫：第一處/最後一處) |  |
| 下一個 | `]e` | 條目 |  |
| 下一個 | `]x` | XML 元素 |  |
| 上一個 | `[g / [G` | 改動(大寫：第一處/最後一處) |  |
| 上一個 | `[e` | 條目 |  |
| 上一個 | `[x` | XML 元素 |  |

### `delete_keeps_register` {#delete_keeps_register}

開：d、c 刪除時不進寄存器，A-d、A-c 才剪。關：helix 的 d、c 剪。

It changes what its keys do, not which command they run.

### `esc_collapses` {#esc_collapses}

開：普通態按 Esc 也把多個光標收成一個。關：helix 的 Esc 只退出選擇態。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Esc` | 退出選擇，或收成一個光標 | 退出延伸模式，收起臨時顯示的東西 |

### `shift_tab_other_indent` {#shift_tab_other_indent}

開：插入態 S-Tab 插另一種縮進，文件用空格時插 Tab。關：S-Tab 插文件自己的那種縮進。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `S-Tab` | 插入另一種縮進(Tab 或空格) | 插入縮進(文件用的那一種) |

