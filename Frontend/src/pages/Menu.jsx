import { useState } from "react";
import api from "../restApi.json";
import { images } from "../assets/images";

const Menu = () => {
  const [filter, setFilter] = useState("All");
  const dishes = api.data[0].dishes;

  // Filter logic
  const filteredDishes = filter === "All" 
    ? dishes 
    : dishes.filter(dish => dish.category === filter);

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>Explore our wide variety of delicious meals.</p>
        </div>

        {/* Category Buttons */}
        <div className="filter-buttons">
          {["All", "Breakfast", "Lunch", "Drinks"].map(category => (
            <button 
              key={category} 
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="dishes_container">
          {filteredDishes.map((element) => (
            <div className="card" key={element.id}>
              <img src={images[element.image]} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;