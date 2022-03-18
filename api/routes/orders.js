const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/orderController");
//MARI/BACK
router.post("/", OrderController.addOrder);

module.exports = router;
