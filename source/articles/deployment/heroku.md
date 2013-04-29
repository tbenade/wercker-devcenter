---
sidebar_current: "deployment-heroku"
---

# Heroku
This article deals with the wercker Heroku add-on, available on their [Marketplace](https://addons.heroku.com/wercker). The documentation for this add-on can also be found on [Heroku's Devcenter](https://devcenter.heroku.com/articles/wercker?preview=1).

****
##### note: you are also able to deploy to Heroku from wercker without the add-on
****
<br />

- How does it work?
- Requirements
- Provisioning the add-on
- Local Setup
- Supported Languages and Services
- Removing the add-on
- Additional Resources and Support

## How does it work?

Visually, the flow for wercker is as follows:

<p>
<a href="https://app.wercker.com/public/images/heroku_flow.jpg" target="_blank"><img src="https://app.wercker.com/public/images/heroku_flow.jpg" width="100%"></a>
</p>

Wercker connects with your GitHub or Bitbucket repository. Each time you do a `git push` wercker receive a signal that new code has been created and wil subsequently start running your tests in a sand-boxed environment. If your build is green, you are ready to deploy your application to Heroku. Through the Heroku add-on you get a concise dashboard with an overview of your builds and deploys.


**NOTE**: Having a separate repository on a version control platform such as GitHub is a requirement of using wercker.

## Requirements

- A Heroku account and application.
- A remote git repository for your application. Wercker supports GitHub and Bitbucket.
- Python and pip to install the wercker command-line interface

## Provisioning the add-on
Wercker can be added to your application using the Heroku CLI:

    $ heroku addons:add wercker
    Adding wercker on sharp-mountain-4005... done, v7 (free)
    Use `heroku addons:open wercker` to get started.
    Use `heroku addons:docs wercker` to view documentation.

Next, open the wercker wizard by running the following command:

    $ heroku addons:open wercker

This wizard will guide you through the steps needed to run your first build on wercker.

## Local Setup

Wercker comes with a command line interface that you can install by running:

    $ pip install wercker

**NOTE**: Wercker assumes that you already have a repository on GitHub or Bitbucket with pushed code and have created a Heroku application.

The CLI helps you interact with the wercker platform. Run the following command to link your application with wercker:

    $ wercker create

You will receive the following response

    -----------------------
    welcome to wercker-cli
    -----------------------

    Searching for git remote information...
    Found 1 repository location(s)...

    Please choose one of the following options:
     (1) git@github.com:mies/ruby-sample.git
    Make your choice (1=default):

As mentioned above, if you now run `heroku addons:open wercker` or go to the Heroku dashboard and click on the wercker resource, you will see the wercker wizard that will guide you through your build and deploy.

**NOTE**: In order to run your tests `werckerbot` needs read permisson on either GitHub or Bitbucket

## Your first build and deploy

If all went well your first build is triggered after you've succesfully run `wercker create`. Upon any subsequent `git push` commands wercker gets triggered and will run your a build.

You are now ready to deploy your build to Heroku, if it passed of course. You can deploy your build in two ways:

- Through the command line interface via the `wercker deploy` command. The CLI will ask which build you want to deploy to which target (you could after all, have multiple Heroku applications)
- Through the wercker wizard. As said, running `heroku addons:open wercker` will open the dashboard and you are now ready initiate your first deploy. See below:

<p>
<a href="https://app.wercker.com/public/images/heroku_dashboard.jpg" target="_blank">
<img src="https://app.wercker.com/public/images/heroku_dashboard.jpg" width="100%">
</a>
</p>

## Supported Languages and Services

Wercker currently supports Node.js, Python and Ruby. In terms of services like databases and queues, wercker has support for Postgres, MySQL, MongoDB, RabbitMQ, and Redis. See the [services section](/articles/services/intro.html) on how to specify any of these.

## Removing the add-on

Wercker can be removed via the  CLI.

<div class="warning" markdown="1">This will delete the Heroku deploy target data on wercker and cannot be undone!</div>

    $ heroku addons:remove wercker
    -----> Removing wercker from sharp-mountain-4005... done, v1 (free)

This removes both the wercker addon from your Heroku application and the Heroku deploy target on wercker.


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
##### April 19, 2013
-------
