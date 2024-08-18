const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  resume: String, // Path or URL of the uploaded resume
  video: String, // Path or URL of the uploaded video
});

const Referral = mongoose.model("Referral", referralSchema);

module.exports = Referral;
