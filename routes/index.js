const express = require("express");
const router = express.Router();

// import userList
const controller = require("../controller/index");

// Home Page and Get all list message
router.get("/", controller.home);

// Add Message
router.post("/add-name", controller.addUserList);

// Edit Message
router.get("/edit-message/:id", controller.editUserMessage);

// Post Edit Message
router.get("/edit-name/:id", controller.addUserList);

module.exports = router;
