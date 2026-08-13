"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userObj = {
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
let sum = (a, b) => {
    return a + b;
};
// console.log(sum(20, 20));
let mul = (a, b) => {
    let data = b();
    return a * data;
};
let res = mul(20, () => 10);
// console.log(res);
let add = (a) => (b) => {
    if (b !== undefined)
        return add(a + b);
    return a;
};
let data = add(90)(10)(90)();
console.log(data);
//# sourceMappingURL=index.js.map