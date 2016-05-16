function noRepeats(yearStart, yearEnd) {
    var outputArray = [];
    var princip = yearStart;
    var fin = yearEnd;

      function makingTestingArray(princip, fin) {
        for (x = princip; x <= fin; x++) {
            var year = x;
            var stringified = x.toString();
            var numArray = stringified.split("");
            var sortedNumArray = numArray.sort();
            outputArray = outputArray.push(year);

        for (i = 0; i < sortedNumArray.length - 1; i++) {
            if (sortedNumArray[i] === sortednumArray[i + 1]) {

              outputArray.pop();
            }
}

    }
}
    return outputArray;

}

module.exports = noRepeats;
