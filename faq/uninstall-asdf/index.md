## Uninstall asdf

Here's how to uninstall asdf on a Mac when it was installed with Homebrew.

### What is asdf?

[Asdf](https://asdf-vm.com/) is a version manager. Developers use it to install programming languages and switch among language versions as needed. Asdf is popular because it can manage versions of many languages, for example, Ruby, Python, and Node.

### Steps

Here are the steps to remove asdf (see details in this guide).
- Run diagnostics before removing asdf.
- Uninstall asdf using Homebrew.
- Run diagnostics after removing asdf.
- Remove asdf artifacts.

### Remove a language version

Are you sure you need to remove asdf? Perhaps you just need to uninstall a language version. In this example, you'll see how to remove Ruby.

First list all Ruby installed versions.

```bash
$ asdf list ruby
3.0.0
```

Then uninstall any version.

```bash
$ asdf uninstall ruby 3.0.0
```

If you don't remove a language version, the files will remain on your disk after you have removed asdf.

### Run diagnostics before removing asdf

Run a diagnostic to list all the packages you've installed with Homebrew. You should see asdf and its dependencies.

```bash
$ brew list
==> Formulae
asdf		automake	libtool		m4		readline
autoconf	coreutils	libyaml		openssl@1.1	unixodbc
```

You can also display a list of packages with their dependencies.

```bash
$ brew deps --tree --installed
asdf
├── autoconf
│   └── m4
├── automake
│   └── autoconf
│       └── m4
├── coreutils
├── libtool
│   └── m4
├── libyaml
├── openssl@1.1
├── readline
└── unixodbc
    └── libtool
        └── m4
```

Finally, you can see a list of asdf files installed with Homebrew. This example is from Homebrew on Apple silicon, where Homebrew files are installed in `/opt/homebrew`.

```bash
$ brew list asdf
/opt/homebrew/Cellar/asdf/0.8.1/asdf.fish
/opt/homebrew/Cellar/asdf/0.8.1/asdf.sh
/opt/homebrew/Cellar/asdf/0.8.1/asdf_updates_disabled
/opt/homebrew/Cellar/asdf/0.8.1/ballad-of-asdf.md
/opt/homebrew/Cellar/asdf/0.8.1/bin/asdf
/opt/homebrew/Cellar/asdf/0.8.1/CONTRIBUTING.md
/opt/homebrew/Cellar/asdf/0.8.1/defaults
/opt/homebrew/Cellar/asdf/0.8.1/docs/scripts/docsify-edit-on-github.js
/opt/homebrew/Cellar/asdf/0.8.1/docs/ (17 files)
/opt/homebrew/Cellar/asdf/0.8.1/etc/bash_completion.d/asdf.bash
/opt/homebrew/Cellar/asdf/0.8.1/help.txt
/opt/homebrew/Cellar/asdf/0.8.1/lib/commands/ (28 files)
/opt/homebrew/Cellar/asdf/0.8.1/lib/ (3 files)
/opt/homebrew/Cellar/asdf/0.8.1/libexec/private/asdf-exec
/opt/homebrew/Cellar/asdf/0.8.1/lint.sh
/opt/homebrew/Cellar/asdf/0.8.1/release/ (2 files)
/opt/homebrew/Cellar/asdf/0.8.1/SECURITY.md
/opt/homebrew/Cellar/asdf/0.8.1/share/fish/vendor_completions.d/asdf.fish
/opt/homebrew/Cellar/asdf/0.8.1/share/zsh/site-functions/_asdf
/opt/homebrew/Cellar/asdf/0.8.1/test/fixtures/ (17 files)
/opt/homebrew/Cellar/asdf/0.8.1/test/ (28 files)
/opt/homebrew/Cellar/asdf/0.8.1/Vagrantfile
/opt/homebrew/Cellar/asdf/0.8.1/VERSION
```

### Uninstall asdf from Homebrew

Here's how to uninstall asdf from Homebrew:

```bash
$ brew uninstall --force asdf
```

### Run diagnostics after removing asdf

Run the diagnostics to confirm you've uninstalled asdf from Homebrew.

```bash
$ brew list
==> Formulae
$ brew deps --tree --installed
$ brew list asdf
```

### Remove asdf artifacts

Remove the asdf configuration from the  `~/.zshrc` file:

```bash
. /usr/local/opt/asdf/asdf.sh
```

Remove all asdf configuration files from your user directory:

```bash
$ rm -rf ~/.asdf/
$ rm -rf ~/.tool-versions
```

### Done!

That's it! You've uninstalled asdf.

For a guide that compares version managers for Ruby, see [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html).
