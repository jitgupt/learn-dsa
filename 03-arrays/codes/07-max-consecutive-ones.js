/**
 * Finds the maximum number of consecutive 1s in a binary array.
 *
 * Time Complexity: O(n) - Each element is visited once.
 * Space Complexity: O(1) - Only a constant amount of extra space is used.
 *
 * @param {number[]} nums - The binary input array.
 * @return {number} The maximum number of consecutive 1s.
 */
var findMaxConsecutiveOnes = function(nums) {
  let currCount = 0;
  let maxCount = 0;

  for(let i=0; i<= nums.length; i++) {
    if(nums[i] === 1) {
      currCount++;
    } else {
        if(currCount > maxCount) {
          maxCount = currCount;
        }
        currCount = 0;
    }
  }
  return maxCount;
};

const nums = [1,1,0,1,1,1];
console.log(`Max consecutive ones: ${findMaxConsecutiveOnes(nums)}`);
