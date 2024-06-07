"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let GuestList = [
    "Sultan Muhammad Ali",
    "Sultan Ahmad Ali",
    "Sultan Bhudhar Aziz",
    "Mian Sarwar Bodla"
];
let guesthowcannotcoming = "Mian Sarwar Bodla";
console.log(`${guesthowcannotcoming} not coming`);
let newguest = "Allama-e-Iqbal";
let indexofguesthowcannotcoming = GuestList.indexOf(guesthowcannotcoming);
if (indexofguesthowcannotcoming !== -1) {
    GuestList[indexofguesthowcannotcoming] = newguest;
}
GuestList.forEach((guestname) => {
    console.log(`Dear ${guestname} you are invited in dinner, please join us`);
});
