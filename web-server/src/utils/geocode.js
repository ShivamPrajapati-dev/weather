const request  = require('request');

const geocode = (address,callback)=>{

  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?types=address&access_token=pk.eyJ1Ijoic2hpdmFtcHJhamFwYXRpIiwiYSI6ImNrNG82NWN5eTFheGUza241cHNqNWw4YmEifQ.93W52H0k6BnW5L0Wwzfrvg';
  request({url,json:true},(error,{body})=>{
    if(error){
      callback('No internet connection',undefined);
    } else if(body.features.length===0){
      callback('No location found',undefined);
    } else {
      callback(undefined,{
        latitude:body.features[0].center[1],
        longitude:body.features[0].center[0],
        place:body.features[0].place_name
      });
    }
  });
}

module.exports = geocode;
