const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/CrudOperations';

mongoose.connect(url,{useNewUrlParser:true},(err) => {
  if(!err){
    console.log("MongoDb Connection is succesfull");
  }
  else{
    console.log("An error occured in connecting mongodb" + err);
  }
})

// include the employe model
require('../models/employe.model')