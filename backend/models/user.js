import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required:[true ,"UserName is required"],
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
        minLength:[8,"at least 8 character in password"],
    }
})


const User = mongoose.model("User",userSchema)

export default User