---
sidebar_current: "gettingstarted-webhooks"
---

# Webhooks

## What are webhooks? ##

Webhooks are a way of communicating events between services. It allows one service to let another service know that something has happened. This is ussually achieved by making a request to a server using http.

## Why does wercker need to set webhooks? ##

Wercker creates a webhook in your source control provider. This is done automatically by wercker during the creation of your application. Upon a `git push` wercker receives one of these webhooks, and will subsequently start a new build. Without the webhook wercker does not know when to start a new build.

For certain source control providers we provide an even greater integration. Ie. GitHub sends a webhook when a pull request is created, wercker uses this webhook to create a build for this pull request.

## Permissions ##

Wercker uses the credentials of the user creating the application to create the webhooks. It is however possible that user doesn't have permissions to change webhook settings of your source control provider. The user will be warned during the creation of the application.

If you already created an application and wercker was unable to create a webhook. You'll still be able to create a webhook at a later stage. You can find the `fix webhook` button in the settings page. This needs to be initiated by someone with sufficient permissions. The fix webhook is also avaiable as a nudge when you've added an application for which you do not have sufficient permissions.

### Permissions on GitHub ####

On GitHub you have three permissions on a repository: `push`, `pull` and `admin`. You need the `admin` permission to be able to set a webhook.

On GitHub you can be invited as a collaborator on a repository. This gives you `push` and `pull` permissions, but there is no way to get the `admin` permissions. Only the owner has the `admin` permission:

**Ask the owner to create the application on wercker or get the owner to click the `fix webhook` button.**

With GitHub organizations it is possible to give someone `admin` permissions:

**Ask someone with the `admin` permissions to create the application on wercker or get someone with `admin` permissions to click the `fix webhook` button.**

### Permissions on Bitbucket ####

On Bitbucket you can have `read`, `write` and `admin` permissions. You need the `admin` permissions to be able to set a webhook:

**Ask someone with the `admin` permission to create the application on wercker or get someone with `admin` permission to click the `fix webhook` button.**

## FAQ ##

### I've removed the webhook, what do I do now? ###

You can use the fix webhook button to recreate the webhook. Be sure that your source control provider credentials have suffient permissions.

### I'm a collaborator on a GitHub repository, how do I get admin permissions ###

Unfortunately it's not possible to get admin permissions for collaborator in a GitHub repository.

-------

<div class="authorCredits">
    <span class="profile-picture">
        <img src="https://secure.gravatar.com/avatar/dff7a3e4eadab56aa69a24569cb61e98?d=identicon&amp;s=192" alt="Benno van den Berg"/>
    </span>
    <ul class="authorCredits">

        <!-- author info -->
        <li class="authorCredits__name">
            <h4>Benno van den Berg</h4>
            <em>
                Benno is engineer at wercker.
            </em>
        </li>

        <!-- info -->
        <li>
            <a href="http://beta.wercker.com" target="_blank">
                <i class="icon-company"></i> <em>wercker</em>
            </a>
            <a href="https://twitter.com/hatchan_kitsune" target="_blank">
                <i class="icon-twitter"></i>
                <em>hatchan_kitsune</em>
            </a>
        </li>

    </ul>
</div>

-------
##### June 29, 2013
-------