const HttpError = require("../models/http-error");
const User = require("../models/user");

const getAllUserData = async (req, res, next) => {
  let users;
  try {
    users = await User.find({});
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later,",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const updateCal = async (req, res, next) => {
  console.log(req.body.calorieTarget);

  const userId = req.body.id;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong! Could not update calorie target!",
      500
    );
    return next(error);
  }
  const updatedCal = req.body.calorieTarget;
  user.calorieTarget = updatedCal * 1000;
  try {
    await user.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update calorie target!",
      500
    );
    return next(error);
  }
};

const updateSteps = async (req, res, next) => {
  const userId = req.body.id;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong! Could not update csteps target!",
      500
    );
    return next(error);
  }
  const updatedSteps = req.body.stepsTarget;
  user.stepsTarget = updatedSteps * 1000;
  try {
    await user.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update steps target!",
      500
    );
    return next(error);
  }
};

exports.getAllUserData = getAllUserData;
exports.updateCal = updateCal;
exports.updateSteps = updateSteps;
