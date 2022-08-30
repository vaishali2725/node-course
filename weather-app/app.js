const request = require("request");

// const url = 'http://api.weatherstack.com/current?access_key=16c7e2a816c0aa0570e684c2e15579ac&query=18.520430,73.856743';

// request({url:url, json:true}, (error, response) => {
//     const data = response.body;
//    // console.log(data.current.weather_descriptions[0], data.current.temperature, data.current.feelslike);
// })

// const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/kolhapur.json?limit=2&access_token=pk.eyJ1IjoidmFpc2hhbGkyNTEwIiwiYSI6ImNsNmFjMm91NjAwNzgzaXJrb3g2dHl3a2cifQ.0xq7QIwE8rKgBRruVD101A&limit=1';

// request({ url:mapUrl,json:true }, (error, response) => {
//     const resp = response.body;
//     const longitude = resp.features[0].center[0];
//     const latitude = resp.features[0].center[1];
//     console.log(latitude, longitude);
// })


// const address = process.argv[2];
// if(!address){
//     console.log('Please enter address');
// }else{
//     const geocode = require('./utils/geocode.js');
//     const forecast = require('./utils/forecast.js');
//     geocode(address, (error, data) => {
//         //console.log(data);
//         if(error){
//             return console.log(error);
//         }
//         forecast(data.latitude, data.longitude, (error, data) => {
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log(data.msg);
//             }
//         })
//     })
// }


const address = process.argv[2];
if(!address){
    console.log('Please enter address');
}else{
    const geocode = require('./utils/geocode.js');
    const forecast = require('./utils/forecast.js');
    geocode(address, (error, {latitude, longitude}) => {
        if(error){
            return console.log(error);
        }
        forecast(latitude, longitude, (error, data) => {
            if(error){
                console.log(error);
            }else{
                console.log(data.msg);
            }
        })
    })
}