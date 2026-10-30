<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

### 動：命令＋選擇＋動作

| Key | What it does |
| --- | --- |
| `h j k l` | 左下上右；竪排裏是沿着縱走 |
| `w b e` | 下一詞首、上一詞首、詞尾；漢字中 b 和 e 按小句走 |
| `3w 5j` | 數字在前是次數 |
| `g30g / 30G` | 去第 30 行 |
| `gg ge` | 文件開頭/末尾 |
| `gh gl gs` | 行首/行尾/首個非空白 |
| `C-d C-u` | 前進/後退半頁；三分之二是 C-n/C-p，整頁是 C-f/C-b |
| `gd gD` | 去/看它指的地方：腳註的註、拆分的那一行 |
| `g/ g?` | 這個詞還在哪裏：這邊找/另一個窗口看 |
| `/ n N` | 搜索、下一處、上一處 |
| `C-o C-i` | 跳回去/再跳回來 |
| `M a  'a` | 記住這裏/回到那裏 |

### 改

| Key | What it does |
| --- | --- |
| `i a` | 在光標前/後開始打字 |
| `o O` | 下面/上面開新的一行，直接打字 |
| `d c` | 删掉選區/換掉選區(換完就在打字了) |
| `x` | 選這一整行——小説裏一行就是一整段 |
| `v ;` | 延伸模式開關/收成一個字；Esc 也退出延伸 |
| `L H` | 下一句/上一句 |
| `} {` | 下一段/上一段 |
| `y p` | 複製/粘貼 |
| `u U` | 撤銷/重做 |
| `.` | 重複上一次輸入；vim 鍵位下是上一次改動 |
| `Q q` | 錄一段按鍵/放一遍 |
| `> <` | 縮進/退縮進 |

### 空格 (`Space`)

| Key | What it does |
| --- | --- |
| `Space f` | 文件挑選器(項目路徑) |
| `Space F` | 文件挑選器(工作路徑) |
| `Space e` | 瀏覽文件(項目路徑) |
| `Space E` | 瀏覽文件(本文件路徑) |
| `Space b` | 緩衝區挑選器 |
| `Space y` | 複製到系統剪貼板 |
| `Space p` | 從系統剪貼板粘貼 |
| `Space P` | 從系統剪貼板粘貼在前 |
| `Space s` | 顯示大綱 |
| `Space n` | 顯示漢字信息(浮窗) |
| `Space N` | 顯示漢字信息(邊欄) |
| `Space k` | 顯示定義文檔(浮窗) |
| `Space K` | 顯示定義文檔(邊欄) |
| `Space d` | 顯示診斷信息(浮窗) |
| `Space D` | 顯示診斷信息(邊欄) |
| `Space x` | 顯示改動(浮窗) |
| `Space X` | 顯示改動(邊欄) |
| `Space r` | 改名（各處一起改） |
| `Space a` | 代碼動作 |
| `Space i` | 顯示表格行記錄(浮窗) |
| `Space I` | 顯示表格行記錄(邊欄) |
| `Space w` | 工作區域操作 |
| `Space t` | 表格操作 |
| `Space "` | 寄存器·剪貼板 |
| `Space c` | 行注釋 |
| `Space C` | 塊注釋 |
| `Space m` | 合併衝突 |
| `Space o` | 開上次的 |
| `Space z` | 輸入法 |
| `Space /` | 搜索面板 |
| `Space ?` | 命令一覽 |
| `Space Space` | 下一頁 |
| `Space Backspace` | 上一頁 |

### g 前往 (`g`)

| Key | What it does |
| --- | --- |
| `gg` | 文件開頭 |
| `g<N>g` | 前往第 N 行 |
| `ge` | 文件末尾 |
| `gh / gl` | 行首/行尾 |
| `gs` | 首個非空白字符 |
| `gf` | 打開這個文件 |
| `gL` | 跟着鏈接走 |
| `gw` | 跳到當前屏幕某位置 |
| `gx` | 兩字母定位單詞 |
| `gz` | 多字母定位漢字 |
| `ga` | 回到最近打開的緩衝區 |
| `gn / gp` | 下/上一個緩衝區 |
| `gd` | 前往定義 |
| `gD` | 前往定義(另一窗口顯示) |
| `gr` | 用到它的每一處 |
| `g/` | 搜索所選内容 |
| `g?` | 搜索所選内容(另一窗口顯示) |
| `gj / gk` | 下/上一邏輯行 |
| `g.` | 回到最後改動的地方 |
| `gt / gc / gb` | 光標移至屏幕頂部/中部/底部 |

### m (`m`)

| Key | What it does |
| --- | --- |
| `mm` | 前往配對符號的另一個 |
| `mi` | 選擇配對符號内部字符 |
| `ma` | 選擇配對符號和内部字符 |
| `ms` | 使用配對符號包住選區 |
| `md` | 移除配對符號 |
| `mr` | 替換配對符號 |

### 下一個 (`]`)

