const express = require("express");
const router = express.Router();
const axios = require('axios');

let testData = require("../testData/testgamedata.json");

router.get('/', (req, res) => {
  res.json(testData);
  console.log(testData);
})

//ITAD Api
const itadKey = "1948ea933d99045ff10d2038af3e0435d435b384";

const dealItadUrl = "https://api.isthereanydeal.com/v01/search/search/?key="

router.get('/nameSearch/:gameName', (serverReq, serverRes) => {
  const nameUrl = dealItadUrl + itadKey + '&q=' + serverReq.params.gameName;
  axios.get(nameUrl)
  .then(response => {
    serverRes.json(response.data);
  })
  .catch(err => {
    console.log("sumthin is not a foot");
  })
})

//ITAD Deal Search Api
router.get('/findGame/:dealSearch', (sReq, sRes) => {
  const nameUrl = dealItadUrl + itadKey + '&q=' + sReq.params.dealSearch;
  axios.get(nameUrl)
  .then(response => {
    sRes.json(response.data.data).list;
  })
  .catch(err => {
    console.log("sumthing not a foot");
  })
})


module.exports = router;