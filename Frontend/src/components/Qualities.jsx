import api from "../restApi.json";
import { images } from "../assets/images";


const Qualities = () => {
  const qualities = api.data[0].ourQualities;

  return (
    <section className="qualities">
      <h2>Our Qualities</h2>

      <div className="qualities-grid">
        {qualities.map((item) => (
          <div key={item.id} className="quality-card">
            <img
              src={images[item.image]}
              alt={item.title}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
