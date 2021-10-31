const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isUserAuthenticated, authorizedRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/product/new")
  .post(isUserAuthenticated, authorizedRoles("admin"), createProduct);

router
  .route("/product/:id")
  .put(isUserAuthenticated, authorizedRoles("admin"), updateProduct)
  .delete(isUserAuthenticated, authorizedRoles("admin"), deleteProduct)
  .get(getProductDetails);

module.exports = router;
