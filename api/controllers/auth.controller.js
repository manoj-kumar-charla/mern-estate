import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const auth = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    next({ message: "All fields are reqired" });
    return;
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    const newUser = new User({
      username: username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json("user created successfully!!");
  } catch (error) {
    // return new Error();
    console.log(error);

    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // console.log(email, password);
    
    const validUser = await User.findOne({ email });
    // console.log(validUser);
    
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return next(errorHandler(405, "Incorrect Credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password : pass, ...rest} = validUser._doc; // try without _doc to understand
    res
      .cookie("access_token" /* is a name of token */, token, {
        httpOnly: true,
      })
      .status(201)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
