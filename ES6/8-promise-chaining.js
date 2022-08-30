const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(a+b);
        }, 2000);
    })
}

/*nested callbacks */

// add(4, 5).then((result) =>{
//     console.log(result);
//     add(result, 10).then((result1) =>{
//         console.log(result1);
//     }).catch((error)=>{
//         console.log(error);
//     })
// }).catch((error)=>{
//     console.log(error);
// });

/*promise chaining*/

add(4, 5).then((result) =>{
    console.log(result);
    return add(result, 10);
}).then((result1)=>{
    console.log(result1);
}).catch((error)=>{
    console.log(error);
})