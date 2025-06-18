import mongoose from "mongoose";
import env from 'dotenv'


const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected Successfully!...");
        
    } catch (error) {
        console.log("MongoDB Connection  Error: " + error);
        
    }
}

export default connectDb