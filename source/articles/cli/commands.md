---
sidebar_current: "cli-commands"
---

# Available Commands

Assuming you have succesfully installed the wercker command line interface, you should now be able to run it:

    $ wercker
    -----------------------
    welcome to wercker-cli
    -----------------------

    Usage:
        wercker create
        wercker link
        wercker status
        wercker deploy
        wercker builds
        wercker open targets
        wercker queue
        wercker apps
        wercker login
        wercker logout
        wercker targets add
        wercker targets list
        wercker targets details
        wercker update
        wercker --version
        wercker --help

## Commands
Wercker supports the following commands:

### create
Adds an application to wercker. This will create a `.wercker` file in
your repository.

### link
Link a repository back up to an application on wercker. Useful if a repository does not contain the .wercker file.

### status
Shows the status of the most recent build.

### deploy
Deploy a build to a deploy target.

### login
Logs the user in and stores the token on the machine.

### logout
Removes the login token from the machine.

### open targets
Opens a webpage showing a deploy target's details.

### apps
List applications the user has access to.

### builds
Shows a list of the most recent builds and their results.

### targets add
Add a heroku application as a deploy target.

### targets list
Retrieves a list of all deploy targets for the current application.

### targets details
Alias for open targets.

### update
Checks if there is a new version of the CLI available.


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
##### last modified on: April 19, 2013
-------

