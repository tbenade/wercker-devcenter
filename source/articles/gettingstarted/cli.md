---
sidebar_current: "gettingstarted-cli"
---

# Getting Started with the wercker command line interface

This guide will walk you through creating your first application on wercker using the command line interface (CLI). You can install the cli via `pip install wercker`. Please see the [specific CLI documentation](/articles/cli "The wercker command line interface") for more.

As mentioned, we have created four separate Getting Started repositories in
[Ruby](https://github.com/wercker/getting-started-ruby), [Python](https://github.com/wercker/getting-started-python), [Node.js](https://github.com/wercker/getting-started-nodejs) and [Go](https://github.com/wercker/getting-started-golang).

We assume you have registered for a [wercker account](https://app.wercker.com/users/new) and have a Heroku account.

***
##### NOTE: at this moment we are in closed beta, you need to have access to Heroku's beta program to complete this guide.
***

### Fork the Repository

The first step is to fork one of the above mentioned repositories and clone it to your local machine.

<a href="https://s3.amazonaws.com/wercker.static.assets/step1.png" target="_blank"><img src="https://s3.amazonaws.com/wercker.static.assets/step1.png" width="100%"></a>

### Add Project

Go to the repository on your machine and run `wercker create`. This should result in an output similar to this:

```bash
-----------------------
welcome to wercker-cli
-----------------------

About to create an application on wercker.

This consists of the following steps:
1. Validate permissions and create an application
2. Add a deploy target (0 heroku targets detected)
3. Trigger initial build

Step 1.
-------------

Found 1 repository location(s)...

Please choose one of the following options:
 (1) git@github.com:flenter/getting-started-python.git
Make your choice (1=default):
```

The wercker create wizard will pause here, to allow you to catch up with what it is about to do. Since my repository has only one remote location (github), pressing enter or input 1 will suffice. After which the wizard will continue:

```bash
github repository detected...
Selected repository url is git@github.com:flenter/getting-started-python.git

Creating a new application
a new application has been created.
In the root of this repository a .wercker file has been created which enables the link between the source code and wercker.

Checking werckerbot permissions on the repository...
Werckerbot has access

Step 2.
-------------

0 automatic supported target(s) found.

Step 3.
-------------

Triggering build
A new build has been created

Done.
-------------

You are all set up to for using wercker. You can trigger new builds by
committing and pushing your latest changes.

Happy coding!
```

Note: wercker will check if you have linked your github or bitbucket account with your account and check for permissions on the repository. If either of them is not done yet, the wizard will guide you through some additional steps.

### List & monitor builds

This all that's needed to add a application to wercker. But there are some handy commands we can do while we are waiting for the build to complete (or go to the website). The first one is `wercker queue`, which lists all jobs that still need to be done for this application. This can be both builds as well as deploys.

```bash
$ wercker queue
-----------------------
welcome to wercker-cli
-----------------------

Retreiving list of unfinished builds.
Retreiving builds from wercker...
Found 1 result(s)...

┌─────────┬──────────┬────────┬──────────┬───────────────────┬─────────────────┐
│ result  │ progress │ branch │ hash     │ created           │ message         │
├─────────┼──────────┼────────┼──────────┼───────────────────┼─────────────────┤
│ unknown │ 50.0%    │ master │ ada9bd93 │ 05/02/13 13:37:53 │ badge update... │
├─────────┼──────────┼────────┼──────────┼───────────────────┼─────────────────┤

Retreiving list of deploy targets...

No deploy targets found.
```

The second command is `wercker builds` which lists the 5 latest builds (including both finished and unfinished ones).

```bash
-----------------------
welcome to wercker-cli
-----------------------

Retreiving builds from wercker...
Found 2 result(s)...

┌────────┬──────────┬────────┬──────────┬───────────────────┬─────────────────┐
│ result │ progress │ branch │ hash     │ created           │ message         │
├────────┼──────────┼────────┼──────────┼───────────────────┼─────────────────┤
│ passed │ 100.0%   │ master │ ada9bd93 │ 05/02/13 13:37:53 │ badge update... │
├────────┼──────────┼────────┼──────────┼───────────────────┼─────────────────┤
│ passed │ 100.0%   │ master │ 3de45ff9 │ 05/02/13 13:17:10 │ added badge     │
├────────┼──────────┼────────┼──────────┼───────────────────┼─────────────────┤
```

### Add a deploy target

You are now ready to deploy this application to the Cloud. For this guide we will walk you through a deploy on [Heroku](http://heroku.com) a popular platform-as-a-service provider.

***
note: See the [Heroku guide](/articles/deployment/heroku.html) in the deployment section for a more heroku centric explanation.
***

We first create a new app on heroku, by running `heroku create`

```bash
Creating secret-bastion-2817... done, region is us
http://secret-bastion-2817.herokuapp.com/ | git@heroku.com:secret-bastion-2817.git
Git remote heroku added
```

Add the wercker addon to your new heroku application and run `wercker targets add`

```bash
$ heroku addons:add wercker
Adding wercker on secret-bastion-2817... done, v2 (free)
Use `heroku addons:open wercker` to get started.
Use `heroku addons:docs wercker` to view documentation.
$ wercker targets add
-----------------------
welcome to wercker-cli
-----------------------

Heroku remote git@heroku.com:secret-bastion-2817.git selected.
Heroku deploy target secret-bastion-2817 successfully added to the wercker applicaiton
```


### Deploy

We can now run `wercker deploy` and wercker will deploy your application!


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
##### May 2, 2013
-------