---
sidebar_current: "deployment"
---

## The steps

<ol class="steps steps--four">
    <li><span>1</span><a href="#create_environment">Create environment</a></li>
    <li><span>2</span><a href="#deploy">Deploy</a></li>
    <li><span>3</span><a href="#report">Report</a></li>
    <li><span>4</span><a href="#post_deploy">Post deploy</a></li>
</ol>

### <a id="create_environment"></a>Create environment

A sandbox is created for the deployment. For Custom this sandbox has the same specifications as the sandbox that was used to create the build. For Heroku a Heruko sandbox is created.

The following environment variables are set:

```
WERCKER=true
DEPLOY=true
WERCKER_ROOT=/build/X
WERCKER_PLATFORM_VERSION=X.X.X
WERCKER_POSTDEPLOY_WARMUP_SECONDS=30
```

**Heroku only**

```
HEROKU_USER=username
HEROKU_KEY=apikey (hidden from log)
HEROKU_APP_NAME=appname
```


### <a id="deploy"></a>Deploy

There are several substeps run during deploy.
* setup (only for Heroku). In which a test is performed to see if the API key is valid and an SSH-key is gegenerated for use with Heroku.
* pre-deploy. For Heroku, this means maintenance mode is enabled (`heroku maintenance:on`). For cu

### <a id="setup"></a>Setup

**Heroku only**

A test is performed to check if your API key still is valid and a ssh-key is generated to communicate with Heroku.

## <a id="predeploy"></a>Pre-deploy

**Heroku only**

Maintance mode is set to true (`heroku maintenance:on`).

### <a id="predeploy_custom"></a>Pre-deploy custom

During pre-deploy you can run scripts needed to run before the deployment itself.

For Heroku, these script are run on the server of Heroku (`heroku run`)

The script or scripts in [wercker.json](/articles/werckerjson/intro.html) in `pre-deploy` are performed.

### <a id="deploy"></a>Deploy

During deploy the script(s) needed to do the actual deployment are executed.

#### <a id="heroku"></a>Heroku

The code is pushed to Heroku: `git push -f git@heroku.com:$HEROKU_APP_NAME.git master`.

#### <a id="custom"></a>Custom

The script or scripts in [wercker.json](/articles/werckerjson/intro.html) in `deploy` are run.

### <a id="postdeploy_custom"></a>Post-deploy custom

During post-deploy you can execute scripts needed to run after the deployment itself.

For Heroku, these script are performed on the server of Heroku (`heroku run`)

The script or scripts in [wercker.json](/articles/werckerjson/intro.html) in `post-deploy` are run.


### <a id="postdeploy"></a>Post-deploy

**Heroku only**

The process is restarted and maintance mode is set to false (`heroku ps:restart` `heroku maintenance:off`).

### <a id="postdeploy_test"></a>Post-deploy test

During post-deploy test you can run scripts needed to verify if the deployment was successful.

For example, you can try to download the homepage and check if a specfic word exists on the page.

```
  "post-deploy test" : ["curl $URL| grep welcome"]
```


The script or scripts in [wercker.json](/articles/werckerjson/intro.html) in `post-deploy test` are run.

### Report

After the provisioning ends, the log can be retrieved in the provisioning tab of the project.


### <a id="postdeploy_log_test"></a>Post-deploy log test

It is possible to check the logs to verify if the new version is running without any problems.

This is done a few minutes after deploying, so there is some time to fill the logs.

Wercker currently supports <a href="http://loggly.com/" target="_blank">Loggly</a> as source to query.

To use Loggly, two steps need to be taken by the administrator.

* In the Admin tab of the project a connection should be made with Loggly
* In the Deploy Target the Loggly domain and the query that retrieves errors should be specified.

The query can be `inputname:app json.application:wercker-sentinel json.level:error` for example.

For more information, see the <a href="http://www.loggly.com/support/using-data/search-basics/" target="_blank">Loggly documentation</a>.

**Heroku**

The Heroku logs are also checked to see if an error has occurred.



### <a id="postdeploy_metrics_test"></a>Post-deploy metrics test

It is possible to check if certain metrics are 'off' after deploying.

This is done a few minutes after deploying, so there is some time to collect some metrics.

The most simple implementation is a heartbeat. Every 30 seconds a heartbeat is send.
If after deploying the heartbeat stops, it's clear something is wrong.

[Heartbeat implementation in Node.js](graphite-hearbeat-nodejs)

Wercker uses <a href="http://graphite.wikidot.com//" target="_blank">Graphite</a> to collect the metrics.

In the deployment tab, you can find the servername of the Graphite server. You also need the metrics key, to identify which Deploy Target is sending metrics.

For more information about Graphite, see the <a href="http://graphite.readthedocs.org/" target="_blank">Graphite documentation</a>.

-------

<div class="authorCredits">
    <span class="profile-picture">
        <img src="https://secure.gravatar.com/avatar/7d9ef3d3f6911e6e4f9c51f6d99c48f8?d=identicon&s=192" alt="Jacco Flenter"/>
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
            <a href="http://twitter.com/flenter" target="_blank">
                <i class="icon-twitter"></i>
                <em> flenter</em>
            </a>
        </li>

    </ul>
</div>

-------
##### April 19, 2013
-------
