// Import Models
const HomeModels = require("../models/index");

exports.home = (req, res, next) => {
  HomeModels.findAll()
    .then((response) => {
      res.render("home", {
        pageTitle: "Home",
        path: "/",
        users: response,
        dataById: null,
        editMode: false,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addUserList = (req, res, next) => {
  const name = req.body.name,
    message = req.body.message;

  HomeModels.create({
    name: name,
    message: message,
  })
    .then((response) => {
      res.redirect("/");
    })
    .catch((err) => {});
};

exports.editUserMessage = (req, res, next) => {
  const id = req.params.id;

  if (id) {
    HomeModels.findAll()
      .then((responseFindAll) => {
        HomeModels.findAll({
          where: {
            id: id,
          },
        })
          .then((responseByid) => {
            res.render("home", {
              pageTitle: "Home",
              path: "/",
              users: responseFindAll,
              dataEditFieldMessage: responseByid[0].dataValues.message,
              dataEditFieldName: responseByid[0].dataValues.name,
              dataById: responseByid[0].dataValues.id,
              editMode: true,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.postEditMessage = (req, res, next) => {
  const id = req.params.id,
    name = req.body.name,
    message = req.body.message;

  HomeModels.update(
    { name: name, message: message },
    {
      where: {
        id: id,
      },
    }
  )
    .then((response) => {
      console.log("response =>", response);
      res.redirect("/");
    })
    .catch((err) => {});
};

// Delete
exports.deleteMessage = (req, res, next) => {
  const id = req.params.id;

  HomeModels.destroy({
    where: {
      id: id,
    },
  })
    .then((response) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log("ERR NI BRAY =>", err);
    });
};
