type UserObj = {
  name: string;
  age: number;
  company: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
  employeeId?: string;
};

let userObj: UserObj = {
  name: "rahul",
  age: 54,
  company: "sheryians",
  address: {
    street: "Malabar road",
    city: "Mumbai",
    state: "Maharastra",
  },
};

userObj.employeeId = "har123";

// console.log(userObj);

let sum = (a: number, b: number): number => {
  return a + b;
};

// console.log(sum(20, 20));

let mul = (a: number, b: () => number): number => {
  let data = b();
  return a * data;
};

let res = mul(20, () => 10);
// console.log(res);

let add = (a: number) => (b: number) => {
  if (b !== undefined) return add(a + b);
  return a;
};

let data = add(90)(10)(90)();
console.log(data);
