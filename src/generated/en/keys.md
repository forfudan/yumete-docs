<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

### moving: command + selection + action

| Key | What it does |
| --- | --- |
| `h j k l` | left, down, up, right — down the column in vertical layout |
| `w b e` | next word / back to a word start / on to a word end (in 漢字 text, b and e go by clause) |
| `3w 5j` | a number in front is a count |
| `g30g / 30G` | go to line 30 |
| `gg ge` | start / end of the file |
| `gh gl gs` | line start / line end / first non-blank |
| `C-d C-u` | half a page forward/back; C-n / C-p for two thirds, C-f / C-b for a whole one |
| `gd gD` | go to / show what this points at: a footnote's note, a component's row |
| `g/ g?` | where else this word is: / here, ? in the other window |
| `/ n N` | search, next, previous |
| `C-o C-i` | jump back / forward again |
| `M a  'a` | remember this place / go back to it |

### editing

| Key | What it does |
| --- | --- |
| `i a` | start typing before/after the cursor |
| `o O` | open a line below/above and start typing |
| `d c` | delete the selection / change it (and you are typing) |
| `x` | select the whole line — in Chinese text a line is usually a paragraph |
| `v ;` | Select mode on-off / collapse to one character; Esc also leaves Select mode |
| `L H` | next sentence / previous sentence |
| `} {` | next paragraph / previous paragraph |
| `y p` | yank / put |
| `u U` | undo / redo |
| `.` | repeat the last insert (vim keymap: the last change) |
| `Q q` | record keys / play them back |
| `> <` | indent / unindent |

### Space (`Space`)

