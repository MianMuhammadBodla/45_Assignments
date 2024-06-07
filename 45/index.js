"use strict";
function createCar(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
// Example usage:
const myCar = createCar("BMW", "Bi5", ["color", "red,yellow"], ["optional Feature", "sunroof"], ["speed", "320 KM/hour"]);
console.log(myCar);
