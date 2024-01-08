
// Initial list of guests
let guests: string[] = ["Arfa", "Aylin", "Alif", "Haya", "Danis", "Eva"];

// Print the original invitation messages
for (let guest of guests) {
    console.log(`Dear ${guest}, let's catch dinner together.`)
};

// Inform about the bigger table
console.log("Good news! We found a bigger dinner table!");


// Print a new set of invitation messages
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to Dinner!`)
};

// Print a message indicating the number of people invited
console.log(`We are inviting ${guests.length} people to dinner.`);

// Inform that only two people can be invited
console.log("unfortunately, something has come up, and I am unable to organize the party." );

// Remove guests until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, i'm unable to organized the party `)
};

// Print a message to the remaining two people
for (let remainingGuest of guests) {
    console.log(`Dear ${remainingGuest}, "How about we catch up over dinner
     after my work at the office?".`)
};
    // Remove the last two names to have an empty list
guests.pop();
guests.pop();

// Print the list to make sure it's empty
console.log("Remaining guests:", guests);