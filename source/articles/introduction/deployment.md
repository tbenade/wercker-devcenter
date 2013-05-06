---
sidebar_current: "introduction-deployment"
---

# Deployment

The main benefit of using wercker is that you can Deploy Continuously.

Wercker support deploying to several platforms or targets. For more information see the specific section on [deployment](/articles/deployment/intro.html). In [wercker.json](/articles/werckerjson/intro.html) you can specify which scripts need to be run.

To be able to deploy you need three things:

1. An account and an application on wercker
2. A green build for that application
3. A deploy target.

## Deploy targets
Deploy targets is a name and a collection of settings inside wercker. It often refers to single server or (Heroku) application, often named staging, production, etc. Deploy targets are of a certain type, we right now support:

* Heroku
* custom (can be used to deploy to your own servers and platforms such as Amazon, Rackspace, etc).

But there are more to come. So let's zoom in on what happend during deployment via wercker.

<ol class="steps steps--four">
    <li><span>1</span><a>Create environment</a></li>
    <li><span>2</span><a>Deploy</a></li>
    <li><span>3</span><a>Report</a></li>
    <li><span>4</span><a>Post deploy</a></li>
</ol>

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
##### last modified: April 19, 2013
-------