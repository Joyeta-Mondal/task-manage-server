import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Construct the MongoDB connection string using environment variables
const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.vmbyt.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;
//
// MongoDB connection function
export const dbConnection = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

// Generate a JWT token
export const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

// Verify a JWT token
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
};
