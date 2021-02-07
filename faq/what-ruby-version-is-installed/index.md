## How to find what Ruby version is installed?

>> Question: What Ruby version is installed? What Ruby version do I have? How to check your Ruby version.

To find out **what version of Ruby is installed**, just enter in your terminal application:

```bash
$ ruby -v
```

Don't type the `$` character. The `$` character is just a cue that you should enter a shell command.

You'll get a response like:

```bash
ruby 3.0.0p0
```

But there's a catch. You may not want to use the version of Ruby that you see! For example, macOS comes with a "system Ruby" pre-installed, and you'll see:

```bash
ruby 2.6.3p62
```

It's a bad idea to use the Mac system Ruby because you'll need root access (sudo) to install gems (introducing a security risk). And you'll end up with a cluster of (sometimes incompatible) gems that can't be easily removed to restore your system to a clean state. That's why developers use a version manager such as asdf, chruby, rbenv, or rvm. A version manager can also help if you're juggling multiple projects that can't be updated all at once.

For a guide that compares version managers and shows the best way to install Ruby, see [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html).

## Where is Ruby installed?

You may also want to know, **where is Ruby installed?** Use the `which` command:

```bash
$ which ruby
```

I can't tell you why the command that tells you _where_ is named _which_. 😕 🙁 😢

Sometimes (depending on the version manager you're using), the `which` command will show the Ruby version number in the file path:

```bash
/Users/daniel/.rvm/rubies/ruby-3.0.0/bin/ruby
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

See the article [Where is Ruby Installed?](/faq/where-is-ruby-installed/index.html) for more details.
