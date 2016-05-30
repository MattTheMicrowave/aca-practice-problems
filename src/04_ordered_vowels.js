function orderedVowelWords(str) {

    // var lowerCaseString = str.toLowerCase();
    var wordArray = lowerCaseString.split(" ");
    var outputString = "";

    for (j = 0; j < wordArray.length; j++) {
        if (orderedVowelWord(wordArray[j])) {

            outputString += outputString + wordArray[j];

        }
    }

    return outputString;
}

function orderedVowelWord(word) {
    var stringA = "";

    for (i = 0; i < word.length; i++) {
        if  ( word.charAt(i) == 'a' ||
              word.charAt(i) == 'e' ||
              word.charAt(i) == 'i' ||
              word.charAt(i) == 'o' ||
              word.charAt(i) == 'u' )
            {
             stringA += stringA + word.charAt(i);
        }
    }

    var arrayB = stringA.split("");
    var sortedArrayB = arrayB.sort();
    var casiStringB = sortedArrayB.join();
    var stringB = casiStringB.replace(/,/g, '');

    if (stringA == stringB) {

        return true;

    }  else {

        return false;

    }
}





module.exports = orderedVowelWords;
