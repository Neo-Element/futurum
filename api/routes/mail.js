const express = require("express");
const router = express.Router();

router.post("/", (req, res) =>{
    console.log("ESTO ES REQ.BODY", req.body)
})

module.exports = router;