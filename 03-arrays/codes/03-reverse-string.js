/**
 * Reverses an array of characters in-place.
 * Time Complexity: O(n) - Each character is swapped once.
 * Space Complexity: O(1) - In-place, no extra space used.
 */
function reverseString(str) {
  let len = str.length;
  let halfLen = Math.floor(len / 2);

  for(let i = 0; i < halfLen; i++) {
    let temp = str[i];
    str[i] = str[len-1-i]
    str[len-1-i] = temp;
  }
}

const str = ['R', 'A', 'M']
reverseString(str);
console.log(str);


/**
 * Returns a new string that is the reverse of the input string using built-in methods.
 * Time Complexity: O(n) - split, reverse, and join each take O(n).
 * Space Complexity: O(n) - Extra space for the array created by split and reverse.
 */
function reverseString2(str) {
  // return str.reverse(); // There is no method reverse on JS string
  return str.split('').reverse().join('');
}

const str2 = 'RAM';
console.log(reverseString2(str2))

/**
 * Returns a new string that is the reverse of the input string using manual array construction.
 * Time Complexity: O(n) - Each character is processed once.
 * Space Complexity: O(n) - Extra space for the reversed array.
 */
function reverseString3(str) {
  const strArr = str.split('');

  const reversedStr = [];
  let j = 0;
  for(let i=strArr.length-1; i>=0; i--) {
    reversedStr[j] = strArr[i];
    j++;
  }
  return reversedStr.join('');
}

const str3 = 'RAM';
console.log(reverseString3(str3));

const str4 = ['R', 'A', 'M']
console.log(str4.reverse()) // reverse() mutates orginal array
console.log(str4);
