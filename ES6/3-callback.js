setTimeout(() => {
    console.log('Two Seconds are up');
}, 2000);

const names = ['vaishali', 'nilesh', 'pradnya'];
const shrortNames = names.filter((name) => {
    return name.length <= 6;
});

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude:0,
            longitude:0
        }

        callback(data);
    }, 1000)
}

geocode('pune', (data) => {
    console.log(data);
})

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const sum = num1 + num2;
        return callback(sum);
    }, 3000)
}

add(1, 4, (sum) => {
    console.log(sum);
})