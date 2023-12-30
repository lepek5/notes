import mongoose from "mongoose";
import config from "./utils/config";

const connect = async () => {
  try {
    await mongoose.connect(config.Database.URI);
    console.log('>> Connected to MongoDB');
  } catch (err: any) {
    console.log('error at mongo', err);
  }
}

export default {
  connect
}