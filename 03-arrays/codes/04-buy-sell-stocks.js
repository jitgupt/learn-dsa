/**
 * Find the maximum profit from buying and selling a stock once
 * Approach: Single pass with tracking minimum price seen so far
 * Time Complexity: O(n) where n is the length of prices array
 * Space Complexity: O(1)
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let min = prices[0];

  for(let i = 1; i< prices.length; i++) {
    if(prices[i]-min > maxProfit) {
      maxProfit = prices[i]-min;
    }
    if(prices[i] < min) {
      min = prices[i]
    }
  }

  return maxProfit;
}

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));

const prices2 = [7,6,5,4,3];
console.log(maxProfit(prices2));


/**
 * Find the maximum profit from buying and selling a stock once
 * Approach: Brute force - check all possible buy-sell combinations
 * Time Complexity: O(n²) where n is the length of prices array
 * Space Complexity: O(1)
 */
function maxProfit1(prices) {
  let maxProfit = 0;

  for(let i=0; i<prices.length; i++) {
    for(let j=i; j<prices.length; j++) {
      if(prices[j]-prices[i] > maxProfit) {
        maxProfit = prices[j]-prices[i]
      } 
    }
  }
  return maxProfit
}

const prices3 = [7,1,5,3,6,4];
console.log(maxProfit1(prices));

const prices4 = [7,6,5,4,3];
console.log(maxProfit1(prices2));