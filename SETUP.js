///////// JASMINE /////////
open SpecRunner.html
open index.html
node irb: '$ node'

//////// SETUP ///////
// 1. create directory, then cd into it.
//
// 2. create .js file => practice.js
//
// 3. add simple code =>
//     var greet = "I'm adam."
//     console.log (greet)
//
// 4. terminal => node practice.js // node filename.js
//     will puts in terminal.
//
// 5. view in browser =>
//     var http = require('http');
//
//     http.createServer(function (req, res) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('Hello World!');
//     }).listen(8080);
//
// 5. browser => http://localhost:8080/


// AJAX REQUIREMENTS:
1) node.js
2) npm package manager
3) live-server (or apache or any server)

// STEPS:
1) CD into folder
2) $ live-server --port 8000 (if 8080 taken, otherwise blank.)
3) loads html file in server (8080, same as node.js)

// JSON FAKER DATA
https://jsonplaceholder.typicode.com/


// Shorthand for document ready
$(function(){
  // your code goes here.
});


// Regular for document ready
$('document').ready(function(){
  // your code goes here.
});

<!-- Stylesheets -->
<link rel="stylesheet" href="/css/normalize.css">
<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Lobster+Two'>
<link rel="stylesheet" href="/css/application.css">

<!-- JavaScripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="/js/application.js"></script>
