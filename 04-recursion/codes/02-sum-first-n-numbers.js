/**
 * Calculates the sum of the first n natural numbers using recursion.
 * 
 * Time Complexity: O(n) - The function makes n recursive calls.
 * Space Complexity: O(n) - Due to the recursion stack depth.
 * 
 * @param {number} n - The number up to which the sum is calculated.
 * @returns {number} The sum of the first n natural numbers.
 */
function sum(n) {
  if(n === 0) return 0;
  return n + sum(n-1) 
}

console.log(`Sum of first 10 numbers is ${sum(10)}`);
