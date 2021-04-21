"use strict";

var response = require("./res");
var pool = require("./conn");

exports.index = function (req, res) {
  response.ok("Hello from the Node JS RESTful side!", res);
};

const getProduks = (request, response) => {
  pool.query("SELECT * FROM produk ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getProdukById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM produk WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createProduk = (request, response) => {
  const { nama_produk, keterangan, harga, jumlah } = request.body;

  pool.query(
    "INSERT INTO produk (nama_produk, keterangan, harga, jumlah) VALUES ($1, $2, $3, $4)",
    [nama_produk, keterangan, harga, jumlah],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Produk has been Added!`);
    }
  );
};

const updateProduk = (request, response) => {
  const id = parseInt(request.params.id);
  const { nama_produk, keterangan, harga, jumlah } = request.body;

  pool.query(
    "UPDATE produk SET nama_produk = $1, keterangan = $2, harga = $3, jumlah = $4 WHERE id = $5",
    [nama_produk, keterangan, harga, jumlah, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Produk modified with ID: ${id}`);
    }
  );
};

const deleteProduk = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM produk WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Produk deleted with ID: ${id}`);
  });
};

module.exports = {
  getProduks,
  getProdukById,
  createProduk,
  updateProduk,
  deleteProduk,
};
