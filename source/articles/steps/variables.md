---
sidebar_current: "steps"
---

# Variables

What if you have an API key you need during a deploy or during a build? This is
information that is either unique for each server you want to deploy to
or may be too sensitive to store in the repository. Wercker supports a number
of ways to store and expose this data as environment variables.

If you want to know which environment variables are available during a build
or deploy, look at the `environment variables` step of your pipeline run.
You can also use a script step and use the export command to see the full list
of all variables at that moment during the build/deploy. This is convenient
since there are reasons why the environment variables step does not show all
environment variables available during the pipeline run.

```
    - script:
        code: |
            export
```

First of all, there are variables which are __global__. They are available
during builds and deploys. Typically, these are used to store API tokens for
after-steps such as hipchat, campfire etc.

These variables are called __pipeline variables__ and can be set in the settings
tab of your application.

The second set of variables are specific to deploy targets, and can only be set
directly on the deploy target. Typically, these are used to store information
such as hostnames, ssh-keys, passwords and more. These variables are called
__deploy target variables__


## Data types
The interface supports two types of data:

* text (which can be set as protected)
* SSH key pairs


### Protected variables

Protected variables functionality was added to limit the exposure of sensitive
information via the interface. The behavior of the variables during pipeline
runs (builds/deploys) are the same as other variables, but with the following
exceptions:

* protected variables are not displayed/logged during the setup environment step
* values are not shown in the settings tab and can only be set, not read back.

This behaviour is optional for variables of type text, SSH key pairs however
are automatically marked as protected.


### SSH Key pairs

Another common type of information used during deploys (but also during builds)
are SSH key pairs. Wercker can help you generate them for you and will only
expose the public part of the pair via the interface. During a pipeline run,
the key pair is exposed via two environment variables ending with: _PRIVATE
and _PUBLIC.

To use the SSH key pairs in wercker, you have to do two things.

1. let wercker generate a pair
2. create a variable


#### Generating SSH key pairs

You can generate new pairs, via SSH Keys section in the settings tab of your
application. Simply use the "generate new key pair" button and you'll be
presented with a small form asking for you to give it a name.

#### Create a variable

When you create a new variable for the SSH key pair, remember you are actually
creating two variables who are based on the name you are entering. So, if you
created an SSH key pair to use as a bitbucket deploy key. You may want to name
the variable BITBUCKET_DEPLOY_KEY. During the pipeline run you will now have
two environment variables: BITBUCKET_DEPLOY_KEY_PRIVATE and
BITBUCKET_DEPLOY_KEY_PUBLIC

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
##### last modified: May 5th, 2014
-------
