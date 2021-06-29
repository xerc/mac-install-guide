## Install Brew Mac

How to **install Homebrew** for Mac M1 or Mac Intel. Covers installing Homebrew on macOS Big Sur. Up-to-date and kitchen-tested instructions, with explanations, from the author of the book, _[Learn Ruby on Rails](https://learn-rails.com/)_, for setting up Homebrew on a Mac.

This guide is for beginners as well as experienced developers.  Read on for background and details that are missing from the [official Homebrew site](https://brew.sh/). Plus, it is easier to read than [Homebrew's documentation](https://docs.brew.sh/). But if you're only looking for the install command, here it is (don't type the `$` as it is just a cue to enter a command in the terminal).

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Steps

Here are steps to install Homebrew (details in this complete guide).
- Prepare your Mac.
- Install Homebrew.
- Update the shell configuration (Mac M1 only).
- Install packages.

Jump ahead to the section you need: [Prepare your Mac](/homebrew/1.html), install the [Xcode Command Line Tools](/homebrew/2.html), and then [install Homebrew](/homebrew/3.html). Otherwise, read on for background and explanation.

## Mac M1 (Apple silicon)

Homebrew supports the Mac M1 chip (Apple silicon) beginning with the release of Homebrew 3.0.0 in February 2021. On Apple silicon, Homebrew installs files into the `/opt/homebrew/` folder, which is not part of the default shell `$PATH`. You'll need to configure your shell environment so Homebrew packages are found and take priority over pre-installed tools.

If you have an older Intel Mac, Homebrew installs files into the `/usr/local/` folder, which is already configured for access by the shell with the macOS default `$PATH` environment variable. Mac Intel installation is easier because there's no need to configure your shell environment. Homebrew packages are found automatically. However, the Homebrew team was criticized for using the `/usr/local/` folder because other programs might install software into the folder, overwriting Homebrew packages. With the release of version 3.0.0 for Apple silicon, the Homebrew team responded and changed the default folder, adding an installation step that requires a change to the shell environment. Experts argue that configuring the shell environment is basic knowledge, even though it will be inconvenient for beginners.

## What is Homebrew

[Homebrew](https://brew.sh/) is a package manager for macOS (and Linux, too). It is one of the first tools you'll need to set up a local development environment for programming on a Mac. Use it to install (and remove) software programs for the terminal, or command line. It is like an app store for programming tools (but everything is free). MacOS includes some pre-installed programming languages and command line utilities but most work requires newer versions of languages and tools not provided by Apple. Get what you need with Homebrew. Almost every useful open source program (or "package") is available through Homebrew, with a single tool to install and manage each one. Homebrew's biggest drawback? A cute terminology of kegs, casks, bottles, and other beer-themed terms, explained here.

## Homebrew and version managers

Understand the difference between Homebrew and software version managers. Homebrew is a package manager that adds a single version of a language such as Python or Ruby to the Mac. It can install one (and only one!) version of a language (the latest version). Installing a language with Homebrew is fine for a student or casual user. However, most professional developers will use Homebrew to install a _software version manager_ that can install and switch between multiple versions of a language. Most developers develop and maintain several applications and each may depend on a different language version. If you are working with multiple languages and multiple versions (for example, Ruby and Node), consider using Homebrew to [install Asdf on Mac](/ruby/5.html). If you’re on a team with a complex project environment (for example, Ruby, Node, Redis, and PostgreSQL all in one project), you might be asked to use Docker, which is a container system that sets up multiple development environments (like having multiple computers with different configurations).

## Alternatives to Homebrew

[MacPorts](https://www.macports.org/), [Fink](https://www.finkproject.org/), [pkgin](https://pkgin.net/), and [Nix](https://nixos.org/) are alternatives to Homebrew on macOS. On Linux, developers use [apt-get](https://en.wikipedia.org/wiki/APT_(software)) or Homebrew. On Windows, developers use [Chocolatey](https://chocolatey.org/) to install programs from the [NuGet](https://www.nuget.org/) package library (they also use apt-get under WSL, the Windows Subsystem for Linux).

On the Mac, _MacPorts_ requires more technical skill and requires `sudo` or root access (Homebrew aims to be friendlier and more secure for non-expert users). MacPorts is more independent of macOS, ignoring many of the system libraries and software that are already available in macOS, avoiding dependence on Apple's update schedule (Homebrew relies on macOS system libraries for faster set up). MacPorts is a better choice for a multi-user Mac, should more than one developer be using the same Mac. _Fink_ is the oldest of the Mac package managers and modifies the Linux apt-get package library (as of June 2021, Fink is not yet available for macOS Big Sur). _Pkgin_ installs binaries from the NetBSD (Unix) [pkgsrc](https://www.pkgsrc.org/) repository and requires `sudo` or root access, making it more suitable to a skilled Unix user. Some developers on large teams use the _Nix_ package manager. Nix is very complex but creates fully isolated, reproducible development environments.

## How long does Homebrew take to install

First time users will ask, how long does it take to install Homebrew? On a 2021 Mac M1 Mini, with a 100Mbps Internet connection:
- Homebrew installation takes 1.5 minutes.

It's significantly slower on Mac Intel over a slow Internet connection. However, it should not take more than ten minutes to run the Homebrew installation script. Installing packages can take a few minutes, especially if a pre-built binary is not available and the software package must be compiled during the installation process.

## Homebrew terminology

You'll either love or hate Homebrew's cute beer-brewing theme. Part of using Homebrew is understanding its beer-themed terminology.

<details>
<summary><h2>formulae</h2></summary>
<p>
A Homebrew <em>formula</em> is a Ruby script that controls the installation of a package. Formulae are contributed by people who maintain software packages. You don't need to know how to write a formula to use Homebrew; you just enter the command <code>brew install &lt;formula&gt;</code>. The <a href="https://github.com/Homebrew/homebrew-core">homebrew-core</a> repository contains over 4000 packages. Each formula lists the location of the package's source archive and includes directives to build the software from the archive.
</p>
</details>

<details>
<summary><h2>tap</h2></summary>
<p>
A Homebrew <em>tap</em> is a repository that contains Homebrew formulae used to install packages. The default Tap is on GitHub as <a href="https://github.com/Homebrew/homebrew-core">homebrew-core</a>. The <code>brew tap</code> command allows a developer to use formulae from their own repository without submitting anything for approval by Homebrew.
</p>
</details>

<details>
<summary><h2>keg</h2></summary>
<p>
A Homebrew <em>keg</em> is the folder that contains a specific version of a package that has been installed by Homebrew. The path to the keg contains both the package name and version number, for example <code>/opt/homebrew/Cellar/tree/1.8.0</code>. For most packages, Homebrew creates a <a href="https://en.wikipedia.org/wiki/Symbolic_link">symbolic link</a> ("alias" or symlink) from the keg to the <code>/opt/homebrew/bin/</code> directory so entering the package name as a command will run the installed version from the keg. A few packages are installed "keg-only" which means no symlink is created because the package may conflict with a pre-installed package from Apple. Keg-only packages are usually dependencies needed to install or run other Homebrew packages, avoiding conflicts with macOS system software.
</p>
</details>

<details>
<summary><h2>bottle</h2></summary>
<p>
A Homebrew <em>bottle</em> is a pre-compiled package, sometimes called a "binary." Installation is faster with a pre-compiled package.
</p>
</details>

<details>
<summary><h2>cellar</h2></summary>
<p>
The Homebrew <em>cellar</em> is the directory where Homebrew stores packages. It is the folder <code>/opt/homebrew/</code> on Apple silicon machines and <code>/usr/local/</code> on Mac Intel.
</p>
</details>

<details>
<summary><h2>cask</h2></summary>
<p>
A Homebrew <em>cask</em> is like a keg, but contains macOS GUI applications installed from the command line. Casks are not very popular but provide a mechanism to automate the installation of GUI applications from a script or the command line.
</p>
</details>


<details>
<summary><h2>mxcl</h2></summary>
<p>
Homebrew's mxcl is <a href="https://twitter.com/mxcl">Max Howell</a>, the creator of Homebrew. Not really a term, but good to know.
</p>
</details>


