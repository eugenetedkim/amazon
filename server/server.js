const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose.connect(
  process.env.DATABASE, 
  { useNewUrlParser: true, useUnifiedTopology: true }, 
  (err) => {
    if (err)
    {
      console.log(err);
    }
    else
    {
      console.log('Connected to the database');
    }
  }
);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json("This is the response sent from the GET API");
});

app.post("/", (req, res) => {
  console.log(req.body.name);
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on PORT", 3000);
  }
});