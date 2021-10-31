const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");

// Routes import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

// express object
const app = express();

// encoding-parsing
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", product);
app.use("/api/v1", user);

// middleware for errors
app.use(errorMiddleware);

module.exports = app;
