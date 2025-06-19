import express from 'express'
import authMiddleware from '../middlerwares/middleware.js'
import Account from '../models/account.js'
import mongoose from 'mongoose'

const router = express.Router()



router.get('/balance', authMiddleware, async (req, res) => {
  
    // You can use req.userId from the middleware
    const account = await Account.findOne({ userId: req.userId });

    console.log("From token:", req.userId);

    console.log("From DB:", account);

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }


     res.json({
      userId:account.userId,
      balance: account.balance,
    });

    
});



router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { amount, to } = req.body;

    if (!amount || amount <= 0) {
      throw new Error("Amount must be greater than 0");
    }

    console.log("req.userId from authMiddleware:", req.userId);
    // Step 1: Get sender's account
    const fromAccount = await Account.findOne({ userId: req.userId }).session(session);
    console.log("Sender Account:", fromAccount);
    console.log("Transfer Amount:", amount);

    if (!fromAccount || fromAccount.balance < amount) {
      throw new Error("Insufficient Balance");
    }

    // Step 2: Get recipient's account
    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
      throw new Error("Invalid recipient account");
    }

    // Step 3: Deduct from sender and credit to receiver
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    // Step 4: Commit transaction
    await session.commitTransaction();
    console.log("Transfer complete");

    return res.json({ message: "Transfer successful" });

  } catch (err) {
    // Roll back transaction on error
    await session.abortTransaction();
    console.error("Transaction failed:", err.message);
    return res.status(400).json({ message: err.message });

  } finally {
    session.endSession(); // Always close the session
  }
});



export default router