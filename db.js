import mongoose from "mongoose";

// Construct the MongoDB connection string using environment variables
const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`;

// MongoDB connection function
export const dbConnection = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};
