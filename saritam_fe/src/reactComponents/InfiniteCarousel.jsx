import React from "react";
import "./InfiniteCarousel.css";

const InfiniteCarousel = ({ items, direction = "left" }) => {
  return (
    <div>
      <div className="carousel">
        <div className={`carousel-track ${direction}`}>
          {[...items, ...items].map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
