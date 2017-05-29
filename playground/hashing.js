const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// var message = "i am the best";

// console.log(SHA256(message).toString());

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPass = '$2a$10$aRp7D4oxIGCA/yUFL5q36uHtYo4C0c3XcItLZu.hsCmRYvwFO2vKC';

bcrypt.compare(password, hashedPass, (err, res) => {
    console.log(res);
});
