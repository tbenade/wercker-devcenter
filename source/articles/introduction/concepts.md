---
sidebar_current: "introduction-concepts"
---

# Wercker concepts

In this section we explain some of the core concepts that you will encounter throughout wercker. By explaining these concepts you will be able to make better use of wercker.

* [builds](#builds)
* [tests](#tests)
* [provisioning](#provisioning)
* [deploy targets](#deploy-targets)
* [deploys](#deploys)

<a id="builds"></a>
## Builds

Every time a push to git is done, wercker pulls this commit. wercker compiles, tests and packages the code.

When no compilation is needed, this step is skipped. This process is called building, and in wercker
each seperate push leads to one Build.

In the project overview there is a list of the latest builds.

More information: [Builds](builds.html)

<a id="tests"></a>
## Tests

During a [Build](#builds) tests can be run. By default wercker tries to run the tests. For example in a Node.js environment
```npm test``` is executed.

To add custom tests, use the `custom steps` property in [wercker.json](/articles/werckerjson/intro).

<a id="deploy-targets"></a>
## Deploy targets

To deploy code, a deploy target needs to be created. There are two types: Heroku and Custom.

With Heroku you can deploy your code to Heroku and with Custom you can deploy to your own servers, like Amazon and RackSpace.

Custom deploy code can be specified in [wercker.json](werckerjson)

It's possible to set environment variables that can be used in your custom deploy code.


    {
      "pre-deploy" : ["echo my-pre-deploy-script.sh"],
      "deploy" : ["echo my-deploy-script.sh"],
      "post-deploy" : ["echo my-post-deploy-script.sh"]
    }


For more information see the section on [deployment](deployment.html).

<a id="deploys"></a>
## Deploys

When a [Build](#builds) is passed, it can be deployed to a [Deploy Target](#deploy-targets).
This can be done from the [Build](#builds) overview

If you want to learn more on deployment see the section on [deployment](deployment.html) or the dedicated [chapter](/articles/deployment/intro.html) on supported deployment options.

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