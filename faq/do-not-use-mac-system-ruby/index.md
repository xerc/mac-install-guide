>> Question: Why is it bad to use the macOS system Ruby? Why not use the Mac default Ruby?

You may have heard, "Don't use the Mac system Ruby." It's good advice, but why?

## Which Ruby?

MacOS comes with a "system Ruby" pre-installed.

Use the `which` command to see where Ruby is installed:

```bash
$ which ruby
/usr/bin/ruby
```

If you see `/usr/bin/ruby`, it is the pre-installed macOS system Ruby.


Some developers use the system Ruby for running sysadmin scripts. That's fine, as long as you don't alter the system Ruby by attempting to update or add gems.

For developing projects with Ruby, you should [Install Ruby with Homebrew](/ruby/12.html) or use a version manager such as asdf, chruby, rbenv, or rvm. A version manager helps if you're juggling multiple projects and can't update all at once. For a guide that compares version managers and shows the best way to install Ruby, see [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html).

## Why using the macOS system Ruby is bad

Let's take a look at the reasons why it's a bad idea to use the Mac default Ruby for development.

### Gem installation problems

RubyGems are the ready-made software libraries that make development easy and fun in Ruby. Most Ruby projects use at least a few gems.

If you use the Mac system Ruby, running `gem install` will try to save gems to the system Ruby directory `/Library/Ruby/Gems/2.6.0`. That directory is owned by `root`, the system superuser. Ordinary users are not allowed to write to it (and you really shouldn't alter this folder).

If you try to install a gem, for example, `gem install rails`, you'll get a permissions error:

```bash
ERROR: While executing gem ... (Gem::FilePermissionError)
You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory
```

### Don't violate system security

Unix-based systems are powerful, so there's a workaround. You can install gems as a superuser to override the permissions restriction. But don't do this!

```bash
$ sudo gem install rails
```

Any time you are about to run `sudo`, you should stop and ask if you're about to shoot yourself in the foot.

In this case, you need `sudo` because you're altering system files that are managed by the OS. Don't do it! You may leave the system in a broken or compromised state. Even worse, a gem might contain malicious code that tampers with your computer.

### Gem management

Even if you are willing to take a risk with your system security, you'll end up with a folder of (sometimes incompatible) gems that can be confusing to manage. Imagine if you've got projects that use different versions of a gem (maybe there was a new gem release between your projects). Or maybe two different gems in your project rely on different versions of a dependent gem? Which gem version is installed in your system gems folder? Which does your project need to use?

Experienced developers use [Bundler](https://bundler.io/) to install gems and manage their dependencies.

Bundler installs gems and their dependencies. It also manages which gem version is used on a particular project. The Gemfile in a project directory keeps track of the gems used in any project. You can work around the systems permission problem by [installing Bundler](https://bundler.io/doc/troubleshooting.html) with a command that uses your home directory for gems. But it's easier to install Ruby with Homebrew or use a version manager and use the Bundler that comes installed, which will correctly set up your local development environment.

Bundler will keep versions of gems for different Ruby versions in separate folders. Bundler will then install multiple versions of gems and use a project Gemfile to load the gems that are needed. Bundler sandboxes each project so that its gem dependencies don't conflict with other projects.

### The Mac's old Ruby

When you start a project, use the newest Ruby release (it's 3.1 at the time this was written).

The system Ruby in macOS Monterey is Ruby 2.6.8, which is old. If you're just starting with Ruby, install with Homebrew and work on a project with Ruby 3.1. When you start building another project, it may be time to install a version manager so you can juggle projects with different Ruby versions.

## Leave the system Ruby in place

After you've installed another version of Ruby, leave the system Ruby in place. Don't try to remove it. It's possible that some applications (or Apple's system software) expect to find it.

## Update $PATH

How does the Terminal application (your shell) know to use a newer version of Ruby that you've installed?

The instructions for installing Homebrew or any version manager will explain how to modify your `~/.zshrc` file to update the `$PATH` variable. Issues with running Ruby are usually problems with setting the `$PATH`.

## Future versions of macOS

This was written in early 2022 when macOS Monterey was the current version. [Apple says](https://developer.apple.com/documentation/macos-release-notes/macos-catalina-10_15-release-notes):

"Scripting language runtimes such as Python, Ruby, and Perl are included in macOS for compatibility with legacy software. Future versions of macOS won’t include scripting language runtimes by default, and might require you to install additional packages."

If you've got something newer than macOS Monterey, the system Ruby may already be gone (or hidden from you). In that case, you'll need to install Ruby with Homebrew or use a version manager.

## Enjoy Ruby

For developers planning to build web applications with Rails, I've written a guide, [Install Rails on a Mac](/rubyonrails/index.html), which goes beyond [Install Ruby on a Mac](https://mac.install.guide/ruby/index.html) to show how to pick a version manager that will work with Node as well as Ruby.

Enjoy the pleasure of coding in Ruby! After all, it is known as a language dedicated to programmer happiness. But remember, the system Ruby is there for macOS, not for you.

## Comments?

Advice or corrections? Comment on [Reddit](https://www.reddit.com/r/ruby/comments/lfxsgk/do_not_use_the_system_ruby_why/) or [Stack Overflow](https://stackoverflow.com/questions/66116842/should-i-use-the-pre-installed-ruby-on-a-mac).
