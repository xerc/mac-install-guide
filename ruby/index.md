How to **install Ruby on Mac**. Installing Ruby 3.0 on macOS Big Sur or Catalina. Up-to-date and kitchen-tested instructions, with troubleshooting tips, from the author of the book, _[Learn Ruby on Rails](https://learn-rails.com/)_.

With this article, you'll set up a development environment with Ruby on a Mac. This complete Ruby installation guide is for beginners as well as experienced developers setting up a new computer. For the Rails web application framework, see [Install Ruby on Rails on macOS](https://learn-rails.com/install-rails-mac/index.html), adding Node, Yarn, and the Rails gem.

This installation guide provides complete details with explanations for each step:

> This is the most complete guide to installing Ruby on a Mac.
- [Update macOS for Ruby](/ruby/1.html).
- [Install Xcode Command Line Tools](/ruby/2.html).
- [Install Homebrew](/ruby/3.html).
- [Configure Git](/ruby/4.html).
- [Install a software version manager](/ruby/5.html).

> I'll recommend choices and explain why

- [Install Ruby 3.0](/ruby/6.html).
- [Update gems](/ruby/7.html).
- tips
- troubleshooting

## Installation steps

Here are steps to install Ruby (details in this complete guide).
- Prepare your Mac.
- Install Homebrew or a software version manager.
- Install Ruby.
- Update settings in the `.zshrc` file (as needed).

Setting up your development environment includes checking that macOS is up to date, installing the Xcode Command Line Tools (to add needed Unix utilities), configuring Git (an important tool for save-as-you-go file storage), installing the Homebrew package manager (to add more software packages), and choosing a software version manager for Ruby.

## Installation choices

Before you install Ruby, you should choose a software version manager. You have several choices for version managers (plus Homebrew and Docker):

- [asdf](https://asdf-vm.com/) (recommended for multiple languages)
- [frum](https://github.com/TaKO8Ki/frum) (recommended if you just need Ruby)
- [chruby](https://github.com/postmodern/chruby)
- [rbenv](https://github.com/sstephenson/rbenv)
- [rvm](https://rvm.io/)
- [Docker](https://www.docker.com/)
- [Homebrew](https://brew.sh/) (recommended for casual users)
- system Ruby

First, understand the difference between Homebrew and software version managers. Homebrew is a package manager that adds Ruby, other languages, and software packages to the Mac. It can install one (and only one!) version of Ruby (the latest version). You can also use Homebrew to install software version managers that install and switch between multiple versions of a language such as Ruby. Finally, some developers use Docker, which is a container system that sets up multiple development environments (like having multiple computers with different configurations). Here's how to choose.

Install with **Homebrew** if you’re building only one project with Ruby (for example, if you are a student learning Ruby). If you’re a solo developer and you need to juggle multiple projects that can't be updated all at once, use asdf or frum. Choose **asdf** if you're using multiple languages such as Ruby, Node, and Python; otherwise **frum** is the newest and fastest version manager purely for Ruby. Finally, use **Docker** (or [Nix](https://nixos.org/guides/dev-environment.html)) if you’re on a team with a complex project environment (for example, Ruby, Node, Redis, and PostgreSQL all in one project). Here are details.

> asdf is a universal version manager

[Asdf](https://asdf-vm.com/) and [frum](https://github.com/TaKO8Ki/frum) are software version managers. **Asdf** is a good choice because it is a universal version manager that installs and manages Ruby, JavaScript, Python, Elixir, and several other languages. **Frum** is simple and fast, working only with Ruby. **Chruby** works only for Ruby but (unlike Frum) requires installation of a separate installer utility.

[Rbenv](https://github.com/sstephenson/rbenv) and [rvm](https://rvm.io/) are also popular as Ruby version managers. Sam Stephenson's **rbenv** has a more complex implementation than frum or chruby (it installs extra “shim” files). **RVM** was once the most popular of Ruby version managers but its additional features (gemsets) are no longer needed and add unnecessary complexity.

[Docker](https://www.docker.com/) is a containerization tool that some developers use for version management. The primary use case for Docker is to create a reproducible virtual server that contains a configured version of any software dependency needed to run an application (language, databases, message queues). As such, it is ideal for creating a "frozen" version of a development environment for deployment to a server. You can also develop locally within a container but it will run slower, require more memory, and adds configuration complexity compared to a simple version manager. To keep things simple, don't use Docker for local development unless your application is disturbingly complex.

If you don't need a version manager, install Ruby using the [Homebrew](https://brew.sh/) package manager. Use this approach if you are only building a casual project that you will not maintain, or if you are just trying out Ruby to learn the language. You can easily remove Ruby after installing with Homebrew (and re-install a newer version when you need it). Don't install Ruby with Homebrew if you need to switch among Ruby versions (use asdf or frum in this case).

Finally, you should know that macOS comes with a **system Ruby** pre-installed. MacOS Big Sur or Catalina includes Ruby 2.6.3 which is not the newest version. If you use the system Ruby you'll need root access (sudo) to install gems (introducing a security risk). And you'll end up with a cluster of (sometimes incompatible) gems that can't be easily removed to restore your system to a clean state. Please use either asdf, frum, or Homebrew.

You'll find instructions here for installing Ruby using asdf, frum, or Homebrew.

In the next sections,  you'll [check your macOS version](/ruby/1.html), [install Xcode Command Line Tools](/ruby/2.html), [install Homebrew](/ruby/3.html) so you can either directly install Ruby or [install a software version manager](/ruby/5.html), and finally install Ruby with either asdf, frum, or Homebrew.

Continue to the next section to check your computer before installing Ruby.
