import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModels.js";

const protect = expressAsyncHandler( async(req, res, next) => {

let token

// console.log(req.headers.authorization)
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
        token = req.headers.authorization.split(' ')[1]
        console.log(token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
     
        
        req.user =  await User.findById(decoded.id).select('-password')
        console.log(req.user)
    
    } catch (error) {
        console.log(error)
    }
}
if(!token){
    res.status(401)
    throw new Error('Not Authorized')
}
next()



})




export { protect };