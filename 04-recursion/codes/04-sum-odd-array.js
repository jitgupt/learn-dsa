/**
 * Calculates the sum of all odd numbers in an array using recursion.
 *
 * Time Complexity: O(n) - The function makes n recursive calls, where n is the array length.
 * Space Complexity: O(n) - Due to the recursion stack depth.
 *
 * @param {number[]} arr - The array of numbers to sum (only odd numbers).
 * @returns {number} The sum of all odd numbers in the array.
 */
function sumOdd(arr) {
  if (arr.length === 0) return 0;
  if (arr[0] % 2 !== 0) {
    return arr[0] + sumOdd(arr.slice(1));
  } else {
    return sumOdd(arr.slice(1));
  }
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`sum of odd numbers in ${arr1} is ${sumOdd(arr1)}`);
