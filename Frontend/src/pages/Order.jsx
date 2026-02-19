import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart data correctly on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
      } catch (err) {
        console.error("Error parsing cart", err);
        setCartItems([]);
      }
    }
  }, []);

  // Centralized function to update state and storage
  const syncCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
  };

  // Update quantity logic
  const updateQuantity = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const currentQty = Number(item.quantity) || 1; 
        return { ...item, quantity: Math.max(0, currentQty + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0);

    syncCart(updatedCart);
  };

  // Calculate total amount
  const calculateTotal = () => {
  return cartItems.reduce((acc, item) => {
    // Strip non-numeric characters like '₹' and ensure it's a number
    const price = Number(String(item.price).replace(/[^\d.]/g, "")) || 0;
    const qty = Number(item.quantity) || 1; 
    return acc + (price * qty);
  }, 0);
};

  // Handle Order Placement
  const handlePlaceOrder = async () => {
    const token = localStorage.getItem("token");

    // Prevent request if token is missing or invalid
    if (!token || token === "undefined") {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/order/place",
        { items: cartItems, totalAmount: calculateTotal() },
        { 
          headers: { Authorization: `Bearer ${token}` }, // Sending token in header
          withCredentials: true 
        }
      );

      if (data.success) {
        toast.success(data.message);
        setCartItems([]);
        localStorage.removeItem("cart"); // Clear storage on success
        window.dispatchEvent(new Event("storage"));
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Order placement failed");
    }
  };

 
  return (
    <div className="order-container">
      <h2>Review Your Order</h2>
      <div className="order-card">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>₹{item.price} each</p>
              </div>
              
              <div className="qty-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>

              <div className="item-price">
                <strong>₹{(Number(String(item.price).replace(/[^\d.]/g, "")) || 0) * (Number(item.quantity) || 1)}</strong>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", padding: "20px", opacity: 0.6 }}>
            Your cart is empty.
          </p>
        )}

        <div className="order-summary">
          <h3>Total Amount</h3>
          <span>₹{calculateTotal()}</span>
        </div>

        <button 
          className="confirm-btn" 
          onClick={handlePlaceOrder}
          disabled={cartItems.length === 0}
        >
          Confirm & Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;