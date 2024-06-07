"use strict";
// Array of magician's names
const magicianNames = ["Habra Cadabra", "Magic Mike", "Amazing Alakazam", "Amazing Alakazam", "Magnificent Mystic"];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
// Modify the array to add "the Great" to each magician's name
const greatMagicianNames = make_great(magicianNames);
// Call the function to show the original magician's names
console.log("Original Magicians:");
showMagicians(magicianNames);
// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
