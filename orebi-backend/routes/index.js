const express =require ("express");
const router = express.Router();
const apiroutes= process.env.APIROUTE;
const api = require("./api")

router.use(apiroutes,api);
router.use(apiroutes,(req,res)=>{
    res.send("No API found on this route");
});


module.exports =router;
