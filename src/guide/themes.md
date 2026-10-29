# Themes

yumete ships ten themes. Pick one for this session with `:theme <name>`, or set it for
good in your [`config.toml`](configuration.md):

```toml
[theme]
name = "gruvbox"
```

`:theme` with no name says which theme and which mode are in force. Press `Tab` after
`:theme ` to see the list. A theme chosen with `:theme` does not change the config file;
it lasts for this run, and `ye -r` or `:resume` brings it back next time.

## The themes

| Name | Also accepted | Light | Dark | What it looks like |
| --- | --- | --- | --- | --- |
| `ink` | `moxiang` | yes | yes | The default. Warm white ink on near-black paper, gold for headings, red for errors |
| `bw` | `heibai`, `mono` | yes | yes | Black, white and grey only |
| `morandi` | `molandi` | yes | yes | Muted, greyed colours |
| `github` | `github-theme` | yes | yes | GitHub Light Default and Dark Default |
| `tokyo-night` | `tokyonight`, `tokyo_night` | yes | yes | Tokyo Night and Tokyo Night Light |
| `catppuccin` | | yes | yes | Mocha when dark, Latte when light |
| `gruvbox` | | yes | yes | Gruvbox Medium, dark and light |
| `one-dark` | `onedark`, `one_dark` | no | yes | One Dark Pro |
| `monokai` | | no | yes | Monokai as VS Code ships it |
| `dracula` | | no | yes | Dracula |

In the config file the Chinese names also work: 墨香 for `ink`, 黑白 for `bw`, 莫蘭迪 for
`morandi`. On the command line, use the names in the first column, since the input
method is not active there.

The last seven are borrowed: their code and Markdown colours are copied value for value
from the theme they are named after, so keywords and headings are where you expect them.
The first three are yumete's own, described below.

## Light and dark

Light or dark is a separate choice from the theme. Every theme with both modes has a
light and a dark version; the three dark-only themes stay dark whatever you ask for.

```toml
[theme]
mode = "auto"   # "auto" (the default), "dark" or "light"
```

`auto` asks the terminal what colour its background is and follows it. This is the
terminal's background, not the desktop's: a dark terminal on a light desktop gets the
dark mode. A terminal that does not answer gets dark.

To switch for the moment, use `:theme-mode`:

| Command | Effect |
| --- | --- |
| `:theme-mode light` | the light version of the current theme |
| `:theme-mode dark` | the dark version |
| `:theme-mode system` | back to what the terminal said at startup |
| `:theme-mode` | say which mode is in force |

`:theme` only takes a theme's name, and `:theme-mode` only takes a mode. Neither writes
to the config file.

## How the house themes are built

`ink`, `bw` and `morandi` are each defined by a handful of colours. The two that matter
most are the **ink** (the colour of the text) and the **paper** (the background). Every
grey on the screen is a step between those two: line numbers, borders, the selection,
the cursor's row in a table, a quoted block. Change the ink or the paper and every grey
moves with them, so the relations between them still hold.

On top of the greys, each colour has one job:

| Colour | Config key | Used for |
| --- | --- | --- |
| gold | `gold` | headings, table headers, labels in panels: text that is not the prose |
| red | `mark` | something wrong: a footnote marker, a table row with the wrong number of cells, a merge conflict |
| purple | `purple` | inline code and code blocks |
| green | `green` | quotations |
| blue | `azure` | links |
| yellow | `amber` | `::: warning` blocks, and types in code |

Bold, italic and plain prose get no colour of their own. The order of the colours follows
the ranks of official robes in imperial China: gold for the writer's own headings,
purple for code where not one character may change, green for other people's words,
blue for an address. Red never marks emphasis; it always means "this is wrong". Your
own `==highlighted==` text sits on a pale wash of the gold, not the red.

Code uses the same colours, plus four second tones that appear only in code:

| In code | Colour | Config key |
| --- | --- | --- |
| keywords | purple | `purple` |
| functions | blue | `azure` |
| strings | green | `green` |
| types | yellow | `amber` |
| properties, attributes | gold | `gold` |
| numbers and constants | orange | `orange` |
| built-ins such as `self` and `this` | pink | `pink` |
| escapes | cyan | `cyan` |
| HTML tags | lime | `lime` |
| comments | grey, italic | |

The five callouts each take one colour: `::: note` blue, `::: tip` green,
`::: important` purple, `::: warning` yellow, `::: caution` red. VitePress's names work
too: `::: info` and `::: details` are drawn as note, `::: danger` as caution.

`bw` has no hue at all. It shows what gold and red show in `ink` by brightness instead:
gold text is brighter than the prose, and red is brighter still.

## The `[theme]` keys

| Key | Values | Default | Effect |
| --- | --- | --- | --- |
| `name` | a theme's name | `"ink"` | which theme |
| `mode` | `auto`, `dark`, `light` | `"auto"` | light or dark (`system` is the same as `auto`) |
| `ground` | `paint`, `terminal` | `"paint"` | `terminal` leaves your terminal's background alone and only colours the text |
| `status_bar` | `sunken`, `raised` | `"sunken"` | `sunken` sets the status line further from the text colour than the page; `raised` sets it one step toward the text |
| `fill` | `true`, `false` | `false` | put a background behind code and quotations |

`fill` can also be changed for the session with `:theme-fill on`, `:theme-fill off` or
`:theme-fill toggle`. `:theme-fill` alone says whether it is on.

With `ground = "terminal"`, yumete cannot promise any contrast, because it does not know
your background. Use it if you have tuned your terminal's colours and want to keep them.

The same keys are in the settings panel (`:settings`), under colours.

## Changing the colours

There are no theme files. To make a theme of your own, start from the nearest one and
override the colours you want to change. Each key from the tables above takes a
`#RRGGBB` value for the dark mode, and the same key with `_light` takes the light one:

```toml
[theme]
name = "ink"
ink = "#D2CEC4"          # text, dark mode
paper = "#181A1D"        # background, dark mode
ink_light = "#2A2923"    # text, light mode
paper_light = "#F1EBD9"  # background, light mode
mark = "#EC5D4B"         # red, dark mode
gold_light = "#6B5426"   # gold, light mode
```

The colour keys are `ink`, `paper`, `mark`, `gold`, `purple`, `green`, `azure`, `amber`,
`orange`, `pink`, `cyan` and `lime`, each with a `_light` twin. A value that is not
`#RRGGBB` is reported when the config loads, and a `name` that is not a theme's is
reported too. In both cases the rest of the config still applies.
