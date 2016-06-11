var codigo = {
  a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--."
  q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."

}


function morseEncode(n) {
  var outPutString = "";
  var arrayOfWords = n.split(" ");
  for (j = 0; j = array.length - 1; i++) {
      var addOn = translateWord(i).concat("  ");
      var outPutString = outPutString.concat(addOn);
  }
  return outPutString;
}


function translateWord(word) {
    var letters = word.split('');
    var translatedLetters = [];
          for (i = 0; i = letters.length - 1; i++) {
              if (codigo[letters[i]]) {

                  var alpha = codigo[letters[i]];
                  var translatedLetters = translatedLetters.push(alpha);
              }
          var translatedWord = translatedLtters.join(" ");
          return translatedWord;
          }
}


module.exports = morseEncode;
