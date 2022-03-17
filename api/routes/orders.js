const express = require("express");
const router = express.Router();
 const OrderController= require("../controllers/orderController")


//add new order 
router.post("/", OrderController.addOrder)


module.exports = router;


