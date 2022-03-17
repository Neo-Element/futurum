const express = require("express");
const { Reviews } = require("../models");
const reviewsRouter = express.Router();
const ReviewController= require("../controllers/reviewsCrontroller")

//GET ALL
reviewsRouter.get("/all",ReviewController.getAll);
//GET ONE
reviewsRouter.get("/:id", ReviewController.getOne);
//CREATE A REVIEW
reviewsRouter.post("/new", ReviewController.newReview);

module.exports = reviewsRouter;