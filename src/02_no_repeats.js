function noRepeats(yearStart, yearEnd) {
        var outputArray = [];
    for (var x = yearStart; x <= yearEnd; x++) {
            if (check(x)) {

              outputArray.push(x);
            }
            }

return outputArray;
}



function check(year) {
      var yearCheck = {};
      var parseYear = year.split("");
      var parseYearSort = parseYear.sort();
          for (var i = 0; i < parse.length; i++) {
              if (yearCheck[parseYearSort[i]]) {

                return false;
              } else {

                yearCheck[parseYearSort[i]] = true;

              }

            return true;
          }



}

module.exports = noRepeats;
