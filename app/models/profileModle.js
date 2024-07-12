const express = require("express");
const mongoose = require("mongoose");
const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name."],
    },
    email: {
      type: String,
      require: [true, "Please add am email."],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Profile", profileSchema);
