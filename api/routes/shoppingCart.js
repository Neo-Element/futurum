const express = require("express");
const router = express.Router();
const ShoppingCartCrontrollers= require("../controllers/shoppingCart")

//add to shopping card recibe a traves de req.body. id del usuario y el arreglo con los id de los productos [12 , 13 ...]

//ADD TO SHOPPING CARD
router.patch("/add", ShoppingCartCrontrollers.addCart);
//TRAER TODO LO DE UN USUARIO
router.get("/:id/all", ShoppingCartCrontrollers.getAllCart);
//SACAR DE CARRITO
router.patch("/remove", ShoppingCartCrontrollers.removeCart);



module.exports = router;


