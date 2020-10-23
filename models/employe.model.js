const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
   fullname:{
       type: String,
   },
   email:{
       type:String
   },
   mobile:{
       type:Number
   },
   city:{
       type: String
   }
  });

 mongoose.model('empModel', usersSchema);