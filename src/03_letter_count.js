/*This function takes a string input and convers the string into an array of
 *single letter characters, removing the spaces in the process, then adding
 *each letter of the string to an object and assining an integer value to each
 *letter designating the frequency of that letter appearing in the string*/


function letterCount(str) {

    var reString = str.replace(/\s+/g, '');
    /* this globally removes any spaces
       between words */
    var strArray = reString.split("");
    /* this parses the string and converts
       it into an array of single characters */
    var letterCountObject = {};
    /* this is the empty object that we are going
       to add propertys and values to */

    /*the following is a for loop that interates over the array create
    above, if the property, which is a letter in this instance, already
    exists in the object we increment its value by 1, if it does not
    already exists in the object, it is entered into the object and given
    a value of 1 */
    for (i = 0; i < strArray.length; i++) {
        var letra = strArray[i];
        /* this assigns each letter of the array
               to the variable letra for each time through the loop */

        if (letterCountObject.hasOwnProperty(letra)) {

            letterCountObject[letra] += 1;

        } else {

            letterCountObject[letra] = 1;
        }
    }


    return letterCountObject;
    /* this returns the object built above
       with each different letter from the string and its corresponding
       frequency in that string */
}



module.exports = letterCount;
