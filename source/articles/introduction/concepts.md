---
sidebar_current: "introduction-concepts"
---

# Wercker concepts

In this section we explain some of the core concepts that you will encounter throughout wercker. By explaining these concepts you will be able to make better use of wercker.

* [builds](#builds)
* [provisioning](#provisioning)
* [deploy targets](#deploy-targets)
* [deploys](#deploys)

<a id="builds"></a>
## Builds

Every time a push to git is done, wercker pulls this commit. Wercker compiles, tests and packages the code.

Build steps can be specified in [wercker.yml](werckerjson)

In the project overview there is a list of the latest builds.

More information: [Builds](builds.html)

<a id="deploy-targets"></a>
## Deploy targets

To deploy code, a deploy target needs to be created. There are two types: Heroku and Custom.

With Heroku you can deploy your code to Heroku and with Custom you can deploy to your own servers, like Amazon and RackSpace.

Deploy steps can be specified in [wercker.yml](werckerjson)

It's possible to set environment variables that can be used in your custom deploy code.

    deploy:
        steps:
            - script:
                name: my deploy script
                code: echo my-deploy-script.sh

For more information see the section on [deployment](deployment.html).

<a id="deploys"></a>
## Deploys

When a [Build](#builds) is passed, it can be deployed to a [Deploy Target](#deploy-targets).
This can be done from the [Build](#builds) overview

If you want to learn more on deployment see the section on [deployment](deployment.html) or the dedicated [chapter](/articles/deployment/) on supported deployment options.

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
##### last modified: April 19, 2013
-------
