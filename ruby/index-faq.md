<h2>FAQ</h2>

<details>
<summary><h2>What is Ruby on Mac?</h2></summary>
<p>
Ruby is a general-purpose programming language used by software developers for large web projects and small utility scripts. It is promoted as “optimized for programmer happiness” and, for that reason, stands out mong the top dozen most popular programming languages. Created in 1996 by "Matz" (Yukihiro Matsumoto), Ruby gained popularity in 2005 with the introduction of the Ruby on Rails web application development framework. A <a href="/faq/do-not-use-mac-system-ruby/index.html">"system" Ruby</a> comes pre-installed on macOS to support scripting and casual utility programming.
</p>
</details>

<details>
<summary><h2>What (and where) is the macOS Terminal?</h2></summary>
<p>
Every Mac comes with a pre-installed Terminal application. Use it to run software (or software commands) without a graphical interface, using the <em>command line interface</em>. The Terminal application or <em>console</em> gives us access to the Unix command line, or <em>shell</em>. Look in the `Applications/Utilities/` folder for the Terminal application or click the Spotlight icon in the menu bar and type "terminal." If you see "terminal," double-click the search result to launch the terminal. See <a href="/ruby/14.html">Finding and Using the macOS Terminal</a>.
</p>
</details>

<details>
<summary><h2>What is the current stable Ruby version?</h2></summary>
<p>
Ruby 3.0.1 is the Ruby latest version (3.0 was released Dec 25, 2020). Visit the <a href="https://www.ruby-lang.org/en/downloads/releases/">Ruby releases page</a> at the official Ruby website to check for a newer version. Each release has a link to a release notes page which details changes and security fixes. Note that MacOS users seldom download Ruby to build from source. Instead, Mac users <a href="/ruby/13.html">install the latest Ruby with Homebrew</a> or get the latest Ruby version with the installation utilities that accompany a version manager such as asdf, chruby, rbenv, or rvm.
</p>
</details>

<details>
<summary><h2>What version of Ruby should I use?</h2></summary>
<p>
Use the latest version of Ruby for software development (except of course if you are maintaining software built with an older Ruby version, in which case you should try to upgrade the software). For running scripts, you can use the <a href="/faq/do-not-use-mac-system-ruby/index.html">"system" Ruby</a> comes pre-installed on macOS. Ruby 3.0.1 is the Ruby latest version (3.0 was released Dec 25, 2020). Visit the <a href="https://www.ruby-lang.org/en/downloads/releases/">Ruby releases page</a> at the official Ruby website to check for a newer version. Mac users <a href="/ruby/13.html">install the latest Ruby with Homebrew</a> or get the latest Ruby version with the installation utilities that accompany a version manager such as asdf, chruby, rbenv, or rvm.
</p>
</details>

<details>
<summary><h2>Where is the Ruby download?</h2></summary>
<p>
Where can I download Ruby for Mac? The official Ruby organization maintains a <a href="https://www.ruby-lang.org/">website</a> with a downloads page containing source code for several Ruby versions that can be compiled using Unix tools. But Ruby is popular and the latest precompiled versions are available for older Intel-based Macs and the newest M1 Macs. MacOS users seldom download Ruby to build from source. Instead, Mac users <a href="/ruby/13.html">install the latest Ruby with Homebrew</a> or use the installation utilities that accompany a version manager such as asdf, chruby, rbenv, or rvm (see a discussion above for the best version manager for Ruby).
</p>
</details>

<details>
<summary><h2>Is Ruby Installed on a Mac?</h2></summary>
<p>
A <a href="/faq/do-not-use-mac-system-ruby/index.html">"system" Ruby</a> comes pre-installed on macOS to support scripting and casual utility programming. MacOS Big Sur and Catalina include an older Ruby 2.6.3 (Ruby 3.0.1 is the newest version). To check if Ruby is installed and see its version, enter `ruby -v` in the terminal application. For details, see the article <a href="/faq/is-ruby-installed-mac/index.html">Is Ruby Installed on my Mac?</a> Most developers use a software version manager to install a newer Ruby version for developing software on a Mac.
</p>
</details>

