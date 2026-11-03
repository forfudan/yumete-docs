<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## `basic`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`case_menu`](#case_menu) | `` ` `` | `` g` `` | case and conversion menu |
| [`sentences_on_h_l`](#sentences_on_h_l) | `H` `L` | — | walk sentences |
| [`marks_on_m_quote`](#marks_on_m_quote) | `M` `'` | — | set and go to marks |
| [`two_thirds_page`](#two_thirds_page) | `C-n` `C-p` | — | two-thirds of a page |
| [`tables`](#tables) | `Space t` | `Space t` | table menu |
| [`merge_conflicts`](#merge_conflicts) | `Space m` `]m` `[m` | `Space m` | merge conflicts |
| [`input_method_menu`](#input_method_menu) | `Space z` | `Space z` | input method menu |
| [`recent_files`](#recent_files) | `Space o` | `Space o` | recent files and projects |
| [`registers_menu`](#registers_menu) | `Space "` | `Space "` | registers menu |
| [`dictionary`](#dictionary) | `Space n` `Space N` | `Space n` `Space N` | dictionary |
| [`popup_panel_pairs`](#popup_panel_pairs) | `Space K` `Space l` `Space L` `Space x` `Space X` `Space i` `Space I` | `Space K` `Space l` `Space L` `Space x` `Space X` `Space i` `Space I` | popups and their sidebars |
| [`explorer_here`](#explorer_here) | `Space E` | `Space E` | explorer from this file's folder |
| [`space_paging`](#space_paging) | `Space Space` `Space Backspace` | `Space Space` `Space Backspace` | turn a page |
| [`sidebars`](#sidebars) | `C-w e` `C-w i` `C-w E` `C-w I` | `C-w e` `C-w i` `C-w E` `C-w I` | sidebars |
| [`goto_extras`](#goto_extras) | `gz` `gZ` `g/` `gL` `gx` | `gz` `gZ` `g/` `gL` `gW` | jumps, word search, links |
| [`insert_extras`](#insert_extras) | `C-a` `C-e` `C-n` `C-g` | — | Insert: line ends, completion, undo step |
| [`insert_ctrl_c`](#insert_ctrl_c) | `C-c` | — | Insert: leave |
| [`x_selects_upward`](#x_selects_upward) | `X` | — | select the line above |
| [`bare_g_last_line`](#bare_g_last_line) | `G` | — | to the last line |
| [`move_lines`](#move_lines) | `A-j` `A-k` | `A-j` `A-k` | move lines down and up |
| [`line_start_keys`](#line_start_keys) | `0` `^` | — | line start, first character |
| [`d_to_line_end`](#d_to_line_end) | `D` `A-D` | — | delete to the line's end |
| [`block_comment_lines`](#block_comment_lines) | `Space C` | `Space C` | block comment marks on their own lines |
| [`heading_folds`](#heading_folds) |  |  | folds by heading |
| [`helix_fold_keys`](#helix_fold_keys) | `za` `zR` `zM` `zf` | — | fold keys under helix |
| [`vim_comment_keys`](#vim_comment_keys) | — | `gc` | vim's gc comments |
| [`vim_space_menu`](#vim_space_menu) | — | `Space` | the Space menu |
| [`helix_keys_under_vim`](#helix_keys_under_vim) | — | `g.` `;` `,` `A-C` `A-,` `A--` `A-_` `A-:` `A-x` `A-s` `A-(` `A-)` `A-K` `A-d` `A-c` `A-u` `A-U` `A-!` `A-\|` `A-J` `A-;` `A-*` `A-.` `` A-` `` `A-o` `A-i` `A-I` `A-p` `A-n` `A-e` `A-b` `A-a` `C-s` `Z` `gb` `gy` `]g` `[g` `]e` `[e` `]x` `[x` | helix's keys |

## `full`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`delete_keeps_register`](#delete_keeps_register) | `d` `c` `A-d` `A-c` | — | deleting keeps the register |
| [`esc_collapses`](#esc_collapses) | `Esc` | — | collapse to one cursor |
| [`shift_tab_other_indent`](#shift_tab_other_indent) | `S-Tab` | `S-Tab` | the other kind of indent |

## What each item changes

### `case_menu` {#case_menu}

On: the backtick opens the case and conversion menu (g then the backtick under vim). Off: helix's backtick lowercases and Alt-backtick uppercases; vim's g then the backtick goes to a mark.

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `` ` `` | the case group: upper and lower case, traditional and simplified | to lowercase |
| letter case | `` `l `` | to lowercase |  |
| letter case | `` `u `` | to uppercase |  |
| letter case | ``` `` ``` | switch case |  |
| letter case | `` `s `` | traditional → simplified |  |
| letter case | `` `t `` | simplified → traditional |  |
| letter case | `` `w `` | simplified → Taiwan 繁 |  |
| letter case | `` `f `` | to fullwidth |  |
| letter case | `` `h `` | to halfwidth |  |
| letter case | `` `k `` | simplified → Hong Kong 繁 |  |
| letter case | `` `c `` | simplified → mainland 繁 |  |
| letter case | `` `g `` | simplified → 古籍 繁 |  |
| letter case | `` `j `` | traditional → Japanese shinjitai |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g goto | `` g` `` | the case group: upper and lower case, traditional and simplified | go to a mark (then a letter) |
| letter case | `` g`l `` | to lowercase |  |
| letter case | `` g`u `` | to uppercase |  |
| letter case | ``` g`` ``` | switch case |  |
| letter case | `` g`s `` | traditional → simplified |  |
| letter case | `` g`t `` | simplified → traditional |  |
| letter case | `` g`w `` | simplified → Taiwan 繁 |  |
| letter case | `` g`f `` | to fullwidth |  |
| letter case | `` g`h `` | to halfwidth |  |
| letter case | `` g`k `` | simplified → Hong Kong 繁 |  |
| letter case | `` g`c `` | simplified → mainland 繁 |  |
| letter case | `` g`g `` | simplified → 古籍 繁 |  |
| letter case | `` g`j `` | traditional → Japanese shinjitai |  |

### `sentences_on_h_l` {#sentences_on_h_l}

On: H and L go to the previous and the next sentence. Off: helix leaves both unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `H` | the previous sentence |  |
| Normal mode | `L` | the next sentence |  |

### `marks_on_m_quote` {#marks_on_m_quote}

On: M sets a mark and ' goes back to it, across files. Off: both are unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `M` | set a mark (then a letter) |  |
| Normal mode | `'` | go to a mark (then a letter) |  |

### `two_thirds_page` {#two_thirds_page}

On: C-n and C-p turn two-thirds of a page down and up. Off: both are unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `C-n` | two thirds of a page down |  |
| Normal mode | `C-p` | two thirds of a page up |  |

### `tables` {#tables}

On: Space t opens the table menu. Off: the table commands are still on the : line.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space t` | table operations |  |
| t table | `Space t o` | source view: the file as written |  |
| t table | `Space t b` | basic view: the columns lined up |  |
| t table | `Space t t` | window view: the table takes the window |  |
| t table | `Space t q` | leave window view |  |
| t table | `Space t ] / Space t [` | the next table / the one before |  |
| t table | `Space t x` | convert the table's format (delimiter) |  |
| t table | `Space t w` | long cells: wrap / fold / whole |  |
| t table | `Space t /` | search down the columns (a column range can be given) |  |
| t table | `Space t g` | go to a cell (␣t20,20g) |  |
| t table | `Space t r / Space t R` | insert a new row (below / above) |  |
| t table | `Space t c / Space t C` | add a column (right / left) |  |
| t table | `Space t d / Space t D` | delete this row / column |  |
| t table | `Space t j / Space t k` | move this row down / up |  |
| t table | `Space t h / Space t l` | move this column left / right |  |
| t table | `Space t y / Space t p / Space t P` | yank this column / paste it to the right / to the left |  |
| t table | `Space t v` | write the yanked column over this one |  |
| t table | `Space t 1s / Space t 1S` | sort by column, ascending / descending (␣t1s; ␣t1a2d8as for several) |  |
| t table | `Space t < / Space t = / Space t >` | this column left / centre / right |  |
| t table | `Space t F` | line it up again |  |
| t table | `Space t i` | this row's record |  |
| t table | `Space t H` | whether the table's first row is a heading row |  |
| convert the table's format (delimiter) | `Space t x p / Space t x P` | pipe (convert / paste) |  |
| convert the table's format (delimiter) | `Space t x c / Space t x C` | csv (convert / paste) |  |
| convert the table's format (delimiter) | `Space t x t / Space t x T` | tsv (convert / paste) |  |

### `merge_conflicts` {#merge_conflicts}

On: Space m resolves a merge conflict, and under helix ]m and [m go to the next and the previous. Off: they are unbound.

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space m` | merge conflict |  |
| next… | `]m` | merge conflict |  |
| previous… | `[m` | merge conflict |  |
| merge conflict | `Space m o` | keep ours |  |
| merge conflict | `Space m t` | keep theirs |  |
| merge conflict | `Space m b` | keep both sides |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space m` | merge conflict |  |
| merge conflict | `Space m o` | keep ours |  |
| merge conflict | `Space m t` | keep theirs |  |
| merge conflict | `Space m b` | keep both sides |  |

### `input_method_menu` {#input_method_menu}

On: Space z opens the input method menu. Off: the key that switches between Chinese and English still works.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space z` | the input method |  |
| the input method | `Space z z` | input method on / off (on is Chinese) |  |
| the input method | `Space z m` | when a word commits |  |
| the input method | `Space z p` | where the candidates are drawn |  |
| the input method | `Space z e` | where what you are typing is written |  |
| the input method | `Space z y` | prediction (autocompletion) on or off |  |
| the input method | `Space z i` | pick a scheme |  |
| the input method | `Space z n` | the next scheme |  |
| the input method | `Space z 3-9` | candidates on a page |  |
| the input method | `Space z /` | the next annotation beside the candidates |  |
| the input method | `Space z t` | switch to the installed 碼表 |  |
| the input method | `Space z w` | where the 碼表 came from |  |
| the input method | `Space z W` | where the data is |  |

### `recent_files` {#recent_files}

On: Space o lists recent files and projects. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space o` | open something recent |  |
| open something recent | `Space o f` | recent files |  |
| open something recent | `Space o g` | recent files, everywhere |  |
| open something recent | `Space o p` | recent projects |  |
| open something recent | `Space o r` | take up the last session |  |

### `registers_menu` {#registers_menu}

On: Space then the double quote opens the registers menu. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space "` | registers |  |

### `dictionary` {#dictionary}

On: Space n looks up the character under the cursor in a popup, Space N in the sidebar. Off: both are unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space n` | character info (floating) |  |
| Space | `Space N` | character info (sidebar) |  |

### `popup_panel_pairs` {#popup_panel_pairs}

On: Space K puts the hover in the sidebar; Space l, x and i show a diagnostic, a change or a table record in a popup, the capitals in the sidebar. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space K` | documentation (sidebar) |  |
| Space | `Space l` | show diagnostics (float) |  |
| Space | `Space L` | show diagnostics (sidebar) |  |
| Space | `Space x` | show the change (float) |  |
| Space | `Space X` | show the change (sidebar) |  |
| Space | `Space i` | this row's record (floating) |  |
| Space | `Space I` | this row's record (sidebar) |  |

### `explorer_here` {#explorer_here}

On: Space E browses files from this file's folder. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space E` | browse files (this file's dir) |  |

### `space_paging` {#space_paging}

On: Space Space turns a page down and Space Backspace a page up. Off: both are unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space Space` | page down |  |
| Space | `Space Backspace` | page up |  |

### `sidebars` {#sidebars}

On: C-w e and C-w i show or hide the left and right sidebar, C-w E and C-w I go into it. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| region | `C-w e / C-w i` | toggle the left / right bar |  |
| region | `C-w E / C-w I` | go into the left / right sidebar |  |

### `goto_extras` {#goto_extras}

On: gz jumps by first letters, gZ by pinyin, g/ searches the word under the cursor, gL follows any link; under helix gx opens a web address, under vim gW is the jump labels. Off: unbound.

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g goto | `gL` | follow the link |  |
| g goto | `gx` | open the web address |  |
| g goto | `gz` | two letters to locate a word |  |
| g goto | `gZ` | more letters to locate a char |  |
| g goto | `g/` | search the selection |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g goto | `gL` | follow the link |  |
| g goto | `gW` | go to a place on this screen |  |
| g goto | `gz` | two letters to locate a word |  |
| g goto | `gZ` | more letters to locate a char |  |
| g goto | `g/` | search the selection |  |

### `insert_extras` {#insert_extras}

On: in Insert mode C-a and C-e go to the line's start and end, C-n completes, C-g starts a new undo step. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-a` | the start of the line |  |
| Insert mode | `C-e` | to the end of the line, after its last character |  |
| Insert mode | `C-g` | break the undo here |  |

### `insert_ctrl_c` {#insert_ctrl_c}

On: in Insert mode C-c goes back to Normal mode, as Esc does. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-c` | leave Select mode and put away what was shown for a moment |  |

### `x_selects_upward` {#x_selects_upward}

On: X selects the line above, one more each press, as x does downward. Off: helix's X, which extends the selection to whole lines.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `X` | select the line above, or one more line upward | grow the selection to whole lines |

### `bare_g_last_line` {#bare_g_last_line}

On: G with no count goes to the start of the last line; with a count, to that line. Off: helix's G, which does nothing without a count.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `G` | go to line N, or with no count to the last line | to line N (the count) |

### `move_lines` {#move_lines}

On: A-j and A-k move the selected lines down and up; in prose a line is a paragraph. Off: both are unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `A-j` | move the selected lines down |  |
| Normal mode | `A-k` | move the selected lines up |  |

### `line_start_keys` {#line_start_keys}

On: 0 and ^ go to the line's start and its first character, as in vim; the line's end is gl. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `0` | the start of the line |  |
| Normal mode | `^` | the first character that is not a space |  |

### `d_to_line_end` {#d_to_line_end}

On: D deletes to the end of the line into the register, A-D without filling it. Off: both are unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `D` | delete to the end of the line |  |
| Normal mode | `A-D` | delete to the end of the line, leaving the register as it is |  |

### `block_comment_lines` {#block_comment_lines}

On: Space C over several whole lines in Markdown, Typst or HTML puts <!-- and --> on lines of their own. Off: helix's, the marks at the first line's start and the last line's end.

It changes what its keys do, not which command they run.

### `heading_folds` {#heading_folds}

On: each Markdown or Typst heading folds its section; all start open. Off: vim's, only folds made with zf.

It changes what its keys do, not which command they run.

### `helix_fold_keys` {#helix_fold_keys}

On: vim's za, zR and zM under helix (open or close a fold, open all, close all); zf makes a fold of the selected lines. Off: unbound; folds by command only.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| view | `za` | open or close a fold (vim's za) |  |
| view | `zR` | open every fold (vim's zR) |  |
| view | `zM` | close every fold (vim's zM) |  |
| view | `zf` | make a fold of the selected lines |  |

### `vim_comment_keys` {#vim_comment_keys}

On: under the vim keymap gc with a motion, gcc and Visual gc comment the lines, as vim 9.1's package and Neovim do. Off: only c in the Space menu.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g goto | `gc` | comment out (then a motion) |  |

### `vim_space_menu` {#vim_space_menu}

On: under vim, Space opens the Space menu. Off: Space moves right as in vim, and the backslash opens the menu.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Space` | the Space menu | one character right |

### `helix_keys_under_vim` {#helix_keys_under_vim}

On: under vim, helix's keys on the keys vim leaves free: the Alt keys, C-s, Z, gb, gy and more. Off: they do nothing, as in vim.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Z` | the view group, staying open |  |
| Normal mode | `C-s` | save this place in the jump list |  |
| Normal mode | `A-!` | append a command's output after the selection |  |
| Normal mode | `A-(` | rotate the selections' contents backward |  |
| Normal mode | `A-)` | rotate the selections' contents forward |  |
| Normal mode | `A-*` | look for what is selected, exactly as written |  |
| Normal mode | `A-,` | remove the primary selection |  |
| Normal mode | `A--` | merge every selection into one |  |
| Normal mode | `A-.` | repeat the last f or t |  |
| Normal mode | `A-:` | make every selection face forward |  |
| Normal mode | `A-;` | move the cursor to the other end of the selection |  |
| Normal mode | `A-_` | merge the selections that touch |  |
| Normal mode | `` A-` `` | to uppercase |  |
| Normal mode | `A-a` | select every node beside this one |  |
| Normal mode | `A-b` | to the start of the node around the cursor, then of its parent |  |
| Normal mode | `A-c` | change the selection, leaving the register |  |
| Normal mode | `A-C` | copy the selection onto the previous line |  |
| Normal mode | `A-d` | delete the selection, leaving the register |  |
| Normal mode | `A-e` | to the end of the node around the cursor |  |
| Normal mode | `A-i` | shrink the selection back, or to its first child node |  |
| Normal mode | `A-I` | select every node inside this one |  |
| Normal mode | `A-J` | join lines and select where they meet |  |
| Normal mode | `A-K` | remove the selections that match a pattern |  |
| Normal mode | `A-n` | select the next syntax node |  |
| Normal mode | `A-o` | grow the selection to the syntax node around it |  |
| Normal mode | `A-p` | select the previous syntax node |  |
| Normal mode | `A-s` | split the selection into its lines |  |
| Normal mode | `A-u` | undo, as u does |  |
| Normal mode | `A-U` | redo, as U does |  |
| Normal mode | `A-x` | shrink the selection to whole lines |  |
| Normal mode | `A-\|` | pipe the selection to a command, keeping the text |  |
| Insert mode | `A-d` | delete the word after the cursor |  |
| Insert mode | `C-k` | delete to the end of the line, never the line break (vim) |  |
| g goto | `gy` | go to the type definition |  |
| g goto | `g.` | back to the last change |  |
| g goto | `gb` | the cursor to the top, middle or bottom of the screen |  |
| next… | `]g / ]G` | a change (capital: the first / the last) |  |
| next… | `]e` | an entry |  |
| next… | `]x` | an XML element |  |
| previous… | `[g / [G` | a change (capital: the first / the last) |  |
| previous… | `[e` | an entry |  |
| previous… | `[x` | an XML element |  |

### `delete_keeps_register` {#delete_keeps_register}

On: d and c delete without filling the register, and A-d and A-c cut. Off: helix's d and c cut.

It changes what its keys do, not which command they run.

### `esc_collapses` {#esc_collapses}

On: in Normal mode Esc also collapses the selections to one cursor. Off: helix's Esc only leaves select mode.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Esc` | leave select mode, or collapse to one cursor | leave Select mode and put away what was shown for a moment |

### `shift_tab_other_indent` {#shift_tab_other_indent}

On: in Insert mode S-Tab types the other kind of indent (a tab where the file uses spaces). Off: S-Tab types the file's own.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `S-Tab` | insert the other kind of indent, a tab or spaces | insert an indent, the kind the file uses |

