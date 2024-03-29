// function expressions = a way to define functions as
//                                 values or variables

//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners

// EXAMPLE 1

const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);

const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});

const evenNums = numbers.filter(function (element) {
  return element % 2 === 0;
});

const oddNums = numbers.filter(function (element) {
  return element % 2 !== 0;
});

const total = numbers.reduce(function (accumulator, element) {
  return accumulator + element;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(total);

// ======================================
function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}
