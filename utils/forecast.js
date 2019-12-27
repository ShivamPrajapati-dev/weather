//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request');

const forecast = (lat,log, callback)=>{
  url = 'https://api.darksky.net/forecast/8a0ababc84fc0ca5d8182a5fa7d59924/'+lat+','+log;
  request({url:url,json:true},(error,response)=>{
    if(error){
      callback('No internet connection',undefined);
    } else if (response.body.error) {
      callback('Invalid location',undefined);
    } else {
      callback(undefined,response.body.currently);
    }
  });
}

module.exports = forecast;
