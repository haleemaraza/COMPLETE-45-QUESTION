"use strict";
function orderSandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
        console.log("Items: " + items.join(", "));
        console.log("Enjoy your sandwich!");
    }
    console.log();
}
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "cream cheese", "Mayo");
orderSandwich();
