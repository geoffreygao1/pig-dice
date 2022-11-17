//Business Logic
function numCounter(number) {
  let numArray = [];
  for (let i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray;
}

function numSplit(number) {
  const numStringArray = number.toString().split('')
  const numSplitArray = numStringArray.map(function (element) {
    return parseInt(element);
  });
  return numSplitArray;
}

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

function roboger(number) {
  let counter = numCounter(number);
  let outputArray = counter.map(function (element) {
    return numConvert(element);
  })
  return outputArray;
}

//UI Logic
function generateHandler(event) {
  event.preventDefault();
  const input = document.getElementById("inputNum").value;
  let outputArray = roboger(input);
  console.log(outputArray);
}

window.addEventListener("load", function () {
  const form = document.getElementById("input");
  form.addEventListener("submit", generateHandler);
})