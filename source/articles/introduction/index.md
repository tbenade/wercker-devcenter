---
sidebar_current: "introduction"
---

# Introduction to wercker

Wercker is a continuous delivery platform that allows developers to test and deploy their code often.
By embracing continuous delivery, developers reduce risk and eliminate waste while developing software.

## How wercker works

The workflow that wercker offers is roughly depicted below.

<a href="http://f.cl.ly/items/3E3j34301N3Q1z1t1S2N/wercker_flow.jpg" target="_blank"><img src="http://f.cl.ly/items/3E3j34301N3Q1z1t1S2N/wercker_flow.jpg" ></a>

Each time you do a `git push` wercker gets a signal via the source control platform that hosts your code that new code has been comitted. Wercker subsequently fetches this code, builds it and runs your unit tests or other [build](/articles/introduction/builds.html) steps (javascript minimization, compass compilation).

Once these steps have been completed your `build` has either passed or failed. If all went well you are ready to deploy your application to platforms such as Heroku, Amazon Web Services or other deploy target. Similar to the build phase, the deployment part of the wercker [pipeline](/articles/introduction/pipeline.html) consists of [deploy steps](/articles/introduction/deploys.html).

Continuously repeating these steps allows you and your team to work in small increments which are easier to debug and thus you are also delivering value to your own customers at a rapid pace.

In the next section, we will discuss the [wercker
pipeline](/articles/introduction/pipeline.html) and describe in more
detail how wercker actually works.


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

