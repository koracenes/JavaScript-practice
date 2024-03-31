// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}

const person1 = {
  firstName: "Enes",
  lastName: "korac",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log(`Hi I am ${this.firstName}`);
  },
  eat: function () {
    console.log(`I am eating a Krabby Patty`);
  },
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

const person2 = {
  firstName: "Patric",
  lastName: "Star",
  age: 42,
  isEmployed: false,
  sayHello: () => console.log(`hey, my name is ${this.firstName}`),
  eat: () => console.log("I am eating chihcken and pizza"),
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();

// this = reference to the object where THIS is used
//           (the object depends on the immediate context)
//            person.name = this.name

const person3 = {
  name: "Enes",
  favFood: "hamburger",
  sayHello: function () {
    console.log(`Hi I am ${this.favFood}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};
