// DOM elements
const inputBox = document.getElementById('inputBox');

function buttonClick(p) {
  inputBox.value = inputBox.value+p;
}

function dlt() {
  inputBox.value = inputBox.value.slice(0,-1);
}

function clearAll() {
  inputBox.value = '';
}

function result() {
  try{
    inputBox.value = eval(inputBox.value).toFixed(5);
  }
  catch{
    alert('Please give a valid equation.');
  }
}