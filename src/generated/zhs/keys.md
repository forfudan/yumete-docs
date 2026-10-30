<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

### 动：命令＋选择＋动作

| Key | What it does |
| --- | --- |
| `h j k l` | 左下上右；竖排里是沿着纵走 |
| `w b e` | 下一词首、上一词首、词尾；汉字中 b 和 e 按小句走 |
| `3w 5j` | 数字在前是次数 |
| `g30g / 30G` | 去第 30 行 |
| `gg ge` | 文件开头/末尾 |
| `gh gl gs` | 行首/行尾/首个非空白 |
| `C-d C-u` | 前进/后退半页；三分之二是 C-n/C-p，整页是 C-f/C-b |
| `gd gD` | 去/看它指的地方：脚注的注、拆分的那一行 |
| `g/ g?` | 这个词还在哪里：这边找/另一个窗口看 |
| `/ n N` | 搜索、下一处、上一处 |
| `C-o C-i` | 跳回去/再跳回来 |
| `M a  'a` | 记住这里/回到那里 |

### 改

| Key | What it does |
| --- | --- |
| `i a` | 在光标前/后开始打字 |
| `o O` | 下面/上面开新的一行，直接打字 |
| `d c` | 删掉选区/换掉选区(换完就在打字了) |
| `x` | 选这一整行——小説里一行就是一整段 |
| `v ;` | 延伸模式开关/收成一个字；Esc 也退出延伸 |
| `L H` | 下一句/上一句 |
| `} {` | 下一段/上一段 |
| `y p` | 复制/粘贴 |
| `u U` | 撤销/重做 |
| `.` | 重复上一次输入；vim 键位下是上一次改动 |
| `Q q` | 录一段按键/放一遍 |
| `> <` | 缩进/退缩进 |

### 空格 (`Space`)

| Key | What it does |
| --- | --- |
| `Space f` | 文件挑选器(项目路径) |
| `Space F` | 文件挑选器(工作路径) |
| `Space e` | 浏览文件(项目路径) |
| `Space E` | 浏览文件(本文件路径) |
| `Space b` | 缓冲区挑选器 |
| `Space y` | 复制到系统剪贴板 |
| `Space p` | 从系统剪贴板粘贴 |
| `Space P` | 从系统剪贴板粘贴在前 |
| `Space s` | 显示大纲 |
| `Space n` | 显示汉字信息(浮窗) |
| `Space N` | 显示汉字信息(边栏) |
| `Space k` | 显示定义文档(浮窗) |
| `Space K` | 显示定义文档(边栏) |
| `Space d` | 显示诊断信息(浮窗) |
| `Space D` | 显示诊断信息(边栏) |
| `Space x` | 显示改动(浮窗) |
| `Space X` | 显示改动(边栏) |
| `Space r` | 改名（各处一起改） |
| `Space a` | 代码动作 |
| `Space i` | 显示表格行记录(浮窗) |
| `Space I` | 显示表格行记录(边栏) |
| `Space w` | 工作区域操作 |
| `Space t` | 表格操作 |
| `Space "` | 寄存器·剪贴板 |
| `Space c` | 行注释 |
| `Space C` | 块注释 |
| `Space m` | 合并冲突 |
| `Space o` | 开上次的 |
| `Space z` | 输入法 |
| `Space /` | 搜索面板 |
| `Space ?` | 命令一览 |
| `Space Space` | 下一页 |
| `Space Backspace` | 上一页 |

### g 前往 (`g`)

| Key | What it does |
| --- | --- |
| `gg` | 文件开头 |
| `g<N>g` | 前往第 N 行 |
| `ge` | 文件末尾 |
| `gh / gl` | 行首/行尾 |
| `gs` | 首个非空白字符 |
| `gf` | 打开这个文件 |
| `gL` | 跟着链接走 |
| `gw` | 跳到当前屏幕某位置 |
| `gx` | 两字母定位单词 |
| `gz` | 多字母定位汉字 |
| `ga` | 回到最近打开的缓冲区 |
| `gn / gp` | 下/上一个缓冲区 |
| `gd` | 前往定义 |
| `gD` | 前往定义(另一窗口显示) |
| `gr` | 用到它的每一处 |
| `g/` | 搜索所选内容 |
| `g?` | 搜索所选内容(另一窗口显示) |
| `gj / gk` | 下/上一逻辑行 |
| `g.` | 回到最后改动的地方 |
| `gt / gc / gb` | 光标移至屏幕顶部/中部/底部 |

### m (`m`)

| Key | What it does |
| --- | --- |
| `mm` | 前往配对符号的另一个 |
| `mi` | 选择配对符号内部字符 |
| `ma` | 选择配对符号和内部字符 |
| `ms` | 使用配对符号包住选区 |
| `md` | 移除配对符号 |
| `mr` | 替换配对符号 |

### 下一个 (`]`)

