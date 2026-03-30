/**
 * singleNumber(nums)
 *
 * Finds the element that appears exactly once in an array where every other
 * element appears exactly twice. It uses bitwise XOR to cancel duplicates.
 *
 * Time complexity: O(n)
 * - Single pass through array.
 * Space complexity: O(1)
 * - Constant additional space for accumulator.
 *
 * @param {number[]} nums - Array with exactly one unique element and all others duplicated.
 * @return {number} The non-duplicated element.
 */
var singleNumber = function(nums) {
    let xor = 0;

    for(let i=0; i<nums.length; i++) {
        xor = xor^nums[i]
    };

    return xor;
};

const nums = [2,2,1];
console.log(`Single number in ${nums} is ${singleNumber(nums)}`);

const nums1 = [1];
console.log(`Single number in ${nums1} is ${singleNumber(nums1)}`);

const nums2 = [4,1,2,1,2];
console.log(`Single number in ${nums2} is ${singleNumber(nums2)}`);

// Explanation for nums2 (third array): XOR accumulator state after each iteration
// 1st iter: xor=0^4 = 4
// 2nd iter: xor=4^1 = 5
// 3rd iter: xor=5^2 = 7
// 4th iter: xor=7^1 = 6
// 5th iter: xor=6^2 = 4
// Final result = 4 (unique number)

