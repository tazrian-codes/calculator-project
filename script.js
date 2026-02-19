// DOM elements
const inputBox = document.getElementById('inputBox');

function buttonClick(p) {
  inputBox.value = inputBox.value+p;
  inputBox.focus();
}

function dlt() {
  inputBox.value = inputBox.value.slice(0,-1);
  inputBox.focus();
}

function clearAll() {
  inputBox.value = '';
  inputBox.focus();
}

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