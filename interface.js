"use strict";
class Car {
    move() {
        console.log("Car moving...");
    }
    break() {
        console.log("Car brakes...");
    }
}
class Bike {
    move() {
        console.log("Bike moving...");
    }
    break() {
        console.log("Bike brakes...");
    }
}
module.exports = {
    Car,
    Bike
};
