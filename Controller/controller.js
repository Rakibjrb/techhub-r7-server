const {
  brandsCollection,
  connectdb,
  closedb,
  productsCollection,
  ObjectId,
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

const getSingleProduct = async (req, res) => {
  const productId = req.params;
  const filter = { _id: new ObjectId(productId) };
  try {
    await connectdb();
    const result = await productsCollection.findOne(filter);
    sendResponse(res, 200, result, "Item Found for this id ......");
  } catch (error) {
    sendResponse(res, 201, {}, "An error accured !!!");
    console.log(error);
  } finally {
    await closedb();
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const product = req.body;
  const filter = { _id: new ObjectId(productId) };
  const updated = {
    $set: {
      product_image: product.product_image,
      product_name: product.product_name,
      brand_name: product.brand_name,
      type: product.type,
      price: product.price,
      short_description: product.short_description,
      ratings: product.ratings,
    },
  };
  try {
    await connectdb();
    const result = await productsCollection.updateOne(filter, updated, {
      upsert: true,
    });
    sendResponse(res, 200, result, "Product Updated Succeessfully .....");
  } catch (error) {
    sendResponse(res, 201, {}, "Product not updated something went wrong !!!");
  } finally {
    await closedb();
  }
};

module.exports = {
  serverResponse,
  insertProduct,
  getBrands,
  getProducts,
  getSingleProduct,
  updateProduct,
};
