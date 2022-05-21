/*
Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.

maxValue([4, 7, 2, 8, 10, 9]); // -> 10
maxValue([10, 5, 40, 40.3]); // -> 40.3
maxValue([1000, 8]); // -> 1000
maxValue([-5, -2, -1, -11]); // -> -1
*/

const maxValue = (nums) => {
  let maxNum = -Infinity;
  for (let num of nums) {
    if (num > maxNum) maxNum = num;
  }
  return maxNum;
};

module.exports = {
  maxValue,
};

// n = length of array
// Time: O(n)
// Space: O(1)
