var express   = require("express"),
    app       = express(),
    Sequelize = require("sequelize"),
    models    = require(__dirname + "/models");

var sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'C:/Users/alvaro/Documents/TDD-NodeJS/database.sqlite'
});

sequelize.sync({
    force: true
});

app.listen(3000);