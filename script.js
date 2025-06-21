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
const outputScreen = document.querySelector(".current-output");
const buttonContainer = document.querySelector(".button-container");
let currentInput = "";

const populateScreen = (element) => {
  outputScreen.textContent = element;
};

// EVENT DELEGATION
buttonContainer.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  // Gets the value of the element clicked on
  const value = e.target.dataset.value;

  if (e.target.classList.contains("number")) {
    currentInput += value;
  } else if (e.target.classList.contains("operator")) {
  } else if (value === "AC") {
    currentInput = "";
  } else if (value === "Delete") {
    currentInput = currentInput.slice(0, -1);
  }
});
