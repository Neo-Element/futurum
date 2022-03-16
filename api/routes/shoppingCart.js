const express = require("express");
const router = express.Router();
const ShoppingCartCrontrollers= require("../controllers/shoppingCart")

//add to shopping card recibe a traves de req.body. id del usuario y el arreglo con los id de los productos [12 , 13 ...]

//ADD TO SHOPPING CARD

router.patch("/add", ShoppingCartCrontrollers.addCart);
//TRAER TODO LO DE UN USUARIO
//router.get("/:id/all", ShoppingCartCrontrollers.getAllCart);


//SACAR DE CARRITO
router.patch("/remove", ShoppingCartCrontrollers.removeCart);




//  router.get("/:id/all", (req, res) => {
//   Users.findOne({
//     where: { id: req.params.id },
//   })
//     .then((user) => {
//       //user = alexis
//       const arr = user.cart; //arr = [3,5,7]
//       user.cart = arr.map((product) => {
//         Products.findOne({
//           where: {
//             id: product,
//           },
//         }).then((product) => product.data); //[react, js, python]
//       });
//       return user;
//     })
//     .then((user) => res.send(user).status(200))
//     .catch((err) => console.log(err));
// }); 





module.exports = router;


