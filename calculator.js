// calculator.js

const readline = require('readline-sync');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero!";
  }
  return a / b;
}

function calculate() {
  const num1 = parseFloat(readline.question('Enter the first number: '));
  const num2 = parseFloat(readline.question('Enter the second number: '));
  const operation = readline.question('Choose operation (+, -, *, /): ');

  let result;
  switch (operation) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      result = "Error: Invalid operation!";
  }

  console.log(`Result: ${result}`);
}

module.exports = calculate;

// Run the calculator
calculate();
