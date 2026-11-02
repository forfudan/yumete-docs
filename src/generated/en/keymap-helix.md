<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

## Normal mode

| Key | What it does | Command |
| --- | --- | --- |
| `a` | insert after the selection | `append_mode` |
| `A` | insert at the end of the line | `insert_at_line_end` |
| `b` | the previous word's start | `move_prev_word_start` |
| `B` | the previous long word's start | `move_prev_long_word_start` |
| `c` | cut into the register, then change | `change_selection` |
| `C` | copy the selection onto the next line | `copy_selection_on_next_line` |
| `d` | cut the selection into the register | `delete_selection` |
| `e` | the next word's end | `move_next_word_end` |
| `E` | the next long word's end | `move_next_long_word_end` |
| `f` | find a character forward, selecting up to it | `find_next_char` |
| `F` | find a character backward, selecting back to it | `find_prev_char` |
| `g` | the g group: go to | `goto_mode` |
| `G` | to line N (the count) | `goto_line` |
| `h` `Left` | one character left | `move_char_left` |
| `i` | insert before the selection | `insert_mode` |
| `I` | insert at the start of the line | `insert_at_line_start` |
| `j` `Down` | one line down, on screen | `move_visual_line_down` |
| `J` | join with the next line | `join_selections` |
| `k` `Up` | one line up, on screen | `move_visual_line_up` |
| `K` | keep the selections that match a pattern | `keep_selections` |
| `l` `Right` | one character right | `move_char_right` |
| `m` | the match group: brackets, quotes, objects | `match_mode` |
| `n` | the next match | `search_next` |
| `N` | the previous match | `search_prev` |
| `o` | open a line below | `open_below` |
| `O` | open a line above | `open_above` |
| `p` | paste after | `paste_after` |
| `P` | paste before | `paste_before` |
| `q` | replay the macro | `replay_macro` |
| `Q` | start or stop recording a macro | `record_macro` |
| `r` | replace each selected character with another | `replace` |
| `R` | replace the selection with the register | `replace_with_yanked` |
| `s` | select what matches a pattern inside the selection | `select_regex` |
| `S` | split the selection on a pattern | `split_selection` |
| `t` | find a character forward, selecting up to just before it | `find_till_char` |
| `T` | find a character backward, selecting back to just after it | `till_prev_char` |
| `u` | undo | `undo` |
| `U` | redo | `redo` |
| `v` | Select mode: moving grows the selection | `select_mode` |
| `w` | the next word's start | `move_next_word_start` |
| `W` | the next long word's start | `move_next_long_word_start` |
| `x` | select this line | `extend_line_below` |
| `X` | grow the selection to whole lines | `extend_to_line_bounds` |
| `y` | yank | `yank` |
| `z` | the view group: put the cursor line at the top, middle or bottom | `view_mode` |
| `Z` | the view group, staying open | `sticky_view_mode` |
| `Space` | the Space menu | `space_mode` |
| `!` | insert a command's output before the selection | `shell_insert_output` |
| `"` | pick a register (then a letter) | `select_register` |
| `$` | keep the selections a terminal command succeeds on | `shell_keep_pipe` |
| `%` | select the whole file | `select_all` |
| `&` | line the selections up | `align_selections` |
| `(` | make the previous selection the primary one | `rotate_selections_backward` |
| `)` | make the next selection the primary one | `rotate_selections_forward` |
| `*` | look for what is selected, as a whole word | `search_selection_detect_word_boundaries` |
| `,` | keep only the primary selection | `keep_primary_selection` |
| `.` | repeat the last insert (vim keymap: the last change) | `repeat_last_change` |
| `/` | search forward | `search` |
| `:` | the command line | `command_mode` |
| `;` | collapse the selection to the cursor | `collapse_selection` |
| `<` | unindent | `unindent` |
| `=` | format the selection with the language server | `format_selections` |
| `>` | indent | `indent` |
| `?` | search backward | `rsearch` |
| `[` | the [ group: the previous one of something | `left_bracket_mode` |
| `]` | the ] group: the next one of something | `right_bracket_mode` |
| `_` | trim the spaces off both ends of each selection | `trim_selections` |
| `` ` `` | to lowercase | `switch_to_lowercase` |
| `{` | select back to the previous paragraph | `move_prev_paragraph` |
| `\|` | pipe the selection through a command, replacing it | `shell_pipe` |
| `}` | select on to the next paragraph | `move_next_paragraph` |
| `~` | switch case | `switch_case` |
| `C-a` | the number under the cursor, plus one | `increment` |
| `C-b` `PageUp` | a page up | `page_up` |
| `C-c` | comment this line | `toggle_comments` |
| `C-d` | half a page down | `page_cursor_half_down` |
| `C-f` `PageDown` | a page down | `page_down` |
| `C-i` `Tab` | forward again in the jump list | `jump_forward` |
| `C-o` | back to where you jumped from | `jump_backward` |
| `C-s` | save this place in the jump list | `save_selection` |
| `C-u` | half a page up | `page_cursor_half_up` |
| `C-w` | the window group | `window_mode` |
| `C-x` | the number under the cursor, minus one | `decrement` |
| `C-z` | suspend to the shell; fg brings it back | `suspend` |
| `A-!` | append a command's output after the selection | `shell_append_output` |
| `A-(` | rotate the selections' contents backward | `rotate_selection_contents_backward` |
| `A-)` | rotate the selections' contents forward | `rotate_selection_contents_forward` |
| `A-*` | look for what is selected, exactly as written | `search_selection_exact` |
| `A-,` | remove the primary selection | `remove_primary_selection` |
| `A--` | merge every selection into one | `merge_selections` |
| `A-.` | repeat the last f or t | `repeat_last_motion` |
| `A-:` | make every selection face forward | `ensure_selections_forward` |
| `A-;` | move the cursor to the other end of the selection | `flip_selections` |
| `A-_` | merge the selections that touch | `merge_consecutive_selections` |
| `` A-` `` | to uppercase | `switch_to_uppercase` |
| `A-a` | select every node beside this one | `select_all_siblings` |
| `A-b` | to the start of the node around the cursor, then of its parent | `move_parent_node_start` |
| `A-c` | change the selection, leaving the register | `change_selection_noyank` |
| `A-C` | copy the selection onto the previous line | `copy_selection_on_prev_line` |
| `A-d` | delete the selection, leaving the register | `delete_selection_noyank` |
| `A-e` | to the end of the node around the cursor | `move_parent_node_end` |
| `A-i` | shrink the selection back, or to its first child node | `shrink_selection` |
| `A-I` | select every node inside this one | `select_all_children` |
| `A-J` | join lines and select where they meet | `join_selections_space` |
| `A-K` | remove the selections that match a pattern | `remove_selections` |
| `A-n` | select the next syntax node | `select_next_sibling` |
| `A-o` | grow the selection to the syntax node around it | `expand_selection` |
| `A-p` | select the previous syntax node | `select_prev_sibling` |
| `A-s` | split the selection into its lines | `split_selection_on_newline` |
| `A-u` | undo, as u does | `earlier` |
| `A-U` | redo, as U does | `later` |
| `A-x` | shrink the selection to whole lines | `shrink_to_line_bounds` |
| `A-\|` | pipe the selection to a command, keeping the text | `shell_pipe_to` |
| `Esc` | leave Select mode and put away what was shown for a moment | `normal_mode` |
| `Home` | the start of the line | `goto_line_start` |
| `End` | the end of the line | `goto_line_end` |

