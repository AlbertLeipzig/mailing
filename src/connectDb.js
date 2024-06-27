import mongoose from "mongoose";

export const connectDb = async (dbUrl) => {
  try {
    await mongoose.connect(dbUrl);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
