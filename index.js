
// setting up express.js
const express = require('express');

//setting up PG middleware
// const { Client } = require('pg')
// const client = new Client()
// await client.connect()

const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

app.get('/', (req, res) => {
  res.send({express: 'Express is connected to react'})  
});


app.listen(port, () => console.log(`Listening to port ${port} `));
