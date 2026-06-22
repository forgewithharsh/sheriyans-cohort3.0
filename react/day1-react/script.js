let obj = {
  name: "Harsh",
  age: 19,
  company: "Google",
};

let fn = ({ name, company }) => {
  console.log(name, company);
};

// fn(obj);

let a = 990;

let print = () => {
  console.log(a);
};

let ab = () => {
  let a = 80;

  print();
};

// ab();

// console.log(window);

// console.log(React);

let h1 = document.createElement("h1");
h1.textContent = "hello";
document.body.append(h1);

let rh1 = React.createElement(
  "h1",
  null,
  React.createElement("span", {}, "i am under h1"),
);

let realDomElem = document.querySelector("#root");

let rootOfReact = ReactDOM.createRoot(realDomElem);

rootOfReact.render(rh1);

// console.log("Real Dom ->", h1);
// console.log("Virtual Dom ->", rh1);

import { main } from "./main.js";

let RDomElement = document.querySelector("#rootv2");

let div = React.createElement("div", {}, [
  React.createElement("h1", {key: 1}, React.createElement("span", {}, "i am span")),
  React.createElement("h2", {key: 2}, React.createElement("span", {}, "i am span in h2")),
]);

ReactDOM.createRoot(RDomElement).render(div);
