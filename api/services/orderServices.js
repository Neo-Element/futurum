const { Orders } = require("../models");

class OrderService{
 static async serviceAddOrder(req, next){
    try {
      const cart = await Orders.create(req.body);
      return cart;
    } catch (err) {
      next(err);
    }
  };
}
module.exports= OrderService;



// AÑADIR A CARRITO RUTA NO TERMINADA AUN
exports.serviceAddOrder = async (req, next) => {
  try {
    const cart = await Carts.create(req.body);
    return cart;
  } catch (err) {
    next(err);
  }
};
