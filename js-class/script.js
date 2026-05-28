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

console.log(obj2);

const arr1 = [10, 20, 30, 40];

const [x, y, ...z] = arr1;

console.log(x, y, z);

let obj3 = {
  name: "harry",
  age: 20,
  batch: "cohort 3",
};

let { name, ...q } = obj3;

console.log(name, q);
