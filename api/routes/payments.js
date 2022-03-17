const express = require("express");
const paymentsRouter = express.Router();
const { Payments } = require("../models");

paymentsRouter.get("/", (req, res, next) => {
  Payments.findAll()
    .then((payments) => (payments ? res.json(payments) : res.sendStatus(404)))
    .catch((err) => console.log(err));
});

module.exports = paymentsRouter;
