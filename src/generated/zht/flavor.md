<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## `basic`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`case_menu`](#case_menu) | `` ` `` | `` g` `` | 大小寫與繁簡菜單 |
| [`sentences_on_h_l`](#sentences_on_h_l) | `H` `L` | — | 按句移動 |
| [`marks_on_m_quote`](#marks_on_m_quote) | `M` `'` | — | 設標記、跳標記 |
| [`two_thirds_page`](#two_thirds_page) | `C-n` `C-p` | — | 翻三分之二頁 |
| [`tables`](#tables) | `Space t` | `Space t` | 表格菜單 |
| [`merge_conflicts`](#merge_conflicts) | `Space m` `]m` `[m` | `Space m` | 合併衝突 |
| [`input_method_menu`](#input_method_menu) | `Space z` | `Space z` | 輸入法菜單 |
| [`recent_files`](#recent_files) | `Space o` | `Space o` | 最近的文件和項目 |
| [`registers_menu`](#registers_menu) | `Space "` | `Space "` | 寄存器菜單 |
| [`dictionary`](#dictionary) | `Space n` `Space N` | `Space n` `Space N` | 詞典 |
| [`popup_panel_pairs`](#popup_panel_pairs) | `Space K` `Space l` `Space L` `Space x` `Space X` `Space i` `Space I` | `Space K` `Space l` `Space L` `Space x` `Space X` `Space i` `Space I` | 浮窗與側欄 |
| [`explorer_here`](#explorer_here) | `Space E` | `Space E` | 從當前文件的目録瀏覽 |
| [`space_paging`](#space_paging) | `Space Space` `Space Backspace` | `Space Space` `Space Backspace` | 翻頁 |
| [`sidebars`](#sidebars) | `C-w e` `C-w i` `C-w E` `C-w I` | `C-w e` `C-w i` `C-w E` `C-w I` | 側欄 |
| [`goto_extras`](#goto_extras) | `gz` `gZ` `g/` `gL` `gx` | `gz` `gZ` `g/` `gL` `gW` | 跳轉、搜索當前詞、鏈接 |
| [`window_sides`](#window_sides) | `C-w n h` `C-w n j` `C-w n k` `C-w n l` `C-w n H` `C-w n J` `C-w n K` `C-w n L` | — | 朝一邊新建窗口 |
| [`split_join`](#split_join) | `gS` | `gS` | 拆開/合併括號 |
| [`insert_extras`](#insert_extras) | `C-a` `C-e` `C-n` `C-g` | — | 插入模式：行首行尾、補全、撤銷點 |
| [`insert_ctrl_c`](#insert_ctrl_c) | `C-c` | — | 插入模式：退出 |
| [`x_selects_upward`](#x_selects_upward) | `X` | — | 往上選行 |
| [`bare_g_last_line`](#bare_g_last_line) | `G` | — | 到末行 |
| [`move_lines`](#move_lines) | `A-j` `A-k` | `A-j` `A-k` | 上下移動行 |
| [`line_start_keys`](#line_start_keys) | `0` `^` | — | 行首、首字 |
| [`d_to_line_end`](#d_to_line_end) | `D` `A-D` | — | 删到行尾 |
| [`helix_fold_keys`](#helix_fold_keys) | `za` `zR` `zM` `zf` | — | helix 下的摺疊鍵 |
| [`vim_comment_keys`](#vim_comment_keys) | — | `gc` | vim 的 gc 註釋 |
| [`vim_space_menu`](#vim_space_menu) | — | `Space` | 空格菜單 |
| [`helix_keys_under_vim`](#helix_keys_under_vim) | — | `g.` `;` `,` `A-C` `A-,` `A--` `A-_` `A-:` `A-x` `A-s` `A-(` `A-)` `A-K` `A-d` `A-c` `A-u` `A-U` `A-!` `A-\|` `A-J` `A-;` `A-*` `A-.` `` A-` `` `A-o` `A-i` `A-I` `A-p` `A-n` `A-e` `A-b` `A-a` `C-s` `Z` `gb` `gy` `]g` `[g` `]e` `[e` `]x` `[x` | 借用 helix 的鍵 |

## `full`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`delete_keeps_register`](#delete_keeps_register) | `d` `c` `A-d` `A-c` | — | 删除不進寄存器 |
| [`esc_collapses`](#esc_collapses) | `Esc` | — | 收成一個光標 |
| [`shift_tab_other_indent`](#shift_tab_other_indent) | `S-Tab` | `S-Tab` | 插入另一種縮進 |

## What each item changes

### `case_menu` {#case_menu}

開：反引號打開大小寫與繁簡轉換菜單，vim 下是 g 加反引號。關：helix 的反引號轉小寫、A 加反引號轉大寫；vim 的 g 加反引號跳到標記。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `` ` `` | 字形組：大小寫、繁簡 | 轉小寫 |
| 轉換 | `` `l `` | 轉小寫 |  |
| 轉換 | `` `u `` | 轉大寫 |  |
| 轉換 | ``` `` ``` | 大小寫互換 |  |
| 轉換 | `` `s `` | 繁→簡 |  |
| 轉換 | `` `t `` | 簡→繁 |  |
| 轉換 | `` `w `` | 簡→臺灣繁 |  |
| 轉換 | `` `f `` | 轉全角 |  |
| 轉換 | `` `h `` | 轉半角 |  |
| 轉換 | `` `k `` | 簡→香港繁 |  |
| 轉換 | `` `c `` | 簡→大陸繁 |  |
| 轉換 | `` `g `` | 簡→古籍繁 |  |
| 轉換 | `` `j `` | 繁→日文新字體 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 轉到 | `` g` `` | 字形組：大小寫、繁簡 | 回到標記所在的那個字(再按一個字母) |
| 轉換 | `` g`l `` | 轉小寫 |  |
| 轉換 | `` g`u `` | 轉大寫 |  |
| 轉換 | ``` g`` ``` | 大小寫互換 |  |
| 轉換 | `` g`s `` | 繁→簡 |  |
| 轉換 | `` g`t `` | 簡→繁 |  |
| 轉換 | `` g`w `` | 簡→臺灣繁 |  |
| 轉換 | `` g`f `` | 轉全角 |  |
| 轉換 | `` g`h `` | 轉半角 |  |
| 轉換 | `` g`k `` | 簡→香港繁 |  |
| 轉換 | `` g`c `` | 簡→大陸繁 |  |
| 轉換 | `` g`g `` | 簡→古籍繁 |  |
| 轉換 | `` g`j `` | 繁→日文新字體 |  |

### `sentences_on_h_l` {#sentences_on_h_l}

開：H、L 到上一句、下一句。關：同 helix，未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `H` | 上一句 |  |
| Normal mode | `L` | 下一句 |  |

### `marks_on_m_quote` {#marks_on_m_quote}

開：M 設標記，' 跳回標記，可以跨文件。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `M` | 設標記(再按一個字母) |  |
| Normal mode | `'` | 回到標記(再按一個字母) |  |

### `two_thirds_page` {#two_thirds_page}

開：C-n、C-p 向下、向上翻三分之二頁。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `C-n` | 向下翻三分之二頁 |  |
| Normal mode | `C-p` | 向上翻三分之二頁 |  |

### `tables` {#tables}

開：空格 t 打開表格菜單。關：表格命令仍可在 : 命令行輸入。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space t` | 表格 |  |
| ␣t 表格 | `Space t o` | 源碼視圖 |  |
| ␣t 表格 | `Space t b` | 基本視圖(按列對齊) |  |
| ␣t 表格 | `Space t t` | 全窗視圖(表格獨佔窗口) |  |
| ␣t 表格 | `Space t q` | 退出全窗視圖 |  |
| ␣t 表格 | `Space t ] / Space t [` | 下/上一張表 |  |
| ␣t 表格 | `Space t x` | 轉換表格格式(分隔符) |  |
| ␣t 表格 | `Space t w` | 長單元格：換行/摺疊/全文 |  |
| ␣t 表格 | `Space t /` | 按列搜索(可指定列範圍) |  |
| ␣t 表格 | `Space t g` | 跳到單元格(␣t 20,20g) |  |
| ␣t 表格 | `Space t r / Space t R` | 插入行(下/上) |  |
| ␣t 表格 | `Space t c / Space t C` | 插入列(右/左) |  |
| ␣t 表格 | `Space t d / Space t D` | 删除行/列 |  |
| ␣t 表格 | `Space t j / Space t k` | 本行下移/上移 |  |
| ␣t 表格 | `Space t h / Space t l` | 本列左移/右移 |  |
| ␣t 表格 | `Space t y / Space t p / Space t P` | 複製本列/粘貼到右邊/左邊 |  |
| ␣t 表格 | `Space t v` | 用複製的列覆蓋本列 |  |
| ␣t 表格 | `Space t 1s / Space t 1S` | 按列升序/降序排列(␣t1s; 1a2d8as 多列排序) |  |
| ␣t 表格 | `Space t < / Space t = / Space t >` | 本列左對齊/居中/右對齊 |  |
| ␣t 表格 | `Space t F` | 重新對齊 |  |
| ␣t 表格 | `Space t i` | 本行記録 |  |
| ␣t 表格 | `Space t H` | 首行作爲表頭 |  |
| 轉換表格格式(分隔符) | `Space t x p / Space t x P` | pipe(轉換/粘貼) |  |
| 轉換表格格式(分隔符) | `Space t x c / Space t x C` | csv(轉換/粘貼) |  |
| 轉換表格格式(分隔符) | `Space t x t / Space t x T` | tsv(轉換/粘貼) |  |

### `merge_conflicts` {#merge_conflicts}

開：空格 m 處理合併衝突，helix 下 ]m、[m 跳到下一處、上一處。關：未綁定。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space m` | 合併衝突 |  |
| 下一個 | `]m` | 合併衝突 |  |
| 上一個 | `[m` | 合併衝突 |  |
| 合併衝突 | `Space m o` | 保留我方 |  |
| 合併衝突 | `Space m t` | 保留對方 |  |
| 合併衝突 | `Space m b` | 保留雙方 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space m` | 合併衝突 |  |
| 合併衝突 | `Space m o` | 保留我方 |  |
| 合併衝突 | `Space m t` | 保留對方 |  |
| 合併衝突 | `Space m b` | 保留雙方 |  |

### `input_method_menu` {#input_method_menu}

開：空格 z 打開輸入法菜單。關：切中英的鍵照常能用。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space z` | 輸入法 |  |
| 輸入法 | `Space z z` | 輸入法開/關 |  |
| 輸入法 | `Space z m` | 上屏方式 |  |
| 輸入法 | `Space z p` | 候選欄位置 |  |
| 輸入法 | `Space z e` | 未上屏内容顯示在哪 |  |
| 輸入法 | `Space z y` | 輸入預測開/關 |  |
| 輸入法 | `Space z i` | 選擇方案 |  |
| 輸入法 | `Space z n` | 下一個方案 |  |
| 輸入法 | `Space z 3-9` | 每頁候選數 |  |
| 輸入法 | `Space z 0` | 字集過濾 |  |
| 輸入法 | `Space z s` | 字集排序 |  |
| 輸入法 | `Space z g` | 整句字集軌 |  |
| 輸入法 | `Space z b` | 切到内置方案 |  |
| 輸入法 | `Space z /` | 切換候選註解 |  |
| 輸入法 | `Space z t` | 改用安裝版碼表 |  |
| 輸入法 | `Space z w` | 查看碼表來源 |  |
| 輸入法 | `Space z W` | 查看數據位置 |  |

### `recent_files` {#recent_files}

開：空格 o 打開最近的文件和項目。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space o` | 最近打開 |  |
| 最近打開 | `Space o f` | 最近打開的文件 |  |
| 最近打開 | `Space o g` | 最近打開的文件(所有項目) |  |
| 最近打開 | `Space o p` | 最近打開的項目 |  |
| 最近打開 | `Space o r` | 恢復上次會話 |  |

### `registers_menu` {#registers_menu}

開：空格加雙引號打開寄存器菜單。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space "` | 寄存器·剪貼板 |  |

### `dictionary` {#dictionary}

開：空格 n 在浮窗裏查光標處的字，空格 N 在側欄裏查。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space n` | 顯示漢字信息(浮窗) |  |
| 空格 | `Space N` | 顯示漢字信息(側欄) |  |

### `popup_panel_pairs` {#popup_panel_pairs}

開：空格 K 把説明放進側欄；空格 l、x、i 在浮窗裏看診斷、改動、表格記録，大寫在側欄裏看。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space K` | 顯示文檔(側欄) |  |
| 空格 | `Space l` | 顯示診斷(浮窗) |  |
| 空格 | `Space L` | 顯示診斷(側欄) |  |
| 空格 | `Space x` | 顯示改動(浮窗) |  |
| 空格 | `Space X` | 顯示改動(側欄) |  |
| 空格 | `Space i` | 顯示行記録(浮窗) |  |
| 空格 | `Space I` | 顯示行記録(側欄) |  |

### `explorer_here` {#explorer_here}

開：空格 E 從當前文件所在目録瀏覽文件。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space E` | 瀏覽文件(當前文件目録) |  |

### `space_paging` {#space_paging}

開：空格 空格向下翻頁，空格 退格向上翻頁。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 空格 | `Space Space` | 下一頁 |  |
| 空格 | `Space Backspace` | 上一頁 |  |

### `sidebars` {#sidebars}

開：C-w e、C-w i 顯示或隱藏左右側欄，C-w E、C-w I 進入側欄。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 區域 | `C-w e / C-w i` | 開關左/右側欄 |  |
| 區域 | `C-w E / C-w I` | 進入左/右側欄 |  |

### `goto_extras` {#goto_extras}

開：gz 按前兩個字母跳轉，gZ 按拼音跳轉，g/ 搜索光標處的詞，gL 打開任意鏈接；helix 下 gx 用瀏覽器打開網址，vim 下 gW 顯示跳轉標籤。關：未綁定。

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 轉到 | `gL` | 跟隨鏈接 |  |
| g 轉到 | `gx` | 用瀏覽器打開網址 |  |
| g 轉到 | `gz` | 兩字母定位單詞 |  |
| g 轉到 | `gZ` | 按讀音定位漢字 |  |
| g 轉到 | `g/` | 搜索選中内容 |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 轉到 | `gL` | 跟隨鏈接 |  |
| g 轉到 | `gW` | 跳到屏幕上某處 |  |
| g 轉到 | `gz` | 兩字母定位單詞 |  |
| g 轉到 | `gZ` | 按讀音定位漢字 |  |
| g 轉到 | `g/` | 搜索選中内容 |  |

### `window_sides` {#window_sides}

開：C-w n（␣wn）組裏 h j k l 在左下上右新建空白窗口，H J K L 新建窗口並打開緩衝區選擇器。關：這八個鍵未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 新建空白窗口 | `C-w n h` | 左側新建空白窗口 |  |
| 新建空白窗口 | `C-w n j` | 下方新建空白窗口 |  |
| 新建空白窗口 | `C-w n k` | 上方新建空白窗口 |  |
| 新建空白窗口 | `C-w n l` | 右側新建空白窗口 |  |
| 新建空白窗口 | `C-w n H` | 左側新建窗口並選擇緩衝區 |  |
| 新建空白窗口 | `C-w n J` | 下方新建窗口並選擇緩衝區 |  |
| 新建空白窗口 | `C-w n K` | 上方新建窗口並選擇緩衝區 |  |
| 新建空白窗口 | `C-w n L` | 右側新建窗口並選擇緩衝區 |  |

### `split_join` {#split_join}

開：gS 把光標所在括號裏的各項拆成每項一行，再按一次合回一行。關：gS 未綁定，:split-join 命令照樣可用。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 轉到 | `gS` | 拆開/合併括號裏的各項 |  |

### `insert_extras` {#insert_extras}

開：插入模式下 C-a、C-e 到行首、行尾，C-n 補全，C-g 新建撤銷點。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-a` | 行首 |  |
| Insert mode | `C-e` | 到行尾(最後一個字後面) |  |
| Insert mode | `C-g` | 新建撤銷點 |  |

### `insert_ctrl_c` {#insert_ctrl_c}

開：插入模式下 C-c 回到普通模式，同 Esc。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-c` | 退出選擇模式，收起臨時顯示的内容 |  |

### `x_selects_upward` {#x_selects_upward}

開：X 向上選一行，每按一次多選一行，與 x 向下相對。關：同 helix，X 把選區擴到整行。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `X` | 往上選行 | 選區擴到整行 |

### `bare_g_last_line` {#bare_g_last_line}

開：G 不帶數字時到末行行首，帶數字到該行。關：同 helix，G 不帶數字時不動。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `G` | 到第 N 行，不帶數字到末行 | 到第 N 行(用計數) |

### `move_lines` {#move_lines}

開：A-j、A-k 把選中的行下移、上移，寫文章時一行就是一段。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `A-j` | 把選中的行往下移 |  |
| Normal mode | `A-k` | 把選中的行往上移 |  |

### `line_start_keys` {#line_start_keys}

開：0、^ 到行首、行首第一個字，同 vim；行尾是 gl。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `0` | 行首 |  |
| Normal mode | `^` | 第一個非空白字符 |  |

### `d_to_line_end` {#d_to_line_end}

開：D 删到行尾並放進寄存器，A-D 删到行尾不進寄存器。關：未綁定。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `D` | 删到行尾 |  |
| Normal mode | `A-D` | 删到行尾(不進寄存器) |  |

### `helix_fold_keys` {#helix_fold_keys}

開：helix 下也能用 vim 的 za 開合折疊、zR 全部展開、zM 全部摺疊，zf 把選中的行摺疊。關：未綁定，只能用命令摺疊。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| 視圖 | `za` | 切換摺疊 |  |
| 視圖 | `zR` | 全部展開 |  |
| 視圖 | `zM` | 全部摺疊 |  |
| 視圖 | `zf` | 摺疊選中的行 |  |

### `vim_comment_keys` {#vim_comment_keys}

開：vim 鍵位下 gc 接動作、gcc、可視模式的 gc 註釋所在行，同 vim 9.1 自帶插件和 Neovim。關：只能用空格菜單裏的 c。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g 轉到 | `gc` | 註釋(再按一個動作) |  |

### `vim_space_menu` {#vim_space_menu}

開：vim 下空格打開空格菜單。關：空格同 vim 右移一格，空格菜單改用反斜槓打開。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Space` | 空格菜單 | 右一個字 |

### `helix_keys_under_vim` {#helix_keys_under_vim}

開：vim 下在 vim 没用的鍵上借用 helix 的鍵：Alt 鍵、C-s、Z、gb、gy 等。關：同 vim，這些鍵不起作用。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Z` | 視圖組(常駐) |  |
| Normal mode | `C-s` | 把當前位置記入跳轉表 |  |
| Normal mode | `A-!` | 把外部命令的輸出接在選區後 |  |
| Normal mode | `A-(` | 各選區的内容往前輪換 |  |
| Normal mode | `A-)` | 各選區的内容往後輪換 |  |
| Normal mode | `A-*` | 搜索選中内容(原樣) |  |
| Normal mode | `A-,` | 去掉主選區 |  |
| Normal mode | `A--` | 合併所有選區 |  |
| Normal mode | `A-.` | 重複上次的 f 或 t |  |
| Normal mode | `A-:` | 讓每個選區都朝前 |  |
| Normal mode | `A-;` | 光標換到選區另一頭 |  |
| Normal mode | `A-_` | 合併相鄰的選區 |  |
| Normal mode | `` A-` `` | 轉大寫 |  |
| Normal mode | `A-a` | 選中所有同級節點 |  |
| Normal mode | `A-b` | 到所在節點開頭，再按到上一層 |  |
| Normal mode | `A-c` | 改寫選區(不進寄存器) |  |
| Normal mode | `A-C` | 在上一行加一個選區 |  |
| Normal mode | `A-d` | 删除選區(不進寄存器) |  |
| Normal mode | `A-e` | 到所在節點的末尾 |  |
| Normal mode | `A-i` | 縮小選區，或縮到第一個子節點 |  |
| Normal mode | `A-I` | 選中所有子節點 |  |
| Normal mode | `A-J` | 合併行並選中連接處 |  |
| Normal mode | `A-K` | 去掉匹配正則的選區 |  |
| Normal mode | `A-n` | 選中下一個同級節點 |  |
| Normal mode | `A-o` | 選區擴到外層語法節點 |  |
| Normal mode | `A-p` | 選中上一個同級節點 |  |
| Normal mode | `A-s` | 按行拆分選區 |  |
| Normal mode | `A-u` | 撤銷(同 u) |  |
| Normal mode | `A-U` | 重做(同 U) |  |
| Normal mode | `A-x` | 把選區縮到整行 |  |
| Normal mode | `A-\|` | 把選區傳給外部命令，不改文本 |  |
| Insert mode | `A-d` | 删除光標後的一個詞 |  |
| Insert mode | `C-k` | 删到行尾，不删換行(vim) |  |
| g 轉到 | `gy` | 轉到類型定義 |  |
| g 轉到 | `g.` | 最後改動處 |  |
| g 轉到 | `gb` | 屏幕頂部/中部/底部 |  |
| 下一個 | `]g / ]G` | 改動(大寫：第一處/最後一處) |  |
| 下一個 | `]e` | 條目 |  |
| 下一個 | `]x` | XML 元素 |  |
| 上一個 | `[g / [G` | 改動(大寫：第一處/最後一處) |  |
| 上一個 | `[e` | 條目 |  |
| 上一個 | `[x` | XML 元素 |  |

### `delete_keeps_register` {#delete_keeps_register}

開：d、c 删除時不進寄存器，A-d、A-c 才剪切。關：同 helix，d、c 剪切。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `c` | 改寫選區(不進寄存器) | 剪切後改寫 |
| Normal mode | `d` | 删除選區(不進寄存器) | 剪切選區 |
| Normal mode | `D` | 删到行尾(不進寄存器) | 删到行尾 |
| Normal mode | `A-c` | 剪切後改寫 | 改寫選區(不進寄存器) |
| Normal mode | `A-d` | 剪切選區 | 删除選區(不進寄存器) |
| Normal mode | `A-D` | 删到行尾 | 删到行尾(不進寄存器) |

### `esc_collapses` {#esc_collapses}

開：普通模式下按 Esc 也把多個光標收成一個。關：同 helix，Esc 只退出選擇模式。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Esc` | 退出選擇模式，或收成一個光標 | 退出選擇模式，收起臨時顯示的内容 |

### `shift_tab_other_indent` {#shift_tab_other_indent}

開：插入模式下 S-Tab 插入另一種縮進，文件用空格時插入 Tab。關：S-Tab 插入文件本身的縮進。

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `S-Tab` | 插入另一種縮進(Tab 或空格) | 插入縮進(與文件一致) |

