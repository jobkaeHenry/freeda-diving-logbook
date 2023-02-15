const express = require("express");
const HttpError = require("../models/error");
const userController = require("../controllers/userController")

const router = express.Router();

router.get("/:id", userController);

module.exports = router;
