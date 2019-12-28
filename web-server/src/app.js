const express = require('express');
const app = express();

app.get('/weather',(req,res)=>{
  res.json({
    location:'gonda',
    temp:1
  });
});


app.listen('5000',()=>{
  console.log('listening on post 5000');
});
