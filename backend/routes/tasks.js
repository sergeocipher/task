import express from "express";
import Task from "../models/Task.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const filter = { userId: req.user.id };
  if (req.query.category) filter.category = req.query.category;
  res.json(await Task.find(filter));
});

router.post("/", auth, async (req, res) => {
  const task = await new Task({ ...req.body, userId: req.user.id }).save();
  res.status(201).json(task);
});

router.patch("/:id", auth, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(task);
});

router.delete("/:id", auth, async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.send("Deleted");
});

export default router;
