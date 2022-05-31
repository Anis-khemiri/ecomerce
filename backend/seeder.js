import mongoose from "mongoose";
import dotenv from "dotenv";
import data from "./data.js";
import colors from "colors";
import Product from "./models/productModels.js";
import User from "./models/userModels.js";
import order from "./models/orderModels.js";
import connectDB from "./config/db.js";
import { argv } from 'process';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(data.users);
    const adminUser = createdUser[0]._id;
    const sampleProducts = data.products.map((product)=>{
     
      return { ...product, user:adminUser }
    })
    await Product.insertMany(sampleProducts);
    console.log("data imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("data destroy");
    process.exit();
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  console.log(process.argv)
  destroyData();
} else {
  importData();
}
