const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");

const productDiv = document.querySelector(".products");

const form = document.querySelector("form");

let productsArr = [];

let ui = () => {
  productDiv.innerHTML = "";


  productsArr.forEach((elem) => {
    productDiv.innerHTML += `<div class="product-card">
          <div class="img">
            <img
              src="${elem.image}"
              alt=""
            />
          </div>

          <div class="text">
            <h3>${elem.productName}</h3>
            <p>${elem.description}</p>
            <p>${elem.price}</p>
          </div>

          <div class="btns">
            <button id="update">Update</button>
            <button id="delete">Delete</button>
          </div>
        </div>`;
  });
};

createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let productName = event.target[0].value;
  let description = event.target[1].value;
  let price = event.target[2].value;
  let image = event.target[3].value;

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

  productsArr.push(obj);
  ui();
  // console.log(productsArr);

  formDiv.style.display = "none";

  form.reset();
});
