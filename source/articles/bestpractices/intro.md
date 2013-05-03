---
sidebar_current: "bestpractices"
---

# Best Practices

<a id="deployment"></a>
## Deployment

<a id="deployment-staging-production"></a>
### Staging/Production

A common pattern with deployment is to have two different environments: staging and production.

Production is where your users go to and staging is the place where you can validate your code changes.

To do this within wercker, create two [Deploy targets](/articles/introduction/concepts.html#deploy-targets) "staging" and "production".
When a [Build](/articles/introduction/concepts.html#builds) is passed you first [Deploy](/articles/introduction/concepts.html#deploys) it to "staging".
After you have made sure the deploy is stable, you can [Deploy](/articles/introduction/concepts.html#deploys) the same [Build](/articles/introduction/concepts.html#builds) to "production".

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
