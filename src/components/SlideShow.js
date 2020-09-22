import React, { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slideshow = ({ slides }) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    setX(x === 0 ? -100 * (slides.length - 1) : x + 100);
  };

  const goRight = () => {
    setX(x === -100 * (slides.length - 1) ? 0 : x - 100);
  };

  return (
    <div className="slideshow__wrapper">
      <span className="slideshow__left-arrow" onClick={goLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      {slides &&
        slides.map((src, index) => (
          <div
            key={index}
            className="slideshow__slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            <img src={src} alt="slide" className="slideshow__slide-image"></img>
          </div>
        ))}
      <span className="slideshow__right-arrow" onClick={goRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </div>
  );
};

export default Slideshow;
