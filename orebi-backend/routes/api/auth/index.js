const express =require ("express");
const {RegistrationController, LoginController, OtpVerifyController} = require("../../../controller/authController");
const router = express.Router();

router.post("/registration",RegistrationController);
router.post("/login",LoginController);
router.post("/otpverify",OtpVerifyController);

module.exports =router;
