const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
    name:String,
    phoneNumber: String,
    email: String,
    password:String,
    role:{
        type:String,
        enum:['User','Admin'],
        default:'User'
    }
   
}
)


const User = mongoose.model("User",userSchema);

module.exports = User

