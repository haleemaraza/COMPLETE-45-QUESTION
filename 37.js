"use strict";
function makeShirt(size = "Large", message = " If this shirt is your size, take it") {
    console.log(`Shirt size: ${size}`);
    console.log(`Message: ${message}`);
    console.log("Summary: The shirt  size is " + size + " and the message is: '" + message + "'.");
}
makeShirt();
makeShirt("Medium");
makeShirt("Samll", "If this shirt is your size, take it");
