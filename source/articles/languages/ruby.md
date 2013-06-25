---
sidebar_current: "languages-ruby"
---

# Ruby

Below several guides to getting started with Ruby and wercker:

## Guides

Below you'll find several articles on developer Ruby applications with wercker:

* [Getting Started with a Sinatra API](/articles/languages/ruby/getting-started-sinatra-api.html "Getting Started with a Sinatra API ").
* [Getting Started with Rails and Heroku](/articles/languages/ruby/rails-heroku.html "Getting Started with Rails and Heroku").

Wercker has built in support for Ruby and will do some introspection to correctly assess if you are running a Ruby project. You are however able to explicitely define your version.

## Versions

Wercker currently supports Ruby 1.9.3-p429 by default. If you wish to use Ruby 2.0 you can do so by specifying this in your `wercker.yml` file:

``` yaml
    box: wercker/ubuntu12.04-ruby2.0.0
```

We have [open-sourced](https://github.com/wercker/box-ubuntu12.04-ruby1.9.3) our box definitions at [GitHub](https://github.com/wercker/box-ubuntu12.04-ruby2.0.0), so feel free to take a peek and create your own.

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
In the above example we have speficied the default Ruby version (1.9.3-p429) and execute the `bundle install` command.

`Rake` or other commands can be executed through the `script` clause, of which you can see an example below:

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
##### last modified on: June 25, 2013
-------