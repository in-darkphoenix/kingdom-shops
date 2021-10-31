const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const User = require("../models/userModel");

exports.isUserAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);

  if (!token) {
    return next(new ErrorHandler("please! login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});

exports.authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`Access denied for the role: ${req.user.role}`, 403)
      );
    }
    next();
  };
};
