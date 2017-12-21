// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB');
    }
    console.log('Connected to mongoDB server');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('5a3b5877f9989d14a1fee353')
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(JSON.stringify(result, undefined, 2));
    //     });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5a3b628ade9ed516dd38560a')
    }, {
            $set: {
                test: 'Sachin'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        });

    //db.close();
});