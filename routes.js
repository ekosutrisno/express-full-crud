"use strict";

module.exports = function (app) {
  var db = require("./controller");

  app.get("/produks", db.getProduks);
  app.get("/Produks/:id", db.getProdukById);
  app.post("/Produks", db.createProduk);
  app.put("/Produks/:id", db.updateProduk);
  app.delete("/Produks/:id", db.deleteProduk);
};
