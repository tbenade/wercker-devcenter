---
sidebar_current: "bestpractices-emailnotifications"
---

## Email notifications

With the support of email notifications comes a range of tweaks you can apply
to control the type and amount of emails you receive.

Let's look at how it works. First of all wercker will send an email on
any application that you follow on wercker. You can receive emails on the
following topics:

* build passed
* build failed
* deploy passed
* deploy failed
* team changes
* comments

The build and deploy related notifications are pretty much self-explanatory. The
team changes notifications are a group of notifications around people joining/
leaving the team of an app (or if wercker support is enabled). The default
filter for this is 'mine', which means that you will only receive notifications
on events where your permissions have changed.

The comments behavoir is as follows: the person who initiated the event is the
one who will receive notifications as well as the people getting access (this
does not apply when permissions are removed). If somebody writes a comment,
they are added to the list of people who may receive emails (if they are not
already there).

### Filter options

There are 3 filter options for nearly all notifications, throttling the amount
of emails you'll receive:

* none
* mine
* all

When deciding to send emails, wercker looks at who triggered the event (who
pushed the code, who triggered the deploy, who commented on a build). With team
changes all of the people involved in the action will fall in the 'mine'
category. And when you place comment, you will also be added to the list of
users who will be notified when new comments are added.

### Managing the notification emails

All subjects for email notifications start with `[app name] ...`, making it
easy to create rules. However, if you feel like you're receiving too many email
notifications: the easiest way to limit them is to tweak the filters for
different events. The second way to limit the flow is to stop following
applications, you can stop following an application by going to that applications
main page and clicking unfollow. If you don't want to receive any email
notifications, you can disable all of them by going to your profile and manage
settings.

### Longtime users of the wercker platform

If you are a longtime user of the wercker platform and were already a user
before we introduced email notifications, you may have noticed that we're no
longer receiving the old emails. We've send an email to all users, with an easy
link to enable the new email notifications and get familiar with the new
settings.

-------

<div class="authorCredits">
    <span class="profile-picture">
        <img src="https://secure.gravatar.com/avatar/7d9ef3d3f6911e6e4f9c51f6d99c48f8?d=identicon&amp;s=192" alt="Jacco Flenter"/>
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
##### last modified: June 17, 2014
-------



