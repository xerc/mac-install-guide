## Install Brew Mac

How to **install Homebrew** on Mac M1 or Mac Intel. Installing Homebrew on macOS Big Sur. Up-to-date and kitchen-tested instructions, with troubleshooting tips, from the author of the book, _[Learn Ruby on Rails](https://learn-rails.com/)_.

Here you'll set up Homebrew on a Mac. This complete Homebrew usage guide is for beginners as well as experienced developers. If you just need the install command, here it is (don't type the `$` as it is just an indicator that this is a command to enter in the terminal).

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This guide gives the background and details that are missing from the [official Homebrew site](https://brew.sh/). Plus, it is easier to read than [Homebrew's documentation](https://docs.brew.sh/).

## Steps

Here are steps to install Homebrew (details in this complete guide).
- Prepare your Mac.
- Install Homebrew.
- Update the shell configuration (Mac M1 only).
- Install packages.

Setting up Homebrew requires bringing macOS up to date, installing the Xcode Command Line Tools (to get basic Unix utilities), installing Homebrew, and installing packages. Jump ahead to the command you need; otherwise, read on for background and explanation.

## Mac M1 (Apple silicon)

Homebrew supports the Mac M1 chip (Apple silicon) since the release of Homebrew 3.0.0 in February 2021. On Apple silicon, Homebrew installs files into the `/opt/homebrew/` folder, which is not part of the default shell `$PATH`. You'll need to configure your shell environment so Homebrew packages are found and take priority over pre-installed tools.

If you have an older Intel Mac, Homebrew installs files into the `/usr/local/` folder, which is already configured for access by the shell with the macOS default `$PATH` environment variable. Homebrew installation is easier because there's no need to configure your shell environment. Homebrew packages are found automatically. However, the Homebrew team was criticized for using the `/usr/local/` folder because other programs might install software into the `/usr/local/` folder, overwriting Homebrew packages. With the release of version 3.0.0 for Apple silicon, the Homebrew team made the change, adding an installation step that requires a change to the shell environment. It will be inconvenient for inexperienced users but experts argue that configuring the shell environment is basic knowledge that every developer should learn as a foundation for using command line programs.

## What is Homebrew

[Homebrew](https://brew.sh/) is a package manager for macOS (and Linux). Developers use Homebrew to install (and remove) software programs for the terminal, or command line. It's like an app store for command line programs (but everything is free). Though macOS includes some pre-installed programming languages and command line utilities, most programming requires newer versions of languages and tools that Apple won't provide. Before Homebrew, developers downloaded source code from various websites and compiled the programs they needed, with various degrees of difficulty, errors, and security worries. Homebrew collects almost every useful open source program in one place, with a single tool to install and manage each "package." Homebrew is one of the first tools you'll use to set up a local development environment for programming on a Mac.

## Alternatives to Homebrew

[MacPorts](https://www.macports.org/), [Fink](https://www.finkproject.org/), [pkgin](https://pkgin.net/), and [Nix](https://nixos.org/) are alternatives to Homebrew on macOS. On Linux, developers use [apt-get](https://en.wikipedia.org/wiki/APT_(software)) or Homebrew. On Windows, developers use [Chocolatey](https://chocolatey.org/) to install programs from the [NuGet](https://www.nuget.org/) package library (they also use apt-get under WSL, the Windows Subsystem for Linux).

On the Mac, _MacPorts_ requires more technical skill and requires `sudo` or root access (Homebrew aims to be friendlier and more secure for non-expert users). MacPorts is more independent of macOS, ignoring many of the system libraries and software that are already available in macOS, avoiding dependence on Apple's update schedule (Homebrew relies on macOS system libraries for faster set up). MacPorts is a better choice for a multi-user Mac, should more than one developer be using the same Mac. _Fink_ is the oldest of the Mac package managers and modifies the Linux apt-get package library (as of June 2021, Fink is not yet available for macOS Big Sur). _Pkgin_ installs binaries from the NetBSD (Unix) [pkgsrc](https://www.pkgsrc.org/) repository and requires `sudo` or root access, making it more suitable to a skilled Unix user. Some developers on large teams use the _Nix_ package manager. Nix is very complex but creates fully isolated, reproducible development environments.

## First Steps

Setting up Homebrew requires bringing macOS up to date and installing the [Xcode Command Line Tools](/homebrew/2.html) before [installing Homebrew](/homebrew/3.html). Take a look at [preparing your Mac](/homebrew/1.html) first, or jump ahead to the other sections.
