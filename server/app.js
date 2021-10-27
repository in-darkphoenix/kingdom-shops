const express = require("express");
// Routes import
const product = require("./routes/productRoute");

// express object
const app = express();

// encoding
app.use(express.json());

app.use("/api/v1", product);

module.exports = app;
