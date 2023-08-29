"use strict";
let mybottle = {
    size: 15,
    type: "Coke"
};
console.log(mybottle);
function Drink(mybottle) {
    return (`I want ${mybottle.size} litre ${mybottle.type}`);
}
let mydrink = Drink(mybottle);
console.log(mydrink);
;
let mycan = {
    size: 1,
};
mycan = mybottle;
let duck = {
    canfly: true,
    canswim: true
};
let dog = {
    canfly: false,
    canswim: true,
};
if (duck.canfly && duck.canswim) {
    console.log("I wanna buy it");
}
else {
    console.log("i dont wana buy it");
}
if (dog.canfly && dog.canswim) {
    console.log("I wanna buy it");
}
else {
    console.log("i dont wana buy it");
}
