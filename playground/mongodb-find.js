// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB');
    }
    console.log('Connected to mongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectId('5a3b5877f9989d14a1fee353')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });

    db.collection('Users').find({
        test: 'Megha'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    });

    db.close();
});