var express   = require("express"),
    app       = express(),
    Sequelize = require("sequelize"),
    models    = require(__dirname + "/models");

app.listen(3000);