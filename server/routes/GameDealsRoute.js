const express = require("express");
const router = express.Router();
const axios = require('axios');

let testData = require("../testData/testgamedata.json");

//Deal Shark Api
const dsUrl = 'http://www.cheapshark.com/api/1.0/';

/* router.get('/stores', (serverReq, serverRes) => {
  const storesUrl = dsUrl + 'stores?';
  axios.get(storesUrl)
  .then(response => {
    console.log("starts here");
    console.log(response.data);
    serverRes.json(response.data);
  })
}) */

router.get('/', (req, res) => {
  res.json(testData);
  console.log(testData);
})

//ITAD Api
const itadUrl = "https://api.isthereanydeal.com/v02/game/";
const itadKey = "1948ea933d99045ff10d2038af3e0435d435b384";

const dealItadUrl = "https://api.isthereanydeal.com/v01/search/search/?key="

router.get('/nameSearch/:gameName', (serverReq, serverRes) => {
  const nameUrl = itadUrl + 'plain/?key=' + itadKey + '&title=' + serverReq.params.gameName;
  axios.get(nameUrl)
  .then(response => {
    console.log(response.data);
    //console.log(response.data.plain);
    serverRes.json(response.data);
  })
  .catch(err => {
    console.log("sumthin is not a foot");
  })
})

//ITAD Api
router.get('/findGame/:dealSearch', (sReq, sRes) => {
  const nameUrl = dealItadUrl + itadKey + '&q=' + sReq.params.dealSearch;
  axios.get(nameUrl)
  .then(response => {
    console.log(response.data.data.list);
    sRes.json(response.data.data).list;
  })
  .catch(err => {
    console.log("sumthing not a foot");
  })
})


module.exports = router;