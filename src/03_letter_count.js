function letterCount(str) {

    var strArray = str.split("");
    var letterCountObject = {};

    for (i = 0; i < strArray.length; i++) {
        var letra = strArray[i];

        if (frequencyCount(letra)) {

            letterCountObject[letra] = 1;

        }

            letterCountObject[letra] += 1;

    }
    return letterCountObject;
}

function frequencyCount(x) {
    var frequencyCountObject = {};

      if (frequencyCountObject[x]) {
          return false;

      } else {

          frequencyCountObject[x] = true;

      }

      return true;
  }


module.exports = letterCount;
