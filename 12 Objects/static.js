// static = keyword that defines properties or methods that belong
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)

//  EXAMPLE 1
/* 
class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);

console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

 */

//  EXAMPLE 2

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUser() {
    console.log(`There are ${User.userCount} useres online`);
  }

  sayHello() {
    console.log(`Hello, my name is ${this.username}`);
  }
}

const user1 = new User("spongebob");
const user2 = new User("Patric");
const user3 = new User("Sandy");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

user1.sayHello();
user2.sayHello();
user3.sayHello();

console.log(User.userCount);
User.getUser();
