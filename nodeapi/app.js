var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var config = require('./config/database')

//connect to db
mongoose.connect(config.database);
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('mongodb connected')
});

//init app
var app=express()
 
//prettify json
app.set('json spaces',40)


//body parser
//parse application
app.use(bodyParser.urlencoded({extended:false}))

//parse app json
app.use(bodyParser.json())

//headers
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});

//set routes
var pages = require('./routes/pages');
app.use('/pages',pages);

//start server
var port = 3000;

app.listen(port,function()
{
    console.log('server started at port '+port);
})