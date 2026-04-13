/**
 * Checks if a given number is a power of two using recursion.
 * 
 * Description: A number is a power of two if it can be expressed as 2^k where k >= 0.
 * This function uses recursion by repeatedly dividing the number by 2 until it reaches 1
 * (indicating it's a power of two) or encounters a number less than 1 or not divisible by 2
 * (indicating it's not a power of two).
 * 
 * @param {number} n - The number to check (should be a positive integer)
 * @return {boolean} True if n is a power of two, false otherwise
 * 
 * Time Complexity: O(log n) - The number of recursive calls is logarithmic as we divide by 2 each time
 * Space Complexity: O(log n) - The call stack depth grows logarithmically with n
 * 
 */
function isPowerOfTwo(n) {
  if(n===1) return true;
  else if (n<1 || n%2 !== 0) return false;

  return isPowerOfTwo(n/2);
}

console.log(`9 is ${isPowerOfTwo(9) ? '' : 'not'} power of 2`);

console.log(`20 is ${isPowerOfTwo(20) ? '' : 'not'} power of 2`);

console.log(`16 is ${isPowerOfTwo(16) ? '' : 'not'} power of 2`);


