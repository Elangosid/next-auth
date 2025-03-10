import mongoose from "mongoose";

export const connectMongoDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/next-auth" as string)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connectingto MongoDB", error);
    }
}