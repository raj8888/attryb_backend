const mongoose = require("mongoose");
require("dotenv").config()
const dataBaseConnection = mongoose.connect(process.env.mongoDb_Url);
module.exports = { dataBaseConnection };
