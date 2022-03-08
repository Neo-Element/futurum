const express = require("express");
const router = express.Router();
const routerShoppingCart = require("./shoppingCart");


router.use("/shoppingCard", routerShoppingCart);


module.exports = router;
