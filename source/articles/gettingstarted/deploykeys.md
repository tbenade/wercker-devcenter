---
sidebar_current: "gettingstarted-werckerbot"
---

# Checking out the code

Wercker needs to be able to checkout the code from your source control provider, currently GitHub and Bitbucket are supported. This article describes how we retrieve the code and the various way on how to set it up.


Wercker currently uses SSH keys to retrieve the code. SSH keys can be attached to either a user, or a repository (in the form of deploy keys).

## Public projects

For public projects, wercker can checkout code by using the ssh key that is assigned to the 'wercker-opensource' user on both github and
bitbucket. Requiring no additional permissions or actions on the repository itself.

## Private projects

For private repositories: we'll generate a unique ssh key pair which can be added automatically. As long as your github/bitbucket account is
linked with your wercker account. If you prefer to do this manually, you can also add the deploy key by copying the public key and adding it
as a deploy key to the repository.

## Submodules
When using submodules on a private repository, letting wercker add the ssh key to the repositorym will not be sufficient. This does allow wercker
to checkout the main repository, however getting the code will still fail, since submodules are also automatically initialized and retrieved. A workaround for this, is to add the public key generated for application to a user on github/bitbucket which will be used to access the repository.
We deliberately use the term 'a user', since this can be your own account, or maybe a 'machine user' as described in the [github developer documentation](https://developer.github.com/guides/managing-deploy-keys/)




## Public projects

To be able to use wercker with a public repository we do not need to add a
public SSH key to the repository. You just need to make sure you selected the
public repository option.

## Werckerbot

If you've created your application after 4 september 2014, then you can skip this section. If you created your application before 4 september 2014, than you need to migrate to the new flow. This is also applicable to public repositories, which never added werckerbot.

You need to goto the settings page of your application, here you can change your deploy key. Once you changed the key, you can safely remove werckerbot from any of your teams.

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
