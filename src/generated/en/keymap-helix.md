<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | insert after the selection | `append_mode` |
| `A` | insert at the end of the line | `insert_at_line_end` |
| `b` | start of the previous word | `move_prev_word_start` |
| `B` | start of the previous long word | `move_prev_long_word_start` |
| `c` | cut into the register, then change | `change_selection` |
| `C` | add a selection on the next line | `copy_selection_on_next_line` |
| `d` | cut the selection | `delete_selection` |
| `e` | end of the next word | `move_next_word_end` |
| `E` | end of the next long word | `move_next_long_word_end` |
| `f` | find a character forward, selecting up to it | `find_next_char` |
| `F` | find a character backward, selecting back to it | `find_prev_char` |
| `g` | g group: go to | `goto_mode` |
| `G` | go to line N (count) | `goto_line` |
| `h` `Left` | one character left | `move_char_left` |
| `i` | insert before the selection | `insert_mode` |
| `I` | insert at the start of the line | `insert_at_line_start` |
| `j` `Down` | one line down, on screen | `move_visual_line_down` |
| `J` | join with the next line | `join_selections` |
| `k` `Up` | one line up, on screen | `move_visual_line_up` |
| `K` | keep selections matching a regex | `keep_selections` |
| `l` `Right` | one character right | `move_char_right` |
| `m` | match group: brackets, quotes, objects | `match_mode` |
| `n` | next match | `search_next` |
| `N` | previous match | `search_prev` |
| `o` | open a line below | `open_below` |
| `O` | open a line above | `open_above` |
| `p` | paste after | `paste_after` |
| `P` | paste before | `paste_before` |
| `q` | replay | `replay_macro` |
| `Q` | start or stop recording a macro | `record_macro` |
| `r` | replace each selected character with another | `replace` |
| `R` | replace the selection with the register | `replace_with_yanked` |
| `s` | select regex matches inside the selection | `select_regex` |
| `S` | split the selection on a regex | `split_selection` |
| `t` | find a character forward, selecting up to just before it | `find_till_char` |
| `T` | find a character backward, selecting back to just after it | `till_prev_char` |
| `u` | undo | `undo` |
| `U` | redo | `redo` |
| `v` | Select mode: moving grows the selection | `select_mode` |
| `w` | start of the next word | `move_next_word_start` |
| `W` | start of the next long word | `move_next_long_word_start` |
| `x` | select this line | `extend_line_below` |
| `X` | extend the selection to whole lines | `extend_to_line_bounds` |
| `y` | yank | `yank` |
| `z` | view group: place the cursor line, scroll, fold | `view_mode` |
| `Z` | view group (sticky) | `sticky_view_mode` |
| `Space` | Space menu | `space_mode` |
| `!` | insert a command's output before the selection | `shell_insert_output` |
| `"` | pick a register (then a letter) | `select_register` |
| `$` | keep the selections a shell command succeeds on | `shell_keep_pipe` |
| `%` | select all | `select_all` |
| `&` | align the selections | `align_selections` |
| `(` | make the previous selection the primary one | `rotate_selections_backward` |
| `)` | make the next selection the primary one | `rotate_selections_forward` |
| `*` | search for the selection as a whole word | `search_selection_detect_word_boundaries` |
| `,` | keep only the primary selection | `keep_primary_selection` |
| `.` | repeat the last insert (vim keymap: the last change) | `repeat_last_change` |
| `/` | search forward | `search` |
| `:` | command line | `command_mode` |
| `;` | collapse the selection to the cursor | `collapse_selection` |
| `<` | unindent | `unindent` |
| `=` | format the selection with the language server | `format_selections` |
| `>` | indent | `indent` |
| `?` | search backward | `rsearch` |
| `[` | [ group: go to previous | `left_bracket_mode` |
| `]` | ] group: go to next | `right_bracket_mode` |
| `_` | trim the spaces off both ends of each selection | `trim_selections` |
| `` ` `` | to lowercase | `switch_to_lowercase` |
| `{` | select back to the previous paragraph | `move_prev_paragraph` |
| `\|` | pipe the selection through a command, replacing it | `shell_pipe` |
| `}` | select on to the next paragraph | `move_next_paragraph` |
| `~` | switch case | `switch_case` |
| `C-a` | increment the number under the cursor | `increment` |
| `C-b` `PageUp` | a page up | `page_up` |
| `C-c` | line comment | `toggle_comments` |
| `C-d` | half a page down | `page_cursor_half_down` |
| `C-f` `PageDown` | a page down | `page_down` |
| `C-i` `Tab` | jump forward | `jump_forward` |
| `C-o` | jump back | `jump_backward` |
| `C-s` | save this position to the jump list | `save_selection` |
| `C-u` | half a page up | `page_cursor_half_up` |
| `C-w` | window group | `window_mode` |
| `C-x` | decrement the number under the cursor | `decrement` |
| `C-z` | suspend to the shell; fg brings it back | `suspend` |
| `A-!` | append a command's output after the selection | `shell_append_output` |
| `A-(` | rotate the selections' contents backward | `rotate_selection_contents_backward` |
| `A-)` | rotate the selections' contents forward | `rotate_selection_contents_forward` |
| `A-*` | search for the selection exactly | `search_selection_exact` |
| `A-,` | remove the primary selection | `remove_primary_selection` |
| `A--` | merge all selections into one | `merge_selections` |
| `A-.` | repeat the last f or t | `repeat_last_motion` |
| `A-:` | make every selection face forward | `ensure_selections_forward` |
| `A-;` | move the cursor to the other end of the selection | `flip_selections` |
| `A-_` | merge adjacent selections | `merge_consecutive_selections` |
| `` A-` `` | to uppercase | `switch_to_uppercase` |
| `A-a` | select every sibling node | `select_all_siblings` |
| `A-b` | to the start of the enclosing node, then of its parent | `move_parent_node_start` |
| `A-c` | change the selection without yanking | `change_selection_noyank` |
| `A-C` | add a selection on the previous line | `copy_selection_on_prev_line` |
| `A-d` | delete the selection without yanking | `delete_selection_noyank` |
| `A-e` | to the end of the enclosing node | `move_parent_node_end` |
| `A-i` | shrink the selection back, or to its first child node | `shrink_selection` |
| `A-I` | select every child node | `select_all_children` |
| `A-J` | join lines and select where they meet | `join_selections_space` |
| `A-K` | remove selections matching a regex | `remove_selections` |
| `A-n` | select the next sibling node | `select_next_sibling` |
| `A-o` | expand the selection to the parent syntax node | `expand_selection` |
| `A-p` | select the previous sibling node | `select_prev_sibling` |
| `A-s` | split the selection into its lines | `split_selection_on_newline` |
| `A-u` | undo (same as u) | `earlier` |
| `A-U` | redo (same as U) | `later` |
| `A-x` | shrink the selection to whole lines | `shrink_to_line_bounds` |
| `A-\|` | pipe the selection to a command, keeping the text | `shell_pipe_to` |
| `Esc` | leave Select mode and dismiss anything shown briefly | `normal_mode` |
| `Home` | start of line | `goto_line_start` |
| `End` | end of line | `goto_line_end` |

