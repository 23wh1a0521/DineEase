import api from "../restApi.json";
import { images } from "../assets/images";

const Menu = () => {
  const dishes = api.data[0].dishes;

  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <div className="dishes_container">
        {dishes.map((element) => (
        <div className="card" key={element.id}>
        <img src={images[element.image]} alt={element.title} />
        <h3>{element.title}</h3>
        <button>{element.category}</button>
      </div>
  ))}
</div>
    </section>
  );
};

export default Menu;
