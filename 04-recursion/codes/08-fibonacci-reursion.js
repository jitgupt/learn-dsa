/**
 * Calculates the nth Fibonacci number using naive recursion.
 *
 * Description: The Fibonacci sequence is defined as F(0) = 0, F(1) = 1, and
 * F(n) = F(n-1) + F(n-2) for n > 1. This naive recursive implementation directly
 * follows the mathematical definition but results in exponential time complexity
 * due to redundant calculations of the same subproblems.
 *
 * @param {number} n - The position in the Fibonacci sequence (n >= 0)
 * @return {number} The nth Fibonacci number
 *
 * Time Complexity: O(2^n) - Exponential due to redundant recursive calls
 * Space Complexity: O(n) - Call stack depth grows linearly with n
 *
 */
function fibonacci(n) {
  if(n<=1) return n;

  return fibonacci(n-1) + fibonacci(n-2);
}

console.log(`Fibonaccii number of f(5) is ${fibonacci(5)}`);
