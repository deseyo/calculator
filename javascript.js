const displayField = document.querySelector("#calculator-display");
const btnOperatorEquals = document.querySelector("#btn-operator-equals");
const btnOperatorAdd = document.querySelector("#btn-operator-add");
const btnOperatorSubtract = document.querySelector("#btn-operator-subtract");
const btnOperatorMultiply = document.querySelector("#btn-operator-multiply");
const btnOperatorDivide = document.querySelector("#btn-operator-divide");
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

addBtnEqualsOperatorEventListener(btnOperatorEquals);

addBtnMathOperatorEventListener(btnOperatorAdd, "+");
addBtnMathOperatorEventListener(btnOperatorSubtract, "-");
addBtnMathOperatorEventListener(btnOperatorMultiply, "*");
addBtnMathOperatorEventListener(btnOperatorDivide, "/");

addBtnNumEventListener(btnNumZero, 0);
addBtnNumEventListener(btnNumOne, 1);
addBtnNumEventListener(btnNumTwo, 2);
addBtnNumEventListener(btnNumThree, 3);
addBtnNumEventListener(btnNumFour, 4);
addBtnNumEventListener(btnNumFive, 5);
addBtnNumEventListener(btnNumSix, 6);
addBtnNumEventListener(btnNumSeven, 7)
addBtnNumEventListener(btnNumEight, 8);
addBtnNumEventListener(btnNumNine, 9);

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

function addBtnEqualsOperatorEventListener(btn) {
  btn.addEventListener("click", () => {
    if (inputNumTwo !== "") {
      let result = operate(inputNumOne, inputOperator, inputNumTwo)
      if (numsTurn === 2) displayField.textContent = `${result}`;
      inputNumOne = result;
      inputNumTwo = "";
      numsTurn = 1;
    }
  })
};

function addBtnMathOperatorEventListener(btn, operator) {
  btn.addEventListener("click", () => {
    displayField.textContent = "";
    inputOperator = operator;
    numsTurn = 2;
  });
}

function addBtnNumEventListener(btn, num) {
  btn.addEventListener("click", () => {
    displayField.textContent += num;
    if (numsTurn === 1) inputNumOne += num;
    else if (numsTurn === 2) inputNumTwo += num;
  });
}