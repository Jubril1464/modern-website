// const animals = ["lion", "fish", "cat", 1, 3];
// console.log(animals);

// const fruits = new Array("apple", "banana", "grapes");
// console.log(fruits);

// // Accessing elements
// console.log(animals[1]);
// console.log(fruits[0]);
// console.log(animals.length);

// // Modifying elements
// animals.push("goat");
// console.log(animals);

// animals.pop();
// animals.pop();
// console.log(animals);
// animals.unshift("elephant");

// console.log(animals);

// animals.shift();
// console.log(animals);

// const products = ["laptop", "mobile", "tablet", "monitor", "keyboard"];

// // const someAnimals = products.slice(1);
// const someAnimals = products.slice(1, 4);
// console.log(someAnimals);

// console.log(products.indexOf("tablet"));
// console.log(products.includes("laptop"));

// const product = products.find(function (item) {
//   return item.includes("bile");
// });

// Find
// const product = products.find((a) => a.includes("bile"));

// console.log(product);

// // Map
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const mutliplyNumbers = numbers.map((b) => b * 2);

// console.log(mutliplyNumbers);

// // discount is 5%
// const prices = [100, 200, 300, 400, 500];
// const discountedPrices = prices.map((b) => b - b * 0.05);

// console.log(discountedPrices);

// /// Filter

// const filterPrices = prices.filter((b) => b > 200);

// console.log(filterPrices);

// const total = prices.reduce((a, b) => a + b, 0);
// console.log(total);

// const animals2 = ["lion", "fish", "cat", 1, 3];
// const animals3 = ["dog", "tiger"];
// const allAnimals = animals2.concat(animals3);
// console.log(allAnimals);

// const unsorted = [3, 1, 4, 5];
// const sorted = unsorted.sort();
// console.log(sorted);

// const names = ["jubril", "lukman"];
// const capitalNames = names.map((a) => a.toUpperCase());
// console.log(capitalNames)

//// Objects

const product = {
  name: "Laptop",
  price: 400,
  description: "Hp Laptop, with 8gb ram, 512 ssd hard disk, corei9",
};

console.log(product);
// Dot notation
console.log(product.name);
console.log(product.price);

// Bracket notation

console.log(product["name"]);
product.size = "13inches";

console.log(product);

const person = {
  name: "Jubril",
  age: 56,

  greet: function () {
    return `Hello, my name is ${this.name}`;
  },

  getAge() {
    return `My age is ${this.age}`;
  },
};

// const greetPerson = person.greet();
// console.log(greetPerson);

// console.log(person.getAge());

// const keys = Object.keys(person);
// const values = Object.values(person);

// console.log(keys);
// console.log(values);

// console.log(Object.entries(person));

const products = ["laptop", "mobile", "tablet", "monitor", "keyboard"];

// console.log(product[1]);
// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
// }

// using the for of loop

// for (const a of products) {
//   console.log(a);
// }

// // for each

// products.forEach((item, index) => console.log(`${index}: ${item}`));

// // for ... in loop

// for (const b in person) {
//   console.log(`${b}: ${person[b]}`);
// }

/// Arrays of objects

const cart = [
  {
    name: "laptop",
    price: "500",
    description: "Hp Laptop, with 8gb ram, 512 ssd hard disk, corei9",
  },
  {
    name: "Samsung",
    price: "300",
    description: "Samsung s24",
  },
];

console.log(cart);

cart.push({
  name: "Samsung",

  price: "6000",
  description: "Samsung s25 ultra",
});

const oneProduct = cart.find((item) => item.name === "Samsung");
console.log(oneProduct);

const filteredItem = cart.filter((item) => item.name === "Samsung");

console.log(filteredItem);

/// CRUD - Create - Sending data to the database, Read - getting data from the database, Update, Delete
