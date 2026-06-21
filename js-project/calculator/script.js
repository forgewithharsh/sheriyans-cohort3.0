const display = document.querySelector(".display");

function handleClickButton(btn) {
  const value = btn.innerText;

  if (value === "=") {
    let exp = display.innerText;

    exp = exp
      .replaceAll("×", "*")
      .replaceAll("÷", "/")
      .replaceAll("−", "-");

    display.innerText = eval(exp);

  } else if (value === "AC") {
    display.innerText = "";
  } else {
    display.innerText += value;
  }
}
