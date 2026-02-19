import { User } from "../models/userSchema.js";
import ErrorHandler from "../error/error.js";
import bcrypt from "bcryptjs";

// REGISTRATION
export const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new ErrorHandler("Please fill all fields!", 400));
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return next(new ErrorHandler("User already registered!", 400));

    const user = await User.create({ name, email, password });
    res.status(201).json({ success: true, message: "User Registered!" });
  } catch (error) {
    next(error);
  }
};

// LOGIN
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Provide email and password!", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) return next(new ErrorHandler("Invalid email or password!", 401));

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) return next(new ErrorHandler("Invalid email or password!", 401));

    const token = user.getJWTToken(); 

    res.status(200).json({ 
      success: true, 
      message: `Welcome back, ${user.name}!`,
      user: {
      name: user.name, // Send the name back to frontend
      email: user.email
    },
      token // Sending the token to the frontend
    });
    // ---------------------
    
  } catch (error) {
    next(error);
  }
};