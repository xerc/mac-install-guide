## Downgrading Ruby on Mac

Downgrading the Ruby version on macOS depends on how you installed Ruby. Did you use Homebrew or a version manager like asdf chruby, rbenv, or rvm? See <a href="/ruby/9.html">Uninstalling Ruby</a> to learn how to check. If you're using the <a href="/faq/do-not-use-mac-system-ruby/index.html">"system" Ruby</a> don't uninstall it as it is there for macOS, not you. If you installed Ruby with Homebrew, it's best to install a software version manager so you can switch among Ruby versions. Asdf is good for managing multiple languages. <a href="/ruby/6.html">Install Ruby with asdf</a> if you are developing Rails web applications (which require Ruby, Node, and Yarn) or if you are using multiple languages such as Ruby, Node, and Python. <a href="/ruby/12.html">Install Ruby with chruby</a>, rbenv, or rvm if you need to manage only Ruby versions (chruby is simpler than rbenv or rvm). If you installed Ruby with a version manager, you can switch among versions.

## Steps

Here are steps to downgrade Ruby (more details here).
- see where Ruby is installed (and how)
- if installed with Homebrew, install a version manager
- if installed with a version manager, switch versions
- set a default Ruby version in a home or project directory

## How to find where Ruby is installed

To find out **where Ruby is installed**, use the `which` command:

```bash
$ which ruby
/usr/bin/ruby
```

>> Where is Ruby installed? How to check where Ruby is located.

You can use the `which` command with flag `-a` to see if more than one Ruby executable is installed:

```bash
$ which -a ruby
/Users/daniel/.asdf/shims/ruby
/usr/bin/ruby
```

The `which` or `which -a` commands may show the Ruby version number in the file path. To be certain what Ruby version you are using, use the `ruby -v` command. See the article [What Ruby Version is Installed?](/faq/what-ruby-version-is-installed/index.html) for more details.

## Pre-installed macOS system Ruby

MacOS comes with a "system Ruby" pre-installed. Use the `which` command to see if you are using the system Ruby:

```bash
$ which ruby
/usr/bin/ruby
```

If you see `/usr/bin/ruby`, it is the pre-installed macOS system Ruby. It's a bad idea to use the Mac system Ruby for developing Ruby applications (it's fine to use it for running utility scripts). See the article [Do not use the MacOS system Ruby](/faq/do-not-use-mac-system-ruby/index.html).

There's no need to uninstall the pre-installed macOS system Ruby. In fact, you shouldn't remove it because some software packages may expect to find it installed on your Mac. Instead, to use a different Ruby version, it is best to install a software version manager such as asdf, chruby, rbenv, or rvm and set the `~/.zshrc` shell configuration file to let the version manager switch versions as needed.

## Homebrew

Homebrew is a package manager that adds languages or software packages to the Mac. It can install one (and only one!) version of Ruby (usually the latest version). The version of Ruby installed by Homebrew is primarily intended for use by other Homebrew packages. As such, it can be updated to a newer version without warning when Homebrew updates the dependencies of other packages.

If you are a casual Ruby user (for example, learning the language or working on a single personal project), it is convenient to <a href="/ruby/13.html">install the latest Ruby with Homebrew</a>. However, if your project depends on a specific version of Ruby, or you are developing multiple Ruby projects that cannot be updated all at once, you should not rely on the single version of Ruby installed by Homebrew. Instead, install a software version manager such as asdf, chruby, rbenv, or rvm. Use Homebrew to install a software version manager. Then use the software version manager (or the installation utility that accompanies a software version manager) to install one or more versions of Ruby. Then use the software version manager to  switch among multiple versions of Ruby. You'll be able to set a preferred version of Ruby with a configuration file inside any project directory and the software version manager will switch to the Ruby version you need.

There's no need to remove the version of Ruby installed by Homebrew. In fact, Homebrew may re-install its own Ruby if you install a Homebrew package that requires it. Instead, install a software version manager such as asdf, chruby, rbenv, or rvm and set the `~/.zshrc` shell configuration file to let the version manager switch versions as needed.

## Install a version manager

Most developers use a version manager such as asdf, chruby, rbenv, or rvm. A version manager can help if you're juggling multiple projects that can't be updated all at once. For a guide that compares version managers and shows the best way to install Ruby, see [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html).

The installation guide recommends either asdf or chruby. Asdf is good for managing multiple languages. <a href="/ruby/6.html">Install Ruby with asdf</a> if you are developing Rails web applications (which require Ruby, Node, and Yarn) or if you are using multiple languages such as Ruby, Node, and Python. <a href="/ruby/12.html">Install Ruby with chruby</a> if you are just managing Ruby versions (chruby is simpler than rbenv or rvm).

The final step of installing asdf or chruby is to set the `~/.zshrc` shell configuration file. Don't forget this step.

## Switch Ruby with a version manager

After you've installed and configured a version manager, you can switch among Ruby versions. Here's how to switch Ruby versions with common version managers.

### Switch Ruby version with asdf

You can switch Ruby versions from the command line with `asdf shell ruby 3.0.0` (for the current shell session only).

### Switch Ruby version with chruby

To switch to a Ruby version with chruby, run `chruby 3.0.0` on the command line. This version will be the default until it is changed.

### Switch Ruby version with rbenv

With rbenv, you can switch Ruby versions from the command line with `rbenv shell 3.0.0` (only for the current shell session).

### Switch Ruby version with rvm

To switch to a Ruby version with rvm, run `rvm use 3.0.0` on the command line (only for the current shell session).

