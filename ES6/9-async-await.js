const add = async(a, b) => {
    return new Promise((resolve, reject) =>{
        if(a<0 || b< 0){
            reject('Numbers should be positive!');
        }
        resolve(a+b);
    })
}

const doWork = async () => {
    const sum = await add(4, 5);
    const sum2 = await add(sum, 10);
    const sum3 = await add(sum2, -5);
    return sum3;
}

doWork().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})
