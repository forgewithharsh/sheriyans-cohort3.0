// Q1
let prices = [100, 250, 500, 150, 700];

const newPrices = prices.filter((price) => price > 300);

// console.log(newPrices);

// Q2
let marks = [80, 90, 70, 85, 95];

const finalMarks = marks.reduce((acc, curr) => {
  const average = acc + curr;

  return average;
}, 0);

const totalMarks = finalMarks / marks.length;
// console.log(totalMarks);

// Q3
let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

let count = {};
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (count[num]) {
    count[num] += 1;
  } else {
    count[num] = 1;
  }
}

// console.log(count);

let frequency = 0;

let mostFrequent;

for (let key in count) {
  if (count[key] > frequency) {
    frequency = count[key];
    mostFrequent = key;
  }
}

// console.log(mostFrequent);

// Q4
let user = {
  name: "Ritik",
  age: 20,
  city: "Bhopal",
};

user.age = 21;

// console.log(user);

// Q5
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// Q6
let greet = (name) => {
  console.log("Hello,", name);
};

greet("harsh");

// Q7
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr);
}

console.log(sum(10, 20, 50, 20));

// Q8
let users = [
  { name: "ritik", age: 20 },
  { name: "aman", age: 16 },
  { name: "priya", age: 25 },
];

function adult(users) {
  return users.filter((user) => user.age >= 18);
}

// console.log(adult(users));

// Q9
let cart = [
  { name: "Mouse", price: 500, qty: 2 },
  { name: "Keyboard", price: 1000, qty: 1 },
  { name: "Monitor", price: 10000, qty: 1 },
];

function getCartTotal(cart) {
  return cart.reduce((acc, value) => {
    return acc + value.price * value.qty;
  }, 0);
}

// console.log(getCartTotal(cart));

let employees = {
  aman: 25000,
  ritik: 50000,
  priya: 45000,
};

let maxSalary = 0;
let employee = "";

for (let name in employees) {
  if (employees[name] > maxSalary) {
    maxSalary = employees[name];
    employee = name;
  }
}

// console.log(employee);

function discountCalculator(price) {
  return price - (price * 10) / 100;
}

// console.log(discountCalculator(500));

let students = [
  {
    name: "Ritik",
    marks: [80, 90, 85],
  },
  {
    name: "Aman",
    marks: [50, 40, 60],
  },
];

function generateReport() {
  return students.map((student) => {
    const total = student.marks.reduce((acc, curr) => acc + curr, 0);
    const average = total / student.marks.length;

    let grade;

    if (average >= 80) {
      grade = "A";
    } else if (average >= 60) {
      grade = "B";
    } else {
      grade = "C";
    }

    return {
      name: student.name,
      average,
      grade,
    };
  });
}

// console.log(generateReport());

// Phase 2 Pracice Sheet

let prices1 = [100, 250, 500, 150, 700];
const expensive = prices1.filter((price) => price > 300);

// console.log(expensive);

let students1 = ["Aman", "Ritik", "Priya", "Rahul"];
// console.log(students1[students1.length-1]);

let products = ["Laptop", "Mouse", "Keyboard"];
products.push("Monitor");
// console.log(products);

let notifications = ["Order Placed", "Order Shipped", "Order Delivered"];

notifications.pop();
// console.log(notifications);

let users1 = ["Aman", "Ritik", "Priya"];
// console.log(users1.includes("Ritik"));

let marks1 = [80, 90, 70];
const newMarks = marks1.map((e) => e + "%");
// console.log(newMarks);

let cart1 = ["Mouse", "Keyboard", "Monitor", "Laptop"];

// console.log(cart1.length);

let marks2 = [80, 90, 70, 85, 95];
const total = marks2.reduce((sum, mark) => sum + mark, 0);
const average = total / marks2.length;

// console.log(average);

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];

const newNumber = numbers2.filter((num) => num % 2 == 0);

// console.log(newNumber);

let products2 = ["Laptop", "Mouse", "Keyboard", "Monitor"];

// console.log(products2.indexOf("Keyboard"));

let sales = [500, 700, 1000, 300];
const revenue = sales.reduce((acc, curr) => +acc + curr, 0);

// console.log(revenue);

let users3 = ["ritik", "aman", "priya"];
const username = users3.map((user) => user.toUpperCase());
// console.log(username);

let ages = [12, 15, 17, 19, 22];
const greaterAge = ages.find((age) => age >= 18);

// console.log(greaterAge);

let nums= [5,8,10,3];

const positiveNum = nums.every((num) => num >= 0);
console.log(positiveNum);


