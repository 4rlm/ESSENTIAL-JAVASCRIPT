Consider using:
splice, shift
to take up the first or last in array.

/////////////// GENERAL //////////////
console.log("I will now ask you for your name.")
var name = prompt("Enter your name")
console.log("Hello ".concat(name, ". How are you"))
someObject.methodName(argumentOne, argumentTwo);
// CheatSheet: https://gist.github.com/joelrojo/c54765a748cd87a395a2b865359d6add

// event delegation (use sparingly when code will be re-loaded dynamically, to free up the bindings.  So bind to a parent, then get siblings.)
form.reset
.append() vs .replace()
.clone and .text

// VARIABLES:
var variable_name = 'variable_value'
console.log(variable_name)

// STRINGS
var string = 'hello'
string.indexOf('e') // 1
string.lastIndexOf('l') // 3

"I like to code".indexOf('i')
"go team".toUpperCase()
'apples and oranges'.substr(4, 9)
'Hello'.concat(' World!')
"Hello" * 4
var name = "Bob"
var full_name = name + ' ' + "Smith"

// NUMBERS
Math.abs(-5)
Math.floor(6.73)
Math.sqrt(16)
var num = 4.7
Math.pow(num, 3)

5.+(7)
3.*(2)
10./(5)

// COMPARISON OPERATORS
5 > 4
3 <= 3
'cat' > 'dog'
'cat' === 'CAT'
(2 + 1) >= 7
3 != 7

// LOGICAL OPERATORS
5 > 2 && 4 < 8; // true
1 > 0 && 3 > 9; // => false
2 > 5 && 4 < 7; // => false
7 > 8 && 0 > -1; // => false
5 > 2 || 4 < 8; // => true
1 > 0 || 3 > 9; // => true
2 > 5 || 4 < 7; // => true
7 > 8 && 0 > -1; // => false

var x = 112;
var y = 2;
(x === 113 && y != 2); // false

var x = 112;
var y = 2;
!(x === 113 && y != 2) // true

var height = 120;
var width = 280;
!(height < 100 || width > 275); // false

var temperature = 99;
var pressure = 20;
var volume = 250;
(temperature < 100 || pressure < 20 || volume >= 250); // true

var cost = 100;
var price = 120;
var tax = .05;
var income = 50;
(cost > price && price < tax && tax  > income*0.5); // false

// TRUTHINESS and FALSINESS
// Objects that evaluate to true:
> Any Number besides 0
> Any String with a length greater than zero
> Any defined object
> The Boolean object true
> Objects that evalute to false:

// undefined
> null
> The Number objects 0 and NaN
> An empty String ('' or ""—length is zero)
> The Boolean object false

// TRUTHY FALSY EXAMPLES
if ("hello") { console.log("It's alive!") }
var num = 5; if (num) { console.log("five") }
var foo; if (foo) { "foo is an undefined variable." }
if (4 - 3) { "not zero!" }
if (4 - 4) { "you shoudn't see me." }
if (! null) { "NOT NULL!" }
if (true) { "The Truth" }

// CONDITIONAL STATEMENTS

// IF STATEMENTS
var x = 2; if (x < 3) { console.log("This is a small number"); }
var temp = 70; if (temp > 60 && temp < 80 ) { console.log("It is a nice day outside"); }
var num1 = 5; if (num1 === 5) { var value = num1 * 5; }

// IF / ELSE IF STATEMENTS
Student.prototype.letterGrade = function() {
  var ave_score = this.averageScore();

  if (ave_score >= 90) {
    grade = "A"
  }
  else if (ave_score >= 80) {
    grade = "B"
  }
  else if (ave_score >= 70) {
    grade = "C"
  }
  else if (ave_score >= 60) {
    grade = "D"
  }
  else {
    grade = "F"
  }
  return grade
}

// if (~'hello'.indexOf('lo')) { console.log('found'); } // found
string = (new Array(3 + 1)).join('/hello') // 'hellohellohello'

function string_splitter(string) {
  array_of_strings = string.split('/')
  for (var i = 0; i < array_of_strings.length; i++) { console.log(array_of_strings[i]) }
}
// string_splitter(string)

