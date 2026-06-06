let movies = ["Avengers", "KGF", "Salaar", "Devara", "Marco"];

for (let i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
}

const arr = [10, 20, 30, 40, 50];

// console.log("First: " + arr[0]);
// console.log("Last: " + arr[arr.length-1]);

let array = [
  [2, 3, 4],
  [2, 4, 9],
  [9, 3, 8],
];

let matrixSum = 0;

for (let i = 0; i < array.length; i++) {
  matrixSum += array[i][i];
}

// console.log(matrixSum);

let a = [5, -9, 2, -4, 33, 8];

const b = a.filter((e) => {
  return e > 0;
});

// console.log(b);

let obj = {
  user: "harsh",
  greet: function () {
    console.log("Good Morning...");
  },
};

// obj.greet();

let obj1 = {
  greet: () => {
    console.log("Hello");
  },
};

// obj1.greet();

let age = 19;

let greet = () => {
  console.log("Greet...");
};

let bye = () => {
  console.log("Bye Bye...");
};

let obj2 = {
  name: "Harsh",
  age: age > 10 ? greet : bye,
};

// console.log(obj2);

const arr1 = [10, 20, 30, 40];

const [x, y, ...z] = arr1;

// console.log(x, y, z);

let obj3 = {
  name: "harry",
  age: 20,
  batch: "cohort 3",
};

let { name, ...q } = obj3;

// console.log(name, q);

// Shallow Copy
let n = {
  name: "Harsh",
  age: 19,
};

let n2 = { ...n };

n2.name = "Harry";

// console.log(n);
// console.log(n2);

// Deep Copy
let original = {
  name: "Harsh",
  age: 19,
  college: {
    name: "HPU",
    student: 200000,
  },
};

let str = JSON.stringify(original);
let copy = JSON.parse(str);

copy.college.name = "UIT";
copy.name = "Harry";

// console.log(original);
// console.log(copy);

let ar = [100, { name: "Harsh", age: 19 }, 300];

// let ar2 = JSON.parse(JSON.stringify(ar))
let ar2 = structuredClone(ar);

ar2[1].name = "Harry";
ar2[2] = 100;

// console.log(ar);
// console.log(ar2);

let a1 = {
  name: "Harsh",
  age: 19,
  city: "Shimla",
};

for (let a2 in a1) {
  // console.log(a1[a2]);
}

// Constructor
function CreateBook(bookName, authorName, pages) {
  ((this.bookName = bookName),
    (this.authorName = authorName),
    (this.pages = pages),
    (this.getFrontPage = function () {
      console.log("Book Name :", this.bookName);
      console.log("Author Name :", this.authorName);
      console.log("Pages :", this.pages);
    }));
}

let book1 = new CreateBook("HP - Philospher Stone", "JK Rowling", 760);
let book2 = new CreateBook("Rich Dad Poor Dad", "Robert Kiyosaki", 440);
let book3 = new CreateBook("Sapiens", "Yuvan Noah Harrari", 850);

// console.log(book1);
// book2.getFrontPage();

function MakeStudents(fname, lname, contact, isVerified) {
  this.fname = fname;
  this.lname = lname;
  this.contact = contact;
  this.isVerified = isVerified;
  this.showProfile = function () {
    if (this.isVerified) {
      console.log(
        `Student Name : ${this.fname} ${this.lname}, Contact : ${this.contact}`,
      );
    } else {
      console.log(`User Not Verified`);
    }
  };
}

let student1 = new MakeStudents("Harsh", "Guleria", "4567876520", true);
let student2 = new MakeStudents("Sarthak", "Sharma", "7897876392", false);

// student1.showProfile();
// student2.showProfile();

class CreateStudents {
  constructor(fname, lname, contact, isVerified) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.isVerified = isVerified;
  }
}

let showProfile = function () {
  if (this.isVerified) {
    console.log(
      `Student Name : ${this.fname} ${this.lname}, Contact : ${this.contact}`,
    );
  } else {
    console.log(`User Not Verified`);
  }
};

MakeStudents.prototype.showProfile = showProfile;

let student3 = new MakeStudents("Harry", "Boy", 4567876520, true);
let student4 = new MakeStudents("Harsh", "Boy", 4574678328, false);

// console.log(student3)
// student3.showProfile();
// console.log(student4)
// student4.showProfile();

class User {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }
  // greetUser() {
  //   console.log(`Welcome ${this.fname} ${this.lname}`);
  // }
}

class Admin extends User {
  constructor(fname, lname, contact) {
    super(fname, lname, contact);
    this.accessAdminPanel = true;
  }
}

let u1 = new User("Gullu", "Guleria", 4567890);
let u2 = new Admin("Harsh", "Guleria", 4567890);

// console.log(u1);
// console.log(u2);

// Classical Inheritence

class Employee {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }
  greetUser() {
    console.log(`Welcome, ${this.fname} ${this.lname}!`);
  }
}

let s1 = new Employee("Ritik", "Rajput", 345896);

// s1.greetUser();

class Boss extends Employee {
  constructor(fname, lname, contact) {
    super(fname, lname, contact);
    this.adminAccess = true;
  }
  greet() {
    console.log(`Welcome, ${this.fname} ${this.lname}!`);
  }
}

let s2 = new Employee("Harsh", "Sharma", 4567890);
let s3 = new Boss("Sarthak", "Sharma", 4567890);

