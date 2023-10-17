const {
  brandsCollection,
  connectdb,
  closedb,
  productsCollection,
} = require("../DB/db");
const sendResponse = require("../Response/response");

const serverResponse = async (req, res) => {
  res.send("Tech Hub BD Server is running fine .......");
};

const getBrands = async (req, res) => {
  try {
    await connectdb();
    const result = await brandsCollection.find().toArray();
    sendResponse(res, 200, result, "Successfully get brand data ....");
  } catch (error) {
    sendResponse(res, 201, [], "An error accured !!!");
  } finally {
    await closedb();
  }
};

const insertProduct = async (req, res) => {
  const productData = req.body;
  try {
    await connectdb();
    const result = await productsCollection.insertOne(productData);
    sendResponse(res, 200, result, "Successfully added a product ....");
  } catch (error) {
    sendResponse(res, 201, [], "An error accured !!!");
  } finally {
    await closedb();
  }
};

const getProducts = async (req, res) => {
  try {
    await connectdb();
    const result = await productsCollection.find().toArray();
    sendResponse(res, 200, result, "Successfully get all products data ....");
  } catch (error) {
    sendResponse(res, 201, [], "An error accured !!!");
  } finally {
    await closedb();
  }
};

module.exports = {
  serverResponse,
  insertProduct,
  getBrands,
  getProducts,
  deleteProduct,
};
