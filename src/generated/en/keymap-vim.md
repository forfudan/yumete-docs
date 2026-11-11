<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | insert after the cursor (vim's a) | `vim_append_mode` |
| `A` | insert at the end of the line (vim's A) | `vim_insert_at_line_end` |
| `b` | to the start of the previous word, no selection | `jump_prev_word_start` |
| `B` | to the start of the previous long word, no selection | `jump_prev_long_word_start` |
| `c` | change (then a motion) | `operator_change` |
| `C` | as `c$` | `@c$` |
| `d` | delete (then a motion) | `operator_delete` |
| `D` | as `d$` | `@d$` |
| `e` | to the end of the next word, no selection | `jump_next_word_end` |
| `E` | to the end of the next long word, no selection | `jump_next_long_word_end` |
| `f` | find a character forward, selecting up to it | `find_next_char` |
| `F` | find a character backward, selecting back to it | `find_prev_char` |
| `g` | g group: go to | `goto_mode` |
| `G` | to line N, or to the last line without a count (vim's G) | `vim_goto_line` |
| `h` `Backspace` `Left` | one character left | `move_char_left` |
| `H` | top line on screen | `goto_window_top` |
| `i` | insert before the cursor (vim's i) | `vim_insert_mode` |
| `I` | insert before the first non-blank (vim's I) | `vim_insert_at_line_start` |
| `j` `C-n` `Down` | one line down, in the file | `move_line_down` |
| `J` | join with the next line (vim's J) | `vim_join_selections` |
| `k` `C-p` `Up` | one line up, in the file | `move_line_up` |
| `K` | show docs (popup) | `hover` |
| `l` `Space` `Right` | one character right | `move_char_right` |
| `L` | bottom line on screen | `goto_window_bottom` |
| `m` | set a mark (then a letter) | `add_mark` |
| `M` | middle line on screen | `goto_window_center` |
| `n` | the next match (vim's n) | `vim_search_next` |
| `N` | the previous match (vim's N) | `vim_search_prev` |
| `o` | open a line below (vim's o; a count repeats it) | `vim_open_below` |
| `O` | open a line above (vim's O; a count repeats it) | `vim_open_above` |
| `p` | paste after (vim's p) | `vim_paste_after` |
| `P` | paste before (vim's P) | `vim_paste_before` |
| `q` | record a macro (then a letter) | `vim_record_macro` |
| `Q` | replay the last recorded macro (vim's Q) | `vim_replay_last_macro` |
| `r` | replace each selected character with another | `replace` |
| `R` | Replace mode: typing writes over the text | `replace_mode` |
| `s` | as `cl` | `@c{n}l` |
| `S` | as `cc` | `@cc` |
| `t` | find a character forward, selecting up to just before it | `find_till_char` |
| `T` | find a character backward, selecting back to just after it | `till_prev_char` |
| `u` | undo | `undo` |
| `U` | undo every change on this line | `undo_line` |
| `v` | Select mode: moving grows the selection | `select_mode` |
| `V` | line-wise Select mode | `select_line_mode` |
| `w` | to the start of the next word, no selection | `jump_next_word_start` |
| `W` | to the start of the next long word, no selection | `jump_next_long_word_start` |
| `x` | delete the character under the cursor, never the line break (vim's x) | `vim_delete_char_forward` |
| `X` | delete the character before the cursor | `delete_char_backward` |
| `y` | yank (then a motion) | `operator_yank` |
| `Y` | as `y$` | `@y$` |
| `z` | view group: place the cursor line, scroll, fold | `view_mode` |
| `0` | as `gh` | `@gh` |
| `"` | pick a register (then a letter) | `select_register` |
| `#` | search backward for the word under the cursor | `search_word_backward` |
| `$` `End` | the end of the line (vim's $: moving down keeps to line ends) | `vim_goto_line_end` |
| `%` | the matching bracket, or the next one on the line (vim's %) | `vim_match_brackets` |
| `'` | go to a mark (then a letter) | `goto_mark` |
| `(` | to the previous sentence, no selection | `jump_prev_sentence` |
| `)` | to the next sentence, no selection | `jump_next_sentence` |
| `*` | search for the selection | `search_selection` |
| `+` | as `jgs` | `@jgs` |
| `,` | find that character again, in reverse | `repeat_find_char_reverse` |
| `-` | as `kgs` | `@kgs` |
| `.` | repeat the last change with a new count | `vim_repeat_last_change` |
| `/` | search forward | `search` |
| `:` | command line, over the Visual area when opened from Visual mode (vim's :) | `vim_command_mode` |
| `;` | find that character again | `repeat_find_char` |
| `<` | unindent (then a motion) | `operator_unindent` |
| `>` | indent (then a motion) | `operator_indent` |
| `?` | search backward | `rsearch` |
| `@` | replay (then a letter) | `vim_replay_macro` |
| `[` | [ group: go to previous | `left_bracket_mode` |
| `\` | Space menu | `space_mode` |
| `]` | ] group: go to next | `right_bracket_mode` |
| `^` | as `gs` | `@gs` |
| `_` | first non-blank character (a count moves that many lines down) | `vim_goto_first_nonwhitespace` |
| `` ` `` | go to the very place of a mark (then a letter) | `goto_mark_exact` |
| `{` | to the previous paragraph, no selection | `jump_prev_paragraph` |
| `\|` | go to column N of the line (count) | `goto_column` |
| `}` | to the next paragraph, no selection | `jump_next_paragraph` |
| `~` | switch case and move on (vim's ~) | `vim_switch_case` |
| `C-6` `C-^` | back to the last buffer | `goto_last_accessed_file` |
| `C-a` | the number at or after the cursor, plus one (vim's C-a) | `vim_increment` |
| `C-b` `PageUp` | a page up | `page_up` |
| `C-d` | half a page down | `page_cursor_half_down` |
| `C-e` | scroll down a line, the cursor keeping its place | `scroll_down` |
| `C-f` `PageDown` | a page down | `page_down` |
| `C-i` `Tab` | jump forward | `jump_forward` |
| `C-o` | jump back | `jump_backward` |
| `C-r` | redo (vim's C-r) | `vim_redo` |
| `C-u` | half a page up | `page_cursor_half_up` |
| `C-v` | select a block (vim's C-v) | `vim_visual_block_mode` |
| `C-w` | window group | `window_mode` |
| `C-x` | the number at or after the cursor, minus one (vim's C-x) | `vim_decrement` |
| `C-y` | scroll up a line, the cursor keeping its place | `scroll_up` |
| `C-z` | suspend to the shell; fg brings it back | `suspend` |
| `Esc` | back to Normal mode (vim: leaving Visual mode collapses the selection) | `vim_normal_mode` |
| `Enter` | next line's first non-blank character | `goto_next_line_nonwhitespace` |
| `Home` | start of line | `goto_line_start` |
| `ZQ` | `:quit!` | `:quit!` |
| `ZZ` | `:x` | `:x` |

## Visual mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | select around an object (then its key) | `select_around_object` |
| `c` `s` | cut into the register, then change | `change_selection` |
| `d` `x` | cut the selection | `delete_selection` |
| `f` | extend forward to a character | `extend_next_char` |
| `F` | extend backward to a character | `extend_prev_char` |
| `h` `Left` | extend the selection one character left | `extend_char_left` |
| `i` | select inside an object (then its key) | `select_inner_object` |
| `l` `Right` | extend the selection one character right | `extend_char_right` |
| `o` | to the other end of the selection (vim's Visual o) | `vim_flip_selections` |
| `R` | replace the selection with the register | `replace_with_yanked` |
| `t` | extend forward to just before a character | `extend_till_char` |
| `T` | extend backward to just after a character | `extend_till_prev_char` |
| `u` | the selection to lowercase, leaving Visual mode (vim's u) | `vim_switch_to_lowercase` |
| `U` | the selection to uppercase, leaving Visual mode (vim's U) | `vim_switch_to_uppercase` |
| `y` | yank the selection, leaving Visual mode (vim's y) | `vim_yank` |
| `<` | unindent, the cursor keeping its column (vim) | `vim_unindent` |
| `>` | indent, the cursor keeping its column (vim) | `vim_indent` |
| `A-b` | extend to the start of the enclosing node | `extend_parent_node_start` |
| `A-e` | extend to the end of the enclosing node | `extend_parent_node_end` |
| `Home` | extend to the start of the line | `extend_to_line_start` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` `C-c` | leave Select mode and dismiss anything shown briefly | `normal_mode` |
| `Enter` `C-j` | new line, keeping the indent and list marker | `insert_newline` |
| `Backspace` `C-h` | delete the character before the cursor | `delete_char_backward` |
| `Delete` | delete the character after the cursor | `delete_char_forward` |
| `C-d` | unindent | `unindent` |
| `C-w` | delete the word before the cursor | `delete_word_backward` |
| `C-u` | delete back to where this Insert began (vim's C-u) | `vim_kill_to_line_start` |
| `C-r` | insert a register (then its letter) | `insert_register` |
| `C-o` | one Normal-mode command, then back to Insert mode (vim's C-o) | `run_one_normal_command` |
| `Left` | one character left | `move_char_left` |
| `Right` | one character right | `move_char_right` |
| `Up` | one line up, on screen | `move_visual_line_up` |
| `Down` | one line down, on screen | `move_visual_line_down` |
| `PageUp` | a page up | `page_up` |
| `PageDown` | a page down | `page_down` |
| `Home` | start of line | `goto_line_start` |
| `End` | to the end of the line, after its last character | `goto_line_end_newline` |
| `C-y` | insert the character above the cursor | `insert_char_above` |
| `C-e` | insert the character below the cursor | `insert_char_below` |
| `C-g` | start a new undo step | `commit_undo_checkpoint` |
| `Tab` `S-Tab` | insert an indent, the kind the file uses | `insert_tab` |

## Space (`\`)

| Key | What it does |
| --- | --- |
| `\f` | file picker (project) |
| `\F` | file picker (cwd) |
| `\e` | browse the project |
| `\b` | buffer picker |
| `\j` | jump list |
| `\'` | reopen last picker |
| `\g` | changed files |
| `\y` | copy to clipboard |
| `\Y` | copy main to clipboard |
| `\p` | paste from clipboard |
| `\P` | paste clipboard before |
| `\R` | replace with clipboard |
| `\s` | symbol picker |
| `\S` | project symbol picker |
| `\k` | show docs (popup) |
| `\d` | diagnostics picker |
| `\D` | project diagnostics |
| `\r` | rename symbol |
| `\h` | select all references |
| `\a` | code actions |
| `\w` | region |
| `\c` | line comment |
| `\C` | block comment |
| `\A-c` | line comment only |
| `\/` | search panel |
| `\?` | all commands |

## g goto (`g`)

| Key | What it does |
| --- | --- |
| `gg` | start of file |
| `g<N>g` | go to line N |
| `ge` | to the end of the previous word, no selection |
| `gE` | to the end of the previous long word, no selection |
| `gf` | open this file |
| `gw` | reflow lines, keeping the cursor (vim's gw) |
| `gx` | open URL in browser |
| `gn / gN` | next / previous match |
| `gd` | go to definition |
| `gD` | go to declaration |
| `gj` | one line down, on screen |
| `gk` | one line up, on screen |
| `gv` | reselect last selection |
| `gi` | insert again where the last Insert stopped |
| `g; / g,` | older / newer change |
| `gu / gU / g~` | lowercase / uppercase / swap case, then a motion |
| `gq` | reflow to the width, then a motion |
| `gJ` | join the next line without a space |
| `` g` `` | go to the very place of a mark (then a letter) |

## next… (`]`)

| Key | What it does |
| --- | --- |
| `]d / ]D` | a diagnostic (capital: the first / the last) |
| `]c` | a change |
| `]p` | paste after, indented like this line (vim's ]p) |
| `]P` | paste before, indented like this line (vim's [p) |
| `]z` | end of this fold |
| `]␣` | add a blank line below |

## previous… (`[`)

| Key | What it does |
| --- | --- |
| `[d / [D` | a diagnostic (capital: the first / the last) |
| `[c` | a change |
| `[p / [P` | paste before, indented like this line (vim's [p) |
| `[z` | start of this fold |
| `[␣` | add a blank line above |

## view (`z`)

| Key | What it does |
| --- | --- |
| `zz` | center |
| `zf` | create a fold over a motion |
| `zF` | fold N lines |
| `zo` | open fold |
| `zO` | open folds recursively |
| `zc` | close fold |
| `zC` | close folds recursively |
| `za` | toggle fold |
| `zA` | toggle folds recursively |
| `zv` | open folds to the cursor line |
| `zR` | open all folds |
| `zM` | close all folds |
| `zd` | delete the fold here, keep the text |
| `zD` | delete all zf folds here |
| `zE` | delete all zf folds |
| `zj` | start of next fold |
| `zk` | end of previous fold |
| `zn` | disable folds |
| `zN` | enable folds |
| `zi` | enable / disable folds |
| `zm` | close one more level |
| `zr` | open one more level |
| `zx` | refold to the level, show the cursor line |
| `zX` | refold to the level |
| `zt` | top |
| `zb` | bottom |

## region (`C-w`, `\w`)

| Key | What it does |
| --- | --- |
| `C-w w` | next |
| `C-w W` | previous |
| `C-w t` | the first window |
| `C-w b` | the last window |
| `C-w p` | previous window |
| `C-w x` | swap with the next |
| `C-w r` | rotate this row forward |
| `C-w R` | rotate this row back |
| `C-w H / C-w J / C-w K / C-w L` | move to that edge |
| `C-w c` | close window, don't quit |
| `C-w S / C-w s` | split above |
| `C-w F / C-w f` | open file under cursor above |
| `C-w ^` | previous file, above |
| `C-w :` | command line |
| `C-w h / C-w j / C-w k / C-w l` | go in that direction |
| `C-w v` | split left |
| `C-w n` | new blank window above |
| `C-w q` | close window |
| `C-w o` | keep only this window |

## new blank window (`C-w n`, `\wn`)

| Key | What it does |
| --- | --- |
| `C-w n s` | new blank window below |
| `C-w n v` | new blank window on the right |

