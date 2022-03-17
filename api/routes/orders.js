const express = require("express");
const router = express.Router();
const { Carts } = require("../models"); // correct routes


//add new order 
router.put("/:userId/:productId", (req,res,next) => {
  Carts.create({
    userId: req.params.userId,
    productId: req.params.productId
  })
})


module.exports = router;


