//ternary operator = a shortcut to if() and else() statements
//                   helps to assign a variable based on a condition
//                   condition ? codeIfTrue: codeIfFalse

// let time = 16;

// let greeting = time < 12 ? "good morning" : "good afternoon";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? `u are student` : `u are not student`;
// console.log(message);

let amount = 123;

let discount = amount >= 100 ? 10 : 0;

console.log(`Your total is  ${amount - (amount * discount) / 100}`);
