"use strict";
// array of number
let numbers = [1, 2, 3, 4, 5];
// Try to access an element at an invalid index (intentional error)
let invalidIndex = 10;
// Check if the index is within the valid range before accessing the element
if (invalidIndex >= 0 && invalidIndex < numbers.length) {
    console.log(`accessing element at index ${invalidIndex}:${numbers[invalidIndex]}`);
}
else {
    console.log(`Invalid index ${invalidIndex}. please provide a valid index`);
}
