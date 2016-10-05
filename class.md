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

  _(If you don't have `git` installed, follow the instructions <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">here</a>)_

### **1. Install dependencies**

##### Option 1: _(preferred)_

* Install **babel**, **express**, **react**, and **react-router**:

        npm install --save babel-cli@6.11.4 babel-core@6.13.2  \
            babel-preset-es2015@6.13.2 babel-preset-react@6.11.1 ejs@2.5.2 \
            express@4.14.0 react@15.3.1 react-dom@15.3.1 react-router@2.6.1

* Install other fun stuff like **classnames**, **urijs**

        npm install --save classnames@2.2.5 urijs@1.18.1

* Install **webpack**, **babel-loader**, and **http-server** as development dependencies:

        npm install --save-dev webpack@1.13.2 babel-loader@6.2.5 http-server@0.9.0

##### Option 2: _(if npm install is being difficult due to poor connectivity)_

* Open a web browser and navigate to 

        http://x.x.x.x/8080/node_modules.zip

* Move the zip file to the directory you just cloned from GitHub and extract it.


### **2. Get Assets**

You need to host the images and videos used in this workshop locally. 

_(If you're doing these steps outside the context of
a physical workshop, you'll need to come up with your own assets (try archive.org) and adjust the `data.js` file accordingly.)_

* Open a web browser and navigate to 

        http://x.x.x.x/8080/assets.zip

* Move the zip file to the directory you just cloned from GitHub and extract it.

We're going to use the npm package **http-server** to act as a simple CDN _(content delivery network)_ for us.
* In your terminal, from within the `es6-react-workshop` directory, do:

        ./node_modules/http-server/bin/http-server ./assets -p 8082

You should see output very similar to this:

```
Starting up http-server, serving ./assets
Available on:
        http://<your IP>:8082
Hit CTRL-C to stop the server
```

**Important: Leave this running. Open a new terminal tab/window to do subsequent steps.**

## Files 

### Data

Look at `src/data.js`. Below is an example entry:

```json
{
        "title": "Kung Fu Hustle",
        "thumbnailUrl": "http://localhost:8082/thumbs/KungFuHustle.jpg",
        "heroUrl": "http://localhost:8082/heroes/KungFuHustle.png",
        "video": {
                        "url": "http://localhost:8082/videos/KungFuHustleTrailer.mp4"
                },
        "id": 0
}
```

Each entry contains information about the video:
        
* **`title`:** the title of the video
* **`thumbnailUrl`:** the image URL for the small-sized static "poster" image
* **`heroUrl`:** the image URL for the large-sized static "poster" image, used when the video is queued but not playing
* **`video.url`:** the URL of the actual video file
* **`id`:** the ID of the video. For this example, they are numeric, but they needn't be.

Notice how the URLs contain `localhost:8082`. This will point to the **http-server** instace you set running earlier on your machine. 

### HTML Entry Point

Take a look at `src/static/index.html`. Most of it is pretty standard HTML boilerplate, so I won't go into much detail. Notice this line, however:

```html
<div id="main"></div>
```

This is where we'll tell React to inject itself in our page. 

Speaking of React, let's get to it!


# React

React is a declarative, component-based way to write user interfaces.
Rather than requiring the user _(that's you!)_ to learn a bunch of special jargon and syntax,
it uses syntax that most JavaScript developers are likely to be familiar with.

Let's take a look at a quick example to help you visualize React
and how it compares to AngularJS and "vanilla" (plain) JavaScript. 

How might we write some code that accepts an array of data and writes the items to
`<li>` elements in an ordered list (`<ol>`)?

For the following examples, the data we'll be using is:
<!--Use this opportunity to explain `let` and `const`?-->
```JavaScript
const names = [
        'Theresa',
        'David',
        'Gordon',
        'Tony',
        'John',
        'Margaret',
        'James'
];
```
The examples should all produce the same output:
>1) Theresa
>2) David
>3) Gordon
>4) Tony
>5) John
>6) Margaret
>7) James

#### "Vanilla" JS _(ES5)_:

```JavaScript
document.writeln('<ol>');
for (var i = 0; i < names.length; i++){
        document.writeln('<li>' + names[i] + '</li>');
}
document.writeln('</ol>');
```

#### "Vanilla" JS _(ES6)_:
Notice `let` instead of `var` and the new `for...of` loop
```JavaScript
document.writeln('<ol>');
for (let item of names){
        document.writeln('<li>' + item + '</li>');
}
document.writeln('</ol>');
```

We can also take a more functional approach and shave off 2 lines:
```JavaScript
document.writeln('<ol>');
names.forEach(item => document.writeln('<li>' + item + '</li>'));
document.writeln('</ol>');
```

<hr>

#### A quick aside on `const` and `let`:
**There is no longer a valid use case for `var`**. The new `const` and `let` fix the issue with variables hoisted outside of blocks into function scope,
as well as a few other issues.

* `let` is pretty much a direct replacement for `var` and you can use it in the same ways
* `const` prevents variable _reassignment_. **Keep in mind though that `const` is not `Object.freeze()`**
  * The following is not allowed:

        const test = {foo: "bar"};
        test = "hello world"; // <- will throw an error

  * However, the following _is_ allowed:

        const test = {foo: "bar"};
        test.foo = "Hello World";
        
