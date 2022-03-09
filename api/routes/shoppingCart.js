const express = require("express");
const router = express.Router()
const {Users} = require("../models") 


//reciben a traves de req.body -->  id del usuario y el arreglo con los id de los productos [12 , 13 ...]

//ADD TO SHOPPING CARD
router.patch("/add", (req,res,next)=>{
    Users.update(req.body, {where: {
        id: req.body.id
    }})
    .catch(next)
})



//REMOVE FROM SHOPPING CARD
router.patch("/remove", (req,res,next)=>{
    Users.update(req.body, {where: {
        id: req.body.id
    }})
    .catch(next)
})

module.exports = router;