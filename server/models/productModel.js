const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please! enter the product's name."],
    trim: true,
  },

  description: {
    type: String,
    required: [true, "please! enter the product's description."],
  },

  price: {
    type: Number,
    required: [true, "please! enter the product's price."],
    maxLength: [true, "products price cannot be more than 8 figures."],
  },

  ratings: {
    type: Number,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },

      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "please! enter the product's category."],
  },

  stock: {
    type: Number,
    required: [true, "please! enter the product's stock."],
    maxLength: [4, "product stock cannot exceed 9999"],
    default: 1,
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },

      name: {
        type: String,
        required: true,
      },

      rating: {
        type: Number,
        required: true,
      },

      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
