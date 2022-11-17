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
