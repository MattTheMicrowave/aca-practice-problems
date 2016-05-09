function nearestLarger(arr, i) {
  // i want to loop over the array but incrementing out from the given index
  // the most we can increment is +/- the value of the last index of the array
      for (x = 1; x < arr.length; x++) {

// var j is undefined, this will be defined later


// vars jL and jR increment out from the given index
          var jL = i - x;
          var jR = i + x;
// this tests if the indexes on the left are greater and because it is the
// first condition, this settles the left/right tie scenario
            if ((jL >= 0) && (arr[jL] > arr[i])) {

              return jL;
            }
// this tests the indexes on the right
            else if ((jR < arr.length) && (arr[jR] > arr[i])) {

              return jR;
            }
// this returns null if we have reached each end of the array without finding
// a greater value
            else {

              return null;
            }

          }
}

module.exports = nearestLarger;
