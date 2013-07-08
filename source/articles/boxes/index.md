---
sidebar_current: "boxes"
---

# Boxes

Wercker build and deploy pipelines are run within `boxes` that define your stack.
Stacks can range from [programming languages](/articles/languages) such as Python or Ruby, to databases and [services](/articles/services) like MongoDB.

A box is basically a virtual machine with a set of packages installed that support your stack of choice.

![image](http://f.cl.ly/items/0x2f0q301u3q2J353t32/wercker_pipeline_box.png)

Wercker has a set of default boxes which are made available.
These include Python, Ruby, Node.js and PHP alongside a range of backend [services](/articles/services) consisting of Postgres, MySQL, MongoDB, Redis and RabbitMQ.

## Using Boxes

Using a box is trivial, the [wercker.yml](/articles/werckeryml) includes a `box` definition that you can leverage.

``` yaml
box: wercker/python
```

## Creating your own boxes

You are also able to create your own boxes, provisioned either via simple bash-based scripts or Chef.

Similar to applications, boxes are defined through a single file called `wercker-box.yml`.

Boxes can be `deployed` to the wercker registry, which is an index of both boxes and the previously mentioned [steps](/articles/steps).
Deploying you boxes to the wercker registry allows not only you to use another programming language or database, but others as well.

We've created separate guides that explain both script-based and chef-based provisioning of your own boxes:

* [Creating your own wercker boxes with Bash](/articles/boxes/bash.html)
* [Creating your own wercker boxes with Chef](/articles/boxes/chef.html)

You can explore the wercker registry for boxes [here](http://app.wercker.com/explore).

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