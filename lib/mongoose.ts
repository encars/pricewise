import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URI) return console.error("No MongoDB URI provided");

    if (isConnected) return console.info("Already connected to MongoDB");

    try {
        await mongoose.connect(process.env.MONGODB_URI);

        isConnected = true;

        console.info("Successfully connected to MongoDB");
    } catch (error) {
        console.error(`Failed to connect to MongoDB: ${error}`);
    }
}