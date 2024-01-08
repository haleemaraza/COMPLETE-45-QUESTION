"use strict";
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
    };
    options.forEach((option) => {
        const [key, value] = Object.entries(option)[0];
        car[key] = value;
    });
    return car;
}
const carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { year: 2022 });
console.log("Car Information:");
console.log(carInfo);
