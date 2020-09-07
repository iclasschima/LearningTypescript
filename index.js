"use strict";
var User;
(function (User) {
    User["USERNAME"] = "iclasschima";
    User["PASSWORD"] = "iclasschima123";
})(User || (User = {}));
const loginUser = (username, password, plaform) => {
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
