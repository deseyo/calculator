const displayField = document.querySelector("#calculator-display");
const btnNumZero = document.querySelector("#btn-num-zero");
const btnNumOne = document.querySelector("#btn-num-one");
const btnNumTwo = document.querySelector("#btn-num-two");
const btnNumThree = document.querySelector("#btn-num-three");
const btnNumFour = document.querySelector("#btn-num-four");
const btnNumFive = document.querySelector("#btn-num-five");
const btnNumSix = document.querySelector("#btn-num-six");
const btnNumSeven = document.querySelector("#btn-num-seven");
const btnNumEight = document.querySelector("#btn-num-eight");
const btnNumNine = document.querySelector("#btn-num-nine");

addBtnEventListener(btnNumZero, 0);
addBtnEventListener(btnNumOne, 1);
addBtnEventListener(btnNumTwo, 2);
addBtnEventListener(btnNumThree, 3);
addBtnEventListener(btnNumFour, 4);
addBtnEventListener(btnNumFive, 5);
addBtnEventListener(btnNumSix, 6);
addBtnEventListener(btnNumSeven, 7)
addBtnEventListener(btnNumEight, 8);
addBtnEventListener(btnNumNine, 9);

let numsTurn = 1;
let inputNumOne = "";
let inputOperator = "";
let inputNumTwo = "";

function operate(numOne, operator, numTwo) {
  switch (operator) {
    case ("+"):
      return add(+numOne, +numTwo);
    case ("-"):
      return subtract(numOne, numTwo);
    case ("*"):
      return multiply(numOne, numTwo);
    case ("/"):
      return divide(numOne, numTwo);
    default:
      return "Error, wrong input";
  }
}

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function addBtnEventListener(btn, num) {
  btn.addEventListener("click", () => {
    displayField.textContent += num;
    if (numsTurn === 1) inputNumOne += num;
    else if (numsTurn === 2) inputNumTwo += num;
  });
}