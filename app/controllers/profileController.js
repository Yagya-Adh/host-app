const asynHandler = require("express-async-handler");

const Profile = require("../models/profileModle");

const getProfile = asynHandler(async (req, res) => {
  const profile = await Profile.find();
  res.status(200).json(profile);
});

const createProfile = asynHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const profile = await Profile.create({
    text: req.body.text,
  });

  res.status(200).json(profile);
});

const updateProfile = asynHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    req.status(400);
    throw new Error("Profile is not available.");
  }

  const updateProfile = await Profile.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateProfile);
});

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
};
