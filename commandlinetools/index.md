## Xcode Command Line Tools

How to **install Xcode Command Line Tools**. Installing Command Line Tools without Xcode bloat on macOS. Up-to-date and kitchen-tested instructions, with troubleshooting tips, from the author of the book, _[Learn Ruby on Rails](https://learn-rails.com/)_. This is for beginners as well as experienced developers setting up a new computer.

 This is the most complete guide to installing Xcode Command Line Tools on a Mac.
- [Update macOS](/commandlinetools/1.html).
- [Install Xcode Command Line Tools with Homebrew](/commandlinetools/2.html).
- [Install Xcode Command Line Tools from the terminal](/commandlinetools/3.html).
- [Reinstall Xcode Command Line Tools](/commandlinetools/4.html).
- [Uninstall Xcode Command Line Tools](/commandlinetools/5.html).

## Installation steps

Here are steps to install Xcode Command Line Tools (details in this complete guide).
- Prepare your Mac.
- Install Homebrew with the Xcode Command Line Tools option.
- Reinstall Xcode Command Line Tools after macOS upgrades.

After you've installed Xcode Command Line Tools, set up a development environment with one or more programming languages, a software version manager, and any tools or utilities you need. This site also provides guides to [Install and Use Homebrew](/homebrew/index.html) and [Install Asdf](/asdf/index.html), the software version manager.

## What is Xcode Command Line Tools

As the name implies these are tools for software developers that run on the command line, that is, in the Terminal application (also called the console). These tools have been used for programming on Unix operating systems since before the birth of personal computers and they form the foundation of almost all software development.

Out of the box, a Mac doesn't contain all of the software and tools needed for programming. Instead, Apple provides a complete development environment named Xcode, available separately for download and installation. Xcode is huge, requiring over 40GB of disk space, and supports development for all Apple operating systems, including macOS, iOS, tvOS, and watchOS. Many software developers, particularly web application developers, are using Macs but aren't developing software for Apple devices. They still need the Unix-like tools and utilities installed with the Xcode package. Fortunately, Apple provides a separate and much smaller download, the Xcode Command Line Tools, that installs the most-needed utilities for software development. You can install this smaller package from the Terminal application or as part of installing Homebrew, the popular Mac package manager.

## Ways to install Xcode Command Line Tools

Most developers need additional programming languages and utilities that aren't pre-installed on macOS or included in the Xcode Command Line Tools package. You can use Homebrew, the popular Mac package manager, to install almost any open source developer tool. Homebrew will install Xcode Command Line Tools as part of its installation process. Since you'll probably need Homebrew, you might as well let Homebrew install Xcode Command Line Tools for you.

If you don't want Homebrew to install Xcode Command Line Tools for you, you can install Xcode Command Line Tools from the command line.

This guide will show the easy way to [Install Xcode Command Line Tools with Homebrew](/commandlinetools/2.html) plus how to [Install Xcode Command Line Tools from the command line](/commandlinetools/3.html). After upgrading macOS to a newer version, you may need to [Reinstall Xcode Command Line Tools](/commandlinetools/4.html) from the command line. Finally, if you have problems or want to free disk space, this guide will show you how to completely remove and [Uninstall Xcode Command Line Tools](/commandlinetools/5.html).

## What is included in Xcode Command Line Tools

Many useful tools are included, such as the Apple LLVM compiler, linker, and Make. Also Git.

## More

You need to install Apple's Xcode Command Line Tools to get the Unix tools needed to install Ruby and develop applications. Apple’s Xcode Command Line Tools provide a C language compiler. You'll need it to install Ruby. Also, for many Ruby projects, you will need the C language compiler to automatically install gems that use native extensions (some gems speed up Ruby by using code written in C).

Xcode is Apple's software library for macOS developers. Xcode is over 40GB. You don't need all of it!. You just need the Xcode Command Line Tools. Only install the full 40GB Xcode package if you plan on doing development of applications for the Apple operating systems (macOS or iOS apps). Here you’ll learn how to just install the Command Line Tools that give you common Unix utilities.

It's easiest to install Command Line Tools as a part of installing Homebrew, the Unix utilities package manager. **If you have a fresh install of macOS, skip ahead to the next section,** [Install Homebrew](/ruby/3.html).

If you updated your macOS from an earlier version, you may have an outdated version of Xcode. Read on to check if you have a troublesome out-of-date Command Line Tools.

### Is Xcode already installed?

If you updated your macOS from an earlier version (sometimes called an "over the top" installation), and you previously installed a Ruby development environment, your earlier installation remains intact. You will need to install the new version of Xcode Command Line Tools to avoid headaches. First, check what you have.

Check if you previously installed the full Xcode package:

```bash
$ xcode-select -p
```

#### Scenario 1

If you see, `xcode-select: error: unable to get active developer directory...`, the Xcode package is not installed.

Good! Jump to the section, [Install Homebrew](/ruby/3.html).

![](/assets/images/ruby/xcode-not-installed.png)
*The Xcode package is not installed*

#### Scenario 2

If you see a file location that contains spaces in the path:

```bash
/Applications/Apple Dev Tools/Xcode.app/Contents/Developer
```

you will have problems installing Ruby. You should delete Xcode before continuing.

#### Scenario 3

If you see:

```bash
/Applications/Xcode.app/Contents/Developer
```

The full Xcode package is already installed. Perhaps you installed it previously. If Xcode is installed, you will need to update Xcode to the newest version (Xcode 12.2 or newer). Go to the App Store application and check "Updates." After updating Xcode, be sure to launch the Xcode application and accept the Apple license terms.

#### Scenario 4

If you see:

```bash
/Library/Developer/CommandLineTools
```

The Xcode Command Line Tools may be installed or an empty directory may be present.

Here's how to test:

```bash
$ ls /Library/Developer/CommandLineTools/usr/bin/git
```

You should see:

```bash
/Library/Developer/CommandLineTools/usr/bin/git
```

Check that you can run `git`:

```bash
$ git --version
git version 2.30.1 (Apple Git-130)
```

If Xcode Command Line Tools are installed, you can skip ahead to install Homebrew.

If the Xcode Command Line Tools folder is empty, you should remove it.

Remove the empty folder:

```bash
$ sudo rm -rf /Library/Developer/CommandLineTools
```

You are using sudo for admin access so you must enter the password you use to log in to your computer (you will not see the password after entering it). After removing the folder, continue to the section, "Install Homebrew."
