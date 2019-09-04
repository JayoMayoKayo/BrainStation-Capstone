const express = require("express");
const router = express.Router();
const axios = require('axios');
const steamApi = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=381210&count=3&maxlength=300&format=json";

let testData = require("../testData/testgamedata.json");

router.get('/', (req, res) => {
  res.json(testData);
  console.log(testData);
  console.log("it worked!");
})

router.get('/:appid', (serverReq, serverRes) => {
  let url = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=' + serverReq.params.appid + '&count=3&maxlength=300&format=json&key=5B5B3B21C85AD550EA1043658984A130';
  console.log(serverReq.params.appid);
  axios.get(url)
  .then(response => {
    serverRes.json(response.data.appnews.newsitems);
  })
  .catch(err => {
    console.log("You f up foo!");
  })
})

module.exports = router;