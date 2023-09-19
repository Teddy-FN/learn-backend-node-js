// Import Models
const HomeModels = require("../models/index");

exports.home = (req, res, next) => {
  // get Controller
  HomeModels.getAllMessage((callBack) => {
    console.log("callBack =>", callBack);
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
  console.log("req.params =>", req.params);
  console.log("req.query =>", req.query);

  // Add to controller
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
  // // Direct to home again
  // res.redirect("/");
};
