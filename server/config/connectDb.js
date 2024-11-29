import mongoose from "mongoose";

// mongoos/.e

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    }
  };


  export default connectDB;