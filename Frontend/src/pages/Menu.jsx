import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../restApi.json";
import { images } from "../assets/images";
import toast from "react-hot-toast";

const Menu = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  
  //  Get dishes from JSON safely
  const dishes = api.data[0].dishes;

  //  Get unique categories for the filter buttons
  const categories = ["All", ...new Set(dishes.map((dish) => dish.category))];

  useEffect(() => {
    const checkAuth = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const addToCart = (dish) => {
    const token = localStorage.getItem("token");

    if (!token || token === "null") {
      toast.error("Please login to place an order!");
      navigate("/login");
      return; 
    }

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = existingCart.findIndex(item => item.id === dish.id);

    let updatedCart = [...existingCart];
    if (existingItemIndex > -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ 
        id: dish.id, 
        name: dish.title, 
        price: dish.price, 
        image: dish.image, 
        category: dish.category, 
        quantity: 1 
      });
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
    toast.success(`${dish.title} added!`);
  };

  //  Filter the dishes based on selected category
  const filteredDishes = filter === "All" 
    ? dishes 
    : dishes.filter(dish => dish.category.toLowerCase() === filter.toLowerCase());

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          
          {/*  Category Filter Buttons */}
          <div className="filter_buttons">
            {categories.map((cat, index) => (
              <button 
                key={index}
                className={filter === cat ? "active_btn" : "filter_btn"}
                onClick={() => setFilter(cat)}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="dishes_container">
          {filteredDishes.map((element) => (
            <div className="card" key={element.id}>
              <img src={images[element.image]} alt={element.title} />
              {/* Category label inside the card */}
              <span className="category_label">{element.category}</span>
              <h3>{element.title}</h3>
              <p className="price">₹{element.price}</p>
              <button className="order_btn" onClick={() => addToCart(element)}>
                {isLoggedIn ? "Order Now" : "Login to Order"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;