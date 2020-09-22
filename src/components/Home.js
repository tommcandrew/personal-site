import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import gsap from "gsap";
const tl = gsap.timeline();

const Home = () => {
  useEffect(() => {
    tl.to(
      ".home__name",
      1,
      {
        opacity: 1,
        y: -10,
        ease: "Power2.ease-out",
      },
      "+=0.5"
    );
    tl.to(
      ".home__button",
      2,
      {
        opacity: 1,
        ease: "Power2.ease-out",
      },
      "+=0.5"
    );
  }, []);

  return (
    <div className="home__wrapper">
      <SocialIcons />
      <div className="home__content">
        <div className="home__name">
          <span>Tom</span> <span>McAndrew</span>
        </div>
        <div className="home__button--wrapper">
          <Link to="/portfolio" className="home__button">
            PORTFOLIO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
