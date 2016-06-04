// // this function takes a string (str) and checks if the words of the string
// have their respective vowels in alphabetical order, if so, each word of the
// string with the vowels in order is returned, if no word of the string
// contains its respective vowels in alphabetical order it returns nothing.

function orderedVowelWords(str) {

    var lowerCaseString = str.toLowerCase(); // this takes the inputed string
    // and makes all the characters lower case
    var wordArray = lowerCaseString.split(" "); // this splits the now
    // lowercase string into an array of each word of the string
    var filteredWordArray = wordArray.filter(orderedVowelWord); // this uses
    // the helper function orderedVowelWord to test each word of the string if
    // its respective vowels are in order,if they are not the word is discarded
    var outputArray = filteredWordArray.join(' '); // this joins the words
    // containing their respective vowels in alphabetical order in a string
    // separated by spaces
    return outputArray; // this returns the array containing only words
    // that have their vowels in alphabetical order
}

function orderedVowelWord(word) {
    var vowel; // this var will be used to store a value to set up a
    // comparison, it is undefined at this juncture and will be defined later
    for (i = 0; i < word.length; i++) {
    // above is a for loop that iterates over every letter of each word of the
    // string (str)
        if (isVowel(word.charAt(i))) {
        // this uses the helper function isVowel to test if the present letter
        // is a vowel or not
            if (vowel) {
            // this if condition sets up the comparison since vowel is not
            // defined at this juncture the first time through the loop, hence
            // the first vowel encountered in a word is assigned to the var
            // vowel on line 44, from that point on vowel will be defined and
            // this code will get exectuted
                var nextVowel = word.charAt(i); // this code is set up for the
                // first instance of a second vowel in a word, the second vowel
                // encountered is assigned to nextVowel, now a comparison
                // can be made between vowel and nextVowel to determine if
                // they are in order
                  if (vowel <= nextVowel) {
                      // for each two vowels encountered in a word, if the
                      // vowels are in order, vowel will be less than nextVowel,
                      // the less than or equal to takes care of the case when
                      // two of the same vowels are encountered in succession.
                      var vowel = nextVowel;
                      // if the vowels are in order, we want to progress
                      // through the word, so nextVowel which is the current
                      // vowel that the loop is on becomes the value for the
                      // var vowel, and the loop proceeds
                  } else if (vowel > nextVowel) {
                    // if vowel is greater than nextVowel, the vowels are
                    // out of order and we return false to break the loop
                    // and discard the current word
                        return false;
                    }
            } else {
              // this line of code is only used once, in the first instance of
              // encountering a vowel, it assigns the first vowel encountered
              // to the variable vowel.
              var vowel = word.charAt(i);
              }
        }
    }
    // if the loop proceeds through every letter of every word and the vowels
    // are in order the entire function returns true and that word will be
    // inputed into the final string to be returned
    return true;
}

// the following is a helper function to determine if a letter encountered in
// each 'word' is a vowel
function isVowel(x) {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
        // if the letter encountered is a or e or i or o or u, the function
        // returns true and the vowel order test on line 28 is exectuted
        return true;
    } else {
        // if the letter is not a vowel, then this function returns false
        // and the vowel order test is skipped
        return false;
    }
}



module.exports = orderedVowelWords;
