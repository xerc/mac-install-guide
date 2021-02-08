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
ruby 3.0.0p0
```

MacOS comes with a "system Ruby" pre-installed. If you see:

```bash
ruby 2.6.3p62
```

Use the `which` command to see where it is installed:

```bash
$ which ruby
/usr/bin/ruby
```

If you see `/usr/bin/ruby`, it is the pre-installed macOS system Ruby. It's a bad idea to use the Mac system Ruby because you'll need root access (sudo) to install gems (introducing a security risk). And you'll end up with a cluster of (sometimes incompatible) gems that can't be easily removed. That's why developers use a version manager such as asdf, chruby, rbenv, or rvm. A version manager can also help if you're juggling multiple projects that can't be updated all at once.

For a guide that compares version managers and shows the best way to install Ruby, see [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html).
