require('../db/mongoose'); 
const User = require('../models/user')
const Task = require('../models/task');
const { findByIdAndDelete } = require('../models/task');

// User.findByIdAndUpdate('62ff37ce6685f3030dffd876', {age:1}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age:1});
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// });

// const updateUserByAge = async(id, age) =>{
//     const user = await User.findByIdAndUpdate(id, {age});
//     const count = await User.countDocuments({age});
//     return count;
// }

// updateUserByAge('62ff37ce6685f3030dffd876', 2).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


const deleteTaskAndGetCount = async(id, completed)=>{
    const res = await Task.findByIdAndDelete(id);
    const count =  await Task.countDocuments({completed});
    return count;
}

deleteTaskAndGetCount('62ff5f3204309217d6076d80', false).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})