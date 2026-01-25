import { Order } from "../models/orderSchema.js"; // Ensure path is correct

export const placeOrderController = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: "Cart is empty" });
    }

    // Create new order in MongoDB
    const newOrder = await Order.create({
      user: req.user._id, // Assuming you have auth middleware
      items,
      totalAmount,
      status: "Pending"
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order: newOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error: Could not place order",
      error: error.message
    });
  }
};
// Backend/controller/order.js
export const getMyOrders = async (req, res, next) => {
  try {
    // req.user.id comes from your fixed isAuthenticated middleware
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    next(error);
  }
};