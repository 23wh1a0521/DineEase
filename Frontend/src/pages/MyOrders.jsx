import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); // Use the token you fixed
        const { data } = await axios.get("http://localhost:4000/api/v1/order/myorders", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        });
        setOrders(data.orders);
      } catch (error) {
        toast.error("Failed to fetch order history");
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="order-container">
      <h2>Your Order History</h2>
      <div className="order-card">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className="order-item" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <strong>Order ID: {order._id.slice(-6)}</strong>
                <span className="status-badge">{order.status}</span>
              </div>
              <p style={{fontSize: '12px', color: '#666'}}>
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <div style={{margin: '10px 0'}}>
                {order.items.map((item, index) => (
                  <span key={index}>{item.name} (x{item.quantity}){index !== order.items.length - 1 && ", "}</span>
                ))}
              </div>
              <strong style={{color: '#2d9d78'}}>Total: ₹{order.totalAmount}</strong>
            </div>
          ))
        ) : (
          <p style={{textAlign: 'center'}}>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;