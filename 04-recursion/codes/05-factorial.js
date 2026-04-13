/**
 * Calculates the factorial of a given number using recursion.
 * 
 * Description: The factorial of n (denoted as n!) is the product of all positive 
 * integers less than or equal to n. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120.
 * This function uses recursion where each call multiplies the number with the 
 * factorial of (n-1) until the base case (n === 1) is reached.
 * 
 * @param {number} n - The number for which factorial is to be calculated (n >= 1)
 * @return {number} The factorial of n
 * 
 * Time Complexity: O(n) - We make n recursive calls before reaching the base case
 * Space Complexity: O(n) - The call stack grows to depth n due to recursive calls
 * 
 */
function factorial(n) {
  if(n===1) return 1;

  return n * factorial(n-1);
}

console.log(`Factorial of 5 is ${factorial(5)}`);

console.log(`Factorial of 10 is ${factorial(10)}`);
