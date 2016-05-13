function noRepeats(yearStart, yearEnd) {
var outputArray = [];
var princip = yearStart;
var fin = yearEnding;
    // for (x = yearStart; x <= yearEnd; x++)
    //   var year = x;
      function makingTestingArray(princip, fin) {
        for (x = princip; x <= fin; x++) {
            var year = x;
            var stringified = x.toString();
            var numArray = stringified.split("");
            var sortedNumArray = numArray.sort();


        for (i = 0; i < sortedNumArray.length - 1; i++) {
            if (sortedNumArray[i] = sortednumArray[i + 1]) {

              return false;
            } else {

              outputArray = outputArray.push(year);
            }
}

    }
  }
    return outputArray;
}

module.exports = noRepeats;
