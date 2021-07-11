<h2>FAQ</h2>

<details>
<summary><h2>What are Xcode Command Line Tools?</h2></summary>
<p>
Xcode Command Line Tools are tools for software developers that run on the command line, in the Terminal application. Since before Apple's beginnings, this assortment of Unix-based tools have been the foundation of almost all software development. Out of the box, a Mac doesn't contain all of the software and tools needed for programming. Instead, Apple provides a complete development environment named Xcode, available separately for download and installation. Xcode is huge (over 40GB) because it builds software for all Apple operating systems (macOS, iOS, tvOS, and watchOS). Software developers who aren't building software for Apple devices still need the Unix-like tools and utilities installed with the Xcode package. Fortunately, Apple provides a separate and much smaller download, the Xcode Command Line Tools, that installs the most-needed utilities for software development. You can install this smaller package from the Terminal application or as part of installing Homebrew, the popular Mac package manager.
</p>
</details>

<details>
<summary><h2>How to install Xcode Command Line Tools?</h2></summary>
<p>
You have three options to install Xcode Command Line Tools (Xcode CLT): <a href="/commandlinetools/3.html">install Xcode Command Line Tools with Homebrew</a>, <a href="/commandlinetools/4.html">install Xcode Command Line Tools directly from the terminal</a>, or <a href="/commandlinetools/5.html">install the full Xcode package</a>. Homebrew is our recommended choice because most developers need additional programming languages and utilities that aren't pre-installed on macOS or included in the Xcode Command Line Tools package. You might as well let Homebrew install Xcode Command Line Tools for you. Use the direct command line installation if you need to reinstall Xcode Command Line Tools (for example, after a macOS upgrade). If you intend to develop software for  macOS, iOS, tvOS, or watchOS, install the full Xcode package that includes the command line tools.
</p>
</details>

<details>
<summary><h2>What is the Xcode Command Line Tools latest version?</h2></summary>
<p>
There is no easy way to check the version number of Xcode Command Line Tools installed on your machine. Instead, check the version of clang by running `clang --version` in the terminal application. The Wikipedia page for <a href="https://en.wikipedia.org/wiki/Xcode">Xcode</a> shows the version number of the latest Xcode release and the corresponding clang version. If you've <a href="/commandlinetools/3.html">installed Xcode Command Line Tools with Homebrew</a>, you can run `brew config`. It will display 'CLT' but actually it is the clang version. As of July 2021, the Xcode latest version is 12.5.1 containing clang version 1205.0.22.11.
</p>
