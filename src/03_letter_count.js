function letterCount(str) {

    var strArray = str.split("");
    var letterCountObject = {};
    for (i = 0; i = strArray.length - 1; i++) {
        if (letterCountObject[strArray[i]]) {

            letterCountObject[strArray[i]] += 1;

        } else {

            letterCountObject[strArray[i]] = 1;
        }




    }
    return letterCountObject;
}

module.exports = letterCount;
