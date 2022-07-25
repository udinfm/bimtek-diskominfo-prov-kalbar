require('module-alias/register');
const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");//configuration
var useragent = require('express-useragent');

const app = express();

//parse request of content-type: application/json
app.use(bodyParser.json());

//parse request of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//set trusted proxy
app.set('trust proxy', 'loopback'); // specify a single subnet

//using env
require('dotenv/config')

//get user agent
var useragent = require('express-useragent');
app.use(useragent.express());

//using response time
const responseTime = require('response-time')
app.use(responseTime())

const portapp = process.env.PORT

app.get('/',(_,res)=>{
    res.send({
        hasil: "success",
        data:  'Service is Running....'
    })
})

//import routes
require("./routes/all")(app)//all routes

app.listen(portapp,() => {
    console.log('Service is Running....');
});