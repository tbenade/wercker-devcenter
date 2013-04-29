---
sidebar_current: "gettingstarted"
---

# Getting Started with wercker

This guide will walk you through your first project with wercker and showcase the primary features wercker has to offer.

Before we start with developing our first application, make sure you have registered for a [wercker account](https://app.wercker.com/users/new) and installed the [command line interface](/articles/cli/intro.html).

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

<a href="https://s3.amazonaws.com/wercker.static.assets/step3.png" target="_blank"><img src="https://s3.amazonaws.com/wercker.static.assets/step3.png" width="100%"></a>

### Step 4. Deploy

You are now ready to deploy this application to the Cloud. For this guide we will walk you through a deploy on [Heroku](http://heroku.com) a popular platform-as-a-service provider.

<a href="" target="_blank"><img src="" width="100%"></a>

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