function letterCount(str) {

    var strArray = str.split("");
    var letterCountObject = {};
    for (i = 0;i = strArray.length - 1; i++) {
        var letra = strArray[i];
        if (letterCountObject[letra]) {

            letterCountObject[letra] += 1;

        } else {

            letterCountObject[letra] = 1;
        }




    }
    return letterCountObject;
}

module.exports = letterCount;
