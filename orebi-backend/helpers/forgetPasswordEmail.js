const nodemailer = require("nodemailer");
 
async function forgetPasswordEmail(email,token){
  
let link = `http://localhost:5173/changepassword/${token}`;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.AUTH_EMAIL,
          pass: process.env.AUTH_PASS,
        },
      });
      const info = await transporter.sendMail({
        from: process.env.AUTH_EMAIL, // sender address
        to: email, // list of receivers
        subject: "Please change your password", // Subject line
        html: `<img alt=orebi src=https://i.ibb.co/Lrmyk1W/Footer-Logo.png><p style=font-family:Arial,Helvetica,sans-serif;font-size:14px>Press the button for password change</p><a href=${link} style="font-family:Arial,Helvetica,sans-serif;font-size:14px;background:#5353b7;color:#f0f8ff;padding:6px 10px;text-decoration:none;border-radius:5px">change password</a>`, // html body
      });
}
module.exports= forgetPasswordEmail;