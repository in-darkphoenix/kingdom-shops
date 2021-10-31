const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // error like wrong object id in mongodb
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // mongoose duplicate key error
  if (err.code === 11000) {
    const message = `duplicate ${Object.keys(
      err.keyValue
    )} entered, try again!`;
    err = new ErrorHandler(message, 400);
  }

  // wrong jwt error
  if (err.code === "JsonWebTokenError") {
    const message = `Invalid Json Web Token, try again!`;
    err = new ErrorHandler(message, 400);
  }

  // jwt expire error
  if (err.code === "TokenExpiredError") {
    const message = `Json Web Token has expired, try again!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    //error: err.stack,
  });
};
