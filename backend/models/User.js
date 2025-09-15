// User model schema will go here
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Users", userSchema);
