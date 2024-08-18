const express = require("express");
const router = express.Router();
const Referral = require("../models/Referral");
const multer = require("multer");
const path = require("path");

// Setup multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // Ensure this is correct
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// POST /api/get_referral - Save referral data
router.post(
  "/get_referral",
  upload.fields([{ name: "resume" }, { name: "video" }]),
  async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      const resume = req.files["resume"]
        ? req.files["resume"][0].filename
        : null;
      const video = req.files["video"] ? req.files["video"][0].filename : null;

      const newReferral = new Referral({
        name,
        email,
        phone,
        resume,
        video,
      });

      await newReferral.save();

      res
        .status(201)
        .json({ message: "Referral information saved successfully" });
    } catch (error) {
      console.error("Error saving referral:", error);
      res
        .status(500)
        .json({
          error: "An error occurred while saving the referral information",
        });
    }
  }
);

// GET /api/give_referrals - Fetch all referrals
router.get("/give_referrals", async (req, res) => {
  try {
    const referrals = await Referral.find({});
    res.json(referrals);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the referrals" });
  }
});

module.exports = router;
