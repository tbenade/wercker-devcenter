---
sidebar_current: "languages-python"
---

# Getting Started with Django and Postgres

You can find the code for this tutorial on [Github](https://github.com/mies/wercker-django-example)

### Table of Contents
* Prerequisites
* Set up  virtualenv
* Declare dependencies through `requirements.txt`
* TODO: Run heroku create
* Add project to wercker
* Create separate `test_settings.py`
* Write the application
* TODO: Create a simple unit test
* Create a wercker.json file
* Create a Procfile and Heroku deploy target
* Push your changes to Github
* Deploy to Heroku

## Prerequisites
* Knowledge of Python and Django
* Have Python 2.7 and [virtualenv](http://pypi.python.org/pypi/virtualenv) installed
* Use [pip](http://pypi.python.org/pypi/pip) for dependencies
* A wercker account and a GitHub repository for the code you will write

## Set up virtualenv

First we set up a virtual environment for our application:

Within your project folder:

``` bash
  $ virtualenv venv --distribute
  New python executable in venv/bin/python
  Installing distribute...............done.
  Installing pip...............done.
```

And now activate your newly created environment:

``` bash
  $ source venv/bin/activate
```

## Declare dependencies

For this application we install django, the python postgres driver and Kenneth Reitz's excellent [dj-database-url](https://github.com/kennethreitz/dj-database-url) module

``` bash
pip install django psycopg2 dj-database-url
```

And now export these to `requirements.txt`

``` bash
pip freeze > requirements.txt
```

## Add project to wercker
Now add your repository on wercker

## Create separate test_settings.py

**test_settings.py**

Create a copy from `settings.py` to `test_settings.py`

Define your database in `test_settings.py`:

``` python
DATABASES = {
    'default': dj_database_url.config(env="WERCKER_POSTGRESQL_URL")
}
```

## Create a wercker.yml file

``` yml
  services:
    - wercker/postgresql
  build:
    steps:
      - script
          name: test
          code: |
            export DJANGO_SETTINGS_MODULE='wercks.test_settings'
            python manage.py test
```

## Create a Procfile and Heroku deploy target

## Push your changes

``` bash
$ git add .
$ git commit -am 'init'
$ git push origin master
```

## Deploy

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
##### April 19, 2013
-------
