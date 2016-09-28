# Introduction to ES6 and ReactJS

The goal of this workshop is to get you accquainted with ECMAScript 2015, otherwise known as
**<a href="http://www.ecma-international.org/ecma-262/6.0/">ES6</a>** _(<a href="http://es6-features.org/">quick ref</a>)_, and **<a href="https://facebook.github.io/react/">ReactJS</a>**. We'll build a client-side
React app together, and then enhance it with universal rendering in **<a href="https://nodejs.org/">node.js</a>** (more on that later!)

## Goals 

By the end of this session you should:

* Have a working React web application
* Understand the most useful and interesting concepts of ES6
* Be aware of ES6 compatibility issues and how to overcome them using Babel
* Gain a cursory understanding of universal rendering and how to implement it easily

<!--Finish this!!-->
For this tutorial, we'll be creating a small video player app. 

We're going to use the following technologies: React, Babel, react-router, webpack, node.js, express, and npm.
Don't worry if you're not familiar with these, I'll introduce them as we use them.

## ES6

ES6 is the latest version of the <a href="http://www.ecma-international.org/ecma-262/6.0/">ECMAScript standard</a>, and it supercedes ES5,
which was standardized in 2009. A lot has changed since 2009: Internet Explorer 8 was the most popular
browser, and IE represented the lion's share of usage at approximately 70% 
_(source: <a href="https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#TheCounter.com_.282000_to_2009.29">Wikipedia</a>)_.
JavaScript's latest features are very interesting and go a long way to improve some of the issues with the language's "bad parts", and introduces
some awesome new features.

Unfortunately or fortunately, depending on your perspective, 
ES6 has introduced breaking changes. While billions of devices can read and interperet JavaScript, 
from web browsers to servers to Raspberry Pi to "smart home" devices,
it is important to be mindful that many of them don't currently or will never support ES6 syntax. 
This shouldn't stop us from writing the latest code, though. 
Browser support is rapidly improving, and there is a workaround, **transpilation** (we'll go over this later).

<hr/>

## Prerequisite Steps:

_These steps are written with MacOS in mind. If you have a different operating system, your mileage may vary._

* Clone this repository. In your terminal:

        git clone https://github.com/tedwards947/es6-react-workshop.git

<!--Do we really want to do this? I don't think so...-->
* Intialize our project & create `package.json`: 

        npm init -f

* Install **babel**, **express**, **react**, and **react-router**:

        npm install --save babel-cli@6.11.4 babel-core@6.13.2  \
            babel-preset-es2015@6.13.2 babel-preset-react@6.11.1 ejs@2.5.2 \
            express@4.14.0 react@15.3.1 react-dom@15.3.1 react-router@2.6.1

* Install other fun stuff like **classnames**, **urijs**

        npm install --save classnames@2.2.5 urijs@1.18.1

* Install **webpack**, **babel-loader**, and **http-server** as development dependencies:

        npm install --save-dev webpack@1.13.2 babel-loader@6.2.5 http-server@0.9.0




### HTML Entry Point

\<description here\> place to host it yadayadayada

* Create a new file in `src/static/index.html` and call it ~`FILENAME.html`~

```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ES6 + React</title>

        <!--Commented out for later-->
        <!--<link rel="stylesheet" href="/css/main.css">-->
    </head>
    <body>

        <!--This is where React will hook into the document-->
        <div id="main"></div>


        <!--Commented out for later-->
        <!--<script src="/js/main.js"></script>-->
    </body>
    </html>
```

### Data

Copy the data file from ~`LOCATION`~ and put it in `src/data/data.json`.








# put attribution for help here:
https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app
# wtf is super()?