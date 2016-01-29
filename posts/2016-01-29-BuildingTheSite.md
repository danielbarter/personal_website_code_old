---
title: Building The Site.
date: 2016-01-29
---

This [website](https://github.com/danielbarter/personal_website_code) is built using [Hakyll](https://jaspervdj.be/hakyll/) and [Clay](http://fvisser.nl/clay/). 

Hakyll is a static website generation tool and clay is a CSS preprocessor. To build the site from source use the following commands:

```{.bash}
$ git clone https://github.com/danielbarter/personal_website_code.git
$ cd ./personal_website_code
$ make build
$ ./website watch
```
For this to work, you need to install stack which is a build system for the haskell platform. If you terminal prints **Success**, then point your browser to `localhost:8000` and you 
should see the website.
