const { Reviews } = require("../models");


class ReviewsServices{
 static async servicGetAllReviews(next){
      try{
         const reviews= await Reviews.findAll()
         return reviews 
      }catch(err){
        next(err)
      }
  }

 static async serviceGetOneReview(req, next){
      try{
          const review= await   Reviews.findOne({
              where: {
                productId: req.params.productId,
              },
          })
          return review
      }catch(err){
       next(err)
      }
  }
  static async serviceNewReview(req,next){
      try{
          await  Reviews.create(req.body)
      }catch(err){
        next(err)
      }
  }
}

module.exports=ReviewsServices;


