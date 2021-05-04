Here's how to **check your Ruby version on Mac** if you need to know **what Ruby version is installed on macOS**?

## Steps

Here are steps to check the Ruby version on Mac (more details here).
- use `ruby -v` to check the version number
- use `which -a` to see if other Ruby versions are installed

## How to check Ruby version on Mac

To find out what version of Ruby is installed on macOS, just enter in your terminal application:

```bash
$ ruby -v
```

Don't type the `$` character. The `$` character is just a cue that you should enter a shell command.

If Ruby is installed, the `ruby -v` command will show a response like:

```bash
$ ruby -v
ruby 3.0.0p0
```

The `ruby -v` command will show you the Ruby version number.

If Ruby is not installed, you'll see:

```bash
zsh: command not found: ruby
```

The `which` command can confirm that Ruby is missing:

```bash
$ which ruby
ruby not found
```

If Ruby is installed, the `which` command may show the Ruby version number in the file path:

```bash
/Users/daniel/.rvm/rubies/ruby-3.0.0/bin/ruby
```

## Where is Ruby installed?

You may want to know more than the Ruby version number. You may want to know **how Ruby was installed** and **where Ruby is installed**. The `which` command will show you.

You can use the `which` command with flag `-a` to see if more than one Ruby executable is installed and where they are installed:

```bash
$ which -a ruby
/Users/daniel/.asdf/shims/ruby
/usr/bin/ruby
```

See the article [Where is Ruby Installed?](/faq/where-is-ruby-installed/index.html) for more details.

## Pre-installed macOS system Ruby

MacOS comes with a "system Ruby" pre-installed. If you see `/usr/bin/ruby` when you use the `which` command, it is the pre-installed macOS system Ruby. It's a bad idea to use the Mac system Ruby for developing Ruby applications (it's fine to use it for running utility scripts). See the article [Do not use the MacOS system Ruby](/faq/do-not-use-mac-system-ruby/index.html). That's why developers use a version manager such as asdf, chruby, rbenv, or rvm. A version manager can also help if you're juggling multiple projects that can't be updated all at once.

## Homebrew

Homebrew is a package manager that adds languages or software packages to the Mac. It can install one (and only one!) version of Ruby (usually the latest version). When you use the `which` command, you'll know you are using a Homebrew-installed version of Ruby if you see `/usr/local/...` (on Mac Intel) or `/opt/homebrew/...` (for Apple Silicon).

The version of Ruby installed by Homebrew is primarily intended for use by other Homebrew packages. As such, it can be updated to a newer version without warning when Homebrew updates the dependencies of other packages. If you are a casual Ruby user (for example, learning the language or working on a single personal project), it is convenient to <a href="/ruby/13.html">install the latest Ruby with Homebrew</a>. However, if your project depends on a specific version of Ruby, or you are developing multiple Ruby projects that cannot be updated all at once, you should not rely on the single version of Ruby installed by Homebrew. Instead, install a software version manager such as asdf, chruby, rbenv, or rvm.

## Version managers

For a guide that compares version managers and shows the best way to install Ruby, see [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html).

## Rubies installed with a version manager

If a version manager has already been installed, you can tell by looking at the result of the `which` or `which -a` commands. Or just type the version manager name with the `-v` flag:

```bash
$ rvm -v
zsh: command not found: rvm
$ rbenv -v
zsh: command not found: rbenv
$ chruby -v
zsh: command not found: chruby
$ asdf -v
zsh: command not found: asdf
```

### Ruby versions in RVM

To list all installed Ruby versions in RVM:

```bash
$ rvm list

rvm rubies

 * ruby-1.9.3-p484 [ x86_64 ]
   ruby-2.0.0-p481 [ x86_64 ]
=> ruby-2.1.1 [ x86_64 ]

# => - current
# =* - current && default
#  * - default
```

The list shows the current and default Ruby versions.

### Ruby versions in rbenv

To list all installed Ruby versions in rbenv:

```bash
$ rbenv versions
1.9.2-p290
* 1.9.3-p327
```

The star (asterisk) shows the currently active version.

### Ruby versions in chruby

To list all installed Ruby versions in chruby:

```bash
$ chruby
* 1.9.3-p327
```

The star shows the currently active version.

### Ruby versions in asdf

To list all installed Ruby versions in asdf:

```bash
$ asdf list
ruby
  2.7.2
  3.0.0
```

To show the currently active version in asdf:

```bash
$ asdf current ruby
ruby            3.0.0           /Users/daniel/.tool-versions
```

The last column shows the file where the default version is set.

## Change Ruby version

After you've found the Ruby version and learned how it was installed, you may want to [Change Ruby version on Mac](/faq/change-ruby-version/index.html).

## Tip: the gem env command

The `gem env` command gives you a full picture of your local Ruby environment, including the Ruby version and where it is installed:

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
