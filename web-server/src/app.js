const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);



app.post('/weather',(req,res)=>{


  if(req&&req.body.address){

    geocode(req.body.address,(error,data)=>{
      if(error){
        return console.log(error);
      }

      forecast(data.latitude,data.longitude, (error, forcastData) => {

        if(error){
          return console.log(error);
        }

        console.log(data);
        console.log(forcastData)
        res.status(200).send({place:data.place,summary:forcastData.summary,temp:forcastData.temperature+'F'});

      })
    });
  }


})



app.listen('5000',()=>{
  console.log('listening on post 5000');
});
