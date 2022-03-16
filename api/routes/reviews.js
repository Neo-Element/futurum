const express = require("express");
const { Reviews } = require("../models");
const reviewsRouter = express.Router();

//================================================== DE ESTAS RUTAS PODEMOS SACAR LAS REVIEWS Y LOS VOTOS ======================================
reviewsRouter.get("/all", (req, res) => {
  Reviews.findAll()
    .then((reviews) => (reviews ? res.json(reviews) : res.sendStatus(404)))
    .catch((err) => console.error(err));
});

reviewsRouter.get("/:productId", (req, res) => {
  Reviews.findOne({
    where: {
      productId: req.params.productId,
    },
  })
    .then((review) => (review ? res.json(review) : res.sendStatus(404)))
    .catch((err) => console.error(err));
});

reviewsRouter.post("/new", (req, res) => {
  Reviews.create(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => console.error(err));
});

module.exports = reviewsRouter;
