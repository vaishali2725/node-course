const mongoose =  require('mongoose');
const { default: isEmail } = require('validator/lib/isemail');

const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'task-manager-api';

mongoose.connect(connectionURL+'/'+databaseName, {useNewUrlParser:true});

// const User = mongoose.model('User', {
//     name:{
//         type:String
//     },
//     age:{
//         type:Number
//     }
// });

// const user = new User({
//     name:'Vaishali',
//     age:28
// });

// user.save().then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })

/* Task Database */

// const Task = mongoose.model('Task',{
//     description:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     }
// });

// const task = new Task({
//     description:'This is Task 1',
//     completed:false
// });

// task.save().then((res)=>{
//     console.log(res);
// }).then((error)=>{
//     console.log(error);
// });

/*Validations */

// const User = mongoose.model('User', {
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         lowercase:true,
//         trim:true,
//         validate(value){
//             if(!isEmail(value)){
//                 throw new Error('Email is Invalid!');
//             }
//         }
//     },
//     password:{
//         type:String,
//         trim:true,
//         required:true,
//         minLength:6,
//         validate(value){
//             // if(value.length < 6){
//             //     throw new Error('Password should contain 6 or more charaters');
//             // }

//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password should not contain password word');
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:20,
//         validate(value){
//             if(value<=0){
//                 throw new Error('Age should not be negetive number!.')
//             }
//         }
//     }
// });

// const user = new User({
//    name:'Nilesh',
//    email:'nil@gmail.com',
//    age:30,
//    password:'vaishali@123'
// });

// user.save().then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })

/* Task validations */

// const Task = mongoose.model('Task',{
//     description:{
//         type:String,
//         trim:true,
//         required:true,
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// });
    
// const task = new Task({
//     description:'This is Task 2 Desc'
// });

// task.save().then((res)=>{
//     console.log(res);
// }).then((error)=>{
//     console.log(error);
// });