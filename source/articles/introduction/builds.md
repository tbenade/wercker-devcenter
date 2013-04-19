---
sidebar_current: "introduction-builds"
---

# Builds

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, earum, dicta, aut tenetur eos deserunt minus rem saepe consequuntur dolorum minima ullam nisi a. Mollitia doloremque impedit rem voluptatum non!

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, corporis, facere nam tenetur molestiae quod a aperiam eaque ipsum repudiandae porro adipisci assumenda. Vitae tenetur saepe laudantium molestiae nihil voluptate?

-------

### Content

#### First build

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quam, commodi, vero impedit adipisci enim unde sequi ut tenetur aut itaque mollitia magni alias velit non quia voluptatem nulla laudantium!

-------

#### Setup Environment

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, nostrum, odio, dolor, suscipit iusto quae vero consequatur repudiandae facere reiciendis cumque doloremque illum pariatur quasi perferendis eveniet animi unde. Iure?

**wercker.json**

``` json
{
  "pre-install" : [
    "mkdir -p $HOME/go/src",
    "export GOPATH=$HOME/go",
    "sudo DEBIAN_FRONTEND=noninteractive apt-get -y install golang"
  ],
  "custom steps": { "go build" : "go build" }
}
```

-------

<a href="http://localhost:5000/articles/introduction/deployment.html" class="button radius medium right"><i>Next topic:</i> Deployment &rsaquo;</a>


-------

<div class="authorCredits">
	<span class="profile-picture">
		<img src="https://secure.gravatar.com/avatar/e1c82876f21cdafafd2b01a1e625f587?d=identicon&amp;s=192" alt="Lindsey Bateman"/>
	</span>
	<ul class="authorCredits">

        <!-- author info -->
        <li class="authorCredits__name">
			<h4>Lindsey Bateman</h4>
			<em>
				Lindsey is a product designer at wercker where creates beautiful things.
			</em>
		</li>

        <!-- info -->
        <li>
            <a href="http://beta.wercker.com" target="_blank">
                <i class="icon-company"></i> <em>wercker</em>
            </a>
            <a href="http://twitter.com/lindseybateman" target="_blank">
				<i class="icon-twitter"></i>
				<em> lindseybateman</em>
			</a>
        </li>

	</ul>
</div>

-------
##### April 19, 2013
-------
