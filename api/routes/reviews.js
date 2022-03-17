const express = require("express");
const { Reviews } = require("../models");
const reviewsRouter = express.Router();

const ReviewController= require("../controllers/reviewsCrontroller")

//GET ALL
reviewsRouter.get("/all",ReviewController.getAll);
//GET ONE
reviewsRouter.get("/:productId", ReviewController.getOne);
//CREATE A REVIEW
reviewsRouter.post("/new", ReviewController.newReview);


//================================================== DE ESTAS RUTAS PODEMOS SACAR LAS REVIEWS Y LOS VOTOS ======================================




/* reviewsRouter.post("/new", (req, res) => {
  Reviews.create(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => console.error(err));
});
 */

module.exports = reviewsRouter;