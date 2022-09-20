const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  stepsWalked: { type: Number, required: true },
  stepsTarget: { type: Number, required: true },
  performedDate: { type: Date, required: true },
  scheduledDate: { type: Date, required: true },
  calorieIntake: { type: Number, required: true },
  calorieTarget: { type: Number, required: true },
  proteinConsumed: { type: Number, required: true },
  proteinTarget: { type: Number, required: true },
  carbConsumed: { type: Number, required: true },
  carbTarget: { type: Number, required: true },
  fatConsumed: { type: Number, required: true },
  fatTarget: { type: Number, required: true },
  feedback: { type: Boolean, required: true },
});

module.exports = mongoose.model("User", userSchema);
