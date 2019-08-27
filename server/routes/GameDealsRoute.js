const express = require("express");
const router = express.Router();
const axios = require('axios');
//const steamApi = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=381210&count=3&maxlength=300&format=json";

let testData = require("../testData/testgamedata.json");
const url = 'http://www.cheapshark.com/api/1.0/';

router.get('/', (req, res) => {
  res.json(testData);
  console.log(testData);
})

router.get('/stores', (serverReq, serverRes) => {
  const storesUrl = url + 'stores?';
  axios.get(storesUrl)
  .then(response => {
    console.log("starts here");
    console.log(response.data);
    serverRes.json(response.data);
  })
})

module.exports = router;