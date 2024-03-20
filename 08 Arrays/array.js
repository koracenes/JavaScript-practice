// array = a variable like structure that can
//         hold more than 1 value

let fruits = ["apple", "orange", "banana "];

// fruits.push("coconout");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");
console.log(index);

console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
fruits.sort();
fruits.sort().reverse();
for (let fruit of fruits) {
  console.log(fruit);
}