<details>
<summary><h2>How to check the Ruby version on Mac?</h2></summary>
<p>
Enter `ruby -v` in the terminal application to see the Ruby version on macOS. Entering the command `which -a ruby` will show you if more than one Ruby executable is installed. If Ruby is installed, the `gem env` command gives you a full picture of your local Ruby environment, including the Ruby version. See the article <a href="/faq/check-ruby-version/index.html">Check Ruby version on Mac</a> for details.
</p>
</details>

<details>
<summary><h2>How to test if Ruby is installed on Mac?</h2></summary>
<p>
If Ruby is installed on a Mac, entering `ruby -v` in the terminal will show the version. Entering the command `which -a ruby` will show if more than one Ruby version is installed. See the article <a href="/faq/check-ruby-version/index.html">Check Ruby version on Mac</a> for details.
</p>
</details>

<details>
<summary><h2>Where is Ruby installed on Mac?</h2></summary>
<p>
To find out where Ruby is installed on macOS, use the `which ruby` command in the terminal.  Entering the command `which -a ruby` will show you if more than one Ruby version is installed. If Ruby is not installed, the `which ruby` command will show you Ruby is not found. See the article <a href="/faq/where-is-ruby-installed/index.html">Where is Ruby Installed?</a> for details.
</p>
</details>

<details>
<summary><h2>Can I use the Mac system Ruby?</h2></summary>
<p>
MacOS comes with a "system Ruby" pre-installed. It's fine to use the system Ruby for running Ruby applications such as sysadmin scripts but you should not use it when you are developing projects in Ruby. Instead, you should <a href="/ruby/13.html">Install Ruby with Homebrew</a> or use a version manager such as asdf, chruby, rbenv, or rvm (see a discussion above for the best version manager for Ruby). See the article <a href="/faq/do-not-use-mac-system-ruby/index.html">Do Not Use the MacOS System Ruby</a> for reasons. Basically, the system Ruby is there for macOS, not for you.
</p>
</details>

<details>
<summary><h2>How to update the Ruby version on Mac?</h2></summary>
<p>
MacOS comes with a "system Ruby" pre-installed (it is Ruby 2.6.3 version on Big Sur and Catalina). If you need a newer Ruby version (the latest is Ruby 3.0.1), don't upgrade the system Ruby. Leave it alone (see <a href="/faq/do-not-use-mac-system-ruby/index.html">Do Not Use the MacOS System Ruby</a> for why; basically, the system Ruby is there for macOS, not for you). Instead, <a href="/ruby/13.html">Install Ruby with Homebrew</a> or use a software version manager such as asdf (see <a href="/ruby/6.html">Install Ruby with asdf</a>).
</p>
</details>

<details>
<summary><h2>How long does it take to install Ruby on Mac?</h2></summary>
<p>
MacOS Big Sur and Catalina already have the older Ruby 2.6.3 version available as the pre-installed "system" Ruby (Ruby 3.0 is the newest version) so there is no need to install. Enter `ruby -v` in the terminal application to see the version number. Installing a newer Ruby version takes less than fifteen minutes with either Homebrew or a software version manager such as asdf or chruby. Preparing your computer may take longer but in any case, reading this installation guide (so you know what you are doing) may take longer than the preparation or actual installation.
</p>
</details>

<details>
<summary><h2>How do I install Ruby on macOS Catalina?</h2></summary>
<p>
Installing Ruby on macOS Big Sur (the latest macOS) or Catalina (the previous macOS) is the same. You will install Ruby using the Terminal application. There's no need to download and compile from source. Instead, prepare your computer, install Homebrew, install an (optional) version manager, and install Ruby.
</p>
</details>

<details>
<summary><h2>How do I install Ruby on macOS Big Sur?</h2></summary>
<p>
Installing Ruby on macOS Big Sur (the latest macOS) or Catalina (the previous macOS) is the same. You will install Ruby using the Terminal application. There's no need to download and compile from source. Instead, prepare your computer, install Homebrew, install an (optional) version manager, and install Ruby.
</p>
</details>

