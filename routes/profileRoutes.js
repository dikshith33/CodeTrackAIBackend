const express = require("express");

const router = express.Router();

const {
    getProfile,
    getCodeforcesUser,
    getCodeforcesRatingHistory,
} = require("../controllers/profileController");

router.get(
    "/leetcode/:username",
    getProfile
);

router.get(
    "/codeforces/:username",
    getCodeforcesUser
);
router.get(
    "/codeforces/:username/history",
    getCodeforcesRatingHistory
);
module.exports = router;