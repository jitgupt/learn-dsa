/**
 * Removes all instances of a given value from the array in-place and returns the new length.
 * The order of elements can be changed. Elements beyond the returned length are ignored.
 *
 * Time Complexity: O(n) - Each element is visited once.
 * Space Complexity: O(1) - In-place, no extra space used.
 *
 * @param {number[]} nums - The input array.
 * @param {number} val - The value to remove from the array.
 * @return {number} The length of the array after removing the specified value.
 */
function removeElement(nums, val) {
  let x = 0;

  for(let i = 0; i<nums.length; i++) {
    if(nums[i] !== val) {
      nums[x] = nums[i]
      x = x + 1;
    }
  }
  return x;
}

const nums = [3,2,2,3];
console.log(`${removeElement(nums, 3)} : ${nums}`);


const nums2 = [0,1,2,2,3,0,4,2];
console.log(`${removeElement(nums2, 2)} : ${nums2}`);
