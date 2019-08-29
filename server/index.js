//Express server stuff
const express = require('express');
const cors = require('cors');

//Routes
const GameNewsRoute = require('./routes/GameNewsRoute.js');
const GameDealsRoute = require('./routes/GameDealsRoute.js');
const GameNamesRoute = require('./routes/GameNamesRoute.js');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/games', GameNewsRoute);
app.use('/deals', GameDealsRoute);
app.use('/names', GameNamesRoute);

app.listen(8081, () => console.log("server reving up ma doode"));