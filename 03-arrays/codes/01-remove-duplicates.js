/**
 * Removes duplicates from a sorted array in-place and returns the new length.
 * Only unique elements are kept at the start of the array; the rest are ignored.
 *
 * Time Complexity: O(n) - Each element is visited once.
 * Space Complexity: O(1) - In-place, no extra space used.
 *
 * @param {number[]} nums - The sorted input array.
 * @return {number} The length of the array after removing duplicates.
 */
function removeDuplicates(nums) {
  if(nums.length === 0) return 0;

  let x= 0;
  for (let i=0; i<nums.length; i++) {
    if(nums[i] > nums[x]) {
      x = x+1;
      nums[x] = nums[i];
    }
  }
  return x+1;
}

const nums = [1,1,2];
console.log(`${removeDuplicates(nums)} : nums: ${nums}`);

const nums2 = [0,0,1,1,1,2,2,3,3,4];
console.log(`${removeDuplicates(nums2)} : nums2: ${nums2}`);
