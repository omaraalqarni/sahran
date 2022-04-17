
// setting up express.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {Client} = require("@googlemaps/google-maps-services-js");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
app.use(express.static('public'));
app.use(express.json());
require('dotenv').config();

app.get('/', (req, res) => {
  res.send({express: 'Express is connected to react'}) 
});

var lat=0, lon=0;
app.post('/', (req,res) =>{
  lat = req.body.lat;
  lon = req.body.lon;
  initGoogle(lat, lon);
  res.json({
    status: 'success',
    latitude: lat,
    longitude: lon,
  });
});

app.listen(port, () => console.log(`Listening to port ${port}`));

function initGoogle(lat, lon) {

}


