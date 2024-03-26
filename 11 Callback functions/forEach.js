// forEach() = method used to iterate over the elements
//                     of an array and apply a specified function (callback)
//                     to each element

//                     array.forEach(callback)
//                     element, index, array are provided

//  EXAMPLE 1

/* let numbers = [1, 2, 3, 4, 5];

numbers.forEach(square);
numbers.forEach(display);

function triple(element, index, array) {
  array[index] = element * 3;
}

function double(element, index, array) {
  array[index] = element * 2;
}

function square(element, index, array) {
  array[index] = Math.pow(element, 2);
}



function display(element) {
  console.log(element);
}
 */

//  EXAMPLE 2

let fruits = ["apple", "orange", "banana", "coconout"];

fruits.forEach(capitalize);
fruits.forEach(display);

function uppercase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowercase(element, index, array) {
  array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
  console.log(element);
}
