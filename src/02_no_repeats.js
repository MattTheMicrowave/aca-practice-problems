/*This code takes a range of years and checks each of the years, inclusive,
 *for years that have repeat integers, it then returns an array containing
 *only the years in that range that do not have repeat integers*/

function noRepeats(yearStart, yearEnd) {
    var outputArray = [];
    /* this is the array that we are going to push each
       non-repeat year to */
    /* the following for loop takes the range of years, inclusive
     * and chacks for repeat years using the checkRepeat helper function
     * defined below, if a year passes the checkRepeat helper function, ie
     * the function resolves to true, then that year gets pushed to the
     * array declared above */
    for (x = yearStart; x <= yearEnd; x++) {
        if (checkRepeat(x)) {

            outputArray.push(x);
        }
    }

    return outputArray;
}

/*This function is a helper function employed by the noRepeats function
 * defined above to determine if a given year has repeat integers or not */

function checkRepeat(year) {
    var yearCheck = {};
    /* this is an empty object we are going to add to for
     * keeping track of each of the integer values in a given year */
    var yearString = year.toString(); /* this convert the year into a string */
    var yearStringArray = yearString.split("");
    /* this parses the (now)
     * stringified year into an array of single string integers */
    // var yearStringArraySort = yearStringArray.sort();
    /* the above line is optional, it will sort the array from smallest
     * to largest numerical value, however, this ONLY works for an array of
     * single integer strings */
    /* this for loop iterates over each index of the array built from the
     * year given as the argument and checks if each integer exists as
     * a property in the yearCheck object decalred above, if an integer
     * already exists as a property in the yearCheck object, then the
     * checkRepeat function returns false and exits the loop, if it does
     * not already exists as a property, then it is added to the object with
     * a value of true and if successive true values persist through the
     * entire course of the for loop, the entire function resolves to true,
     * pushing that year to the array declared in noRepeats*/
    for (i = 0; i < yearStringArray.length; i++) {
        if (yearCheck[yearStringArray[i]]) {

            return false;

        } else {

            yearCheck[yearStringArray[i]] = true;
        }
    }

    return true;
}





module.exports = noRepeats;
