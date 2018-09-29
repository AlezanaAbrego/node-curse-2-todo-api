// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    const db = client.db('TodoApp');
    console.log('Connect to MongoDb server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne
    db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((res) => {
        console.log(res);
    });

    //findOneandDelete
    db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
        console.log(res);
    });

    // db.collection('Users').deleteMany({ name: 'Alezana' })
    //     .then((res) => {
    //         console.log(res);
    //     });

    db.collection('Todos').findOneAndDelete({ _id: new ObjectID('5bafd46e11a01748d2e7d407') })
        .then((res) => {
            console.log(JSON.stringify(res,undefined,2));
        });;

    //db.clode();

});