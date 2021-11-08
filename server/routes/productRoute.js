const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  addProductReview,
  getProductsReviews,
  deleteReviews,
} = require("../controllers/productController");
const { isUserAuthenticated, authorizedRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/product/new")
  .post(isUserAuthenticated, authorizedRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isUserAuthenticated, authorizedRoles("admin"), updateProduct)
  .delete(isUserAuthenticated, authorizedRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isUserAuthenticated, addProductReview);

router
  .route("/reviews")
  .get(getProductsReviews)
  .delete(isUserAuthenticated, deleteReviews);

module.exports = router;
