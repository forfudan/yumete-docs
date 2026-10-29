# Match mode

`m` is the group for pairs and the text between them: go to the other half of
a bracket, select inside or around something, and add, delete or replace the
pair around a selection. It works as helix's match mode does, with Chinese
brackets, sentences and clauses added. Each key after `m` opens a menu of what
it takes, so you can press `m` and read on.

| helix keymap | vim keymap | Does |
| --- | --- | --- |
| `mm` | `%` | Go to the other half of the bracket under the cursor |
| `mi` | `vi` | Select inside an object or a pair |
| `ma` | `va` | Select around it: the pair or the marks come along |
| `ms` | `ys` | Surround the selection with a pair |
| `md` | `ds` | Delete the pair around the cursor |
| `mr` | `cs` | Replace the pair around the cursor |

Under the vim keymap `m` sets a mark, so the group is spelled the vim way. See
[Under the vim keymap](#under-the-vim-keymap) below.

## Go to the matching bracket

`mm` jumps to the other half of the bracket the cursor is on. When the cursor
stands on a bracket, its partner is highlighted, so you can see where `mm`
will land before you press it. Quotes are not matched this way: a `"` looks
the same at both ends, so there is no telling which way to go.

In a table, a bracket is only matched inside its own cell.

## Select inside and around: `mi` and `ma`

`mi` selects the inside of something, `ma` the same with whatever surrounds
it. The examples use one sentence, with the cursor on 期:

```text
他说：「今天（星期三）要下雨，记得带伞。」然后就走了。
```

| Keys | Object | Selects |
| --- | --- | --- |
| `mi w` | word | 星期三 |
| `mi W` | everything up to a space (a WORD) | the whole line |
| `mi s` | sentence | 他说：「今天（星期三）要下雨，记得带伞。」 |
| `mi u` | clause, up to any punctuation mark | 星期三 |
| `mi p` | paragraph | the whole paragraph |
| `mi m` | the nearest pair, of any kind | 星期三 |
| `ma m` | the nearest pair, with its brackets | （星期三） |
| `mi (` | inside parentheses (`(` covers `（）` too) | 星期三 |
| `mi 「` | inside the corner brackets | 今天（星期三）要下雨，记得带伞。 |

Words are found by a Chinese segmenter, not by spaces, so `mi w` takes 星期三
and not the whole run of characters.

### Sentences and clauses

`mi s` takes the sentence the cursor is in. A sentence ends at a full stop, a
question mark or an exclamation mark, Chinese or ASCII, with any closing mark
that follows it.

`mi u` stops at every punctuation mark, brackets and quotes included. With the
cursor on 雨 in the sentence above it selects 要下雨. A mark inside a word does
not count: on `Well, it's 3.14 today; don't go.` with the cursor on `today`,
`mi u` selects `it's 3.14 today`.

Neither crosses a line break.

### Paragraphs

`mi p` takes the paragraph and its line break. `ma p` adds the blank lines
below it. With the cursor on a blank line, `mi p` takes the run of blank lines,
so it is the way to close up a gap between two paragraphs.

### Markdown marks

`k` (mar*k*up) takes the Markdown marks the cursor is in. On `a **bc** d` with
the cursor on `b`:

| Keys | Selects |
| --- | --- |
| `mi k` | `bc` |
| `ma k` | `**bc**` |

`k` also takes `*italic*`, `~~struck~~`, `==marked==`, `` `code` ``, links
and `[[wiki links]]`.

### Cells and changes

`mi l` (cel*l*) selects the table cell the cursor is in, so `mi l c` replaces
it. `ma l` is the same: the walls are not part of the cell.

`mi g` selects the change the cursor's line is in, as whole lines: the lines
the change bar marks against git's `HEAD`. `ma g` is the same. In a file git
does not track, it says so.

### Code

Seven objects read the code itself. They work in a code file, and in a Markdown
file inside the fenced code block the cursor is in, read in that block's
language. Each takes the innermost one around the cursor, and `ma` is the
same as `mi`.

| Keys | Object | Example |
| --- | --- | --- |
| `mi f` | function | in `fn add(a: i32, b: i32) -> i32 { a + b }`, the whole function |
| `mi t` | type definition | the `struct`, `enum` or class the cursor is in |
| `mi a` | parameter | on `b` in the function above: `b: i32` |
| `mi c` | comment | the comment the cursor is in |
| `mi T` | test | in `#[test] fn adds_two() { … }`, the whole test |
| `mi e` | entry: a key and its value | in `{"name": "x", "version": 13}` on `13`: `"version": 13` |
| `mi x` | HTML element, tags and all | in `<p>今天<b>下雨</b></p>` on 雨: `<b>下雨</b>` |

`mi T` knows `#[test]` in Rust, `def test_…` in Python, `func Test…` in Go,
`it(…)`, `test(…)` and `describe(…)` in JavaScript, and `@Test` in Java.
`mi e` knows JSON, TOML and YAML entries, Rust and Go struct fields, and
Python and JavaScript dictionary entries.

### Any other character

A character that is not a letter or a digit pairs with itself: `mi $` on
`$xy$` selects `xy`, and `ma $` selects `$xy$`. Two of the same character on a
line are paired the way quotes are, counting from the start of the line. After
`mi` and `ma`, a letter or a digit always names an object, never a pair.

## Which pairs each key covers

You do not need to type a Chinese bracket to name one. Each ASCII key covers a
family of pairs by shape, and either half of a pair works: `mi「` and `mi」`
are the same. The full-width, half-width and vertical forms come with each
family (the menus show them as `…`).

| Key | Covers |
| --- | --- |
| `(` | `()` `（）` `︵︶` |
| `[` | `[]` `［］` `﹇﹈` `「」` `｢｣` `﹁﹂` `【】` `︻︼` `〔〕` `︹︺` |
| `{` | `{}` `｛｝` `︷︸` `『』` `﹃﹄` `〖〗` `︗︘` |
| `<` | `<>` `«»` `〈〉` `︿﹀` `《》` `︽︾` |
| `"` | `""` `＂＂` `“”` `〝〞` |
| `'` | `''` `＇＇` `‘’` |
| `` ` `` | ``` `` ``` `｀｀` |

When pairs of one family are nested, the innermost is taken.

`m` as an object means the nearest pair whose two halves differ: brackets, and
quotes such as `“”` and `「」`. A straight `"` or `'` is left out, since in
prose it is as often an apostrophe; name it with `"` or `'`.

## Surround: `ms`, `md` and `mr`

`ms` wraps the selection in a pair. `md` deletes the pair around the cursor.
`mr` replaces it: first the pair to replace, then the new one.

`md` and `mr` take a key from the table above (its whole family), `m` for the
nearest pair, or any other character, which pairs with itself. `md` also takes
`k` for Markdown marks. `ms` and the second key of `mr` write exactly the pair
you name: `ms [` writes `[]`, and `ms 「` writes `「」`.

In each example the cursor stands inside the pair:

| Text | Keys | Result |
| --- | --- | --- |
| `foo bar`, `foo` selected | `ms (` | `(foo) bar` |
| `foo bar`, `foo` selected | `ms 「` | `「foo」 bar` |
| `foo bar`, `foo` selected | `ms *` | `*foo* bar` |
| `a (bc) d` | `md (` | `a bc d` |
| `a *x* b` | `md *` | `a x b` |
| `这是 **一句话** 的例子` | `md k` | `这是 一句话 的例子` |
| `这是 [字](http://a) 的例子` | `md k` | `这是 字 的例子` |
| `这是 [字](http://a) 的例子` | `md m` | `这是 字(http://a) 的例子` |
| `f(a)` | `mr ( [` | `f[a]` |
| `a $x$ b` | `mr $ (` | `a (x) b` |

`md m` on a link takes off only its `[` `]`, as helix does; `md k` takes off
the whole link.

With the cursor on a quote mark, `md "` and `mr "` take the pair that `mi "`
would select.

`ms` then `Enter` puts the selection on lines of its own: a line break before
it and one after, in the file's own line ending.

### `mr` shows the pair first

After `mr` and the pair to replace, the two characters it found are selected,
so you can see which pair the next key will change. That key, or `Esc` to
change nothing, gives your selection back. On `a (bc) d` with the cursor on
`b`, `mr (` selects the `(` and the `)`; `[` then gives `a [bc] d`.

### Typing the pair in Chinese

With the input method on, the key after `ms`, `md` and `mr` goes to the input
method, and the character you pick from the candidate panel is the pair. If you
commit a word, its first character is used. `mi` and `ma` do not open the
input method, because the key after them is usually the name of an object.
See [The input method](../writing/ime.md).

## Counts

A count goes that many pairs out. On `f(a(b)c)` with the cursor on `b`:

| Keys | Result |
| --- | --- |
| `2mi(` then `d` | `f()` |
| `2md(` | `fa(b)c` |
| `2mr([` | `f[a(b)c]` |
| `3md(` | unchanged: there is no third pair |

With `m`, the count counts pairs of any kind: on `f[a(b)c]`, `2mim` then `d`
gives `f[]`.

With quotes and other self-paired marks, a count goes out mark by mark. On the
`b` of `x "a "b" c" y`, `2mi"` selects `a "b" c` and `2md"` takes off the
outer two quotes.

## Outside a pair

With the cursor outside any pair, `mi(` and `ma(` select nothing under the
helix keymap, as in helix. Under the vim keymap they reach ahead to the next
pair, as vim does: at the start of `ab (cd) ef`, `da(` gives `ab  ef`.

`md` and `mr` never reach ahead. With no pair around the cursor they say so and
change nothing.

## Several selections

Each selection takes its own pair, and the whole change is one undo step.
With a cursor on each line's `b`:

| Text | Keys | Result |
| --- | --- | --- |
| `a b c` / `a b c` | `ms (` | `a (b) c` / `a (b) c` |
| `a (b) c` / `a (b) c` | `md (` | `a b c` / `a b c` |
| `a (b) c` / `a (b) c` | `mr ( [` | `a [b] c` / `a [b] c` |

`md` and `mr` change nothing at all when any cursor has no pair around it, or
when two cursors are inside the same pair. Taking that pair off once per
cursor would take off the pair outside it as well.

## Under the vim keymap

Under the vim keymap (`:keymap vim`) the same work is spelled the vim and
vim-surround way: `di(` for `mi(` then `d`, `viw` for `mi w`, `ysiw(` to wrap
a word, `ds(` for `md(`, `cs([` for `mr([`.

After `d`, `c`, `y`, `vi` and `va`, the prose objects work as above: `w`, `W`,
`s`, `u`, `p`, `m`, `k`, and every pair. `b` and `B` are vim's names for `(`
and `{`. The code objects, the cell `l` and the change `g` have no vim
spelling. See [Coming from vim](../from/vim.md).
