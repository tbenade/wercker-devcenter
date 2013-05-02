---
sidebar_current: "cli-installation"
---

# Installation
We assume and [recommend](http://www.pip-installer.org/en/latest/other-tools.html#pip-compared-to-easy-install) that Python dependencies and libraries are managed through [pip](http://www.pip-installer.org/en/latest/) which you can install via `sudo easy_install pip`.

****
##### The short version: `pip install wercker`
****

## Installation instructions

Depending on how Python is installed on your system you will have to make sure your `PATH` is set correctly so you can globally run the `wercker` command.

****
##### On the Mac
****
Our preferred way of installing Python on the Mac is [Homebrew](https://github.com/mxcl/homebrew/wiki/Homebrew-and-Python). Homebrew's Python comes bundled with `pip`. Again make sure your `PATH` environment variable includes the location where the `wercker` command is installed, in the case of Homebrew this is `/usr/local/share/python`.

****
##### On Linux
****
On both Debian-based distributions such as Ubuntu `pip` is installed through `sudo apt-get install python-setuptools`. If your version of Linux comes with a `yum` based package manager, such as Fedora or RHEL, the `pip` command is installed via `sudo yum install python-setuptools`.

****
##### On Windows
****

For Windows we recommend installing [Cygwin](http://www.cygwin.com/) with the following packages enabled:

* python/python
* net/openssh
* devel/git
* web/wget

Next, download and install `easy_install` with the following commands

    wget http://peak.telecommunity.com/dist/ez_setup.py
    python ez_setup.py

We will now install `pip` through easy_install:

    easy_install pip

After which you can continue to install the `wercker` command line interface.

## Installing the wercker CLI

The wercker command line interface is written in python and on Linux/Mac OSX can be installed by running:

    pip install wercker

Depending on your operating systems you may have to run this with superuser privileges (i.e. use `sudo pip install wercker`).

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