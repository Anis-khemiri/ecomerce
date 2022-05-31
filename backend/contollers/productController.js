import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModels.js";

const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
export {getProducts ,  getProductById};