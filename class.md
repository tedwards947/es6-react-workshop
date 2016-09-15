# Class

## Prerequisite Steps:

* Intialize our project & create `package.json`:

        npm init -f

* Install **babel**, **express**, **react**, and **react-router**:

        npm install --save babel-cli@6.11.x babel-core@6.13.x  \
            babel-preset-es2015@6.13.x babel-preset-react@6.11.x ejs@2.5.x \
            express@4.14.x react@15.3.x react-dom@15.3.x react-router@2.6.x

* Install **webpack** and **http-server** as development dependencies:

        npm install --save-dev webpack@1.13.x babel-loader@6.2.x http-server@0.9.x


## HTML First

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