// FUNCTIONS (METHODS) => Name, Parameters, Body
var foo = function(bar) { bar + 'baz' } // same as below
function foo(bar) { return bar + 'baz' } // same as above
function sayHello() { return 'hello' }
sayHello() // invoking a function by calling its name.
function add(x, y) { return x + y }
add(3, 4)

function add(num1, num2) { var sum = num1 + num2; return sum }
add(5,9)
// console.log(10 / add(2,3))

function doSomething(firstName, num, age) {
  return "You entered name: " + firstName + ", num: " + num + ", age: " + age;
}
bio = doSomething('adam', 10, 41)
// console.log(bio);

function sayhello(name) { return "Helllo" + name }
function plus_5(num) { console.log((num || 0) + 5) } // plus_5(2) // 7
// [5, 10, 15].map(plus_5) // [10, 15, 20]

function calculate(a, b) { return a * b } // 12
var x = calculate(4, 3)

function myFunction(a, b) { return arguments.length } // 2
// console.log(x)

function myFunction(a, b) { return a * b }
var txt = myFunction(5, 10) // 50
var txt = myFunction.toString(5, 10) // function myFunction(a, b) { return a * b }

// BUILT-IN METHODS =>  global objects Number, Array, Boolean, and String
"web".charAt(2) // b
"ruby is cool".match('cool') // ["cool", index: 8, input: "ruby is cool"]
4.5.toFixed() // 5
var num = 4; num.toString() // '4'

// Method Chaining
var myString = "i like programming"
var newString = myString.concat(" and sushi.")
newString.toUpperCase()

var myString = "i like programming"
myString.concat(" and sushi.").toUpperCase()

// The ARGUMENTS OBJECT
function findMax() { var i; var max = -Infinity
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
          max = arguments[i]
        }
    }
  return max
}
x = findMax(1, 123, 500, 115, 44, 88)
// console.log(x)

function sumAll() { var i, sum = 0;
    for (i = 0; i < arguments.length; i++) { sum += arguments[i] }
    return sum
}
x = sumAll(1, 123, 500, 115, 44, 88)
// console.log(x)

// ARRAYS
var array = [1, 2, 3, 4, 5]
array.push(6) // [ 1, 2, 3, 4, 5, 6 ]
array.reverse() // [ 6, 5, 4, 3, 2, 1 ]
array.indexOf(3) // 3
array.slice(1, -1) // [ 5, 4, 3, 2 ]

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months[0];
months[1];
months[11];
var monthNumber = 5;
months[monthNumber];

var array = [1,2,3];
console.log('array[2] is ' + array[2]);
array[2] = "apples";
console.log('array[2] is now ' + array[2]);

// Array.first() and Array.last()
[1,2,3][0]; // => 1
var animals = ["cats", "dogs"];
animals[0]; // => "cats"
[true, "cats", 100][0] // => true

var numbers = [1,2,3];
numbers[numbers.length - 1]; // => 3
var animals = ["cats"];
animals[animals.length - 1]; // => "cats"
var mixed = [true, "cats", 100];
mixed[mixed.length - 1]; // => 100

// Array.length
[].length; // => 0
[1].length; // => 1
[1,2].length; // => 2
[1,2,3].length; // => 3

// Array.length === 0 | like rub's Array#empty?
[].length === 0; // => true
["cats"].length === 0; // => false
[null].length === 0; // => false
[false].length === 0; // => false

var array = [1,2,3];
array.length === 0; // => false

// Array.indexOf(object) > -1
[1,2,3].indexOf(1) > -1; // => true
[1,2,3].indexOf("cats") > -1; // => false

var foo = "pants";
[1,2,3,foo].indexOf("pants") > -1; // => true

var desserts = ["pie", "cake", "scone"];
desserts.indexOf("steak") > -1; // => false

// Array.join()
[1,2,3].join(","); // => "1,2,3"
[1,2,3].join(" + "); // => "1 + 2 + 3"

[2012, 12, 31].join('-'); // => "2012-12-31"

// What if we mix objects?
var foo = false;
[foo, 'bar', 10, '20'].join('---'); // => "false---bar---10---20"

