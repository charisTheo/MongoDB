const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to Mongo servers", err);
    }
    console.log("Connected to Mongo Servers");

    // db.collection('Todos').find({
    //     _id: new ObjectID('592571814d0c54e3f11c0795')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find data', err);
    // })

    db.collection('Users').find({
        name: 'Charis'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(err);
    });

    // db.close();
});