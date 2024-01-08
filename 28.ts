

//  variable age
let AGE: number = 28;

// Determine the person's age stage
if (AGE < 2) {
  console.log("The person is a baby.");
} else if (AGE >= 2 && AGE < 4) {
  console.log("The person is a toddler.");
} else if (AGE >= 4 && AGE < 13) {
  console.log("The person is a kid.");
} else if (AGE >= 13 && AGE < 20) {
  console.log("The person is a teenager.");
} else if (AGE >= 20 && AGE < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}
