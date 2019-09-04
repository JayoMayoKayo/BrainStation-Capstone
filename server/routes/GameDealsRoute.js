const express = require("express");
const router = express.Router();
const axios = require('axios');

let testData = require("../testData/testgamedata.json");

router.get('/', (req, res) => {
  res.json(testData);
  console.log(testData);
})

//ITAD Variables
const itadKey = "1948ea933d99045ff10d2038af3e0435d435b384";

const NameItadUrl = "https://api.isthereanydeal.com/v01/search/search/?key=";

//ITAD Name Search Api
router.get('/nameSearch/:gameName', (serverReq, serverRes) => {
  const nameUrl = NameItadUrl + itadKey + '&q=' + serverReq.params.gameName;
  axios.get(nameUrl)
  .then(response => {
    //Name Search takes 7 seconds
    serverRes.json(response.data);
  })
  .catch(err => {
    console.log("sumthin is not a foot");
  })
})

//ITAD Game Info Api, used for images
router.get('/getInfo/:gameInfo', (sReq, sRes) => {
  const gameInfo = sReq.params.gameInfo;
  axios.get('https://api.isthereanydeal.com/v01/game/info', {
    params : {
      key : itadKey,
      plains : gameInfo
    }
  })
  .then(response => {
    //Info Search takes 0.47 seconds
    console.log(response.data.data[gameInfo]);
    sRes.json(response.data.data[gameInfo]);
  })
  .catch(err => {
    console.log("this ain't it chief");
  })
})

//ITAD Deal Search Api
router.get('/findGame/:dealSearch', (sReq, sRes) => {
  const gameName = sReq.params.dealSearch;
  axios.get(`https://api.isthereanydeal.com/v01/game/prices`, {
    params : {
      key : itadKey,
      plains : gameName
    }
  })
  .then((response) => {
    //Deal finder takes 0.35 seconds
    sRes.json(response.data.data[gameName].list);
  })
  .catch(err => {
    console.log("sumthing not a foot");
  })
})


module.exports = router;