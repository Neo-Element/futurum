const ReviewService = require("../services/reviewsServices");


class ReviewController{

   static async getAllReviews(req,res,next){
    const reviews= await ReviewService.servicGetAllReviews(next)
    return reviews ? res.json(reviews) : res.sendStatus(404)
    }
  
    static async getOneReview(req,res,next){
        const review= await ReviewService.serviceGetOneReview(req,next)
        return review ? res.json(review) : res.sendStatus(404)
    }
    
    static async newReview(req,res,next){
        const review =  await ReviewService.serviceNewReview(req, next)
        return res.status(201).send(review)
    }
}
module.exports= ReviewController;

