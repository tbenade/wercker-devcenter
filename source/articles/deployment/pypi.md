---
sidebar_current: "deployment-pypi"
---


# Deploying to PyPi

In this article we will showcase how you can deploy your application, in this case a library, to a repository.

## Introduction
Wercker comes with a command line interface (CLI) that is written in Python. See the section on the [CLI](/articles/cli/intro.html) for more information. Briefly, you can install this CLI via the `pip` package manager:

    $ pip install wercker

Pip fetches the wercker CLI from [PyPI](https://pypi.python.org/), the Python package repository. Each time we update the CLI we want to be able to deploy it to the PyPI index automatically.
You can imagine the same scenario for other libraries or projects that you want to deploy to platforms such as [RubyGems](http://rubygems.org/) or [NPM](http://npmjs.org).

## Preparations

For this tutorial we assumes a few things:

* you have an account on pypi. You can register at [https://pypi.python.org/pypi?%3Aaction=register_form](https://pypi.python.org/pypi?%3Aaction=register_form)
* a tool/library you want to push to pypi. More information on what you need for pypi can be found in the [he Hitchhiker’s Guide to Packaging](http://guide.python-distribute.org/index.html)
* your code is already on wercker (i.e. you have already run `wercker create`) See [getting started with the wercker CLI](/articles/gettingstarted/cli.html) for more information on adding your application to wercker.

## Creating your wercker.json file

Wercker manages a any steps it needs to execute through a simple javascript-based DSL file called `wercker.json`. For more information see the wercker.json devcenter article.

	{
	    "deploy": [
	        "./deploy.sh"
	    ]
	}

We have defined a single directive in this `wercker.json` file. After a deploy is triggered, the `deploy.sh` script will be executed.

## Creating your deploy script.

We are now ready to create our actual deploy script that we submit the wercker CLI to PyPI. The method for submitting packages to is detailed on the PyPI [documentation site](http://docs.python.org/3/distutils/packageindex.html). Suffice it to say that the upload is executed through the `python setup.py sdist upload` command.

	echo "[server-login]" >> ~/.pypirc
	echo "username:" $PYPI_USER >> ~/.pypirc
	echo "password:" $PYPI_PASSWORD >> ~/.pypirc
	python setup.py sdist upload

What is more interesting in this deploy script is the usage of environment variables. The `python setup.py sdist upload` command expects a `.pyirc` file in your `$HOME` folder that contains your PyPI username and password. Within wercker you ara able to define these environment variables for a deploy target.

## Add a deploy target.

Go to [wercker](https://app.wercker.com) and add a custom deploy target to your application. Name it pypi and add the two environment varaibles Now there are two environment variables we want to add, PYPI_USER and PYPI_PASSWORD. We may want to check the "hidden from log" checkbox, since it is not relevant to see this information in our deploy log.

That's all, you can now deploy your succesful builds by running `wercker deploy`.

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
            <a href="http://twitter.com/flenter" target="_blank">
                <i class="icon-twitter"></i>
                <em> flenter</em>
            </a>
        </li>

    </ul>
</div>

-------
##### April 19, 2013
-------