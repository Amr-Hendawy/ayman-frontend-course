let sentence = ["This is a short sentence, right?"];

let shortSentence = sentence[0].split(" ").filter(function (word) {
  return word.length >= 7;
});

console.log(shortSentence);

let sentence2 = ["Don't you love this kata?"];

let shortSentence2 = sentence2[0].split(" ").filter(function (el) {
  return el.length >= 4;
});
console.log(shortSentence2);
