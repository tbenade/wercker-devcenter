---
sidebar_current: "languages-python"
---

# Python

Wercker supports Python out of the box. You can even [deploy](/articles/deployment/pypi.html) your libraries to [PyPI](http://pypi.python.org).

For Python projects the default [wercker.yml](/articles/wercker.yml)
file is the following:

    box: wercker/python
    # Build definition
    build:
      # The steps that will be executed on build
      steps:
        # A step that executes `pip install` command
        - pip-install

        # A custom script step, name value is used in the UI
        # and the code value contains the command that get executed
        - script:
            name: echo python information
            code: |
              echo "python version $(python --version) running"
              echo "pip version $(pip --version) running"

At the top you see the 'box' definition that states we want the 'wercker/python' box. This box includes Python version 2.7.3. If you want to run any other version of Python feel free to fork this [box definition](https://github.com/wercker/box-python).

Next, there is a 'build' clause, this defines your build pipeline on wercker. There are two types of build steps:

#### predefined buildsteps
Predefined buildsteps such as pip-install in the wercker.yml above. This command wraps the `pip install -r requirements.txt' command.

#### custom buildsteps
Custom build steps, which are basically bash scripts defined via the 'script' clause, requiring a 'name' and 'code' section. In the example file above we created a custom build step called 'echo python information' that echos the python and pip versions back to us.

See the [wercker.yml section](/articles/wercker.yml) for more information.

### Tutorials

Below you will find several articles on getting started with Python on wercker:

* [Getting Started with a Flask API](/articles/languages/python/flask.html "Getting Started with a Flask API ").


-------

<div class="authorCredits">
    <span class="profile-picture">
        <img src="https://secure.gravatar.com/avatar/7d9ef3d3f6911e6e4f9c51f6d99c48f8?d=identicon&s=192" alt="Jacco Flenter"/>
    </span>
    <ul class="authorCredits">

        <!-- author info -->
        <li class="authorCredits__name">
            <h4>Jacco Flenter</h4>
            <em>
                Jacco is an interaction engineer at wercker.
            </em>
        </li>

        <!-- info -->
        <li>
            <a href="http://beta.wercker.com" target="_blank">
                <i class="icon-company"></i> <em>wercker</em>
            </a>
            <a href="http://twitter.com/jflenter" target="_blank">
                <i class="icon-twitter"></i>
                <em> flenter</em>
            </a>
        </li>

    </ul>
</div>

-------
##### last modified on: April 19, 2013
-------
