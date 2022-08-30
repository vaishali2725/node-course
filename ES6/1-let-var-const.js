// var -> function scoped
// let -> block scoped
// const -> block scoped

function sayHello(){
    for(var i=0; i< 5; i++){
        console.log(i); // 0 1 2 3 4
    }

    for(let i=0; i< 5; i++){
        console.log(i); // 0 1 2 3 4
    }
}

sayHello();