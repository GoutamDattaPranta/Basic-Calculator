let result = document.getElementById("result");

function getResult(value) {
  result.value += value;
}

function calculate() {
  result.value = eval(result.value);
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

document.addEventListener("keydown", function(event) {
  if (event.code === "KeyC") {
    clearResult();
  }
  
  if (event.code === "Backspace") {
    backspace();
  }
  
  if (event.code === "Enter") {
    calculate();
  }
  
  if (event.code === "Digit0" || event.code === "Numpad0") {
    getResult("0");
  }
  
  if (event.code === "Digit1" || event.code === "Numpad1") {
    getResult("1");
  }
  
  if (event.code === "Digit2" || event.code === "Numpad2") {
    getResult("2");
  }
  
  if (event.code === "Digit3" || event.code === "Numpad3") {
    getResult("3");
  }
  
  if (event.code === "Digit4" || event.code === "Numpad4") {
    getResult("4");
  }
  
  if (event.code === "Digit5" || event.code === "Numpad5") {
    getResult("5");
  }
  
  if (event.code === "Digit6" || event.code === "Numpad6") {
    getResult("6");
  }
  
  if (event.code === "Digit7" || event.code === "Numpad7") {
    getResult("7");
  }
  
  if (event.code === "Digit8" || event.code === "Numpad8") {
    getResult("8");
  }
  
  if (event.code === "Digit9" || event.code === "Numpad9") {
    getResult("9");
  }
  
  if (event.code === "Period" || event.code === "NumpadDecimal") {
    getResult(".");
  }
  
  if (event.code === "NumpadAdd") {
    getResult("+");
  }
  
  if (event.code === "NumpadSubtract") {
    getResult("-");
  }
  
  if (event.code === "NumpadMultiply") {
    getResult("*");
  }
  
  if (event.code === "NumpadDivide") {
    getResult("/");
  }
  
  if (event.code === "NumpadEnter") {
    calculate();
  }
});