## Select mode

| Key | What it does | Command |
| --- | --- | --- |
| `b` | extend the selection to the previous word's start | `extend_prev_word_start` |
| `B` | extend the selection to the previous long word's start | `extend_prev_long_word_start` |
| `e` | extend the selection to the next word's end | `extend_next_word_end` |
| `E` | extend the selection to the next long word's end | `extend_next_long_word_end` |
| `f` | extend the selection forward to a character | `extend_next_char` |
| `F` | extend the selection backward to a character | `extend_prev_char` |
| `h` `Left` | extend the selection one character left | `extend_char_left` |
| `j` `Down` | extend the selection one line down, on screen | `extend_visual_line_down` |
| `k` `Up` | extend the selection one line up, on screen | `extend_visual_line_up` |
| `l` `Right` | extend the selection one character right | `extend_char_right` |
| `n` | add the next match as a selection | `extend_search_next` |
| `N` | add the previous match as a selection | `extend_search_prev` |
| `t` | extend the selection forward to just before a character | `extend_till_char` |
| `T` | extend the selection backward to just after a character | `extend_till_prev_char` |
| `w` | extend the selection to the next word's start | `extend_next_word_start` |
| `W` | extend the selection to the next long word's start | `extend_next_long_word_start` |
| `A-b` | extend the selection to the start of the node around the cursor | `extend_parent_node_start` |
| `A-e` | extend the selection to the end of the node around the cursor | `extend_parent_node_end` |
| `Home` | extend the selection to the line's start | `extend_to_line_start` |
| `End` | extend the selection to the line's end | `extend_to_line_end` |

