---
sidebar_current: "introduction-security"
---

# Security

One of the concerns people may have when they start using wercker for Continuous Integration is whether other people can see or access their source code. In this article we will look at some of the authorization aspects on wercker and a bit at technology behind wercker.

## Sensitive information in wercker
Before discribing in details what is visible to who, let's take a look first at how to prevent sensitive information to be accessible to the wrong people via wercker. There are four main areas where sensitive information may be visible:

1. In the source code.
2. In the logs of tests.
3. In the deploy logs.
4. In the deploy settings.

### The source code

Wercker provides no access to the source code of an application. Your source code is handled by specific testing servers who clone your code and run your tests in separate containers who are setup and destroyed for each build. The resulting build artefacts are stored, accessible only for wercker servers, up to 3 months for use during deployment.

### Test logs

Maybe your code contains that default password you should change, or there's other information you don't want to have in your test logs. Wercker offers some tools to help you: you can hide output of commands by setting the log value to false. See the [wercker.json](/articles/werckerjson/intro.html) article for more details.

### Deploy logs

Since wercker allows you to set environment variables for configuring deploy specific information, there's a chance sensitive information can end up in the deploy log. To prevent this from happening, we've added a "hidden from log" checkbox for each your environment variable you define.

### Deploy settings

Deploy settings are the most specific details for your deployment, only people with sufficient permissions can access these on an application. To be specific: users with write permissions or admin roles. The difference between these roles will be described later.

## Authorization

On wercker everything you create, whether these are builds or applications, by default everything is private. The exception to this is your profile. The information shared on the profile by default is little more than the username and a link to your GitHub or Bitbucket profile.

Although an application is private by default, it can be made public. You can do this after adding the application to wercker: go to settings tab and tick the public app checkbox. On a public application logged in users (and anonymous users) can see builds, build steps list and build step detail (i.e. the log). Deploy targets and deploy information is not accessible. Keep in mind that even though a build step and the test log may be public, the actual code is not visible on wercker, except for stacktraces and/or other information displayed by the test tools.

To be specific: whether a user can access builds, build steps, view deploy logs or an applications is defined on the application level.


### Roles & permissions

There are three roles defined at this moment, with increasing amount of permissions these are:

1. read
2. write
3. admin

#### read

A user with read permissions can see builds, build steps together with its details, view deploy logs and can follow/unfollow applications. A note about deploy logs: some sensitive information may be visible in the deploy logs, but wercker allows some output to be hidden from the view.


#### write

A user with write permissions can do all things a user with read permissions can, but can also trigger deploys and create new deploy targets.

#### admin

Like the owner of a project, users with admin permissions can do the same as with write permissions and also:

* change settings on the project (set the application to public/private)
* change permissions for collaborators
* change the ownership of a project.

## Summary

At wercker we take security seriously and have some new features planned. If you have any questions or suggestions, don't hesitate to <a href="mailto:pleasemailus@wercker.com">contact us</a>.

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
##### last modified: May 1, 2013
-------