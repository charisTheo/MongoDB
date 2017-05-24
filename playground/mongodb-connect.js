// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// OBJECT DESTRUCTURING
// var user = {name: 'Charis', age: 23};
// var {name} = user;
// console.log(name);  //Charis

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Servers');
    }
    console.log('Connected to MongoDB Servers');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Bullshit',
        age: 23,
        location: 'Roma, Italy'
    }, (err ,result) => {
        if (err) {
            return console.log('Unable to save user', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });

    db.close();
});