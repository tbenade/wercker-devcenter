---
sidebar_current: "introduction-deployment"
---

# Deployment

The main benefit of using wercker is that you can Deploy Continuously.

Wercker support deploying to several platforms or targets. For more information see [deployment](/articles/deployment.html). In [wercker.json](/articles/werckerjson/intro.html) you can specify which scripts need to be run.

To be able to deploy you need three things:

1. An account and an application on wercker
2. A green build for that application
3. A deploy target.

## Deploy targets
Deploy targets is a name and a collection of settings inside wercker. It often refers to single server or (Heroku) application, often named staging, production, etc. Deploy targets are of a certain type, we right now support:

* Heroku
* custom (can be used to deploy to your own servers and platforms such as Amazon, Rackspace, etc).

But there are more to come. So let's zoom in on what happend during deployment via wercker.

<ol class="steps steps--four">
    <li><span>1</span><a href="#create_environment">Create environment</a></li>
    <li><span>2</span><a href="#deploy">Deploy</a></li>
    <li><span>3</span><a href="#report">Report</a></li>
    <li><span>4</span><a href="#post_deploy">Post deploy</a></li>
</ol>
