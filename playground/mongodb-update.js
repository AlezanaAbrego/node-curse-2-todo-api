// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    const db = client.db('TodoApp');
    console.log('Connect to MongoDb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bae6afa11a01748d2e7cb71')
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((res) => {
    //         console.log(res);
    //     });

    db.collection('Users').findOneAndUpdate({
        name: 'AlexGio'
    }, {
            $set: {
                name: 'Alex'

            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((res) => {
            console.log(res);
        });

});