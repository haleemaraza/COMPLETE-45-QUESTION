
// store a person's name with whitespace charactres

const person  ="\t\n haleema \t\n";

console.log(`Name with whitespace: "${person}`);

// print the name after striping the white spaces
const strippedName = person.trim();
console.log(`stripped name; "${strippedName}"`);