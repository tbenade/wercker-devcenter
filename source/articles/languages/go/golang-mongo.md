---
sidebar_current: "languages-go"
---

# Getting stated with Go and MongoDB on wercker
You can find the code for this tutorial on [Github](https://github.com/mies/wercker-golang-mongo)

### Table of Contents
* Prerequisites
* Add project to wercker
* create a .godir file
* Create your structs
* Create a Unit Test
* Create a wercker.yml file
TODO: Add the 'bzr' package as the go mongodb driver 'mgo' depends on it
* Push your changes to Github
TODO: Create a Procfile and Heroku deploy target
TODO: Add Mongolab
TODO: Deploy to Heroku

## Prerequisites
For this tutorial you need to have knowledge of [Go](http://golang.org) and MongoDB.
We will be using [mgo](http://labix.org/mgo) as a Go MongoDB driver.

## Add project to wercker
First, create a repo to hold you code and add your project on wercker.

## Add a .godir file
Add an empty .godir file to your repository. This file is used when deploying to Heroku. Since this is beyond the scope of this tutorial, we can leave it empty.

## Create your structs
We define our `Decepticon` struct which has a name and a date field, that we can store into MongoDB.

**main.go**

    package main

    import (
      "time"
    )

    type Decepticon struct {
      Name string
      Date time.Time
    }


## Create a Unit Test

Our unit test will create two decepticons and will check if one of them can be retrieved from MongoDB.

**main_test.go**


    package main

    import (
      "os"
      "testing"

      "labix.org/v2/mgo"
      "labix.org/v2/mgo/bson"
    )

    func Test_StoreAndFind(t *testing.T) {
      session, err := mgo.Dial(os.Getenv("WERCKER_MONGODB_HOST"))
      if err != nil {
        panic(err)
      }
      defer session.Close()

      conn := session.DB("test").C("decepticons")
      err = conn.Insert(&Decepticon{"Shockwave", time.Now()}, &Decepticon{"Starscream", time.Now()})
      if err != nil {
        t.Error("Could not insert a Decepticon")
      }

      result := Decepticon{}
      err = conn.Find(bson.M{"name": "Shockwave"}).One(&result)
      if err != nil {
        t.Error("Could not find a Decepticon")
      }
      t.Log("Test Passed")
    }



## Create a wercker.yml file

Through `wercker.yml` we define that we want a MongoDB service on wercker:

**wercker.yml**

  services:
    - wercker/mongodb

## Push your changes to GitHub
Push your changes to GitHub and see the build results on wercker.


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
