---
sidebar_current: "faq"
---

# FAQ

### Can anybody see my source code? ###
No, see our [security](/articles/introduction/security) section for more details.

### Why can't I add any public repository to wercker?
wercker needs to have some additional rights to the repository so it can:

* receive events when new code is added to the repository.
* so it can use things such as the status api for GitHub

If you want to run tests on a public/open source library, but have no permissions on the project: you could fork it and add that project to wercker.

### What happens to my code when I run a build?
Simplified we:

1. do a checkout your code and parse the wercker.yml.
2. Based on the wercker.yml and an analyzis of the code, boot up virtual machines in a sandboxed environment.
3. install additional software, packages and or libraries.
4. Run the tests inside the sandboxed environment
5. Teardown and destroy the sanboxed environment.
6. remove your code.

For more details see the [builds](/articles/introduction/builds.html) page

### Can you add support for X?
If you feel we should support a certain service (for instance memcached) or language, feel free to [contact](mailto:pleasemailus@wercker.com) us.

### Is there a public api with documentation for wercker?
We are currently working on our api and are planning to release an api with documentation as soon as we are ready.

### I have collaborators on Heroku but they don't have access?
We are working on that and hope to release it soon.

-------

<div class="authorCredits">
    <span class="profile-picture">
        <img src="https://secure.gravatar.com/avatar/d4b19718f9748779d7cf18c6303dc17f?d=identicon&s=192" alt="Micha Hernandez van Leuffen"/>
    </span>
    <ul class="authorCredits">

        <!-- author info -->
        <li class="authorCredits__name">
            <h4>Micha Hernandez van Leuffen</h4>
            <em>
                Micha is cofounder and CEO at wercker.
            </em>
        </li>

        <!-- info -->
        <li>
            <a href="http://beta.wercker.com" target="_blank">
                <i class="icon-company"></i> <em>wercker</em>
            </a>
            <a href="http://twitter.com/mies" target="_blank">
                <i class="icon-twitter"></i>
                <em> mies</em>
            </a>
        </li>

    </ul>
</div>

-------
##### April 19, 2013
-------
