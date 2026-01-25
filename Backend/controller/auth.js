import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";

export const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  // Extract token from "Bearer <token>"
  const token = (authHeader && authHeader.startsWith("Bearer ")) 
    ? authHeader.split(" ")[1] 
    : req.cookies?.token;

  if (!token || token === "undefined") {
    return next(new ErrorHandler("User not authenticated!", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid or expired token.", 401));
  }
};