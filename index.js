var User;
(function (User) {
    User["USERNAME"] = "iclasschima";
    User["PASSWORD"] = "iclasschima123";
})(User || (User = {}));
var loginUser = function (username, password, plaform) {
    if (username == User.USERNAME && password == User.PASSWORD) {
        var user = {
            first_name: "iclass",
            last_name: "chima",
            email: "iclasschima@gmail.com",
            username: "iclasschima",
            balance: 3000,
            hobbies: ["gaming"],
            current_platform: plaform
        };
        return user;
    }
    else {
        return {
            message: "user does not exist"
        };
    }
};
var result = loginUser("iclasschima", "iclasschima123", "mobile");
console.log(result);
