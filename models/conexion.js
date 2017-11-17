"use strict";

const mongoose = require("mongoose"),
  conf = require("./DBconf");

mongoose.connect(`mongodb://${conf.mongo.host}/${conf.mongo.name}`,{
  useMongoClient: true
});
console.log(mongoose);
module.exports = mongoose;
