import express from "express";

import { isAuthenticated } from "../controller/auth.js"; 
import { placeOrderController , getMyOrders } from "../controller/order.js";

const router = express.Router();


router.post("/place", isAuthenticated, placeOrderController); 
router.get("/myorders", isAuthenticated, getMyOrders);
export default router;