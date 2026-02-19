// DOM elements
const inputBox = document.getElementById('inputBox');

// function that takes the value as a parameter and add it to the inputBox
function buttonClick(p) {
  inputBox.textContent = inputBox.textContent+p;
}

// function which delete one digit at once
function dlt() {
  inputBox.textContent = inputBox.textContent.slice(0,-1);
}

// function that clear the input box
function clearAll() {
  inputBox.textContent = '';
}

// function that calculates the equation
function result() {
  try{
    inputBox.textContent = eval(inputBox.textContent);
  }
  catch{
    alert('Please give a valid equation.');
  }
}
