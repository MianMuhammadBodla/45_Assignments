"use strict";
// arrow function
const city_country = (city, country) => {
    return `${city}, ${country}`;
};
// Test the function with three city-country pairs
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("California", "USA"));
console.log(city_country("Toronto", "Canada"));
