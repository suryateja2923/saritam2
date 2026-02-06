import React from "react";
import techEventsData from "./techData";
import { Link } from "react-router-dom";

const TechnicalEvents = () => {
  return (
    <section className="tech-section">
      <h2 className="heads tech-event-name">Technical Events</h2>

      <div className="tech-grid">
        {techEventsData.map((event, index) => (
          <div className="tech-card" key={index}>
            <img src={event.image} alt={event.name} />

            <div className="tech-content">
              <h3>{event.name}</h3>
              <p>{event.description}</p>

              <ul>
                {Object.entries(event.guidelines).map(([key, value], i) => (
                  <li key={i}>
                    <strong>{key}:</strong>{" "}
                    {Array.isArray(value) ? value.join(", ") : value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/registration"}>
        <button className="cta-btn tech-btn">Register</button>
      </Link>
    </section>
  );
};

export default TechnicalEvents;
