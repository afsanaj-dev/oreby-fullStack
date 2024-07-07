const nodemailer = require("nodemailer");

async function sendOtpEmail(email){
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: process.env.AUTH_EMAIL,
          pass: process.env.AUTH_PASS,
        },
      });
      const info = await transporter.sendMail({
        from: process.env.AUTH_EMAIL, // sender address
        to: email, // list of receivers
        subject: "OTP Code for Email Verification", // Subject line
        html: "<img alt=orebi src=https://i.ibb.co/Lrmyk1W/Footer-Logo.png><br><br><b style=font-family:Arial,Helvetica,sans-serif;font-size:16px>Your verification code is [code].</b><p style=font-family:Arial,Helvetica,sans-serif;font-size:14px>Enter this code in our [website or app] to activate your [customer portal] account.<p style=font-family:Arial,Helvetica,sans-serif;font-size:14px>We’re glad you’re here!<p style=font-family:Arial,Helvetica,sans-serif;font-size:14px>The [company] team" // html body
      });
}
module.exports = sendOtpEmail;