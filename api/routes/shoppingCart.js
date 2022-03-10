const express = require("express");
const router = express.Router()
const {Users} = require("../models") // correct routes
const {Products}= require("../models")

//add to shopping card recibe a traves de req.body. id del usuario y el arreglo con los id de los productos [12 , 13 ...]
router.patch("/add", (req,res,next)=>{
    Users.update(req.body, {where: {
        id: req.body.id
    }})
    .catch(next)
  })

 router.get("/:id/all", (req, res)=>{

   Users.findOne({
       where:{id: req.params.id }
   })
   .then((user)=>{
       const arr= user.cart;
       ///[3,20,25]}}}
 arr.map((product)=>{
      Products.findOne({
           where:{
              id: product 
           }
       })

       .then((product)=>product.data)})
       return user.cart=arr
   }).then((user)=> res.send(user).status(200))
    .catch((err)=> console.log(err))
   })
   


router.patch("/remove", (req,res,next)=>{
    Users.update(req.body, {where: {
        id: req.body.id
    }})
    .catch(next)
})






module.exports = router;