const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = [];

form.addEventListener("submit", addTransaction);

function addTransaction(e) {
  e.preventDefault();

  const transactionObj = { id: generateId(), text: text.value, amount: amount.value };

  addTransactionDOM(transactionObj);
  transactions.push(transactionObj);

  console.log(transactions);
}

function generateId() {
  return Math.floor(Math.random() * 100000)
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "minus" : "plus";
  const item = document.createElement("li");

  item.innerHTML = `${transaction.text} ${transaction.amount} <button class"delete">X</button>`;
  list.appendChild(item)
}