## Select mode

| Key | What it does | Command |
| --- | --- | --- |
| `b` | extend to the start of the previous word | `extend_prev_word_start` |
| `B` | extend to the start of the previous long word | `extend_prev_long_word_start` |
| `e` | extend to the end of the next word | `extend_next_word_end` |
| `E` | extend to the end of the next long word | `extend_next_long_word_end` |
| `f` | extend forward to a character | `extend_next_char` |
| `F` | extend backward to a character | `extend_prev_char` |
| `h` `Left` | extend the selection one character left | `extend_char_left` |
| `j` `Down` | extend one line down, on screen | `extend_visual_line_down` |
| `k` `Up` | extend one line up, on screen | `extend_visual_line_up` |
| `l` `Right` | extend the selection one character right | `extend_char_right` |
| `n` | add the next match as a selection | `extend_search_next` |
| `N` | add the previous match as a selection | `extend_search_prev` |
| `t` | extend forward to just before a character | `extend_till_char` |
| `T` | extend backward to just after a character | `extend_till_prev_char` |
| `w` | extend to the start of the next word | `extend_next_word_start` |
| `W` | extend to the start of the next long word | `extend_next_long_word_start` |
| `A-b` | extend to the start of the enclosing node | `extend_parent_node_start` |
| `A-e` | extend to the end of the enclosing node | `extend_parent_node_end` |
| `Home` | extend to the start of the line | `extend_to_line_start` |
| `End` | extend to the end of the line | `extend_to_line_end` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` | leave Select mode and dismiss anything shown briefly | `normal_mode` |
| `Enter` `C-j` | new line, keeping the indent and list marker | `insert_newline` |
| `Backspace` `C-h` | delete the character before the cursor | `delete_char_backward` |
| `Delete` `C-d` | delete the character after the cursor | `delete_char_forward` |
| `A-d` | delete the word after the cursor | `delete_word_forward` |
| `C-w` | delete the word before the cursor | `delete_word_backward` |
| `C-u` | delete to the start of the line | `kill_to_line_start` |
| `C-k` | delete to the end of the line, in Insert mode | `kill_to_line_end` |
| `C-r` | insert a register (then its letter) | `insert_register` |
| `Left` | one character left | `move_char_left` |
| `Right` | one character right | `move_char_right` |
| `Up` | one line up, on screen | `move_visual_line_up` |
| `Down` | one line down, on screen | `move_visual_line_down` |
| `PageUp` | a page up | `page_up` |
| `PageDown` | a page down | `page_down` |
| `Home` | start of line | `goto_line_start` |
| `End` | to the end of the line, after its last character | `goto_line_end_newline` |
| `Tab` `S-Tab` | insert an indent, the kind the file uses | `insert_tab` |

## Space (`Space`)

| Key | What it does |
| --- | --- |
| `Space f` | file picker (project) |
| `Space F` | file picker (cwd) |
| `Space e` | browse the project |
| `Space b` | buffer picker |
| `Space j` | jump list |
| `Space '` | reopen last picker |
| `Space g` | changed files |
| `Space y` | copy to clipboard |
| `Space Y` | copy main to clipboard |
| `Space p` | paste from clipboard |
| `Space P` | paste clipboard before |
| `Space R` | replace with clipboard |
| `Space s` | symbol picker |
| `Space S` | project symbol picker |
| `Space k` | show docs (popup) |
| `Space d` | diagnostics picker |
| `Space D` | project diagnostics |
| `Space r` | rename symbol |
| `Space h` | select all references |
| `Space a` | code actions |
| `Space w` | region |
| `Space c` | line comment |
| `Space C` | block comment |
| `Space A-c` | line comment only |
| `Space /` | search panel |
| `Space ?` | all commands |

