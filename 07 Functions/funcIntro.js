// function = A section of reusable code.
//                    Declare code once, use it whenever you want.
//                    Call the function to execute that code.

/* function happyBirthday(username, age) {
  console.log(`Happy birthday to you!`);
  console.log(`Happy birthday to you!`);
  console.log(`Happy birthday dear ${username}!`);
  console.log(`Happy birthday to you!`);
  console.log(`You are ${age} years old`);
}

happyBirthday("Enes", 30);
happyBirthday("spongebob", 25); */

function add(x, y) {
  return x + y;
}
let ans = add(2, 3);

console.log(ans);

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidEmail("enes@gmail.com"));
