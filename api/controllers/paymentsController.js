const PaymentsServices= require("../services/paymentsServices")

class PaymentsController{
    static async getAllPayments(req, res, next){
        const payments= await PaymentsServices.serviceGetAll(next)
        return payments ? res.json(payments) : res.sendStatus(404)
    }
}

module.exports = PaymentsController