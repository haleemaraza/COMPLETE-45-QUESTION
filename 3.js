"use strict";
// lower case  
let x = "alif";
console.log(`lowercase: ${x.toLowerCase()}`);
//upper case
console.log(`uppercase: ${x.toUpperCase()}`);
// title case
let titleCaseName = x.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(`titlecase: ${titleCaseName}`);
