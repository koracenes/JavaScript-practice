// class = (ES6 feature) provides a more structured and cleaner way to
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }
  clculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.22);
const product2 = new Product("pants", 22.22);
const product3 = new Product("underware", 100);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.clculateTotal(salesTax);

console.log(`Total price: $${total.toFixed(2)}`);
