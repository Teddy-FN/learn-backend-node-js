const express = require("express");
const router = express.Router();

// import userList
const controller = require("../controller/index");

// Home Page and Get all list message
router.get("/", controller.home);

// Add Message
router.post("/add-name", controller.addUserList);

// Edit Message
router.post("/edit-message/:id", controller.editUserMessage);

// Post Edit Message
router.post("/edit-name/:id", controller.postEditMessage);

// Delete Post
router.post("/delete-message/:id", controller.deleteMessage);

module.exports = router;
