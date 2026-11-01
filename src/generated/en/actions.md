<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | What it does | helix | vim | Insert |
| --- | --- | --- | --- | --- |
| `move_char_left` | one character left | `h` `Left` | `h` `Left` `Backspace` | `Left` |
| `move_char_right` | one character right | `l` `Right` | `l` `Right` | `Right` |
| `move_visual_line_up` | one line up, on screen | `k` `Up` | `gk` `g Up` | `Up` |
| `move_visual_line_down` | one line down, on screen | `j` `Down` | `gj` `g Down` | `Down` |
| `move_next_word_start` | the next word's start | `w` |  |  |
| `move_prev_word_start` | the previous word's start | `b` |  |  |
| `move_next_word_end` | the next word's end | `e` |  |  |
| `move_next_long_word_start` | the next long word's start | `W` |  |  |
| `move_prev_long_word_start` | the previous long word's start | `B` |  |  |
| `move_next_long_word_end` | the next long word's end | `E` |  |  |
| `goto_line_start` | the start of the line | `Home` `gh` `g Up` | `Home` `0` | `Home` `C-a` |
| `goto_line_end` | the end of the line | `End` `gl` `g Down` |  |  |
| `goto_first_nonwhitespace` | the first character that is not a space | `gs` | `gs` `^` |  |
| `goto_file_start` | the start of the file | `gg` | `gg` |  |
| `goto_file_end` | the end of the file | `ge` | `ge` |  |
| `goto_last_line` | the last line |  |  |  |
| `goto_prev_sentence` | the previous sentence | `H` |  |  |
| `goto_next_sentence` | the next sentence | `L` |  |  |
| `goto_prev_paragraph` | the previous paragraph | `[p` | `[p` |  |
| `goto_next_paragraph` | the next paragraph | `]p` | `]p` |  |
| `half_page_down` | half a page down | `C-d` `z C-d` `z␣` `Z C-d` `Z␣` | `C-d` `z C-d` `z␣` `Z C-d` `Z␣` |  |
| `half_page_up` | half a page up | `C-u` `z C-u` `z Backspace` `Z C-u` `Z Backspace` | `C-u` `z C-u` `z Backspace` `Z C-u` `Z Backspace` |  |
| `jump_backward` | back to where you jumped from | `C-o` | `C-o` |  |
| `select_mode` | Select mode: moving grows the selection | `v` | `v` |  |
| `extend_line_below` | select this line | `x` |  |  |
| `extend_to_line_bounds` | grow the selection to whole lines | `X` |  |  |
| `select_all` | select the whole file | `%` | `%` |  |
| `collapse_selection` | collapse the selection to the cursor | `;` |  |  |
| `delete_selection` | cut the selection into the register | `d` | `x` |  |
| `delete_selection_noyank` | delete the selection, leaving the register | `A-d` | `A-d` |  |
| `change_selection` | cut into the register, then change | `c` | `s` |  |
| `change_selection_noyank` | change the selection, leaving the register | `A-c` | `A-c` |  |
| `insert_mode` | insert before the selection | `i` |  |  |
| `append_mode` | insert after the selection | `a` |  |  |
| `insert_at_line_start` | insert at the start of the line | `I` |  |  |
| `insert_at_line_end` | insert at the end of the line | `A` |  |  |
| `open_below` | open a line below | `o` |  |  |
| `open_above` | open a line above | `O` |  |  |
| `yank` | yank | `y` |  |  |
| `paste_after` | paste after | `p` |  |  |
| `paste_before` | paste before | `P` |  |  |
| `replace_with_yanked` | replace the selection with the register | `R` |  |  |
| `join_selections` | join with the next line | `J` |  |  |
| `indent` | indent | `>` |  |  |
| `unindent` | unindent | `<` |  |  |
| `increment` | the number under the cursor, plus one | `C-a` |  |  |
| `decrement` | the number under the cursor, minus one | `C-x` |  |  |
| `switch_case` | switch case | `~` ``` `` ``` | ``` g`` ``` |  |
| `undo` | undo | `u` |  |  |
| `redo` | redo | `U` |  |  |
| `repeat_last_change` | repeat the last insert (vim keymap: the last change) | `.` |  |  |
| `search` | search forward | `/` `z/` `Z/` | `/` `z/` `Z/` |  |
| `rsearch` | search backward | `?` `z?` `Z?` | `?` `z?` `Z?` |  |
| `search_next` | the next match | `n` `zn` `Zn` | `gn` `zn` `Zn` |  |
| `search_prev` | the previous match | `N` `zN` `ZN` | `gN` `zN` `ZN` |  |
| `search_selection` | look for what is selected | `g/` | `g/` `*` |  |
| `goto_definition` | go to where it is defined | `gd` | `gd` |  |
| `open_here` | open the file this line names | `gf` | `gf` |  |
| `follow_link` | follow the link under the cursor | `gL` | `gL` |  |
| `file_picker` | open the file picker | `Space f` | `Space f` |  |
| `buffer_picker` | open the buffer picker | `Space b` | `Space b` |  |
| `next_buffer` | the next buffer | `gn` | `gn` |  |
| `prev_buffer` | the previous buffer | `gp` | `gp` |  |
| `dictionary` | the 拆分 of the character under the cursor | `Space n` | `Space n` |  |
| `next_region` | the next region | `C-w w` | `C-w w` |  |
| `search_panel` | the search panel | `Space /` | `Space /` |  |
| `command_menu` | every command | `Space ?` | `Space ?` |  |
| `paste_menu` | the paste menu | `Space "` | `Space "` |  |
| `comment_line` | comment this line | `Space c` | `Space c` |  |
| `comment_block` | comment this block | `Space C` | `Space C` |  |
| `copy_to_clipboard` | copy to the system clipboard | `Space y` | `Space y` |  |
| `paste_from_clipboard` | paste from the system clipboard | `Space p` | `Space p` |  |
| `move_line_up` | one line up, in the file | `gk` `g Up` | `k` `Up` `gk` `g Up` |  |
| `move_line_down` | one line down, in the file | `gj` `g Down` | `j` `Down` `gj` `g Down` |  |
| `goto_next_line_nonwhitespace` | the next line's first character that is not a space |  | `Enter` |  |
| `jump_next_word_start` | the cursor to the next word's start, selecting nothing |  | `w` |  |
| `jump_next_long_word_start` | the cursor to the next long word's start, selecting nothing |  | `W` |  |
| `jump_prev_word_start` | the cursor to the previous word's start, selecting nothing |  | `b` |  |
| `jump_prev_long_word_start` | the cursor to the previous long word's start, selecting nothing |  | `B` |  |
| `jump_next_word_end` | the cursor to the next word's end, selecting nothing |  | `e` |  |
| `jump_next_long_word_end` | the cursor to the next long word's end, selecting nothing |  | `E` |  |
| `jump_next_paragraph` | the cursor to the next paragraph, selecting nothing |  | `}` |  |
| `jump_prev_paragraph` | the cursor to the previous paragraph, selecting nothing |  | `{` |  |
| `move_next_paragraph` | select on to the next paragraph | `}` |  |  |
| `move_prev_paragraph` | select back to the previous paragraph | `{` |  |  |
| `goto_window_top` | the top line on screen | `gt` | `H` `gt` |  |
| `goto_window_center` | the middle line on screen | `gc` | `M` `gc` |  |
| `goto_window_bottom` | the bottom line on screen | `gb` | `L` `gb` |  |
| `jump_prev_sentence` | the cursor to the previous sentence, selecting nothing |  | `(` |  |
| `jump_next_sentence` | the cursor to the next sentence, selecting nothing |  | `)` |  |
| `add_mark` | set a mark (then a letter) | `M` | `m` |  |
| `goto_mark` | go to a mark (then a letter) | `'` | `'` `` ` `` |  |
| `view_mode` | the view group: put the cursor line at the top, middle or bottom | `z` | `z` |  |
| `sticky_view_mode` | the view group, staying open | `Z` | `Z` |  |
| `right_bracket_mode` | the ] group: the next one of something | `]` | `]` |  |
| `left_bracket_mode` | the [ group: the previous one of something | `[` | `[` |  |
| `goto_mode` | the g group: go to | `g` | `g` |  |
| `space_mode` | the Space menu | `Space` | `Space` |  |
| `find_next_char` | find a character forward, selecting up to it | `f` | `f` |  |
| `find_prev_char` | find a character backward, selecting back to it | `F` | `F` |  |
| `find_till_char` | find a character forward, selecting up to just before it | `t` | `t` |  |
| `till_prev_char` | find a character backward, selecting back to just after it | `T` | `T` |  |
| `select_line_mode` | line-wise Select mode |  | `V` |  |
| `normal_mode` | leave Select mode and put away what was shown for a moment | `Esc` |  | `Esc` |
| `repeat_find_char` | find that character again |  | `;` |  |
| `repeat_find_char_reverse` | find that character again, the other way |  | `,` |  |
| `copy_selection_on_next_line` | copy the selection onto the next line | `C` | `C` |  |
| `copy_selection_on_prev_line` | copy the selection onto the previous line | `A-C` | `A-C` |  |
| `keep_primary_selection` | keep only the primary selection | `,` |  |  |
| `remove_primary_selection` | remove the primary selection | `A-,` | `A-,` |  |
| `merge_selections` | merge every selection into one | `A--` | `A--` |  |
| `merge_consecutive_selections` | merge the selections that touch | `A-_` | `A-_` |  |
| `ensure_selections_forward` | make every selection face forward | `A-:` | `A-:` |  |
| `shrink_to_line_bounds` | shrink the selection to whole lines | `A-x` | `A-x` |  |
| `split_selection_on_newline` | split the selection into its lines | `A-s` | `A-s` |  |
| `rotate_selections_forward` | make the next selection the primary one | `)` |  |  |
| `rotate_selections_backward` | make the previous selection the primary one | `(` |  |  |
| `trim_selections` | trim the spaces off both ends of each selection | `_` | `_` |  |
| `align_selections` | line the selections up | `&` | `&` |  |
| `rotate_selection_contents_forward` | rotate the selections' contents forward | `A-)` | `A-)` |  |
| `rotate_selection_contents_backward` | rotate the selections' contents backward | `A-(` | `A-(` |  |
| `select_regex` | select what matches a pattern inside the selection | `s` |  |  |
| `split_selection` | split the selection on a pattern | `S` | `S` |  |
| `keep_selections` | keep the selections that match a pattern | `A-k` `K` | `A-k` `K` |  |
| `remove_selections` | remove the selections that match a pattern | `A-K` | `A-K` |  |
| `operator_delete` | delete (then a motion) |  | `d` |  |
| `operator_change` | change (then a motion) |  | `c` |  |
| `operator_yank` | yank (then a motion) |  | `y` |  |
| `operator_indent` | indent (then a motion) |  | `>` |  |
| `operator_unindent` | unindent (then a motion) |  | `<` |  |
| `delete_to_line_end` | delete to the end of the line |  | `D` |  |
| `select_inner_object` | select inside an object (then which) |  | `i` |  |
| `select_around_object` | select around an object (then which) |  | `a` |  |
| `undo_line` | undo every change on this line |  | `U` |  |
| `earlier` | undo, as u does | `A-u` | `A-u` |  |
| `later` | redo, as U does | `A-U` | `A-U` |  |
| `goto_column` | to column N of this line (the count) |  | `\|` |  |
| `shell_pipe` | pipe the selection through a command, replacing it | `\|` |  |  |
| `shell_insert_output` | insert a command's output before the selection | `!` | `!` |  |
| `shell_append_output` | append a command's output after the selection | `A-!` | `A-!` |  |
| `shell_pipe_to` | pipe the selection to a command, keeping the text | `A-\|` | `A-\|` |  |
| `command_mode` | the command line | `:` | `:` |  |
| `match_mode` | the match group: brackets, quotes, objects | `m` |  |  |
| `replace` | replace each selected character with another | `r` | `r` |  |
| `select_register` | pick a register (then a letter) | `"` | `"` |  |
| `record_macro` | start or stop recording a macro | `Q` | `Q` `q` |  |
| `replay_macro` | replay the macro | `q` | `q` `Q` |  |
| `window_mode` | the window group | `C-w` `Space w` | `C-w` `Space w` |  |
| `page_down` | a page down | `C-f` `Pagedown` `Space Space` `z C-f` `z Pagedown` `Z C-f` `Z Pagedown` | `C-f` `Pagedown` `Space Space` `z C-f` `z Pagedown` `Z C-f` `Z Pagedown` | `Pagedown` |
| `page_up` | a page up | `C-b` `Pageup` `Space Backspace` `z C-b` `z Pageup` `Z C-b` `Z Pageup` | `C-b` `Pageup` `Space Backspace` `z C-b` `z Pageup` `Z C-b` `Z Pageup` | `Pageup` |
| `join_selections_space` | join lines and select where they meet | `A-J` | `A-J` |  |
| `save_selection` | save this place in the jump list | `C-s` | `C-s` |  |
| `jump_forward` | forward again in the jump list | `Tab` | `Tab` |  |
| `two_thirds_page_down` | two thirds of a page down | `C-n` | `C-n` |  |
| `two_thirds_page_up` | two thirds of a page up | `C-p` | `C-p` |  |
| `flip_selections` | move the cursor to the other end of the selection | `A-;` | `A-;` |  |
| `vim_redo` | redo, vim's C-r |  | `C-r` |  |
| `delete_char_backward` | delete the character before the cursor |  | `X` | `Backspace` `C-h` |
| `case_mode` | the case group: upper and lower case, traditional and simplified | `` ` `` | `` g` `` |  |
| `search_selection_detect_word_boundaries` | look for what is selected, as a whole word | `*` | `*` |  |
| `search_selection_exact` | look for what is selected, exactly as written | `A-*` | `A-*` |  |
| `search_word_backward` | search backward for the word under the cursor |  | `#` |  |
| `replace_mode` | Replace mode: typing writes over the text |  | `R` |  |
| `goto_line` | to line N (the count) | `G` |  |  |
| `vim_repeat_last_change` | repeat the last change with a new count |  | `.` |  |
| `repeat_last_motion` | repeat the last f or t | `A-.` | `A-.` |  |
| `jump_prev_word_end` | the cursor back to the previous word's end, selecting nothing |  | `ge` |  |
| `jump_prev_long_word_end` | the cursor back to the previous long word's end, selecting nothing |  | `gE` |  |
| `goto_word` | go to a place on this screen | `gw` | `gw` |  |
| `goto_word_by_letters` | two letters to locate a word | `gx` | `gx` |  |
| `goto_char_by_pinyin` | more letters to locate a char | `gz` | `gz` |  |
| `goto_last_accessed_file` | back to the buffer before this one | `ga` | `ga` |  |
| `goto_definition_other_window` | go to definition in the other window | `gD` | `gD` |  |
| `goto_reference` | every place it is used | `gr` | `gr` |  |
| `search_selection_other_window` | search the selection in the other window | `g?` | `g?` |  |
| `move_next_zong` | on a vertical page, on to the next line of the file |  | `gj` |  |
| `move_prev_zong` | on a vertical page, back to the previous line of the file |  | `gk` |  |
| `goto_last_modification` | back to the last change | `g.` | `g.` |  |
| `reselect_last_selection` | select what was selected last |  | `gv` |  |
| `insert_at_last_insert` | insert again where the last Insert stopped |  | `gi` |  |
| `goto_older_change` | back to an older change |  | `g;` |  |
| `goto_newer_change` | on to a newer change |  | `g,` |  |
| `operator_lowercase` | to lowercase (then a motion) |  | `gu` |  |
| `operator_uppercase` | to uppercase (then a motion) |  | `gU` |  |
| `operator_switch_case` | switch case (then a motion) |  | `g~` |  |
| `operator_fill` | fill the lines to the width — waits for a motion |  | `gq` |  |
| `join_selections_no_space` | join the next line, adding no space at all |  | `gJ` |  |
| `file_picker_in_current_directory` | open file picker (working dir) | `Space F` | `Space F` |  |
| `file_explorer` | browse files (project dir) | `Space e` | `Space e` |  |
| `file_explorer_in_current_buffer_directory` | browse files (this file's dir) | `Space E` | `Space E` |  |
| `changed_file_picker` | changed files | `Space g` | `Space g` |  |
| `paste_clipboard_before` | paste before, from the system clipboard | `Space P` | `Space P` |  |
| `replace_selections_with_clipboard` | replace the selection with the system clipboard | `Space R` | `Space R` |  |
| `symbol_picker` | symbol picker | `Space s` | `Space s` |  |
| `workspace_symbol_picker` | project symbol picker | `Space S` | `Space S` |  |
| `dictionary_panel` | character info (sidebar) | `Space N` | `Space N` |  |
| `hover` | documentation (floating) | `Space k` | `Space k` `K` |  |
| `hover_panel` | documentation (sidebar) | `Space K` | `Space K` |  |
| `diagnostics_picker` | diagnostics picker | `Space d` | `Space d` |  |
| `workspace_diagnostics_picker` | project diagnostics picker | `Space D` | `Space D` |  |
| `show_diagnostic` | show diagnostics (float) | `Space l` | `Space l` |  |
| `show_diagnostic_panel` | show diagnostics (sidebar) | `Space L` | `Space L` |  |
| `show_change` | show the change (float) | `Space x` | `Space x` |  |
| `show_change_panel` | show the change (sidebar) | `Space X` | `Space X` |  |
| `rename_symbol` | rename it everywhere | `Space r` | `Space r` |  |
| `code_action` | code actions | `Space a` | `Space a` |  |
| `show_record` | this row's record (floating) | `Space i` | `Space i` |  |
| `show_record_panel` | this row's record (sidebar) | `Space I` | `Space I` |  |
| `table_mode` | table operations | `Space t` | `Space t` |  |
| `conflict_mode` | merge conflict | `Space m` | `Space m` |  |
| `open_recent_mode` | open something recent | `Space o` | `Space o` |  |
| `yume_mode` | the input method | `Space z` | `Space z` |  |
| `goto_next_conflict` | the next merge conflict | `]m` | `]m` |  |
| `goto_prev_conflict` | the previous merge conflict | `[m` | `[m` |  |
| `goto_next_change` | the next change (git) | `]g` | `]g` |  |
| `goto_prev_change` | the previous change (git) | `[g` | `[g` |  |
| `goto_next_diag` | the next diagnostic | `]d` | `]d` |  |
| `goto_prev_diag` | the previous diagnostic | `[d` | `[d` |  |
| `goto_last_diag` | the last diagnostic | `]D` | `]D` |  |
| `goto_first_diag` | the first diagnostic | `[D` | `[D` |  |
| `goto_next_function` | the next function | `]f` | `]f` |  |
| `goto_prev_function` | the previous function | `[f` | `[f` |  |
| `goto_next_class` | the next class | `]t` | `]t` |  |
| `goto_prev_class` | the previous class | `[t` | `[t` |  |
| `goto_next_comment` | the next comment | `]c` | `]c` |  |
| `goto_prev_comment` | the previous comment | `[c` | `[c` |  |
| `add_newline_below` | a blank line below | `]␣` | `]␣` |  |
| `add_newline_above` | a blank line above | `[␣` | `[␣` |  |
| `align_view_center` | put the cursor's line in the middle of the screen | `zz` `zc` `Zz` `Zc` | `zz` `zc` `Zz` `Zc` |  |
| `align_view_top` | put the cursor's line at the top of the screen | `zt` `Zt` | `zt` `Zt` |  |
| `align_view_bottom` | put the cursor's line at the bottom of the screen | `zb` `Zb` | `zb` `Zb` |  |
| `scroll_down` | scroll the view down a line, the cursor keeping its place in the text | `zj` `z Down` `Zj` `Z Down` | `zj` `z Down` `Zj` `Z Down` |  |
| `scroll_up` | scroll the view up a line, the cursor keeping its place in the text | `zk` `z Up` `Zk` `Z Up` | `zk` `z Up` `Zk` `Z Up` |  |
| `match_brackets` | go to the other half of the pair | `mm` |  |  |
| `select_textobject_inner` | select what is inside the pair | `mi` |  |  |
| `select_textobject_around` | select the pair and what is inside | `ma` |  |  |
| `surround_add` | wrap the selection in a pair | `ms` |  |  |
| `surround_delete` | remove the pair | `md` |  |  |
| `surround_replace` | replace the pair | `mr` |  |  |
| `jump_view_left` | to the region on the left | `C-w h` `C-w Left` | `C-w h` `C-w Left` |  |
| `jump_view_down` | to the region below | `C-w j` `C-w Down` | `C-w j` `C-w Down` |  |
| `jump_view_up` | to the region above | `C-w k` `C-w Up` | `C-w k` `C-w Up` |  |
| `jump_view_right` | to the region on the right | `C-w l` `C-w Right` | `C-w l` `C-w Right` |  |
| `toggle_left_sidebar` | open or close the left sidebar | `C-w e` | `C-w e` |  |
| `toggle_right_sidebar` | open or close the right sidebar | `C-w i` | `C-w i` |  |
| `goto_left_sidebar` | into the left sidebar | `C-w E` | `C-w E` |  |
| `goto_right_sidebar` | into the right sidebar | `C-w I` | `C-w I` |  |
| `hsplit` | a window below | `C-w s` | `C-w s` |  |
| `vsplit` | a window beside | `C-w v` | `C-w v` |  |
| `hsplit_new` | a blank window below | `C-w n s` | `C-w n` `C-w n s` |  |
| `vsplit_new` | a blank window beside | `C-w n v` | `C-w n v` |  |
| `window_new_mode` | the blank-window group: s below, v beside | `C-w n` | `C-w n` |  |
| `wclose` | close this one | `C-w q` | `C-w q` |  |
| `wonly` | keep only this one | `C-w o` | `C-w o` |  |
| `switch_to_lowercase` | to lowercase | `` `l `` | `` g`l `` |  |
| `switch_to_uppercase` | to uppercase | `` `u `` | `` g`u `` |  |
| `convert_to_simplified` | traditional → simplified | `` `s `` | `` g`s `` |  |
| `convert_to_traditional` | simplified → traditional | `` `t `` | `` g`t `` |  |
| `convert_to_taiwan_traditional` | simplified → Taiwan 繁 | `` `w `` | `` g`w `` |  |
| `convert_to_hong_kong_traditional` | simplified → Hong Kong 繁 | `` `k `` | `` g`k `` |  |
| `convert_to_mainland_traditional` | simplified → mainland 繁 | `` `c `` | `` g`c `` |  |
| `convert_to_classical_traditional` | simplified → 古籍 繁 | `` `g `` | `` g`g `` |  |
| `convert_to_japanese` | traditional → Japanese shinjitai | `` `j `` | `` g`j `` |  |
| `switch_to_halfwidth` | to halfwidth | `` `h `` | `` g`h `` |  |
| `switch_to_fullwidth` | to fullwidth | `` `f `` | `` g`f `` |  |
| `conflict_keep_ours` | keep ours | `Space m o` | `Space m o` |  |
| `conflict_keep_theirs` | keep theirs | `Space m t` | `Space m t` |  |
| `conflict_keep_both` | keep both sides | `Space m b` | `Space m b` |  |
| `recent_file_picker` | recent files | `Space o f` | `Space o f` |  |
| `global_recent_file_picker` | recent files, everywhere | `Space o g` | `Space o g` |  |
| `project_picker` | recent projects | `Space o p` | `Space o p` |  |
| `resume_session` | take up the last session | `Space o r` | `Space o r` |  |
| `yume_toggle` | input method on / off (on is Chinese) | `Space z z` | `Space z z` |  |
| `yume_commit_mode` | when a word commits | `Space z m` | `Space z m` |  |
| `yume_panel_mode` | where the candidates are drawn | `Space z p` | `Space z p` |  |
| `yume_preedit_mode` | where what you are typing is written | `Space z e` | `Space z e` |  |
| `yume_toggle_prediction` | prediction (autocompletion) on or off | `Space z y` | `Space z y` |  |
| `yume_pick_scheme` | pick a scheme | `Space z i` | `Space z i` |  |
| `yume_next_scheme` | the next scheme | `Space z n` | `Space z n` |  |
| `yume_menu_size_3` | 3 candidates on a page | `Space z 3` | `Space z 3` |  |
| `yume_menu_size_4` | 4 candidates on a page | `Space z 4` | `Space z 4` |  |
| `yume_menu_size_5` | 5 candidates on a page | `Space z 5` | `Space z 5` |  |
| `yume_menu_size_6` | 6 candidates on a page | `Space z 6` | `Space z 6` |  |
| `yume_menu_size_7` | 7 candidates on a page | `Space z 7` | `Space z 7` |  |
| `yume_menu_size_8` | 8 candidates on a page | `Space z 8` | `Space z 8` |  |
| `yume_menu_size_9` | 9 candidates on a page | `Space z 9` | `Space z 9` |  |
| `yume_toggle_chaifen` | the 拆分 beside a candidate | `Space z /` | `Space z /` |  |
| `yume_installed_table` | switch to the installed 碼表 | `Space z t` | `Space z t` |  |
| `yume_table_source` | where the 碼表 came from | `Space z w` | `Space z w` |  |
| `yume_data_location` | where the data is | `Space z W` | `Space z W` |  |
| `yume_commit_default` | default — the scheme decides | `Space z m 0` | `Space z m 0` |  |
| `yume_commit_delayed` | delayed | `Space z m d` | `Space z m d` |  |
| `yume_commit_unique` | unique | `Space z m u` | `Space z m u` |  |
| `yume_commit_fluency` | whole-sentence (fluency) | `Space z m f` | `Space z m f` |  |
| `yume_panel_box` | box — beside the caret | `Space z p b` | `Space z p b` |  |
| `yume_panel_bottom` | bottom — the bottom line of the window | `Space z p m` | `Space z p m` |  |
| `yume_panel_inline` | inline — the line under the caret | `Space z p i` | `Space z p i` |  |
| `yume_preedit_off` | off — in the candidate bar | `Space z e o` | `Space z e o` |  |
| `yume_preedit_composition` | composition — the code, in the text | `Space z e c` | `Space z e c` |  |
| `yume_preedit_preview` | preview — the first candidate, in the text | `Space z e p` | `Space z e p` |  |
| `table_source_view` | source view: the file as written | `Space t o` | `Space t o` |  |
| `table_basic_view` | basic view: the columns lined up | `Space t b` | `Space t b` |  |
| `table_window_view` | window view: the table takes the window | `Space t t` | `Space t t` |  |
| `table_leave_window` | leave window view | `Space t q` | `Space t q` |  |
| `goto_next_table` | the next table | `Space t ]` | `Space t ]` |  |
| `goto_prev_table` | the previous table | `Space t [` | `Space t [` |  |
| `table_convert_mode` | convert the table's format (delimiter) | `Space t x` | `Space t x` |  |
| `table_cell_width` | long cells: wrap / fold / whole | `Space t w` | `Space t w` |  |
| `table_search_columns` | search down the columns (a column range can be given) | `Space t /` | `Space t /` |  |
| `table_search_columns_other_window` | search down the columns in the other window | `Space t ?` | `Space t ?` |  |
| `table_goto_cell` | go to a cell (␣t20,20g) | `Space t g` | `Space t g` |  |
| `table_yank_column` | yank this column | `Space t y` | `Space t y` |  |
| `table_replace_column` | write the yanked column over this one | `Space t v` | `Space t v` |  |
| `table_paste_column_right` | paste the yanked column to the right | `Space t p` | `Space t p` |  |
| `table_paste_column_left` | paste the yanked column to the left | `Space t P` | `Space t P` |  |
| `table_add_row_below` | insert a new row below | `Space t r` | `Space t r` |  |
| `table_add_row_above` | insert a new row above | `Space t R` | `Space t R` |  |
| `table_add_column_right` | add a column to the right | `Space t c` | `Space t c` |  |
| `table_add_column_left` | add a column to the left | `Space t C` | `Space t C` |  |
| `table_delete_row` | delete this row | `Space t d` | `Space t d` |  |
| `table_delete_column` | delete this column | `Space t D` | `Space t D` |  |
| `table_move_row_down` | move this row down | `Space t j` | `Space t j` |  |
| `table_move_row_up` | move this row up | `Space t k` | `Space t k` |  |
| `table_move_column_left` | move this column left | `Space t h` | `Space t h` |  |
| `table_move_column_right` | move this column right | `Space t l` | `Space t l` |  |
| `table_align_left` | this column to the left | `Space t <` | `Space t <` |  |
| `table_align_center` | this column to the centre | `Space t =` | `Space t =` |  |
| `table_align_right` | this column to the right | `Space t >` | `Space t >` |  |
| `table_line_up` | line it up again | `Space t F` | `Space t F` |  |
| `table_record_panel` | this row's record | `Space t i` | `Space t i` |  |
| `table_first_row_is_data` | whether the table's first row is a heading row | `Space t H` | `Space t H` |  |
| `table_sort_ascending` | sort by column, ascending (␣t1s) | `Space t s` | `Space t s` |  |
| `table_sort_descending` | sort by column, descending (␣t1S) | `Space t S` | `Space t S` |  |
| `convert_table_to_pipe` | convert the table to pipe | `Space t x p` | `Space t x p` |  |
| `paste_table_as_pipe` | paste the clipboard as a pipe table | `Space t x P` | `Space t x P` |  |
| `convert_table_to_csv` | convert the table to csv | `Space t x c` | `Space t x c` |  |
| `paste_table_as_csv` | paste the clipboard as a csv table | `Space t x C` | `Space t x C` |  |
| `convert_table_to_tsv` | convert the table to tsv | `Space t x t` | `Space t x t` |  |
| `paste_table_as_tsv` | paste the clipboard as a tsv table | `Space t x T` | `Space t x T` |  |
| `no_op` | nothing (bound to a key, it unbinds it) |  |  |  |
| `extend_char_left` | extend the selection one character left | `h` `Left` | `h` `Left` |  |
| `extend_char_right` | extend the selection one character right | `l` `Right` | `l` `Right` |  |
| `extend_visual_line_up` | extend the selection one line up, on screen | `k` `Up` |  |  |
| `extend_visual_line_down` | extend the selection one line down, on screen | `j` `Down` |  |  |
| `extend_line_up` | extend the selection one line up, in the file | `gk` | `gk` |  |
| `extend_line_down` | extend the selection one line down, in the file | `gj` | `gj` |  |
| `extend_next_word_start` | extend the selection to the next word's start | `w` |  |  |
| `extend_prev_word_start` | extend the selection to the previous word's start | `b` |  |  |
| `extend_next_word_end` | extend the selection to the next word's end | `e` |  |  |
| `extend_next_long_word_start` | extend the selection to the next long word's start | `W` |  |  |
| `extend_prev_long_word_start` | extend the selection to the previous long word's start | `B` |  |  |
| `extend_next_long_word_end` | extend the selection to the next long word's end | `E` |  |  |
| `extend_search_next` | add the next match as a selection | `n` |  |  |
| `extend_search_prev` | add the previous match as a selection | `N` |  |  |
| `extend_till_char` | extend the selection forward to just before a character | `t` | `t` |  |
| `extend_next_char` | extend the selection forward to a character | `f` | `f` |  |
| `extend_till_prev_char` | extend the selection backward to just after a character | `T` | `T` |  |
| `extend_prev_char` | extend the selection backward to a character | `F` | `F` |  |
| `extend_to_line_start` | extend the selection to the line's start | `Home` | `Home` |  |
| `extend_to_line_end` | extend the selection to the line's end | `End` |  |  |
| `extend_to_file_start` | extend the selection to the start of the file | `gg` | `gg` |  |
| `extend_to_file_end` | extend the selection to the end of the file | `ge` | `ge` |  |
| `extend_to_word` | extend the selection to a place on screen, by its label | `gw` | `gw` |  |
| `insert_newline` | a line break, carrying the indent and a list's marker |  |  | `Enter` |
| `delete_char_forward` | delete the character after the cursor |  |  | `Delete` `C-d` |
| `delete_word_forward` | delete the word after the cursor |  |  | `A-d` |
| `delete_word_backward` | delete the word before the cursor |  |  | `C-w` |
| `kill_to_line_start` | delete to the start of the line |  |  | `C-u` |
| `kill_to_line_end` | delete to the end of the line, in Insert mode |  |  | `C-k` |
| `insert_register` | insert a register (then its letter) |  |  | `C-r` |
| `run_one_normal_command` | one Normal-mode command, then back to Insert mode (vim's C-o) |  |  | `C-o` |
| `goto_line_end_newline` | to the end of the line, after its last character |  |  | `End` `C-e` |
| `commit_undo_checkpoint` | break the undo here |  |  | `C-g` |
| `insert_tab` | insert an indent, the kind the file uses |  |  | `Tab` |
| `insert_other_tab` | insert the other kind of indent, a tab or spaces |  |  | `S-tab` |
| `vim_normal_mode` | back to Normal mode (vim: leaving Visual mode collapses the selection) |  | `Esc` |  |
| `vim_goto_line_end` | the end of the line (vim's $: moving down keeps to line ends) |  | `End` |  |
| `vim_insert_mode` | insert before the cursor (vim's i) |  | `i` |  |
| `vim_append_mode` | insert after the cursor (vim's a) |  | `a` |  |
| `vim_insert_at_line_start` | insert before the first non-blank (vim's I) |  | `I` |  |
| `vim_insert_at_line_end` | insert at the end of the line (vim's A) |  | `A` |  |
| `vim_open_below` | open a line below (vim's o; a count repeats it) |  | `o` |  |
| `vim_open_above` | open a line above (vim's O; a count repeats it) |  | `O` |  |
| `vim_join_selections` | join with the next line (vim's J) |  | `J` |  |
| `vim_switch_case` | switch case and move on (vim's ~) |  | `~` |  |
| `vim_goto_line` | to line N, or to the last line without a count (vim's G) |  | `G` |  |
| `vim_indent` | indent, the cursor keeping its column (vim) |  | `>` |  |
| `vim_unindent` | unindent, the cursor keeping its column (vim) |  | `<` |  |
| `vim_paste_after` | paste after (vim's p) |  | `p` |  |
| `vim_paste_before` | paste before (vim's P) |  | `P` |  |
| `vim_increment` | the number at or after the cursor, plus one (vim's C-a) |  | `C-a` |  |
| `vim_decrement` | the number at or after the cursor, minus one (vim's C-x) |  | `C-x` |  |
| `vim_search_next` | the next match (vim's n) |  | `n` |  |
| `vim_search_prev` | the previous match (vim's N) |  | `N` |  |
| `vim_match_brackets` | the matching bracket, or the next one on the line (vim's %) |  |  |  |
| `vim_kill_to_line_start` | delete back to where this Insert began (vim's C-u) |  |  | `C-u` |
| `vim_kill_to_line_end` | delete to the end of the line, never the line break (vim) |  |  | `C-k` |
| `vim_flip_selections` | to the other end of the selection (vim's Visual o) |  | `o` |  |
| `vim_switch_to_lowercase` | the selection to lowercase, leaving Visual mode (vim's u) |  | `u` |  |
| `vim_switch_to_uppercase` | the selection to uppercase, leaving Visual mode (vim's U) |  | `U` |  |
| `vim_yank` | yank the selection, leaving Visual mode (vim's y) |  | `y` |  |
| `vim_visual_block_mode` | select a block (vim's C-v) |  | `C-v` |  |

### vim keys that play other keys

| Key | Plays |
| --- | --- |
| `+` | `@jgs` |
| `-` | `@kgs` |
| `$` | `vim_goto_line_end` |
| `Y` | `@y$` |
| `ZZ` | `:x` |
| `ZQ` | `:quit!` |

### `[keys.prompt]`

| Command | What it does | Keys |
| --- | --- | --- |
| `normal_mode` | close the prompt, the search or the picker | `Esc` |
| `confirm` | run the line; in a picker, open the highlighted entry | `Enter` |
| `completion_next` | the next completion | `Tab` |
| `completion_prev` | the previous completion | `S-tab` |
| `history_prev` | the previous line in the history | `Up` `C-p` |
| `history_next` | the next line in the history | `Down` `C-n` |
| `move_char_left` | one character left | `Left` |
| `move_char_right` | one character right | `Right` |
| `goto_line_start` | the start of the line | `Home` `C-a` |
| `goto_line_end` | the end of the line | `End` `C-e` |
| `delete_char_backward` | delete the character before the cursor | `Backspace` |
| `delete_char_forward` | delete the character after the cursor | `Delete` |
| `delete_word_backward` | delete the word before the cursor | `C-w` |
| `kill_to_line_start` | delete to the start of the line | `C-u` |
| `toggle_wide_search` | match across glyph variants and pinyin, on or off | `A-j` |

### `[keys.picker]`

| Command | What it does | Keys |
| --- | --- | --- |
| `next_entry` | the next entry | `Tab` `C-n` `Down` |
| `prev_entry` | the previous entry | `S-tab` `C-p` `Up` |
| `page_down` | a page down | `Pagedown` |
| `page_up` | a page up | `Pageup` |
| `first_entry` | the first entry |  |
| `last_entry` | the last entry |  |
| `cycle_hidden_files` | cycle which files are skipped: hidden, ignored | `A-h` |

### `[keys.sidebar]`

| Command | What it does | Keys |
| --- | --- | --- |
| `move_line_down` | one row down | `j` `Down` |
| `move_line_up` | one row up | `k` `Up` |
| `page_down` | a page down | `J` `Pagedown` |
| `page_up` | a page up | `K` `Pageup` |
| `goto_file_start` | the first row | `g` `Home` |
| `goto_last_line` | the last row | `G` `End` |
| `collapse_entry` | fold the entry, or go out of it | `h` `Left` |
| `expand_entry` | unfold the entry, or go into it | `l` `Right` |
| `open_entry` | go to the entry: open the file, or jump to the line | `Enter` |
| `toggle_links_graph` | the links panel as a list or a graph | `v` |
| `restore_change` | restore this change | `u` |
| `yank_old_text` | copy what was there before the change | `y` |
| `refresh_sidebar` | read it again | `R` |
| `cycle_sidebar_width` | the next width: narrow, middle, wide | `w` |
| `next_sidebar_view` | the next view in this slot | `Tab` |
| `prev_sidebar_view` | the previous view in this slot | `S-tab` |
| `normal_mode` | suspend the input method again | `Esc` |
| `leave_sidebar` | back to the text, the panel stays | `q` |
| `command_mode` | the command line | `:` |
| `space_mode` | the Space menu | `Space` |
| `window_mode` | the window group | `C-w` |
