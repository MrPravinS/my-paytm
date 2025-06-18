import express from 'express'
import authMiddleware from '../middlerwares/middleware'
import Account from '../models/account'

const router = express()

router.get("/",authMiddleware,async(req,res)=>{
    const account = Account.findOne({
        userId:req.userId
    })

    return res.json({
        balance:account.balance
    })
})

export default router