## Set a default Ruby version

If you've installed multiple Ruby versions with a version manager such as asdf, chruby, rbenv, or rvm, it is impractical to switch to the Ruby version you need every time you start work on a project. Instead, set a default Ruby version in your home directory or a project directory. Here's how.

Asdf uses a `.tool-versions` file to set versions for Ruby and any other languages you specify. It will also recognize a  `.ruby-version` file in any directory if you create an  `.asdfrc` file in your home directory and add `legacy_version_file = yes` to the  `.asdfrc` file.

Chruby, rbenv, and rvm all recognize a `.ruby-version` file in any directory. Each has a utility to set the default in the `.ruby-version` file but you can easily use a text editor to create a `.ruby-version` file. Simply specify a version number on a single line, for example: `3.0.0`.

### Set Ruby version with asdf on Mac

With asdf, you can specify a default version of Ruby in your home directory. Create a file `~/.tool-versions` with a text editor or set the `~/.tool-versions` file with a command `asdf global ruby 3.0.0` (for example). You can also create a `.tool-versions` file within any project directory with the command `asdf local ruby 3.0.0`. Changing into the directory will automatically switch Ruby and any other languages you specify.

### Set Ruby version with chruby on Mac

For auto-switching when you change directories, chruby's `auto.sh` script must be invoked in the `~/.zshrc` shell configuration file.

```bash
source /usr/local/share/chruby/chruby.sh
source /usr/local/share/chruby/auto.sh
```

With chruby auto-switching enabled, you can create a `.ruby-version` file within any project directory. Use a text editor to create a `.ruby-version` file and simply specify a version number, for example: `3.0.0` on a single line. Changing into the directory will automatically switch Ruby. You also can specify a default version of Ruby in your home `~/.ruby-version` file.

Changing a Ruby version with chruby on the command line (for example `chruby 3.0.0`) makes that version the default for future sessions.

Chruby supports all versions of Ruby, including non-standard Rubies such as JRuby. It allows `.ruby-version` to contain sub-strings of the fully qualified Ruby name, for example, `jruby` or `ruby-3.0`.

### Set Ruby version with rbenv on Mac

With rbenv, you can specify a default version of Ruby in your home `~/.ruby-version` file. A `.ruby-version` file within any project directory controls the Ruby version for the project. Create the file with a text editor or use the rbenv utility commands. The command `rbenv global 3.0.0` sets the default. The command `rbenv local 3.0.0` sets the `.ruby-version` file within any project directory. Changing into the directory will automatically switch Ruby.

### Set Ruby version with rvm on Mac

To set a default Ruby version with rvm, enter `rvm --default use 3.0.0` on the command line. To switch to the system ruby, enter `rvm use system`. To switch back to the default, `rvm default`. The command`rvm list` will show all installed Rubies, including the current and default versions. RVM will also recognize a `.ruby-version` file in any directory.

To write a `.ruby-version` file in the current directory, enter `rvm --ruby-version use 3.0.0` on the command line. Or use a text editor to create and edit a `.ruby-version` file.

## Tip: the gem env command

The `gem env` command gives you a full picture of your local Ruby environment, including the Ruby installation directory:

```bash
gem env
RubyGems Environment:
  - RUBYGEMS VERSION: 3.2.7
  - RUBY VERSION: 3.0.0 (2020-12-25 patchlevel 0) [x86_64-darwin19]
  - INSTALLATION DIRECTORY: /Users/daniel/.asdf/installs/ruby/3.0.0/lib/ruby/gems/3.0.0
  - USER INSTALLATION DIRECTORY: /Users/daniel/.gem/ruby/3.0.0
  - RUBY EXECUTABLE: /Users/daniel/.asdf/installs/ruby/3.0.0/bin/ruby
  - GIT EXECUTABLE: /usr/local/bin/git
  - EXECUTABLE DIRECTORY: /Users/daniel/.asdf/installs/ruby/3.0.0/bin
  - SPEC CACHE DIRECTORY: /Users/daniel/.gem/specs
  - SYSTEM CONFIGURATION DIRECTORY: /Users/daniel/.asdf/installs/ruby/3.0.0/etc
  - RUBYGEMS PLATFORMS:
     - ruby
     - x86_64-darwin-19
  - GEM PATHS:
     - /Users/daniel/.asdf/installs/ruby/3.0.0/lib/ruby/gems/3.0.0
     - /Users/daniel/.gem/ruby/3.0.0
  - GEM CONFIGURATION:
     - :update_sources => true
     - :verbose => true
     - :backtrace => false
     - :bulk_threshold => 1000
     - "gem" => "--no-document"
  - REMOTE SOURCES:
     - https://rubygems.org/
  - SHELL PATH:
     - /Users/daniel/.asdf/installs/ruby/3.0.0/bin
     - /Users/daniel/.asdf/shims
     - /usr/local/opt/asdf/bin
     - /usr/local/bin
     - /usr/bin
     - /bin
     - /usr/sbin
     - /sbin
```

This is a typical Ruby installation with the asdf version manager.

## Summary

Experienced Ruby developers use a software version manager such as asdf, chruby, rbenv, or rvm to switch among Ruby versions. It takes effort to set up and configure a software version manager but it will give you control over your software development environment. The alternative, relying on a single version of Ruby, saves time initially but can result in headaches if the Ruby version is not what you need. If you find you are unexpectedly using a newer version of Ruby and need to downgrade, consider installing a software version manager.

See [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html) for a complete guide.

