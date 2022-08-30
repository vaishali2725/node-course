const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=16c7e2a816c0aa0570e684c2e15579ac&query=18.520430,73.856743';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(data);
    })

});

request.on('error', (error) => {
    console.log(error);
});

request.end();