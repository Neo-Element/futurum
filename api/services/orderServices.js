const { Carts } = require("../models");

// AÑADIR A CARRITO RUTA NO TERMINADA AUN
exports.serviceAddOrder = async (req, next) => {
  try {
    const cart = await Carts.create(req.body);
    return cart;
  } catch (err) {
    next(err);
  }
};
