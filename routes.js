"use strict";

module.exports = function (app) {
  var db = require("./controller");

  app.get("/users", db.getUsers);
  app.get("/users/:id", db.getUserById);
  app.post("/users", db.createUser);
  app.put("/users/:id", db.updateUser);
  app.delete("/users/:id", db.deleteUser);
};
