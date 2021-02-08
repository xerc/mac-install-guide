## How to find what Ruby version is installed?

>> Question: What Ruby version is installed? What Ruby version do I have? How to check your Ruby version.

To find out **what version of Ruby is installed**, just enter in your terminal application:

```bash
$ ruby -v
```

Don't type the `$` character. The `$` character is just a cue that you should enter a shell command.

If Ruby is not installed, you'll see:

```bash
zsh: command not found: ruby
```

The `which` command will confirm that Ruby is missing:

```bash
$ which ruby
ruby not found
```

If Ruby is installed, the `ruby -v` command will show a response like:

```bash
$ ruby -v
ruby 3.0.0p0
```

But there's a catch. You may not want to use the version of Ruby that you see! For example, macOS comes with a "system Ruby" pre-installed, and you'll see:

```bash
ruby 2.6.3p62
```

It's a bad idea to use the Mac system Ruby because you'll need root access (sudo) to install gems (introducing a security risk). And you'll end up with a cluster of (sometimes incompatible) gems that can't be easily removed. That's why developers use a version manager such as asdf, chruby, rbenv, or rvm. A version manager can also help if you're juggling multiple projects that can't be updated all at once.

For a guide that compares version managers and shows the best way to install Ruby, see [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html).

## Use the gem env command

The `gem env` command gives you a full picture of your local Ruby environment, including the Ruby version:

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

## Where is Ruby installed?

The `which` command can show you **where Ruby is installed**.

```bash
$ which ruby
```

I can't tell you why the command that tells you _where_ is named _which_. 😕 🙁 😢

Sometimes (depending on the version manager you're using), the `which` command will show the Ruby version number in the file path:

```bash
/Users/daniel/.rvm/rubies/ruby-3.0.0/bin/ruby
```

You can use the `which` command with flag `-a` to see if more than one Ruby executable is installed:

```bash
$ which -a ruby
/Users/daniel/.asdf/shims/ruby
/usr/bin/ruby
```

See the article [Where is Ruby Installed?](/faq/where-is-ruby-installed/index.html) for more details.

## Rubies installed with a version manager

You may be able to tell which version managers have been installed by looking at the result of the `which` or `which -a` commands. Or just type the version manager name with the `-v` flag:

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