// If we don't pass in anything, it uses a `,` comma by default.
[1,2,3].join(); // => "1,2,3"

// String.split()
"1,2,3".split(','); // => ["1", "2", "3"]
"1 + 2 + 3".split(' + '); // => ["1", "2", "3"]
"2012-12-31".split('-'); // => ["2012", "12", "31"]
"foobar".split(''); // => ["f", "o", "o", "b", "a", "r"]

// Array.push()
var array = [1,2,3];
array.push("cats");
array // => [1, 2, 3, "cats"]

var array = [];
array.push(true);
array // => [true]

// Array.pop()
var array = [1,2,3];
var lastElement = array.pop();
array; // => [1, 2]
lastElement; // => 3

// Array.unshift()
var array = [1,2,3];
array.unshift("cats");
array; // => ["cats", 1, 2, 3]

var array = [];
array.unshift(true)
array; // => [true]

// Array.shift()
var array = [1,2,3];
var firstElement = array.shift();
array; // => [2,3]
firstElement; // => 1

// Concatenating Arrays
var array1 = [1,2,3];
var array2 = ['cats', 'dogs'];
var arraySum = array1.concat(array2);
arraySum; // => [1, 2, 3, "cats", "dogs"]

// LOOPS

// WHILE LOOPS
var n = 1;
while (n <= 5) {
  console.log("n is equal to " + n);
  n = n + 1;
}

// FOR LOOPS
var i;
for (i = 0; i < n; i++) { // block of code }

var foo;
for (foo = 0; foo < bar; foo++) { // block of code }

var i, x;
for (i = 10; i > 0; i--) { console.log(i); }
console.log("Happy New Year!!");

for (x = 100; (x / 1000) <= 1; x += 100) { console.log(x); }

// LOOPING THROUGH ARRAYS
var dogs = ["husky", "great dane", "labrador retriever", "chihuahua", "terrier"];

// loop dogs w/ for loop
var index, count;
for (index = 0, count = dogs.length; index < count; index++) { console.log(dogs[index]); }

// loop dogs w/ while loop
var index = 0
var count = dogs.length;
while (index < count) { console.log(dogs[index++]); }

// It's all in the .length
// First, we set up the source and destination arrays
var integers = [3,8,1,6,2,0,5,7];
var odds     = [];
var evens    = [];
var n;

// Then define the loop
for (n = 0; n < integers.length; n++) {
  if (integers[n] % 2 === 0) {
    evens.push(integers[n]);
  } else {
    odds.push(integers[n]);
  }
}

// FOR ... IN ...
var nums = [6,0,1,9,3];
var i;
for (i in nums) { console.log(i); }

// forEach, REDUCE, FILTER, SPLICE, SLICE
// Examine the Array.prototype documentation.

// RUBY vs JS
// each => forEach
// map => map
// select => filter
// inject => reduce

// forEach example
var bugs = ["beetle", "spider", "yellow jacket", "firefly"];
bugs.forEach(function (bug) { console.log(bug) })
array.forEach(function(n) { console.log(n); }) // 6,5,4,3,2,1
for (var i = 0; i < array.length; i++) { console.log(array[i]) } // 6,5,4,3,2,1

Classroom.prototype.find = function(name) {
  this.students.forEach(function (name) {
    found_student = name })
  return found_student
}

// MAP example
var numbers = [5, 12, 2, 81, 30];
numbers.map(function timesTwo(x) { return x * 2 }); // => [10, 24, 4, 162, 60]

// FILTER example
var numbers = [1, 2, 3, 4, 5]
numbers.filter(function (number) { return (number % 2 === 0) }) // evens=> [2, 4]

var numbers = [1, 2, 3, 4, 5]
function isEven(number) { return (number % 2 === 0) }
numbers.filter(isEven);  // evens=> [2, 4]

Classroom.prototype.find = function(word){
  student = this.students.filter(function(student){
    return student.firstName == word;});
  return student[0];
}

Classroom.prototype.honorRollStudents = function()  {
  return this.students.filter(function(student){
    return student.averageScore() >= 95;
  });
}

// REDUCE example
var numbers = [10. 20, 30, 40, 50];
function sum(a, b) { return a + b; }
numbers.reduce(sum); // => 150

var words = ["Who", "goes", "there"];
function joinWithSpace(a, b) { return a + " " + b; }
words.reduce(joinWithSpace); // => "Who goes there"

Student.prototype.averageScore = function() {
  var values = this.scores;
  var sum = values.reduce((previous, current) => current += previous);
  var avg = sum / values.length;
  var final = Math.floor(avg)
  return final
}

// OBJECT LITERALS (HASHES)

// CREATING
var person = { firstName: 'Frank', lastName: 'Hardy', age: 25 };

// -OR- Could write above as below...
var person = {};
person.firstName = 'Frank';
person.lastName = 'Hardy';
person.age = 25;

typeof person; // => "object"

// -OR- For larger objects ...
var person = {
  firstName: 'Frank',
  lastName: 'Hardy',
  age: 25,
  telephone: '555-555-1234',
  email: 'fhardy@example.com'
};

// READING
person.firstName; // => "Frank"
person.firstName = "Billy";
console.log('Full name: ' + person.firstName + ' ' + person.lastName);

// ADD PROPERTIES
var book = {};
book.title; // => undefined

book.title = "JavaScript for N00bs";
book.title; // => "JavaScript for N00bs";

var object_literal_name = { hash_key: 'hash_value' , sechash_key: 'sechash_value'}
object_literal_name.hash_key
// console.log(object_literal_name)
// console.log(object_literal_name.hash_key)

// Hash
var object_literal = {};
object_literal['a'] = 1;
object_literal['b'] = 2;

// for (key in object_literal) { console.log(key, object_literal[key]) } // a 1, b 2
Object.keys(object_literal) // [ 'a', 'b' ]
object_literal.hasOwnProperty('c') // false
Object.keys(object_literal).length // 2
delete object_literal.b // 2

var object_literal = {};
object_literal['a'] = 1;
object_literal['b'] = 2;

Object.keys(object_literal).map(function(key, index) {
  var value = object_literal[key]
  // console.log(value)
})

// INSTANTIATING OBJECTS: SETTING STATE
function Band(name, members, albums) {
  this.name = name;
  this.members = members;
  this.albums = albums;
}

weezerMembers = ["Rivers Cuomo", "Patrick Wilson", "Brian Bell", "Scott Shriner"]
weezerAlbums  = ["Weezer (The Blue Album)", "Weezer (The Green Album)", "Weezer (The Red Album)", "Weezer (The White Album)"]

weezer = new Band("Weezer", weezerMembers, weezerAlbums)

// three properties: .name, .members, and .albums
// Attributes are Readable and Writable

// PROTOTYPE
function f() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
}

// CREATE AN OBJECT PROTOTYPE (via object constructor function)
function Person(first, last, age, eyecolor) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eyecolor
}

