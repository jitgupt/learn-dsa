/**
 * singleNumber(nums)
 *
 * Finds the element in an array where every other element appears exactly twice,
 * and only one element appears once. This implementation uses a hash map to count
 * occurrences and then scans for the number with frequency 1.
 *
 * Time complexity: O(n)
 * - First loop counts frequencies in O(n).
 * - Second loop finds the single element in O(n).
 * Overall O(n).
 *
 * Space complexity: O(n) (additional hash map)
 * - In worst case (all unique values except single duplicate pairs), hash size is O(n).
 *
 * @param {number[]} nums - Non-empty array of integers with exactly one unique element.
 * @return {number} The integer that appears only once.
 */
var singleNumber = function(nums) {
    const hash = {};

    for(let i=0; i<nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }

    for(let i=0; i<nums.length; i++) {
        if(hash[nums[i]] === 1) return nums[i]
    }
};

const nums = [2,2,1];
console.log(`Single number in ${nums} is ${singleNumber(nums)}`);

const nums1 = [4,1,2,1,2];
console.log(`Single number in ${nums1} is ${singleNumber(nums1)}`);

const nums2 = [1];
console.log(`Single number in ${nums2} is ${singleNumber(nums2)}`);