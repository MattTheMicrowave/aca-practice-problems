var flatten = require('array-flatten');

function wonkyCoins(n) {
    var setUpArray = exchange(n);
    var outPutArray = [];
    for (i = 0; i < setUpArray.length; i++) {
        for (j = 0; j < setUpArray[i].length; j++) {
              outPutArray.push(setUpArray[i][j]);
        }
    }
    var numberOfCoins = outPutArray.length;
    return numberOfCoins;
}

function exchange(n) {
    var coinArray = [Math.floor(n/2), Math.floor(n/3), Math.floor(n/4)];
    var filteredCoinArray = coinArray.filter(greaterThanZero);

    if (filteredCoinArray.length > 0) {
        var filteredCoinSubArray;
        for (i = 0; i = coinArray.length - 1; i++) {
            if (coinArray[i] > 0) {
                coinArray[i] = exchange(i);
                coinArray = coinArray.concat(coinArray[i]);
                filteredCoinSubArray = coinArray[i].filter(greaterThanZero);
                while (filteredCoinSubArray.length > 0) {
                        return exchange(i);
                }
            }
        }
    }

    return coinArray;
}

function greaterThanZero (index) {

      return index > 0;
}


module.exports = wonkyCoins;
