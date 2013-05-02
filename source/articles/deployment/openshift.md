---
sidebar_current: "deployment-openshift"
---

# OpenShift

In this article we will showcase how you can deploy your application from wercker to OpenShift. 

## Requirements

1. OpenShift credentials (sign up at [OpenShift registration page](https://openshift.redhat.com/app/account/new))
2. You have [created an application in OpenShift](https://openshift.redhat.com/app/console/application_types)
3. A [GitHub](https://github.com/) account with a pre-made repository
4. You are [registered for a wercker account](https://app.wercker.com/users/new) and [signed in](https://app.wercker.com/users)
5. You have [added your application to wercker](http://shrouded-cove-1217.herokuapp.com/articles/gettingstarted/web.html)


## Deploy target

Every succesful build on wercker can be deployed to a so called deploy target. This can be a custom deploy target, or one of the predefined targets like [Heroku](/articles/deployment/heroku.html) or [OpenShift](#). You can read more at the [deployment section](/articles/deployment/intro.html). 

In this article we will add one for OpenShift. You find the describtive steps below:

### Navigate to your application
First we need to sign in at wercker and navigate to the application we like to deploy to OpenShift.

![image](/assets/deployment-openshift/step1-open-application.png)
