---
sidebar_current: "gettingstarted"
---

# Getting Started with wercker

This guide will walk you through your first project with wercker and showcase the primary features wercker has to offer.

Before we start with developing our first application, make sure you have registered for a [wercker account](https://app.wercker.com/users/new).

Now, you are ready to get started with wercker. For your convenience we have created four separate Getting Started repositories in
[Ruby](https://github.com/wercker/getting-started-ruby), [Python](https://github.com/wercker/getting-started-python), [Node.js](https://github.com/wercker/getting-started-nodejs) and [Go](https://github.com/wercker/getting-started-golang).

### Step 1. Fork the Repository

The first step is to fork one of the above mentioned repositories and clone it to your local machine.

<a href="https://s3.amazonaws.com/wercker.static.assets/step1.png" target="_blank"><img src="https://s3.amazonaws.com/wercker.static.assets/step1.png" width="100%"></a>

### Step 2. Add Project

Next you can add this application to wercker. Log into wercker and push the `add application` button.

<a href="https://s3.amazonaws.com/wercker.static.assets/step2.png" target="_blank"><img src="https://s3.amazonaws.com/wercker.static.assets/step2.png" ></a>

Next, select the repository that you have forked in the previous step.

<a href="https://s3.amazonaws.com/wercker.static.assets/step3.png" target="_blank"><img src="https://s3.amazonaws.com/wercker.static.assets/step3.png" ></a>

Wercker needs read permissions to run your tests each time you do a `git push`. For this to work you have to give the `werckerbot` user read permissions to your repository as indicated in the step below.

<a href="https://s3.amazonaws.com/wercker.static.assets/step4.png" target="_blank"><img src="https://s3.amazonaws.com/wercker.static.assets/step4.png" ></a>


### Step 3. Code and create your first Build

Make a modification to the application's code. A simple update to the `README.md` will suffice but you can also create new functionality.

    $ git commit -m "modified the README"
    $ git push origin master

Commit your changes to your git repository and push them. This will trigger a new build on wercker, depicted in the activity feed, as you can see below.

<a href="https://s3.amazonaws.com/wercker.static.assets/build_progress.png" target="_blank"><img src="https://s3.amazonaws.com/wercker.static.assets/build_progress.png" ></a>

### Step 4. Add a deploy target

You are now ready to deploy this application to the Cloud. For this guide we will walk you through a deploy on [Heroku](http://heroku.com) a popular platform-as-a-service provider.

***
##### note: Wercker has an add-on on the Heroku marketplace that makes deployment even easier. See the [Heroku guide](/articles/deployment/heroku.html) in the deployment section.
***

From the deployment tab on wercker select the `add deploy target` button and pick Heroku from the list. You will be asked to enter your Heroku API key which you can find on your [Heroku account page](https://dashboard.heroku/com/account).

<a href="https://s3.amazonaws.com/wercker.static.assets/deploy_target.png" target="_blank"><img src="https://s3.amazonaws.com/wercker.static.assets/deploy_target.png" width="100%"></a>

You can now either choose an existing application on Heroku that you want to deploy to, or create a new application. You can add a label to this deploy target, such as `production` or `staging`.

### Step 5. Deploy your build

Now you are ready to deploy your build to Heroku. Select your green build from the list of builds and hit deploy:

<a href="https://s3.amazonaws.com/wercker.static.assets/deploy_build.png" target="_blank"><img src="https://s3.amazonaws.com/wercker.static.assets/deploy_build.png" width="100%"></a>

Wercker will now deploy your application!

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