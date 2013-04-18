---
sidebar_current: "overview"
---

# Wercker Devcenter


Welcome to the wercker devcenter! Here you will find various articles and guides to help you get up to speed with wercker.

If you are new to wercker, it is recommended you first read the [getting started guide](/articles/gettingstarted/intro.html).

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odit, facilis architecto quam dicta aspernatur quia quibusdam illo blanditiis alias. Itaque eos iure nulla quam perferendis expedita sunt reprehenderit quo.

<ul class="button-group">
<li><a href="#" class="button">Button 1</a></li>
<li><a href="#" class="button">Button 2</a></li>
<li><a href="#" class="button">Button 3</a></li>
</ul>



-------

## Header 2

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quibusdam, voluptates, eum, commodi modi facere aspernatur repellat nihil rem itaque enim nulla pariatur consequuntur esse ea repudiandae optio deleniti saepe.

*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eligendi, cum, numquam, ducimus*


****
##### Header in a bar
****

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur, hic ea officiis incidunt eius harum accusantium facere odit. Eaque, magnam, quidem reprehenderit voluptate aliquid quia quo qui nesciunt maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequuntur, hic ea officiis incidunt eius harum accusantium facere odit. Eaque, magnam, quidem reprehenderit voluptate aliquid quia quo qui nesciunt maxime.

-------

### Header 3

#### Header 4

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, porro odit beatae necessitatibus possimus in tenetur corporis earum laborum velit deserunt quasi est eligendi quaerat delectus accusantium aperiam esse commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, porro odit beatae necessitatibus possimus in tenetur corporis earum laborum velit deserunt quasi est eligendi quaerat delectus accusantium aperiam esse commodi!

* list item
* list item
* list item

-------

#### Create a wercker.json file

The `wercker.json` file is a powerful way of specifying your development environment requirements. Check out the devcenter [article](/articles/werckerjson) to get up to speed on the topic. For this project we will be using the `custom steps` and `pre-install` declaration to set up our custom box.

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

#### Header 4

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, porro odit beatae necessitatibus possimus in tenetur corporis earum laborum velit deserunt quasi est eligendi quaerat delectus accusantium aperiam esse commodi!

-------

If you are looking for specific support for programming languages, there are guides for [Node.js](/articles/languages/nodejs.html), [Python](/articles/languages/python.html), [Ruby](/articles/languages/ruby.html) and [Go](/articles/languages/go.html).

-------

<div class="profile-picture">
	<img src="https://secure.gravatar.com/avatar/e1c82876f21cdafafd2b01a1e625f587?d=identicon&amp;s=192" alt="Lindsey Bateman"/>
</div>
<div>
	<ul>
		<li><h4>Lindsey Bateman</h4></li>
		<li>Product designer</li>
		<li>Find me on twitter</li>
	</ul>
</div>

-------