## g goto (`g`)

| Key | What it does |
| --- | --- |
| `gg` | start of file |
| `g<N>g` | go to line N |
| `ge` | last line |
| `gh / gl` | line start / end |
| `gs` | first non-blank character |
| `gf` | open this file |
| `gw` | jump to a spot on screen |
| `ga` | back to the last buffer |
| `gn / gp` | next / previous buffer |
| `gd` | go to definition |
| `gD` | go to declaration |
| `gy` | go to type definition |
| `gi` | go to implementation |
| `gm` | last modified file |
| `gr` | find references |
| `gj / gk` | down / up a logical line |
| `g.` | last change |
| `gt / gc / gb` | screen top / middle / bottom |

## m (`m`)

| Key | What it does |
| --- | --- |
| `mm` | go to the other half of the pair |
| `mi` | select inside the pair |
| `ma` | select the pair and its contents |
| `ms` | surround the selection with a pair |
| `md` | remove the pair |
| `mr` | replace the pair |

## next… (`]`)

| Key | What it does |
| --- | --- |
| `]g / ]G` | a change (capital: the first / the last) |
| `]d / ]D` | a diagnostic (capital: the first / the last) |
| `]f` | a function |
| `]t` | a class |
| `]c` | a comment |
| `]a` | a parameter |
| `]e` | an entry |
| `]T` | a test |
| `]x` | an XML element |
| `]p` | next paragraph |
| `]␣` | add a blank line below |

## previous… (`[`)

| Key | What it does |
| --- | --- |
| `[g / [G` | a change (capital: the first / the last) |
| `[d / [D` | a diagnostic (capital: the first / the last) |
| `[f` | a function |
| `[t` | a class |
| `[c` | a comment |
| `[a` | a parameter |
| `[e` | an entry |
| `[T` | a test |
| `[x` | an XML element |
| `[p` | previous paragraph |
| `[␣` | add a blank line above |

## view (`z`)

| Key | What it does |
| --- | --- |
| `zz / zc` | center |
| `zt` | top |
| `zb` | bottom |
| `zm` | center sideways |
| `zj / z↓` | scroll down a line |
| `zk / z↑` | scroll up a line |
| `zC-d / z␣` | half page down |
| `zC-u / z⌫` | half page up |
| `zC-f / zPgDn` | page down |
| `zC-b / zPgUp` | page up |
| `z/` | search forward |
| `z?` | search backward |
| `zn` | next match |
| `zN` | previous match |

## region (`C-w`, `Space w`)

| Key | What it does |
| --- | --- |
| `C-w w` | next |
| `C-w h / C-w j / C-w k / C-w l` | go in that direction |
| `C-w s` | split below |
| `C-w v` | split beside |
| `C-w n` | new blank window |
| `C-w q` | close window |
| `C-w o` | keep only this window |
| `C-w t` | flip the split: beside / below |
| `C-w H / C-w J / C-w K / C-w L` | swap with the window that way |
| `C-w f` | open file under cursor below |
| `C-w F` | open file under cursor beside |

## new blank window (`C-w n`, `Space w n`)

| Key | What it does |
| --- | --- |
| `C-w n s` | new blank window below |
| `C-w n v` | new blank window beside |

