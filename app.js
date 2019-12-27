const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];

geocode(address,(error,data)=>{

  if(!address){
      return console.log('please provide an address');
  }
  if(error){
    return console.log(error);
  }

  forecast(data.latitude,data.longitude, (error, forcastData) => {

    if(error){
      return console.log(error);
    }
    console.log(data);
    console.log(forcastData)
  })
});
