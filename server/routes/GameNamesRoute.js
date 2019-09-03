//Express server stuff
const express = require("express");
const router = express.Router();
const axios = require('axios');
const steamApi = "http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=5B5B3B21C85AD550EA1043658984A130";

let testData = require("../testData/testgamedata.json");

router.get('/', (req, res) => {
  res.json(testData);
  console.log(testData);
  console.log("it worked!");
})

router.get('/gamenames', (serverReq, serverRes) => {
  axios.get(steamApi)
  .then(response => {
    console.log("starts here!");
    console.log(response.data);
    serverRes.json(response.data.applist.apps);
  })
  .catch(err => {
    console.log("You f up foo!");
  })
})

module.exports = router;