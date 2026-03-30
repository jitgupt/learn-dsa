/**
 * Merges two sorted arrays nums1 and nums2 into nums1 in-place.
 * nums1 has enough space (size m + n) to hold additional elements from nums2.
 * The first m elements of nums1 are the elements to be merged, and the last n elements are ignored.
 *
 * This function modifies nums1 directly without returning anything.
 *
 * Time Complexity: O(m + n) - We iterate through all elements of both arrays once.
 * Space Complexity: O(m) - We create a copy of the first m elements of nums1.
 *
 * @param {number[]} nums1 - The first sorted array with extra space at the end.
 * @param {number} m - The number of elements in nums1 that are part of the sorted array.
 * @param {number[]} nums2 - The second sorted array to merge into nums1.
 * @param {number} n - The number of elements in nums2.
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    const nums1Copy = nums1.slice(0,m);
    let p1 = 0;
    let p2 = 0;

    for(let i=0; i<m+n; i++) {
        if(p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[i] = nums1Copy[p1];
            p1++; 
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
};

const nums1 = [1,2,3,0,0,0]
const m = 3;
const nums2 = [2,5,6];
const n = 3;
// Test Case 1: Merging two non-empty sorted arrays
// Input: nums1 has [1,2,3] in the first 3 positions, nums2 = [2,5,6]
// Execution: Creates copy of [1,2,3], uses two pointers to compare and merge elements in order.
// Result: nums1 becomes [1,2,2,3,5,6]
merge(nums1, m, nums2, n)
console.log(`nums1 : ${nums1}`);

const nums3 = [1]
const m1 = 1;
const nums4 = [];
const n1 = 0;
// Test Case 2: Merging with an empty second array
// Input: nums3 has [1] in the first 1 position, nums4 = []
// Execution: Since nums4 is empty, nums3 remains unchanged.
// Result: nums3 stays [1]
merge(nums3, m1, nums4, n1)
console.log(`nums3 : ${nums3}`);


const nums5 = [0]
const m2 = 0;
const nums6 = [1];
const n2 = 1;
// Test Case 3: Merging with an empty first array
// Input: nums5 has [] (m=0), nums6 = [1]
// Execution: Copies empty array, then places elements from nums6 into nums5.
// Result: nums5 becomes [1]
merge(nums5, m2, nums6, n2)
console.log(`nums5 : ${nums5}`);


// Another approach

/**
 * Optimized approach to merge two sorted arrays into nums1 in-place.
 * This approach works backwards from the end of both arrays, avoiding the need for a copy.
 * Since nums1 has extra space at the end, we can safely fill it from the back.
 *
 * Algorithm: Uses two pointers starting from the end of actual elements (m-1 and n-1)
 * and iterates backward, placing the larger element at position m+n-1 each time.
 *
 * Time Complexity: O(m + n) - We iterate through all elements of both arrays once.
 * Space Complexity: O(1) - No extra space needed; modifies nums1 in-place without additional storage.
 *
 * @param {number[]} nums1 - The first sorted array with extra space at the end.
 * @param {number} m - The number of elements in nums1 that are part of the sorted array.
 * @param {number[]} nums2 - The second sorted array to merge into nums1.
 * @param {number} n - The number of elements in nums2.
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge2 = function(nums1, m, nums2, n) {
    let p1 = m-1;
    let p2 = n-1;

    for(let i = m+n-1; i>=0; i--) {
        if(p2 < 0) break;
        if(p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
};

const nums7 = [1,2,3,0,0,0]
const m3 = 3;
const nums8 = [2,5,6];
const n3 = 3;
merge2(nums7, m3, nums8, n3)
console.log(`nums7 : ${nums7}`);

const nums9 = [1]
const m4 = 1;
const nums10 = [];
const n4 = 0;
merge2(nums9, m4, nums10, n4)
console.log(`nums9 : ${nums9}`);


const nums11 = [0]
const m5 = 0;
const nums12 = [1];
const n5 = 1;
merge(nums11, m5, nums6, n5)
console.log(`nums11 : ${nums11}`);