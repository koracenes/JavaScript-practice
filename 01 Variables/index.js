/*====================================
        05 CONSTANTS
======================================*/

let PI = 3.14;
let radius;
let circumference;

// radius = window.prompt("enter radius");

console.log(circumference);

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
};

/*====================================
        04 TYPE CONVERSION
======================================*/

// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

/* let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */

/*====================================
        03 USER INPUT
======================================*/
// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let username;

// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// };

/*====================================
       02 ARITHMETICS
======================================*/

// arithmetic operators = operands (values, variables, etc.)
//                                         operators (+ - * /)
//                                         ex. 11 = x + 5;

// let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = students % 3;

// console.log(students);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

/*====================================
       01 VARIABLES
======================================*/

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I like pizza";

// variable = A container that stores a value.
//                   Behaves as if it were the value it contains.

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(typeof age);

// console.log(`you are ${age} years old`);
// console.log(`the price i s ${price}`);
// console.log(`Your gpa is ${gpa}`);

// let online = true;
// console.log(`bro is online: ${online}`);

// let fullName = "Korac Enes";
// let age = 30;
// let iStudent = false;

// document.getElementById("p1").textContent = `my name is ${fullName}`;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = iStudent;
