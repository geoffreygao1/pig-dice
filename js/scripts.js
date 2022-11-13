//Business Logic
function hideVowel(text) {
  let textArray = text.split('');
  for (i = 0; i < textArray.length; i++) {
    if (isVowel(textArray[i])) {
      textArray[i] = "-";
    } else {
      //do nothing
    }
  }
  return textArray.join('');
}

function isVowel(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(letter)) {
    return true;
  } else {
    return false;
  }
}

//UI Logic
function convertHandler() {
  //pull the text from our sentence input
  const sentence = document.getElementById("inputSentence").value;
  //run hideVowel
  let convertedSentence = hideVowel(sentence);
  //output it into our textArea
  let output = document.getElementById("convertedText");
  output.innerText = convertedSentence;
  //hide the initial div
  let initDiv = document.getElementById("init");
  let guessDiv = document.getElementById("guess");

  initDiv.classList.add("hidden");
  guessDiv.classList.remove("hidden");
}

function guessHandler() {
  //pull the text from our guess input
  const guess = document.getElementById("guessSentence").value;
  const sentence = document.getElementById("inputSentence").value;
  const result = document.getElementById("result");
  //compare it to the original sentence input
  //output success or fail into p
  if (guess === sentence) {
    result.innerText = "Hooray! You guessed correctly";
  } else {
    result.innerText = "Wah wah! Try again";
  }
}

window.addEventListener("load", function () {
  const form = document.getElementById("form");
  const convert = document.getElementById("convert");
  const guess = document.getElementById("guess");
  convert.addEventListener("click", convertHandler);
  guess.addEventListener("click", guessHandler);
})