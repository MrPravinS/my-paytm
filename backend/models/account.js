import mongoose from "mongoose";
import { number } from "zod";


const acountSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true

  },
  balance:{
    type:number,
    required:true
  }

})

const Account = mongoose.model("Account",acountSchema)

export default Account