// logical operators =  used to combine or manipulate Boolean values
//                                    (true or false)
//                                      AND = &&
//                                      OR  = ||
//                                      NOT = !

const temp = -220;
console.log(temp);

console.log(`=====REGULAR=====`);
if (temp > 0) {
  console.log(`Weather is good`);
} else if (temp <= 30) {
  console.log(`the weather is good`);
} else {
  console.log(`weather is bad`);
}
console.log(`===== && =====`);

if (temp > 0 && temp <= 30) {
  console.log(`the weather is good`);
} else {
  console.log(`weather is bad`);
}

console.log(`===== || =====`);

if (temp <= 0 || temp > 30) {
  console.log(`the weather is BAD`);
} else {
  console.log(`weather is GOOD`);
}

const isSunny = true;

console.log(isSunny);

if (isSunny) {
  console.log(`it is Sunny`);
} else {
  console.log(`it is Cloudy`);
}

if (!isSunny) {
  console.log(`it is Sunny`);
} else {
  console.log(`it is Cloudy`);
}
