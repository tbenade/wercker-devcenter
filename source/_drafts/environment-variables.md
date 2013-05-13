---
title: Wercker environment variables
---

## Variable names

The name of a variable can contain only letters (a to z or A to Z), numbers (0 to 9) or the underscore
character (_). In addition, a variable's name can start only with a letter or an underscore.

The following examples are valid variable names:

    _WERCKER
    WERCKER_SOURCE_DIR
    TRUST_NO_1
    TWO_TIMES_2

## Directories

These variables return the directories where your build or deploy resides. A directory environment variable allways contains the resolved path and ends with the directory name without a slash.

| Variable name      | Example                    | Purpose                                                                                                                                |
| ---------------    | ---------                  | ---------                                                                                                                              |
| WERCKER_ROOT       | /build                     | The root folder where wercker runs the build or deployment pipeline.                                                                   |
| WERCKER_SOURCE_DIR | $WERCKER_ROOT/src          | The path to the directory of the source code.                                                                                          |
| WERCKER_OUTPUT_DIR | /output                    | The path to the directory that contains, or will contain, the output of the build pipeline.                                            |
| WERCKER_CACHE_DIR  | /cache                     | The path to the cache directory. This directory will be stored after the pipeline completes and restored when the pipeline runs again. |
| WERCKER_STEP_ROOT  | $WERCKER_CACHE_DIR/wercker | The path to the working directory of the step that is currently executed                                                               |
| WERCKER_STEP_ID    | S3SYNC7                    | The unique - within the context of the pipeline execution - idenfier for the step. The pattern is _{STEPNAME}{ORDINAL}. The value could be different on the next run of the pipeline.                                                                                                                                       |
