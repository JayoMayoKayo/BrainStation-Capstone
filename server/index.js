const express = require('express');
const cors = require('cors');
const GameNewsRoute = require('./routes/GameNewsRoute.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/games', GameNewsRoute);


app.listen(8081, () => console.log("server reving up ma doode"));