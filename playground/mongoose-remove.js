const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove({_id: '592979be0a3462815223323e'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('592979be0a3462815223323e').then((todo) => {
    console.log(todo);
});
