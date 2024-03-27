// .filter() = creates a new array by filtering out
//                 elements with a callback

//  EXAMPLE 1
/* 
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

 */
//  EXAMPLE 2
/* 
const age = [16, 17, 18, 18, 19, 20, 60];
const adults = age.filter(isAdult);
const childs = age.filter(isChild);

console.log(adults);
console.log(childs);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}

 */
//  EXAMPLE 3

const words = ["apple", "orange", "banana", "kiwi", "pomegrante", "coconout"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShortWords(element) {
  return element.length <= 6;
}

function getLongWords(element) {
  return element.length > 6;
}
