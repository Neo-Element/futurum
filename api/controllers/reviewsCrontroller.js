const ReviewService = require("../services/reviewsServices");

//GET ALL
exports.getAll = async (req, res, next) => {
  const reviews = await ReviewService.servicGetAllReviews(next);
  return reviews ? res.json(reviews) : res.sendStatus(404);
};

//GET ONE
exports.getOne = async (req, res, next) => {
  const review = await ReviewService.serviceGetOneReview(req, next);
  return review ? res.json(review) : res.sendStatus(404);
};
//CREATE A REVIEW
exports.newReview = async (req, res, next) => {
  const review = await ReviewService.serviceNewReview(req, next);
  return res.status(201).send(review);
};
