"use strict";
var Login;
(function (Login) {
    Login["USERNAME"] = "iclasschima";
    Login["PASSWORD"] = "iclasschima123";
})(Login || (Login = {}));
const loginUser = (username, password, plaform) => {
    if (username == Login.USERNAME && password == Login.PASSWORD) {
        const user = {
            first_name: "iclass",
            last_name: "chima",
            email: "iclasschima@gmail.com",
            username: "iclasschima",
            balance: 3000,
            hobbies: ["gaming"],
            current_platform: plaform,
            message: "logged in successfully"
        };
        return user;
    }
    else {
        return {
            message: "user does not exist"
        };
    }
};
module.exports = loginUser;
