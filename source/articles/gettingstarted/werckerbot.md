---
sidebar_current: "gettingstarted-werckerbot"
---

# A note on werckerbot

Wercker needs read permissions to run your tests each time you do a `git
push`. For this to work you have to give the werckerbot user, which is
present on both GitHub and Bitbucket, read
permissions to your repository.

This is made apparent in both the *add application*
flow as seen below:

![image](http://f.cl.ly/items/0b1R0D2M2l033K073w2t/wercker-bot.png)

When adding a project through the [command line
interface](/articles/cli/) you are also made aware of this:

```bash
github repository detected...
Selected repository url is
git@github.com:flenter/getting-started-python.git

Creating a new application
a new application has been created.
In the root of this repository a .wercker file has been created which
enables the link between the source code and wercker.

Checking werckerbot permissions on the repository...
Werckerbot has access
```
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