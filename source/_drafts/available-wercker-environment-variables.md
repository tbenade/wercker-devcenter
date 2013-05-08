---
title: Available wercker environment variables
---

## Directories

These directories are available. A directory environment variable allways contains the full path and ends with a slash.

| Variable name      | Example            | Purpose                                                                                     |
| ---------------    | ---------          | ---------                                                                                   |
| WERCKER_ROOT       | /var/build/        | The root folder where wercker runs the build or deployment pipeline.                        |
| WERCKER_SOURCE_DIR | $WERCKER_ROOT/src/ | The path to the directory of the source code.                                               |
| WERCKER_OUTPUT_DIR | /var/output/       | The path to the directory that contains, or will contain, the output of the build pipeline. |
| WERCKER_CACHE_DIR  | /var/cache/        | The path to the cache directory. This directory will be stored after the pipeline completes and restored when the pipeline runs again.                                                                                            |
