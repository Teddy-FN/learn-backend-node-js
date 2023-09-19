// Import Models
const HomeModels = require("../models/index");

exports.home = (req, res, next) => {
  // get Controller
  HomeModels.getAllMessage((callBack) => {
    res.render("home", {
      pageTitle: "Home",
      path: "/",
      users: callBack,
      dataById: null,
      editMode: false,
    });
  });
};

exports.addUserList = (req, res, next) => {
  const body = {
    id: Math.random().toString(),
    ...req.body,
  };
  const userModels = new HomeModels(body);
  userModels.save();

  // // Direct to home again
  res.redirect("/");
};

exports.editUserMessage = (req, res, next) => {
  const id = req.params.id;
  HomeModels.findById(id, (dataById, callBack) => {
    res.render("home", {
      pageTitle: "Home",
      path: "/",
      users: callBack,
      dataById: dataById,
      editMode: true,
    });
  });
};

exports.postEditMessage = (req, res, next) => {
  // Add to controller
  const id = req.params.id;
  const updatedName = req.body.name;
  const updatedMessage = req.body.message;

  // Updated to moodels
  const userModels = new HomeModels({
    id: id,
    name: updatedName,
    message: updatedMessage,
  });
  userModels.save();

  // direct to home
  res.redirect("/");
};
