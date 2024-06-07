"use strict";
//item1
const item1 = {
    name: "camera",
    description: "a camera for taking picture",
    price: 220,
};
//item2
const item2 = {
    name: "iphone15pro",
    description: "iphone15pro is best for taking picture",
    price: 1100,
};
//item3
const item3 = {
    name: "macbookpro2023",
    description: "macbook pro is best for AI(Artifical Intelligence)",
    price: 1500,
};
//console.log
const items = [item1, item2, item3];
console.log(item1.name);
console.log(item2.description);
console.log(item3.price);
//loop 
for (const item of items) {
    console.log(item.name);
    console.log(item.description);
    console.log(item.price);
}
