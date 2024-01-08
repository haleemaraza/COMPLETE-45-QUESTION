"use strict";
// showMagicians function
function _showMagicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_Great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
// magician names
const magicianNames = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
const greatMagicians = make_Great(magicianNames);
_showMagicians(greatMagicians);
