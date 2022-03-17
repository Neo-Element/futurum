const express = require("express");
const { Reviews } = require("../models");
const reviewsRouter = express.Router();

reviewsRouter.get("/all", (req, res) => {
  Reviews.findAll()
    .then((reviews) => (reviews ? res.json(reviews) : res.sendStatus(404)))
    .catch((err) => console.error(err));
});

reviewsRouter.get("/:id", (req, res) => {
  Reviews.findByPk(req.params.id)
    .then((review) => (review ? res.json(review) : res.sendStatus(404)))
    .catch((err) => console.error(err));
});

reviewsRouter.post("/new", (req, res) => {
  Reviews.create(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => console.error(err));
});

module.exports = reviewsRouter;