import React from "react";
import data from "../restApi.json";
import { images } from "../assets/images";

const Team = () => {
  const teamData = data.data[0].team;

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Meet the experts behind our delicious flavors and exceptional service.
          </p>
        </div>
        <div className="team_container">
          {teamData.map((element) => {
            return (
              <div className="card" key={element.id}>
                {/* Map image key from JSON to imported images */}
                <img src={images[element.image]} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;