<details>
<summary><h2>How to install Ruby on Mac with Terminal?</h2></summary>
<p>
You can install Ruby on Mac from the command line using the Terminal application. See instructions to <a href="/ruby/13.html">Install Ruby with Homebrew</a> or use a software version manager such as asdf (see <a href="/ruby/6.html">Install Ruby with asdf</a>). There is no need to download the Ruby source code and compile as Homebrew and software version managers provide precompiled Ruby executables for macOS.
</p>
</details>

<details>
<summary><h2>Can you install Ruby on Mac M1 (Apple Silicon)?</h2></summary>
<p>
Ruby 3.0.1 (the latest version) runs great on macOS with the M1 chip (Apple Silicon). As of Feb 5, 2021, Homebrew 3.0.0 supports Apple Silicon natively and you can <a href="/ruby/13.html">Install Ruby with Homebrew</a>. Or use a software version manager such as asdf (see <a href="/ruby/6.html">Install Ruby with asdf</a>). There is no need to download the Ruby source code and compile as Homebrew or software version managers install Ruby for you.
</p>
</details>

<details>
<summary><h2>How to brew install Ruby with Mac Homebrew?</h2></summary>
<p>
See instructions to <a href="/ruby/13.html">Install Ruby with Homebrew</a>. First <a href="/ruby/3.html">Install Homebrew</a> (the Homebrew home page provides a simple script to run from the command line using the Terminal application). Homebrew will install Xcode Command Line Tools if necessary. Then <a href="/ruby/13.html">Install Ruby with Homebrew</a> using `brew install ruby`. You'll need to configure the PATH environment variable in your `.zshrc` file to set the Homebrew-installed Ruby to a higher priority than the system Ruby (and add the directory used for Ruby gems). Installing Ruby with Homebrew is convenient and appropriate if you are a casual user and won't be using Ruby frequently. However, it will be difficult to switch between multiple Ruby versions. Also, Homebrew may update Ruby to a new version when you upgrade other Homebrew packages. For these reasons, most developers use a software version manager such as asdf, chruby, rbenv, or rvm to develop applications with Ruby. Asdf is good for managing multiple languages. <a href="/ruby/6.html">Install Ruby with asdf</a> if you are developing Rails web applications (which require Ruby, Node, and Yarn) or if you are using multiple languages such as Ruby, Node, and Python.
</p>
</details>

<details>
<summary><h2>How to switch the Homebrew Ruby version on Mac?</h2></summary>
<p>
You can force Homebrew to replace an earlier version of Ruby with `brew upgrade ruby`. However, you won't be able to conveniently switch back from the newest Ruby to an earlier Ruby. Instead, to work with multiple versions of Ruby, most developers use a software version manager such as asdf, chruby, rbenv, or rvm to switch among Ruby versions. Asdf is good for managing multiple languages. <a href="/ruby/6.html">Install Ruby with asdf</a> if you are developing Rails web applications (which require Ruby, Node, and Yarn) or if you are using multiple languages such as Ruby, Node, and Python.
</p>
</details>

<details>
<summary><h2>What is the best Ruby version manager on Mac?</h2></summary>
<p>
A Ruby version manager will allow you to install a specific Ruby version and switch among Ruby versions. With a Ruby version manager you can install older versions of Ruby so you can work on applications that use different versions of Ruby. Most Ruby developers set up their development environment with a version manager such as asdf, chruby, rbenv, or rvm. Asdf is good for managing multiple languages. <a href="/ruby/6.html">Install Ruby with asdf</a> if you are developing Rails web applications (which require Ruby, Node, and Yarn) or if you are using multiple languages such as Ruby, Node, and Python. <a href="/ruby/12.html">Install Ruby with chruby</a> or rbenv if you are just managing Ruby versions (chruby is simpler than rbenv). Some developers use rvm, but rvm has complexity and features that are superfluous with the latest versions of Ruby (we longer need to manage gemsets because we have Bundler with Ruby). Some developers use Docker (or Nix) for teams with complex project environments (for example, Ruby, Node, Redis, and PostgreSQL all in one project) but Docker adds complexity. Finally, simply <a href="/ruby/13.html">install Ruby with Homebrew</a> if you are building only one project with Ruby (for example, if you are a student learning Ruby).
</p>
</details>

