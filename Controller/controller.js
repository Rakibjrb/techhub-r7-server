const { brandsCollection, connectdb, closedb } = require("../DB/db");
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

const insertBrands = async (req, res) => {
  const brandData = req.body;
  try {
    await connectdb();
    const result = await brandsCollection.insertOne(brandData);
    sendResponse(res, 200, result, "Successfully get brand data ....");
  } catch (error) {
    sendResponse(res, 201, [], "An error accured !!!");
  } finally {
    await closedb();
  }
};

module.exports = { serverResponse, insertBrands, getBrands };
