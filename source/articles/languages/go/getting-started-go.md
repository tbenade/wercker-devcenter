# Getting started with Go and Heroku
For this tutorial we will be developing an application in Google's Go and deploy this on Heroku

## Prerequisites
* The [Go](http://golang.org/) programming language
* You have correctly set up your [$GOROOT](http://golang.org/doc/install) and [$GOPATH](http://golang.org/doc/code.html#tmp_2)environment variables
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



heroku create

heroku addons:add wercker

wercker create

