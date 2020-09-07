"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
class Admin extends User {
    deleteUser() {
        console.log("User have been deleted!");
    }
}
class Agent extends User {
    requestLoan() {
        console.log("I need loan");
    }
}
module.exports = {
    Agent,
    Admin
};
