// Store the numbers 1 through 9 in an array
const numbers_: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop 
for (let number of numbers_) {
  let ordinalEnding: string;

  if (number === 1) {
    ordinalEnding = 'st';
  } else if (number === 2) {
    ordinalEnding = 'nd';
  } else if (number === 3) {
    ordinalEnding = 'rd';
  } else {
    ordinalEnding = 'th';
  }

  // Print the result
  console.log(`${number}${ordinalEnding}`);
}
