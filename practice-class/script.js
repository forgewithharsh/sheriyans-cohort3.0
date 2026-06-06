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
console.log(count);

