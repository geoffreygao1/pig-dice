//Business Logic

//Returns an array with index values of 0 up to an input number
function numCounter(number) {
  let numArray = [];
  for (let i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray;
}

//Returns an array with index values of each digit of an input number
function numSplit(number) {
  const numStringArray = number.toString().split('')
  const numSplitArray = numStringArray.map(function (element) {
    return parseInt(element);
  });
  return numSplitArray;
}

//Returns a string or number based on whether a digit exists in an input number
function numConvert(number) {
  let numSplitArray = numSplit(number);
  if (numSplitArray.includes(3)) {
    return "Won't you be my neighbor?";
  } else if (numSplitArray.includes(2)) {
    return "Boop!";
  } else if (numSplitArray.includes(1)) {
    return "Beep!";
  } else {
    return number;
  }
}

//Returns an array of converted numbers counting from 0 to the input number
function roboger(number) {
  let counter = numCounter(number);
  let outputArray = counter.map(function (element) {
    return numConvert(element);
  })
  return outputArray;
}

//Returns an array of converted numbers counting from the input number to 0
function reverseRoboger(number) {
  let counter = numCounter(number).reverse();
  let outputArray = counter.map(function (element) {
    return numConvert(element);
  })
  return outputArray;
}

//UI Logic
function checkForms() {
  const num = document.getElementById("inputNum").value;
  const name = document.getElementById("inputName").value;
  if (num && name) {
    return true;
  } else {
    return false;
  }
}

function generateHandler() {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = '';
  if (checkForms()) {
    const input = document.getElementById("inputNum").value;
    let outputArray = roboger(input);
    outputArray.forEach(function (element) {
      let itemDiv = document.createElement('p');
      itemDiv.innerText = element;
      outputDiv.append(itemDiv);
    });
  } else {
    outputDiv.innerText = "Please make sure to fill in all fields"
  }
}

function reverseHandler() {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = '';
  if (checkForms()) {
    const input = document.getElementById("inputNum").value;
    let outputArray = reverseRoboger(input);
    outputArray.forEach(function (element) {
      let itemDiv = document.createElement('p');
      itemDiv.innerText = element;
      outputDiv.append(itemDiv);
    });
  } else {
    outputDiv.innerText = "Please make sure to fill in all fields"
  }
}


window.addEventListener("load", function () {
  const form = document.getElementById("input");
  const generate = document.getElementById("generate");
  const reverse = document.getElementById("reverse");

  generate.addEventListener("click", generateHandler);
  reverse.addEventListener("click", reverseHandler);
})