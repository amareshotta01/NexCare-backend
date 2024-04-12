import mongoose from'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB database connected successfully.');
    } catch (error) {
        console.error('MongoDB database connection failed. Error:', error.message);
    }
}

export default connectDB;