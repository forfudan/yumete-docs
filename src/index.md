---
layout: home

hero:
  name: yumete
  text: A terminal text editor for CJK users
  tagline: Helix and vim keys, cursor motions by Chinese word, vertical editing, and the Yume input method built in.
  actions:
    - theme: brand
      text: Get started
      link: /guide/installation
    - theme: alt
      text: Keymap
      link: /reference/keymap
    - theme: alt
      text: GitHub
      link: https://github.com/forFudan/yumete

features:
  - title: Written for Chinese
    details: "w moves by real Chinese words, found with a dictionary rather than spaces. Sentences, clauses and Chinese brackets are things you can select and change."
    link: /writing/cjk
  - title: Vertical layout
    details: "Columns run top to bottom and right to left, punctuation turns with them, and the keys follow the column."
    link: /writing/vertical
  - title: An input method inside the editor
    details: "The Yume engine is built in, so typing Chinese needs no system input method. In Normal mode every key stays a command, even with Chinese on."
    link: /writing/ime
  - title: Tables you can edit as tables
    details: "Markdown and CSV tables are drawn as grids. Move by cell, sort by a column, and add or drop rows without counting pipes."
    link: /writing/tables
  - title: A book of many files
    details: "Links between chapters, a wiki of the book's people and places, a daily word target, and checks that run over the whole project."
    link: /writing/book
  - title: Code too
    details: "Tree-sitter highlighting, language servers, and helix's keys or vim's."
    link: /guide/languages
---

## Selections underneath, your keys on top

Every command in yumete acts on selections, and the cursor is a selection one
character wide. With helix's keys, the default, you see this directly: every
move leaves a selection, so `w` walks forward one word and selects the word it
walked over, and `x` selects a line. You see the text before you change it, and
then `d` deletes it, `c` replaces it and `y` copies it.

vim's keys are a keymap of their own on the same ground, not an imitation laid
over helix's. `dw` waits for its motion and then acts, `.` repeats the last
change, and the caret, `f`, the registers and the page behave as vim's do.
Choose with `:keymap vim` or `:keymap helix`. [What follows your
keymap](/reference/keymaps-and-yumete) says which behaviours change with it and
which are the same under both.

Where yumete differs from helix and vim, it is mostly for people who write in 漢字.
Editors made for English find words by spaces, and Chinese has none, so `w`
here asks a dictionary. English is only written across the page, and Chinese is
also written in columns, so the page can turn. And an input method that sits
outside the terminal cannot tell Normal mode from Insert mode, so this one is
inside the editor. Coming from one of them? See [Coming from
helix](/from/helix) or [Coming from vim](/from/vim).
