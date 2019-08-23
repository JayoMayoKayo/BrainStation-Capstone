const express = require("express");
const router = express.Router();
const axios = require('axios');
const steamApi = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=381210&count=3&maxlength=300&format=json";

let testData = require("../testData/testgamedata.json");

router.get('/', (req, res) => {
  res.json(testData);
  console.log(testData);
})

module.exports = router;