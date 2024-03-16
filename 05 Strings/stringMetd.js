// string methods = allow you to manipulate and work with text (strings)

let userName = "KoracEnes    ";

// console.log(userName.charAt(0));
// console.log(userName.lastIndexOf("c"));
// console.log(userName.length);

// userName = userName.trim();
// console.log(userName);

// userName = userName.toUpperCase();
// console.log(userName);

// console.log(userName.repeat(3));

// let result = userName.startsWith(" ");

// console.log(result);

// result = userName.endsWith(" ");
// console.log(result);

// console.log(userName.includes("c"));

let phoneNumber = "123-345-6768";

phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

console.log(phoneNumber.padStart(15, "0"));
console.log(phoneNumber.padEnd(15, 0));
