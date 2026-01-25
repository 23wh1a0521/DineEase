import express from "express";
// 1. Change 'isAuthorized' to 'isAuthenticated'
import { isAuthenticated } from "../controller/auth.js"; 
import { placeOrderController , getMyOrders } from "../controller/order.js";

const router = express.Router();

// 2. Use the correct middleware name in the route
router.post("/place", isAuthenticated, placeOrderController); 
router.get("/myorders", isAuthenticated, getMyOrders);
export default router;