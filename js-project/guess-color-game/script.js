const colorCodeContainer = document.getElementById("color-code");
let randomColor = null;
const optionContainer = document.getElementById("options-container");

function generateRandomNumbersBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandomColorRGB() {
  const red = generateRandomNumbersBetween(0, 255);
  const blue = generateRandomNumbersBetween(0, 255);
  const green = generateRandomNumbersBetween(0, 255);

  return `${red}, ${green}, ${blue}`;
}

function startGame() {
  randomColor = generateRandomColorRGB();
  colorCodeContainer.innerText = randomColor;

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = generateRandomColorRGB();
    optionContainer.append(div);
  }
}

window.addEventListener("load", () => startGame());
