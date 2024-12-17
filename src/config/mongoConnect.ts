import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI environment variable");
}

const connectToDb = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    // Properly type the error object
    if (error instanceof Error) {
      console.error("Could not connect to MongoDB:", error.message);
    } else {
      console.error("Could not connect to MongoDB: Unknown error occurred");
    }
    process.exit(1);
  }
};

export default connectToDb;
