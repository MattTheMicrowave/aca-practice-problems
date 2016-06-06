var flatten = require('array-flatten');

function wonkyCoins(n) {
    var numberOfCoins;
    var outPutArray
    if (n == 0) {
        numberOfCoins = 1;
        return numberOfCoins;
    } else {
        var outPutArray = exchange(n);
        var numberOfCoins = outPutArray.length;
        return numberOfCoins;
      }
}

function exchange(n) {
    var coinArray = [Math.floor(n/2), Math.floor(n/3), Math.floor(n/4)];

    while (coinArray.filter(greaterThanZero).length > 0) {

        for (i = 0; i = coinArray.length - 1; i++) {
            if (coinArray[i] >= 1) {
                coinArray[i] = exchange(coinArray[i]);
                var addArray = flatten(coinArray[i]);
                coinArray = coinArray.concat(addArray);

            }
        }
    }
    return coinArray;
}

function greaterThanZero (index) {

      return index > 0;
}


module.exports = wonkyCoins;
