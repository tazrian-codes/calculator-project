// DOM elements
const inputBox = document.getElementById('inputBox');

// function that takes the value as a parameter and add it to the inputBox
function buttonClick(p) {
  inputBox.value = inputBox.value+p;
  inputBox.focus();
}

// function which delete one digit at once
function dlt() {
  inputBox.value = inputBox.value.slice(0,-1);
  inputBox.focus();
}

// function that clear the input box
function clearAll() {
  inputBox.value = '';
  inputBox.focus();
}

// function that calculates the equation
function result() {
  try{
    inputBox.value = eval(inputBox.value).toFixed(5);
    inputBox.focus();
  }
  catch{
    alert('Please give a valid equation.');
    inputBox.focus();
  }
}