// USE 'new' KEYWORD TO CREATE NEW OBJECTS FROM SAME PROTOTYPE
var myFather = new Person("John", "Doe", 50, "blue")
var myMother = new Person("Sally", "Rally", 48, "green")

// ADDING A PROPERTY TO AN OBJECT
myFather.nationality = "American"
myMother.nationality = "Korean"
var people = [myFather, myMother]

// LOOPING OBJECTS
people.forEach(function(n) { console.log(n); }) // returns hash below.
for (var i = 0; i < people.length; i++) { console.log(people[i]) }  // returns hash below.
{ firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }, Person { firstName: 'Sally', lastName: 'Rally', age: 48, eyeColor: 'green' }

// ADDING A METHOD TO AN OBJECT
myFather.name = function () { return this.firstName + " " + this.lastName }
// console.log(myFather.name()) // John Doe

// ADDING PROPERTIES TO A PROTOTYPE => Must be added in original prototype.

// ADDING METHODS TO A PROTOTYPE
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {return this.firstName + " " + this.lastName;};
}

// OBJECTS: RECAP
// PROTOTYPE: Defining Shared Behaviors
// Adding Functions to the Constructor Prototype
// Note: An object's attributes are defined as a set of properties on the object itself. And an object's behaviors are defined as a set of properties which are inherited.

