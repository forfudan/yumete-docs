---
title: Links between files
description: "[[name]] links across the project, what links back, a local graph in the sidebar, and the whole graph as a page."
---

# Links between files

Every Markdown file in the project is a note, and `[[name]]` written in one
is a link to the file of that name. The links run both ways: the file you are
in knows what it links to and what links to it, and the project as a whole
can be drawn as a graph. If you have used Obsidian, this is that, in the
terminal.

## Writing a link

`[[雨夜]]` names the file `雨夜.md`, wherever it is in the project. A name two
files share is resolved **nearest first**: from `卷二/第四章.md`, `[[雨夜]]`
is `卷二/雨夜.md` before `卷一/雨夜.md`. A path tail tells them apart from
anywhere: `[[人物/安寧]]`. `[[雨夜|that night]]` shows the alias and links the
file; `[[雨夜#雪]]` opens it at that heading.

Typing `[[` offers every file of the project, the ones in this folder first;
a name no other file shares is offered bare, a shared one with its path.
`gd` on a link opens the file; `C-o` comes back. `gr` on a link lists the files
that link **to** it; `gr` anywhere else in a Markdown file lists what links to
the file you are in.

## The links panel: `:links`

```
:links            the panel, as a list; again to focus it, again to close
:links list       sections: linked from, links to, pages not there, mentions
:links graph      this file among its neighbours
:links off
```

The panel sits on the left with the explorer, buffers, outline and search;
`Tab` walks to it. It follows the file you are writing.

**The list** has a section for each direction. A row is the file and line the
link stands on, with the brackets marked; `Enter` goes there, `h` and `l` fold
and open a section. Links to a page no file answers to are listed under their
own heading. **Unlinked mentions** — lines that write this file's name without
brackets — start folded; `l` on the heading reads the project for them. A
name of one character is not looked for.

**The graph** (`v` flips between the two looks) puts the file in the middle:

```
┌▸ 卷一/序章 ←            3
├  人物/阿寧 ↔            1
▣ 第三章                   2
└▸ 地理/江南 →            5
```

Files that link here hang above, files this one links to below; `↔` is both
ways. The figure at the right edge is how many links touch that file. A
neighbour with neighbours of its own folds: `l` opens it one level, which is
the second hop; `h` folds it. `Enter` on a neighbour opens that file, and the
panel re-centres on it. More than twelve on a side ends with 「…and N more」.

The project's links are read once, on a thread, the first time anything asks
for them; saving a file reads that file again. `:links-reindex` reads the
whole project again, after renaming or deleting files outside the editor.

## The whole graph: `:links-export`

`:links-export` writes every file and every link to `.yumete/graph.html` and
opens it in the browser. The page is one file with no dependencies: drag a
node, wheel to zoom, click a node to light its neighbours, type in the corner
to find one. Larger dots have more links.

## Links and the wiki

The wiki marks *names* in running text; links are *brackets*. The two meet
when a file is named like an entry: inside `[[ ]]` the link's colour wins, and
in prose the name is gold. A folder of entries is itself a folder of notes —
see [The book's wiki](book#the-books-wiki-wiki) for how a wiki can be a
folder, or the whole project.
