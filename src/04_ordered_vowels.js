function orderedVowelWords(str) {
    while (str.indexOf(" ")) {
      
    }
    if (orderedVowelWord(str)) {

      return str;

    } else {

      return false;

    }
}

function orderedVowelWord(word) {
    var letterArray = word.split("");

    for (i = 0; i = letterArray.length - 1; i++) {

        if (letterArray[i] === 'a') {
            return true;
        }
        else if ( (letterArray[i] === 'e') && ( (word.indexOf('a') ) < (word.indexOf('e') ) ) ) {
            return true;
        }
        else if ( (letterArray[i] === 'i') && ( (word.indexOf('e') ) < (word.indexOf('i') ) ) ) {
            return true;
        }
        else if ( (letterArray[i] === 'o') && ( (word.indexOf('i') ) < (word.indexOf('o') ) ) ) {
            return true;
        }
        else if ( (letterArray[i] === 'u') && ( (word.indexOf('o') ) < (word.indexOf('u') ) ) ) {
            return true;
        }
        else {
            return false;
        }
    }

    }





module.exports = orderedVowelWords;
