---
sidebar_current: "gettingstarted-python"
---

# Python and wercker

This guide will get you up and running with wercker and the Python programming language.

If you are new to wercker, it is recommended you first read the [getting started guide](/articles/gettingstarted/intro.html).

The sample project described in this guide is a simple Python web application built with [Flask](http://flask.pocoo.org) and deployed to [Heroku](http://heroku.com). The application itself is a basic API that returns a JSON response containing a list of cities. It also includes a unit test that verifies this JSON response. For a more step-by-step look at this application or more advanced tutorials, please see the [Python language guide](/articles/languages/python.html)

* * *

## Prerequisites

Please make sure you have the following:

* A wercker account. [Signup is free and easy](https://app.wercker.com/users/new/).
* The wercker command line interface. Read more about it [here](/articles/cli/intro).
* Basic [Python](http://python.org) knowledge.
* Management of Python dependencies through [pip](http://www.pip-installer.org/en/latest/) and [virtualenv](http://www.virtualenv.org/en/latest/).

* * *

#### fork the repo

You can find the source code for this sample project on GitHub. Clone it

    $ git clone git://github.com/wercker/flask-sample.git


Go to the project folder

#### create an application on wercker

wercker create

#### install the heroku addon

do it

-------

<div class="authorCredits">
    <span class="profile-picture">
        <img src="https://secure.gravatar.com/avatar/d4b19718f9748779d7cf18c6303dc17f?d=identicon&s=192" alt="Micha Hernández van Leuffen"/>
    </span>
    <ul class="authorCredits">
        <li class="authorCredits__name">
            <h4>Micha Hernández van Leuffen</h4>
            <i>
                Cofounder and CEO <a href="http://beta.wercker.com" target="_blank">@wercker &rarr;</a>
            </i>
        </li>
        <!-- find me on twitter -->
        <li>
            <a href="http://twitter.com/mies" target="_blank">
                <img src="/images/twitter.png" width="15px" height="11px">
                <em> Find me on twitter &rarr;</em>
            </a>
        </li>
    </ul>
</div>


-------