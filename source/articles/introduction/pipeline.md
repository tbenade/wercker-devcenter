---
sidebar_current: "introduction-pipeline"
---

# The wercker pipeline
Wercker has the notion of a `pipeline`; a set of `steps` and phases aimed at delivering your application.

## Build pipeline

The build pipeline consists of steps that aim to create tested deliverable package. It is triggered by every push to your git repository and applies to all branches. Execution of the pipeline is done inside an sandboxed environment. It consists of a series of steps that can either succeed or fail. The build is succeeded when all steps are, and failed when one of the steps is failed. The outcome of a successful build is packaged and stored.

![image](https://s3.amazonaws.com/uploads.hipchat.com/36172/251806/d0iu1gic0128v3n/wercker_build.png)

### Git

Wercker gets notified by your favourite Git for each push that contains commits. Note that this means pushes of new branches or branch deletions will not trigger a build. Wercker will clone your repository as the `werckerbot` user, 

## Builds at wercker

Wercker connects to your favourite git provider to build your code on every push. Currently wercker supports the following providers:

* [GitHub](https://github.com)
* [BitBucket](https://bitbucket.com)

Each `git push` to a repository that is added to wercker will trigger a new build and the pipeline as described by the following sections is executed.

### 1. Getting the code
Wercker clones the git repository and reads the `wercker.yml` file in the root of the repository. This file contains defines the your stack and the steps of which the build pipeline consist.

The code is cloned via SSH by `werckerbot`, which should have collaborator rights for private repositories. 

After a successful clone the last commit of the push is checked out and submodules are updated, if any.

### 2. Setup environment
Wercker starts by reading and validating the `wercker.yml` file from the root of the project. If `wercker.yml` does not exists, wercker tries to generate an `wercker.yml` file based on your source code.

Wercker's builds are run within `boxes` that define your stack. Stacks can range from [programming languages](/articles/services) such as Python or Ruby, to services like MongoDB and RabbitMQ. A box is basically a virtual machine with an operating system and a set of packages installed that support your stack of choice.

Which box is used can be specified in the `wercker.yml`'s box element. Here is an example that defines to use the `Ruby` box from the `wercker` user:

	box: wercker/php

After the box is started wercker copies the source code from the previous step to the box in the directory `$WERCKER_ROOT` and loads the steps defined in build pipeline definition from `wercker.yml`. A step is a part of the build pipeline that groups a sets of tasks that can either succeed or fail.

## 3. Environment variables
It sets the environment variables defined in your project settings. 