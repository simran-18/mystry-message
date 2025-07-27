// lib/dbConnect.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
console.log("MONGODB_URI:", MONGODB_URI);
if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI environment variable is not defined");
}

let isConnected = false;

export const dbConnect = async (): Promise<void> => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log(`✅ MongoDB connected: ${db.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};
