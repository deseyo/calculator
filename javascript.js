let inputNumOne;
let inputOperator;
let inputNumTwo;

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