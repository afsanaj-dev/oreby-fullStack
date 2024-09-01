const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ["member", "merchant", "admin"],
      default: "member",
    },
    emailVarify: {
      type: String,
      default: false,
    },
   otp: {
      type: Number,
    },
   token: {
      type: String,
    },
  },
  // timestamps will count all the time record for user
  {
    timestamps: true,
  }
);

module.exports= mongoose.model("User",userSchema);