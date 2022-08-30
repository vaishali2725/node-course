const { ObjectID } = require('bson');
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
//console.log(id.id.length);
//console.log(id.toHexString().length); // string 

mongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log(error);
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     _id:id,
    //     name: 'Pradnya',
    //     age: 28,
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert document!');
    //     }

    //     console.log(result);
    // });

    // db.collection('task-collection').insertMany(
    //     [
    //         {
    //             description: 'Task 1',
    //             completed: true
    //         }, {
    //             description: 'Task 2',
    //             completed: false
    //         }, {
    //             description: 'Task 3',
    //             completed: false
    //         }
    //     ], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert document!');
    //         }

    //         console.log(result);
    //     });

    // db.collection('users').findOne({age:28, name:'Vaishali', _id:new ObjectID('62fcca30427be21416bc18a4')}, (error, res)=>{
    //     if(error){
    //         return console.log('Error fetching documents!');
    //     }
    //     console.log(res);
    // });

    // db.collection('users').find({age:28}).toArray((error, res)=>{
    //     if(error){
    //         return console.log('Error fetching documents!');
    //     }
    //     console.log(res);
    // });

    // db.collection('users').find({age:28}).count((error, res)=>{
    //     if(error){
    //         return console.log('Error fetching documents!');
    //     }
    //     console.log(res);
    // })

    // db.collection('task-collection').find({completed:false}).toArray((error, res)=>{
    //     if(error){
    //         return console.log('Error fetching documents!');
    //     }
    //     console.log(res);
    // })

    //update 
    // db.collection('users').updateOne({
    //     _id:new ObjectID('62fcca30427be21416bc18a4')
    // },{
    //     $set : {
    //         name:'Vaishali_new'
    //     },
    //     $inc :{
    //         age:2
    //     }
    // }).then((res)=>{
    //     console.log(res);
    // }).catch((error)=>{
    //     console.log('something went wrong!');
    // });

    // db.collection('users').updateMany({
    //     age:30
    // },{
    //     $inc :{
    //         age:2
    //     }
    // }).then((res)=>{
    //     console.log(res);
    // }).catch((error)=>{
    //     console.log('something went wrong!');
    // });

    // db.collection('task-collection').updateMany(
    //     {},
    //     {
    //         $set :{
    //             completed:false
    //         }
    //     }
    // ).then((res)=>{
    //         console.log(res);
    //  }).catch((error)=>{
    //         console.log(error);
    // })

    db.collection('task-collection').deleteOne({ 
        _id:new ObjectID('62fccd45dd71e035b3cbf75f')
    }).then((res)=>{
            console.log(res);
     }).catch((error)=>{
            console.log(error);
    });

    db.collection('users').deleteMany({ 
        name:'Nilesh'
    }).then((res)=>{
            console.log(res);
     }).catch((error)=>{
            console.log(error);
    })
})