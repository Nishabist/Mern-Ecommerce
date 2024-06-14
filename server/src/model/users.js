const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
    name:String,
    phoneNumber: String,
    email: String,
    password:String,
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
   
}
)


const User = mongoose.model("User",userSchema);

module.exports = User

