const request = require('request');
const url = 'https://api.darksky.net/forecast/8a0ababc84fc0ca5d8182a5fa7d59924/37.8267,-122.4233';
request({url:url,json:true}, (error,response)=>{
  if (error) {
    console.log("No internet connection");
  } else if(response.body.error{
    console.log('unable to find location');
  }else{
  const data = JSON.parse(response.body);
  console.log(data.currently);
}
});

const url_2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Gonda%20uttarpradesh%20India.json?types=address&access_token=pk.eyJ1Ijoic2hpdmFtcHJhamFwYXRpIiwiYSI6ImNrNG82NWN5eTFheGUza241cHNqNWw4YmEifQ.93W52H0k6BnW5L0Wwzfrvg';
request({url:url_2,json:true},(error,response)=>{
  if(error){
    console.log(error);
  } else if (response.body.features.length===0) {
    console.log('No result found');
  }else {
    console.log(response.body.features[0].center[0],response.body.features[0].center[1]);
  }

});
