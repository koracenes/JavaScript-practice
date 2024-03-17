//string slicing = creating a substring
//                            from a portion of another string
//                            string.slice(start, end)

// const fullName = "Enes Korac";
/* 
let firstName = fullName.slice(0, 4);
let lastName = fullName.slice(5, 10);

console.log(firstName);
console.log(lastName);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstChar);
console.log(lastChar);
 */
/* let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

const email = "enes2@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension); */

// Method Chaining = Calling one method after another
//                                    in one continuous line of code.

// ---- NO METHOD CHAINING ----
let username = window.prompt("Enter your username");

username = username.trim();

console.log(username);
let letter = username.charAt(0);
console.log(letter);
letter = letter.toUpperCase();
console.log(letter);

let extraChar = username.slice(1);
console.log(extraChar);
extraChar = extraChar.toLowerCase();
console.log(extraChar);

username - letter + extraChar;

console.log(username);

// ---- METHOD CHAINING ----
