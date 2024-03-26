// .map() = accepts a callback and applies that function
//                 to each element of an array, then return a new array

// EXAMPLE 1
/* 
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

console.log(squares);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}
 */

// EXAMPLE 2
/* 
const students = ["enes", "haris", "irfan", "demir"];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(loweCase);
console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element) {
  return element.toUpperCase();
}

function loweCase(element) {
  return element.toLowerCase();
}
 */
//  EXAMPLE 3

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formatedDates = dates.map(formatDates);

console.log(formatedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
