import api from "../restApi.json";
import { images } from "../assets/images";
import toast from "react-hot-toast"; // Ensure toast is imported

const Menu = () => {
  const dishes = api.data[0].dishes;

  // 1. Move the function INSIDE the component so it has proper scope
  const addToCart = (dish) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const newItem = {
      name: dish.title, 
      price: dish.price,
      id: dish.id
    };

    const updatedCart = [...existingCart, newItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success(`${dish.title} added to your order!`);
  };

  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <div className="dishes_container">
        {dishes.map((element) => (
          <div className="card" key={element.id}>
            <img src={images[element.image]} alt={element.title} />
            <h3>{element.title}</h3>
            {/* Display the price if you want it to show on the card */}
            <p>₹{element.price}</p> 
            
            <div className="button_group">
              <button className="category_btn">{element.category}</button>
              
              {/* 2. ADD THIS BUTTON to trigger the function */}
              <button 
                className="order_btn" 
                onClick={() => addToCart(element)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;