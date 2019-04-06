const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json

app.use(bodyParser.json());

//app.use(express.static(path.resolve(__dirname,'../public')));


require('./config/config.js');

app.use(require('./routes/index'));





/*

mongoose.connect("mongodb://localhost:27017/cafe", { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});
*/
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})
