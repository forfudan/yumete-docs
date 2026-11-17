# Why it works this way

Some of yumete's defaults look like small choices but were weighed against what
users of other editors have said: what they asked for, what they turned off,
what they complained about. This page keeps those reasons and the threads they
came from, so the feature pages can stay short.

## The scrollbar keeps its column

Every window keeps its rightmost column for the scrollbar, even when the whole
file fits and there is nothing to draw ([Page and wrap](/writing/page)).

- A bar drawn over the text hides the last characters of wrapped lines
  ([nvim-scrollview #132](https://github.com/dstein64/nvim-scrollview/issues/132)).
- A bar that takes its column only once the file is long enough moves the text
  sideways the moment it appears, which users call "quite ugly and distracting"
  ([Obsidian forum](https://forum.obsidian.md/t/text-moves-to-the-left-as-soon-as-scrollbar-is-shown/63794)).
- The cost is one column, which matters on an 80-column terminal
  ([helix #2210](https://github.com/helix-editor/helix/issues/2210));
  `:view-scrollbar off` gives it back.

The thumb is sized from an estimate of the file's rows on screen, worked out
from each line's width at the wrap width. Counting characters instead made the
thumb grow and shrink as you scrolled past blank lines and headings; wrapping
the whole file exactly would cost hundreds of milliseconds on a long one.

## The scrollbar marks only what you asked for

Out of the box the scrollbar marks a search's hits and the rows of the last
listing, and nothing else. Changes and language-server problems are there but
off ([Page and wrap](/writing/page)).

- Marks for changes flood the bar in an edited file until the thumb is "almost
  invisible" ([Cursor forum](https://forum.cursor.com/t/scrollbar-almost-invisible-in-editor-with-many-diffs/163833)).
- Problem marks were the most complained about: they "polute the scrollbar",
  and spelling notes could not be taken off
  ([VS Code #46201](https://github.com/Microsoft/vscode/issues/46201)).
- Search marks drew no complaints, and people value them
  ([Sublime forum](https://forum.sublimetext.com/t/get-enhanced-scrollbar/33672)).
- Users "didn't understand what the colored marks on the scrollbar mean"
  ([Zed](https://github.com/zed-industries/zed/pull/42130)), so the page
  that describes the marks gives a legend.
- A mark is drawn as a thin glyph beside the thumb, never over it.

## End-of-line diagnostics are off

A language server's messages are marked in the gutter and listed by
`:diagnostics-all`, but not written at the end of the line unless you ask for
them ([Languages](/guide/languages)).

- helix 25.07 ships them off ([helix docs](https://docs.helix-editor.com/editor.html)),
  and so does Zed ([Zed docs](https://zed.dev/docs/diagnostics)).
- A VS Code extension's maintainer: "quite a few people would prefer not to
  have it enabled by default"
  ([Lean Zulip](https://leanprover-community.github.io/archive/stream/113488-general/topic/error.20lens.20in.20lean4.html)).
- In prose a grammar checker has something to say on nearly every line.

## Auto-pairs: one rule for every file

`auto_pairs` has the same levels in a novel and in a program
([Settings](/reference/settings#auto-pairs-auto-pairs)). There is no separate
rule for prose files: the people asking for brackets without quotes asked for it
in code as well, and two rules would mean two habits for the hands.

- VS Code added a switch for quotes alone, for every file
  ([VS Code #35636](https://github.com/microsoft/vscode/issues/35636),
  [a write-up](https://brandur.org/atoms/gp3zt5c)).
- Sublime users asked for brackets but not quotes
  ([Sublime forum](https://forum.sublimetext.com/t/a-way-to-autopair-brackets-but-not-quotes/12463),
  [single quotes alone](https://forum.sublimetext.com/t/prevent-single-quotes-from-autocompleting/12394)),
  and so did Obsidian users
  ([Obsidian forum](https://forum.obsidian.md/t/split-up-auto-pair-brackets-and-quotes-to-do-each-individually/28058)).
  That is the `minimal` level; `basic`, helix's six, stays the default.
- A quote typed right after the same quote does not pair, so `"""` and a code
  fence come out as typed. helix writes four
  ([helix #13697](https://github.com/helix-editor/helix/issues/13697)).
