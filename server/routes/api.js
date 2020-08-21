var router = require('express').Router();
var PrivateUser = require('../model/PrivateUser');

let users = [];
users[0] = new PrivateUser("John", "john@gmail.com", "25 March 1993", "123456");
users[1] = new PrivateUser("Doe", "doe@gmail.com", "13 Oct 1987", "123456");
users[2] = new PrivateUser("Mobster", "mob@mail.com" ,"28 October 2001", "123456");

router.post("/login", (req, res) => {
    const username = req.body.username;
    const pw = req.body.password;

    for (let user of users){

        if (user.validate(username, pw)){

            // retrieve object with user attributes
            let userObj = user.user();
            userObj.valid = true;
            let userString = JSON.stringify(userObj);
            res.json(userString);
        }
    }
    // return a user object where valid == false
    res.json(JSON.stringify({username: username, email: null, birthdate: null, age: null, valid: false}));
});

module.exports = router;