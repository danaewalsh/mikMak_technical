// PROBLEM
// As a promotion for customers making purchases using the MikMak platform, we want to find exactly two unique gifts from a selection of available gifts whose total value equals 10% of the purchase price.

// EXAMPLE
// Using an array of available gift values (in dollars) of [1, 2, 6, 5, 2, 4]
// If a user buys $100 worth of products, we want to reward them with $10 ($100 * 10% = $10) worth of gifts. Your algorithm should return the indexes of the gifts that add up to $10, which would be [2, 5].
// If a user buys $40 worth of products using the same gift value array above, your algorithm should return [1, 4].

// I: value of purchase, array of available gift values
// O: An array of the indices of the gift values that add to 10% of purchase
// C:
// E:

function giftValue (purchase, gifts) {
  // identify 10% of the purchase

  // create the result array
  // iterate through the gifts array and identify which two gifts equal the 10% amount
    // comparing each value within the array to all other values
    // if two values equal the 10% amount, push their indices to the result array

  // return result array

  var percentage = (purchase * .10);
  var result = [];

  for (var i = 0; i < gifts.length; i++) {
    for (var j = i + 1; j < gifts.length; j++) {
      // if (i === j) {
      //   continue;
      // }
      if ((gifts[i] + gifts[j]) === percentage) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
}

var returnValue1 = giftValue(100, [1, 2, 6, 5, 2, 4])
console.log(returnValue1)
var returnValue2 = giftValue(40, [1, 2, 6, 5, 2, 4])
console.log(returnValue2);
