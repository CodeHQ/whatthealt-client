# WhatTheAlt js client

A javascript client for [whatthealt.com](http://whatthealt.com)

## Quickstart

Checkout the [demo site](https://github.com/CodeHQ/whatthealt-client/tree/master/demo) in this repo.

## Getting Started

Install the whatthealt client library using bower:
```sh
$ bower install whatthealt
```
Or download it from our [dist folder](https://github.com/CodeHQ/whatthealt-client/tree/master/dist) on GitHub.

What the alt only has two dependencies:

* jQuery
* Lock stock and auth client [library](https://github.com/Halceyon/lock-stock-and-auth/tree/master/dist)
 
Once you've got the libraries, you must include them in your HTML:
```html
<script src="/js/libs/jquery.min.js"></script>
<script src="/js/libs/aspnetAuth.min.js"></script>
<script src="/js/libs/whatthealt.min.js"></script>
```

Next you need to set the aspnetAuth object's URL to whatthealt.com:

```javascript
aspnetAuth.url = "http://www.whatthealt.com";
```

Now you can check to see if the user is logged in and if they are not, call the login method:
```javascript
if (aspnetAuth.authentication) {
    // user is logged on
} else {
    // log user in
        aspnetAuth.login(username, password, function(result) {
                        alert(result.message);
                    });
}
```
Once the user is logged in, you can call the whatthealt get method to get the alt tag. This method takes two options:
* imgUrls - string array containing direct links to images
* maxCandidates - number of descriptions for each image

```javascript
var imgUrls = ["http://someimage.jpg"];
var maxCandidates = 1;
whatthealt.get(imgUrls,
            maxCandidates,
            function(results) {
                console.log(results);
            });
```
