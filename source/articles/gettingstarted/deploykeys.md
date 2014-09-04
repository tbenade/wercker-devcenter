---
sidebar_current: "gettingstarted-repositoryaccess"
---

# Repository access

Wercker needs to be able to checkout the code from your source control provider,
currently GitHub and Bitbucket are supported. This article describes how we
retrieve the code and the various way on how to set it up with GitHub or
Bitbucket. If you have a public repository then you can skip to the public repository section.

## SSH Keys

Currently wercker uses a SSH key pair to checkout code. We provide a public SSH
key which should be authorized to access the repository. Then we use the private
SSH key to checkout the code. There are a couple of ways to give authorization
to a public key, each of the methods have some advantages and disadvantages over
the others.

### Deploykeys

The first method is to add the SSH key to the repository as a deploy key. A
deploy key is a SSH key that is associated with a single repository. Advantages
of this method is that we only get access to that single repository. However
this also mean that we're unable to checkout any submodules (it is only possible
to add a SSH key to a single repository).

More information:

- [Deploy keys in GitHub](https://developer.github.com/guides/managing-deploy-keys/#deploy-keys)
- [Deploy keys in Bitbucket](https://confluence.atlassian.com/display/BITBUCKET/Use+deployment+keys)

### Machine users

The second method is to add the SSH key to a user in GitHub or Bitbucket. This
allows you to add more than 1 repositories to a single SSH key. Most of the time
these users are just used for authorization and don't have a real person using
it. This is why they are called "machine users". Advantage of this method is
that you'll be able to add multiple authorization to a single SSH key.
Disadvantage is that it requires more management.

More information:

- [Machine user in GitHub](https://developer.github.com/guides/managing-deploy-keys/#machine-users)

### Picking the right method

For repositories that do not use a private submodule we recommend using a deploy
key. If you have a repository that uses private submodules, than you need to
create a machine user, and authorize this user access to all repositories.

## Public repositories

For public repositories, you do not have to add a deploy key or authorize a
machine user. You just have to make sure that you selected the "public repository"
option in the "repository access" configuration.

## Werckerbot

If you've created your application after 4 september 2014, then you can skip
this section. If you created your application before 4 september 2014, than you
need to migrate to the new flow. This is also applicable to public repositories,
which never added werckerbot.

You need to goto the settings page of your application, you can find the
repository access section. This will migrate you from using werckerbot to using
a SSH key pair. Read the above sections to see which method you can select. Once
you changed the key, you should remove werckerbot from your organisation teams
or the access management sections.

We're keeping wercker-bot around till 01-01-2015, than we will remove
werckerbot. So make sure you migrate before that time to prevent any downtime.

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
##### June 13, 2013
-------
