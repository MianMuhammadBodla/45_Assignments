"use strict";
// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.
const make_shirt = (size, message) => {
    console.log(`Size: ${size}, Message: '${message}'`);
};
// 2 ways to Call the function
// 1. call the function with the size and the message variables.
let size = "medium";
let message = "tell me about the color of the shirt";
make_shirt(size, message);
// 2. directly call the function
make_shirt("Large", "shirt price");
