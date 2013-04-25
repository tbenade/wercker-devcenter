---
sidebar_current: "deployment-pypi"
---


# Deploying to PyPi

In this article we will showcase how you can deploy your application, in this case a library, to a repository.

## Introduction
Wercker comes with a command line interface (CLI) that is written in Python. You can install this CLI via the `pip` package manager:

    $ pip install wercker

Pip fetches the wercker CLI from [PyPI](https://pypi.python.org/), the Python package repository. Each time we update the CLI we want to be able to deploy it to the PyPI index automatically.
You can imagine the same scenarion for other libraries or projects that you want to deploy to platforms such as [RubyGems](http://rubygems.org/) or [NPM](http://npmjs.org).

## Creating your wercker.json file

Wercker manages a any steps it needs to execute through a simple javascript-based DSL file called `wercker.json`. For more information see the wercker.json devcenter article.

	{
	    "custom steps" : {
	        "install test dependencies": [
	            "pip install coverage",
	            "pip install httpretty",
	            "pip install mock",
	            "pip install pep8"
	        ],
	        "pep8": "pep8 .",
	        "unittest": [
	            "coverage run  --timid --source=. -m unittest discover -v",
	            "coverage report -m --omit=*/tests/*,setup*"
	        ]
	    },
	    "package": false,
	    "deploy": [
	        "./deploy.sh"
	    ]
	}

We have defined five steps in this `wercker.json` file. First, we install any Python dependencies we need for unit testing but which we do not want to include in our `requirements.txt` as these are not part of our core application. Second and third we run the [PEP8](http://www.python.org/dev/peps/pep-0008/) Python stylechecker, followed by our unit tests executed through [coverage](http://nedbatchelder.com/code/coverage/), such that we get code coverage output. Fourth we declare that we no do want any packaging done of our application as we're not deploying this library in a traditional sense. Finally we execute the `deploy.sh` script through the `deploy` clause in `wercker.json`, which we will cover next.

## Creating your deploy script.

We are now ready to create our actual deploy script that we submit the wercker CLI to PyPI. The method for submitting packages to is detailed on the PyPI [documentation site](http://docs.python.org/3/distutils/packageindex.html). Suffice it to say that the upload is executed through the `python setup.py sdist upload` command.

		echo "[server-login]" >> ~/.pypirc
		echo "username:" $PYPI_USER >> ~/.pypirc
		echo "password:" $PYPI_PASSWORD >> ~/.pypirc
		python setup.py sdist upload

What is more interesting in this deploy script is the usage of environment variables. The `python setup.py sdist upload` command expects a `.pyirc` file in your `$HOME` folder that contains your PyPI username and password. Within wercker you ara able to define these environment variables for a deploy target.

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