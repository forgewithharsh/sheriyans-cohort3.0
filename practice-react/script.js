// let h1 = document.createElement("h1");
// h1.textContent = "hello";
// document.body.append(h1);

// let rh1 = React.createElement(
//   "h1",
//   null,
//   React.createElement("span", {}, "i am under h1"),
// );

// let root = document.querySelector("#root");

// let rootOfReact = ReactDOM.createRoot(root);

// rootOfReact.render(rh1);

// console.log("Real DOM", h1);
// console.log("Virtual DOM", rh1);

let div = React.createElement("div", {}, [
  React.createElement(
    "h1",
    {},
    React.createElement("span", {}, "i m span in h1"),
  ),
  React.createElement(
    "h2",
    {},
    React.createElement("span", {}, "i m span in h2"),
  ),
]);

let r = document.querySelector("#root");

ReactDOM.createRoot(r).render(div);
