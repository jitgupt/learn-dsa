/**
 * Calculates the sum of all numbers in an array using recursion.
 *
 * Time Complexity: O(n) - The function makes n recursive calls, where n is the array length.
 * Space Complexity: O(n) - Due to the recursion stack depth.
 *
 * @param {number[]} arr - The array of numbers to sum.
 * @returns {number} The sum of all numbers in the array.
 */
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

const arr1 = [6, 3, 5, 6, 2];
console.log(`sum of ${arr1} is ${sumArray(arr1)}`);
