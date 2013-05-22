---
sidebar_current: "werckeryml"
---

# wercker.yml

The `wercker.yml` file allows you to set up your wercker enviroment. This includes the box which is going to be used, any supporting services, steps needed for the  build and steps needed to do the deploy.

***
##### note: wercker.json has been deprecated in favour of wercker.yml but should still be backwards compatible (for the time being)
***


## box

The box section allows you to choose a box which will be used to run the builds and deploys. This item will contain a single reference to the box. The box will be prefixed by the owner and it can be postfixed with a version. If no version is given, then the latest version will be used.

Examples:

    box: wercker/nodejs

Use the latest version of a box called `nodejs` which is owned by the user wercker.

    box: wercker/nodejs@0.0.5

Use the specific version 0.0.5 of a box called `nodejs` which is owned by the user `wercker`.

## services

The services section allow you to specify supporting boxes, like databases or queue servers. This item should contain a array of supporting boxes. The reference will be the same as to a main box. So it will be prefixed and can contain a version.

Example:

    box: wercker/ruby
    services:
        - wercker/mongodb
        - wercker/rabbitmq

This will load two services, `mongodb` and `rabbitmq`, both owned by `wercker` and both using the latest versions.

See [services](/articles/services/) for more information.

## build

This build section will contain the all configuration regarding the build pipeline.

### steps

The steps section will contain all steps which will used during a build. A step in it's simplest form is the name of a buildstep. It can optionally be postfixed with the version of the step.

Example:

    build:
      steps:
        - npm-install@1.0.5
        - npm-test

This build will be run with two steps, `npm install` and `npm test`, where `npm install` will be fixed on version 1.0.5 and `npm test` will use the latest version.

It's also possible to pass options to a step. Note that some options are optional and some are required. Consult the readme of the step to see the available steps.

Example:

    build:
      steps:
        - npm-install@1.0.5:
            package: jshint
            strict-ssl: false
        - npm-test

This will pass two options to the `npm install` step, `package` and `strict-ssl`.

# Example wercker.yml

```yaml
box: wercker/nodejs@0.0.1
services:
  - wercker/mongodb@0.0.1
  - wercker/rabbitmq
build:
  steps:
    - npm-install@1.0.5:
        strict-ssl: false
    - jshint:
        use_strict: true
        trailing_whitespace: false
    # A comment
    -  npm-test
    -  script:
        name: some simple test!
        code: |-
          echo "line 1"
          echo "line 2"
deploy:
  steps:
    - compass-compile@1.0:
        version: 4.1.2
        output: compressed
    - requirejs-build:
        build: public/js/main.build.js
```

-------

<div class="authorCredits">
    <span class="profile-picture">
        <img src="https://secure.gravatar.com/avatar/dff7a3e4eadab56aa69a24569cb61e98?d=identicon&s=192" alt="Benno van den Berg"/>
    </span>
    <ul class="authorCredits">

        <!-- author info -->
        <li class="authorCredits__name">
            <h4>Benno van den Berg</h4>
            <em>
                Benno is engineer at wercker.
            </em>
        </li>

        <!-- info -->
        <li>
            <a href="http://beta.wercker.com" target="_blank">
                <i class="icon-company"></i> <em>wercker</em>
            </a>
            <a href="https://twitter.com/hatchan_kitsune" target="_blank">
                <i class="icon-twitter"></i>
                <em> hatchan_kitsune</em>
            </a>
        </li>

    </ul>
</div>

-------
##### last modified on: May 8, 2013
-------
