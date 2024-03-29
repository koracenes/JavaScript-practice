// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once

// FIRST WAY
function hello() {
  console.log(`Hello`);
}
//  SECOND WAY
const hello2 = function () {
  console.log(`Hello`);
};

//ARROW FUNCTION

//  EXAMPLE 1
/* 
const hello3 = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are ${age}old`);
};
hello3("enes", 30);

 */

//  EXAMPLE 2
/* 
setTimeout(() => console.log("hello"), 3000);

function hello() {
  console.log("Hello");
}
 */

//  EXAMPLE 3

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const qubes = numbers.map((element) => Math.pow(element, 3));

console.log(squares);
console.log(qubes);

const evemNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);

console.log(evemNums);
console.log(oddNums);

const total = numbers.reduce((accumulator, element) => accumulator + element);

const avg = 5;

// numbers.reduce(
//   (accumulator, element) => (accumulator + element) / numbers.length
// );
console.log(total);
console.log(avg);
