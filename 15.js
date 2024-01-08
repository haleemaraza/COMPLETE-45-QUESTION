"use strict";
//        Guest list
let guestlist = ["Aylin", "Alif", "Arfa"];
// invitation message 
for (let guest of guestlist) {
    console.log(`Dear ${guest}, let catch dinner together`);
}
;
// Change in Guest List
const guestCantMakeIt = "Alif";
const newInvitee = "Haya";
// Print the guest name who can't make it
console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.\n`);
// Replace the guest name who can't make it with a new invite
const indexToRemove = guestlist.indexOf(guestCantMakeIt);
if (indexToRemove !== -1) {
    guestlist.splice(indexToRemove, 1, newInvitee);
}
;
// Print the updated invitation messages
for (const guest of guestlist) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}
;
