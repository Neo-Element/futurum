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

//GET ONE
exports.serviceGetOneReview= async(req, next)=>{
    try{
        const review= await  Reviews.findByPk(req.params.id)
        return review
    }catch(err){
     next(err)
    }
}
//CREATE A REVIEW
exports.serviceNewReview= async(req,next)=>{
    try{
        await  Reviews.create(req.body)
    }catch(err){
      next(err)
    }
}