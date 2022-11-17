function pigLatin(word) {
  let firstLetter = word.charAt(0);
  if (letterType(firstLetter) === "vowel") {
    let temp = "";
    temp = word + "way";
    return temp;
  } else if (letterType(firstLetter) === "q") {
    let temp = "";
    temp = word.slice(2) + word.slice(0, 2) + "ay";
    return temp;
  } else if (letterType(firstLetter) === "consonant") {
    let constCounter = 0;
    for (i = 0; i < word.length; i++) {
      if (letterType(word.charAt(i)) === "consonant") {
      } else {
        constCounter = i;
        break;
      }
    }
    let temp = "";
    temp = word.slice(constCounter) + word.slice(0, constCounter) + "ay";
    return temp;
  }
}

function letterType(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(letter)) {
    return "vowel";
  } else if (letter.toLowerCase() === "q") {
    return "q";
  } else {
    return "consonant";
  }
}

function convertSentence(text) {
  let textArray = text.split(" ");
  let convArray = [];
  textArray.forEach(function (element) {
    let temp = "";
    temp = pigLatin(element.toLowerCase());
    convArray.push(temp);
  });
  let result = convArray.join(' ');
  return result;
}

//UI Logic
function convertHandler() {
  const sentence = document.getElementById("inputSentence").value;
  let convertedSentence = convertSentence(sentence);

  result.innerText = convertedSentence;

  let initDiv = document.getElementById("init");
  let guessDiv = document.getElementById("guess");
  initDiv.classList.add("hidden");
  guessDiv.classList.remove("hidden");
}

window.addEventListener("load", function () {
  const form = document.getElementById("form");
  const convert = document.getElementById("convert");
  convert.addEventListener("click", convertHandler);
})