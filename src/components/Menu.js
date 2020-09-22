import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import gsap from "gsap";
const tl = gsap.timeline();

const Menu = ({ handleCloseMenu, location }) => {
  useEffect(() => {
    tl.to(".menu__link", 0.5, {
      opacity: 1,
      ease: "Power2.ease-out",
      stagger: 0.1,
    });
  }, []);

  return (
    <div id="menu" className="menu__wrapper">
      <div className="menu__links" onClick={handleCloseMenu}>
        <div
          className={`menu__link ${
            location.pathname === "/" ? "menu__current" : ""
          }`}
        >
          <Link to="/">home</Link>
        </div>
        <div
          className={`menu__link ${
            location.pathname === "/portfolio" ? "menu__current" : ""
          }`}
        >
          <Link to="/portfolio">portfolio</Link>
        </div>
        <div
          className={`menu__link ${
            location.pathname === "/blog" ? "menu__current" : ""
          }`}
        >
          <Link to="/blog">blog</Link>
        </div>
        <div
          className={`menu__link ${
            location.pathname === "/contact" ? "menu__current" : ""
          }`}
        >
          <Link to="/contact">contact</Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Menu);
