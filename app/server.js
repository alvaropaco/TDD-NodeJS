var express   = require("express"),
    app       = express(),
    Sequelize = require("sequelize"),
    path      = require("path"),
    models    = require(path.join(__dirname, "/models"));

app.listen(3000);