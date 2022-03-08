const express = require("express");
const router = express.Router()
const {Users} = require("../models") // correct routes


//add to shopping card recibe a traves de req.body. id del usuario y el arreglo con los id de los productos [12 , 13 ...]
router.patch("/add", (req,res,next)=>{
    Users.update(req.body, {where: {
        id: req.body.id
    }})
    .catch(next)
  })

router.patch("/remove", (req,res,next)=>{
    Users.update(req.body, {where: {
        id: req.body.id
    }})
    .catch(next)
})






module.exports = router;