# Installation

yumete is one program with two names: `yumete`, and `ye`, the short one you
type. Every package below installs both. There are builds for macOS on Apple
Silicon, Linux on x86_64 and aarch64, and Windows on x86_64.

## Homebrew (macOS and Linux)

```sh
brew install forfudan/tap/yumete
```

This puts `yumete` and `ye` on your `PATH`. `brew upgrade` keeps them current.
The tap has no build for Intel Macs; on one of those,
[build from source](#building-from-source).

## Scoop (Windows)

```powershell
scoop bucket add forfudan https://github.com/forfudan/scoop-bucket
scoop install yumete
```

Scoop makes a shim for each name, so `yumete` and `ye` both work in any
terminal.

## Release archives

Every release on the
[releases page](https://github.com/forfudan/yumete/releases) carries one
archive per platform:

| Platform | Archive |
| --- | --- |
| macOS, Apple Silicon | `yumete-<version>-darwin-arm64.tar.gz` |
| Linux, x86_64 | `yumete-<version>-linux-x86_64.tar.gz` |
| Linux, aarch64 | `yumete-<version>-linux-aarch64.tar.gz` |
| Windows, x86_64 | `yumete-<version>-windows-x86_64.zip` |

Each has a `.sha256` file beside it. Inside you find `bin/yumete` (or
`bin\yumete.exe`) and the licence.

The archive holds one name only. To install it on macOS or Linux:

```sh
tar -xzf yumete-*-linux-x86_64.tar.gz
cp yumete-*/bin/yumete ~/.local/bin/
ln -s yumete ~/.local/bin/ye
```

Use any directory on your `PATH`. On Windows, put `yumete.exe` in a directory on
your `PATH` and copy it to `ye.exe` beside it. The Windows binary needs no
runtime library installed.

Check that it worked:

```sh
ye --version
```

## Typing Chinese: the input method data

Every build carries small tables of two schemes, 靈明 and 星陳, so the built-in
input method types Chinese characters as soon as it is installed (see
[The input method](../writing/ime.md)). Whole words, the other schemes, and the language model behind whole-sentence input come from the
data of the Yume input method.

If the Yume input method is installed on the same machine, yumete finds its data
on its own. Nothing else to do.

If the data is somewhere else, name the directory in your
[configuration](./configuration.md):

```toml
[ime]
data_dirs = ["~/yume-data"]
```

or, for one run, in the environment variable `YUMETE_DATA_DIR`. It takes a list
of directories, separated the way `PATH` is (`:` on macOS and Linux, `;` on
Windows).

`:yume-where` lists every place yumete looked and what it found there. See
[The input method](../writing/ime.md) for the rest.

## Building from source

You need:

- a stable Rust toolchain (`rustup` is the usual way to get one);
- a checkout of the `yume` repository (the input method engine)
  **beside** this one, as `../yume`. The input method crate depends on it by
  path, so nothing builds without it. Set `YUME_ROOT` if it lives elsewhere.

The `yume` repository is not public. If you cannot clone it, use one of the
packages above.

```sh
git clone https://github.com/forfudan/yumete
cd yumete
scripts/build.sh --no-data
```

`scripts/build.sh` builds a release binary and leaves it at the repository root
as `./yumete`. It then links `~/.local/bin/yumete` and `~/.local/bin/ye` to it,
so both names run the build you just made, from any directory. It prints a
warning if that directory is not on your `PATH`.

| Option | What it does |
| --- | --- |
| `--no-data` | skip compiling the input method tables (this needs yume's source tables, which most checkouts do not have) |
| `--no-link` | leave the global commands alone |
| `YUMETE_BIN_DIR=/usr/local/bin` | link there instead of `~/.local/bin` |

The script never replaces a real file at either path. If `~/.local/bin/ye`
belongs to another program, it says so and skips that name.

The first build downloads the 靈明 and 星陳 tables it carries and caches them in
`~/.cache/yumete/builtin`. A build with no network and no cached table still
compiles, but the binary cannot type Chinese characters. Build again once you
are online.

### On Windows

Run the same script under Git Bash (it comes with Git for Windows) or MSYS2, not
PowerShell. The binary is `yumete.exe`, data goes to `%APPDATA%\yumete`, and the
global `yumete` and `ye` are copies rather than links, since a link needs
Developer Mode. A copy is only as new as the last build that made it.

## Next

[Getting started](./getting-started.md) walks through the first few minutes:
modes, saving, and where to look when you forget a key.
