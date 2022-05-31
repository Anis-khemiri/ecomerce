import expressAsyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from '../models/userModels.js'


const authUser = expressAsyncHandler(async(req,res)=>{
    const {email, password} = req.body

    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),

        })
    }else{
        res.status(401)
        throw new Error("Invalid email or password");
    }
});


// for creating new user

const registerUser = expressAsyncHandler(async(req,res)=>{
    const {name, email, password} = req.body

    const userExist = await User.findOne({ email })
    if(userExist){
        res.status(400)
        throw new Error("user already exist")
    }
   const user = await User.create({
       name,
       email,
       password,
   })
   if (user){
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),

    })
   }else{
       res.status(400)
       throw new Error("Invalid user data")
   }
});


const getUserProfile = expressAsyncHandler(async(req, res)=> {
    // res.send('successfull calling')
    const user = await User.findById(req.user._id)
    console.log(req.user._id)
    if(user){
        
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            
           

        })
        
    }else{
        res.status(404)
        throw new Error('user Not found')
    }
})

export { authUser, getUserProfile, registerUser };