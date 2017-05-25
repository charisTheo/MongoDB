const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo Servers');
    }
    console.log('Connected to Mongo Servers');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5926d05f54a6dbcd7a0cf4d8')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Bullshit'
    }, {
        $set: {
            name: 'Charis'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
})
