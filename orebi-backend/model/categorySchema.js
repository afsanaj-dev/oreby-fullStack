const mongoose= require("mongoose");

const categorySchema= mongoose.Schema({
    name:{
        type: String,
        required:[true,"Category must have a name"],
        unique:[true],
    },
    description:{
        type:String,
    },
    isActive:{
        type: Boolean,
        default: false,
    }
})

module.exports =mongoose.model("Category",categorySchema);