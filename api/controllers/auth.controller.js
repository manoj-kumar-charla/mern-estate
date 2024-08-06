import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const auth = async (req, res, next) => {
  const {username, email, password} = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    const newUser = new User({username: username, email, password: hashedPassword});
    await newUser.save();
    res.status(201).json("user created successfully!!");
  } catch (error) {
    // return new Error();
    console.log(error);
    
    next(error);
  }
}