| Key | What it does |
| --- | --- |
| `Space f` | open file picker (project dir) |
| `Space F` | open file picker (working dir) |
| `Space e` | browse files (project dir) |
| `Space E` | browse files (this file's dir) |
| `Space b` | open buffer picker |
| `Space y` | copy to the system clipboard |
| `Space p` | paste from the system clipboard |
| `Space P` | paste before, from the system clipboard |
| `Space s` | show outline |
| `Space n` | character info (floating) |
| `Space N` | character info (sidebar) |
| `Space k` | documentation (floating) |
| `Space K` | documentation (sidebar) |
| `Space d` | show diagnostics (float) |
| `Space D` | show diagnostics (sidebar) |
| `Space x` | show the change (float) |
| `Space X` | show the change (sidebar) |
| `Space r` | rename it everywhere |
| `Space a` | code actions |
| `Space i` | this row's record (floating) |
| `Space I` | this row's record (sidebar) |
| `Space w` | region |
| `Space t` | table operations |
| `Space "` | registers |
| `Space c` | comment out, by the line |
| `Space C` | comment out, in a block |
| `Space m` | merge conflict |
| `Space o` | open something recent |
| `Space z` | the input method |
| `Space /` | the search panel |
| `Space ?` | every command |
| `Space Space` | page down |
| `Space Backspace` | page up |

### g goto (`g`)

| Key | What it does |
| --- | --- |
| `gg` | start of the file |
| `g<N>g` | go to line N |
| `ge` | end of file |
| `gh / gl` | line start / end |
| `gs` | first non-blank character |
| `gf` | open this file |
| `gL` | follow the link |
| `gw` | go to a place on this screen |
| `gx` | two letters to locate a word |
| `gz` | more letters to locate a char |
| `ga` | back to the buffer before this one |
| `gn / gp` | the next or previous buffer |
| `gd` | go to definition |
| `gD` | go to definition in the other window |
| `gr` | every place it is used |
| `g/` | search the selection |
| `g?` | search the selection in the other window |
| `gj / gk` | down / up a logical line (with line number) |
| `g.` | back to the last change |
| `gt / gc / gb` | the cursor to the top, middle or bottom of the screen |

### m (`m`)

| Key | What it does |
| --- | --- |
| `mm` | go to the other half of the pair |
| `mi` | select what is inside the pair |
| `ma` | select the pair and what is inside |
| `ms` | wrap the selection in a pair |
| `md` | remove the pair |
| `mr` | replace the pair |

### next… (`]`)

| Key | What it does |
| --- | --- |
| `]m` | merge conflict |
| `]g` | a change |
| `]d / ]D` | a diagnostic (capital: the first / the last) |
| `]p` | the next paragraph |
| `]␣` | a blank line below |
| `]f` | a function |
| `]t` | a class |
| `]c` | a comment |

### previous… (`[`)

| Key | What it does |
| --- | --- |
| `[m` | merge conflict |
| `[g` | a change |
| `[d / [D` | a diagnostic (capital: the first / the last) |
| `[p` | the previous paragraph |
| `[␣` | a blank line above |
| `[f` | a function |
| `[t` | a class |
| `[c` | a comment |

### put this line where (`z`)

| Key | What it does |
| --- | --- |
| `zz` | middle |
| `zt` | top |
| `zb` | bottom |

### region (`C-w`)

| Key | What it does |
| --- | --- |
| `C-w w` | next |
| `C-w h / C-w j / C-w k / C-w l` | go that way |
| `C-w e / C-w i` | toggle the left / right bar |
| `C-w E / C-w I` | go into the left / right sidebar |
| `C-w s` | a window below |
| `C-w v` | a window beside |
| `C-w n` | a blank window |
| `C-w q` | close this one |
| `C-w o` | keep only this one |

### a blank window (`C-w n`)

| Key | What it does |
| --- | --- |
| `C-w n s` | a blank window below |
| `C-w n v` | a blank window beside |

### t table (`Space t`)

| Key | What it does |
| --- | --- |
| `Space t o` | source view: the file as written |
| `Space t b` | basic view: the columns lined up |
| `Space t t` | window view: the table takes the window |
| `Space t q` | leave window view |
| `Space t ] / Space t [` | the next table / the one before |
| `Space t x` | convert the table's format (delimiter) |
| `Space t w` | long cells: wrap / fold / whole |
| `Space t /` | search down the columns (a column range can be given) |
| `Space t ?` | search down the columns in the other window |
| `Space t g` | go to a cell (␣t20,20g) |
| `Space t r / Space t R` | insert a new row (below / above) |
| `Space t c / Space t C` | add a column (right / left) |
| `Space t d / Space t D` | delete this row / column |
| `Space t j / Space t k` | move this row down / up |
| `Space t h / Space t l` | move this column left / right |
| `Space t y / Space t p / Space t P` | yank this column / paste it to the right / to the left |
| `Space t v` | write the yanked column over this one |
| `Space t 1s / Space t 1S` | sort by column, ascending / descending (␣t1s; ␣t1a2d8as for several) |
| `Space t < / Space t = / Space t >` | this column left / centre / right |
| `Space t F` | line it up again |
| `Space t i` | this row's record |
| `Space t H` | whether the table's first row is a heading row |

### convert the table's format (delimiter) (`Space t x`)

| Key | What it does |
| --- | --- |
| `Space t x p / Space t x P` | pipe (convert / paste) |
| `Space t x c / Space t x C` | csv (convert / paste) |
| `Space t x t / Space t x T` | tsv (convert / paste) |

### letter case (`` ` ``)

| Key | What it does |
| --- | --- |
| `` `l `` | to lowercase |
| `` `u `` | to uppercase |
| `` `` `` | switch case |
| `` `s `` | traditional → simplified |
| `` `t `` | simplified → traditional |
| `` `w `` | simplified → Taiwan 繁 |
| `` `f `` | to fullwidth |
| `` `h `` | to halfwidth |
| `` `k `` | simplified → Hong Kong 繁 |
| `` `c `` | simplified → mainland 繁 |
| `` `g `` | simplified → 古籍 繁 |
| `` `j `` | traditional → Japanese shinjitai |
|  | vi's marks: M sets, ' returns |

### open something recent (`Space o`)

| Key | What it does |
| --- | --- |
| `Space o f` | recent files |
| `Space o g` | recent files, everywhere |
| `Space o p` | recent projects |
| `Space o r` | take up the last session |

### the input method (`Space z`)

| Key | What it does |
| --- | --- |
| `Space z z` | input method on / off (on is Chinese) |
| `Space z m` | when a word commits |
| `Space z p` | where the candidates are drawn |
| `Space z e` | where what you are typing is written |
| `Space z y` | prediction (autocompletion) on or off |
| `Space z i` | pick a scheme |
| `Space z n` | the next scheme |
| `Space z 3-9` | candidates on a page |
| `Space z /` | the 拆分 beside a candidate |
| `Space z t` | switch to the installed 碼表 |
| `Space z w` | where the 碼表 came from |
| `Space z W` | where the data is |

