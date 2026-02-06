import React from "react";

const Carousel = () => {
  const names = [
    "NRI INSTITUTE OF TECHNOLOGY",
    "AUTONOMOUS",
    "NAAC A+",
    "SARITAM 2K26",
    "FEBRUARY 27TH & 28TH",
    "TECHNICAL EVENTS",
    "NON-TECHNICAL EVENTS",
    "SPORTS",
    "CULTURAL EVENTS",
    "MANAGERIAL EVENTS",
    "INNOVATE",
    "CREATE",
    "COMPETE",
    "CELEBRATE",
    "INSPIRE",
    "PERFORM",
    "LEAD",
    "EVOLVE",
  ];

  return (
    <div>
      <div className="carousel-container1">
        <div className="carousel-track1">
          {/* duplicate list for seamless loop */}
          {[...names, ...names].map((name, index) => (
            <div className="carousel-item1" key={index}>
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-container1 ca-co">
        <div className="carousel-track1 ca-tr">
          {/* duplicate list for seamless loop */}
          {[...names, ...names].map((name, index) => (
            <div className="carousel-item1 ca-it" key={index}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
