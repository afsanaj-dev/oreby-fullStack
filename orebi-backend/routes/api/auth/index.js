const express =require ("express");
const {RegistrationController, LoginController, OtpVerifyController, forgetPasswordController, changePasswordController} = require("../../../controller/authController");
const router = express.Router();

router.post("/registration",RegistrationController);
router.post("/login",LoginController);
router.post("/otpverify",OtpVerifyController);
router.post("/forgetpassword",forgetPasswordController);
router.post("/changepassword",changePasswordController);

module.exports =router;
