// Auth routes will go here
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await new User({ name, email, passwordHash: hashed }).save();
  res.status(201).send("User created");
});

router.post("/login", async (req, res) => {
// destructuring
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).send("Invalid");

  const ok = await bcrypt.compare(password, user.passwordHash);
  
  if (!ok) return res.status(400).send("Invalid");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

export default router;
