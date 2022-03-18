const express = require("express");
const { Reviews } = require("../models");
const reviewsRouter = express.Router();
const ReviewController = require("../controllers/reviewsCrontroller");

//================================================== DE ESTAS RUTAS PODEMOS SACAR LAS REVIEWS Y LOS VOTOS ======================================
reviewsRouter.get("/all", ReviewController.getAllReviews);
reviewsRouter.get("/:productId", ReviewController.getOneReview);
reviewsRouter.post("/new", ReviewController.newReview);

module.exports = reviewsRouter;
