const express = require("express");
const router = express.Router();
const { Carts } = require("../models"); // correct routes


//add new order 
router.post("/", (req,res,next) => {
  Carts.create(req.body)
  .then(cart => {
    console.log(cart)
    res.status(201).send(cart)
  })
})


module.exports = router;


