"use strict";
// places
let placesTovisit = ["Tokyo", "Italy", "Germany", "Turkiye", "UAE"];
// original order
console.log("original order :", placesTovisit);
// • Print your array in alphabetical order without modifying the actual list.
console.log("alphabatical order :", [...placesTovisit.sort()]);
// • Show that your array is still in its original order by printing it.
console.log("original order(unchange):", placesTovisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetic order:", placesTovisit.sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("original order(unchange):", placesTovisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed order:", placesTovisit);
// • Reverse the order of your list again. 
placesTovisit.reverse();
console.log("Back to original order:", placesTovisit);
// • Sort your array so it’s stored in alphabetical order. 
placesTovisit.sort();
console.log("Sorted in alphabetical order:", placesTovisit);
// • Sort to change your array so it’s stored in reverse alphabetical order. 
placesTovisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesTovisit);
