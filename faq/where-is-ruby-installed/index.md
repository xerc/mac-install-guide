## Where is Ruby installed?

>> Question: Where is Ruby installed? How to check where Ruby is located.

To find out **where Ruby is installed** and available for use in your current environment, use the `which` command:

```bash
$ which ruby
```

If Ruby is not installed, the `which` command will let you know Ruby is missing:

```bash
$ which ruby
ruby not found
```

You can use the `type` command with flag `-a` to see if more than one Ruby executable is installed:

```bash
$ type -a ruby
ruby is /Users/daniel/.asdf/shims/ruby
ruby is /usr/bin/ruby
```

The `which` or `type -a` commands may show the Ruby version number in the file path. To be certain what Ruby version you are using, use the `ruby -v` command. See the article [What Ruby Version is Installed?](/faq/what-ruby-version-is-installed/index.html) for more details.

## Rubies installed with a version manager

Developers often use a version manager such as asdf, chruby, rbenv, or rvm to install and switch between Ruby versions. A version manager can help if you're juggling multiple projects that can't be updated all at once. For a guide that compares version managers and shows the best way to install Ruby, see [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html).

You may be able to tell which version managers have been installed by looking at the result of the `which` or `type -a` commands. Or just type the version manager name with the `-v` flag:

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