## Insert mode

| Key | What it does | Command |
| --- | --- | --- |
| `Esc` | leave Select mode and put away what was shown for a moment | `normal_mode` |
| `Enter` `C-j` | a line break, carrying the indent and a list's marker | `insert_newline` |
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
| `Home` | the start of the line | `goto_line_start` |
| `End` | to the end of the line, after its last character | `goto_line_end_newline` |
| `Tab` `S-Tab` | insert an indent, the kind the file uses | `insert_tab` |

## Space (`Space`)

| Key | What it does |
| --- | --- |
| `Space f` | open file picker (project dir) |
| `Space F` | open file picker (working dir) |
| `Space e` | browse files (project dir) |
| `Space b` | open buffer picker |
| `Space j` | jump list |
| `Space '` | the last picker again |
| `Space g` | changed files |
| `Space y` | copy to the system clipboard |
| `Space Y` | copy the main selection to the system clipboard |
| `Space p` | paste from the system clipboard |
| `Space P` | paste before, from the system clipboard |
| `Space R` | replace the selection with the system clipboard |
| `Space s` | symbol picker |
| `Space S` | project symbol picker |
| `Space k` | documentation (floating) |
| `Space d` | diagnostics picker |
| `Space D` | project diagnostics picker |
| `Space r` | rename it everywhere |
| `Space h` | select every place this symbol stands in the file |
| `Space a` | code actions |
| `Space w` | region |
| `Space c` | comment out, by the line |
| `Space C` | comment out, in a block |
| `Space /` | the search panel |
| `Space ?` | every command |

## g goto (`g`)

| Key | What it does |
| --- | --- |
| `gg` | start of the file |
| `g<N>g` | go to line N |
| `ge` | the last line |
| `gh / gl` | line start / end |
| `gs` | first non-blank character |
| `gf` | open this file |
| `gw` | go to a place on this screen |
| `ga` | back to the buffer before this one |
| `gn / gp` | the next or previous buffer |
| `gd` | go to definition |
| `gD` | go to the declaration |
| `gy` | go to the type definition |
| `gi` | go to the implementation |
| `gm` | the file changed last |
| `gr` | every place it is used |
| `gj / gk` | down / up a logical line (with line number) |
| `g.` | back to the last change |
| `gt / gc / gb` | the cursor to the top, middle or bottom of the screen |

## m (`m`)

| Key | What it does |
| --- | --- |
| `mm` | go to the other half of the pair |
| `mi` | select what is inside the pair |
| `ma` | select the pair and what is inside |
| `ms` | wrap the selection in a pair |
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
| `]p` | the next paragraph |
| `]␣` | a blank line below |

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
| `[p` | the previous paragraph |
| `[␣` | a blank line above |

## put this line where (`z`)

| Key | What it does |
| --- | --- |
| `zz` | middle |
| `zt` | top |
| `zb` | bottom |

## region (`C-w`, `Space w`)

| Key | What it does |
| --- | --- |
| `C-w w` | next |
| `C-w h / C-w j / C-w k / C-w l` | go that way |
| `C-w s` | a window below |
| `C-w v` | a window beside |
| `C-w n` | a blank window |
| `C-w q` | close this one |
| `C-w o` | keep only this one |
| `C-w t` | turn the split: beside or below |
| `C-w H / C-w J / C-w K / C-w L` | trade places with the one that way |
| `C-w f` | open the file under the cursor below |
| `C-w F` | open the file under the cursor beside |

## a blank window (`C-w n`, `Space w n`)

| Key | What it does |
| --- | --- |
| `C-w n s` | a blank window below |
| `C-w n v` | a blank window beside |