<details>
<summary><h2>What are rvm, rbenv, chruby, and asdf?</h2></summary>
<p>
Asdf, chruby, rbenv, or rvm are software version managers that allow you to switch among Ruby versions so you can work on applications that use different versions of Ruby. Asdf manages multiple languages. Chruby is the lightest and simplest of Ruby version managers. Rbenv is popular but a little complicated. RVM is the oldest Ruby version manager with some extra (and now superfluous) features.
</p>
</details>

<details>
<summary><h2>Which is best? rvm vs rbenv vs chruby vs asdf?</h2></summary>
<p>
Version managers such as asdf, chruby, rbenv, or rvm allow you to switch among Ruby versions so you can work on applications that use different versions of Ruby. Asdf is good for managing multiple languages. <a href="/ruby/6.html">Install Ruby with asdf</a> if you are developing Rails web applications (which require Ruby, Node, and Yarn) or if you are using multiple languages such as Ruby, Node, and Python. <a href="/ruby/12.html">Install Ruby with chruby</a> or rbenv if you are just managing Ruby versions (chruby is simpler). Some developers use rvm, but rvm has complexity and features that are superfluous with the latest versions of Ruby (we longer need to manage gemsets because we have Bundler with Ruby). Some developers use Docker (or Nix) for teams with complex project environments (for example, Ruby, Node, Redis, and PostgreSQL all in one project) but Docker adds complexity. Finally, simply <a href="/ruby/13.html">install Ruby with Homebrew</a> if you are building only one project with Ruby (for example, if you are a student learning Ruby).
</p>
</details>

<details>
<summary><h2>Should you use a Ruby installer for Mac?</h2></summary>
<p>
There's no need to download Ruby source code and compile for macOS because Homebrew and software version managers such as asdf, chruby, rbenv, or rvm provide Ruby installation utilities. If you are building only one project with Ruby (for example, if you are a student learning Ruby), <a href="/ruby/13.html">install Ruby with Homebrew</a>. Asdf is good for managing multiple languages. <a href="/ruby/6.html">Install Ruby with asdf</a> if you are developing Rails web applications (which require Ruby, Node, and Yarn) or if you are using multiple languages such as Ruby, Node, and Python. <a href="/ruby/12.html">Install Ruby with chruby</a> or rbenv if you need to manage only Ruby versions (chruby is simpler than rbenv). Asdf and rbenv use the `ruby-build` utility to install Ruby. Chruby uses `ruby-install`. In the past, developers used RailsInstaller (from EngineYard) or Bitnami's Ruby Stack installer to install Ruby on macOS. These utilities are "Ruby installers" but the Ruby versions are often out-of-date and installed into non-standard directories. Use the installers that come with a version manager or use Homebrew.
</p>
</details>

<details>
<summary><h2>How to brew install asdf with Mac Homebrew?</h2></summary>
<p>
Use asdf to install and switch among versions of multiple languages, including Ruby and Node. First, you must use Homebrew to install dependencies required by asdf (including the gnupg package if you need to install Node). You can install asdf using Homebrew. Then you must add asdf to the `.zshrc` file to configure your shell to use asdf. See complete instructions to <a href="/ruby/5.html">install asdf with Mac Homebrew</a> and <a href="/ruby/6.html">install Ruby with asdf</a>.
</p>
</details>

<details>
<summary><h2>How to install Ruby with asdf on Mac?</h2></summary>
<p>
See complete instructions to <a href="/ruby/5.html">install asdf with Mac Homebrew</a>. Then follow instructions to <a href="/ruby/6.html">install Ruby with asdf</a>. You will need to install the asdf plugin for Ruby, `asdf plugin add ruby`. Then install the latest version of Ruby, `asdf install ruby latest`. Set the default version of Ruby in your home `~/.tool-versions` file, for example with the command `asdf global ruby 3.0.0`.
</p>
</details>

