## Do not use the Mac system Ruby

>> Question: Why is it bad to use the macOS system Ruby? Why not use the Mac default Ruby?

MacOS comes with a "system Ruby" pre-installed.

Use the `which` command to see where Ruby is installed:

```bash
$ which ruby
/usr/bin/ruby
```

If you see `/usr/bin/ruby`, it is the pre-installed macOS system Ruby.

You should [Install Ruby with Homebrew](/ruby/12.html) or use a version manager such as asdf, chruby, rbenv, or rvm. A version manager can also help if you're juggling multiple projects that can't be updated all at once.

For a guide that compares version managers and shows the best way to install Ruby, see [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html).

## Why the macOS system Ruby is bad

Take a look at the reasons why it's a bad idea to use the Mac default Ruby.

### Gem installation problems

Ruby is a powerful and popular language because of thousands of RubyGems that provide ready-made software libraries to save development effort (you don't have to code everything from scratch). Most Ruby projects use a few gems (or sometimes dozens of gems).

The default location for Ruby gems is the system Ruby directory `/Library/Ruby/Gems/2.6.0`. That directory is owned by `root`, the system superuser. Ordinary users are not allowed to write to it.

If you try to install a gem, for example, `gem install rails`, you'll get a permissions error:

```bash
ERROR: While executing gem ... (Gem::FilePermissionError)
You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory
```

### System security issues

You can install gems as a superuser to override the permissions restriction. But don't do this!

```bash
$ sudo gem install rails
```

A gem might contain malicious code that tampers with your computer.

### Gem management

Even if you are willing to take a risk with your system security, you'll end up with a folder of (sometimes incompatible) gems that can be confusing to manage. Imagine if you've got projects that use different versions of a gem (maybe there was a new gem release between your projects). Or maybe two different gems in your project rely on different versions of a dependent gem? Which gem version is installed in your system gems folder? Which does your project need to use?

The Ruby [Bundler](https://bundler.io/) tool is essential to managing gems, both for installing gems and their dependencies, and for enforcing which gem version is used on a particular project. The Gemfile in a project directory keeps track of the gems used in any project. You can [install Bundler](https://bundler.io/doc/troubleshooting.html) with a command that uses your home directory for gems `gem install bundler --user-install` but this requires modifying your `~/.zshrc` file to update the `$PATH` variable. It's easier to install Ruby with Homebrew or use a version manager and use the Bundler that comes installed, which will use your home directory for gems. Bundler will keep versions of gems for different Ruby versions in separate folders. Bundler will then install multiple versions of gems and use a project Gemfile to load the gems that are needed. Bundler sandboxes each project so that its gem dependencies don't conflict with other projects.

### An old Ruby

You should start projects with the newest version of Ruby. And you should try to update older projects to the newest Ruby, if you can (a version manager helps if you can't update all projects at once).

At this time, Ruby 3.0 is the newest Ruby and the macOS system Ruby is an old 2.6.3. You can't easily replace the system Ruby, which is another reason you should install Ruby with Homebrew or use a version manager.

## Leave the system Ruby in place

After you've installed another version of Ruby, leave the system Ruby in place. Don't try to remove it. It's possible that some applications (or Apple's system software) expect to find it.

## Update $PATH

How does the Terminal application (your shell) know to use a newer version of Ruby that you've installed?

The instructions for installing Homebrew or any version manager will explain how to modify your `~/.zshrc` file to update the `$PATH` variable. Issues with running Ruby are usually problems with setting the `$PATH`.

## Future versions of macOS

This was written in early 2021 when macOS Big Sur was the current version. [Apple says](https://developer.apple.com/documentation/macos-release-notes/macos-catalina-10_15-release-notes):

"Scripting language runtimes such as Python, Ruby, and Perl are included in macOS for compatibility with legacy software. Future versions of macOS won’t include scripting language runtimes by default, and might require you to install additional packages."

If you've got something newer than macOS Big Sur, the system Ruby may already be gone. In that case, you'll need to install Ruby with Homebrew or use a version manager.
