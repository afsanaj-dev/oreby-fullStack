const EmailValidation = require("../helpers/emailValidation");
const sendOtpEmail = require("../helpers/sendOTPEmail");
const userSchema = require("../model/userSchema");
const bcrypt = require('bcrypt');

async function RegistrationController(req, res) {
  let { name, email, password, phone, avatar } = req.body;
  let existingUser = await userSchema.find({email});
  if (!name || !email || !password) {
    return res.send({ error: "Invalid credentials" });
  }else if(!EmailValidation(email)){
    res.send({error:"Please provide a Valid email"});
  }else if(existingUser.length>0){
    res.status(400).json({error:"Email is already registered"})
  }
  else {
    bcrypt.hash(password, 10,async function(err, hash) {
      if(err){
        res.send({error: err})
      }else{
        let user = new userSchema({
          name,
          email,
          password: hash,
          phone,
          avatar,
        });
        try {
          await user.save();
          sendOtpEmail(email);
          res.send(user);
        } catch (error) {
          res.send(error);
        }
      }
  });
  }
}

module.exports = RegistrationController;
