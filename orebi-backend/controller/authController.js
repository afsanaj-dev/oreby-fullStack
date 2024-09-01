const { set } = require("mongoose");
const EmailValidation = require("../helpers/emailValidation");
const sendOtpEmail = require("../helpers/sendOTPEmail");
const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
var jwt = require("jsonwebtoken");
const forgetPasswordEmail = require("../helpers/forgetPasswordEmail");

async function RegistrationController(req, res) {
  let { name, email, password, phone, avatar } = req.body;
  let existingUser = await userSchema.find({ email });
  if (!name || !email || !password) {
    return res.send({ error: "Invalid credentials" });
  } else if (!EmailValidation(email)) {
    res.send({ error: "Please provide a Valid email" });
  } else if (existingUser.length > 0) {
    res.status(400).json({ error: "Email is already registered" });
  } else {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        res.send({ error: err });
      } else {
        let user = new userSchema({
          name,
          email,
          password: hash,
          phone,
          avatar,
        });

        const generator1 = aleaRNGFactory(Date.now());
        let generateNumber = generator1.uInt32();
        let randomOtp = generateNumber.toString().substring(0, 6);

        try {
          await user.save();
          sendOtpEmail(email, name, randomOtp);
          await userSchema.findOneAndUpdate(
            { email },
            { $set: { otp: randomOtp } },
            { new: true }
          );
          res.send(user);
        } catch (error) {
          res.send(error);
        }
      }
    });
  }
}

async function LoginController(req, res) {
  let { email, password } = req.body;
  let existingUser = await userSchema.find({ email });

  if (existingUser.length > 0) {
    // if(existingUser[0].password==password){
    //   res.send({success:"Login Success"});
    // }
    bcrypt.compare(password, existingUser[0].password, function (err, result) {
      if (result) {
        res
          .status(200)
          .send({ success: "Login Success", user: existingUser[0] });
      } else {
        return res.status(404).send({ error: "Login Failed" });
      }
    });
  } else {
    return res.status(404).send({ error: "Login Failed totally" });
  }
}

async function OtpVerifyController(req, res) {
  let { email, otp } = req.body;
  try {
    let existingUser = await userSchema.find({ email });
    if (existingUser.length > 0) {
      if (existingUser[0].otp == otp) {
        let updatEmailVerify = await userSchema.findOneAndUpdate(
          { email },
          { emailVarify: true, otp: "" }
        );
        res.status(200).send({ success: "Email Verified" });
      } else {
        return res.status(404).send({ error: "OTP doesn't match" });
      }
    } else {
      return res.status(404).send({ error: "Email not found" });
    }
  } catch (error) {
    return res.status(404).send({ error: error });
  }
  res.send("OTP verification");
}

async function forgetPasswordController(req,res) {
  let { email } = req.body;
  try {
    let existingUser = await userSchema.find({ email });

    if (existingUser.length > 0) {

      var token = jwt.sign({ email }, "mern");

      let settoken = await userSchema.findOneAndUpdate(
        { email },
        { $set: { token: token } },
        { new: true }
      );
      forgetPasswordEmail(email,token);
      res.send(existingUser);
    } else {
      return res.status(404).send({ error: "email not found" });
    }
  } catch (error) {
    return res.status(404).send({ error: "something wrong" });
  }
}

async function changePasswordController(req, res) {
  let { email, newpassword } = req.body;
  let {token}= req.headers;


  try {
    let existingUser = await userSchema.find({ email });
    if (existingUser.length > 0) {
      // Here we should take "mern" inside .env file as it's a secret key
      jwt.verify(token, 'mern', function(err, decoded) {
        if(err){
          return res.status(404).send({ error: "token not found" });
        }else{
          if(decoded.email==email){
            bcrypt.hash(newpassword, 10, async function (err, hash) {
              // result == true
              let changepassword = await userSchema.findOneAndUpdate(
                { email },
                { password: hash },
                { new: true }
              );
              res.send(changepassword);
            });
          }
        }
      });
    } else {
      return res.status(404).send({ error: "email not found" });
    }
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}
module.exports = {
  RegistrationController,
  LoginController,
  OtpVerifyController,
  forgetPasswordController,
  changePasswordController,
};
