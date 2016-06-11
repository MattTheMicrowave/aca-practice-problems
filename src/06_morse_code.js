var codigo = {
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g":"--.",
  "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.",
  "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-",
  "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--.." };


function morseEncode(n) {

  var arrayOfWords = n.split(" ");
  var arrayOfTranslatedWords = arrayOfWords.map(translateWord);
  var outPutString = arrayOfTranslatedWords.join("  ");
  return outPutString;
}


function translateWord(word) {
    var arrayOfLetters = word.split("");
    var arrayOfTranslatedLetters = arrayOfLetters.map(translator);
    var outPutWordString = arrayOfTranslatedLetters.join(" ");
    return outPutWordString;

}

function translator(x) {
  return codigo[x];

}
module.exports = morseEncode;
