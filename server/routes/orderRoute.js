const express = require("express");
const {
  newOrder,
  getOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { isUserAuthenticated, authorizedRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/order/new").post(isUserAuthenticated, newOrder);

router
  .route("/admin/order/:id")
  .get(isUserAuthenticated, authorizedRoles("admin"), getOrder);

router.route("/orders/me").get(isUserAuthenticated, myOrders);

router
  .route("/admin/orders")
  .get(isUserAuthenticated, authorizedRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isUserAuthenticated, authorizedRoles("admin"), updateOrder)
  .delete(isUserAuthenticated, authorizedRoles("admin"), deleteOrder);

module.exports = router;
