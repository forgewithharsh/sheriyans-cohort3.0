const colorCodeContainer = document.getElementById("color-code");
let randomColor = null;
const optionContainer = document.getElementById("options-container");
let score = 0;

function generateRandomNumbersBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandomColorRGB() {
  const red = generateRandomNumbersBetween(0, 255);
  const blue = generateRandomNumbersBetween(0, 255);
  const green = generateRandomNumbersBetween(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore() {
  score++;
  document.getElementById("score").innerText = score;
}

function validateResult(el) {
  const selectedColor = el.target.style.backgroundColor;
  if (selectedColor === randomColor) {
    incrementScore()
  }
}

function startGame() {
  randomColor = generateRandomColorRGB();
  colorCodeContainer.innerText = randomColor;

  const ansIndex = generateRandomNumbersBetween(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.style.backgroundColor =
      i === ansIndex ? randomColor : generateRandomColorRGB();
    optionContainer.append(div);
  }
}

window.addEventListener("load", () => startGame());
