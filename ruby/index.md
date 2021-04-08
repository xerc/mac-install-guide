How to **install Ruby on a Mac**. Installing Ruby 3.0 on macOS Big Sur or Catalina. Up-to-date and kitchen-tested instructions, with troubleshooting tips, from the author of the book, _[Learn Ruby on Rails](https://learn-rails.com/)_.

This article will help you set up a development environment using Ruby on a Mac, whether you are an experienced developer setting up a new computer or only a beginner. If you intend to develop web applications with Rails, switch to the guide [Install Ruby on Rails on macOS](https://learn-rails.com/install-rails-mac/index.html). It provides more detail about installing Ruby, Node, Yarn, and Rails.

> This is the most complete guide to installing Ruby on a Mac.

This guide provides full details:
- [update macOS for Ruby](/ruby/1.html)
- [install Xcode Command Line Tools](/ruby/2.html)
- [install Homebrew](/ruby/3.html)
- [configure Git](/ruby/4.html)

> I'll recommend choices and explain why

- [install a software version manager](/ruby/5.html)
- [install Ruby 3.0](/ruby/6.html)
- [update gems](/ruby/7.html)
- tips and troubleshooting

If you want to check if Ruby is already installed, see the article [Is Ruby Installed on my Mac?](/faq/is-ruby-installed-mac/index.html).

## Installation choices

You have several choices for installing and running Ruby on macOS:

- [asdf](https://asdf-vm.com/) (recommended)
- [chruby](https://github.com/postmodern/chruby) (recommended)
- [rbenv](https://github.com/sstephenson/rbenv)
- [rvm](https://rvm.io/)
- [Docker](https://www.docker.com/)
- [Homebrew](https://brew.sh/) (recommended)
- system Ruby

Here's how to choose.

Install with **Homebrew** if you’re building only one project with Ruby (especially if you are a student learning Ruby). If you’re a solo developer and you're juggling multiple projects that can't be updated all at once, use asdf or chruby or rbenv. Choose **asdf** if you're using multiple languages such as Ruby, Node, and Python; otherwise **chruby** or **rbenv** are fine for just managing Ruby versions. Finally, use **Docker** (or [Nix](https://nixos.org/guides/dev-environment.html)) if you’re on a team with a complex project environment (for example, Ruby, Node, Redis, and PostgreSQL all in one project). See a [discussion](https://www.reddit.com/r/ruby/comments/ksyqau/ruby_30_asdf_chruby_or_docker/) for more advice; here are details.

> asdf is a universal version manager

[Asdf](https://asdf-vm.com/) and [chruby](https://github.com/postmodern/chruby) are software version managers. If you need to switch between versions of Ruby, use asdf or chruby. **Asdf** is your best choice because it is a universal version manager that installs and manages Ruby, JavaScript, Python, Elixir, and several other languages. **Chruby** is efficient and simple but it works only with Ruby.

[Rbenv](https://github.com/sstephenson/rbenv) and [rvm](https://rvm.io/) are also popular as Ruby version managers. Sam Stephenson's **rbenv** is more complex than chruby (it installs extra “shim” files). **RVM** was once the most popular of Ruby version managers but its additional features (its gemsets) are no longer needed and it adds unnecessary complexity.

[Docker](https://www.docker.com/) is a containerization tool that some developers use for version management. The primary use case for Docker is to create a reproducible virtual server that contains a configured version of any software dependency needed to run an application (language, databases, message queues). As such, it is ideal for creating a "frozen" version of a development environment for deployment to a server. You can also develop locally within a container but it will run slower, require more memory, and adds configuration complexity compared to a simple version manager. To keep things simple, don't use Docker for local development unless your application is disturbingly complex.

If you don't need a version manager, install Ruby using the [Homebrew](https://brew.sh/) package manager. Use this approach if you are only building a casual project that you will not maintain, or if you are playing with Ruby to learn the language. You can easily remove Ruby after installing with Homebrew (and re-install a newer version when you need it). Don't install Ruby with Homebrew if you need to switch among Ruby versions (use asdf or chruby in this case).

Finally, you should know that macOS comes with a **system Ruby** pre-installed. MacOS Big Sur or Catalina includes Ruby 2.6.3 which is not the newest version. If you use the system Ruby you'll need root access (sudo) to install gems (introducing a security risk). And you'll end up with a cluster of (sometimes incompatible) gems that can't be easily removed to restore your system to a clean state. Please use either asdf, chruby, or Homebrew.

You'll find instructions here for installation using asdf, chruby, or Homebrew.

Continue to the next section to check your computer before installing Ruby.
