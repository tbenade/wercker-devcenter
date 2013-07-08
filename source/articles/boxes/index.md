---
sidebar_current: "boxes"
---

# Boxes

Wercker build and deploy pipelines are run within `boxes` that define your stack.
Stacks can range from [programming languages](/articles/services) such as Python or Ruby, to databases like MongoDB.
A box is basically a virtual machine with a set of packages installed that support your stack of choice.

Wercker has a set of default boxes which are made available.
These include Python, Ruby, Node.js and PHP alongside a range of backend [services](/articles/services) consisting of Postgres, MySQL, MongoDB, Redis and RabbitMQ.

## Using Boxes

Using a box is trivial, the [wercker.yml](/articles/werckeryml) includes a `box` definition that you can leverage.

``` yaml
box: wercker/python
```

## Creating your own boxes

You are also able to create your own boxes, provisioned either via simple bash-based scripts or Chef.

We've created separate guides that explain both script-based and chef-based provisioning of your own boxes:

* [Creating your own wercker boxes with Bash](/articles/boxes/bash.html)
* [Creating your own wercker boxes with Chef](/articles/boxes/chef.html)

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
##### last modified: July 8th, 2013
-------