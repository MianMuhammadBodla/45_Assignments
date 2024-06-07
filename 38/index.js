"use strict";
function describe_city(city, country = "Unknow country") {
    return console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city("Lahore", "Pakistan");
describe_city("Toronto"); // Using the default country value
describe_city("California", "USA");
