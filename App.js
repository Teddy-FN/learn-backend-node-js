const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// App
const app = express();

// Import Routes
const home = require("./routes/index");

// Add view engine to ejs
app.set("view engine", "ejs");
app.set("views", "views");

// Add Body parser
app.use(bodyParser.urlencoded({ extended: false }));
// Add Static File
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.use(home);

// Error Page
app.use((req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "404 Not Found !",
  });
});
// server
app.listen(4000);
