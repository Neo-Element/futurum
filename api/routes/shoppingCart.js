const express = require("express");
const router = express.Router();
const { Users } = require("../models"); // correct routes
const { Products } = require("../models");

//add to shopping card recibe a traves de req.body. id del usuario y el arreglo con los id de los productos [12 , 13 ...]

//ADD TO SHOPPING CARD

router.patch("/add", (req, res, next) => {
  Users.update(req.body, {
    where: {
      id: req.body.id,
    },
  }).catch(next);
});

<<<<<<< HEAD

=======
router.get("/:id/all", (req, res) => {
  Users.findOne({
    where: { id: req.params.id },
  })
    .then((user) => {
      //user = alexis
      const arr = user.cart; //arr = [3,5,7]
      user.cart = arr.map((product) => {
        Products.findOne({
          where: {
            id: product,
          },
        }).then((product) => product.data); //[react, js, python]
      });
      return user;
    })
    .then((user) => res.send(user).status(200))
    .catch((err) => console.log(err));
});
>>>>>>> b5e0c1d1aeb0a423620191e1d2131ef9fc42871c

router.patch("/remove", (req, res, next) => {
  Users.update(req.body, {
    where: {
      id: req.body.id,
    },
  }).catch(next);
});








module.exports = router;


