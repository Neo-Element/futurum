const { Payments } = require("../models");

class PaymentsServices{
    static async serviceGetAll( next){
    try{
      const payments= await Payments.findAll()
      return payments
    } catch(err){
   next(err)
    }
    }  
}
module.exports= PaymentsServices