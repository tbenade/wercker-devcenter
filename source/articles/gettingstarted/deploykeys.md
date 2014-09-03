---
sidebar_current: "gettingstarted-werckerbot"
---

# Checking out the code

Wercker needs to be able to checkout the code from your source control provider, currently GitHub and Bitbucket are supported. This article desrcibes how we retrieve the code and a various way on how to set it up with either GitHub or Bitbucket. 

## SSH Keys 

Wercker currently uses SSH keys to retrieve the code from either GitHub or Bitbucket. During the add application flow we will generate a SSH key pair specifiably for that project. Then we need 

## Private projects

During the add application flow we give you 

## Submodules  



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