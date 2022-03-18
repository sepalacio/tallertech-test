/* Write a function that takes in a non-empty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order. */

const reverseItems = (current, previous) => current - previous;

const getSquare = (number) => number ** 2;

const squareArrayItems = (array) => array
  .map(getSquare)
  .sort(reverseItems);

const testCases = [
  [1, 2, 3, 5, 6, 8, 9],
  [-2, -1],
  [-10, -5, 0, 5, 10],
]

testCases.map((test, index) => {
  console.info(`Test |${index + 1}|`)
  console.info(`Squared sorted array: ${squareArrayItems(test)}`)
});


// Performance analysis:

// The solution above has a linear time complexity since time grows as the input is bigger.
// One possible way to improve performance could be implementing a memoization technique
// in which we store previously computed squares, so they do not need to be recalculated then again,
// this solution improves performance but consumes more memory over time.

// As the sorting method is an expensive operation with big arrays, we can also improve performance
// on it by storing the items in a Binary Search Tree, then performing in-order traversal to have
// the items sorted, with this approach we can get a logarithmical time complexity just on the sorting operation.

// Down below are some results on the faster way to get a Pow in some javascript methods,
// the one that throws the best result in Chrome devtools  is: number ** 2 (pow)
// with a time response of 0.005859375 ms for the pow of 20.000

/* console.time('Math.pow');
  Math.pow(20000, 2)
console.timeEnd('Math.pow');
0.008056640625 ms */

/* console.time('Number multiplied by itself');
20000 * 20000
console.timeEnd('Number multiplied by itself');
0.014892578125 ms */

/* console.time('Exponential expression');
20000 ** 2
console.timeEnd('Exponential expression');
0.005859375 ms */