import express from "express"
import zod from "zod"
import User from "../models/user.js"
import jwt from "jsonwebtoken"
import { jwt_secret } from "../config.js"
import authMiddleware from "../middlerwares/middleware.js"
import Account from "../models/account.js"

const router = express.Router()

const signupBody = zod.object({
    userName:zod.string(),
    email:zod.string().email(),
    password:zod.string()

})


router.post('/signup',async(req,res)=>{
  const {success} = signupBody.safeParse(req.body)
  if(!success){
    return res.status(411).json({
        massege:"Email already taken/ incorrect inputs"
    })
  }

  const existingUser = await User.findOne({
    email:req.body.email
  })

  if(existingUser){
    return res.status(411).json({
        message:"Email already exist!.."
    })
  }

  const user = await User.create({
    userName:req.body.userName,
    email:req.body.email,
    password:req.body.password
  })

  const userId = user._id

  await Account.create({
    userId:userId,
    balance:1 + Math.random() * 10000
  })

  const token = jwt.sign({
    userId
  }, jwt_secret)
  res.json({
    message:"User created successfully",
    token:token
  })
})

const signinBody = zod.object({
    email:zod.string().email(),
    password:zod.string()
})

router.post("/signin",async(req,res)=>{
  const {success} = signinBody.safeParse(req.body)
  if(!success){
    return res.status(411).json({
        message:"Invalid Credentials"
    })
  }

  const user = await User.findOne({
    email:req.body.email,
    password:req.body.password
  })

  if(user){
    const token = jwt.sign({
        userId:user._id
    }, jwt_secret)
  
  res.json({
    token:token
  })
  return

 }

res.status(411).json({
    message:"Invalid credentials"
})
})

 const updateUserBody = zod.object({
    password:zod.string().optional(),
    userName:zod.string().optional(),
    email:zod.string().optional()
 })

router.put("/",authMiddleware,async(req,res)=>{
    const {success} = updateUserBody.safeParse(req.body)
    if(!success){
       return  res.status(411).json({
            message:"Invalid error"
        })
    }

    await User.updateOne({_id:req.userId},req.body,{new:true})
    

    res.status(201).json({
        message:"User Update Successfully."
    })
})


router.get("/bulk",async(req,res)=>{
    const filter = req.query.filter || ""
   
    const users = await User.find({
      $or: [
      { userName: { $regex: filter, $options: "i" } },
      { email: { $regex: filter, $options: "i" } }
    ]
    })

    res.json({
        user:users.map(user=>({
            userName:user.userName,
            email:user.email,
            _id:user._id
        }))
    })
})

router.delete("/delete",async(req,res)=>{
   return await User.deleteMany({})
   
})

export default router