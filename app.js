const express = require("express");
const cors = require("cors");
const {
  serverResponse,
  getBrands,
  insertProduct,
  getProducts,
} = require("./Controller/controller");
const { run } = require("./DB/db");
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//all api routes
app.get("/", serverResponse);
app.get("/api/brands", getBrands);
app.get("/api/products", getProducts);
app.post("/api/products", insertProduct);

//ping connection check of mongodb
run();

module.exports = app;
