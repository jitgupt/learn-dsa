/**
 * Calculates the nth Fibonacci number using an iterative approach.
 *
 * Description: The Fibonacci sequence is defined as F(0) = 0, F(1) = 1, and
 * F(n) = F(n-1) + F(n-2) for n > 1. This function uses iteration to compute
 * the nth Fibonacci number by maintaining only the last two values in the sequence,
 * avoiding the exponential time complexity of naive recursion.
 *
 * @param {number} n - The position in the Fibonacci sequence (n >= 0)
 * @return {number} The nth Fibonacci number
 *
 * Time Complexity: O(n) - The function iterates n-1 times to compute the result
 * Space Complexity: O(1) - Uses constant extra space with only a few variables
 *
 */
function fibonacci(n) {
  if(n===0) return 0;
  if(n===1) return 1;

  let first = 0;
  let second = 1;
  let fib = 0;
  
  for(let i= 2; i<=n; i++) {
    fib = first + second;
    first = second;
    second = fib;
  }
  return fib;
}

console.log(`Fibonaccii number of f(5) is ${fibonacci(5)}`);

console.log(`Fibonaccii number of f(6) is ${fibonacci(6)}`);

