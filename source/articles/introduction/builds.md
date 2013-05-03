---
sidebar_current: "introduction-builds"
---

# Builds

A build is an execution run on wercker. This can encompass your unit tests but also any other steps such as minifying javascript, compass compiliation, installing dependencies and packaging your code, thus readying it for deployment. Builds are triggered through a `git push` to your version control platform, such as GitHub and Bitbucket.

-------

### Buildsteps

Wercker receives a notification through a [webhook](https://help.github.com/articles/post-receive-hooks) that new code has been pushed. Though the number of build steps varies per programming environment and type of project, all projects have several buildsteps in common:

***
##### 1. get code
***
Wercker retrieves your repository from you version control system and clones it into a sandboxed environment.

***
##### 2. setup environment
***
Wercker detects the programming language of your application and sets up the correct environment. Wercker tries to determine which programming language is used. When no language can be determined, it defaults to "blank", a simple sandbox. In [wercker.json](/articles/werckerjson/intro.html) you can use `lang` to override the programming language. If you have any `services` defined such as MongoDB or Redis these are also created in their own sandboxes. See the [services](/articles/services/intro.html) for more information.

***
##### 3. environment variables
***
If you have defined a service such as a database, you will need environment variables to connect to these services. In the `environment variables` build step these are declared.

***
##### 4. platform
***
In the platform step, the programming environment is bootstrapped. For Ruby this means rbenv, for Python virtualenv and for Node.js nodeenv. The default version of the programming language is used. You can use version in [wercker.json](/articles/werckerjson/intro.html) to override this version number.

***
##### 5. Dependencies
***
This buildstep installs the depencies of your project. For Ruby this means bundle install, for Python pip install -r requirements.txt, for Node.js npm install and for blank make

***
##### 6. Package
***
If all steps are successful, the resulting folder is packaged to a zip file, to be used later in the deployment process.

### Adding your own Buildsteps

By editing the `wercker.json` file you are able to define your own build steps. Below you see a `custom step` declaration that executes a [compass](http://compass-style.org) compilation of [sass](http://sass-lang.com/) assets.

    {
    "custom steps" : {
        "compass compile": [
          "sudo gem install compass",
          "sudo gem install zurb-foundation -v 4.1.2 --no-rdoc --no-ri",
          "compass compile -s compressed"
        ],
    }

***
See the [section](/articles/werckerjson/intro.html) on `wercker.json` for more information.


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
##### last modified on: April 19, 2013
-------
