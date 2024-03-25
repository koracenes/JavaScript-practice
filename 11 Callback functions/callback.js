// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."

//  EXAMPLE 1
/* 
hello(leave);

function hello(callback) {
  console.log("hello!");
  callback();
}

function wait() {
  console.log("Leave");
}

function leave() {
  console.log("leave");
}

function goodbye() {
  console.log("goodbye!");
}

 */

//  EXAMPLE 2

sum(displayPage, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
