## How to check if Ruby is installed on a Mac

>> Question: Is Ruby installed on my Mac? Does Ruby come installed on a Mac?

To find out **is Ruby installed?**, just enter in your terminal application:

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

You can use the `which` command with flag `-a` to see if more than one Ruby executable is installed:

```bash
$ which -a ruby
/Users/daniel/.asdf/shims/ruby
/usr/bin/ruby
```

If Ruby is installed, the `ruby -v` command will show a response like:

```bash
$ ruby -v
Ruby 3.1.0p0
```

MacOS comes with a "system Ruby" pre-installed. Use the `which` command to see if you are using the system Ruby:

```bash
$ which ruby
/usr/bin/ruby
```

If you see `/usr/bin/ruby`, it is the pre-installed macOS system Ruby. It's a bad idea to use the Mac system Ruby. See the article [Do not use the MacOS system Ruby](/faq/do-not-use-mac-system-ruby/index.html). That's why developers use a version manager such as asdf, chruby, rbenv, or rvm. A version manager can also help if you're juggling multiple projects that can't be updated all at once.

For a guide that compares version managers and shows the best way to install Ruby, see [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html).
