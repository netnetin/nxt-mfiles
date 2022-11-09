const mongoose = require("mongoose");

const dbpath = process.env.DBPATH;
const database = process.env.DATABASE;

mongoose.connect(
  "mongodb://"+dbpath+"/"+database, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  }
).then(function(){
  console.log("database connected with the name of "+database);
}).catch(function(err){
  console.log("mongodb connection error: "+ err.message);
});