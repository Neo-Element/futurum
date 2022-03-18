const express = require("express");
const { Reviews } = require("../models");
const reviewsRouter = express.Router();
const ReviewController = require("../controllers/reviewsCrontroller");

//================================================== DE ESTAS RUTAS PODEMOS SACAR LAS REVIEWS Y LOS VOTOS ======================================
//MARI/BACK
reviewsRouter.get("/all", ReviewController.getAllReviews);
//MARI/BACK
reviewsRouter.get("/:productId", ReviewController.getOneReview);
//MARI/BACK
reviewsRouter.post("/new", ReviewController.newReview);

module.exports = reviewsRouter;
