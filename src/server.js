//DB Config
require('../models/db')

const express = require('express');

const app = express();

const employeecontroller = require('../controller/employee.controller');

const path =  require('path');
const staticFiles = path.join(__dirname,'../public');
app.use(express.static(staticFiles));
app.set("view engine","ejs");

//added middleware 
app.use(express.urlencoded({extended:false})); 

// controller route
app.use('/',employeecontroller);

const port = 8080;
app.listen(port,()=>{
    console.log(`application running on ${port}`);
})




