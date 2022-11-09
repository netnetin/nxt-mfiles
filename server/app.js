const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./mongodb");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// const student = require("./routes/student");

// app.use("/student", student);

// error handler
app.use(function(req, res, next){
  next("This router does not exist!");
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || err
 
   }
  })
});

const port = process.env.PORT;
app.listen(port, function(){
    console.log("server starts on "+ port);
});
