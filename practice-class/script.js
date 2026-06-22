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

let nums = [5, 8, 10, 3];

const positiveNum = nums.every((num) => num >= 0);
console.log(positiveNum);

let numbers3 = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];
let count1 = {};
let maxCount = 0;
let mostFreq;

for (let num of numbers) {
  count1[num] = (count1[num] || 0) + 1;

  if (count1[num] > maxCount) {
    maxCount = count1[num];
    mostFreq = num;
  }
}

// console.log(mostFreq);

let nums0 = [10, 50, 20, 80, 40];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of nums0) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}

// console.log(secondLargest);

let user3 = {
  name: "Ritik",
  age: 21,
  city: "Bhopal",
  password: "12345",
};

user3.name;
user3.age = 22;
user3.country = "India";
delete user3.password;

// console.log(user3);

let product4 = {
  name: "Laptop",
  price: 60000,
};

// console.log(Object.hasOwn(product4, "price"));

let car = {
  brand: "BMW",
  model: "X5",
  year: 2025,
};

// console.log(Object.keys(car))
// console.log(Object.values(car));

let user5 = {
  name: "Ritik",
  age: 21,
  city: "Bhopal",
};

// console.log(Object.entries(user5))

let employee1 = {
  name: "Aman",
  salary: 50000,
};

employee1.salary = employee1.salary + (employee1.salary * 10) / 100;

// console.log(employee1);

let user6 = {
  name: "Ritik",
  address: {
    city: "Bhopal",
    state: "MP",
  },
};

// console.log(user6.address.city);

let student10 = {
  name: "Priya",
  age: 20,
  course: "BCA",
};

const { name: studentName, age: studentAge } = student10;

// console.log(studentName);
// console.log(studentAge);

let user11 = {
  name: "Ritik",
  age: 21,
};
let address11 = {
  city: "Bhopal",
  state: "MP",
};

let merge = { ...user11, ...address11 };

// console.log(merge);

let user12 = {
  name: "Ritik",
  age: 21,
  city: "Bhopal",
  country: "India",
};

// console.log(Object.keys(user12).length);

function greet1(name) {
  console.log(name);
}

// greet1("harsh")

function sum(a, b) {
  return a + b;
}

// console.log(sum(10, 20));

function square(num) {
  return num * num;
}

// console.log(square(5));

function isEven(num) {
  return num % 2 == 0;
}

// console.log(isEven(2));

function name(name = "Guest") {
  return "Hello, " + name;
}

// console.log(name());

function convertTemp(celsius) {
  return (celsius * 9) / 5 + 32;
}

// console.log(convertTemp(1));

const multiply = (a, b) => {
  return a * b;
};

// console.log(multiply(2, 5));

function calculateDiscount(price) {
  return price - (price * 10) / 100;
}

// console.log(calculateDiscount(500));

function findLargest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

// console.log(findLargest(10,50,20));

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello"))

function countVowels(str) {
  let count = 0;

  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("javascript"));

function generateUsername(name) {
  return name.toLowerCase().replace(" ", "_");
}

// console.log(generateUsername("Ritik Rajput"));

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// console.log(sum(1, 2, 3, 4));

function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login Successful";
  } else {
    return "Invalid Credentials";
  }
}

// console.log(login("admin", "1234"));

function show() {
  console.log(this);
}

// show();

// Q1.
function checker() {
  let check = prompt("Enter a number to check even and odd number: ");

  if (check % 2 == 0) {
    alert("Even Number");
  } else {
    alert("Odd number");
  }
}

// console.log(checker());

// Q2.
function greeting() {
  let name = prompt("Enter name:");
  let age = prompt("Enter age:");

  return `Hello, ${name}! You are ${age} years old.`;
}

// console.log(greeting());

// Q3.
function rectArea(w, h) {
  let width = prompt("Enter width:");
  let height = prompt("Enter height:");

  return `${width}* ${height}`;
}

// console.log(rectArea());

// Q4.
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

let fn = outer();
// fn()

// Q5.
function largest2(arr) {
  let largest2 = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest2) {
      largest2 = arr[i];
    }
  }
  return largest2;
}

// console.log(largest2([5, 124, 3, 25, 8]));

// Q6.
const productsv2 = [
  {
    productName: "iPhone 15",
    price: 79999,
    category: "Electronics",
  },
  {
    productName: "Nike Air Max",
    price: 5999,
    category: "Footwear",
  },
  {
    productName: "Wooden Study Chair",
    price: 6999,
    category: "Furniture",
  },
  {
    productName: "Wooden Study Table",
    price: 8999,
    category: "Furniture",
  },
];

const productNames = productsv2.map((product) => product.productName);

// console.log(productNames);

const furnitureProducts = productsv2.filter(
  (product) => product.category === "Furniture",
);

