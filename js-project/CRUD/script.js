const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");

const productDiv = document.querySelector(".products");
const form = document.querySelector("form");

const productsArr = JSON.parse(localStorage.getItem("products")) || [];

let updateIndex = null;

let ui = () => {
  productDiv.innerHTML = "";
  productsArr.forEach((e, index) => {
    productDiv.innerHTML += `<div class="product-card">
          <div class="img">
            <img
              src="${e.image}"
              alt=""
            />
          </div>

          <div class="text">
            <h3>${e.productName}</h3>
            <p>${e.description}</p>
            <p>${e.price}</p>
          </div>

          <div class="btns">
            <button onclick="updateProduct('${e.productName}')" id="update">Update</button>
            <button onclick="deleteProduct(${index})" id="delete">Delete</button>
          </div>
        </div>`;
  });
};

ui();

createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let productName = e.target[0].value;
  let description = e.target[1].value;
  let price = e.target[2].value;
  let image = e.target[3].value;

  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    price.trim() === "" ||
    image === ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  let obj = {
    productName,
    description,
    price,
    image,
  };

  if (updateIndex !== null) {
    productsArr[updateIndex] = obj;
    updateIndex = null;
    localStorage.setItem("products", JSON.stringify(productsArr));
  } else {
    productsArr.push(obj);
    localStorage.setItem("products", JSON.stringify(productsArr));
  }

  ui();

  form.reset();

  formDiv.style.display = "none";
});

const updateProduct = (name) => {
  formDiv.style.display = "flex";
  let product = productsArr.find((elem) => elem.productName === name);
  updateIndex = productsArr.findIndex((elem) => elem.productName === name);

  form[0].value = product.productName;
  form[1].value = product.description;
  form[2].value = product.price;
  form[3].value = product.image;
};

const deleteProduct = (index) => {
  productsArr.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productsArr));

  ui();
};

const users = [
  {
    name: "Harsh Sharma",
    age: 21,
    address: "Sector 15",
    city: "Noida",
  },
  {
    name: "Rohit Kumar",
    age: 24,
    address: "MG Road",
    city: "Bengaluru",
  },
  {
    name: "Priya Singh",
    age: 22,
    address: "Civil Lines",
    city: "Prayagraj",
  },
  {
    name: "Amit Verma",
    age: 26,
    address: "Rajendra Nagar",
    city: "Patna",
  },
  {
    name: "Neha Gupta",
    age: 23,
    address: "Vaishali Nagar",
    city: "Jaipur",
  },
];

localStorage.setItem("name", JSON.stringify(users));

let lsd = localStorage.getItem("name");

let value = JSON.parse(lsd);
console.log(value);
