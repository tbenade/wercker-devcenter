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

### 