// console.log(furnitureProducts);

const totalPrice = productsv2.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

// console.log(totalPrice);

// Asynchronous JS

// console.log("Start");

// setTimeout(() => {
//   console.log("Timer");
// }, 2000);

// console.log("End");

function greetv2(name) {
  console.log(`Hello, ${name}`);
}

function welcome(cb) {
  let user = "Harsh";
  cb(user);
}

// welcome(greetv2)

function greetv3(name) {
  console.log(`Welcome, ${name}`);
}

// setTimeout(greetv3, 2000, "harsh");

let timer = setTimeout(() => {
  // console.log(`Hello,  harry!`);
}, 5000);

// clearTimeout(timer)

let countv2 = 5;

// const int = setInterval(() => {
//   console.log(countv2);
//   countv2--;
//   if (countv2 == 0) {
//     clearInterval(int);
//     console.log("Done");
//   }
// }, 1000);

function fetchUser(callback) {
  console.log("Fetching User...");
  setTimeout(() => {
    let user = {
      id: 1,
      name: "Harsh",
    };
    callback(user);
  }, 2000);
}

// fetchUser((val) => {
//   console.log(val);
// });

const receive = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Received");
  }, 2000);
});

// receive.then((val) => console.log(val));

function addTen(num) {
  return new Promise((resolve) => {
    resolve(num + 10);
  });
}

addTen(0)
  .then((res) => {
    console.log(res);
    return addTen(res);
  })
  .then((res) => {
    console.log(res);
    return addTen(res);
  })
  .then((res) => {
    console.log(res);
  });

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}

const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// getData()

const miniProject = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!data.ok) {
      throw new Error("Data not received");
    }

    const json = await data.json();

    console.log(json.name);
  } catch (error) {
    console.log(error);
  }
};

// miniProject();

function debounce(fn, delay) {
  let timer;

  return function () {
    clearInterval(timer);

    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

function search() {
  console.log("Searching...");
}

const debouncedSearch = debounce(search, 1000);
// debouncedSearch();

function one() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Step 1 done");
      res();
    }, 1000);
  });
}
function two() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Step 2 done");
      res();
    }, 1000);
  });
}
function three() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Step 3 done");
      res();
    }, 1000);
  });
}

async function all() {
  await one();
  await two();
  await three();
}

// all();

// const btn = document.querySelector("#add");
// const input = document.querySelector("#input-text");
// const ul = document.querySelector("#all-tasks");

// btn.addEventListener("click", () => {
//   const value = input.value;

//   if (value.trim() === "") return;

//   const li = document.createElement("li");

//   li.innerText = value;

//   const delButton = document.createElement("button");
//   delButton.classList.add("delete");
//   delButton.innerText = "Delete";

//   delButton.addEventListener("click", (e) => {
//     li.remove();
//   });

//   const span = document.createElement("span");
//   span.innerText = "Done";

//   span.addEventListener("click", () => {
//     li.classList.toggle("completed");
//   });

//   li.append(span);

//   li.append(delButton);

//   ul.appendChild(li);

//   input.value = "";
// });

// const themeBtn = document.querySelector("#theme-btn");

// themeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
// });

// const saveBtn = document.querySelector("#save-btn");
// const note = document.querySelector("#note");

// window.addEventListener("load", () => {
//   note.value = JSON.parse(localStorage.getItem("save")) || "";
// });

// saveBtn.addEventListener("click", () => {
//   localStorage.setItem("save", JSON.stringify(note.value));
// });

// const questions = document.querySelectorAll(".question");

// questions.forEach((q) => {
//   q.addEventListener("click", () => {
//     const answer = q.nextElementSibling;

//     document.querySelectorAll(".answer").forEach((item) => {
//       if (item !== answer) {
//         item.classList.remove("show");
//       }
//     });

//     answer.classList.toggle('show')
//   });
// });

// const tabs = document.querySelectorAll(".tab");
// const panels = document.querySelectorAll(".panel");

// tabs.forEach((e) => {
//   const target = e.dataset.tab;

//   e.addEventListener("click", () => {
//     tabs.forEach((item) => {
//       item.classList.remove("active");
//     });

//     panels.forEach((item) => {
//       item.classList.remove("show");
//     });

//     e.classList.add("active");

//     document.getElementById(target).classList.add('show');
//   });
// });

const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
  });
});

const addProducts = document.querySelectorAll(".add");

const countEl = document.querySelector("#count");
const totalEl = document.querySelector("#total");

let countf = 0;
let totalf = 0;

addProducts.forEach((item) =>
  item.addEventListener("click", () => {
    const price = Number(item.dataset.price);

    countf++;
    totalf = totalf + price;

    countEl.innerText = countf;
    totalEl.innerText = totalf;
  }),
);
