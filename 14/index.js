"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let GuestList = [
    "Sultan Muhammad Ali",
    "Sultan Ahmad Ali",
    "Sultan Bhudhar Aziz",
    "Mian Sarwar Bodla"
];
GuestList.forEach((guestname) => {
    console.log(`Dear ${guestname} you are invited in dinner, please join us`);
});
