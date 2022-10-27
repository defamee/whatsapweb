const express = require("express");
const api = require("./controllers/waControler");
const router = express.Router();

/*
router.get("/api", (req, res)=>{
res.json({status : "ok"})

});

*/

router.get("/api", api );

module.exports = router;