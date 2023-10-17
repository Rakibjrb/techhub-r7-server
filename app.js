const express = require("express");
const cors = require("cors");
const {
  serverResponse,
  getBrands,
  insertProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
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
app.get("/api/products/:id", getSingleProduct);
app.post("/api/products", insertProduct);
app.put("/api/products/:id", updateProduct);

//ping connection check of mongodb
run();

module.exports = app;
