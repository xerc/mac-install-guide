## Xcode Command Line Tools

How to **install Xcode Command Line Tools**. Installing Command Line Tools without Xcode extras on macOS. Up-to-date and kitchen-tested instructions, with troubleshooting tips, from the author of the book, _[Learn Ruby on Rails](https://learn-rails.com/)_. This guide is for beginners as well as experienced developers setting up a new computer.

### Installation steps

 This is the most complete guide to installing Xcode Command Line Tools on a Mac.
- [Check and Update macOS Version](/commandlinetools/1.html).
- [Are Xcode Command Line Tools Already Installed?](/commandlinetools/2.html).
- [Install Xcode Command Line Tools with Homebrew](/commandlinetools/3.html) (recommended).
- [Install Xcode Command Line Tools Directly](/commandlinetools/4.html) (an alternative).
- [Install the Full Xcode Package](/commandlinetools/5.html) (an alternative).

After you've installed Xcode Command Line Tools, you can set up a development environment with one or more programming languages, a software version manager, and any tools or utilities you need.

### What are Xcode Command Line Tools

These are tools for software developers that run on the command line, that is, in the Terminal application (also called the console). These tools have been used for programming on Unix operating systems since computing's beginnings, serving as the foundation of almost all software development.

Out of the box, a Mac doesn't contain all of the software and tools needed for programming. Instead, Apple provides a complete development environment for programmers named Xcode, which is available separately for download and installation. The full Xcode package is huge, requiring over 40GB of disk space, and supports development for all Apple operating systems. Many software developers, particularly web application developers, are using Macs but aren't developing software for Apple devices. They still need the Unix-like tools and utilities installed with the Xcode package. Fortunately, Apple provides a separate and much smaller download, the Xcode Command Line Tools, that installs the most-needed utilities for software development. You can install this smaller package from the Terminal application or as part of installing Homebrew, the popular Mac package manager.

### What is included in Xcode Command Line Tools

Many useful tools are included, such as the Apple LLVM compiler, linker, and Make for compiling executable software from source code. Also Git for save-as-you-go version control. See a [List of Xcode Command Line Tools](/commandlinetools/8.html).

### How to get Command Line Tools for Xcode

You have three options to install Xcode Command Line Tools (Xcode CLT):
- [Install Xcode Command Line Tools with Homebrew](/commandlinetools/3.html).
- [Install Xcode Command Line Tools Directly](/commandlinetools/4.html).
- [Install the Full Xcode Package](/commandlinetools/5.html).

#### With Homebrew

Most developers need additional programming languages and utilities that don't come installed on macOS and are not included in the Xcode Command Line Tools package. You can use Homebrew, the popular Mac package manager, to install almost any open source developer tool. Homebrew will install Xcode Command Line Tools as part of its installation process. Since you'll probably need Homebrew, you might as well let Homebrew install Xcode Command Line Tools for you. This guide will show the easy way to [Install Xcode Command Line Tools with Homebrew](/commandlinetools/3.html).

#### From the terminal

If you don't want Homebrew to install Xcode Command Line Tools for you, you can [Install Xcode Command Line Tools from the command line](/commandlinetools/4.html).

#### With Xcode

If you intend to develop software for  macOS, iOS, tvOS, or watchOS, [Install the full Xcode package](/commandlinetools/5.html) that includes the command line tools.

### After installation

After a macOS upgrade, you may need to [Reinstall Xcode Command Line Tools](/commandlinetools/6.html) from the command line. Finally, if you have problems or want to free disk space, this guide will show you how to completely remove and [Uninstall Xcode Command Line Tools](/commandlinetools/7.html).

### Next steps

Before you install Xcode Command Line Tools, check that macOS is up to date. See the next section, [Check macOS version](/commandlinetools/1.html).
