function letterCount(str) {

    var reString = str.replace(/\s+/g, '');
    var strArray = reString.split("");
    var letterCountObject = {};

    for (i = 0; i < strArray.length; i++) {
        var letra = strArray[i];

        if (letra === " ") {

            letterCountObject[letra] = -1;

        } else if (letterCountObject.hasOwnProperty(letra)) {

            letterCountObject[letra] += 1;

        } else {

            letterCountObject[letra] = 1;
        }
    }


    return letterCountObject;
}



module.exports = letterCount;
