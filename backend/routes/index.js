import express from 'express'
import userRouter from "../controllers/user.js"
import accountRouter from '../controllers/account.js'

const router = express.Router()

router.use("/user",userRouter)
router.use("/account",accountRouter)
export default router