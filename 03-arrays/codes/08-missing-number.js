/**
 * missingNumber(nums)
 *
 * Given an array `nums` containing n distinct numbers taken from 0..n,
 * finds the one number in that range that is missing.
 *
 * This implementation uses the arithmetic sum formula to compute the expected sum
 * of 0..n and subtracts the array sum to get the missing value.
 *
 * Time complexity: O(n)
 * - One pass to compute partialSum.
 * Space complexity: O(1)
 * - Constant extra space (few variables).
 *
 * @param {number[]} nums - Array of n distinct integers in the range 0..n with one missing.
 * @return {number} The missing integer.
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const totalSum = n * (n + 1) / 2;
    let partialSum = 0;

    for(let i=0; i< n; i++) {
        partialSum += nums[i]
    }

    return totalSum - partialSum;
};


const nums = [3, 0, 1]
console.log(`Missing number in ${nums} is ${missingNumber(nums)}`);

const nums1 = [0,1]
console.log(`Missing number in ${nums1} is ${missingNumber(nums1)}`);


const nums2 = [9,6,4,2,3,5,7,0,1]
console.log(`Missing number in ${nums2} is ${missingNumber(nums2)}`);