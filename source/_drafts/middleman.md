---
sidebar_current: "deployment-middleman"
---

# Deploying static sites to S3 with Middleman and wercker

We usually associate *deployment* with servers and infrastructure, but for static site deployments such as blogs, we can levarage [Amazon Web Services' S3](http://aws.amazon.com/s3/) to host our static assets. In this article we will go into the details of deploying your static site to S3 and wercker.

## Requirements

* A wercker account, registration is [free and easy](https://app.wercker.com/users/new)
* Basic Ruby knowledge and prefably some experience with static sites.
* A [GitHub](http://github.com) or [Bitbucket](http://bitbucket.com) that will host your repository
* AWS credentials

## Introduction

Wercker is a continuous *delivery* platform and as such we believe in the delivery of *any* software, be it database-backed web applications to simple html pages. The endgoal remains the same though you want to launch your software.At wercker we are big fans of static site engines. This dev center is
built using [Middleman(http://middlemanapp.com/) and some of our
personal [blogs](born2code.net) are created with
[Jekyll](http://jekyllrb.com/). We have a separate article dealing with
Jekyll, in this guide we will focus on deploying our static
Middleman site to S3.

## Creating our blog

    middleman init --template blog

Congrats!

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
##### last modified on: May 11, 2013
-------