| Key | What it does |
| --- | --- |
| `]m` | 合并冲突 |
| `]g` | 改动 |
| `]d / ]D` | 诊断(大写：第一个/最后一个) |
| `]p` | 下一段 |
| `]␣` | 下面加一条空行 |
| `]f` | 函数 |
| `]t` | 类 |
| `]c` | 注释 |

### 上一个 (`[`)

| Key | What it does |
| --- | --- |
| `[m` | 合并冲突 |
| `[g` | 改动 |
| `[d / [D` | 诊断(大写：第一个/最后一个) |
| `[p` | 上一段 |
| `[␣` | 上面加一条空行 |
| `[f` | 函数 |
| `[t` | 类 |
| `[c` | 注释 |

### 这一行挪到哪 (`z`)

| Key | What it does |
| --- | --- |
| `zz` | 中间 |
| `zt` | 顶上 |
| `zb` | 底下 |

### 工作区域操作 (`C-w`)

| Key | What it does |
| --- | --- |
| `C-w w` | 下一个 |
| `C-w h / C-w j / C-w k / C-w l` | 按方向走 |
| `C-w e / C-w i` | 开关左右栏 |
| `C-w E / C-w I` | 进左右栏 |
| `C-w s` | 下面开一个窗口 |
| `C-w v` | 旁边开一个窗口 |
| `C-w n` | 开一个空白窗口 |
| `C-w q` | 关掉这一区 |
| `C-w o` | 只留这一区 |

### 开一个空白窗口 (`C-w n`)

| Key | What it does |
| --- | --- |
| `C-w n s` | 下面开一个空白窗口 |
| `C-w n v` | 旁边开一个空白窗口 |

### ␣t 表格 (`Space t`)

| Key | What it does |
| --- | --- |
| `Space t o` | 源码视图(显示源码) |
| `Space t b` | 基本视图(表格按列对齐) |
| `Space t t` | 全窗视图(表格独占窗口) |
| `Space t q` | 退出全窗视图 |
| `Space t ] / Space t [` | 下一张表/上一张表 |
| `Space t x` | 转换表格格式(分隔符) |
| `Space t w` | 长单元格:换行/折叠/全文 |
| `Space t /` | 按列搜索(可指定列范围) |
| `Space t ?` | 按列搜索(另一窗口显示) |
| `Space t g` | 去某一格(␣t 20,20g) |
| `Space t r / Space t R` | 插入新行(下/上) |
| `Space t c / Space t C` | 加一栏(右/左) |
| `Space t d / Space t D` | 删这行/这栏 |
| `Space t j / Space t k` | 这行下移/上移 |
| `Space t h / Space t l` | 这栏左移/右移 |
| `Space t y / Space t p / Space t P` | 复制该栏/贴到右边/贴到左边 |
| `Space t v` | 用复制的栏盖掉该栏 |
| `Space t 1s / Space t 1S` | 按列升序/降序排列(␣t1s; 1a2d8as 多列排序) |
| `Space t < / Space t = / Space t >` | 这栏靠左/居中/靠右 |
| `Space t F` | 重排对齐 |
| `Space t i` | 该行记录 |
| `Space t H` | 表格第一行是否为标题 |

### 转换表格格式(分隔符) (`Space t x`)

| Key | What it does |
| --- | --- |
| `Space t x p / Space t x P` | pipe(转换/粘贴) |
| `Space t x c / Space t x C` | csv(转换/粘贴) |
| `Space t x t / Space t x T` | tsv(转换/粘贴) |

### 字形 (`` ` ``)

| Key | What it does |
| --- | --- |
| `` `l `` | 转小写 |
| `` `u `` | 转大写 |
| `` `` `` | 大小写互换 |
| `` `s `` | 繁→简 |
| `` `t `` | 简→繁 |
| `` `w `` | 简→台湾繁 |
| `` `f `` | 转全角 |
| `` `h `` | 转半角 |
| `` `k `` | 简→香港繁 |
| `` `c `` | 简→大陆繁 |
| `` `g `` | 简→古籍繁 |
| `` `j `` | 繁→日文新字体 |
|  | vi 的记号：M 记、' 回去 |

### 开上次的 (`Space o`)

| Key | What it does |
| --- | --- |
| `Space o f` | 最近开过的档 |
| `Space o g` | 最近开过的档(全部项目) |
| `Space o p` | 最近开过的项目 |
| `Space o r` | 接着上次 |

### 输入法 (`Space z`)

| Key | What it does |
| --- | --- |
| `Space z z` | 输入法开/关 |
| `Space z m` | 上屏方式 |
| `Space z p` | 候选栏画在哪 |
| `Space z e` | 正在打的那一段写在哪 |
| `Space z y` | 输入预测 开/关 |
| `Space z i` | 选方案 |
| `Space z n` | 下一个方案 |
| `Space z 3-9` | 一页几条 |
| `Space z /` | 候选旁的拆分注解 |
| `Space z t` | 改用安装版码表 |
| `Space z w` | 查看码表源 |
| `Space z W` | 查看数据位置 |

