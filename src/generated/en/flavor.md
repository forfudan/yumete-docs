<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## `basic`

| Item | helix | vim | What it does |
| --- | --- | --- | --- |
| [`case_menu`](#case_menu) | `` ` `` | `` g` `` | case and conversion menu |
| [`sentences_on_h_l`](#sentences_on_h_l) | `H` `L` | — | move by sentence |
| [`marks_on_m_quote`](#marks_on_m_quote) | `M` `'` | — | set and go to marks |
| [`two_thirds_page`](#two_thirds_page) | `C-n` `C-p` | — | two-thirds of a page |
| [`tables`](#tables) | `Space t` | `Space t` | table menu |
| [`merge_conflicts`](#merge_conflicts) | `Space m` `]m` `[m` | `Space m` | merge conflicts |
| [`input_method_menu`](#input_method_menu) | `Space z` | `Space z` | input method menu |
| [`recent_files`](#recent_files) | `Space o` | `Space o` | recent files and projects |
| [`registers_menu`](#registers_menu) | `Space "` | `Space "` | registers menu |
| [`dictionary`](#dictionary) | `Space n` `Space N` | `Space n` `Space N` | dictionary |
| [`popup_panel_pairs`](#popup_panel_pairs) | `Space K` `Space l` `Space L` `Space x` `Space X` `Space i` `Space I` | `Space K` `Space l` `Space L` `Space x` `Space X` `Space i` `Space I` | popups and their sidebars |
| [`explorer_here`](#explorer_here) | `Space E` | `Space E` | browse from this file's folder |
| [`space_paging`](#space_paging) | `Space Space` `Space Backspace` | `Space Space` `Space Backspace` | turn a page |
| [`sidebars`](#sidebars) | `C-w e` `C-w i` `C-w E` `C-w I` | `C-w e` `C-w i` `C-w E` `C-w I` | sidebars |
| [`goto_extras`](#goto_extras) | `gz` `gZ` `g/` `gL` `gx` | `gz` `gZ` `g/` `gL` `gW` | jumps, word search, links |
| [`window_sides`](#window_sides) | `C-w n h` `C-w n j` `C-w n k` `C-w n l` `C-w n H` `C-w n J` `C-w n K` `C-w n L` | — | new window on a side |
| [`split_join`](#split_join) | `gS` | `gS` | split and join brackets |
| [`insert_extras`](#insert_extras) | `C-a` `C-e` `C-n` `C-g` | — | Insert: line ends, completion, undo step |
| [`insert_ctrl_c`](#insert_ctrl_c) | `C-c` | — | Insert: leave |
| [`x_selects_upward`](#x_selects_upward) | `X` | — | select the line above |
| [`bare_g_last_line`](#bare_g_last_line) | `G` | — | to the last line |
| [`move_lines`](#move_lines) | `A-j` `A-k` | `A-j` `A-k` | move lines up and down |
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
| [`delete_keeps_register`](#delete_keeps_register) | `d` `c` `A-d` `A-c` | — | delete without yanking |
| [`esc_collapses`](#esc_collapses) | `Esc` | — | collapse to one cursor |
| [`shift_tab_other_indent`](#shift_tab_other_indent) | `S-Tab` | `S-Tab` | the other kind of indent |

## What each item changes

### `case_menu` {#case_menu}

On: the backtick opens the case and conversion menu (g then the backtick under vim). Off: helix's backtick lowercases and Alt-backtick uppercases; vim's g then the backtick goes to a mark.

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `` ` `` | case group: upper/lower, traditional/simplified | to lowercase |
| convert | `` `l `` | to lowercase |  |
| convert | `` `u `` | to uppercase |  |
| convert | ``` `` ``` | switch case |  |
| convert | `` `s `` | traditional → simplified |  |
| convert | `` `t `` | simplified → traditional |  |
| convert | `` `w `` | simplified → Taiwan traditional |  |
| convert | `` `f `` | to fullwidth |  |
| convert | `` `h `` | to halfwidth |  |
| convert | `` `k `` | simplified → Hong Kong traditional |  |
| convert | `` `c `` | simplified → mainland traditional |  |
| convert | `` `g `` | simplified → classical traditional |  |
| convert | `` `j `` | traditional → Japanese shinjitai |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g goto | `` g` `` | case group: upper/lower, traditional/simplified | go to the very place of a mark (then a letter) |
| convert | `` g`l `` | to lowercase |  |
| convert | `` g`u `` | to uppercase |  |
| convert | ``` g`` ``` | switch case |  |
| convert | `` g`s `` | traditional → simplified |  |
| convert | `` g`t `` | simplified → traditional |  |
| convert | `` g`w `` | simplified → Taiwan traditional |  |
| convert | `` g`f `` | to fullwidth |  |
| convert | `` g`h `` | to halfwidth |  |
| convert | `` g`k `` | simplified → Hong Kong traditional |  |
| convert | `` g`c `` | simplified → mainland traditional |  |
| convert | `` g`g `` | simplified → classical traditional |  |
| convert | `` g`j `` | traditional → Japanese shinjitai |  |

### `sentences_on_h_l` {#sentences_on_h_l}

On: H and L go to the previous and the next sentence. Off: helix leaves both unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `H` | previous sentence |  |
| Normal mode | `L` | next sentence |  |

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
| Space | `Space t` | table |  |
| ␣t table | `Space t o` | source view |  |
| ␣t table | `Space t b` | basic view: columns aligned |  |
| ␣t table | `Space t t` | window view: the table fills the window |  |
| ␣t table | `Space t q` | leave window view |  |
| ␣t table | `Space t ] / Space t [` | next / previous table |  |
| ␣t table | `Space t x` | convert the table delimiter |  |
| ␣t table | `Space t w` | long cells: wrap / fold / full |  |
| ␣t table | `Space t /` | search by column (range optional) |  |
| ␣t table | `Space t g` | go to a cell (␣t20,20g) |  |
| ␣t table | `Space t r / Space t R` | insert row (below / above) |  |
| ␣t table | `Space t c / Space t C` | insert column (right / left) |  |
| ␣t table | `Space t d / Space t D` | delete this row / column |  |
| ␣t table | `Space t j / Space t k` | move this row down / up |  |
| ␣t table | `Space t h / Space t l` | move this column left / right |  |
| ␣t table | `Space t y / Space t p / Space t P` | copy this column / paste right / paste left |  |
| ␣t table | `Space t v` | overwrite this column with the copied one |  |
| ␣t table | `Space t 1s / Space t 1S` | sort by column, ascending / descending (␣t1s; ␣t1a2d8as for several) |  |
| ␣t table | `Space t < / Space t = / Space t >` | align column left / centre / right |  |
| ␣t table | `Space t F` | realign |  |
| ␣t table | `Space t i` | this row's record |  |
| ␣t table | `Space t H` | first row as header |  |
| convert the table delimiter | `Space t x p / Space t x P` | pipe (convert / paste) |  |
| convert the table delimiter | `Space t x c / Space t x C` | csv (convert / paste) |  |
| convert the table delimiter | `Space t x t / Space t x T` | tsv (convert / paste) |  |

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
| Space | `Space z` | input method |  |
| input method | `Space z z` | input method on / off (on is Chinese) |  |
| input method | `Space z m` | commit mode |  |
| input method | `Space z p` | candidate bar position |  |
| input method | `Space z e` | where uncommitted text shows |  |
| input method | `Space z y` | prediction on / off |  |
| input method | `Space z i` | pick a scheme |  |
| input method | `Space z n` | next scheme |  |
| input method | `Space z 3-9` | candidates per page |  |
| input method | `Space z 0` | charset filter |  |
| input method | `Space z s` | charset sort |  |
| input method | `Space z g` | sentence lanes |  |
| input method | `Space z b` | use built-in scheme |  |
| input method | `Space z /` | next annotation mode |  |
| input method | `Space z t` | use the installed code table |  |
| input method | `Space z w` | where the code table came from |  |
| input method | `Space z W` | where the data is |  |

### `recent_files` {#recent_files}

On: Space o lists recent files and projects. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space o` | open recent |  |
| open recent | `Space o f` | recent files |  |
| open recent | `Space o g` | recent files (all projects) |  |
| open recent | `Space o p` | recent projects |  |
| open recent | `Space o r` | restore last session |  |

### `registers_menu` {#registers_menu}

On: Space then the double quote opens the registers menu. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space "` | registers |  |

### `dictionary` {#dictionary}

On: Space n looks up the character under the cursor in a popup, Space N in the sidebar. Off: both are unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space n` | char info (popup) |  |
| Space | `Space N` | char info (sidebar) |  |

### `popup_panel_pairs` {#popup_panel_pairs}

On: Space K puts the hover in the sidebar; Space l, x and i show a diagnostic, a change or a table record in a popup, the capitals in the sidebar. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space K` | show docs (sidebar) |  |
| Space | `Space l` | diagnostic (popup) |  |
| Space | `Space L` | diagnostic (sidebar) |  |
| Space | `Space x` | show change (popup) |  |
| Space | `Space X` | show change (sidebar) |  |
| Space | `Space i` | row record (popup) |  |
| Space | `Space I` | row record (sidebar) |  |

### `explorer_here` {#explorer_here}

On: Space E browses files from this file's folder. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space E` | browse this folder |  |

### `space_paging` {#space_paging}

On: Space Space turns a page down and Space Backspace a page up. Off: both are unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Space | `Space Space` | page down |  |
| Space | `Space Backspace` | page up |  |

### `sidebars` {#sidebars}

On: C-w e and C-w i show or hide the left and right sidebars, C-w E and C-w I go into them. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| region | `C-w e / C-w i` | toggle the left / right sidebar |  |
| region | `C-w E / C-w I` | go into the left / right sidebar |  |

### `goto_extras` {#goto_extras}

On: gz jumps by first letters, gZ by pinyin, g/ searches the word under the cursor, gL follows any link; under helix gx opens a web address, under vim gW is the jump labels. Off: unbound.

Under helix:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g goto | `gL` | follow link |  |
| g goto | `gx` | open URL in browser |  |
| g goto | `gz` | jump to a word by two letters |  |
| g goto | `gZ` | jump to a character by reading |  |
| g goto | `g/` | search the selection |  |

Under vim:

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g goto | `gL` | follow link |  |
| g goto | `gW` | jump to a spot on screen |  |
| g goto | `gz` | jump to a word by two letters |  |
| g goto | `gZ` | jump to a character by reading |  |
| g goto | `g/` | search the selection |  |

### `window_sides` {#window_sides}

On: in the C-w n (Space w n) group, h j k l open a blank window on the left, below, above or on the right, and H J K L open one with the buffer picker. Off: the eight keys are unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| new blank window | `C-w n h` | new blank window on the left |  |
| new blank window | `C-w n j` | new blank window below |  |
| new blank window | `C-w n k` | new blank window above |  |
| new blank window | `C-w n l` | new blank window on the right |  |
| new blank window | `C-w n H` | new window on the left, picking a buffer |  |
| new blank window | `C-w n J` | new window below, picking a buffer |  |
| new blank window | `C-w n K` | new window above, picking a buffer |  |
| new blank window | `C-w n L` | new window on the right, picking a buffer |  |

### `split_join` {#split_join}

On: gS puts the items in the brackets around the cursor one per line, and back onto one line when pressed again. Off: gS is unbound; :split-join still works.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g goto | `gS` | split or join items in brackets |  |

### `insert_extras` {#insert_extras}

On: in Insert mode C-a and C-e go to the line's start and end, C-n completes, C-g starts a new undo step. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-a` | start of line |  |
| Insert mode | `C-e` | to the end of the line, after its last character |  |
| Insert mode | `C-g` | start a new undo step |  |

### `insert_ctrl_c` {#insert_ctrl_c}

On: in Insert mode C-c goes back to Normal mode, as Esc does. Off: unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `C-c` | leave Select mode and dismiss anything shown briefly |  |

### `x_selects_upward` {#x_selects_upward}

On: X selects the line above, one more each press, as x does downward. Off: helix's X, which extends the selection to whole lines.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `X` | select the line above, or one more line upward | extend the selection to whole lines |

### `bare_g_last_line` {#bare_g_last_line}

On: G with no count goes to the start of the last line; with a count, to that line. Off: helix's G, which does nothing without a count.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `G` | go to line N, or with no count to the last line | go to line N (count) |

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
| Normal mode | `0` | start of line |  |
| Normal mode | `^` | first non-blank character |  |

### `d_to_line_end` {#d_to_line_end}

On: D deletes to the end of the line into the register, A-D without filling it. Off: both are unbound.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `D` | delete to the end of the line |  |
| Normal mode | `A-D` | delete to the end of the line without yanking |  |

### `block_comment_lines` {#block_comment_lines}

On: Space C over several whole lines in Markdown, Typst or HTML puts <!-- and --> on lines of their own. Off: as in helix, the marks go at the first line's start and the last line's end.

It changes what its keys do, not which command they run.

### `heading_folds` {#heading_folds}

On: each Markdown or Typst heading folds its section; all start open. Off: vim's, only folds made with zf.

It changes what its keys do, not which command they run.

### `helix_fold_keys` {#helix_fold_keys}

On: vim's za, zR and zM under helix (open or close a fold, open all, close all); zf makes a fold of the selected lines. Off: unbound; folds by command only.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| view | `za` | toggle fold |  |
| view | `zR` | open all folds |  |
| view | `zM` | close all folds |  |
| view | `zf` | fold the selected lines |  |

### `vim_comment_keys` {#vim_comment_keys}

On: under the vim keymap gc with a motion, gcc and Visual gc comment the lines, as vim 9.1's package and Neovim do. Off: only c in the Space menu.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| g goto | `gc` | comment (then a motion) |  |

### `vim_space_menu` {#vim_space_menu}

On: under vim, Space opens the Space menu. Off: Space moves right as in vim, and the backslash opens the menu.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Space` | Space menu | one character right |

### `helix_keys_under_vim` {#helix_keys_under_vim}

On: under vim, helix's keys on the keys vim leaves free: the Alt keys, C-s, Z, gb, gy and more. Off: they do nothing, as in vim.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Z` | view group (sticky) |  |
| Normal mode | `C-s` | save this position to the jump list |  |
| Normal mode | `A-!` | append a command's output after the selection |  |
| Normal mode | `A-(` | rotate the selections' contents backward |  |
| Normal mode | `A-)` | rotate the selections' contents forward |  |
| Normal mode | `A-*` | search for the selection exactly |  |
| Normal mode | `A-,` | remove the primary selection |  |
| Normal mode | `A--` | merge all selections into one |  |
| Normal mode | `A-.` | repeat the last f or t |  |
| Normal mode | `A-:` | make every selection face forward |  |
| Normal mode | `A-;` | move the cursor to the other end of the selection |  |
| Normal mode | `A-_` | merge adjacent selections |  |
| Normal mode | `` A-` `` | to uppercase |  |
| Normal mode | `A-a` | select every sibling node |  |
| Normal mode | `A-b` | to the start of the enclosing node, then of its parent |  |
| Normal mode | `A-c` | change the selection without yanking |  |
| Normal mode | `A-C` | add a selection on the previous line |  |
| Normal mode | `A-d` | delete the selection without yanking |  |
| Normal mode | `A-e` | to the end of the enclosing node |  |
| Normal mode | `A-i` | shrink the selection back, or to its first child node |  |
| Normal mode | `A-I` | select every child node |  |
| Normal mode | `A-J` | join lines and select where they meet |  |
| Normal mode | `A-K` | remove selections matching a regex |  |
| Normal mode | `A-n` | select the next sibling node |  |
| Normal mode | `A-o` | expand the selection to the parent syntax node |  |
| Normal mode | `A-p` | select the previous sibling node |  |
| Normal mode | `A-s` | split the selection into its lines |  |
| Normal mode | `A-u` | undo (same as u) |  |
| Normal mode | `A-U` | redo (same as U) |  |
| Normal mode | `A-x` | shrink the selection to whole lines |  |
| Normal mode | `A-\|` | pipe the selection to a command, keeping the text |  |
| Insert mode | `A-d` | delete the word after the cursor |  |
| Insert mode | `C-k` | delete to the end of the line, never the line break (vim) |  |
| g goto | `gy` | go to type definition |  |
| g goto | `g.` | last change |  |
| g goto | `gb` | screen top / middle / bottom |  |
| next… | `]g / ]G` | a change (capital: the first / the last) |  |
| next… | `]e` | an entry |  |
| next… | `]x` | an XML element |  |
| previous… | `[g / [G` | a change (capital: the first / the last) |  |
| previous… | `[e` | an entry |  |
| previous… | `[x` | an XML element |  |

### `delete_keeps_register` {#delete_keeps_register}

On: d and c delete without filling the register, and A-d and A-c cut. Off: helix's d and c cut.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `c` | change the selection without yanking | cut into the register, then change |
| Normal mode | `d` | delete the selection without yanking | cut the selection |
| Normal mode | `D` | delete to the end of the line without yanking | delete to the end of the line |
| Normal mode | `A-c` | cut into the register, then change | change the selection without yanking |
| Normal mode | `A-d` | cut the selection | delete the selection without yanking |
| Normal mode | `A-D` | delete to the end of the line | delete to the end of the line without yanking |

### `esc_collapses` {#esc_collapses}

On: in Normal mode Esc also collapses the selections to one cursor. Off: as in helix, Esc only leaves Select mode.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Normal mode | `Esc` | leave Select mode, or collapse to one cursor | leave Select mode and dismiss anything shown briefly |

### `shift_tab_other_indent` {#shift_tab_other_indent}

On: in Insert mode S-Tab types the other kind of indent (a tab where the file uses spaces). Off: S-Tab types the file's own.

| Where | Key | With the item | Without it |
| --- | --- | --- | --- |
| Insert mode | `S-Tab` | insert the other kind of indent, a tab or spaces | insert an indent, the kind the file uses |

