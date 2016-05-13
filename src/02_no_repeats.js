function noRepeats(yearStart, yearEnd) {
var outputArray = [];
    for (x = yearStart; x <= yearEnd; x++) {
      function makingTestingArray(x) {
      var stringified = x.toString();
      var numArray = stringified.split("");
      var sortedNumArray = numArray.sort();


        for (i = 0; i < sortedNumArray.length - 1; i++) {
        if (sortedNumArray[i] === sortednumArray[i + 1]) {

          return false;
        } else {

          outputArray = outputArray.push(x);
        }
}

    }
  }
    return outputArray;
}

module.exports = noRepeats;