<details>
<summary><h2>How to switch Ruby version using asdf on Mac?</h2></summary>
<p>
Asdf is a useful version manager for Ruby (it supports multiple languages, including Python and Node as well as Ruby). See instructions to <a href="/ruby/5.html">install asdf with Mac Homebrew</a> and <a href="/ruby/6.html">install Ruby with asdf</a>. Be sure to install the asdf plugin for Ruby, `asdf plugin add ruby`. You can see all the versions of Ruby that are available with `asdf list all ruby` and install the versions you need. Specify a default version of Ruby in your home `~/.tool-versions` file. You can set the `~/.tool-versions` file with a command `asdf global ruby 3.0.0` (for example). You can also create a `.tool-versions` file within any project directory with the command `asdf local ruby 3.0.0`. Changing into the directory will automatically switch Ruby and any other languages you specify. Finally, you can switch Ruby versions from the command line with `asdf shell ruby 3.0.0` for the current shell session only.
</p>
</details>

<details>
<summary><h2>Where is the file asdfrc on Mac?</h2></summary>
<p>
The `.asdfrc` file in your home directory configures asdf. Adding `legacy_version_file = yes` to the  `.asdfrc` file lets you use a `.ruby-version` file in any project directory to specify a Ruby version (you can also use a `.tool-versions` file).
</p>
</details>

<details>
<summary><h2>How to uninstall Ruby with asdf on Mac?</h2></summary>
<p>
Any version of Ruby installed with asdf can be uninstalled with `asdf uninstall ruby 3.0.0` (for example). See <a href="/ruby/9.html">Uninstall Ruby</a>.
</p>
</details>

<details>
<summary><h2>Should you install Ruby with rvm on a Mac?</h2></summary>
<p>
The Ruby version Manager (rvm) has been a popular utility for installing and switching among Ruby versions for many years. It is still reliable and maintained. However, one of its most important features, the ability to create and switch among gemsets, is no longer needed since Bundler now ships with Ruby. For that reason, many Ruby developers now use chruby as a version manager in conjunction with the `ruby-install` utility (chruby is simpler than rvm and rbenv, the other popular Ruby version manager). If you are just switching among Ruby versions, try chruby. See <a href="/ruby/12.html">Install Ruby with chruby</a>. If you want to switch among versions of multiple languages, try asdf. See instructions to <a href="/ruby/5.html">install asdf with Mac Homebrew</a> and <a href="/ruby/6.html">install Ruby with asdf</a>. Asdf is popular among Rails developers (who must use Ruby, Node, and Yarn).
</p>
</details>

<details>
<summary><h2>Should you install Ruby with rbenv on a Mac?</h2></summary>
<p>
Rbenv has been a popular utility for installing and switching among Ruby versions for many years. However, many Ruby developers now use chruby as a version manager in conjunction with the `ruby-install` utility (chruby is simpler than rbenv and rvm, the other popular Ruby version manager). If you are just switching among Ruby versions, try chruby. See <a href="/ruby/12.html">Install Ruby with chruby</a>. If you want to switch among versions of multiple languages, try asdf. See instructions to <a href="/ruby/5.html">install asdf with Mac Homebrew</a> and <a href="/ruby/6.html">install Ruby with asdf</a>. Asdf is popular among Rails developers (who must use Ruby, Node, and Yarn).
</p>
</details>

<details>
<summary><h2>Should you install Ruby with chruby on a Mac?</h2></summary>
<p>
Chruby is a good version manager for switching among Ruby versions. It is simpler than rbenv and rvm, the other popular Ruby version managers. If you are just switching among Ruby versions, you can <a href="/ruby/12.html">Install Ruby with chruby</a>. If you want to switch among versions of multiple languages, try asdf. See instructions to <a href="/ruby/5.html">install asdf with Mac Homebrew</a> and <a href="/ruby/6.html">install Ruby with asdf</a>. Asdf is popular among Rails developers (who must use Ruby, Node, and Yarn).
</p>
</details>

<details>
<summary><h2>How to change the Ruby version with rbenv?</h2></summary>
<p>
Rbenv is a popular utility for switching among Ruby versions. You can specify a default version of Ruby in your home `~/.ruby-version` file with a command `rbenv global 3.0.0` (for example). You can also create a `.ruby-version` file within any project directory with the command `rbenv local 3.0.0`. Changing into the directory will automatically switch Ruby. Finally, you can switch Ruby versions from the command line with `rbenv shell 3.0.0` for the current shell session only. If you want to switch among versions of multiple languages, try asdf. See instructions to <a href="/ruby/5.html">install asdf with Mac Homebrew</a> and <a href="/ruby/6.html">install Ruby with asdf</a>. Asdf is popular among Rails developers (who must use Ruby, Node, and Yarn).
</p>
</details>

