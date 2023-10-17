const express = require("express");
const cors = require("cors");
const {
  serverResponse,
  insertBrands,
  getBrands,
} = require("./Controller/controller");
const { run } = require("./DB/db");
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//all api routes
app.get("/", serverResponse);
app.post("/api/brands", insertBrands);
app.get("/api/brands", getBrands);

//ping connection check of mongodb
run();

module.exports = app;
