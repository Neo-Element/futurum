const express = require("express");
const paymentsRouter = express.Router();
const PaymentsControllers = require("../controllers/paymentsController");
//MARI/BACK
paymentsRouter.get("/", PaymentsControllers.getAllPayments);

module.exports = paymentsRouter;
