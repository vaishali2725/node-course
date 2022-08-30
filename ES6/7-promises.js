const doWorkPromise = new Promise((resolve, reject) => {
    //resolve([7, 4, 1]);
    reject('Something Went Wrong!');
});

doWorkPromise.then((result)=>{
    console.log('Success!', result);
}).catch((error) => {
    console.log('Error!', error)
});


//below is call back code for above code

const doWorkCallback = (callback) =>{
    callback(undefined, [7, 4, 1]);
    //callback('Error! callback error', undefined);
}

doWorkCallback((error, result) => {
    if(error){
        return console.log(error);
    }
    console.log(result);
})