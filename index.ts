enum User {
    USERNAME= "iclasschima",
    PASSWORD = "iclasschima123"
}

const loginUser = (username: string, password: any) : {} => {
    if (username == User.USERNAME && password == User.PASSWORD) {
        const user = {
            first_name: "iclass",
            last_name: "chima",
            email: "iclasschima@gmail.com",
            username: "iclasschima",
            balance: 3000,
            hobbies: ["gaming"]
        }
        return user;
    } else {
        return {
            message: "user does not exist"
        }
    }
}

const result: {} = loginUser("iclasschima", "iclasschima123")

console.log(result)