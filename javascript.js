const displayField = document.querySelector("#calculator-display");
const btnOperatorClear = document.querySelector("#btn-operator-clear");
const btnOperatorEquals = document.querySelector("#btn-operator-equals");
const btnOperatorDot = document.querySelector("#btn-operator-dot")
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

addBtnClearOperatorEventListener(btnOperatorClear);

addBtnEqualsOperatorEventListener(btnOperatorEquals);

addBtnDotOperatorEventListener(btnOperatorDot);

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

function addBtnClearOperatorEventListener(btn) {
  btn.addEventListener("click", () => {
    displayField.textContent = "0";
    numsTurn = 1;
    inputNumOne = "";
    inputOperator = "";
    inputNumTwo = "";
  })
}

function addBtnEqualsOperatorEventListener(btn) {
  btn.addEventListener("click", () => {
    if (inputNumTwo !== "") {
      if (inputNumTwo === "0" && inputOperator === "/") {
        displayField.textContent = "Nice try";
        numsTurn = 1;
        inputNumOne = "";
        inputNumTwo = "";
      } else {
        let result = operate(inputNumOne, inputOperator, inputNumTwo)
        // if num is not decimal return true else false
        if (result - Math.floor(result) === 0 || result.toString().length < 9) displayField.textContent = `${result}`;
        else {
          let decimals = 9 - Math.floor(result).toString().length;
          displayField.textContent = `${result.toFixed(decimals)}`
        }
        inputNumOne = result;
        inputNumTwo = "";
        numsTurn = 1;
      }
    }
  })
};

function addBtnDotOperatorEventListener(btn) {
  btn.addEventListener("click", () => {
    switch (numsTurn) {
      case 1:
        if (Array.from(inputNumOne).includes(".")) break;
        else {
          displayField.textContent += ".";
          inputNumOne += ".";
          break;
        }
      case 2:
        if (Array.from(inputNumTwo).includes(".")) break;
        else {
          displayField.textContent += ".";
          inputNumTwo += ".";
          break;
        } 
    }
  })
}

function addBtnMathOperatorEventListener(btn, operator) {
  btn.addEventListener("click", () => {
    if (numsTurn === 2) {
      if (inputNumTwo !== "") {
        if (inputNumTwo === "0" && inputOperator === "/") {
          displayField.textContent = "Nice try";
          numsTurn = 1;
          inputNumOne = "";
          inputNumTwo = "";
        } else {
          let result = operate(inputNumOne, inputOperator, inputNumTwo)
          // if num is not decimal return true else false
          if (result - Math.floor(result) === 0 || result.toString().length < 9) displayField.textContent = `${result}`;
          else {
            let decimals = 9 - Math.floor(result).toString().length;
            displayField.textContent = `${result.toFixed(decimals)}`
          }
          inputNumOne = result;
          inputNumTwo = "";
          inputOperator = operator;
        }
      }
    } else {
      inputOperator = operator;
      numsTurn = 2;
    }
  });
}

function addBtnNumEventListener(btn, num) {
  btn.addEventListener("click", () => {
    switch (numsTurn)  {
      case 1:
        if (numsTurn === 1 && inputNumOne === "") displayField.textContent = "", displayField.textContent += num, inputNumOne += num;
        else displayField.textContent += num, inputNumOne += num;
        break;
      case 2:
        if (numsTurn === 2 && inputNumTwo === "") displayField.textContent = "", displayField.textContent += num, inputNumTwo += num;
        else displayField.textContent += num, inputNumTwo += num;
        break;
    }    
  });
}