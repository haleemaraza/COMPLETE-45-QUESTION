"use strict";
// Define the showMagicians function
function showMagicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
// magician names
const magician_Names = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
const great_Magicians = makeGreat([...magician_Names]);
console.log("Original Magicians:");
showMagicians(magician_Names);
console.log("\nGreat Magicians:");
showMagicians(great_Magicians);
