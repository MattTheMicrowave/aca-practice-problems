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
      var parse = year.split("").sort();
          for (var i = 0; i < parse.length; i++) {
              if (yearCheck[parse[i]]) {

                return false;
              } else {

                yearCheck[parse[i]] = true;

              }

            return true;
          }



}

module.exports = noRepeats;
