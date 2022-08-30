// const square = function(x){
//     return x * x;
// }

// const square = (x) => { 
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(4));

// const event = {
//     name:'vaishali',
//     printName:function(){
//         console.log(this.name);
//     }
// }

// const event = {
//     name:'vaishali',
//     nums:[2, 4, 8],
//     printName: () => {
//         console.log(this.name);
//         // this.name will be undefined because arrow function do not bind his own this
//         //arrow function binds window object as this        
//         this.nums.forEach(num => {
//             console.log(this.name);
//         });
//     }
// }

const event = {
    name:'vaishali',
    nums:[2, 4, 8],
    printName(){
        console.log(this.name);
        //accessible

        this.nums.forEach(num => {
            console.log(this.name); // undefined
        });

        const self = this; // use it to work this.name
    }
}