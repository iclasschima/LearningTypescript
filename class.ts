class User {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name
    }
}

module.exports = User;