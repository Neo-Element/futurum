
const OrderService = require("../services/orderServices");
// brach de mari: NOTA dejar de toda esta ruta lo dela rama de vir para que funcione
class OrderController{
 static async addOrder (req, res, next){
    const order = await OrderService.serviceAddOrder(req, next);
    return res.status(201).send(order);

}
};

module.exports= OrderController;
