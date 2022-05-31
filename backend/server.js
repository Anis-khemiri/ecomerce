/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from "express";

import connectDB from "./config/db.js";
import colors from 'colors'
// import data from "./data.js";
import dotenv  from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
// import userRouter from "./routers/userRouter.js";
import Product from "./models/productModels.js";
// import User from "./models/userModels.js";


dotenv.config()
connectDB();
const app = express()
app.use(express.json());
const port = process.env.PORT 
const NODE_ENV = process.env.NODE_ENV
// import userRouter from "./routers/userRouter.js";
// import connectDB from "./config/db.js";



// connectDB();
// dotenv.config();
// 
// mongoose.connect.MONGO_URI
//   .then((conn) => {
//     console.log(`Database Connected: ${conn.connections.host}`);
//   })
//   .catch((err) => {
//     console.error(`Database Error: ${err}`);
//     process.exit(1);
//   });
//  || 'mongodb://localhost/full-ecomerce',{
//   useNewUrlParser: true,
//   useUnifieldTopology: true,
//   useCreateIndex: true,
// });



// app.get("/", (req, res) => {
//   res.send(User);
// });
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
// app.use("/api/users", userRouter);
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.use((req, res, next) => {
  const error = new Error(`Not found  - ${req.originalUrl}`) 
  res.status(404)
  next(error)
}
  );

app.use((err, req, res, next) => {
  const statusCode = res.statuscode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json(err.message) });
// });
// import express from "express";
// import dotenv from "dotenv";
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Serve ${process.env.NODE_ENV} at http://localhost:${port}`);
// });

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example ${NODE_ENV} app listening at http://localhost:${port}`.yellow.bold)
});
