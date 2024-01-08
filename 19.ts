
// Initial list of guests
let guest_: string[] = ["Aylin", "Alif", "Arfa"];

// Invitation message
for (let guest of guest_) {
    console.log(`Dear ${guest}, let's catch dinner together.`)
};

// Inform about a bigger table
console.log("Good news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guest_.unshift("Haya");

// Add one new guest to the end of the array
guest_.push("Danis");

// Add one new guest to the middle of the array
let middleINdex_: number = Math.floor(guest_.length / 2);
guest_.splice(middleINdex_, 0, "Eva");

// Print a new set of invitation messages
for (let guest of guest_) {
    console.log(`Dear ${guest}, you are invited to Dinner!`)
};

// Print a message indicating the number of people invited
console.log(`We are inviting ${guest_.length} people to dinner.`);