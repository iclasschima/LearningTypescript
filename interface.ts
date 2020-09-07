interface Vehicle {
    move(): void
    break(): void
}

class Car implements Vehicle {
    move() {
        console.log("Car moving...")
    }

    break() {
        console.log("Car brakes...")
    }
}

class Bike implements Vehicle {
    move() {
        console.log("Bike moving...")
    }

    break() {
        console.log("Bike brakes...")
    }
}

module.exports = {
    Car,
    Bike
}