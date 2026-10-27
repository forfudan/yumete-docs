# Keymap

<div class="unwritten">This page has not been written yet.</div>

Each table below filters as you type, and the `helix` / `vim` buttons switch
which keymap it answers in; the choice is remembered across the page. Only the
match group is written so far.

## Match: `m`

`m` is the group for pairs and the text between them, as in helix: go to the
other bracket, select inside or around something, and add, delete or replace a
pair. Each step shows a menu of what it takes, so you can press `m` and read on.
Under the vim keymap the same things are vim-surround's keys.

<KeyTable group="Match" />

### What `mi` and `ma` take

`mi` selects the inside, `ma` the inside with whatever surrounds it. The
examples use one sentence, with the cursor on 期:

> 他说：「今天（星**期**三）要下雨，记得带伞。」然后就走了。

| Keys | Object | Selects |
| --- | --- | --- |
| `mi w` | word | 星期三 |
| `mi s` | sentence | 他说：「今天（星期三）要下雨，记得带伞。」 |
| `mi p` | paragraph | the whole paragraph |
| `mi m` | the nearest pair, whichever kind | 星期三 |
| `ma m` | …with the pair | （星期三） |
| `mi (` | inside the parentheses (`(` covers `（）` too) | 星期三 |
| `mi 「` | inside the Chinese brackets | 今天（星期三）要下雨，记得带伞。 |

Markdown marks are `k`, for mar*k*up. On `a **bc** d` with the cursor on `b`:

| Keys | Selects |
| --- | --- |
| `mi k` | `bc` |
| `ma k` | `**bc**` |

`k` also takes `*italic*`, `~~struck~~`, `==marked==`, `` `code` ``, links and
`[[wiki links]]`.

In code, four more: on `fn add(a: i32, b: i32) -> i32 { a + b }`, with the
cursor on the parameter `b`:

| Keys | Object | Selects |
| --- | --- | --- |
| `mi f` | function | the whole `fn add(…) { a + b }` |
| `mi a` | parameter | `b: i32` |
| `mi c` | comment (in a table: this cell) | the comment the cursor is in |
| `mi t` | type definition | the `struct` or `enum` the cursor is in |

Any character that is not a letter or a digit works as a pair: `mi $` on
`$xy$` selects `xy`.

### What `ms`, `md` and `mr` take

A bracket (either half), a quote, a Chinese bracket, or any other character,
which then pairs with itself. `md` and `mr` also take `m` for the nearest pair,
and `md` takes `k` for Markdown marks.

| Text | Keys | Result |
| --- | --- | --- |
| `foo bar`, `foo` selected | `ms (` | `(foo) bar` |
| `foo bar`, `foo` selected | `ms 「` | `「foo」 bar` |
| `foo bar`, `foo` selected | `ms *` | `*foo* bar` |
| `a (bc) d` | `md (` | `a bc d` |
| `a *x* b` | `md *` | `a x b` |
| `这是 **一句话** 的例子` | `md k` | `这是 一句话 的例子` |
| `这是 [字](http://a) 的例子` | `md k` | `这是 字 的例子` |
| `这是 [字](http://a) 的例子` | `md m` | `这是 字(http://a) 的例子`, as helix does |
| `f(a)` | `mr ( [` | `f[a]` |
| `a $x$ b` | `mr $ (` | `a (x) b` |

In every example the cursor stands inside the pair. Under the vim keymap,
`ds(` is `md (`, `cs([` is `mr ( [`, and `ysiw(` surrounds the word.

`ms` then `Enter` puts the selection on lines of its own: on `foo bar` with
`foo` selected, it gives `foo` on a line between two line breaks, and the
selection takes in both.

### `mr` shows the pair first

After `mr` and the pair to replace, the two characters it found are selected,
so you can see which pair the next key will change. That key, or `Esc` to
change nothing, gives your selection back. On `a (bc) d` with the cursor on
`b`, `mr(` selects the `(` and the `)`; `[` then makes `a [bc] d`.

### Counts

A count is pairs out. On `f(a(b)c)` with the cursor on `b`:

| Keys | Result |
| --- | --- |
| `2mi(` then `d` | `f()` |
| `2md(` | `fa(b)c` |
| `2mr([` | `f[a(b)c]` |
| `3md(` | unchanged: there is no third pair |

With `m` the count-th pair of any kind is taken: on `f[a(b)c]`, `2mim` then
`d` gives `f[]`.

### Outside a pair

With the cursor outside any pair, `mi(` and `ma(` take nothing under the
helix keymap, as in helix. Under the vim keymap they reach ahead to the next
pair, as vim does: at the start of `ab (cd) ef`, `da(` gives `ab  ef`.

### Several selections

Each selection takes its own pair, and the whole change is one undo step. With
a cursor on each line's `b`:

| Text | Keys | Result |
| --- | --- | --- |
| `a b c` / `a b c` | `ms (` | `a (b) c` / `a (b) c` |
| `a (b) c` / `a (b) c` | `md (` | `a b c` / `a b c` |
| `a (b) c` / `a (b) c` | `mr ( [` | `a [b] c` / `a [b] c` |

`md` and `mr` change nothing when a cursor has no pair around it, or when two
cursors are inside the same pair: taking it off once per cursor would take off
the pair outside it as well.
