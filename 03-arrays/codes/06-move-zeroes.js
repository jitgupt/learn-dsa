/**
 * Moves all zeroes in the array to the end while maintaining the relative order of non-zero elements.
 * Modifies the input array in-place.
 *
 * Time Complexity: O(n) - Each element is visited once.
 * Space Complexity: O(1) - In-place, no extra space used.
 *
 * @param {number[]} nums - The array to be modified.
 * @return {void}
 */
const moveZeroes = function(nums) {
    let p = 0;
    for (let i=0; i< nums.length; i++) {
        if(nums[i] !== 0) {
           nums[p] = nums[i];
           p++;
        }
    }

    for(let i = p; i<nums.length; i++) {
        nums[i] = 0
    }
};

const nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(`nums: ${nums}`);

const nums1 = [0];
moveZeroes(nums1);
console.log(`nums1: ${nums1}`);
