const express = require("express");
const router = express.Router();
const { Carts } = require("../models"); // correct routes


<<<<<<< HEAD
//add new order FALTA TERMINARLA
router.put("/:userId/:productId", (req,res,next) => {
  Carts.create({
    userId: req.params.userId,
    productId: req.params.productId
=======
//add new order 
router.post("/", (req,res,next) => {
  Carts.create(req.body)
  .then(cart => {
    console.log(cart)
    res.status(201).send(cart)
>>>>>>> a6559396326f66308eb084f9c21f176c3478dde5
  })
})


module.exports = router;


