// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = { name: 'Alezana', age: 23 };
var { name } = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    const db = client.db('TodoApp');
    console.log('Connect to MongoDb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bae59dfb07cbc23dc687fc2')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos');
    // });


    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Alezana'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });


    //client.close();
});