let obj = {
  name: "Harsh",
  age: 19,
  company: "Google",
};

let fn = ({ name, company }) => {
  console.log(name, company);
};

fn(obj);

let a = 990;

let print = () => {
  console.log(a);
};

let ab = () => {
  let a = 80;

  print();
};

ab();
