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

console.log(matrixSum);

let a = [5, -9, 2, -4, 33, 8];

const b = a.filter((e) => {
  return e > 0;
});

console.log(b);
