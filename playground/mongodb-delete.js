// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB');
    }
    console.log('Connected to mongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     age: 22
    // }).then((result) => {
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({
    //     age: 22
    // }).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     name: 'Lasya'
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({
        test: 'Nothing leave'
    }).then((result)=>{
        console.log(result);
    });

    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectId('5a3b5a3ee0dcd81541173111')
    // }).then((result)=>{
    //     console.log(result);
    // });

    //db.close();
});