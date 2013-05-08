---
sidebar_current: "deployment-openshift"
---

# OpenShift

In this article we will showcase how you can deploy your application from wercker to OpenShift.

## Requirements

* OpenShift credentials (sign up at [OpenShift registration page](https://openshift.redhat.com/app/account/new))
* You have [created an application in OpenShift](https://openshift.redhat.com/app/console/application_types)
* A [GitHub](https://github.com/) account with a pre-made repository
* You are [registered for a wercker account](https://app.wercker.com/users/new) and [signed in](https://app.wercker.com/users)
* You have [added your application to wercker](http://shrouded-cove-1217.herokuapp.com/articles/gettingstarted/web.html)


## Deploy target

Every succesful build on wercker can be deployed to a so called deploy target. This can be a custom deploy target, or one of the predefined targets like [Heroku](/articles/deployment/heroku.html) or [OpenShift](#). You can read more at the [deployment section](/articles/deployment/intro.html).

In this article we will add one for OpenShift. You find the describtive steps below:

### Navigate to your application
First we need to sign in at wercker and navigate to the application we like to deploy to OpenShift.

![image](/assets/deployment-openshift/step1-open-application.png)

### Add OpenShift deploy target
To start the process to add an OpenShift deployment target, do the following:

* Click on the `Deployment` tab to open it
* Click the `Add deploy target` dropdown
* Click `OpenShift`

![image](/assets/deployment-openshift/step2-open-deployment-tab.png)

### Create OpenShift authentication token
_note: you can skip this step if you already have an OpenShift authentication token._

OpenShift allows other services, like wercker, to access information via a secret token. OpenShift has three different scopes: `session`, `read` and `userinfo`. Wercker needs only read access. Although you can use an existing authentication token we strongly advice to create one per service. You can create a `read` authentication key at the [add authorization](https://openshift.redhat.com/app/account/authorizations/new) page at OpenShift. Give it a meaningful name like `wercker`.

![image](/assets/deployment-openshift/step3-openshift-auth-token.png)

### Authorize wercker

Enter the OpenShift authorization token and click `connect`.

![image](/assets/deployment-openshift/step4-authenticate.png)

### Enter OpenShift deploy target details

Enter a descriptive deploy target name, eq: staging or production.

Select the OpenShift domain and application that you want to deploy to. Wercker automaticly selected the first available domain and application.

If there are no domains or applications listed, please make sure you've created them on OpenShift.

Click `save` to create the deploy target.

_note: you can learn more about OpenShift domains and application in [Namespaces chapter](https://access.redhat.com/site/documentation/en-US/OpenShift/2.0/html/User_Guide/chap-OpenShift-User_Guide-Namespaces.html) of the OpenShift User Guide_

![image](/assets/deployment-openshift/step5-add-deploy-target.png)

### Add public key to OpenShift

Wercker generates a ssh key per deploy target which is used to securely encrypt the connection that is used to deploy to OpenShift. This key needs be added to the [public keys section](https://openshift.redhat.com/app/account/settings) at OpenShift.

Copy the full content of the public key from the second textbox.

![image](/assets/deployment-openshift/step6-copy-public-key.png)

Login to OpenShift and add the key to your public key list.

![image](/assets/deployment-openshift/step7-add-key-to-openshift.png)

### Deploy!

You are now ready to deploy to OpenShift. Wercker allows you to deploy all succesfull builds. Navigate to your application and select the succesfull build you like to deploy.

![image](/assets/deployment-openshift/step8-select-successfull-build.png)

In the build via click the `deploy this build` button and choice the target that you have just create.

![image](/assets/deployment-openshift/step9-queue-deploy.png)

Congratulations! You have succesfully deployed your application to OpenShift.

-------

<div class="authorCredits">
    <span class="profile-picture">
        <img src="https://secure.gravatar.com/avatar/5864d682bb0da7bedf31601e4e3172e7?d=identicon&s=192" alt="Pieter Joost van de Sande"/>
    </span>
    <ul class="authorCredits">

        <!-- author info -->
        <li class="authorCredits__name">
            <h4>Pieter Joost van de Sande</h4>
            <em>
                Pieter Joost is a software developer at wercker.
            </em>
        </li>

        <!-- info -->
        <li>
            <a href="http://beta.wercker.com" target="_blank">
                <i class="icon-company"></i> <em>wercker</em>
            </a>
            <a href="http://twitter.com/pjvds" target="_blank">
                <i class="icon-twitter"></i>
                <em> pjvds</em>
            </a>
        </li>

    </ul>
</div>

-------
##### last modified: May 7, 2013
-------
