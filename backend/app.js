const dotenv=require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const homeRoutes = require("./routes/home-routes");
const HttpError = require("./models/http-error");

const app = express("body-parser");

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,PUT");
  next();
});

app.use("/api/home", homeRoutes); 

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

mongoose
  .connect(
    `mongodb://srishti_d:m9Ctz5cDvJBVh3Dy@ac-zvtphov-shard-00-00.qydfuoa.mongodb.net:27017,ac-zvtphov-shard-00-01.qydfuoa.mongodb.net:27017,ac-zvtphov-shard-00-02.qydfuoa.mongodb.net:27017/?ssl=true&replicaSet=atlas-14j6hr-shard-0&authSource=admin&retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
