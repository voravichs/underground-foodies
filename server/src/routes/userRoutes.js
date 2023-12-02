const express = require("express");

const { users } = require("../controllers");

const router = express.Router();

router.get("/:userId", users.getUserInfo);
router.get("/:userId/popularBusinesses", users.findPopularBusinesses);
// TODO: add Route 8
router.get("/:userId/recommendedBusinesses", users.findRecommendedBusinesses);

module.exports = router;
