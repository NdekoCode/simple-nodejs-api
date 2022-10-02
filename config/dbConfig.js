import mongoose from "mongoose";
export const dbConfig = () => {
  return mongoose.connect(
    "mongodb://localhost:27017/node-api",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error, result) => {
      if (error) throw error;
      console.log("MongoDB connected");
    }
  );
};
