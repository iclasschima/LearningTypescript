enum User {
    USERNAME= "iclasschima",
    PASSWORD = "iclasschima123"
}

type combine = "web" | "mobile"

const loginUser = (username: string, password: any, plaform: combine) : {} => {
    if (username == User.USERNAME && password == User.PASSWORD) {
        const user = {
            first_name: "iclass",
            last_name: "chima",
            email: "iclasschima@gmail.com",
            username: "iclasschima",
            balance: 3000,
            hobbies: ["gaming"],
            current_platform: plaform,
            message: "logged in successfully"
        }
        return user;
    } else {
        return {
            message: "user does not exist"
        }
    }
}

module.exports = loginUser;