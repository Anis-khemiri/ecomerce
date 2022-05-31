
import { authUser, registerUser, getUserProfile } from '../contollers/userContoller.js'
import { protect } from '../middleware/authMiddleware.js'

import express from 'express';
const userRouter = express.Router();




userRouter.route('/').post(registerUser)
userRouter.post('/login', authUser)
userRouter.route('/profile').get(protect, getUserProfile)







  export default userRouter;