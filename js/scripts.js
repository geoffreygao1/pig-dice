// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("Your addition result is " + add(number1, number2));
window.alert("Your subtraction result is " + subtract(number1, number2));
window.alert("Your multiplication result is " + multiply(number1, number2));
window.alert("Your division result is " + divide(number1, number2));