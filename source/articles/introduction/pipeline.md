---
sidebar_current: "introduction-pipeline"
---

# The wercker pipeline
Wercker has the notion of a `pipeline`; a set of `steps` and phases aimed at delivering your application.

![image](/assets/pipeline-overview/wercker_pipeline.png)

## Builds

The build pipeline consists of steps that aim to create tested deliverable package. It should proof the code matches the quality target by executing tests and code analyses tools.

Which steps should be executed are defined in the `wercker.yml`, which should be in the root of the code repository. If this file is not present, wercker tries to generate it based on the source code.

A build is triggered by every push to your git repository and applies to all branches. 

Execution of the pipeline is done inside an sandboxed environment that consists of an box and additional services.

The build is succeeded when all steps are, and failed when one of the steps is failed. The outcome of a successful build is packaged and stored.

![image](/assets/pipeline-overview/wercker_build.png)

### Git push

Each `git push` to a repository that is added to wercker will trigger a new build regardless of the branch. This means that wercker builds not only your default branch, but also other branches like feature branches. Wercker clones your repository via SSH as the `werckerbot` user, for private repositories `werckerbot` needs to be collaborator.

### Box

A box is basically a virtual machine with an operating system and a set of packages installed that support your stack of choice. Wercker offers predefined boxes, but also allows you to create your own box.

Which box is used can be specified in the `wercker.yml`'s box element. Here is an example that defines to use the `Ruby` box from the `wercker` user:

    box: wercker/ruby

### Services

A service on wercker is a box that runs a database, message queue or other software process. Services are created next to the box that executes your build pipeline.

Which services are used can be specified in the `wercker.yml`'s services element. Here is an example that defines to use the `Ruby` box, `mongodb` service and `rabbitmq` service from the `wercker` user:

    box: wercker/ruby
    services:
        - wercker/mongodb
        - wercker/rabbitmq

All services that are added to the build pipeline will set environment variables that can be used to connect to them. The example above will result in the following additional environment variables:

    WERCKER_MONGODB_HOST
    WERCKER_MONGODB_PORT
    WERCKER_RABBITMQ_HOST
    WERCKER_RABBITMQ_PORT

### Steps

A build pipeline consists of steps which can either succeed or fail. These steps are defined in the `steps` collection the `build` element of the `wercker.yml`. All steps contain a `name` property which can be set to a custom value. This property will be displayed in the user interface of wercker. Here is an example of a build pipeline of a ruby project:

    build:
        - bundle-install
        - script:
            name: sass compile
            code: bundle exec sass --style compressed assets/scss/styles.scss:assets/css/styles.min.css --debug-info

The first step that is used is `bundle-install` which is a step provided by wercker. It runs the `bundle install` command in the root of the source directory to install the dependencies with leveraging the cache that is shared between builds to increase build speed. 

The second steps is the `script` step which allows you to execute shell script. In this example script that executes a sass compile.

Steps are executed sequentially and you can add as many steps as you want.

### Package

The result of an successful build is a deployable package. This package can be the input of an deployment pipeline. The package is created at the end of the build pipeline and contains all the assets that are inside the working directory.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! HOW TO CHANGE THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

## Deploys
The deploy pipeline consists of steps that aim to deploy the outcome of an successful build. The steps of this pipeline are defined in the `wercker.yml` that needs to be in the root of the repository. A deployment can either be triggered manually via the [wercker cli](!!!!!!), manually via the website or automatically with the auto deployment trigger. 

Execution of the deployment pipeline is done inside an sandboxed environment that consists of an box. In contrast to builds, deployments cannot have services defined. The pipeline itself consists of a series of steps that can either succeed or fail. The build is succeeded when all steps are, and failed when one of the steps is failed. Configuration management is done via it's deploy target.

![image](/assets/pipeline-overview/wercker_build.png)


# TODO:
* Build configuration management
* Deployment
* Deployment targets
* Fix links (wercker cli, etc)
* Describe how to change the package behaviour