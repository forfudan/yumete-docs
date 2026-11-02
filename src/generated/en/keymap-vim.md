<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | insert after the cursor (vim's a) | `vim_append_mode` |
| `A` | insert at the end of the line (vim's A) | `vim_insert_at_line_end` |
| `b` | the cursor to the previous word's start, selecting nothing | `jump_prev_word_start` |
| `B` | the cursor to the previous long word's start, selecting nothing | `jump_prev_long_word_start` |
| `c` | change (then a motion) | `operator_change` |
| `C` | as `c$` | `@c$` |
| `d` | delete (then a motion) | `operator_delete` |
| `D` | as `d$` | `@d$` |
| `e` | the cursor to the next word's end, selecting nothing | `jump_next_word_end` |
| `E` | the cursor to the next long word's end, selecting nothing | `jump_next_long_word_end` |
| `f` | find a character forward, selecting up to it | `find_next_char` |
| `F` | find a character backward, selecting back to it | `find_prev_char` |
| `g` | the g group: go to | `goto_mode` |
| `G` | to line N, or to the last line without a count (vim's G) | `vim_goto_line` |
| `h` `Backspace` `Left` | one character left | `move_char_left` |
| `H` | the top line on screen | `goto_window_top` |
| `i` | insert before the cursor (vim's i) | `vim_insert_mode` |
| `I` | insert before the first non-blank (vim's I) | `vim_insert_at_line_start` |
| `j` `C-n` `Down` | one line down, in the file | `move_line_down` |
| `J` | join with the next line (vim's J) | `vim_join_selections` |
| `k` `C-p` `Up` | one line up, in the file | `move_line_up` |
| `K` | documentation (floating) | `hover` |
| `l` `Space` `Right` | one character right | `move_char_right` |
| `L` | the bottom line on screen | `goto_window_bottom` |
| `m` | set a mark (then a letter) | `add_mark` |
| `M` | the middle line on screen | `goto_window_center` |
| `n` | the next match (vim's n) | `vim_search_next` |
| `N` | the previous match (vim's N) | `vim_search_prev` |
| `o` | open a line below (vim's o; a count repeats it) | `vim_open_below` |
| `O` | open a line above (vim's O; a count repeats it) | `vim_open_above` |
| `p` | paste after (vim's p) | `vim_paste_after` |
| `P` | paste before (vim's P) | `vim_paste_before` |
| `q` | record a macro (then a letter) | `vim_record_macro` |
| `Q` | replay the macro | `replay_macro` |
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
| `w` | the cursor to the next word's start, selecting nothing | `jump_next_word_start` |
| `W` | the cursor to the next long word's start, selecting nothing | `jump_next_long_word_start` |
| `x` | delete the character under the cursor, never the line break (vim's x) | `vim_delete_char_forward` |
| `X` | delete the character before the cursor | `delete_char_backward` |
| `y` | yank (then a motion) | `operator_yank` |
| `Y` | as `y$` | `@y$` |
| `z` | the view group: put the cursor line at the top, middle or bottom | `view_mode` |
| `0` | as `gh` | `@gh` |
| `"` | pick a register (then a letter) | `select_register` |
| `#` | search backward for the word under the cursor | `search_word_backward` |
| `$` `End` | the end of the line (vim's $: moving down keeps to line ends) | `vim_goto_line_end` |
| `%` | the matching bracket, or the next one on the line (vim's %) | `vim_match_brackets` |
| `'` `` ` `` | go to a mark (then a letter) | `goto_mark` |
| `(` | the cursor to the previous sentence, selecting nothing | `jump_prev_sentence` |
| `)` | the cursor to the next sentence, selecting nothing | `jump_next_sentence` |
| `*` | look for what is selected | `search_selection` |
| `+` | as `jgs` | `@jgs` |
| `,` | find that character again, the other way | `repeat_find_char_reverse` |
| `-` | as `kgs` | `@kgs` |
| `.` | repeat the last change with a new count | `vim_repeat_last_change` |
| `/` | search forward | `search` |
| `:` | the command line | `command_mode` |
| `;` | find that character again | `repeat_find_char` |
| `<` | unindent (then a motion) | `operator_unindent` |
| `>` | indent (then a motion) | `operator_indent` |
| `?` | search backward | `rsearch` |
| `@` | replay the macro (then a letter) | `vim_replay_macro` |
| `[` | the [ group: the previous one of something | `left_bracket_mode` |
| `\` | the Space menu | `space_mode` |
| `]` | the ] group: the next one of something | `right_bracket_mode` |
| `^` | as `gs` | `@gs` |
| `_` | the first non-blank character, a count of lines down | `vim_goto_first_nonwhitespace` |
| `{` | the cursor to the previous paragraph, selecting nothing | `jump_prev_paragraph` |
| `\|` | to column N of this line (the count) | `goto_column` |
| `}` | the cursor to the next paragraph, selecting nothing | `jump_next_paragraph` |
| `~` | switch case and move on (vim's ~) | `vim_switch_case` |
| `C-6` `C-^` | back to the buffer before this one | `goto_last_accessed_file` |
| `C-a` | the number at or after the cursor, plus one (vim's C-a) | `vim_increment` |
| `C-b` `PageUp` | a page up | `page_up` |
| `C-d` | half a page down | `page_cursor_half_down` |
| `C-e` | scroll the view down a line, the cursor keeping its place in the text | `scroll_down` |
| `C-f` `PageDown` | a page down | `page_down` |
| `C-i` `Tab` | forward again in the jump list | `jump_forward` |
| `C-o` | back to where you jumped from | `jump_backward` |
| `C-r` | redo, vim's C-r | `vim_redo` |
| `C-u` | half a page up | `page_cursor_half_up` |
| `C-v` | select a block (vim's C-v) | `vim_visual_block_mode` |
| `C-w` | the window group | `window_mode` |
| `C-x` | the number at or after the cursor, minus one (vim's C-x) | `vim_decrement` |
| `C-y` | scroll the view up a line, the cursor keeping its place in the text | `scroll_up` |
| `C-z` | suspend to the shell; fg brings it back | `suspend` |
| `Esc` | back to Normal mode (vim: leaving Visual mode collapses the selection) | `vim_normal_mode` |
| `Enter` | the next line's first character that is not a space | `goto_next_line_nonwhitespace` |
| `Home` | the start of the line | `goto_line_start` |
| `ZQ` | `:quit!` | `:quit!` |
| `ZZ` | `:x` | `:x` |

## Visual mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | select around an object (then which) | `select_around_object` |
| `c` `s` | cut into the register, then change | `change_selection` |
| `d` `x` | cut the selection into the register | `delete_selection` |
| `f` | extend the selection forward to a character | `extend_next_char` |
| `F` | extend the selection backward to a character | `extend_prev_char` |
| `h` `Left` | extend the selection one character left | `extend_char_left` |
| `i` | select inside an object (then which) | `select_inner_object` |
| `l` `Right` | extend the selection one character right | `extend_char_right` |
| `o` | to the other end of the selection (vim's Visual o) | `vim_flip_selections` |
| `R` | replace the selection with the register | `replace_with_yanked` |
| `t` | extend the selection forward to just before a character | `extend_till_char` |
| `T` | extend the selection backward to just after a character | `extend_till_prev_char` |
| `u` | the selection to lowercase, leaving Visual mode (vim's u) | `vim_switch_to_lowercase` |
| `U` | the selection to uppercase, leaving Visual mode (vim's U) | `vim_switch_to_uppercase` |
| `y` | yank the selection, leaving Visual mode (vim's y) | `vim_yank` |
| `<` | unindent, the cursor keeping its column (vim) | `vim_unindent` |
| `>` | indent, the cursor keeping its column (vim) | `vim_indent` |
| `Home` | extend the selection to the line's start | `extend_to_line_start` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` `C-c` | leave Select mode and put away what was shown for a moment | `normal_mode` |
| `Enter` `C-j` | a line break, carrying the indent and a list's marker | `insert_newline` |
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
| `Home` | the start of the line | `goto_line_start` |
| `End` | to the end of the line, after its last character | `goto_line_end_newline` |
| `C-y` | type the character above the cursor | `insert_char_above` |
| `C-e` | type the character below the cursor | `insert_char_below` |
| `C-g` | break the undo here | `commit_undo_checkpoint` |
| `Tab` `S-Tab` | insert an indent, the kind the file uses | `insert_tab` |

## Space (`\`)

| Key | What it does |
| --- | --- |
| `\f` | open file picker (project dir) |
| `\F` | open file picker (working dir) |
| `\e` | browse files (project dir) |
| `\b` | open buffer picker |
| `\j` | jump list |
| `\'` | the last picker again |
| `\g` | changed files |
| `\y` | copy to the system clipboard |
| `\Y` | copy the main selection to the system clipboard |
| `\p` | paste from the system clipboard |
| `\P` | paste before, from the system clipboard |
| `\R` | replace the selection with the system clipboard |
| `\s` | symbol picker |
| `\S` | project symbol picker |
| `\k` | documentation (floating) |
| `\d` | diagnostics picker |
| `\D` | project diagnostics picker |
| `\r` | rename it everywhere |
| `\h` | select every place this symbol stands in the file |
| `\a` | code actions |
| `\w` | region |
| `\c` | comment out, by the line |
| `\C` | comment out, in a block |
| `\/` | the search panel |
| `\?` | every command |

## g goto (`g`)

| Key | What it does |
| --- | --- |
| `gg` | start of the file |
| `g<N>g` | go to line N |
| `ge` | the cursor back to the previous word's end, selecting nothing |
| `gE` | the cursor back to the previous long word's end, selecting nothing |
| `gf` | open this file |
| `gw` | refill the lines, the cursor staying where it is (vim's gw) |
| `gx` | open the web address |
| `gn / gN` | the next or previous match |
| `gd` | go to definition |
| `gD` | go to the declaration |
| `gj` | one line down, on screen |
| `gk` | one line up, on screen |
| `gv` | select what was selected last |
| `gi` | insert again where the last Insert stopped |
| `g; / g,` | an older / newer change |
| `gu / gU / g~` | to lower, to upper, swap them — each waits for a motion |
| `gq` | fill the lines to the width — waits for a motion |
| `gJ` | join the next line, adding no space at all |
| `` g` `` | go to a mark (then a letter) |

## next… (`]`)

| Key | What it does |
| --- | --- |
| `]d / ]D` | a diagnostic (capital: the first / the last) |
| `]c` | a change |
| `]p` | paste after (vim's p) |
| `]␣` | a blank line below |

## previous… (`[`)

| Key | What it does |
| --- | --- |
| `[d / [D` | a diagnostic (capital: the first / the last) |
| `[c` | a change |
| `[p` | paste before (vim's P) |
| `[␣` | a blank line above |

## put this line where (`z`)

| Key | What it does |
| --- | --- |
| `zz` | middle |
| `zt` | top |
| `zb` | bottom |

## region (`C-w`, `\w`)

| Key | What it does |
| --- | --- |
| `C-w w` | next |
| `C-w h / C-w j / C-w k / C-w l` | go that way |
| `C-w s` | a window below |
| `C-w v` | a window beside |
| `C-w n` | a blank window |
| `C-w q` | close this one |
| `C-w o` | keep only this one |
| `C-w f` | open the file under the cursor below |

## a blank window (`C-w n`, `\wn`)

| Key | What it does |
| --- | --- |
| `C-w n s` | a blank window below |
| `C-w n v` | a blank window beside |

