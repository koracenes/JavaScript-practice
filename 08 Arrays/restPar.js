// rest parameters = (...rest) allow a function work with a variable
//                                  number of arguments by bundling them into an array

//                                  spread = expands an array into separate elements
//                                  rest = bundles separate elements into an array

/* 
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

function openFridge(...foods) {
  console.log(foods);
}

// openFridge(food1, food2, food3, food4);

function getFood(...foods) {
  return foods;
}
const foods = getFood(food1, food2, food3, food4);

console.log(foods);
 */
/* 
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 2, 3);

console.log(`your total is ${total}`);
 */
/* 
function avg(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const totalAvg = avg(2, 6, 77, 4);
console.log(`avarage: ${totalAvg}`);
 */

function combineString(...strings) {
  return strings.join(" ");
}

const fullName = combineString("mr", "Spongebob", "squearpants", "III");

console.log(fullName);
