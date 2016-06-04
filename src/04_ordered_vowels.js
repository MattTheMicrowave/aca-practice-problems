function orderedVowelWords(str) {

    var lowerCaseString = str.toLowerCase();
    var wordArray = lowerCaseString.split(" ");
    var filteredWordArray = wordArray.filter(orderedVowelWord);
    var outputArray = filteredWordArray.join(' ');


    return outputArray;
}

function orderedVowelWord(word) {
    var vowel;
    for (i = 0; i < word.length; i++) {
        if (isVowel(word.charAt(i))) {
            if (vowel) {
                var nextVowel = word.charAt(i);
                  if (vowel <= nextVowel) {
                      var vowel = nextVowel;
                  } else if (vowel >= nextVowel) {
                        return false;
                    }
            } else {
              var vowel = word.charAt(i);
              }
        }
    }
    return true;
}

function isVowel(x) {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
        return true;
    } else {
        return false;
    }
}



module.exports = orderedVowelWords;