<details>
<summary><h2>How to uninstall Ruby on Mac?</h2></summary>
<p>
How you uninstall Ruby on Mac will depend on how Ruby was installed. Entering the command `which -a ruby` will show you if more than one Ruby executable is installed. If you see `/usr/bin/ruby`, it is the <a href="/faq/do-not-use-mac-system-ruby/index.html">"system" Ruby</a> which comes pre-installed on macOS to support scripting. Don't uninstall the system Ruby as it is there for macOS, not you (it is not advisable to completely remove Ruby from your Mac). If Ruby was installed by Homebrew, you'll see `/usr/local/bin/ruby` (on Intel silicon) or  `/opt/homebrew/bin/ruby` (on Apple silicon). If Ruby was installed with rvm, it will be in `~/.rvm/rubies/` by default. If Ruby was installed with rbenv (actually `ruby-build`), it will be in `~/.rbenv/versions/` by default. If Ruby was installed with chruby (actually `ruby-install`), it will be in `~/rubies/` by default. See <a href="/ruby/9.html">Uninstall Ruby</a> for instructions to uninstall Ruby.
</p>
</details>

<details>
<summary><h2>How to brew uninstall Ruby with Mac Homebrew?</h2></summary>
<p>
Entering the command `which -a ruby` will show you if more than one Ruby executable is installed. If Ruby was installed by Homebrew, you'll see `/usr/local/bin/ruby` (on Intel silicon) or  `/opt/homebrew/bin/ruby` (on Apple silicon). To uninstall a Homebrew Ruby, use the command `brew uninstall ruby`.  The `brew cleanup` command will remove outdated package versions. There is no command to uninstall a specific version. See <a href="/ruby/9.html">Uninstall Ruby</a>.
</p>
</details>

<details>
<summary><h2>How to change the Ruby version on Mac?</h2></summary>
<p>
Changing the Ruby version on macOS depends on how it was installed. See the article <a href="/faq/check-ruby-version/index.html">Check Ruby version on Mac</a> to find how it was installed. Don't try to change the <a href="/faq/do-not-use-mac-system-ruby/index.html">"system" Ruby</a> as it is there for macOS, not you. It's best to install a software version manager if you plan to switch among Ruby versions. Or you can use Homebrew to install the latest Ruby version if you don't plan to switch regularly.
</p>
</details>

<details>
<summary><h2>How to downgrade Ruby on Mac?</h2></summary>
<p>
Downgrading the Ruby version on macOS depends on how you installed Ruby. Did you use Homebrew or a version manager like asdf chruby, rbenv, or rvm? See <a href="/faq/check-ruby-version/index.html">Check Ruby version on Mac</a> to check. If you're using the <a href="/faq/do-not-use-mac-system-ruby/index.html">"system" Ruby</a> don't uninstall it as it is there for macOS, not you. If you installed Ruby with Homebrew, it's best to install a software version manager so you can switch among Ruby versions. Asdf is good for managing multiple languages. <a href="/ruby/6.html">Install Ruby with asdf</a> if you are developing Rails web applications (which require Ruby, Node, and Yarn) or if you are using multiple languages such as Ruby, Node, and Python. <a href="/ruby/12.html">Install Ruby with chruby</a>, rbenv, or rvm if you need to manage only Ruby versions (chruby is simpler than rbenv or rvm). If you installed Ruby with a version manager, you can switch among versions. See <a href="/faq/downgrade-ruby/index.html">Downgrade Ruby on Mac</a> for details.
</p>
</details>

<details>
<summary><h2>Where is the Ruby on Rails installation guide?</h2></summary>
<p>
If you intend to develop Rails web applications, you should see the complete guide to <a href="https://learn-rails.com/install-rails-mac/index.html">Install Rails on Mac</a>. Rails requires installing Node and Yarn as well as Ruby so the guide will show how to <a href="/ruby/6.html">Install Ruby with asdf</a> so you can keep current with multiple language versions.
</p>
</details>
