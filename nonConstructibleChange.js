/* Given an array of positive integers representing the values of coins in your possession,
write a function that returns the minimum amount of change (the  minimum sum of money)
that you  CANNOT create. The given coins can have any positive integer value and
aren't necessarily unique (i.e., you can have multiple coins of the same value). */

const isHighestMinimumChange = (minimumChange, coinValue) => (minimumChange + 1) < coinValue;

const getMinimumPossibleChange = (minimumChange, coinValue) => (
  isHighestMinimumChange(minimumChange, coinValue)
    ? minimumChange
    : minimumChange + coinValue
);

const sortCoinsByValue = (currentCoin, previousCoin) => currentCoin - previousCoin;

const minimumChangeAmount = (coins) => {
  const minimumChange = coins.sort(sortCoinsByValue).reduce(getMinimumPossibleChange, 0)

  return minimumChange + 1;
};

const testCases = [
  [5, 7, 1, 1, 2, 3, 22],
  [1, 1, 1, 1, 1],
  [1, 5, 1, 1, 1, 10, 15, 20, 100],
]

testCases.map((test, index) => {
  console.info(`Test |${index + 1}|`)
  console.info(`Minimum not possible change: ${minimumChangeAmount(test)}`)
});

// Solution:
// As we have an unsorted array of positive numbers, it make sense to sort it
// in order to accumulate the current maximum value in a variable, once you
// iterate over every coin, it is possible to compare the current sum+1 and
// determine if the new possible sum belongs to the minimum possible change
// to be retrieved.

// According to Big O notation, the time complexity of the solution is linear as it grows
// depending on the amount of coins in the array.