////////// DBC PROTOTYPE /////////////////
/* ******************************** */
/* Define the constructor function. */
function Band(name, members, albums) {
  this.name = name;
  this.members = members;
  this.albums = albums;
}

/* Define behaviors as properties of the prototype. */
Band.prototype.addMember = function(member) {
  this.members.push(member);
  return this.members;
}

Band.prototype.kickOut = function(member) {
  var memberIndex = this.members.indexOf(member);
  if (memberIndex != -1) {
    this.members.splice(memberIndex, 1);
  }
  return this.members;
}

Band.prototype.addAlbum = function(album) {
  this.albums.push(album);
  return this.albums;
}

/* Instantiate an object. */
var boyBand = new Band("Nynuk", ["Donnie Wahlberg"], []);

/* Use the object. */
boyBand.name;// => "Nynuk"
boyBand.members;// => ["Donnie Wahlberg"]
boyBand.albums;// => []

boyBand.addMember("Mark Wahlberg");
boyBand.addMember("Danny Wood");
boyBand.addMember("Jordan Knight");
boyBand.addMember("Jonathan Knight");

boyBand.members; // => ["Donnie Wahlberg", "Mark Wahlberg", "Danny Wood", "Jordan Knight", "Jonathan Knight"]
boyBand.kickOut("Mark Wahlberg");
boyBand.members; // => ["Donnie Wahlberg", "Danny Wood", "Jordan Knight", "Jonathan Knight"]
boyBand.addMember("Joey McIntyre");
boyBand.members; // => ["Donnie Wahlberg", "Danny Wood", "Jordan Knight", "Jonathan Knight", "Joey McIntyre"]
boyBand.name = "New Kids on the Block";
boyBand.name; // => "New Kids on the Block"
boyBand.addAlbum("New Kids on the Block");
boyBand.addAlbum("Hangin' Tough");
boyBand.albums; // => ["New Kids on the Block", "Hangin' Tough"]
///////////////////////////

// OBJECT.CREATE() - OBJECT CREATION ALTERNATIVE
// Can define a set of functions as a hash and pass it to the Object.create(). This will add all the functions to prototype.

var behavior = {
	fullName: function() {
		return this.firstName + " " + this.lastName;
	},
	initials: function() {
		return this.firstName[0] + this.lastName[0];
	}
}

var person = Object.create(behavior);
person.firstName = "Bob";
person.lastName = "Smith";
person.fullName();

//////// View DOM ////////
document;
document.URL;
document.title;
document.getElementById("fish-list");
one = document.getElementById("fish-1");
one = document.getElementById("fish-1").innerHTML;
document.getElementsByTagName("span");
document.getElementsByClassName("fish-list-card");
var main = document.getElementById("main");
main.getElementsByTagName("h1");
var firstCard = document.getElementsByClassName("fish-list-card")[0];
document.getElementsByClassName("fish-list-card-name")[7].innerText;
var wordmark = document.getElementById("wordmark");
wordmark.innerText;
var firstSpan = document.getElementsByTagName("span")[0];
firstSpan.attributes["id"].value;

//////// Edit DOM ////////
// Change the text inside the element with the id "wordmark".
var wordmark = document.getElementById("wordmark");
wordmark.innerText = "Aqua-Pets";

// Add the class "light" to the element with the id "wordmark".
wordmark.className += " light";

// Change the text inside the first <h1> tag in the element with the id "main".
var main = document.getElementById("main");
var mainHeading = main.getElementsByTagName("h1")[0];
mainHeading.innerText = "Fish for $ale";

// Create a <footer> element and append it to the end of the <body>.
var footerText = document.createElement("span");
footerText.innerText = "AquaPals - 2016"
var footer = document.createElement("footer");
footer.id = "footer";
footer.className = "light flex-column";
footer.appendChild(footerText);
var body = document.getElementById("body");
body.appendChild(footer);

// Update the styling of the <footer>.
footer.style.paddingTop = "6em";
footer.style.paddingBottom = "6em";

// Define a function that will open an alert box.
function alertWordmarkClick() { alert("You clicked the wordmark."); }

// Listen for click events on the element with the id "wordmark".
var wordmark = document.getElementById("wordmark");
wordmark.addEventListener("click", alertWordmarkClick);
