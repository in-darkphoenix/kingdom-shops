const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { log } = require("console");

// database connect
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      log(`MongoDB connected with server: ${data.connection.host}`);
    })
    // .catch((err) => {
    //   log(err);
    // });
};

module.exports = connectDatabase;
