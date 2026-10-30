<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | Arguments | What it does |
| --- | --- | --- |
| `:cd` | `<路徑>` | 更改工作路徑 |
| `:pwd` |  | 查詢工作路徑 |
| `:vsplit` `:vs` | `<路徑>` | 旁邊開一個窗口（同 C-w v）；帶文件名就在那裏打開它 |
| `:hsplit` `:hs` `:split` | `<路徑>` | 下面開一個窗口（同 C-w s）；帶文件名就在那裏打開它 |
| `:open` `:o` `:e` `:edit` | `<路徑>` | 打開一個文件 |
| `:new` `:enew` |  | 開一個空的緩衝區 |
| `:write` `:w` | `<路徑>` | 保存；給路徑存一份副本，`:write-as` 纔換過去 |
| `:write-all` `:wa` |  | 存下所有改過的文件 |
| `:write-as` | `<路徑>` | 另存成新文件並改編輯它(`:w <文件名>` 只抄一份，人還在這邊) |
| `:recover` |  | 問要不要用搶救稿 |
| `:reload` |  | 把文件再讀一遍；加 ! 是丟掉你這裏的改動 |
| `:reload-config` |  | 改完 config.toml，不必重啓 |
| `:reload-auto` | `on｜off｜toggle` | 文件在外面改了就自己重讀——你這裏有改動時只提醒，不動手 |
| `:readonly` `:ro` | `on｜off｜toggle` | 只讀：鎖住這一份，不許改 |
| `:goto` | `<行號>` | 跳到某一行(`:42` 就夠了) |
| `:count` `:wc` |  | 寫了多少；`progress` 今天，`target` 每天要多少 |
| `:count-progress` |  | 寫作進度：今天寫了多少，離目標還有多少 |
| `:count-target` | `<字數>｜off` | 每天要寫多少字；`:count-target off` 不再算 |
| `:check-usage` |  | 查用字：全文寫了兩種寫法的(裏/裡、為/爲、你自己配的人名)，列出少數那一邊 |
| `:check-config` |  | 查配置檔：哪一行讓整份失效，哪一行寫了没人讀 |
| `:check-names` |  | 查專名：文件裏把百科的名字寫錯了一個同音字的地方(醉翁亭寫成醉翁停) |
| `:diagnostics-all` |  | 語言服務器説過的全部問題，排成一張 gf 跳得了的單子 |
| `:check-charset` |  | 查字集：不在通用規範/臺灣/香港/古籍裏的字，排版社的字體多半也没有 |
| `:check-merge` |  | 列出這份文件裏的合併衝突 |
| `:check-punct` |  | 查標點：中文裏的半角逗號句號、`...`、還有開了口没收尾的「」()《》 |
| `:convert` | `s｜t｜tw｜hk｜jp｜c｜g s｜t｜tw｜hk｜jp｜c｜g` | 簡繁轉換：交給 opencc 跑，:convert 看能走哪幾條路 |
| `:convert-opencc` |  | opencc 裝了没有、裝在哪、哪個版本 |
| `:convert-opencc-install` |  | 裝 opencc(macOS 這裏真的會跑，别的機器只把命令印給你) |
| `:convert-opencc-update` |  | 把 opencc 升到最新 |
| `:quit` `:q` |  | 關掉這一個文件；只剩一個時纔真的退出(`quit!` 不管改動) |
| `:quit-all` `:qa` |  | 每個開着的文件都關掉，然後離開(短寫 `:qa`) |
| `:write-quit` `:wq` | `<路徑>` | 無條件存好再退出(短寫 `:wq`；`:x` 是改過纔存的那個) |
| `:write-quit-all` `:wqa` `:xa` |  | 保存所有改動過的文件並退出 |
| `:exit` `:x` `:xit` | `<路徑>` | 改過纔存，然後退出(短寫 `:x`，也認 `:xit`) |
| `:update` `:up` |  | 改過纔存，不退出(短寫 `:up`) |
| `:undo` `:u` |  | 撤銷上一次改動 |
| `:earlier` `:ear` | `<步數>｜<時間>` | 撤銷至幾步或多久以前（5m、1h） |
| `:later` `:lat` | `<步數>｜<時間>` | 重做至幾步或多久以後 |
| `:redo` `:red` |  | 重做 |
| `:word` `:wd` |  | 分詞：哪一份詞表、標記、粒度 |
| `:word-mark` | `off｜color｜ink｜tint｜line｜字色｜墨色` | 分詞標記 |
| `:wiki` | `<詞條名>` | 查一個詞條：打名字，打錯了、順序反了也找得到 |
| `:wiki-edit` |  | 打開本項目的 .yumete/wiki.md，没有就建一個 |
| `:wiki-global` |  | 打開全局的 wiki.md——整個系列共用的設定 |
| `:keymap-yumete-flavor` | `on｜off｜toggle` | Yumete 鍵位風味：在 helix/vim 鍵位之上的一小組改動。不帶參數報當前狀態 |
| `:links` | `list｜graph｜off` | 開鏈接面板：哪些文件 [[鏈]] 到這裏、這裏鏈到哪裏；list 列表、graph 圖、off 關掉 |
| `:links-export` |  | 把整個項目的鏈接圖寫成 .yumete/graph.html，並在瀏覽器打開 |
| `:links-reindex` |  | 重讀整個項目的 [[鏈接]] |
| `:wiki-panel` | `on｜off｜toggle` | 把詞條固定在邊欄——開着的時候不再浮出來 |
| `:wiki-mark` | `color｜line｜off` | 正文裏怎麼給詞條名做記號：金色、下劃線，或者不做 |
| `:wiki-where` |  | 百科到哪裏找的：讀了哪些檔、各幾條、哪些標不出來 |
| `:wiki-reload` |  | 重讀百科和它引到的每一個檔 |
| `:word-list` |  | 此刻用的是哪一份詞表 |
| `:word-list-local` |  | 開項目的詞表 .yumete/words.txt——人名、地名 |
| `:word-list-global` |  | 開全域詞表 segmentation.txt |
| `:word-list-reload` |  | 重讀兩份詞表(項目的 ＋ 全域的) |
| `:word-level` | `off｜strict｜balanced｜full` | 分詞粒度：多少個字算一個詞 |
| `:word-discover` |  | 挖掘這一篇的用戶詞語：人名地名，字典裏没有的 |
| `:word-discover-working` |  | 在工作路徑中挖掘用戶詞語 |
| `:word-discover-project` |  | 在項目路徑中挖掘用戶詞語 |
| `:word-habit` |  | 口頭禪：這一篇比别人多説的那些詞 |
| `:vertical` |  | 把這一頁轉成竪排 |
| `:horizontal` |  | 把這一頁轉成橫排 |
| `:vertical-keys` `:vk` | `logical｜visual｜<logical｜visual>` | 竪排的 hjkl 走行文還是走版面 |
| `:theme` | `ink｜one-dark｜github｜monokai｜dracula｜tokyo-night｜catppuccin｜gruvbox｜bw｜morandi｜<主題名>` | 主題：用哪一套墨(深淺在 :theme-mode) |
| `:theme-mode` | `system｜dark｜light` | 深色還是淺色(system 問終端) |
| `:language` `:lang` | `zh｜zhs｜en` | 編輯器自己説話用哪種語言：`zh` 繁體/`zhs` 简体/`en` English |
| `:version` `:ver` |  | 這是哪一版，以及配置、數據、日誌都放在哪 |
| `:keymap` | `helix｜vim` | 鍵位預設：helix(出廠)或 vim——把 vim 的 x s dd ^ $ 翻過來 |
| `:keymap-actions` |  | 列出每個能綁的動作名 |
| `:info` |  | 這份文檔：位置、大小、行字數、語言、哪幾個服務器同它關聯 |
| `:instant-info` | `dictionary｜wiki｜record｜docs｜diagnostics｜change` | 信息：即時顯示哪一種(record/diagnostics/dictionary/wiki/docs；不寫就按文件算) |
| `:rules` | `<欄>…｜off` | 在指定的欄上鋪一道底紋：`:rules 80 100 120`；不寫數字就是 80 和 100，`off` 關掉 |
| `:theme-fill` | `on｜off｜toggle` | 代碼、引用要不要坐在底色上(出廠不坐) |
| `:shot` | `screen｜png｜html｜txt <路徑>` | 截圖：默認進剪貼板，png/html/txt 則存成文件(進下載文件夾) |
| `:yume` `:y` | `on｜off` | 宇夢輸入引擎開關：on 打開、off 關閉 |
| `:yume-where` |  | 碼表和字料之數據源及回退順序 |
| `:yume-which` |  | 現在用的是哪個方案、碼表打哪來 |
| `:yume-scheme` | `lingming｜xingchen｜qingyun｜riyue｜pinyin` | 開始打字：載入一個方案(不寫名字就用配置裏那個) |
| `:yume-chaifen` | `on｜off｜toggle` | 候選旁的拆分注解 |
| `:yume-commit` | `default｜delayed｜unique｜fluency｜auto` | 上屏方式：預設、延遲(頂字)、唯一、整句 |
| `:yume-panel` | `box｜bottom｜inline` | 候選畫在哪：box 光標旁邊的框，bottom 窗口最下面那一行，inline 光標的下一行 |
| `:yume-inline-preedit` | `off｜composition｜preview` | 正在打的那一段寫在哪：off 候選欄裏，composition 正文裏寫編碼，preview 正文裏寫首選 |
| `:yume-menu-size` | `<1–9>` | 候選面板一頁幾條(1–9，出廠 6) |
| `:yume-autocompletion` | `on｜off｜toggle` | 輸入預測：碼没打完就先給候選 |
| `:yume-installed` |  | 改用系統裝的那份碼表(builtin 的反面) |
| `:yume-builtin` |  | 改用出廠自帶的靈明碼表，不管裝了什麼 |
| `:yume-table` | `<路徑>` | 用你自己的碼表(Rime 的 .dict.yaml 也行) |
| `:syntax` `:syn` | `markdown｜typst｜text｜python｜javascript｜json｜yaml｜toml｜html｜css｜ada｜c｜gas｜go｜java｜nasm｜pascal｜r｜rust｜<語法>` | 這個文件是哪種標記(不給參數就説現在是哪個) |
| `:pipe` | `<命令>` | 將選區發送爲終端命令，且使用其輸出替換選區 |
| `:sh` | `<命令>` | 跑一條命令，輸出收進一個緩衝區 |
| `:!command` |  | 讓出終端跑一條命令，直接看它跑(vi 的寫法) |
| `:which-wrap` | `<字母>` | 哪些按鍵會跨越行尾(vim 功能)。只允許 b h l < > ~ |
| `:view-wrap` | `on｜off｜0｜<幾欄>` | 長段落折到下一行；`:view-wrap 50` 定寬度，`off` 不折 |
| `:view-wrap-vertical` | `0｜<幾字>` | 竖排一列寫幾個字；`:view-wrap-vertical 30` 定長度，`0` 跟着窗口 |
| `:view-margin` | `never｜dense｜loose｜always` | 邊欄：注音、旁置標點、着重號、平仄那一格留不留 |
| `:view-pages-horizontal` | `<1–4>` | 分欄：橫排分成幾欄並排，文字從左欄接到右欄 |
| `:view-pages-vertical` | `<1–4>` | 段組：把竪排的頁面橫着分成幾條，右上讀到左上，再右下讀到左下 |
| `:view-sentence` | `on｜off｜toggle` | 一句一縱：竪排時每句話單起一縱，只是看法，不動文件 |
| `:view-hanging` | `on｜off｜toggle` | 標點旁置：句讀掛在邊欄 |
| `:view-numbers-fill` | `on｜off｜toggle` | 行號那一條有没有自己的底色(默認没有，橫排竪排一樣) |
| `:view-diff` | `on｜off｜toggle` | 改動條：行號旁邊那一格用底色説哪幾行跟 git 那一份不一樣 |
| `:view-typewriter` | `on｜off｜toggle` | 打字機：光標那一行一直停在畫面中間，紙往上走 |
| `:view-focus` | `on｜off｜toggle` | 焦點：正在寫的那一段留在紙上，其餘的退後一級 |
| `:view-meter` | `on｜off｜toggle` | 平仄：每個字的平仄畫在旁邊，句末畫韻腳(今音，入聲已派入三聲) |
| `:view-punct` | `on｜off｜toggle` | 標點提示：半角標點與 ... 旁邊畫出該用的那一個 |
| `:view-code` | `on｜off｜toggle` | 代碼上色：圍欄裏的代碼按它自己的語法上色 |
| `:view-long-line` | `off｜<幾字>` | 某行長度超過此字數，將停止上色 |
| `:view-hud` | `off｜basic｜full` | 光標旁邊那個小牌子：不畫、藥丸、帶框的面板 |
| `:view-preview` | `on｜off｜toggle` | 交給真正的排版器去排，在瀏覽器裏看 |
| `:render` | `off｜basic｜full` | 畫面上顯示多少「結果」：原文、著色、所見即所得 |
| `:indent` | `off｜basic｜full｜<幾格，至多 8>` | 首行縮進：`off`/`basic`(縮進，空行留着)/`full`(連段間空行一起收)，或幾格 |
| `:indent-tab` | `spaces｜tab` | Tab 鍵打什麼：空格還是製表符(Shift-Tab 打另一種) |
| `:indent-width` | `<幾格，1–16>` | 縮進寬度：Tab 打幾個空格、> 和 < 挪幾格 |
| `:hard-wrap` | `<幾欄>` | 按寬度重排硬換行，不改意思：選區，或光標所在的那一段；0 = 每段併成一行；不帶數字照 hard_wrap 設置 |
| `:reflow` | `<幾欄>` | 選區按寬度重排（默認 80 欄） |
| `:auto-pairs` | `off｜basic｜full` | 輸入左括號時自動補上右括號：關、基本、完整。無參數時，報告當前檔位 |
| `:indent-hint` | `none｜color｜symbol` | 縮進的那兩格上畫什麼 |
| `:table` | `<行>x<欄>` | 一張空表：`:table 3 4` 是三行四欄，首行是欄名。只能在空行上用 |
| `:table-render` | `off｜basic｜window` | 表格渲染模式：源碼視圖、基本視圖、全窗視圖。無參數時，報告當前模式名 |
| `:table-check` |  | 檢查整張表：行名重複、欄數不對、字不在字集裡 |
| `:table-rules` | `off｜color｜line｜<樣式> solid｜dash｜double` | 欄線：欄與欄之間怎麼分開 |
| `:table-sort` | `<欄> a｜d …` | 照這幾欄排：`sort 1 a 2 d` 是先第一欄順排、再第二欄倒排 |
| `:replace` `:r` | `<路徑>` | 找了換：面板裏打找什麼、換成什麼 |
| `:replace-buffers` `:rb` |  | 在緩衝區(打開的每一個文件)替換 |
| `:replace-working` `:rw` |  | 在工作路徑中替換 |
| `:replace-project` `:rp` |  | 在項目路徑中替換 |
| `:pipe-before` | `<命令>` | 跑一條終端命令，把輸出插在選區之前 |
| `:pipe-after` | `<命令>` | 跑一條終端命令，把輸出接在選區之後 |
| `:read` | `<路徑>` | 將文件内容插入選區之後 |
| `:pipe-to` | `<命令>` | 將選區發送爲終端命令 |
| `:yuhao` |  | 打開宇浩輸入法官網 |
| `:search` `:s` `:grep` | `<路徑>` | 搜索：打開搜索面板進行搜索，可跨文件搜索，提供更多搜索選項 |
| `:search-buffers` `:sb` |  | 在緩衝區(打開的每一個文件)搜索 |
| `:search-working` `:sw` |  | 在工作路徑搜索 |
| `:search-project` `:sp` |  | 在項目路徑搜索 |
| `:sidebar` | `off｜explorer｜buffers｜outline｜search｜links｜info` | 邊欄：不寫就說開着哪幾扇，`off` 關掉，寫名字就開那一扇 |
| `:table-detail` | `on｜off｜toggle` | 記錄那一格：開、關，或者給個寬度 |
| `:table-numbers` | `on｜off｜toggle` | 欄號那一行：␣t3/、␣t20,20g 用的就是它 |
| `:table-header` | `on｜off｜toggle` | 第一行是欄名，還是跟别的行一樣是數據 |
| `:table-schema` | `write` | 説這張表是怎麼讀的；write 寫進旁邊的 datapackage.json |
| `:table-delimiter` | `<分隔符>` | 照這個分隔符把文件讀成表格，並記住(tab、space、comma、semicolon 或那個字符) |
| `:table-hide` | `<欄號>` | 把第 N 欄藏起來(只是不畫，照樣讀寫)，並記住 |
| `:table-show` | `<欄號>` | 把藏起來的第 N 欄再畫出來 |
| `:table-jump` | `<列名>` | 跳到表格裏叫這個名字的那一行(`:table-jump 木`) |
| `:table-find` | `row｜column｜<字符串> <字符串>` | 找：`row` 一行一行(就是 `/`)，`column` 一欄一欄(表格裏 t/ t? 就是它) |
| `:paste-table` | `<格式> [<格式>]` | 將剪貼板中表格貼作目標格式；兩個參數時第一個為源格式 |
| `:convert-table` | `<格式> [<格式>]` | 轉為目標格式(csv,tsv,pipe)；兩個參數時第一個為源格式 |
| `:wheel` | `<幾行，1–10>` | 滾輪一格走幾行；`:wheel 1` 是終端自己的一格 |
| `:clipboard` |  | 粘貼選單：剪貼簿和取過的那幾段，挑一個貼(␣" 也是) |
| `:clipboard-yank` |  | 選區送到系統剪貼板 |
| `:clipboard-paste` |  | 從系統剪貼板貼進來 |
| `:buffer` |  | 開着的文件：列出、切換、關掉 |
| `:buffer-next` `:bn` |  | 下一個 |
| `:buffer-previous` `:bp` |  | 上一個 |
| `:buffer-close` `:bc` |  | 關掉這一個(`close!` 不管改動) |
| `:format` `:fmt` |  | 照這種文件在配置裏説的那樣格式化([language.markdown] format = …) |
| `:run` | `<名字>` | 跑這種文件在配置裏自己起名的那條命令 |
| `:markdown-footnote` |  | 腳注：號碼自己找空的，註也一併開好 |
| `:markdown-footnote-inline` |  | 行內註 ^[…]，不去文末 |
| `:settings` `:set` |  | 整頁一扇設置：每一項有名字有説明，改完 :w 存盤 |
| `:resume` |  | 接着上次：把這個目錄上次開着的那幾個加進來 |
| `:recent-files` |  | 最近開過的檔(這個項目) |
| `:recent-files-global` |  | 最近開過的檔(全部項目) |
| `:recent-projects` |  | 最近開過的項目 |
| `:tutor` |  | 一課：把課文抄成你自己的一個文件，邊改邊學 |
| `:help` `:h` | `chinese｜vertical｜table｜commands｜<題目>` | 鍵和命令，開成一個可以讀、可以搜的文件 |
| `:export` `:ex` | `html｜typst｜csv｜tsv <路徑>` | 導出成 html 或 typst，排版一起帶上 |
| `:diff` | `<路徑>` | 改了什麼：按詞比，不是按行 |
| `:lsp-rename` | `<新名>` | 讓語言服務器把光標下的名字各處一起改 |
| `:git-show` | `<提交>` | 把提交過的那一稿以只讀方式開在另一個窗口 |
| `:git-diff` | `<提交>` | 跟 git 裏那一份比，逐詞：不寫提交就是 HEAD |
| `:toc` `:outline` | `<第幾條>` | 列出標題；`:toc 3` 跳到第三條 |
| `:ruby` |  | 編輯此處注音 |
| `:ruby-render` | `off｜basic｜full` | 注音渲染模式：顯示源碼、顔色渲染、夾行顯示。無參數時，報告當前模式名 |
| `:ruby-auto` |  | 按詞自動注音(選中的，或者整份) |
| `:ruby-auto-rare` |  | 只注陸、臺、港常用字表都沒有的字 |
| `:ruby-html` | `on｜off｜toggle` | 認 `<ruby>` 這一種 |
| `:ruby-typst` | `on｜off｜toggle` | 認 `#ruby(…)` 這一種 |
| `:ruby-format` | `html｜typst` | 把注音改寫成另一種寫法 |
| `:s/pat/rep/` |  | 取代：選區內；`%s` 全文、`1-40s` 一段、`1,5,9s` 幾行；旗標 g i f c n t y j；分隔符可換 |
