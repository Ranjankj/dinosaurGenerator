
import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

import fetch from 'node-fetch';
import express from 'express';
// const fetch = require('node-fetch')
// const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const api_key = process.env.API_KEY;




//making  api  request for getting name of dino name 
app.get('/dinoname', async (request, response) => {
  const fetchApi = await fetch('https://dinoipsum.com/api/?format=json&words=1&paragraphs=1');
  const dinoNameRes = await fetchApi.json();
  console.log(dinoNameRes)
  response.json(dinoNameRes);
})




// making api request for getting image of dino image
app.get('/dinoimage', async (request, response) => {
  const fetchApi = await fetch('https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=100', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': api_key,
      'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
    }
  });
  const dinoImageRes = await fetchApi.json()
  console.log(dinoImageRes)
  response.json(dinoImageRes)
})












app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
