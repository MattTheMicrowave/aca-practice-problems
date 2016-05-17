function noRepeats(yearStart, yearEnd) {
        var outputArray = [];
    for (x = yearStart; x <= yearEnd; x++) {
            if (check(x)) {

              outputArray.push(x);
            }
            }

return outputArray;
}



function check(year) {
      var yearCheck = {};
      var yearString = year.toString();
      var yearStringArray = yearString.split("");
      // var yearStringArraySort = yearStringArray.sort();
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
