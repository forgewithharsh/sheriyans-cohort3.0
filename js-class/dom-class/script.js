const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");

let flag = true;

btn.addEventListener("click", () => {
  let lightBulb = bulb.classList.toggle("lightUp");

  if (lightBulb) {
    btn.textContent = "Off";
  } else {
    btn.textContent = "On";
  }
});
