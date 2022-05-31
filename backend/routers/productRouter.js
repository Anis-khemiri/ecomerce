
import express from 'express';
const productRouter = express.Router();

import {getProductById, getProducts} from '../contollers/productController.js'





// productRouter.get(
//     '/',
//     expressAsyncHandler(async (req, res) => {
//       // await Product.remove({});
//       const seller = await User.findOne({ isSeller: true });
//       if (seller) {
//         const product = Product.map((product) => ({
//           ...product,
//           seller: seller._id,
//         }));
//         const createdProducts = await Product.insertMany();
//         res.send({ createdProducts });
//       } else {
//         res
//           .status(500)
//           .send({ message: 'No seller found. first run /api/users/seed' });
//       }
//     })
//   );
  
// export default productRouter;


productRouter.route("/").get(getProducts); 


productRouter.route("/:id").get(getProductById);




  export default productRouter;