<hr>

But of course plain vanilla JS doesn't scale well when working on a large app with many developers.
Let's take a look at Angular and React now.
#### AngularJS:
```HTML
<ol>
        <li ng-repeat="name in names">{{name}}</li>
</ol>
```
This is pretty declarative and its terseness is one of Angular's best features. 
Unfortunately, there's a lot of magic behind the scenes, and if you want to customize
the iterator, it can be quite complex to write your own directive.

#### React _(using JSX)_:
<!--point out the { } to enclose real js, lack of the word `function`-->
```JSX
render() {
        return (
                <ol>
                        {names.map(name => {
                            return (<li>{name}</li>); 
                        })}
                </ol>
        );
}
```

While not as terse as the 3 line example in function ES6 or Angular, I believe React's syntax is 
much better as an app's complexity increases. Notice also how we're writing JavaScript right in the middle of HTML! 

In React, this is called "JSX". Files containing JSX syntax often use the file extension `.jsx`.
We'll be working a lot more with JSX shortly so stick with me.


## First Steps

We'll implement the above example for real now.
Open `src/client.jsx` in your favorite editor. Write the following:
<!--Make sure the file is empty for them?-->

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const names = [
        'Theresa',
        'David',
        'Gordon',
        'Tony',
        'John',
        'Margaret',
        'James'
];

window.onload = () => {
	ReactDOM.render(
		(<ol>
			{names.map(name => {
				return (<li>{name}</li>); 
			})}
		</ol>)
	, document.getElementById('main'));
};
```

There's a build step required to convert JSX into JavaScript that the browser can understand.
To build the project, in your terminal, from the base project directory, do:

        npm run build

This step uses **webpack** will run the **React** & **Babel** (more on Babel later) transpiler 
to convert our ES6-flavored JSX into cross-browser compatible JavaScript. 
I've configured it to use `client.jsx` as an entry point and to output the resulting
JavaScript to `src/static/js/bundle.js`. **Each time you make a change to React code in this tutorial, you'll need to re-run** `npm run build`.

If you look at `src/static/index.html` you can see that I've included our bundled JavaScript.

Let's have a look at what we have so far. In your terminal, do:

         ./node_modules/http-server/bin/http-server ./src/static -p 8080

and open a browser. Navigate to http://localhost:8080 and you should see the names listed out.

## React State

One of the best features of React is how it _reacts_ to changing application state. 
Rather than having to imparatively update the DOM when a user, say, adds an item to a list, 
React takes care of that for you because the underlying data changes. 

To demonstrate that, let's take a look at an example. 
Open `client.jsx` again, and modify it like so:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const INITIAL_NAMES = [
	'Theresa',
	'David',
	'Gordon',
	'Tony',
	'John',
	'Margaret',
	'James'
];

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: INITIAL_NAMES
        };
    }

	render() {
		return (
			<div>
				<ol>
					{this.state.names.map(name => {
						return <li>{name}</li>
					})}
				</ol>

			</div>
		);
	}
}

window.onload = () => {
	ReactDOM.render(<Home />, document.getElementById('main'));
};
```
A few things to notice here:
* We're extending the `React.Component` class with the following line:
	```javascript
	class Home extends React.Component {
	```
	This creates a new ES6 class called `Home` and automatically gives it all of the fun stuff contained within `React.Component`.

* The class's `constructor` is the place to put code that is run when the class is first instantiated.
	* `super(props)` tells JavaScript to call the `constructor` method of the parent class. 
	In this case, it will call `React.Component`'s `constructor()`

* We're setting our little component with initial state with
	```javascript
	this.state = {
		names: INITIAL_NAMES
	};
	```
	At this point, we have relinquished control over our list of names to React. 
	We've set up the initial state, and now we let React handle it.

* The `render()` method is relatively unchanged, except we're `map`ping over the values 
contained in the component's state, rather than the static names array at the top.

* In `window.onload`, we're including our `<Home />` component, rather than writing the `render()` method right there.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const INITIAL_NAMES = [
	'Theresa',
	'David',
	'Gordon',
	'Tony',
	'John',
	'Margaret',
	'James'
];

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			names: INITIAL_NAMES,
			textboxValue: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleChange(event) {
		//we're using React to manage the textbox's state
		this.setState({
			textboxValue: event.target.value
		});
	}

	handleButtonClick() {
		if (this.state.textboxValue === ''){
			//do nothing if the textbox is empty
			return false;
		}
		const _names = this.state.names;
		_names.push (this.state.textboxValue);

		//updates the component's state, including the names array and nulling out the textbox's value
		this.setState({
			names: _names,
			textboxValue: ''
		});
	}

	render() {
		console.log('render method called. current state:', this.state);
		return (
			<div>
				<input type="text"
					   value={this.state.textboxValue}
					   onChange={this.handleChange} />
				
				<input type="button"
					   onClick={this.handleButtonClick}
					   value="Add Name" />

				<ol>
					{this.state.names.map(name => {
						return <li>{name}</li>
					})}
				</ol>

			</div>
		);
	}
}

window.onload = () => {
	ReactDOM.render(<Home />, document.getElementById('main'));
};
```

 


## React Components
Like any good framework, React is opinionated. React demands that 
* i finish this section






# put attribution for help here:
https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app