// console.log(s2);
// console.log(s3);

// s2.greetUser();
// s3.greet();

let arr3 = [5, 1, 3, 2, 6];

// Sum
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// console.log(findSum(arr3));

const output = arr3.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

// console.log(output);

// Max
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(findMax(arr3));

const result = arr3.reduce((max, curr) => {
  if (max < curr) {
    max = curr;
  }
  return max;
}, 0);

// console.log(result);

const users = [
  { firstName: "harsh", lastName: "guleria", age: 19 },
  { firstName: "harry", lastName: "guleria", age: 21 },
  { firstName: "gullu", lastName: "guleria", age: 20 },
  { firstName: "harshu", lastName: "guleria", age: 19 },
];

const output1 = users.map((x) => x.firstName + " " + x.lastName);

// console.log(output1);

const output2 = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

// console.log(output2);

const output3 = users.filter((x) => x.age < 20).map((x) => x.firstName);

// console.log(output3);

const output4 = users.reduce((acc, curr) => {
  if (curr.age < 20) {
    // acc[curr.firstName] = curr.age;
    acc.push(curr.firstName);
  }
  return acc;
}, []);

// console.log(output4);

// Inversion of Control
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// Promises

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

const GITHUB_API = "https://api.github.com/users/forgewithharsh";

const user = fetch(GITHUB_API);

// console.log(user);

// user.then((data) => {
//   console.log(data);
// });

// createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     return updateWalletBalance(paymentInfo);
//   });

const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// function validateCart(cart) {
//   return true;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successfully!");
//   });
// }

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
// Validate Cart
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }

// Logic for createOrder
//     const orderId = "12345";
//     if (orderId) {
//       resolve(orderId);
//     }
//   });

//   return pr;
// }

async function dataLao() {
  let response = await fetch("https://picsum.photos/v2/list");

  let data = await response.json();
  console.log(data);
}
// dataLao();

// let p1 = new Promise((resolve, reject) => {
//   let val = true;
//   if (val) {
//     console.log("Success");
//   } else {
//     console.log("Failure");
//   }
// });

let p2 = new Promise(function (resolve, reject) {
  // console.log("Promise Pending hai....");

  let result = true;

  setTimeout(() => {
    if (result) {
      // console.log("Value True");

      resolve();
    } else {
      // console.log("Value False");

      reject();
    }
  }, 3000);
});

p2.then(function () {
  // console.log("Promise is fullfilled");
})
  .catch(function () {
    // console.log("Promise is Rejected");
  })
  .finally(function () {
    // console.log("Promise END");
  });

/*
Order shoes from Amazon

order done -> order confirmed (your food is preparing)

mai waitv karunga order ke prepare hoke mujh tak aane ka

1. order aa gya
  - make a payment

2. order nhi aaya
  - complain karo

*/

function orderFood() {
  let myOrder = new Promise(function (resolve, reject) {
    console.log("Your order is coming....");

    let orderStatus = true;

    setTimeout(function () {
      if (orderStatus) {
        console.log("Delivery vaale bhaiya aa gye hain");
        resolve();
      } else {
        console.log("Order Failed");
        reject();
      }
    }, 3000);
  });

  myOrder.then(function () {
    console.log("Now Make a Payment");

    let paymentStatus = true;

    return new Promise(function (res, rej) {
      setTimeout(function () {
        if (paymentStatus) {
          console.log("Payment Done!");
          res();
        } else {
          console.log("Payment Failed!");
          rej();
        }
      }, 3000);
    })
      .then(function () {
        console.log("Food Eating....");
      })
      .catch(function () {
        console.log("Order Cancelled!");
      });
  });
}

// orderFood();

async function dataLao() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");

    let data = await response.json();

    data.forEach((elem) => {
      console.log(elem.title);
    });
  } catch (error) {
    console.error("URL galat hai bhai");
  }
}

// console.log(dataLao());

// response
//   .then(function (data) {
//     console.log("Data aa gya ✅");

//     return data.json();
//   })
//   .then(function (myData) {
//     console.log(myData);
//   })
//   .catch(function () {
//     console.error("Data nhi aaya ❌");
//   });

// Optional Chaining

let object = {
  name: "harsh",
  age: 18,
  company: {
    name: "Sheriyans",
  },
};

console.log(object?.company?.name);

// Nullish Coalescing

let age3 = null;

var object1 = {
  name: "harry",
  myAge: age3 ?? 22,
};

console.log(object1);

// Async returns a promise

const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!");
});

async function getData() {
  return p;
}

const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

// await can only be used inside an async function
// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise();

// function getData() {
//   p.then((res) => console.log(res));
// }

// getData()

const namaste1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Welcome, Start Javascript Journey");
  }, 10000);
});

const namaste2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Welcome, Start Javascript Journey");
  }, 5000);
});

async function namastePromise() {
  console.log("Hello World!");

  // JS Engine was waiting for promise to resolved

  const val = await namaste1;
  console.log("Namaste JS");
  console.log(val);

  const val2 = await namaste2;
  console.log("Namaste JS 2");
  console.log(val2);
}
// namastePromise();

const API_URL = "https://api.github.com/users/forgewithharsh";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);

    const json = await data.json();
    // frtch() => Response.json() => jsonValue

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
