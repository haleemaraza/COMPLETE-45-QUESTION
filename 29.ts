//  favorite fruits
let favoriteFruits: string[] = ['banana', 'apple', 'strawberry'];

// statements to check for certain fruits in the array
if (favoriteFruits.includes('banana')) {
  console.log("I really like bananas.");
}

if (favoriteFruits.includes('apple')) {
  console.log("I really like apples.");
}

if (favoriteFruits.includes('strawberry')) {
  console.log("I really like strawberries.");
}

if (favoriteFruits.includes('orange')) {
  console.log("I really like oranges.");
} else {
  console.log("Oranges are not in my list of favorite fruits.");
}

if (favoriteFruits.includes('grape')) {
  console.log("I really like grapes.");
} else {
  console.log("Grapes are not in my list of favorite fruits.");
}
