# Getting started with Go and Heroku

For this tutorial we will be developing an application in Google's Go and deploy this on Heroku. The code for this tutorial can be found on [GitHub](https://github.com/wercker/getting-started-golang).

## Prerequisites
* A wercker account, sign up is [free and easy](https://app.wercker.com/users/new/), but note we're still in private beta.
* The wercker [command line interface](/articles/cli/intro.html)
* A GitHub or Bitbucket repository that hosts your code
* The [Go](http://golang.org/) programming language
* You have correctly set up your [$GOROOT](http://golang.org/doc/install) and [$GOPATH](http://golang.org/doc/code.html#tmp_2) environment variables
* A Heroku account

## Creating our Application

For this application we will create a simple API that return several cities as JSON. We will use the excellent [Mux](http://github.com/gorilla/mux) HTTP router from the [Gorilla Web Toolkit](http://www.gorillatoolkit.org/pkg/mux). You can install this library by running the following command in your project folder:

    $ go get github.com/gorilla/mux

Now we are ready to write our actual application:

**main.go**

    package main

    import (
        "encoding/json"
        "github.com/gorilla/mux"
        "log"
        "net/http"
        "os"
    )

    func CityHandler(res http.ResponseWriter, req *http.Request) {
        data, _ := json.Marshal("{'cities':'San Francisco, Amsterdam, Berlin, New York'}")
        res.Header().Set("Content-Type", "application/json; charset=utf-8")
        res.Write(data)
    }

    func main() {
        r := mux.NewRouter()
        r.HandleFunc("/cities.json", CityHandler)
        http.Handle("/", r)
        err := http.ListenAndServe(":"+os.Getenv("PORT"), r)
        if err != nil {
            log.Fatal("ListenAndServe: ", err)
        }
    }


## Setting up our deployment environment

We will deploy our application on Heroku, a popular platform-as-a-service provider that supports the Go programming language via a buildpack.

    $ heroku create -b https://github.com/kr/heroku-buildpack-go.git

Wercker has an add-on on the Heroku Marketplace that allows you to interact with wercker in an easy to use way.

    $ heroku addons:add wercker

Heroku needs a `Procfile` that defines which process we want to run for our application. In this case we want to execute the binary that is the result of the `go build` command as as web process. In your project folder create the following Procfile:

**Procfile**

    web: getting-started-golang

Also we need to inform Heroku which folder the application runs in. This is done through a `.godir` file in your project folder that should look as followed:

**.godir**

    getting-started-golang

## Push your code to GitHub

    $ git add .
    $ git commit -am 'my go app on wercker'
    $ git push origin master



## Adding your application to wercker

We assume you have installed the wercker [command line interface](/artiles/cli/intro.html). Now run the following command:

    $ wercker create

This will create an application on wercker and will also trigger a first build.

You can view the status of your build either via:

## Deploying your application

    $ wercker deploy

View your appplication

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