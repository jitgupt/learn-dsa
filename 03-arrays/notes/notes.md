# Section 3 : Arrays - Easy/medium

## <p style="text-align: center; font-size: 20px; font-weight: bold ;color: #e68a00">Remove Duplicates</p>

- Sorted, Increasing Order :
  [1, 2, 4, 8, 12] -> a[i+1] > a[i]

- Sorted, decreasing Order:
  [12, 9, 8, 7, 5, 1] -> a[i+1] <p a[i]

- Sorted, Non-decreading order : means that it is not necessary that each and every value should be greater that previous 
  value. means, Array can have duplicates.

  [1, 2, 3, 3, 3, 3, 4, 4, 5, 8, 9] -> a[i+1] >= a[i]

- In-place : means that no array should be created, instead use existing array

- Relative order should be maintained : order of elements should be same as in input array

  ![alt text](image.png)

  ![alt text](image-1.png)

  ![alt text](image-2.png)

  ![alt text](image-3.png)

  ![alt text](image-4.png)

## <p style="text-align: center; font-size: 20px; font-weight: bold ;color: #e68a00">Remove Element</p>

![alt text](image-5.png)

![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-8.png)

## <p style="text-align: center; font-size: 20px; font-weight: bold ;color: #e68a00">Reverse String</p>

![alt text](image-9.png)

![alt text](image-10.png)

![alt text](image-11.png)

![alt text](image-12.png)

```js
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


  function reverseString2(str) {
    // return str.reverse(); // There is no method reverse on JS string
    return str.split('').reverse().join('');
  }

  const str2 = 'RAM';
  console.log(reverseString2(str2))

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
```

## <p style="text-align: center; font-size: 20px; font-weight: bold ;color: #e68a00">Best time to buy and Sell Stocks</p>

A brute force algorithm is the simplest way to solve a problem by trying all possible solutions and picking the correct one.

Think of it as:

> “Let me check every option until I find the answer.”

**Example (Password Guessing)**

Imagine a 4-digit lock:

0000 → 0001 → 0002 → … → 9999

A brute force method tries every combination until it finds the correct one.

**🔹 Characteristics**

- ✅ Simple to understand and implement
- ❌ Not efficient for large inputs
- ❌ High time complexity (often O(n), O(n²), or worse)

**🔹 When is it used?**

- When problem size is small
- When no better optimized solution is known
- As a baseline to compare better algorithms

**🔹 Real-life analogy**

- Looking for your keys in a room:
- Brute force = checking every possible place one by one
- Optimized = remembering “I usually keep them on the table”

**🔹 Summary**

Brute force = try all possibilities without optimization

![alt text](image-13.png)

![alt text](image-14.png)

![alt text](image-15.png)

![alt text](image-16.png)

![alt text](image-17.png)

## <p style="text-align: center; font-size: 20px; font-weight: bold ;color: #e68a00">Merge Sorted arrays</p>

![alt text](image-18.png)

![alt text](image-19.png)

![alt text](image-20.png)

![alt text](image-21.png)

![alt text](image-22.png)

![alt text](image-23.png)

![alt text](image-24.png)

![alt text](image-25.png)

## <p style="text-align: center; font-size: 20px; font-weight: bold ;color: #e68a00">Move zeroes</p>

![alt text](image-26.png)

![alt text](image-27.png)

![alt text](image-28.png)

## <p style="text-align: center; font-size: 20px; font-weight: bold ;color: #e68a00">Max consecutive ones</p>

![alt text](image-29.png)

![alt text](image-30.png)

![alt text](image-31.png)

## <p style="text-align: center; font-size: 20px; font-weight: bold ;color: #e68a00">Missing number</p>

![alt text](image-32.png)

![alt text](image-33.png)

![alt text](image-34.png)

![alt text](image-35.png)

![alt text](image-36.png)

![alt text](image-37.png)

## <p style="text-align: center; font-size: 20px; font-weight: bold ;color: #e68a00">Single number</p>

![alt text](image-38.png)

![alt text](image-39.png)

![alt text](image-40.png)

![alt text](image-41.png)

![alt text](image-42.png)