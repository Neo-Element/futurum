const express = require("express");
const router = express.Router();
//const nodemailer = require("nodemailer");
//const {google} = require("googLeapis");

router.post("/", (req, res) =>{
    console.log("ESTO ES REQ.BODY", req.body)
})



module.exports = router;