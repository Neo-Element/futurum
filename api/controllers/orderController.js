const {  Carts } = require("../models");
const OrderService= require("../services/orderServices")
//ADD TO CART ESTA RUAT FALTA TERMINARLA
exports.addCart= async (req, res, next) => {
 console.log("PRODUCTO AÑADIDO CON CONTROLLERS")
  try{
    await Users.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
    }catch(err){
      next(err)
    };
}
  /* // TRAER TODO LO DEL CARRITO DE UN USUARIO
  exports.getAllCart=(req, res) => {  /// checkear si esto es modificado
    Users.findOne({
      where: { id: req.params.id },
    })
      .then((user) => {
        const arr = user.cart; 
        user.cart = arr.map((product) => {
          Products.findOne({
            where: {
              id: product,
            },
          }).then((product) => product.data); 
        });
        return user;
      })
      .then((user) => res.send(user).status(200))
      .catch((err) => console.log(err));
  }
  //REMOVE PRODUCTO DE CARRITO
  exports.removeCart= async (req, res, next) => {  ///funciona esto?
    try{
      await Users.update(req.body, {
        where: {
          id: req.body.id,
        },
      })

    }catch(err){
    next(err)
    }
  } */