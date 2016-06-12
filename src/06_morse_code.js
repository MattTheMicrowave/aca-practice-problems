// this object contains all the key pairs for all of the alphabet letters
// and there morse code equivalents

var codigo = {
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g":"--.",
  "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.",
  "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-",
  "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--.." };


function morseEncode(n) {

  // var arrayOfWords = n.split(" "); this takes the string n and if more than
  // one word splits it into an array of separate words, if the string is a
  // single word it makes an array of only one word
  var arrayOfTranslatedWords = arrayOfWords.map(translateWord);
  // this returns an array with each index being the result of the function
  // translateWord being executed on it
  var outPutString = arrayOfTranslatedWords.join("  ");
  // this joins each translateWord into a single string with each word
  // being separated by a double space
  return outPutString;
  // this returns the string
}


function translateWord(word) {
    var arrayOfLetters = word.split("");
    // this splits up each word passed into the function into an array
    // containing each letter at each index
    var arrayOfTranslatedLetters = arrayOfLetters.map(translator);
    // this executes the translator function on each index of the letter
    // containing array, translating each letter to morse code
    var outPutWordString = arrayOfTranslatedLetters.join(" ");
    // this joins all of the morse code letters into a single string,
    // representing the translated word, with each of the translated letters
    // being separated by a space
    return outPutWordString;
    // this returns the translated word
}

function translator(x) {
  return codigo[x];
// this takes a letter and translates it to its morse code equivalent
// and returns it
}
module.exports = morseEncode;
