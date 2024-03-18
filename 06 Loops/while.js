// while loop = repeat some code WHILE some condition is true

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("enter your name");
  password = window.prompt("enter your pasword");

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("yopu are loged in");
  } else {
    console.log("Invalid username or password. try again");
  }
}

/* 
do {
  username = window.prompt("enter your name");
  password = window.prompt("enter your pasword");

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("yopu are loged in");
  } else {
    console.log("Invalid username or password. try again");
  }
} while (!loggedIn);

 */
