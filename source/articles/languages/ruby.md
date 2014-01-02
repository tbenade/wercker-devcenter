---
sidebar_current: "languages-ruby"
---

# Ruby

Below are several guides on getting started with Ruby and wercker:

## Guides

Below you'll find several articles on developing Ruby applications with wercker:

* [Getting Started with a Sinatra API](/articles/languages/ruby/getting-started-sinatra-api.html "Getting Started with a Sinatra API ").
* [Getting Started with Rails and Heroku](/articles/languages/ruby/rails-heroku.html "Getting Started with Rails and Heroku").
* [Setting up your Rails4 project](/articles/languages/ruby/settingup-rails4.html "Setting up your Rails4 project").

Wercker has built in support for Ruby and will do some introspection to correctly assess if you are running a Ruby project. You are however able to explicitely define your version.

## Versions

Wercker currently supports Ruby 2.0.0-p353 by default. If you wish to use Ruby 1.9.3 you can do so by specifying this in your `wercker.yml` file:

``` yaml
    box: wercker/ubuntu12.04-ruby1.9.3
```

We have [open-sourced](https://github.com/wercker/box-ubuntu12.04-ruby2.0.0) our box definitions at [GitHub](https://github.com/wercker/box-ubuntu12.04-ruby1.9.3), so feel free to take a peek and create your own.

***
##### note that box definitions are still in progress and subject to change
***

## Common Steps

Through the `wercker.yml` file you are able to define your own build steps. For ruby you will want to execute `bundle install` to install your gems:

``` yaml
    box: wercker/ruby
    build:
      steps:
        - bundle-install
```
In the above example we have specified the default Ruby version (2.0.0-p353) and execute the `bundle install` command.

`Rake` or other commands can be executed through the `script` clause, like so:

``` yaml
    box: wercker/ruby
    build:
      steps:
        - bundle-install
        - script:
            name: rake
            code: bundle exec rake
```
Please note you have to indent your `wercker.yml` correctly.

## Common problems

### Unable to install gems due to `debugger-ruby_core_source` gem

#### Problem

When trying to install Ruby Gems using bundle install, you receive the
following error (version varies):

```
Gem::Installer::ExtensionBuildError: ERROR: Failed to build gem native extension.

    /usr/local/bin/ruby extconf.rb
checking for rb_method_entry_t.called_id in method.h... no
checking for rb_control_frame_t.method_id in method.h... no
checking for rb_method_entry_t.called_id in method.h... no
checking for rb_control_frame_t.method_id in method.h... no
Makefile creation failed
**************************************************************************
No source for ruby-2.0.0-p353 provided with debugger-ruby_core_source gem.
**************************************************************************
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.  You may
need configuration options.
```

#### Solution

Use bundler on your development machine to update the
`debugger-ruby_core_source` gem to it's latest version:

```
bundle update debugger-ruby_core_source
```

#### Details

The `debugger-ruby_core_source` gem is a gem which provides access to the Ruby
headers for other Gems. This is tightly coupled with the Ruby version which you
are using. If you are getting the above error message, then it basicly means
that the `debugger-ruby_core_source` doesn't support the Ruby version you're
using. The `debugger-ruby_core_source` gem supports most major Ruby version. So
you need to make sure you have a supported version and are using the latest
version of `debugger-ruby_core_source`.


-------

<div class="authorCredits">
    <span class="profile-picture">
        <img src="https://secure.gravatar.com/avatar/d4b19718f9748779d7cf18c6303dc17f?d=identicon&s=192" alt="Micha Hernandez van Leuffen"/>
    </span>
    <ul class="authorCredits">

        <!-- author info -->
        <li class="authorCredits__name">
            <h4>Micha Hernandez van Leuffen</h4>
            <em>
                Micha is cofounder and CEO at wercker.
            </em>
        </li>

        <!-- info -->
        <li>
            <a href="http://beta.wercker.com" target="_blank">
                <i class="icon-company"></i> <em>wercker</em>
            </a>
            <a href="http://twitter.com/mies" target="_blank">
                <i class="icon-twitter"></i>
                <em> mies</em>
            </a>
        </li>

    </ul>
</div>

-------
##### last modified: Jan 1, 2013
-------
