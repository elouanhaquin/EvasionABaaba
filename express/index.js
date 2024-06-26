const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const app = express();

require('dotenv').config();

app.use(express.json());

app.use(cors());
app.use(function(req, res, next) {
    // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, content-lenght');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('uploads'));
const bedroomRoute = require('./routes/bedroom');
app.use(bedroomRoute);


// we will eventually use env variables

const PORT = 5000;
app.listen(PORT, () => {
   console.log('DB is ' + process.env.PGUSER || "NULL");
   console.log('Server Started at ' + PORT);
});