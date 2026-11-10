<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | Arguments | What it does |
| --- | --- | --- |
| `:cd` | `<路徑>` | 切換工作目録 |
| `:pwd` |  | 顯示工作目録 |
| `:vsplit` `:vs` | `<路徑>` | 在旁邊分出窗口（同 C-w v）；可帶文件名 |
| `:hsplit` `:hs` `:split` | `<路徑>` | 在下方分出窗口（同 C-w s）；可帶文件名 |
| `:vnew` |  | 在旁邊打開空白窗口（同 C-w n v） |
| `:hnew` |  | 在下方打開空白窗口（同 C-w n s） |
| `:open` `:o` `:e` `:edit` | `<路徑>` | 打開一個文件 |
| `:new` `:enew` `:ene` |  | 新建空緩衝區 |
| `:tabnew` `:tabe` `:tabedit` | `<路徑>` | vim 的 :tabnew：新建空緩衝區，帶文件名則打開該文件 |
| `:write` `:w` | `<路徑>` | 保存；帶路徑則另存副本，`:write-as` 會切換到新文件 |
| `:write-all` `:wa` |  | 保存所有改動過的文件 |
| `:write-as` | `<路徑>` | 另存爲新文件並切換過去(`:w <文件名>` 只保存副本，仍留在原文件) |
| `:recover` |  | 詢問是否恢復未保存的内容 |
| `:encoding` | `utf-8｜gb18030｜big5｜shift-jis` | 文件保存時用的編碼：utf-8、gb18030、big5、shift-jis |
| `:reload` |  | 重新載入文件；加 ! 放棄本地改動 |
| `:reload-config` `:config-reload` |  | 重新載入 config.toml，無需重啓 |
| `:config-open` |  | 打開全局 config.toml |
| `:config-open-workspace` |  | 打開本項目的 .yumete/config.toml |
| `:reload-auto` | `on｜off` | 文件在外部被修改時自動重新載入；有未保存的改動時只提醒 |
| `:readonly` `:ro` | `on｜off` | 只讀：禁止編輯此文件 |
| `:goto` | `<行號>` | 跳轉到某行(直接 `:42` 也行) |
| `:count` `:wc` |  | 字數統計；`progress` 看今天，`target` 設每日目標 |
| `:count-progress` |  | 寫作進度：今天寫了多少，離目標還有多少 |
| `:count-target` | `<字數>｜off` | 每日字數目標；`:count-target off` 取消 |
| `:check-usage` |  | 檢查用字：同一個詞有兩種寫法時(裏/裡、為/爲、自定義的人名)，列出較少的那種 |
| `:check-config` |  | 檢查配置：哪一行導致整個文件失效，哪些鍵無人讀取 |
| `:check-names` |  | 檢查專名：找出百科詞條名寫錯同音字的地方(醉翁亭寫成醉翁停) |
| `:diagnostics-all` |  | 列出語言服務器報告的所有問題，可用 gf 跳轉 |
| `:check-charset` |  | 檢查字集：列出不在通用規範/臺灣/香港/古籍字表中的字(多數字體缺這些字) |
| `:check-merge` |  | 列出這份文件裏的合併衝突 |
| `:check-punct` |  | 檢查標點：中文裏的半角逗號句號、`...`，以及未閉合的「」()《》 |
| `:convert` | `s｜t｜tw｜hk｜jp｜c｜g s｜t｜tw｜hk｜jp｜c｜g` | 簡繁轉換(用 opencc)；:convert 列出可用的轉換 |
| `:convert-opencc` |  | opencc 是否已安裝、安裝位置、版本 |
| `:convert-opencc-install` |  | 安裝 opencc(macOS 上直接運行，其他系統只打印命令) |
| `:convert-opencc-update` |  | 把 opencc 升級到最新版 |
| `:quit` `:q` |  | 關閉當前區域；若是最後一個窗口則退出編輯器(`quit!` 放棄改動) |
| `:quit-window` `:close` `:clo` |  | 關閉當前區域，但不關閉最後一個窗口(vim 的 `:close`，簡寫 `:clo`) |
| `:quit-others` `:only` `:on` |  | 只保留當前窗口，關閉其他窗口和側欄(vim 的 `:only`，簡寫 `:on`) |
| `:quit-all` `:qa` |  | 關閉所有文件並退出(簡寫 `:qa`) |
| `:write-quit` `:wq` | `<路徑>` | 保存並退出(簡寫 `:wq`；`:x` 只在有改動時保存) |
| `:write-quit-all` `:wqa` `:xa` |  | 保存所有改動過的文件並退出 |
| `:exit` `:x` `:xit` | `<路徑>` | 有改動纔保存，然後退出(簡寫 `:x`，也可用 `:xit`) |
| `:update` `:up` |  | 有改動纔保存，不退出(簡寫 `:up`) |
| `:undo` `:u` |  | 撤銷上一次改動 |
| `:earlier` `:ear` | `<步數>｜<時間>` | 撤銷若干步，或回到多久以前(5m、1h) |
| `:later` `:lat` | `<步數>｜<時間>` | 重做若干步，或前進到多久以後 |
| `:redo` `:red` |  | 重做 |
| `:word` `:wd` |  | 分詞：詞表、標記、粒度 |
| `:word-mark` | `off｜color｜ink｜tint｜line｜字色｜墨色` | 分詞標記 |
| `:wiki` | `<詞條名>` | 按名稱查詞條，拼錯或順序顛倒也能找到 |
| `:wiki-edit` |  | 打開本項目的 .yumete/wiki.md，不存在則新建 |
| `:wiki-global` |  | 打開全局 wiki.md(整個系列共用的設定) |
| `:keymap-yumete-flavor` | `off｜basic｜full` | Yumete 鍵位風味：在 helix/vim 鍵位上的少量改動；不帶參數顯示當前狀態 |
| `:links` | `list｜graph｜off` | 鏈接面板：哪些文件 [[鏈接]] 到這裏、這裏鏈接到哪裏；list 列表、graph 圖、off 關閉 |
| `:links-export` |  | 將項目鏈接圖導出爲 .yumete/graph.html 並在瀏覽器中打開 |
| `:links-reindex` |  | 重新讀取項目的 [[鏈接]] |
| `:wiki-mark` | `color｜line｜off` | 正文中詞條名的標記：金色、下劃線或不標 |
| `:wiki-where` |  | 百科來源：讀取了哪些文件、各有幾條、哪些無法標記 |
| `:wiki-reload` |  | 重新讀取百科及其引用的所有文件 |
| `:word-list` |  | 當前使用的詞表 |
| `:word-list-local` |  | 打開項目詞表 .yumete/words.txt(人名、地名) |
| `:word-list-global` |  | 打開全局詞表 segmentation.txt |
| `:word-list-reload` |  | 重新讀取項目詞表和全局詞表 |
| `:word-level` | `off｜strict｜balanced｜full` | 分詞粒度：多少個字算一個詞 |
| `:word-discover` |  | 挖掘本文的用户詞語：詞典裏没有的人名、地名 |
| `:word-discover-working` |  | 在工作目録中挖掘用户詞語 |
| `:word-discover-project` |  | 在項目中挖掘用户詞語 |
| `:word-habit` |  | 口頭禪：本文比一般文本多用的詞 |
| `:vertical` | `on｜off` | 豎排開關：on 豎排，off 横排，單用則切換 |
| `:vertical-keys` `:vk` | `logical｜visual｜<logical｜visual>` | 豎排時 hjkl 按文字方向還是按屏幕方向移動 |
| `:theme` | `ink｜one-dark｜github｜monokai｜dracula｜tokyo-night｜catppuccin｜gruvbox｜bw｜morandi｜<主題名>` | 主題(深淺色用 :theme-mode) |
| `:theme-mode` | `system｜dark｜light` | 深色或淺色(system 跟隨終端) |
| `:language` `:lang` | `zht｜zhs｜en｜<語言>` | 界面語言：`zht` 繁體/`zhs` 简体/`en` English |
| `:version` `:ver` |  | 版本號，以及配置、數據、日誌的位置 |
| `:keymap` | `helix｜vim` | 鍵位預設：helix(默認)或 vim(支持 vim 的 x s dd ^ $ 等) |
| `:keymap-actions` |  | 列出所有可綁定的動作名 |
| `:info` |  | 文件信息：路徑、大小、行數字數、語言、關聯的語言服務器 |
| `:instant-info` | `dictionary｜wiki｜record｜docs｜diagnostics｜change` | 信息欄隨光標顯示哪一種(record/diagnostics/dictionary/wiki/docs；不寫則按文件類型) |
| `:rules` | `<欄>…｜off` | 在指定列加標尺：`:rules 80 100 120`；不帶數字爲 80 和 100，`off` 關閉 |
| `:theme-fill` | `on｜off` | 代碼和引用是否加底色(默認不加) |
| `:shot` | `screen｜png｜html｜txt <路徑>` | 截圖：默認複製到剪貼板；png/html/txt 則保存到下載文件夾 |
| `:yume` `:y` | `on｜off` | 宇夢輸入引擎開關：on 打開、off 關閉 |
| `:yume-where` |  | 碼表和數據的查找位置及順序 |
| `:yume-which` |  | 當前方案及碼表來源 |
| `:yume-scheme` | `lingming｜xingchen｜qingyun｜riyue｜pinyin` | 開始輸入：載入方案(不寫名稱則用配置中的) |
| `:yume-annotation` | `off｜next｜multi｜double｜<模式名>` | 候選註解：關、下一個，或指定模式 |
| `:yume-commit` | `default｜delayed｜unique｜fluency｜auto` | 上屏方式：默認、延遲(頂字)、唯一、整句 |
| `:yume-charset` | `all｜common｜tonggui｜harmonic` | 字集過濾：全部、常用、簡化、傳統 |
| `:yume-charset-sort` | `original｜common｜tonggui｜harmonic` | 字集排序：原始、常用、簡化、傳統字優先 |
| `:yume-lanes` | `tonggui｜tongfan｜tai｜common｜harmonic｜guji｜gang｜default` | 整句字集軌：把一軌提到首軌，default 回到默認 |
| `:yume-panel` | `box｜bottom｜inline` | 候選位置：box 光標旁的框，bottom 窗口底行，inline 光標下一行 |
| `:yume-inline-preedit` | `off｜composition｜preview` | 編碼顯示位置：off 候選欄，composition 正文顯示編碼，preview 正文顯示首選 |
| `:yume-menu-size` | `<1–9>` | 每頁候選數(1–9，默認 6) |
| `:yume-autocompletion` | `on｜off` | 輸入預測：編碼未打完就給出候選 |
| `:yume-installed` |  | 改用系統安裝的碼表(與 builtin 相對) |
| `:yume-builtin` |  | 改用内置碼表，忽略已安裝的 |
| `:yume-table` | `<路徑>` | 用你自己的碼表(Rime 的 .dict.yaml 也行) |
| `:set` `:se` | `<選項>` | vim 的 :set，支持 modeline 的幾項：ft、ts、sw、et、tw；不帶參數則打開設置面板 |
| `:setlocal` `:setl` | `<選項>` | vim 的 :setlocal，同 :set 那幾項，只設當前緩衝區；不帶參數則顯示它們的值 |
| `:setfiletype` `:setf` | `<文件類型>` | vim 的 :setf，同 :set ft= |
| `:syntax` `:syn` | `markdown｜typst｜text｜python｜javascript｜json｜yaml｜toml｜html｜css｜ada｜c｜gas｜go｜java｜nasm｜pascal｜r｜rust｜<語法>` | 文件的標記語言(不帶參數顯示當前值) |
| `:pipe` | `<命令>` | 將選區傳給終端命令，用輸出替換選區 |
| `:sh` | `<命令>` | 運行命令，輸出放進一個緩衝區 |
| `:!command` |  | 在終端裏直接運行命令並查看輸出(vi 寫法) |
| `:which-wrap` | `<字母>` | 哪些鍵可以跨越行尾(vim 鍵位)。只能是 b h l < > ~ |
| `:line-numbers` `:ln` | `absolute｜relative｜none` | 行號：absolute 絶對、relative 相對光標、none 不顯示；不帶參數顯示當前模式 |
| `:view-wrap` | `on｜off` | 自動換行開關；寬度用 `:view-wrap-width` 設 |
| `:view-wrap-width` | `0｜<幾欄>` | 正文寬度(列數)；`:view-wrap-width 50` 設寬度，`0` 跟隨窗口 |
| `:view-wrap-height` | `0｜<幾字>` | 豎排每列字數；`:view-wrap-height 30` 設長度，`0` 跟隨窗口 |
| `:view-margin` | `never｜dense｜loose｜always` | 頁邊：是否爲注音、懸掛標點、着重號、平仄留出位置 |
| `:view-pages-horizontal` | `<1–4>` | 分欄：横排時分成多欄並排，文字從左欄接到右欄 |
| `:view-pages-vertical` | `<1–4>` | 段組：把豎排的頁面横着分成幾條，右上讀到左上，再右下讀到左下 |
| `:view-sentence` | `on｜off` | 一句一縱：豎排時每句另起一縱，只改顯示，不改文件 |
| `:view-hanging` | `on｜off` | 標點懸掛：句讀掛在頁邊 |
| `:view-numbers-fill` | `on｜off` | 行號欄是否加底色(默認不加，横排豎排一樣) |
| `:view-diagnostics` | `hint｜info｜warning｜error｜off` | 行末診斷：hint、info、warning、error 或 off |
| `:view-diff` | `on｜off` | 改動條：行號旁用底色標出與 git 版本不同的行 |
| `:view-typewriter` | `on｜off` | 打字機模式：光標所在行始終居中 |
| `:view-focus` | `on｜off` | 專注：正在寫的段落保持清晰，其餘變淡 |
| `:view-meter` | `on｜off` | 平仄：字旁標平仄，句末標韻腳(今音，入派三聲) |
| `:view-punct` | `on｜off` | 標點提示：在半角標點和 ... 旁顯示應使用的全角標點 |
| `:view-code` | `on｜off` | 代碼着色：代碼塊按其語言着色 |
| `:view-long-line` | `off｜<幾字>` | 行長超過此字數時停止着色 |
| `:view-hud` | `off｜basic｜full` | 光標提示：不顯示、膠囊、面板 |
| `:preview` | `on｜off` | 打開或關閉排版後的頁面：先在旁邊開頁面窗口，開不了就用瀏覽器 |
| `:preview-window` | `on｜off` | 在旁邊的窗口中顯示排好的頁面，跟隨光標(需要 tinymist，以及 Ghostty 或 kitty) |
| `:preview-browser` | `on｜off` | 交給排版器排版，在瀏覽器中查看 |
| `:preview-fit` | `width｜page` | 頁面窗口中頁面的大小：頁寬或整頁 |
| `:preview-theme` | `on｜off` | 用主題配色顯示預覽頁面：紙爲背景色，黑字爲文字色；關閉則按印刷原樣 |
| `:preview-vertical` | `on｜off` | 文字窗口豎排時，Markdown 預覽也豎排：從右往左一列一列，像豎排導出那樣 |
| `:preview-redraw` |  | 按窗口現在的大小重畫預覽 |
| `:render` | `off｜basic｜full` | 渲染程度：源碼、着色、所見即所得 |
| `:indent` | `off｜basic｜full｜<幾格，至多 8>` | 首行縮進：`off`/`basic`(保留段間空行)/`full`(隱藏段間空行)，或格數 |
| `:indent-tab` | `spaces｜tab` | Tab 鍵輸入空格還是製表符(Shift-Tab 輸入另一種) |
| `:indent-width` | `<幾格，1–16>` | 縮進寬度：Tab 輸入的空格數，> 和 < 移動的格數 |
| `:hard-wrap` | `<幾欄>` | 按寬度重新硬換行(選區或光標所在段)，不改内容；0 把每段合成一行；不帶數字按 hard_wrap 設置 |
| `:align` | `<符號>` | 按某個符號對齊選中的行，默認爲 = |
| `:split-join` |  | 把光標所在括號裏的各項拆成每行一項，或合併回一行 |
| `:reflow` | `<幾欄>` | 按寬度重排選區(默認 80 列) |
| `:auto-pairs` | `off｜basic｜full` | 自動補上右括號：關/基本/完整；不帶參數顯示當前檔位 |
| `:indent-hint` | `none｜color｜symbol` | 縮進的兩格顯示什麽 |
| `:table` `:ta` `:tab` | `<行>x<欄>` | 插入空表：`:table 3 4` 爲三行四列，首行爲表頭；只能在空行使用 |
| `:table-render` | `off｜basic｜window` | 表格顯示：源碼、基本、全窗；不帶參數顯示當前模式 |
| `:table-check` |  | 檢查整張表：行名重複、列數不對、字不在字集裏 |
| `:table-rules` | `off｜color｜line｜<樣式> solid｜dash｜double` | 列線：列與列之間的分隔方式 |
| `:table-sort` | `<欄> a｜d …` | 按列排序：`sort 1 a 2 d` 先按第一列升序，再按第二列降序 |
| `:replace` `:r` | `<路徑>` | 搜索與替換 |
| `:replace-buffers` `:rb` |  | 在所有打開的文件中替換 |
| `:replace-working` `:rw` |  | 在工作目録中替換 |
| `:replace-project` `:rp` |  | 在項目中替換 |
| `:pipe-before` | `<命令>` | 運行終端命令，把輸出插在選區之前 |
| `:pipe-after` | `<命令>` | 運行終端命令，把輸出插在選區之後 |
| `:read` | `<路徑>` | 將文件内容插入選區之後 |
| `:view-fold` |  | 把選中的行做成摺疊 |
| `:keep-pipe` | `<命令>` | 只保留終端命令執行成功的選區 |
| `:pipe-to` | `<命令>` | 把選區交給終端命令，不收回輸出 |
| `:yuhao` |  | 打開宇浩輸入法官網 |
| `:search` `:s` `:grep` | `<路徑>` | 打開搜索面板：可跨文件，選項更多 |
| `:search-buffers` `:sb` |  | 在所有打開的文件中搜索 |
| `:search-working` `:sw` |  | 在工作目録中搜索 |
| `:search-project` `:sp` |  | 在項目中搜索 |
| `:sidebar-explorer` | `on｜off` | 打開或關閉左側欄的文件樹，打開時光標移過去 |
| `:sidebar-buffers` | `on｜off` | 打開或關閉左側欄的緩衝區列表，打開時光標移過去 |
| `:sidebar-outline` | `on｜off` | 打開或關閉左側欄的大綱，打開時光標移過去 |
| `:sidebar-search` | `on｜off` | 打開或關閉左側欄的搜索，打開時光標移過去 |
| `:sidebar-links` | `on｜off` | 打開或關閉左側欄的鏈接，打開時光標移過去 |
| `:sidebar-info` | `on｜off` | 打開或關閉右側欄的信息面板，光標留在正文 |
| `:table-detail` | `on｜off` | 記録面板：顯示或隱藏 |
| `:table-numbers` | `on｜off` | 列號行：␣t3/、␣t20,20g 用的就是它 |
| `:table-header` | `on｜off` | 首行是表頭還是數據 |
| `:table-schema` | `write` | 顯示錶格結構；write 寫入同目録的 datapackage.json |
| `:table-delimiter` | `<分隔符>` | 按此分隔符把文件讀成表格並記住(tab、space、comma、semicolon 或該字符) |
| `:table-hide` | `<欄號>` | 隱藏第 N 列(只是不顯示，照常讀寫)，並記住 |
| `:table-show` | `<欄號>` | 重新顯示被隱藏的第 N 列 |
| `:table-jump` | `<列名>` | 跳到表格中該名稱所在的行(`:table-jump 木`) |
| `:table-find` | `row｜column｜<字符串> <字符串>` | 查找：`row` 按行(同 `/`)，`column` 按列(同表格裏的 t/ t?) |
| `:paste-table` | `<格式> [<格式>]` | 將剪貼板中的表格粘貼爲目標格式；兩個參數時第一個爲源格式 |
| `:convert-table` | `<格式> [<格式>]` | 轉爲目標格式(csv、tsv、pipe)；兩個參數時第一個爲源格式 |
| `:wheel` | `<幾行，1–10>` | 滚輪每格滚動的行數；`:wheel 1` 爲終端默認 |
| `:clipboard` `:reg` |  | 粘貼菜單：從剪貼板和複製過的内容裏選一項粘貼(也可先按 ␣ 再按雙引號) |
| `:clipboard-yank` |  | 複製選區到系統剪貼板 |
| `:clipboard-paste` |  | 從系統剪貼板粘貼 |
| `:buffer` |  | 打開的文件：列出、切換、關閉 |
| `:buffer-next` `:bn` |  | 下一個 |
| `:buffer-previous` `:bp` |  | 上一個 |
| `:buffer-close` `:bc` |  | 關閉這個文件(`buffer-close!` 放棄改動) |
| `:format` `:fmt` |  | 按配置格式化此文件([language.markdown] format = …) |
| `:run` | `<名字>` | 運行配置中爲該語言定義的命令 |
| `:markdown-footnote` |  | 腳註：自動編號並創建註釋 |
| `:markdown-footnote-inline` |  | 行内注 ^[…]，不放到文末 |
| `:settings` | `<設置項>` | 設置頁：每項附有説明，改了就寫入並生效，u 撤銷 |
| `:resume` |  | 恢復上次會話：打開這個目録上次開着的文件(不關閉現有的) |
| `:recent-files` |  | 最近打開的文件(本項目) |
| `:recent-files-global` |  | 最近打開的文件(所有項目) |
| `:changed-files` |  | 改動過的文件：git 中有改動的與未保存的(同 Space g) |
| `:recent-projects` |  | 最近打開的項目 |
| `:tutor` |  | 教程：把課文複製成你自己的文件，邊改邊學 |
| `:help` `:h` | `chinese｜vertical｜table｜commands｜<題目>` | 以可搜索的文件打開按鍵與命令列表 |
| `:export` `:ex` | `html｜typst｜epub｜csv｜tsv vertical｜horizontal｜hanging｜no-hanging｜ruby-html｜no-ruby-html｜ruby-typst｜no-ruby-typst｜ruby-markdown｜no-ruby-markdown｜turn｜jlreq｜page=｜font=｜<路徑>` | 導出爲 html、typst 或 epub |
| `:export-as-preview` | `html｜pdf｜<路徑>` | 照預覽的樣子導出：Markdown 爲 html，Typst 爲 pdf |
| `:diff` | `<路徑>` | 查看改動：按詞比較，而非按行 |
| `:lsp-rename` | `<新名>` | 通過語言服務器重命名光標下的符號(各處一起改) |
| `:git-show` | `<提交>` | 在另一個窗口以只讀方式打開已提交的版本 |
| `:git-diff` | `<提交>` | 與 git 中的版本逐詞比較，默認比 HEAD |
| `:outline` | `<級>` | 大綱只列到第幾級；`0` 關閉；不帶參數報告狀態 |
| `:ruby` |  | 編輯此處注音 |
| `:ruby-render` | `off｜basic｜full` | 注音顯示：源碼、着色、夾行；不帶參數顯示當前模式 |
| `:ruby-auto` |  | 按詞自動注音(選區或整個文件) |
| `:ruby-auto-rare` |  | 只注陸、臺、港常用字表都没有的字 |
| `:ruby-html` | `on｜off` | 識别 `<ruby>` |
| `:ruby-typst` | `on｜off` | 識别 `#ruby(…)` |
| `:ruby-markdown` | `on｜off` | 識别 `{這些\|zhèxiē}` |
| `:ruby-format` | `html｜typst｜markdown` | 把注音改寫成另一種寫法 |
| `:s/pat/rep/` |  | 替換：默認在選區内；`%s` 全文、`1-40s` 指定範圍、`1,5,9s` 指定行；標誌 g i f c n t y j；分隔符可換 |
