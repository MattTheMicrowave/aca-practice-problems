var flatten = require('array-flatten');  // brings in the function to 'unnest'
// nested functions

function wonkyCoins(n) {
    var numberOfCoins;  // returns length of flattened array after all of the
    // coins have converged down to 0
    var outPutArray; // brings in the array where each coin is converged to
    // zero by exhange()
    if (n == 0) {
        numberOfCoins = 1; // when n is zero, there is only 1 coin
        return numberOfCoins;
    } else {
        var outPutArray = exchange(n); // assigns the returned array from
        // exchange() to outPutArray
        var numberOfCoins = outPutArray.length; // correlates each index, of
        // which all will be zero, to a value of 1 coin
        return numberOfCoins; // returns the count of coins
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