| Key | What it does |
| --- | --- |
| `]m` | 合併衝突 |
| `]g` | 改動 |
| `]d / ]D` | 診斷(大寫：第一個/最後一個) |
| `]p` | 下一段 |
| `]␣` | 下面加一條空行 |
| `]f` | 函數 |
| `]t` | 類 |
| `]c` | 註釋 |

### 上一個 (`[`)

| Key | What it does |
| --- | --- |
| `[m` | 合併衝突 |
| `[g` | 改動 |
| `[d / [D` | 診斷(大寫：第一個/最後一個) |
| `[p` | 上一段 |
| `[␣` | 上面加一條空行 |
| `[f` | 函數 |
| `[t` | 類 |
| `[c` | 註釋 |

### 這一行挪到哪 (`z`)

| Key | What it does |
| --- | --- |
| `zz` | 中間 |
| `zt` | 頂上 |
| `zb` | 底下 |

### 工作區域操作 (`C-w`)

| Key | What it does |
| --- | --- |
| `C-w w` | 下一個 |
| `C-w h / C-w j / C-w k / C-w l` | 按方向走 |
| `C-w e / C-w i` | 開關左右欄 |
| `C-w E / C-w I` | 進左右欄 |
| `C-w s` | 下面開一個窗口 |
| `C-w v` | 旁邊開一個窗口 |
| `C-w n` | 開一個空白窗口 |
| `C-w q` | 關掉這一區 |
| `C-w o` | 只留這一區 |

### 開一個空白窗口 (`C-w n`)

| Key | What it does |
| --- | --- |
| `C-w n s` | 下面開一個空白窗口 |
| `C-w n v` | 旁邊開一個空白窗口 |

### ␣t 表格 (`Space t`)

| Key | What it does |
| --- | --- |
| `Space t o` | 源碼視圖(顯示源碼) |
| `Space t b` | 基本視圖(表格按列對齊) |
| `Space t t` | 全窗視圖(表格獨佔窗口) |
| `Space t q` | 退出全窗視圖 |
| `Space t ] / Space t [` | 下一張表/上一張表 |
| `Space t x` | 轉換表格格式(分隔符) |
| `Space t w` | 長單元格:換行/摺疊/全文 |
| `Space t /` | 按列搜索(可指定列範圍) |
| `Space t ?` | 按列搜索(另一窗口顯示) |
| `Space t g` | 去某一格(␣t 20,20g) |
| `Space t r / Space t R` | 插入新行(下/上) |
| `Space t c / Space t C` | 加一欄(右/左) |
| `Space t d / Space t D` | 删這行/這欄 |
| `Space t j / Space t k` | 這行下移/上移 |
| `Space t h / Space t l` | 這欄左移/右移 |
| `Space t y / Space t p / Space t P` | 複製該欄/貼到右邊/貼到左邊 |
| `Space t v` | 用複製的欄蓋掉該欄 |
| `Space t 1s / Space t 1S` | 按列升序/降序排列(␣t1s; 1a2d8as 多列排序) |
| `Space t < / Space t = / Space t >` | 這欄靠左/居中/靠右 |
| `Space t F` | 重排對齊 |
| `Space t i` | 該行記錄 |
| `Space t H` | 表格第一行是否為標題 |

### 轉換表格格式(分隔符) (`Space t x`)

| Key | What it does |
| --- | --- |
| `Space t x p / Space t x P` | pipe(轉換/貼上) |
| `Space t x c / Space t x C` | csv(轉換/貼上) |
| `Space t x t / Space t x T` | tsv(轉換/貼上) |

### 字形 (`` ` ``)

| Key | What it does |
| --- | --- |
| `` `l `` | 轉小寫 |
| `` `u `` | 轉大寫 |
| `` `` `` | 大小寫互換 |
| `` `s `` | 繁→簡 |
| `` `t `` | 簡→繁 |
| `` `w `` | 簡→臺灣繁 |
| `` `f `` | 轉全角 |
| `` `h `` | 轉半角 |
| `` `k `` | 簡→香港繁 |
| `` `c `` | 簡→大陸繁 |
| `` `g `` | 簡→古籍繁 |
| `` `j `` | 繁→日文新字體 |
|  | vi 的記號：M 記、' 回去 |

### 開上次的 (`Space o`)

| Key | What it does |
| --- | --- |
| `Space o f` | 最近開過的檔 |
| `Space o g` | 最近開過的檔(全部項目) |
| `Space o p` | 最近開過的項目 |
| `Space o r` | 接着上次 |

### 輸入法 (`Space z`)

| Key | What it does |
| --- | --- |
| `Space z z` | 輸入法開/關 |
| `Space z m` | 上屏方式 |
| `Space z p` | 候選欄畫在哪 |
| `Space z e` | 正在打的那一段寫在哪 |
| `Space z y` | 輸入預測 開/關 |
| `Space z i` | 選方案 |
| `Space z n` | 下一個方案 |
| `Space z 3-9` | 一頁幾條 |
| `Space z /` | 候選旁的拆分注解 |
| `Space z t` | 改用安裝版碼表 |
| `Space z w` | 查看碼表源 |
| `Space z W` | 查看數據位置 |

