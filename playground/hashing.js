const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
// var message = "i am the best";

// console.log(SHA256(message).toString());

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);