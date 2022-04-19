// setting up express.js
const express = require("express");
const app = express();
//const async = require('async');
const port = process.env.PORT || 3000;
const { Client } = require("@googlemaps/google-maps-services-js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
app.use(express.static("public"));
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send({ express: "Express is connected to react" });
});


// getting the latitude a the longitude
app.post("/", async (req, res) => {
  const lat = req.body.lat;
  const lon = req.body.lon;
  const latlng = [lat, lon];
  const result = await postLatlng(lat, lon);
  initGoogle(lat, lon, "restaurant");
  res.json({
    status: "success",
    latitude: lat,
    longitude: lon,
  });
});


app.get("/restaurants", (req, res) => {
  //const restaurantRes = initGoogle(lat,lon, "restaurant");
  //console.log(restaurantRes);
  //res.send(restaurantRes);
});

app.get("/cafes", (req, res) => {
  const cafeRes = initGoogle(latlng[0], latlng[1], "cafe");
  res.send(cafeRes);
});

app.get("/entertainment", (req, res) => {});

app.listen(port, () => console.log(`Listening to port ${port}`));

function initGoogle(lati, lon, reqType) {
  var Latlng = [lati, lon];
  const client = new Client({});
  client
    .placesNearby({
      params: {
        location: Latlng,
        type: [reqType],
        radius: 10000,
        opennow: true,
        key: process.env.MAPS_API,
      },
    })
    .then((r) => {
      const results = r.data.results[0].geometry.name
      //console.log(results);
      // results.forEach(element => {
      //   console.log(element.);
      // });
    })
    .catch((e) => {
      console.log(e);
    });
}

async function postLatlng(lat, lon) {
  const latlng= [lat, lon]
}

