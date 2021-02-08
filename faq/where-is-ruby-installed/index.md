## How to find where Ruby is installed?

>> Question: Where is Ruby installed? How to check where Ruby is located.

To find out **where Ruby is installed**, use the `which` command:

```bash
$ which ruby
/usr/bin/ruby
```

If Ruby is not installed, the `which` command will show you Ruby is missing:

```bash
$ which ruby
ruby not found
```

You can use the `which` command with flag `-a` to see if more than one Ruby executable is installed:

```bash
$ which -a ruby
ruby is /Users/daniel/.asdf/shims/ruby
ruby is /usr/bin/ruby
```

The `which` or `which -a` commands may show the Ruby version number in the file path. To be certain what Ruby version you are using, use the `ruby -v` command. See the article [What Ruby Version is Installed?](/faq/what-ruby-version-is-installed/index.html) for more details.

## Use the gem env command

The `gem env` command gives you a full picture of your local Ruby environment, including the Ruby installation directory:

```bash
gem env
RubyGems Environment:
  - RUBYGEMS VERSION: 3.2.7
  - RUBY VERSION: 3.0.0 (2020-12-25 patchlevel 0) [x86_64-darwin19]
  - INSTALLATION DIRECTORY: /Users/daniel/.asdf/installs/ruby/3.0.0/lib/ruby/gems/3.0.0
  - USER INSTALLATION DIRECTORY: /Users/daniel/.gem/ruby/3.0.0
  - RUBY EXECUTABLE: /Users/daniel/.asdf/installs/ruby/3.0.0/bin/ruby
  - GIT EXECUTABLE: /usr/local/bin/git
  - EXECUTABLE DIRECTORY: /Users/daniel/.asdf/installs/ruby/3.0.0/bin
  - SPEC CACHE DIRECTORY: /Users/daniel/.gem/specs
  - SYSTEM CONFIGURATION DIRECTORY: /Users/daniel/.asdf/installs/ruby/3.0.0/etc
  - RUBYGEMS PLATFORMS:
     - ruby
     - x86_64-darwin-19
  - GEM PATHS:
     - /Users/daniel/.asdf/installs/ruby/3.0.0/lib/ruby/gems/3.0.0
     - /Users/daniel/.gem/ruby/3.0.0
  - GEM CONFIGURATION:
     - :update_sources => true
     - :verbose => true
     - :backtrace => false
     - :bulk_threshold => 1000
     - "gem" => "--no-document"
  - REMOTE SOURCES:
     - https://rubygems.org/
  - SHELL PATH:
     - /Users/daniel/.asdf/installs/ruby/3.0.0/bin
     - /Users/daniel/.asdf/shims
     - /usr/local/opt/asdf/bin
     - /usr/local/bin
     - /usr/bin
     - /bin
     - /usr/sbin
     - /sbin
```

This is a typical Ruby installation with the asdf version manager.
