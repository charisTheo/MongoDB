const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '592849e5010399403b661bd7';
var id = '5926fb77ac382250b2859b92';

// if (!ObjectID.isValid(id)) {
//     console.log("ID not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("id not found");
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log("User not found")
    }
    console.log('User:', user);
}).catch((e) => console.log(e));
