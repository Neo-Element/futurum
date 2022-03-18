const { Reviews } = require("../models");

// GET ALL
exports.servicGetAllReviews= async (next)=>{
    try{
       const reviews= await Reviews.findAll()
       return reviews 
    }catch(err){
      next(err)
    }
}

//GET ALL BY PRODUCT
exports.serviceGetOneReview= async(req, next)=>{
    try{
        const review = await   Reviews.findAll({
            where: {
              productId: req.params.productId,
            },
        })
        return review
    }catch(err){
     next(err)
    }
}

//CREATE A REVIEW
exports.serviceNewReview= async(req,next)=>{
    try{
      const review = await  Reviews.create(req.body)
      return review
    }catch(err){
      next(err)
    }
}