// OPERATIONS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  }
  return "Error";
};
const operate = (a, b, operation) => operation(a, b);
// END OF OPERATIONS

// SELECTORS
let outputScreen = document.querySelector(".current-output");
const buttonContainer = document.querySelector(".button-container");
let currentInput = '';

const populateScreen = (element) => {
  outputScreen.textContent = element;
};


// EVENT DELEGATION
buttonContainer.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const value = e.target.dataset.value;

  if (value === "AC") {
    currentOutput = "";
    outputScreen.textContent = ""
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset)
    currentInput += button.textContent;
    outputScreen.textContent = currentInput;
  });
});
