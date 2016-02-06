# The Forum 

Application for a forum web application.  This project includes client-side Javascript written in ES2015 using Gulp, Babel and Browserify to transpile code into browser-compatible ES5.  Data is pulled from a backend REST API with the help of json-server to populate the page with new HTML elements.   


### Installing

1.  `npm install` to resolve dependecies
2.  `nom install -g json-server` for the API

### Running

Run the API with either" 
```
json-server server/db.json`
```
OR 
```
json-server server/db.with.xxs.json
```
Then open up the `index.html` file in your browser.
### Developing
1. `npm install -g gulp
2. `gulp` should transpile and trigger the watch

__The project is currently setup to transpile code under the `_/src_` folder using the ___
___`_/src/app.js_` file as an entry point.___

