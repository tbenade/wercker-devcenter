---
title: Steps developer guide
---

## Wercker steps

Steps make up the wercker pipeline and can either be executed in the build or
deploy phase within the pipeline. Examples of a buid step are compilation of
your code, running your unit tests or performing jshint. A deploy step could be
the synchronization of static assets, for which we've created the s3sync step,
that takes some Amazon Web Services credentials and bucket information and
places these assets on Amazon S3.

## Wercker step yaml

Every step must contain a `wercker-step.yml` file, which os the manifest that
describes the properties for the step.

Here is an example of a `wercker-step.yml` that contains only the required fields:

``` yaml
name: create-file
version: 0.9.6
description: create-file step
```

You can also add keywords to your step which increases discoverebility:

``` yaml
keywords:
  - file
  - text
  - create
```

## Step entry point

Every step is executed by executing `run.sh`. It is responsible for the high-level
organization the the step's functionality. The actual step logic can be written
inside the `run.sh`. When you want to group things you can move your logic
to multiple shell scripts and call them from `run.sh`. You could also develop
a step in Ruby or NodeJS and use the `run.sh` to bootstrap this. A good example
of the later is [validate-wercker-step](https://github.com/wercker/step-validate-wercker-step).

## Step options

Steps can have options to receive input. For example, the `create-file` step
has the option `filename` that specifies where the file should be created.
Options are set as elements of the step attribute in `wercker.yml`. Here is an
example of that uses `create-file` step and specifies three options:

    - create-file:
        name: generate production robots.txt
        filename: ./_production/robots.txt
        content: |-
          User-agent: *
          Allow: /

The `name` option is default for every step and it allows the user to specify the
logical name for that step. In the example above `filename` and `content` are
`create-file` specific option. The value from options can be retrieved with the
`get_option` function:

    filename=`get_option filename`
    echo "Value for filename option: $filename"

## Environment variables

The following environment variables are available in the context of an step execution:

Note: environment variables that contain a path to an directory contain the resolved path and ends with the directory name without a slash.

| Variable name      | Example                    | Purpose                                                                                                                                |
| ---------------    | ---------                  | ---------                                                                                                                              |
| WERCKER_ROOT       | /pipeline/build                     | The root folder where wercker runs the build or deployment pipeline.                                                                   |
| WERCKER_SOURCE_DIR | $WERCKER_ROOT/src          | The path to the directory of the source code.                                                                                          |
| WERCKER_OUTPUT_DIR | /output                    | The path to the directory that contains, or will contain, the output of the build pipeline.                                            |
| WERCKER_CACHE_DIR  | /cache                     | The path to the cache directory. This directory will be stored after the pipeline completes and restored when the pipeline runs again. |
| WERCKER_STEP_ROOT  | /wercker/steps/wercker/bundle-install/0.9.0 | The path to the working directory of the step that is currently executed. It contains the full content as deployed to the [wercker Directory](http://TODO).                                                               |
| WERCKER_STEP_ID    | S3SYNC7                    | The unique - within the context of the pipeline execution - idenfier for the step. The pattern is _{STEPNAME}{ORDINAL}. The value could be different on the next run of the pipeline.                                                                                                                                     |
| WERCKER_STEP_NAME  | S3SYNC                     | The name of the step as specified by the step in `wercker-step.yml` |


## Writing output

The following functions are available to write output:

`success` - writes a success message.

`fail` - writes a failure message and **stops execution**.

`warn` - writes a warning message.

`info` - writes a informational message.

`debug` - writes a debug message.

Here is a short example:

    debug "checking if config exists…"
    if [ -e ".config" ]
    then
        info ".config file found"
    else
        fail "missing .config file"
    fi

## Check if a variable is set and not empty

    if [ ! -n "$var" ] ; then
        echo "var is not set or value is empty"
    fi

Where `$var` is the variable you want to check.

## Check if command exists

    if ! type s3cmd &> /dev/null
    then
        echo "s3cmd exists!"
    else
        echo "s3cmd does not exist!"
    fi

Where `s3cmd` is the command you want to check. The `&> /dev/null` part makes it silence (it generates no output).
