const express = require("express");
const errorMiddleware = require("./middleware/error");

// Routes import
const product = require("./routes/productRoute");

// express object
const app = express();

// encoding
app.use(express.json());

app.use("/api/v1", product);

// middleware for errors
app.use(errorMiddleware);

module.exports = app;
