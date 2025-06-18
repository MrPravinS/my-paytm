import express from 'express'
import env from 'dotenv'
import connectDb from './db.js'
import rootRouter from "./routes/index.js"
import cors from "cors"

const app = express()


env.config()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000


connectDb()
app.get("/",(req,res)=>{
    res.json({
      message:"Server is Running...."
    }
)
})

app.use('/api/v1',rootRouter)




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`);
    
})