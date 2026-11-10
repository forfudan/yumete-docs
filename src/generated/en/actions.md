<!-- Written by `ye --docgen`. Do not edit: change the editor and regenerate. -->

| Command | What it does | helix | vim | Insert |
| --- | --- | --- | --- | --- |
| `move_char_left` | one character left | `h` `Left` | `h` `Left` `Backspace` | `Left` |
| `move_char_right` | one character right | `l` `Right` | `l` `Right` | `Right` |
| `move_visual_line_up` | one line up, on screen | `k` `Up` | `gk` `g Up` | `Up` |
| `move_visual_line_down` | one line down, on screen | `j` `Down` | `gj` `g Down` | `Down` |
| `move_next_word_start` | start of the next word | `w` |  |  |
| `move_prev_word_start` | start of the previous word | `b` |  |  |
| `move_next_word_end` | end of the next word | `e` |  |  |
| `move_next_long_word_start` | start of the next long word | `W` |  |  |
| `move_prev_long_word_start` | start of the previous long word | `B` |  |  |
| `move_next_long_word_end` | end of the next long word | `E` |  |  |
| `goto_line_start` | start of line | `0` `Home` `gh` `g Up` | `Home` `0` | `Home` `C-a` |
| `goto_line_end` | end of line | `End` `gl` `g Down` |  |  |
| `goto_first_nonwhitespace` | first non-blank character | `^` `gs` | `^` |  |
| `goto_file_start` | start of file | `gg` | `gg` |  |
| `goto_file_end` | end of file |  |  |  |
| `goto_last_line` | last line | `ge` |  |  |
| `goto_prev_sentence` | previous sentence | `H` |  |  |
| `goto_next_sentence` | next sentence | `L` |  |  |
| `goto_prev_paragraph` | previous paragraph | `[p` |  |  |
| `goto_next_paragraph` | next paragraph | `]p` |  |  |
| `page_cursor_half_down` | half a page down | `C-d` `z C-d` `z␣` `Z C-d` `Z␣` | `C-d` `Z C-d` `Z␣` |  |
| `page_cursor_half_up` | half a page up | `C-u` `z C-u` `z Backspace` `Z C-u` `Z Backspace` | `C-u` `Z C-u` `Z Backspace` |  |
| `jump_backward` | jump back | `C-o` | `C-o` |  |
| `select_mode` | Select mode: moving grows the selection | `v` | `v` |  |
| `extend_line_below` | select this line | `x` |  |  |
| `extend_to_line_bounds` | extend the selection to whole lines |  |  |  |
| `select_all` | select all | `%` |  |  |
| `collapse_selection` | collapse the selection to the cursor | `;` |  |  |
| `delete_selection` | cut the selection | `d` | `x` |  |
| `delete_selection_noyank` | delete the selection without yanking | `A-d` | `A-d` |  |
| `change_selection` | cut into the register, then change | `c` | `s` |  |
| `change_selection_noyank` | change the selection without yanking | `A-c` | `A-c` |  |
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
| `unindent` | unindent | `<` |  | `C-d` |
| `increment` | increment the number under the cursor | `C-a` |  |  |
| `decrement` | decrement the number under the cursor | `C-x` |  |  |
| `switch_case` | switch case | `~` ``` `` ``` | ``` g`` ``` |  |
| `undo` | undo | `u` |  |  |
| `redo` | redo | `U` |  |  |
| `repeat_last_change` | repeat the last insert (vim keymap: the last change) | `.` |  |  |
| `search` | search forward | `/` `z/` `Z/` | `/` `Z/` |  |
| `rsearch` | search backward | `?` `z?` `Z?` | `?` `Z?` |  |
| `search_next` | next match | `n` `zn` `Zn` | `gn` `Zn` |  |
| `search_prev` | previous match | `N` `zN` `ZN` | `gN` `ZN` |  |
| `search_selection` | search for the selection | `g/` | `*` `g/` |  |
| `goto_definition` | go to definition | `gd` | `gd` |  |
| `goto_file` | open the file this line names | `gf` | `gf` |  |
| `follow_link` | follow the link under the cursor | `gL` | `gL` |  |
| `open_link` | open the URL under the cursor in a browser | `gx` | `gx` |  |
| `goto_declaration` | go to declaration | `gD` | `gD` |  |
| `goto_type_definition` | go to type definition | `gy` | `gy` |  |
| `goto_implementation` | go to implementation | `gi` |  |  |
| `goto_last_modified_file` | last modified file | `gm` |  |  |
| `insert_char_above` | insert the character above the cursor |  |  | `C-y` |
| `insert_char_below` | insert the character below the cursor |  |  | `C-e` |
| `file_picker` | open the file picker | `Space f` | `Space f` |  |
| `buffer_picker` | open the buffer picker | `Space b` | `Space b` |  |
| `goto_next_buffer` | next buffer | `gn` |  |  |
| `goto_previous_buffer` | previous buffer | `gp` |  |  |
| `dictionary` | dictionary: the division of the character under the cursor | `Space n` | `Space n` |  |
| `rotate_view` | the next region | `C-w w` | `C-w w` |  |
| `global_search` | search panel | `Space /` | `Space /` |  |
| `command_palette` | all commands | `Space ?` | `Space ?` |  |
| `paste_menu` | paste menu | `Space "` | `Space "` |  |
| `toggle_comments` | line comment | `C-c` `Space c` | `Space c` |  |
| `toggle_block_comments` | block comment | `Space C` | `Space C` |  |
| `toggle_line_comments` | line comment only | `Space A-c` | `Space A-c` |  |
| `yank_to_clipboard` | copy to the system clipboard | `Space y` | `Space y` |  |
| `yank_main_selection_to_clipboard` | copy main to clipboard | `Space Y` | `Space Y` |  |
| `jumplist_picker` | jump list | `Space j` | `Space j` |  |
| `goto_first_change` | first change | `[G` | `[G` |  |
| `goto_last_change` | last change | `]G` | `]G` |  |
| `suspend` | suspend to the shell; fg brings it back | `C-z` | `C-z` |  |
| `select_references_to_symbol_under_cursor` | select all references | `Space h` | `Space h` |  |
| `format_selections` | format the selection with the language server | `=` |  |  |
| `expand_selection` | expand the selection to the parent syntax node | `A-o` | `A-o` |  |
| `shrink_selection` | shrink the selection back, or to its first child node | `A-i` | `A-i` |  |
| `select_next_sibling` | select the next sibling node | `A-n` | `A-n` |  |
| `select_prev_sibling` | select the previous sibling node | `A-p` | `A-p` |  |
| `select_all_siblings` | select every sibling node | `A-a` | `A-a` |  |
| `select_all_children` | select every child node | `A-I` | `A-I` |  |
| `move_parent_node_end` | to the end of the enclosing node | `A-e` | `A-e` |  |
| `move_parent_node_start` | to the start of the enclosing node, then of its parent | `A-b` | `A-b` |  |
| `extend_parent_node_end` | extend to the end of the enclosing node | `A-e` | `A-e` |  |
| `extend_parent_node_start` | extend to the start of the enclosing node | `A-b` | `A-b` |  |
| `last_picker` | reopen last picker | `Space '` | `Space '` |  |
| `paste_clipboard_after` | paste from the system clipboard | `Space p` | `Space p` |  |
| `move_line_up` | one line up, in the file | `gk` `g Up` | `C-p` `k` `Up` |  |
| `move_line_down` | one line down, in the file | `gj` `g Down` | `C-n` `j` `Down` |  |
| `goto_next_line_nonwhitespace` | next line's first non-blank character |  | `Enter` |  |
| `jump_next_word_start` | to the start of the next word, no selection |  | `w` |  |
| `jump_next_long_word_start` | to the start of the next long word, no selection |  | `W` |  |
| `jump_prev_word_start` | to the start of the previous word, no selection |  | `b` |  |
| `jump_prev_long_word_start` | to the start of the previous long word, no selection |  | `B` |  |
| `jump_next_word_end` | to the end of the next word, no selection |  | `e` |  |
| `jump_next_long_word_end` | to the end of the next long word, no selection |  | `E` |  |
| `jump_next_paragraph` | to the next paragraph, no selection |  | `}` |  |
| `jump_prev_paragraph` | to the previous paragraph, no selection |  | `{` |  |
| `move_next_paragraph` | select on to the next paragraph | `}` |  |  |
| `move_prev_paragraph` | select back to the previous paragraph | `{` |  |  |
| `goto_window_top` | top line on screen | `gt` | `H` |  |
| `goto_window_center` | middle line on screen | `gc` | `M` |  |
| `goto_window_bottom` | bottom line on screen | `gb` | `L` `gb` |  |
| `jump_prev_sentence` | to the previous sentence, no selection |  | `(` |  |
| `jump_next_sentence` | to the next sentence, no selection |  | `)` |  |
| `add_mark` | set a mark (then a letter) | `M` | `m` |  |
| `goto_mark` | go to a mark (then a letter) | `'` | `'` |  |
| `goto_mark_exact` | go to the very place of a mark (then a letter) |  | `` ` `` |  |
| `view_mode` | view group: place the cursor line, scroll, fold | `z` | `z` |  |
| `sticky_view_mode` | view group (sticky) | `Z` | `Z` |  |
| `right_bracket_mode` | ] group: go to next | `]` | `]` |  |
| `left_bracket_mode` | [ group: go to previous | `[` | `[` |  |
| `goto_mode` | g group: go to | `g` | `g` |  |
| `space_mode` | Space menu | `Space` | `Space` `\` |  |
| `find_next_char` | find a character forward, selecting up to it | `f` | `f` |  |
| `find_prev_char` | find a character backward, selecting back to it | `F` | `F` |  |
| `find_till_char` | find a character forward, selecting up to just before it | `t` | `t` |  |
| `till_prev_char` | find a character backward, selecting back to just after it | `T` | `T` |  |
| `select_line_mode` | line-wise Select mode |  | `V` |  |
| `normal_mode` | leave Select mode and dismiss anything shown briefly | `Esc` |  | `Esc` `C-c` |
| `repeat_find_char` | find that character again |  | `;` |  |
| `repeat_find_char_reverse` | find that character again, in reverse |  | `,` |  |
| `copy_selection_on_next_line` | add a selection on the next line | `C` |  |  |
| `copy_selection_on_prev_line` | add a selection on the previous line | `A-C` | `A-C` |  |
| `keep_primary_selection` | keep only the primary selection | `,` |  |  |
| `remove_primary_selection` | remove the primary selection | `A-,` | `A-,` |  |
| `merge_selections` | merge all selections into one | `A--` | `A--` |  |
| `merge_consecutive_selections` | merge adjacent selections | `A-_` | `A-_` |  |
| `ensure_selections_forward` | make every selection face forward | `A-:` | `A-:` |  |
| `shrink_to_line_bounds` | shrink the selection to whole lines | `A-x` | `A-x` |  |
| `split_selection_on_newline` | split the selection into its lines | `A-s` | `A-s` |  |
| `rotate_selections_forward` | make the next selection the primary one | `)` |  |  |
| `rotate_selections_backward` | make the previous selection the primary one | `(` |  |  |
| `trim_selections` | trim the spaces off both ends of each selection | `_` |  |  |
| `align_selections` | align the selections | `&` |  |  |
| `rotate_selection_contents_forward` | rotate the selections' contents forward | `A-)` | `A-)` |  |
| `rotate_selection_contents_backward` | rotate the selections' contents backward | `A-(` | `A-(` |  |
| `select_regex` | select regex matches inside the selection | `s` |  |  |
| `split_selection` | split the selection on a regex | `S` |  |  |
| `keep_selections` | keep selections matching a regex | `K` |  |  |
| `remove_selections` | remove selections matching a regex | `A-K` | `A-K` |  |
| `operator_delete` | delete (then a motion) |  | `d` |  |
| `operator_change` | change (then a motion) |  | `c` |  |
| `operator_yank` | yank (then a motion) |  | `y` `zy` |  |
| `operator_indent` | indent (then a motion) |  | `>` |  |
| `operator_unindent` | unindent (then a motion) |  | `<` |  |
| `delete_to_line_end` | delete to the end of the line | `D` |  |  |
| `delete_to_line_end_noyank` | delete to the end of the line without yanking | `A-D` |  |  |
| `vim_delete_char_forward` | delete the character under the cursor, never the line break (vim's x) |  | `x` |  |
| `extend_line_above` | select the line above, or one more line upward | `X` |  |  |
| `move_selected_lines_down` | move the selected lines down | `A-j` | `A-j` |  |
| `move_selected_lines_up` | move the selected lines up | `A-k` | `A-k` |  |
| `goto_line_or_last_line` | go to line N, or with no count to the last line | `G` |  |  |
| `normal_mode_and_collapse` | leave Select mode, or collapse to one cursor |  |  |  |
| `quit` | close this region; in the last window, quit |  |  |  |
| `select_inner_object` | select inside an object (then its key) |  | `i` |  |
| `select_around_object` | select around an object (then its key) |  | `a` |  |
| `undo_line` | undo every change on this line |  | `U` |  |
| `earlier` | undo (same as u) | `A-u` | `A-u` |  |
| `later` | redo (same as U) | `A-U` | `A-U` |  |
| `goto_column` | go to column N of the line (count) |  | `\|` |  |
| `shell_pipe` | pipe the selection through a command, replacing it | `\|` |  |  |
| `shell_insert_output` | insert a command's output before the selection | `!` |  |  |
| `shell_append_output` | append a command's output after the selection | `A-!` | `A-!` |  |
| `shell_pipe_to` | pipe the selection to a command, keeping the text | `A-\|` | `A-\|` |  |
| `shell_keep_pipe` | keep the selections a shell command succeeds on | `$` |  |  |
| `command_mode` | command line | `:` | `:` `C-w :` |  |
| `match_mode` | match group: brackets, quotes, objects | `m` |  |  |
| `replace` | replace each selected character with another | `r` | `r` |  |
| `select_register` | pick a register (then a letter) | `"` | `"` |  |
| `record_macro` | start or stop recording a macro | `Q` |  |  |
| `replay_macro` | replay | `q` |  |  |
| `window_mode` | window group | `C-w` `Space w` | `C-w` `Space w` |  |
| `page_down` | a page down | `C-f` `PageDown` `Space Space` `z C-f` `z PageDown` `Z C-f` `Z PageDown` | `C-f` `PageDown` `Space Space` `Z C-f` `Z PageDown` | `PageDown` |
| `page_up` | a page up | `C-b` `PageUp` `Space Backspace` `z C-b` `z PageUp` `Z C-b` `Z PageUp` | `C-b` `PageUp` `Space Backspace` `Z C-b` `Z PageUp` | `PageUp` |
| `join_selections_space` | join lines and select where they meet | `A-J` | `A-J` |  |
| `save_selection` | save this position to the jump list | `C-s` | `C-s` |  |
| `jump_forward` | jump forward | `C-i` `Tab` | `C-i` `Tab` |  |
| `two_thirds_page_down` | two thirds of a page down | `C-n` |  |  |
| `two_thirds_page_up` | two thirds of a page up | `C-p` |  |  |
| `flip_selections` | move the cursor to the other end of the selection | `A-;` | `A-;` |  |
| `vim_redo` | redo (vim's C-r) |  | `C-r` |  |
| `delete_char_backward` | delete the character before the cursor |  | `X` | `Backspace` `C-h` |
| `case_mode` | case group: upper/lower, traditional/simplified | `` ` `` | `` g` `` |  |
| `search_selection_detect_word_boundaries` | search for the selection as a whole word | `*` |  |  |
| `search_selection_exact` | search for the selection exactly | `A-*` | `A-*` |  |
| `search_word_backward` | search backward for the word under the cursor |  | `#` |  |
| `replace_mode` | Replace mode: typing writes over the text |  | `R` |  |
| `goto_line` | go to line N (count) |  |  |  |
| `vim_repeat_last_change` | repeat the last change with a new count |  | `.` |  |
| `repeat_last_motion` | repeat the last f or t | `A-.` | `A-.` |  |
| `jump_prev_word_end` | to the end of the previous word, no selection |  | `ge` |  |
| `jump_prev_long_word_end` | to the end of the previous long word, no selection |  | `gE` |  |
| `goto_word` | jump to a spot on screen | `gw` | `gW` |  |
| `goto_word_by_letters` | jump to a word by two letters | `gz` | `gz` |  |
| `split_join` | split or join items in brackets | `gS` | `gS` |  |
| `goto_char_by_pinyin` | jump to a character by reading | `gZ` | `gZ` |  |
| `goto_last_accessed_file` | back to the last buffer | `ga` | `` |  |
| `goto_reference` | find references | `gr` |  |  |
| `move_next_zong` | on a vertical page, on to the next line of the file |  | `gj` |  |
| `move_prev_zong` | on a vertical page, back to the previous line of the file |  | `gk` |  |
| `goto_last_modification` | last change | `g.` | `g.` |  |
| `reselect_last_selection` | reselect last selection |  | `gv` |  |
| `insert_at_last_insert` | insert again where the last Insert stopped |  | `gi` |  |
| `goto_older_change` | to an older change |  | `g;` |  |
| `goto_newer_change` | to a newer change |  | `g,` |  |
| `operator_lowercase` | to lowercase (then a motion) |  | `gu` |  |
| `operator_uppercase` | to uppercase (then a motion) |  | `gU` |  |
| `operator_switch_case` | switch case (then a motion) |  | `g~` |  |
| `operator_comment` | comment (then a motion) |  | `gc` |  |
| `operator_fill` | reflow to the width, then a motion |  | `gq` |  |
| `operator_fill_keep_cursor` | reflow lines, keeping the cursor (vim's gw) |  | `gw` |  |
| `join_selections_no_space` | join the next line without a space |  | `gJ` |  |
| `file_picker_in_current_directory` | file picker (cwd) | `Space F` | `Space F` |  |
| `file_explorer` | browse the project | `Space e` | `Space e` |  |
| `file_explorer_in_current_buffer_directory` | browse this folder | `Space E` | `Space E` |  |
| `changed_file_picker` | changed files | `Space g` | `Space g` |  |
| `paste_clipboard_before` | paste clipboard before | `Space P` | `Space P` |  |
| `replace_selections_with_clipboard` | replace with clipboard | `Space R` | `Space R` |  |
| `lsp_or_syntax_symbol_picker` | symbol picker | `Space s` | `Space s` |  |
| `lsp_or_syntax_workspace_symbol_picker` | project symbol picker | `Space S` | `Space S` |  |
| `dictionary_panel` | char info (sidebar) | `Space N` | `Space N` |  |
| `hover` | show docs (popup) | `Space k` | `K` `Space k` |  |
| `hover_panel` | show docs (sidebar) | `Space K` | `Space K` |  |
| `diagnostics_picker` | diagnostics picker | `Space d` | `Space d` |  |
| `workspace_diagnostics_picker` | project diagnostics | `Space D` | `Space D` |  |
| `show_diagnostic` | diagnostic (popup) | `Space l` | `Space l` |  |
| `show_diagnostic_panel` | diagnostic (sidebar) | `Space L` | `Space L` |  |
| `show_change` | show change (popup) | `Space x` | `Space x` |  |
| `show_change_panel` | show change (sidebar) | `Space X` | `Space X` |  |
| `rename_symbol` | rename symbol | `Space r` | `Space r` |  |
| `code_action` | code actions | `Space a` | `Space a` |  |
| `show_record` | row record (popup) | `Space i` | `Space i` |  |
| `show_record_panel` | row record (sidebar) | `Space I` | `Space I` |  |
| `table_mode` | table | `Space t` | `Space t` |  |
| `conflict_mode` | merge conflict | `Space m` | `Space m` |  |
| `open_recent_mode` | open recent | `Space o` | `Space o` |  |
| `yume_mode` | input method | `Space z` | `Space z` |  |
| `goto_next_conflict` | next merge conflict | `]m` |  |  |
| `goto_prev_conflict` | previous merge conflict | `[m` |  |  |
| `goto_next_change` | next change (git) | `]g` | `]g` `]c` |  |
| `goto_prev_change` | previous change (git) | `[g` | `[g` `[c` |  |
| `goto_next_diag` | next diagnostic | `]d` | `]d` |  |
| `goto_prev_diag` | previous diagnostic | `[d` | `[d` |  |
| `goto_last_diag` | last diagnostic | `]D` | `]D` |  |
| `goto_first_diag` | first diagnostic | `[D` | `[D` |  |
| `goto_next_function` | next function | `]f` |  |  |
| `goto_prev_function` | previous function | `[f` |  |  |
| `goto_next_class` | next class | `]t` |  |  |
| `goto_prev_class` | previous class | `[t` |  |  |
| `goto_next_comment` | next comment | `]c` |  |  |
| `goto_prev_comment` | previous comment | `[c` |  |  |
| `goto_next_parameter` | select the next parameter | `]a` |  |  |
| `goto_prev_parameter` | select the previous parameter | `[a` |  |  |
| `goto_next_entry` | select the next entry | `]e` | `]e` |  |
| `goto_prev_entry` | select the previous entry | `[e` | `[e` |  |
| `goto_next_test` | select the next test | `]T` |  |  |
| `goto_prev_test` | select the previous test | `[T` |  |  |
| `goto_next_xml_element` | select the next XML element | `]x` | `]x` |  |
| `goto_prev_xml_element` | select the previous XML element | `[x` | `[x` |  |
| `add_newline_below` | add a blank line below | `]␣` | `]␣` |  |
| `add_newline_above` | add a blank line above | `[␣` | `[␣` |  |
| `align_view_center` | cursor line to the middle | `zz` `zc` `Zz` `Zc` | `zz` `Zz` `Zc` |  |
| `align_view_top` | cursor line to the top | `zt` `Zt` | `zt` `Zt` |  |
| `align_view_bottom` | cursor line to the bottom | `zb` `Zb` | `zb` `Zb` |  |
| `scroll_down` | scroll down a line, the cursor keeping its place | `zj` `z Down` `Zj` `Z Down` | `C-e` `Zj` `Z Down` |  |
| `scroll_up` | scroll up a line, the cursor keeping its place | `zk` `z Up` `Zk` `Z Up` | `C-y` `Zk` `Z Up` |  |
| `match_brackets` | go to the other half of the pair | `mm` |  |  |
| `select_textobject_inner` | select inside the pair | `mi` |  |  |
| `select_textobject_around` | select the pair and its contents | `ma` |  |  |
| `surround_add` | surround the selection with a pair | `ms` |  |  |
| `surround_delete` | remove the pair | `md` |  |  |
| `surround_replace` | replace the pair | `mr` |  |  |
| `jump_view_left` | to the region on the left | `C-w h` `C-w Left` | `C-w h` `C-w Left` |  |
| `jump_view_down` | to the region below | `C-w j` `C-w Down` | `C-w j` `C-w Down` |  |
| `jump_view_up` | to the region above | `C-w k` `C-w Up` | `C-w k` `C-w Up` |  |
| `jump_view_right` | to the region on the right | `C-w l` `C-w Right` | `C-w l` `C-w Right` |  |
| `toggle_left_sidebar` | open or close the left sidebar | `C-w e` | `C-w e` |  |
| `toggle_right_sidebar` | open or close the right sidebar | `C-w i` | `C-w i` |  |
| `goto_left_sidebar` | go to the left sidebar | `C-w E` | `C-w E` |  |
| `goto_right_sidebar` | go to the right sidebar | `C-w I` | `C-w I` |  |
| `hsplit` | split below | `C-w s` |  |  |
| `hsplit_above` | split above |  | `C-w S` `C-w s` |  |
| `vsplit_left` | split left |  | `C-w v` |  |
| `vsplit` | split right | `C-w v` |  |  |
| `hsplit_new` | new blank window below | `C-w n s` | `C-w n s` |  |
| `vsplit_new` | new blank window on the right | `C-w n v` | `C-w n v` |  |
| `window_new_mode` | blank-window group: s below, v beside | `C-w n` |  |  |
| `new_window_left` | new blank window on the left | `C-w n h` |  |  |
| `new_window_down` | new blank window below | `C-w n j` |  |  |
| `new_window_up` | new blank window above | `C-w n k` | `C-w n` |  |
| `new_window_right` | new blank window on the right | `C-w n l` |  |  |
| `new_window_left_pick` | new window on the left, picking a buffer | `C-w n H` |  |  |
| `new_window_down_pick` | new window below, picking a buffer | `C-w n J` |  |  |
| `new_window_up_pick` | new window above, picking a buffer | `C-w n K` |  |  |
| `new_window_right_pick` | new window on the right, picking a buffer | `C-w n L` |  |  |
| `wclose` | close window | `C-w q` | `C-w q` |  |
| `wonly` | keep only this window | `C-w o` | `C-w o` |  |
| `transpose_view` | flip the split: beside / below | `C-w t` |  |  |
| `swap_view_left` | swap with the region on the left | `C-w H` |  |  |
| `swap_view_down` | swap with the region below | `C-w J` |  |  |
| `swap_view_up` | swap with the region above | `C-w K` |  |  |
| `swap_view_right` | swap with the region on the right | `C-w L` |  |  |
| `goto_file_hsplit` | open file under cursor below | `C-w f` |  |  |
| `goto_file_vsplit` | open file under cursor beside | `C-w F` |  |  |
| `goto_file_hsplit_above` | open file under cursor above |  | `C-w F` `C-w f` |  |
| `create_fold` | create a fold over a motion | `zf` `Zf` | `zf` |  |
| `create_fold_lines` | fold N lines |  | `zF` |  |
| `open_fold` | open fold |  | `zo` |  |
| `open_folds_recursively` | open folds recursively |  | `zO` |  |
| `close_fold` | close fold |  | `zc` |  |
| `close_folds_recursively` | close folds recursively |  | `zC` |  |
| `toggle_fold` | toggle fold | `za` `Za` | `za` |  |
| `toggle_folds_recursively` | toggle folds recursively |  | `zA` |  |
| `open_folds_to_cursor` | open folds to the cursor line |  | `zv` |  |
| `open_all_folds` | open all folds | `zR` `ZR` | `zR` |  |
| `close_all_folds` | close all folds | `zM` `ZM` | `zM` |  |
| `delete_fold` | delete the fold here, keep the text |  | `zd` |  |
| `delete_folds_recursively` | delete all zf folds here |  | `zD` |  |
| `delete_all_folds` | delete all zf folds |  | `zE` |  |
| `goto_next_fold` | start of next fold |  | `zj` |  |
| `goto_prev_fold` | end of previous fold |  | `zk` |  |
| `disable_folds` | disable folds |  | `zn` |  |
| `enable_folds` | enable folds |  | `zN` |  |
| `toggle_folds_enabled` | enable / disable folds |  | `zi` |  |
| `fold_more` | close one more level |  | `zm` |  |
| `fold_less` | open one more level |  | `zr` |  |
| `goto_fold_start` | start of this fold |  | `[z` |  |
| `goto_fold_end` | end of this fold |  | `]z` |  |
| `reapply_fold_level_and_view` | refold to the level, show the cursor line |  | `zx` |  |
| `reapply_fold_level` | refold to the level |  | `zX` |  |
| `vim_align_view_top` | line to top, cursor past indent |  | `z Enter` |  |
| `vim_align_view_center` | line to center, cursor past indent |  | `z.` |  |
| `vim_align_view_bottom` | line to bottom, cursor past indent |  | `z-` |  |
| `vim_align_view_below_top` | next page's first line to top |  | `z+` |  |
| `vim_align_view_above_bottom` | previous page's last line to bottom |  | `z^` |  |
| `scroll_view_left` | scroll one column left |  | `zh` `z Left` |  |
| `scroll_view_right` | scroll one column right |  | `zl` `z Right` |  |
| `scroll_view_half_left` | scroll half a screen left |  | `zH` |  |
| `scroll_view_half_right` | scroll half a screen right |  | `zL` |  |
| `align_view_cursor_left` | cursor column to left edge |  | `zs` |  |
| `align_view_cursor_right` | cursor column to right edge |  | `ze` |  |
| `align_view_middle` | center sideways | `zm` `Zm` | `Zm` |  |
| `rotate_view_reverse` | previous |  | `C-w W` |  |
| `jump_view_first` | the first window |  | `C-w t` |  |
| `jump_view_last` | the last window |  | `C-w b` |  |
| `jump_view_last_accessed` | previous window |  | `C-w p` |  |
| `exchange_view` | swap with the next |  | `C-w x` |  |
| `rotate_views_forward` | rotate this row forward |  | `C-w r` |  |
| `rotate_views_backward` | rotate this row back |  | `C-w R` |  |
| `move_view_far_left` | move this window to the far left |  | `C-w H` |  |
| `move_view_far_down` | move this window to the very bottom |  | `C-w J` |  |
| `move_view_far_up` | move this window to the very top |  | `C-w K` |  |
| `move_view_far_right` | move this window to the far right |  | `C-w L` |  |
| `vim_close_window` | close window, don't quit |  | `C-w c` |  |
| `goto_last_accessed_file_hsplit` | previous file, above |  | `C-w ^` |  |
| `switch_to_lowercase` | to lowercase | `` `l `` | `` g`l `` |  |
| `switch_to_uppercase` | to uppercase | `` A-` `` `` `u `` | `` A-` `` `` g`u `` |  |
| `convert_to_simplified` | traditional → simplified | `` `s `` | `` g`s `` |  |
| `convert_to_traditional` | simplified → traditional | `` `t `` | `` g`t `` |  |
| `convert_to_taiwan_traditional` | simplified → Taiwan traditional | `` `w `` | `` g`w `` |  |
| `convert_to_hong_kong_traditional` | simplified → Hong Kong traditional | `` `k `` | `` g`k `` |  |
| `convert_to_mainland_traditional` | simplified → mainland traditional | `` `c `` | `` g`c `` |  |
| `convert_to_classical_traditional` | simplified → classical traditional | `` `g `` | `` g`g `` |  |
| `convert_to_japanese` | traditional → Japanese shinjitai | `` `j `` | `` g`j `` |  |
| `switch_to_halfwidth` | to halfwidth | `` `h `` | `` g`h `` |  |
| `switch_to_fullwidth` | to fullwidth | `` `f `` | `` g`f `` |  |
| `conflict_keep_ours` | keep ours | `Space m o` | `Space m o` |  |
| `conflict_keep_theirs` | keep theirs | `Space m t` | `Space m t` |  |
| `conflict_keep_both` | keep both sides | `Space m b` | `Space m b` |  |
| `recent_file_picker` | recent files | `Space o f` | `Space o f` |  |
| `global_recent_file_picker` | recent files (all projects) | `Space o g` | `Space o g` |  |
| `project_picker` | recent projects | `Space o p` | `Space o p` |  |
| `resume_session` | restore last session | `Space o r` | `Space o r` |  |
| `yume_toggle` | input method on / off (on is Chinese) | `Space z z` | `Space z z` |  |
| `yume_commit_mode` | commit mode | `Space z m` | `Space z m` |  |
| `yume_panel_mode` | candidate bar position | `Space z p` | `Space z p` |  |
| `yume_preedit_mode` | where uncommitted text shows | `Space z e` | `Space z e` |  |
| `yume_toggle_prediction` | prediction on / off | `Space z y` | `Space z y` |  |
| `yume_pick_scheme` | pick a scheme | `Space z i` | `Space z i` |  |
| `yume_next_scheme` | next scheme | `Space z n` | `Space z n` |  |
| `yume_menu_size_3` | 3 candidates per page | `Space z 3` | `Space z 3` |  |
| `yume_menu_size_4` | 4 candidates per page | `Space z 4` | `Space z 4` |  |
| `yume_menu_size_5` | 5 candidates per page | `Space z 5` | `Space z 5` |  |
| `yume_menu_size_6` | 6 candidates per page | `Space z 6` | `Space z 6` |  |
| `yume_menu_size_7` | 7 candidates per page | `Space z 7` | `Space z 7` |  |
| `yume_menu_size_8` | 8 candidates per page | `Space z 8` | `Space z 8` |  |
| `yume_menu_size_9` | 9 candidates per page | `Space z 9` | `Space z 9` |  |
| `yume_next_annotation` | next annotation mode | `Space z /` | `Space z /` |  |
| `yume_installed_table` | use the installed code table | `Space z t` | `Space z t` |  |
| `yume_table_source` | where the code table came from | `Space z w` | `Space z w` |  |
| `yume_data_location` | where the data is | `Space z W` | `Space z W` |  |
| `yume_commit_default` | default (scheme decides) | `Space z m 0` | `Space z m 0` |  |
| `yume_commit_delayed` | delayed | `Space z m d` | `Space z m d` |  |
| `yume_commit_unique` | unique | `Space z m u` | `Space z m u` |  |
| `yume_commit_fluency` | whole sentence | `Space z m f` | `Space z m f` |  |
| `yume_panel_box` | box: beside the cursor | `Space z p b` | `Space z p b` |  |
| `yume_panel_bottom` | bottom: last line of the window | `Space z p m` | `Space z p m` |  |
| `yume_panel_inline` | inline: line below the cursor | `Space z p i` | `Space z p i` |  |
| `yume_preedit_off` | off: in the candidate bar | `Space z e o` | `Space z e o` |  |
| `yume_preedit_composition` | composition: code in the text | `Space z e c` | `Space z e c` |  |
| `yume_preedit_preview` | preview: first candidate in the text | `Space z e p` | `Space z e p` |  |
| `yume_charset_mode` | charset filter | `Space z 0` | `Space z 0` |  |
| `yume_sort_mode` | charset sort | `Space z s` | `Space z s` |  |
| `yume_lanes_mode` | sentence lanes | `Space z g` | `Space z g` |  |
| `yume_builtin_mode` | use built-in scheme | `Space z b` | `Space z b` |  |
| `yume_charset_all` | all characters | `Space z 0 a` | `Space z 0 a` |  |
| `yume_charset_common` | common characters only | `Space z 0 c` | `Space z 0 c` |  |
| `yume_charset_tonggui` | simplified only | `Space z 0 s` | `Space z 0 s` |  |
| `yume_charset_harmonic` | traditional only | `Space z 0 t` | `Space z 0 t` |  |
| `yume_sort_original` | original order | `Space z s o` | `Space z s o` |  |
| `yume_sort_common` | common first | `Space z s c` | `Space z s c` |  |
| `yume_sort_tonggui` | simplified first | `Space z s s` | `Space z s s` |  |
| `yume_sort_harmonic` | traditional first | `Space z s t` | `Space z s t` |  |
| `yume_lane_tonggui` | general standard (simplified) | `Space z g j` | `Space z g j` |  |
| `yume_lane_tongfan` | standard traditional | `Space z g f` | `Space z g f` |  |
| `yume_lane_tai` | Taiwan common characters | `Space z g t` | `Space z g t` |  |
| `yume_builtin_pinyin` | 宇浩拼音 | `Space z b p` | `Space z b p` |  |
| `yume_builtin_lingming` | 靈明 | `Space z b l` | `Space z b l` |  |
| `yume_builtin_xingchen` | 星陳 | `Space z b x` | `Space z b x` |  |
| `table_source_view` | source view | `Space t o` | `Space t o` |  |
| `table_basic_view` | basic view: columns aligned | `Space t b` | `Space t b` |  |
| `table_window_view` | window view: the table fills the window | `Space t t` | `Space t t` |  |
| `table_leave_window` | leave window view | `Space t q` | `Space t q` |  |
| `goto_next_table` | next table | `Space t ]` | `Space t ]` |  |
| `goto_prev_table` | previous table | `Space t [` | `Space t [` |  |
| `table_convert_mode` | convert the table delimiter | `Space t x` | `Space t x` |  |
| `table_cell_width` | long cells: wrap / fold / full | `Space t w` | `Space t w` |  |
| `table_search_columns` | search by column (range optional) | `Space t /` | `Space t /` |  |
| `table_goto_cell` | go to a cell (␣t20,20g) | `Space t g` | `Space t g` |  |
| `table_enter_cell` | into the cell, to move by character |  |  |  |
| `table_leave_cell` | out of the cell, to move by cell again |  |  |  |
| `table_next_cell` | next cell, wrapping to the next row |  |  |  |
| `table_prev_cell` | the previous cell |  |  |  |
| `table_yank_column` | yank this column | `Space t y` | `Space t y` |  |
| `table_replace_column` | overwrite this column with the copied one | `Space t v` | `Space t v` |  |
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
| `table_align_left` | align this column left | `Space t <` | `Space t <` |  |
| `table_align_center` | centre this column | `Space t =` | `Space t =` |  |
| `table_align_right` | align this column right | `Space t >` | `Space t >` |  |
| `table_line_up` | realign | `Space t F` | `Space t F` |  |
| `table_record_panel` | this row's record | `Space t i` | `Space t i` |  |
| `table_first_row_is_data` | first row as header | `Space t H` | `Space t H` |  |
| `table_sort_ascending` | sort by column, ascending (␣t1s) | `Space t s` | `Space t s` |  |
| `table_sort_descending` | sort by column, descending (␣t1S) | `Space t S` | `Space t S` |  |
| `convert_table_to_pipe` | convert the table to a pipe table | `Space t x p` | `Space t x p` |  |
| `paste_table_as_pipe` | paste the clipboard as a pipe table | `Space t x P` | `Space t x P` |  |
| `convert_table_to_csv` | convert the table to csv | `Space t x c` | `Space t x c` |  |
| `paste_table_as_csv` | paste the clipboard as a csv table | `Space t x C` | `Space t x C` |  |
| `convert_table_to_tsv` | convert the table to tsv | `Space t x t` | `Space t x t` |  |
| `paste_table_as_tsv` | paste the clipboard as a tsv table | `Space t x T` | `Space t x T` |  |
| `no_op` | do nothing (binding it unbinds the key) |  | `&` `=` `!` `C-c` |  |
| `extend_char_left` | extend the selection one character left | `h` `Left` | `h` `Left` |  |
| `extend_char_right` | extend the selection one character right | `l` `Right` | `l` `Right` |  |
| `extend_visual_line_up` | extend one line up, on screen | `k` `Up` |  |  |
| `extend_visual_line_down` | extend one line down, on screen | `j` `Down` |  |  |
| `extend_line_up` | extend one line up, in the file | `gk` |  |  |
| `extend_line_down` | extend one line down, in the file | `gj` |  |  |
| `extend_next_word_start` | extend to the start of the next word | `w` |  |  |
| `extend_prev_word_start` | extend to the start of the previous word | `b` |  |  |
| `extend_next_word_end` | extend to the end of the next word | `e` |  |  |
| `extend_next_long_word_start` | extend to the start of the next long word | `W` |  |  |
| `extend_prev_long_word_start` | extend to the start of the previous long word | `B` |  |  |
| `extend_next_long_word_end` | extend to the end of the next long word | `E` |  |  |
| `extend_search_next` | add the next match as a selection | `n` |  |  |
| `extend_search_prev` | add the previous match as a selection | `N` |  |  |
| `extend_till_char` | extend forward to just before a character | `t` | `t` |  |
| `extend_next_char` | extend forward to a character | `f` | `f` |  |
| `extend_till_prev_char` | extend backward to just after a character | `T` | `T` |  |
| `extend_prev_char` | extend backward to a character | `F` | `F` |  |
| `extend_to_line_start` | extend to the start of the line | `Home` | `Home` |  |
| `extend_to_line_end` | extend to the end of the line | `End` |  |  |
| `extend_to_file_start` | extend to the start of the file | `gg` | `gg` |  |
| `extend_to_file_end` | extend to the end of the file |  |  |  |
| `extend_to_last_line` | extend to the last line | `ge` |  |  |
| `extend_to_word` | extend to a jump label | `gw` |  |  |
| `insert_newline` | new line, keeping the indent and list marker |  |  | `Enter` `C-j` |
| `delete_char_forward` | delete the character after the cursor |  |  | `Delete` `C-d` |
| `delete_word_forward` | delete the word after the cursor |  |  | `A-d` |
| `delete_word_backward` | delete the word before the cursor |  |  | `C-w` |
| `kill_to_line_start` | delete to the start of the line |  |  | `C-u` |
| `kill_to_line_end` | delete to the end of the line, in Insert mode |  |  | `C-k` |
| `insert_register` | insert a register (then its letter) |  |  | `C-r` |
| `run_one_normal_command` | one Normal-mode command, then back to Insert mode (vim's C-o) |  |  | `C-o` |
| `goto_line_end_newline` | to the end of the line, after its last character |  |  | `End` `C-e` |
| `commit_undo_checkpoint` | start a new undo step |  |  | `C-g` |
| `insert_tab` | insert an indent, the kind the file uses |  |  | `Tab` `S-Tab` |
| `insert_other_tab` | insert the other kind of indent, a tab or spaces |  |  | `S-Tab` |
| `vim_normal_mode` | back to Normal mode (vim: leaving Visual mode collapses the selection) |  | `Esc` |  |
| `vim_goto_line_end` | the end of the line (vim's $: moving down keeps to line ends) |  | `$` `End` |  |
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
| `vim_paste_after` | paste after (vim's p) |  | `p` `zp` |  |
| `vim_paste_before` | paste before (vim's P) |  | `P` `zP` |  |
| `vim_paste_after_indented` | paste after, indented like this line (vim's ]p) |  | `]p` |  |
| `vim_paste_before_indented` | paste before, indented like this line (vim's [p) |  | `]P` `[p` `[P` |  |
| `vim_increment` | the number at or after the cursor, plus one (vim's C-a) |  | `C-a` |  |
| `vim_decrement` | the number at or after the cursor, minus one (vim's C-x) |  | `C-x` |  |
| `vim_search_next` | the next match (vim's n) |  | `n` |  |
| `vim_search_prev` | the previous match (vim's N) |  | `N` |  |
| `vim_match_brackets` | the matching bracket, or the next one on the line (vim's %) |  | `%` |  |
| `vim_kill_to_line_start` | delete back to where this Insert began (vim's C-u) |  |  | `C-u` |
| `vim_kill_to_line_end` | delete to the end of the line, never the line break (vim) |  |  | `C-k` |
| `vim_flip_selections` | to the other end of the selection (vim's Visual o) |  | `o` |  |
| `vim_switch_to_lowercase` | the selection to lowercase, leaving Visual mode (vim's u) |  | `u` |  |
| `vim_switch_to_uppercase` | the selection to uppercase, leaving Visual mode (vim's U) |  | `U` |  |
| `vim_yank` | yank the selection, leaving Visual mode (vim's y) |  | `y` |  |
| `vim_visual_block_mode` | select a block (vim's C-v) |  | `C-v` |  |
| `vim_record_macro` | record a macro (then a letter) |  | `q` |  |
| `vim_replay_macro` | replay (then a letter) |  | `@` |  |
| `vim_replay_last_macro` | replay the last recorded macro (vim's Q) |  | `Q` |  |
| `vim_goto_first_nonwhitespace` | first non-blank character (a count moves that many lines down) |  | `_` |  |

### vim keys that play other keys

| Key | Plays |
| --- | --- |
| `+` | `@jgs` |
| `-` | `@kgs` |
| `D` | `@d$` |
| `C` | `@c$` |
| `Y` | `@y$` |
| `S` | `@cc` |
| `ZZ` | `:x` |
| `ZQ` | `:quit!` |

### In a table's grid (`[keys.table]`)

| Key | Command |
| --- | --- |
| `h` | `move_char_left` |
| `l` | `move_char_right` |
| `j` | `move_visual_line_down` `move_line_down` |
| `k` | `move_visual_line_up` `move_line_up` |
| `Home` | `goto_line_start` |
| `End` | `goto_line_end` `vim_goto_line_end` |
| `x` | `extend_line_below` |
| `%` | `select_all` |
| `Enter` | `table_enter_cell` |
| `Esc` | `table_leave_cell` |
| `Tab` | `table_next_cell` |
| `S-Tab` | `table_prev_cell` |
| `C-n` | `two_thirds_page_down` |
| `C-p` | `two_thirds_page_up` |
| `C-d` | `page_cursor_half_down` |
| `C-u` | `page_cursor_half_up` |
| `PageDown` | `page_down` |
| `PageUp` | `page_up` |
| `y` | `yank` `operator_yank` |
| `d` | `delete_selection` `operator_delete` |
| `A-d` | `delete_selection_noyank` |
| `c` | `change_selection` `operator_change` |
| `A-c` | `change_selection_noyank` |
| `p` | `paste_after` `vim_paste_after` |
| `P` | `paste_before` `vim_paste_before` |
| `R` | `replace_with_yanked` |
| `i` | `insert_mode` `vim_insert_mode` |
| `a` | `append_mode` `vim_append_mode` |
| `I` | `insert_at_line_start` `vim_insert_at_line_start` |
| `A` | `insert_at_line_end` `vim_insert_at_line_end` |
| `o` | `open_below` `vim_open_below` |
| `O` | `open_above` `vim_open_above` |

### `[keys.prompt]`

| Command | What it does | Keys |
| --- | --- | --- |
| `normal_mode` | close the prompt, search or picker | `Esc` |
| `confirm` | run the line; in a picker, open the selected entry | `Enter` |
| `completion_next` | next completion | `Tab` |
| `completion_prev` | previous completion | `S-Tab` |
| `history_prev` | previous in history | `Up` `C-p` |
| `history_next` | next in history | `Down` `C-n` |
| `move_char_left` | one character left | `Left` |
| `move_char_right` | one character right | `Right` |
| `goto_line_start` | start of line | `Home` `C-a` |
| `goto_line_end` | end of line | `End` `C-e` |
| `delete_char_backward` | delete the character before the cursor | `Backspace` |
| `delete_char_forward` | delete the character after the cursor | `Delete` |
| `delete_word_backward` | delete the word before the cursor | `C-w` |
| `kill_to_line_start` | delete to the start of the line | `C-u` |
| `toggle_wide_search` | toggle traditional/simplified and pinyin matching | `A-j` |

### `[keys.picker]`

| Command | What it does | Keys |
| --- | --- | --- |
| `next_entry` | next entry | `Tab` `C-n` `Down` |
| `prev_entry` | previous entry | `S-Tab` `C-p` `Up` |
| `page_down` | a page down | `PageDown` |
| `page_up` | a page up | `PageUp` |
| `first_entry` | first entry |  |
| `last_entry` | last entry |  |
| `cycle_hidden_files` | cycle which files are skipped: hidden, ignored | `A-h` |

### `[keys.sidebar]`

| Command | What it does | Keys |
| --- | --- | --- |
| `move_line_down` | one row down | `j` `Down` |
| `move_line_up` | one row up | `k` `Up` |
| `page_down` | a page down | `J` `PageDown` |
| `page_up` | a page up | `K` `PageUp` |
| `goto_file_start` | first row | `g` `Home` |
| `goto_last_line` | last row | `G` `End` |
| `collapse_entry` | collapse, or go up a level | `h` `Left` |
| `expand_entry` | expand, or go into it | `l` `Right` |
| `open_entry` | go to the entry: open the file, or jump to the line | `Enter` |
| `toggle_links_graph` | links panel: list or graph | `v` |
| `restore_change` | restore this change | `u` |
| `yank_old_text` | copy the old text | `y` |
| `refresh_sidebar` | refresh | `R` |
| `cycle_sidebar_width` | cycle width: narrow, medium, wide | `w` |
| `next_sidebar_view` | next panel | `Tab` |
| `prev_sidebar_view` | previous panel | `S-Tab` |
| `normal_mode` | suspend the input method again | `Esc` |
| `leave_sidebar` | back to the text, keeping the panel open | `q` |
| `command_mode` | command line | `:` |
| `space_mode` | Space menu | `Space` |
| `window_mode` | window group | `C-w` |

### `[keys.field]`

| Command | What it does | Keys |
| --- | --- | --- |
| `next_field` | next field (takes a greyed-out suggestion first) | `Tab` |
| `prev_field` | previous field | `S-Tab` |
| `move_line_down` | field below | `Down` |
| `move_line_up` | field above | `Up` |
